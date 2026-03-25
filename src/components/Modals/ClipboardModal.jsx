"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clipboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ClipboardModal({ isOpen, onClose, content, onRecognize }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

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

  return (
    <div className="modal-overlay" onClick={handleIgnore}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleIgnore}>
          <X size={20} color="var(--text-muted)" />
        </button>

        <div className="modal-header">
          <div className="icon-box">
            <Clipboard size={24} color="var(--primary)" />
          </div>
          <div className="header-info">
            <h2>发现新内容</h2>
            <p>我们要把它加入明天的学习计划吗？</p>
          </div>
        </div>

        <div className="content-preview">
          <div className="preview-label">
            <span>剪贴板内容</span>
            <Sparkles size={14} color="var(--primary)" />
          </div>
          <div className="text-box">
            {content}
          </div>
        </div>

        <div className="modal-footer">
          <label className="no-more-label">
            <input 
              type="checkbox" 
              checked={dontShowAgain}
              onChange={e => setDontShowAgain(e.target.checked)}
            />
            不再提醒
          </label>
          
          <div className="footer-actions">
            <button className="btn-secondary" onClick={handleIgnore}>忽略</button>
            <button className="btn-primary" onClick={handleRecognize}>
              立即识别 <Sparkles size={16} />
            </button>
          </div>
        </div>

        <style jsx>{`
          :global(.modal-overlay) {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.4) !important; 
            backdrop-filter: blur(8px) !important;
            display: flex !important; align-items: center !important; justify-content: center !important; 
            z-index: 99999 !important;
            padding: 1.5rem;
          }
          :global(.modal-content) {
            background: white !important; width: 100% !important; max-width: 460px !important;
            border-radius: 32px !important; padding: 2.5rem !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2) !important;
            position: relative; border: 1px solid rgba(255,255,255,0.8);
          }
          :global(.modal-content .close-btn) {
            position: absolute; top: 1.5rem; right: 1.5rem;
            background: var(--bg-main); border: none; cursor: pointer;
            width: 36px; height: 36px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            transition: 0.2s;
          }
          :global(.modal-content .close-btn:hover) { background: #e2e8f0; transform: rotate(90deg); }

          .modal-header { display: flex; gap: 1.25rem; margin-bottom: 2rem; align-items: center; }
          .icon-box {
            width: 52px; height: 52px; border-radius: 18px;
            background: var(--primary-light); display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }
          .header-info h2 { font-size: 1.25rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.2rem; }
          .header-info p { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; }

          .content-preview { margin-bottom: 2rem; }
          .preview-label { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
          .preview-label span { font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
          .text-box {
            background: var(--bg-main); border: 2px solid var(--border); border-radius: 20px;
            padding: 1.25rem; min-height: 100px; max-height: 200px; overflow-y: auto;
            color: var(--text-main); font-size: 0.95rem; line-height: 1.6;
            font-weight: 600; white-space: pre-wrap; word-break: break-all;
          }

          .modal-footer { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
          .no-more-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem; color: var(--text-muted); font-weight: 700; }
          .no-more-label input { width: 16px; height: 16px; accent-color: var(--primary); }

          .footer-actions { display: flex; gap: 0.75rem; }
          button { 
            padding: 0.75rem 1.5rem; border-radius: 16px; font-weight: 800; 
            font-size: 0.9rem; cursor: pointer; transition: 0.2s; display: flex; align-items: center; gap: 0.5rem;
          }
          .btn-secondary { background: var(--bg-main); border: 1.5px solid var(--border); color: var(--text-muted); }
          .btn-secondary:hover { background: #f1f5f9; border-color: #cbd5e1; }
          .btn-primary { 
            background: var(--gender-gradient); border: none; color: white;
            box-shadow: 0 10px 15px -3px var(--gender-shadow);
          }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 25px -5px var(--gender-shadow); }
        `}</style>
      </motion.div>
    </div>
  );
}
