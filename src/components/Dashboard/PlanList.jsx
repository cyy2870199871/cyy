"use client";

import { useLearningPlan } from '@/hooks/useLearningPlan';
import { Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlanList() {
  const { plans, togglePlan } = useLearningPlan();

  return (
    <div className="plan-list-container">
      <div className="list-header">
        <h3>我的计划</h3>
        <button className="share-btn"><Share2 size={16} /> 分享</button>
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
              onClick={() => togglePlan(plan.id)}
            >
              <div className={`status-indicator ${plan.completed ? 'active' : ''}`}>
                {plan.completed && <Check size={10} color="white" />}
              </div>
              <div className="plan-info">
                <span className="category">[{plan.category}]</span>
                <span className="title">{plan.title}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .plan-list-container {
          margin-top: 1rem;
        }
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .list-header h3 { font-size: 1rem; border-left: 4px solid var(--success); padding-left: 0.75rem; }
        .share-btn { 
          background: none; border: none; font-size: 0.8rem; color: var(--text-muted); 
          display: flex; align-items: center; gap: 0.25rem; cursor: pointer;
        }
        .list-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .plan-item {
          background: #F8FAFC;
          padding: 1rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          border: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .plan-item:hover {
          border-color: var(--primary-light);
        }
        .status-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .status-indicator.active {
          background: var(--success);
          border-color: var(--success);
        }
        .category { color: var(--success); font-weight: 700; margin-right: 0.5rem; font-size: 0.85rem; }
        .title { font-size: 0.9rem; font-weight: 500; }
        .completed .title { text-decoration: line-through; color: var(--text-muted); }
      `}</style>
    </div>
  );
}
