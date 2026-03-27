"use client";

import { X, Check, Heart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AdoptPetModal({ isOpen, onClose, petType, onConfirm }) {
  const [gender, setGender] = useState('male');
  const [name, setName] = useState(`我的${petType?.name || ''}`);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!mounted || !isOpen || !petType) return null;

  const modalContent = (
    <div className="modal-overlay" style={{
      position: 'fixed', inset: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000000, padding: '20px'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="modal-container"
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '40px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px -12px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{ 
          padding: '1.5rem 2rem', borderBottom: '1px solid #f1f5f9',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b', margin: 0 }}>领养新伙伴</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}>
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{ padding: '2.5rem 2rem', maxHeight: '70vh', overflowY: 'auto' }}>
          <div className="pet-preview" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div className={`preview-circle ${gender}`} style={{
              width: '140px', height: '140px', borderRadius: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: gender === 'male' ? '#eff6ff' : '#fdf2f8', padding: '1.5rem'
            }}>
              <img 
                src={(petType.isEvolutionary ?? true) ? `/pets/${petType.id}_lv1.png` : `/pets/${petType.id}.png`} 
                alt="Preview" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </div>
            <div style={{ background: '#fef3c7', color: '#b45309', fontSize: '0.75rem', fontWeight: 900, padding: '0.3rem 0.8rem', borderRadius: '8px' }}>
              {petType.rarity.toUpperCase()}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: '#64748b', marginBottom: '0.6rem' }}>给它取个名字吧</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="输入名字..."
              autoFocus
              style={{ width: '100%', background: '#f8fafc', border: '2px solid #e2e8f0', padding: '1rem 1.2rem', borderRadius: '18px', fontWeight: 700, outline: 'none' }}
            />
          </div>

          <div style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 800, color: '#64748b', marginTop: '1rem' }}>
            消耗 <span style={{ color: '#f59e0b', fontSize: '1.2rem' }}>⭐ {petType.cost}</span> 星星
          </div>
        </div>

        {/* Footer - No gaps now */}
        <div style={{ 
          padding: '1.5rem 2rem', background: '#f8fafc', 
          display: 'flex', gap: '1rem', borderTop: '1px solid #f1f5f9' 
        }}>
          <button onClick={onClose} style={{ flex: 1, padding: '1.1rem', borderRadius: '18px', border: 'none', background: '#e2e8f0', color: '#64748b', fontWeight: 800, cursor: 'pointer' }}>取消</button>
          <button onClick={() => onConfirm(name, gender)} style={{ flex: 2, padding: '1.1rem', borderRadius: '18px', border: 'none', background: '#1e293b', color: 'white', fontWeight: 800, cursor: 'pointer' }}>立即领养</button>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
