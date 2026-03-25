"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Palette } from 'lucide-react';
import { useApp } from '@/hooks/useAppContext';
import { THEMES } from '@/components/ThemeInjector';
import { useEffect, useState } from 'react';

export default function ThemePickerModal({ isOpen, onClose }) {
  const { theme, setTheme } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSelect = (t) => {
    setTheme(t);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div key="theme-modal-overlay" className="modal-overlay" onClick={onClose}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="modal-content card"
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="title-area">
                  <div className="icon-wrapper">
                    <Palette size={24} color={THEMES[theme]?.color || '#3B82F6'} />
                  </div>
                  <h2>个性色彩搭配</h2>
                </div>
                <button type="button" className="close-btn" onClick={onClose}><X size={20} /></button>
              </div>

              <div className="modal-body custom-scrollbar">
                <p className="subtitle">选择符合您今天心情的专属主题色：</p>
                <div className="theme-grid">
                  {Object.entries(THEMES).map(([tKey, tConf]) => (
                    <motion.button 
                      key={tKey}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`theme-card ${theme === tKey ? 'active' : ''}`}
                      onClick={() => handleSelect(tKey)}
                      style={{ 
                        '--card-color': tConf.color, 
                        borderColor: theme === tKey ? tConf.color : 'transparent',
                        backgroundColor: theme === tKey ? `${tConf.color}0D` : '#f8fafc'
                      }}
                    >
                      <div className="color-circle" style={{ backgroundColor: tConf.color }}>
                         {theme === tKey && <Check size={16} color="white" strokeWidth={3} />}
                      </div>
                      <span className="theme-name">{tConf.name}</span>
                      <span className="theme-emoji">{tConf.icon}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; z-index: 3000;
          padding: 1rem;
        }
        .modal-content {
          background: white; width: 100%; max-width: 540px;
          border-radius: 32px; display: flex; flex-direction: column;
          max-height: 90vh; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }
        .modal-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.5rem 2rem 1rem; border-bottom: 1px solid #f1f5f9;
        }
        .title-area { display: flex; align-items: center; gap: 1rem; }
        .icon-wrapper { width: 44px; height: 44px; border-radius: 14px; background: #f8fafc; display: flex; align-items: center; justify-content: center; }
        .modal-header h2 { font-size: 1.3rem; font-weight: 800; color: #1e293b; margin: 0; }
        .close-btn { background: #f1f5f9; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; color: #64748b; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .close-btn:hover { background: #e2e8f0; color: #1e293b; transform: scale(1.05); }

        .modal-body { padding: 1.5rem 2rem 2.5rem; overflow-y: auto; }
        .subtitle { font-size: 0.95rem; font-weight: 600; color: #64748b; margin-bottom: 1.5rem; }
        
        .theme-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        
        .theme-card {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 0.5rem; padding: 1.25rem 0.5rem; border: 2px solid transparent;
          border-radius: 20px; cursor: pointer; transition: all 0.2s ease;
          background: #f8fafc;
        }
        .theme-card:hover { background: #f1f5f9; }
        .theme-card.active { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        
        .color-circle {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 0.25rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .theme-name { font-size: 0.85rem; font-weight: 800; color: #1e293b; }
        .theme-emoji { font-size: 1.2rem; }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </>
  );
}
