"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clipboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ClipboardModal({ isOpen, onClose, content, onRecognize }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleIgnore = () => {
    if (dontShowAgain) {
      localStorage.setItem('bj_clipboard_disabled', 'true');
    }
    onClose();
  };

  const handleRecognize = () => {
    if (dontShowAgain) {
      localStorage.setItem('bj_clipboard_disabled', 'true');
    }
    if (onRecognize) {
      onRecognize(content);
    }
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleIgnore}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="close-icon-btn" onClick={handleIgnore}><X size={18} color="#94a3b8" /></button>

        <div className="modal-header">
          <div className="icon-circle">
            <Clipboard size={18} color="white" />
          </div>
          <div className="header-text">
            <h2>检测到粘贴板内容</h2>
            <p>检测到粘贴板中有新内容，是否要将其识别为学习计划？</p>
          </div>
        </div>

        <div className="preview-section">
          <label>内容预览：</label>
          <div className="text-viewer">
            {content}
          </div>
        </div>

        <div className="modal-footer">
          <div className="checkbox-area">
            <input 
              type="checkbox" 
              id="dontShow" 
              checked={dontShowAgain}
              onChange={e => setDontShowAgain(e.target.checked)}
            />
            <label htmlFor="dontShow">不再弹出</label>
          </div>
          
          <div className="action-btns">
            <button className="btn-ignore" onClick={handleIgnore}>
              <X size={16} /> 忽略
            </button>
            <button className="btn-recognize" onClick={handleRecognize}>
              <Sparkles size={16} /> 识别为学习计划
            </button>
          </div>
        </div>

        <style jsx>{`
          .modal-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(5px);
            display: flex; align-items: center; justify-content: center; z-index: 100000;
            padding: 1.5rem;
          }
          .modal-content {
            background: white; width: 100%; max-width: 500px;
            border-radius: 20px; padding: 2.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            position: relative;
            animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          
          .close-icon-btn {
            position: absolute; top: 1.5rem; right: 1.5rem;
            background: #f1f5f9; border: none; cursor: pointer; padding: 0.5rem;
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            transition: 0.2s;
          }
          .close-icon-btn:hover { background: #e2e8f0; transform: rotate(90deg); }

          .modal-header { display: flex; gap: 1.25rem; margin-bottom: 2rem; align-items: center; }
          .icon-circle {
            width: 44px; height: 44px; border-radius: 14px;
            background: #7C3AED; display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; box-shadow: 0 8px 16px rgba(124, 58, 237, 0.2);
          }
          .header-text h2 { font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-bottom: 0.25rem; }
          .header-text p { font-size: 0.9rem; color: #64748b; font-weight: 500; line-height: 1.4; }

          .preview-section { margin-bottom: 2rem; }
          .preview-section label { display: block; font-size: 0.95rem; font-weight: 800; color: #1e293b; margin-bottom: 0.8rem; }
          .text-viewer {
            background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 16px;
            padding: 1.25rem; min-height: 120px; color: #475569; font-size: 1rem;
            line-height: 1.6; word-break: break-all; font-weight: 600;
          }

          .modal-footer { 
            display: flex; justify-content: space-between; align-items: center;
            margin-top: 0.5rem;
          }
          .checkbox-area { display: flex; align-items: center; gap: 0.6rem; }
          .checkbox-area input { width: 18px; height: 18px; cursor: pointer; accent-color: #7C3AED; border-radius: 4px; }
          .checkbox-area label { font-size: 0.95rem; color: #64748b; font-weight: 700; cursor: pointer; }

          .action-btns { display: flex; gap: 0.75rem; }
          button { 
            padding: 0.75rem 1.25rem; border-radius: 12px; font-weight: 800; 
            font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;
            transition: 0.2s;
          }
          .btn-ignore { background: #f8fafc; border: 1.5px solid #e2e8f0; color: #64748b; }
          .btn-ignore:hover { background: #f1f5f9; border-color: #cbd5e1; }
          
          .btn-recognize { 
            background: linear-gradient(135deg, #6366f1 0%, #7c3aed 100%); 
            border: none; color: white;
            box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
          }
          .btn-recognize:hover { transform: translateY(-2px); box-shadow: 0 15px 25px -5px rgba(124, 58, 237, 0.4); }
        `}</style>
      </motion.div>
    </div>,
    document.body
  );
}
