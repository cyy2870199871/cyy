"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ClipboardModal from './Modals/ClipboardModal';
import AIGeneratorModal from './Modals/AIGeneratorModal';

export default function ClipboardScanner() {
  const [showModal, setShowModal] = useState(false);
  const [clipboardContent, setClipboardContent] = useState('');
  const [showAIModal, setShowAIModal] = useState(false);
  const lastProcessedText = useRef('');

  // Load last seen from localStorage to ensure persistence across refreshes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      lastProcessedText.current = localStorage.getItem('bj_last_clipboard') || '';
    }
  }, []);

  const checkClipboard = useCallback(async () => {
    // Only proceed if document is focused to avoid background interference
    if (!document.hasFocus()) return;

    try {
      if (localStorage.getItem('bj_clipboard_disabled') === 'true') {
        console.log('[Clipboard] Monitoring disabled via localStorage');
        return;
      }

      // Check for clipboard permission first (if supported)
      if (typeof navigator !== 'undefined' && navigator.permissions && navigator.permissions.query) {
        try {
          const result = await navigator.permissions.query({ name: 'clipboard-read' });
          if (result.state === 'denied') {
            console.warn('[Clipboard] Permission denied by browser');
            return;
          }
        } catch (pErr) {
          // Some browsers might not support the 'clipboard-read' query
          console.debug('[Clipboard] Permission query not supported, proceeding to read attempt');
        }
      }

      const text = await navigator.clipboard.readText();
      
      if (!text || text.trim() === '') {
        console.debug('[Clipboard] Empty or whitespace content ignored');
        return;
      }
      
      if (text !== lastProcessedText.current) {
        console.info('[Clipboard] New unique content detected:', text.substring(0, 20) + '...');
        setClipboardContent(text);
        setShowModal(true);
        lastProcessedText.current = text;
        localStorage.setItem('bj_last_clipboard', text);
      }
    } catch (err) {
      console.error('[Clipboard] Failed to read clipboard:', err);
    }
  }, []);

  useEffect(() => {
    // Check on initial load after a short delay to ensure hydration
    const timer = setTimeout(checkClipboard, 1000);

    // Check every time the window gets focus
    window.addEventListener('focus', checkClipboard);
    
    // Periodic check every 5s if tab is active
    const interval = setInterval(() => {
      if (document.hasFocus()) checkClipboard();
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('focus', checkClipboard);
      clearInterval(interval);
    };
  }, [checkClipboard]);

  const handleRecognize = () => {
    console.log('[Clipboard] Recognized, opening AI Generator...');
    setShowModal(false);
    // Use a small timeout to let the first modal animate out
    setTimeout(() => setShowAIModal(true), 100);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <ClipboardModal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            content={clipboardContent}
            onRecognize={handleRecognize}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAIModal && (
          <AIGeneratorModal 
            isOpen={showAIModal} 
            onClose={() => setShowAIModal(false)} 
            initialPrompt={clipboardContent}
          />
        )}
      </AnimatePresence>
    </>
  );
}
