"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence } from 'framer-motion';
import { usePet, ALL_PET_TYPES } from '@/hooks/useGamification';
import { PET_LEVELS } from '@/constants/rules';
import { Trophy } from 'lucide-react';

export default function EvolutionModal() {
  const { evolutionEvent, clearEvolutionEvent } = usePet();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (evolutionEvent) {
      setShow(true);
    }
  }, [evolutionEvent]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [show]);

  if (!evolutionEvent || !mounted) return null;

  const { typeId, oldLevel, newLevel, petName, gender } = evolutionEvent;
  const petType = ALL_PET_TYPES.find(t => t.id === typeId);
  const newLevelInfo = PET_LEVELS.find(l => l.level === newLevel);
  const oldLevelInfo = PET_LEVELS.find(l => l.level === oldLevel);

  // Correct path for evolutionary images
  const isEvolutionary = petType?.isEvolutionary ?? true;
  const petImage = `/pets/${typeId}_lv${newLevel}.png`;

  const elementColors = {
    '火': '#EF4444', '水': '#3B82F6', '机械': '#64748B', '自然': '#10B981', '光': '#F59E0B', '暗': '#6366F1', '电': '#EAB308'
  };
  const themeColor = elementColors[petType?.element] || '#F59E0B';
  const themeGradient = `linear-gradient(135deg, ${themeColor}, #00000000)`; // Simplified for dynamic

  const modalContent = (
    <AnimatePresence>
      {show && (
        <div className="evolution-overlay">
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="evolution-backdrop"
          />
          
          <div className="evolution-content-wrapper">
            <m.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="evolution-flash"
            />

            <m.div
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="evolution-card"
            >
              <div className="card-header">
                <m.div
                  animate={{ rotate: [0, -15, 15, -15, 0] }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Trophy size={64} color="#F59E0B" strokeWidth={2.5} />
                </m.div>
                <h2>进化成功！</h2>
                <p className="subtitle">{petName} 已经突破了瓶颈</p>
              </div>

              <div className="visual-stage">
                <div className="glow-burst" />
                <m.div
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 2.5, repeat: Infinity }
                  }}
                  className="pet-showcase"
                >
                  <img 
                    src={petImage} 
                    alt="Evolved Pet" 
                    className="evolved-img" 
                    onError={(e) => { 
                      if (e.target.src !== window.location.origin + '/pets/fire_dragon_lv1.png') {
                        e.target.src = '/pets/fire_dragon_lv1.png'; 
                      }
                    }}
                  />
                </m.div>
              </div>

              <div className="evolution-stats">
                <div className="stage-badges">
                  <span className="badge old">{oldLevelInfo?.name || '初始态'}</span>
                  <div className="arrow-line">→</div>
                  <span className="badge new">{newLevelInfo?.name}</span>
                </div>
                <div className="congrats-text">
                  形态已变为 <span className="highlight" style={{ color: themeColor }}>{newLevelInfo?.name}</span>
                </div>
              </div>

              <button className="confirm-btn" onClick={() => {
                setShow(false);
                setTimeout(clearEvolutionEvent, 300);
              }}>
                看我的！
              </button>
            </m.div>
          </div>

          <style jsx global>{`
            .evolution-overlay {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              z-index: 200000 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .evolution-backdrop {
              position: absolute !important;
              inset: 0 !important;
              background: rgba(0, 0, 0, 0.85) !important;
              backdrop-filter: blur(15px) !important;
              z-index: -1 !important;
            }
            .evolution-content-wrapper {
              position: relative !important;
              z-index: 200001 !important;
              width: 100% !important;
              max-width: 380px !important;
              padding: 20px !important;
              display: flex !important;
              justify-content: center !important;
            }
            .evolution-flash {
              position: fixed !important;
              inset: 0 !important;
              background: white !important;
              z-index: 200005 !important;
              pointer-events: none !important;
            }
            .evolution-card {
              background: white !important;
              width: 100% !important;
              border-radius: 40px !important;
              padding: 2.5rem 1.5rem !important;
              text-align: center !important;
              box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6) !important;
            }
            .card-header h2 {
              font-size: 2rem !important;
              font-weight: 900 !important;
              background: ${themeGradient} !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              margin: 1.2rem 0 0.5rem !important;
            }
            .subtitle { color: #64748b !important; font-size: 0.95rem !important; margin-bottom: 1.5rem !important; font-weight: 600 !important; }

            .visual-stage {
              height: 180px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              position: relative !important;
              margin-bottom: 2rem !important;
            }
            .glow-burst {
              position: absolute !important;
              width: 240px !important;
              height: 240px !important;
              background: radial-gradient(circle, ${themeColor}66 0%, transparent 70%) !important;
              border-radius: 50% !important;
              animation: evo-pulse 3s infinite ease-in-out !important;
            }
            .pet-showcase { position: relative !important; z-index: 2 !important; width: 160px !important; height: 160px !important; display: flex !important; align-items: center !important; justify-content: center !important; }
            .evolved-img { width: 100% !important; height: 100% !important; object-fit: contain !important; filter: drop-shadow(0 0 25px rgba(245, 158, 11, 0.5)) !important; }

            .evolution-stats { margin-bottom: 2rem !important; }
            .stage-badges { display: flex !important; align-items: center !important; justify-content: center !important; gap: 1rem !important; margin-bottom: 1rem !important; }
            .badge { padding: 0.5rem 1rem !important; border-radius: 99px !important; font-weight: 800 !important; font-size: 0.85rem !important; }
            .badge.old { background: #f1f5f9 !important; color: #94a3b8 !important; text-decoration: line-through !important; }
            .badge.new { background: ${themeColor}22 !important; color: ${themeColor} !important; box-shadow: 0 0 25px ${themeColor}66 !important; border: 2px solid ${themeColor}44 !important; }
            .arrow-line { color: #cbd5e1 !important; font-weight: 900 !important; font-size: 1.2rem !important; }
            .congrats-text { font-size: 1.1rem !important; color: #1e293b !important; font-weight: 800 !important; }
            .highlight { color: #ef4444 !important; }

            .confirm-btn {
              width: 100% !important;
              padding: 1rem !important;
              background: #1e293b !important;
              color: white !important;
              border: none !important;
              border-radius: 20px !important;
              font-weight: 900 !important;
              font-size: 1.1rem !important;
              cursor: pointer !important;
              transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
              box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
            }
            .confirm-btn:hover { background: #0f172a !important; transform: translateY(-4px) scale(1.02) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important; }
            .confirm-btn:active { transform: translateY(0) scale(0.98) !important; }

            @keyframes evo-pulse {
              0% { transform: scale(0.8); opacity: 0.2; }
              50% { transform: scale(1.15); opacity: 0.6; }
              100% { transform: scale(0.8); opacity: 0.2; }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
