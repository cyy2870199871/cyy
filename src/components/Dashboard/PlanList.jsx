"use client";

import { useLearningPlan } from '@/hooks/useLearningPlan';
import { Share2, Check, Trash2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useState } from 'react';
import AIGeneratorModal from '../Modals/AIGeneratorModal';

export default function PlanList() {
  const { plans, togglePlan, deletePlan } = useLearningPlan();
  const [showAIModal, setShowAIModal] = useState(false);

  const handleToggle = (plan) => {
    // If it's turning from incomplete to complete, fire confetti!
    if (!plan.completed) {
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const particleCount = 50;
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

      setTimeout(() => clearInterval(interval), 600); // Stop after a brief burst
    }

    // Toggle state
    togglePlan(plan.id);
  };

  return (
    <div className="plan-list-container animate-fade-in">
      <div className="list-header">
        <h3>我的计划</h3>
        <div className="header-actions">
          {/*<button className="ai-magic-btn" onClick={() => setShowAIModal(true)}>*/}
          {/*  <Sparkles size={14} /> AI 生成*/}
          {/*</button>*/}
          <button className="share-btn"><Share2 size={16} /> 分享</button>
        </div>
      </div>

      <div className="list-content">
        <AnimatePresence>
          {plans.map(plan => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileTap={{ scale: 0.98 }}
              className={`plan-item ${plan.completed ? 'completed' : ''}`}
              onClick={() => handleToggle(plan)}
            >
              <div className={`status-indicator ${plan.completed ? 'active' : ''}`}>
                {plan.completed && <Check size={10} color="white" strokeWidth={4} />}
              </div>
              <div className="plan-info">
                <span className="category">[{plan.category}]</span>
                <span className="title">{plan.title}</span>
              </div>
              <button
                className="delete-btn"
                onClick={(e) => { e.stopPropagation(); deletePlan(plan.id); }}
                title="删除计划"
              >
                <Trash2 size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {showAIModal && <AIGeneratorModal isOpen={showAIModal} onClose={() => setShowAIModal(false)} />}

      <style jsx>{`
        .plan-list-container { margin-top: 1.5rem; }
        
        .list-header {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;
        }
        .list-header h3 { font-size: 1.1rem; border-left: 4px solid var(--success); padding-left: 0.85rem; font-weight: 900; }
        
        .header-actions { display: flex; align-items: center; gap: 0.8rem; }
        .ai-magic-btn {
          background: linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%);
          color: #8b5cf6; border: 1px solid #ddd6fe; padding: 0.4rem 0.8rem;
          border-radius: 999px; font-size: 0.8rem; font-weight: 800;
          display: flex; align-items: center; gap: 0.4rem; cursor: pointer;
          transition: 0.2s; box-shadow: 0 4px 10px rgba(139, 92, 246, 0.1);
        }
        .ai-magic-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(139, 92, 246, 0.15); background: white; }
        .share-btn { 
          background: none; border: none; font-size: 0.85rem; color: var(--text-muted); font-weight: 600;
          display: flex; align-items: center; gap: 0.3rem; cursor: pointer;
        }
        
        .list-content { display: flex; flex-direction: column; gap: 0.85rem; padding-bottom: 2rem; }
        
        .plan-item {
          background: white; padding: 1.25rem; border-radius: 16px;
          display: flex; align-items: center; gap: 1rem; cursor: pointer;
          border: 2px solid transparent; transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .plan-item:hover { border-color: #e2e8f0; transform: translateX(4px); box-shadow: 0 8px 25px rgba(0,0,0,0.04); }
        
        .status-indicator {
          width: 24px; height: 24px; border-radius: 50%;
          border: 3px solid #cbd5e1; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .status-indicator.active { background: var(--success); border-color: var(--success); transform: scale(1.1); }
        
        .plan-info { flex: 1; min-width: 0; word-break: break-word; line-height: 1.5; }
        .category { color: var(--success); font-weight: 800; margin-right: 0.5rem; font-size: 0.85rem; }
        .title { font-size: 0.95rem; font-weight: 600; color: #1e293b; transition: 0.2s; }
        .completed .title { text-decoration: line-through; color: #94a3b8; }
        
        .delete-btn {
          background: none; border: none; color: #e2e8f0; cursor: pointer;
          padding: 0.5rem; border-radius: 10px; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .plan-item:hover .delete-btn { color: #cbd5e1; }
        .delete-btn:hover { color: var(--danger) !important; background: #fee2e2; }
      `}</style>
    </div>
  );
}
