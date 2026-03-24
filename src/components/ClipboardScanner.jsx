"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
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
      if (localStorage.getItem('bj_clipboard_disabled') === 'true') return;

      // Check for clipboard permission first (if supported)
      if (navigator.permissions && navigator.permissions.query) {
        const result = await navigator.permissions.query({ name: 'clipboard-read' });
        if (result.state === 'denied') {
          console.log('Clipboard permission denied');
          return;
        }
      }

      const text = await navigator.clipboard.readText();
      console.log('Clipboard check:', text ? 'got text' : 'empty');
      
      if (!text || text.trim() === '') return;
      
      if (text !== lastProcessedText.current) {
        console.log('New content detected! Showing modal...');
        setClipboardContent(text);
        setShowModal(true);
        lastProcessedText.current = text;
        localStorage.setItem('bj_last_clipboard', text);
      }
    } catch (err) {
      console.error('Clipboard error:', err);
    }
  }, []);

  useEffect(() => {
    // Check on initial load
    checkClipboard();

    // Check every time the window gets focus
    window.addEventListener('focus', checkClipboard);
    
    // Optional: periodic check if focused (e.g. every 5s)
    const interval = setInterval(() => {
      if (document.hasFocus()) checkClipboard();
    }, 5000);

    return () => {
      window.removeEventListener('focus', checkClipboard);
      clearInterval(interval);
    };
  }, [checkClipboard]);

  return (
    <>
      <ClipboardModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        content={clipboardContent}
        onRecognize={() => {
          setShowModal(false);
          setShowAIModal(true);
        }}
      />
      {showAIModal && (
        <AIGeneratorModal 
          isOpen={showAIModal} 
          onClose={() => setShowAIModal(false)} 
          initialPrompt={clipboardContent}
        />
      )}
    </>
  );
}
