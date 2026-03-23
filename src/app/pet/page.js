"use client";

import { useApp } from "@/hooks/useAppContext";
import { usePet, ALL_PET_TYPES } from "@/hooks/useGamification";
import { ChevronLeft, Edit2, Heart, Soup, Bath, TreePine, BedDouble, Info, Lock, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PetPage() {
  const { user } = useApp();
  const { pet, myPets, interact, renamePet, levelName, unlockPet, switchPet } = usePet();
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(pet.name);
  const [actionFeedback, setActionFeedback] = useState(null);

  const handleRename = () => {
    if (newName.trim()) {
      renamePet(newName);
      setIsEditingName(false);
    }
  };

  const handleAction = (type, label) => {
    const success = interact(type);
    if (success) {
      setActionFeedback(label);
      setTimeout(() => setActionFeedback(null), 2000);
    }
  };

  const stats = [
    { label: '饱腹', value: Number(pet.fullness) || 0, color: '#F59E0B' },
    { label: '清洁', value: Number(pet.cleanliness) || 0, color: '#3B82F6' },
    { label: '心情', value: Number(pet.mood) || 0, color: '#EC4899' },
  ];

  const actions = [
    { type: 'feed', label: '喂食', icon: Soup, cost: 10, color: '#F59E0B' },
    { type: 'wash', label: '洗香香', icon: Bath, cost: 15, color: '#3B82F6' },
    { type: 'play', label: '去公园', icon: TreePine, cost: 20, color: '#10B981' },
    { type: 'sleep', label: '睡觉', icon: BedDouble, cost: 8, color: '#8B5CF6' },
  ];

  const currentType = ALL_PET_TYPES.find(t => t.id === pet.typeId) || ALL_PET_TYPES[0];

  const rarityConfig = {
    common: { label: '普通', color: '#64748b', bg: '#f1f5f9' },
    rare: { label: '稀有', color: '#3b82f6', bg: '#eff6ff' },
    epic: { label: '史诗', color: '#a855f7', bg: '#f5f3ff' },
    legendary: { label: '传说', color: '#f59e0b', bg: '#fffbeb' },
    mythical: { label: '神话', color: '#ec4899', bg: '#fdf2f8' },
  };

  const getRarityStyle = (rarity) => {
    switch(rarity) {
      case 'rare': return { filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' };
      case 'epic': return { filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.6))', animation: 'pulse-purple 2s infinite' };
      case 'legendary': return { filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.7))', animation: 'float 3s ease-in-out infinite' };
      case 'mythical': return { filter: 'drop-shadow(0 0 25px rgba(236, 72, 153, 0.8))', animation: 'mythical-float 4s ease-in-out infinite' };
      default: return {};
    }
  };

  return (
    <div className="pet-page-container animate-fade-in">
      <header className="page-header transparent">
        <div className="header-inner">
          <Link href="/" className="back-btn"><ChevronLeft size={24} /></Link>
          <div className="balance-tag">
            <span className="star">⭐</span> {user.points}
          </div>
        </div>
      </header>

      <main className="pet-main">
        <div className="layout-grid">
          <section className="pet-visual-area">
            <div className="pet-name-card card">
              {isEditingName ? (
                <div className="edit-name-row">
                  <input 
                    value={newName} 
                    onChange={e => setNewName(e.target.value)}
                    autoFocus
                  />
                  <button onClick={handleRename}>确认</button>
                </div>
              ) : (
                <h2 onClick={() => setIsEditingName(true)}>
                  {pet.name} <Edit2 size={14} className="edit-icon" />
                </h2>
              )}
              <div className="rarity-badge" style={{ 
                backgroundColor: rarityConfig[currentType.rarity].bg,
                color: rarityConfig[currentType.rarity].color
              }}>
                {rarityConfig[currentType.rarity].label}
              </div>
              <p className="mood-text">“{pet.mood > 50 ? '主银，我今天超开心~' : '唔...想让你陪陪我'}”</p>
            </div>

            <div className={`pet-avatar-stage rarity-${currentType.rarity}`}>
              <div className="stage-glow"></div>
              <AnimatePresence>
                {actionFeedback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: -60 }}
                    exit={{ opacity: 0 }}
                    className="feedback-bubble"
                  >
                    {actionFeedback}! ✨
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: actionFeedback ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="pet-image-container"
                style={getRarityStyle(currentType.rarity)}
              >
                <div className="pet-emoji">{currentType.icon}</div>
                {currentType.rarity === 'mythical' && <div className="mythical-aura"></div>}
              </motion.div>
            </div>

            <div className="status-bars">
              {stats.map(s => (
                <div key={s.label} className="status-item">
                  <div className="status-label">
                    <span>{s.label}</span>
                    <span>{s.value.toFixed(0)}/100</span>
                  </div>
                  <div className="bar-bg">
                    <div 
                      className="bar-fill"
                      style={{ 
                        width: `${s.value}%`, 
                        backgroundColor: s.color,
                        transition: 'width 0.8s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="pet-info-area">
            <div className="growth-card card">
              <div className="level-info">
                <div className="lvl-badge">Lv.{pet.level}</div>
                <div className="lvl-name">{levelName}</div>
              </div>
              <div className="intimacy-row">
                <Heart size={16} fill="#EC4899" color="#EC4899" />
                <span>亲密度: {pet.intimacy} <small>/ 300</small></span>
              </div>
            </div>

            <div className="actions-grid">
              {actions.map(action => (
                <button 
                  key={action.type} 
                  className="action-btn card"
                  onClick={() => handleAction(action.type, action.label)}
                >
                  <div className="action-icon-box" style={{ backgroundColor: action.color+'20', color: action.color }}>
                    <action.icon size={20} />
                  </div>
                  <div className="action-text">
                    <span className="action-label">{action.label}</span>
                    <span className="action-cost">-{action.cost}⭐</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>

        <section className="more-pets-section card">
          <div className="section-header">
            <h3>更多宠物</h3>
            <p>领养更多可爱的伙伴</p>
          </div>
          <div className="pets-scroller">
            {ALL_PET_TYPES.map(type => {
              const isUnlocked = myPets.includes(type.id);
              const isActive = pet.typeId === type.id;

              return (
                <div key={type.id} className={`pet-type-card ${isActive ? 'active' : ''}`}>
                  <div className="type-icon-wrap">
                    <span className="type-icon">{type.icon}</span>
                    <div className="mini-rarity-tag" style={{ color: rarityConfig[type.rarity].color }}>
                      {rarityConfig[type.rarity].label}
                    </div>
                    {isUnlocked ? (
                      <div className="unlock-status unlocked"><Check size={8} /></div>
                    ) : (
                      <div className="unlock-status locked"><Lock size={8} /></div>
                    )}
                  </div>
                  <h4>{type.name}</h4>
                  <p className="price">{isUnlocked ? '已领养' : `${type.cost} ⭐`}</p>
                  <button 
                    className={`adopt-btn ${isUnlocked ? 'switch' : 'buy'}`}
                    disabled={isActive}
                    onClick={() => unlockPet(type.id)}
                  >
                    {isActive ? '陪伴中' : (isUnlocked ? '切换' : '立即领养')}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <style jsx>{`
        .pet-page-container { min-height: 100vh; background: #F8FAFC; padding-bottom: 3rem; }
        .transparent { background: transparent !important; box-shadow: none !important; }
        .header-inner { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; }
        .back-btn { color: #64748b; }
        .balance-tag { background: white; padding: 0.5rem 1rem; border-radius: 999px; font-weight: 850; display: flex; align-items: center; gap: 0.4rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; }

        .pet-main { padding: 0 1.5rem; max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }
        .layout-grid { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }

        .pet-visual-area { display: flex; flex-direction: column; align-items: center; gap: 2rem; background: white; border-radius: 24px; padding: 2.5rem; border: 1px solid #f1f5f9; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
        .pet-name-card { border: none; box-shadow: none; align-items: center; padding: 0; }
        .pet-name-card h2 { font-size: 1.4rem; font-weight: 900; display: flex; align-items: center; gap: 0.6rem; cursor: pointer; color: #1e293b; }
        .mood-text { font-size: 0.9rem; color: #64748b; margin-top: 0.5rem; }

        .pet-avatar-stage { position: relative; width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; }
        .pet-emoji { font-size: 8rem; line-height: 1; filter: drop-shadow(0 20px 20px rgba(0,0,0,0.1)); }
        .feedback-bubble { position: absolute; background: #3b82f6; color: white; padding: 0.5rem 1.25rem; border-radius: 999px; font-weight: 850; font-size: 0.9rem; z-index: 10; box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3); }

        .status-bars { width: 100%; max-width: 320px; display: flex; flex-direction: column; gap: 1.25rem; }
        .status-label { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 850; color: #64748b; margin-bottom: 0.5rem; }
        .bar-bg { height: 10px; background: #F1F5F9; border-radius: 999px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
        .bar-fill { height: 100%; border-radius: 999px; }

        .pet-info-area { display: flex; flex-direction: column; gap: 1.25rem; }
        .growth-card { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; border: none; }
        .level-info { display: flex; align-items: center; gap: 1rem; }
        .lvl-badge { background: #eff6ff; color: #3b82f6; font-weight: 900; padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.85rem; }
        .lvl-name { font-size: 1.1rem; font-weight: 900; color: #1e293b; }
        .intimacy-row { display: flex; align-items: center; gap: 0.6rem; font-weight: 800; color: #64748b; font-size: 0.9rem; }

        .actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .action-btn { background: white; border: 1px solid #f1f5f9; cursor: pointer; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; transition: 0.2s; }
        .action-btn:hover { border-color: #3b82f6; transform: translateY(-3px); }
        .action-icon-box { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }

        .more-pets-section { padding: 1.5rem; border: none; }
        .section-header h3 { font-size: 1.1rem; font-weight: 900; color: #1e293b; }
        .pets-scroller { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1.25rem; padding: 1.5rem 0; }
        
        .pet-type-card { background: #F8FAFC; border: 2px solid transparent; border-radius: 20px; padding: 1.5rem; text-align: center; transition: 0.2s; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: space-between; min-height: 240px; }
        .pet-type-card.active { border-color: #3b82f6; background: #eff6ff; }
        .type-icon { font-size: 3.5rem; display: block; margin: 0 auto 0.5rem; }
        .unlock-status { position: absolute; bottom: 0; right: 0; background: #10b981; color: white; padding: 4px; border-radius: 50%; border: 2px solid white; }
        .locked { background: #94a3b8; }
        
        .adopt-btn { margin-top: 1rem; width: 100%; border: none; padding: 0.6rem; border-radius: 10px; font-weight: 850; font-size: 0.8rem; cursor: pointer; }
        .buy { background: #3b82f6; color: white; }
        .switch { background: white; color: #3b82f6; border: 1.5px solid #3b82f6; }

        .rarity-badge { font-size: 0.7rem; font-weight: 900; padding: 0.2rem 0.6rem; border-radius: 6px; margin-top: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .mini-rarity-tag { font-size: 0.6rem; font-weight: 900; margin-bottom: 0.3rem; }

        .stage-glow { position: absolute; width: 150%; height: 150%; background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%); z-index: -1; animation: rotate 10s linear infinite; }
        .rarity-epic .stage-glow { background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%); }
        .rarity-legendary .stage-glow { background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%); }
        .rarity-mythical .stage-glow { background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%); }

        .mythical-aura { position: absolute; inset: -20px; border-radius: 50%; border: 2px solid rgba(236, 72, 153, 0.3); animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }

        @keyframes pulse-purple { 
          0%, 100% { filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5)); }
          50% { filter: drop-shadow(0 0 25px rgba(168, 85, 247, 0.8)); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes mythical-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); filter: drop-shadow(0 0 35px rgba(236, 72, 153, 0.9)); }
        }

        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ping { 75%, 100% { transform: scale(1.5); opacity: 0; } }

        @media (max-width: 900px) { .layout-grid { grid-template-columns: 1fr; } .pet-info-area { order: 2; } .pet-visual-area { order: 1; } }
      `}</style>
    </div>
  );
}
