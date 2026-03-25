"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

const QUICK_DURATIONS = [
  { label: '15分钟', value: 15 },
  { label: '30分钟', value: 30 },
  { label: '45分钟', value: 45 },
  { label: '1小时', value: 60 },
  { label: '1.5小时', value: 90 },
  { label: '2小时', value: 120 },
];

export default function CompleteTaskModal({ isOpen, onClose, habit, records = [], onComplete }) {
  const [duration, setDuration] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill duration from habit target when opening
  useEffect(() => {
    if (isOpen && habit?.duration) {
      setDuration(habit.duration);
    } else if (isOpen) {
      setDuration(0);
    }
  }, [isOpen, habit]);

  // Stats for this habit
  const stats = useMemo(() => {
    if (!habit) return { totalTimes: 0, totalDuration: 0 };
    const habitRecords = records.filter(r => r.habitId === habit.id);
    return {
      totalTimes: habitRecords.length,
      totalDuration: habitRecords.reduce((sum, r) => sum + (r.duration || 0), 0)
    };
  }, [habit, records]);

  const handleSubmit = async () => {
    if (!habit) return;
    setIsSubmitting(true);
    try {
      await onComplete(habit.id, duration);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !habit) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="modal-overlay" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-content">
                {/* Header */}
                <div className="modal-header">
                  <div className="habit-badge" style={{ backgroundColor: habit.color + '20', color: habit.color }}>
                    {habit.icon}
                  </div>
                  <div className="header-text">
                    <h2>完成任务</h2>
                    <p className="habit-title">{habit.title}</p>
                  </div>
                  <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                {/* Stats */}
                <div className="stats-row">
                  <div className="stat-item">
                    <TrendingUp size={14} />
                    <span>已完成 <strong>{stats.totalTimes}</strong> 次</span>
                  </div>
                  <div className="stat-item">
                    <Clock size={14} />
                    <span>累计 <strong>{stats.totalDuration}</strong> 分钟</span>
                  </div>
                </div>

                {/* Duration Input */}
                <div className="duration-section">
                  <label>
                    <Clock size={16} />
                    本次学习时长（分钟）
                  </label>
                  <input
                    type="number"
                    value={duration}
                    onChange={e => setDuration(Math.max(0, Number(e.target.value)))}
                    placeholder="输入学习时长"
                    min="0"
                    autoFocus
                  />

                  {/* Quick duration buttons */}
                  <div className="quick-btns">
                    {QUICK_DURATIONS.map(d => (
                      <button
                        key={d.value}
                        type="button"
                        className={`quick-btn ${duration === d.value ? 'active' : ''}`}
                        onClick={() => setDuration(d.value)}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target hint */}
                {habit.duration > 0 && (
                  <div className="target-hint">
                    <Zap size={14} />
                    目标时长：{habit.duration} 分钟
                    {duration >= habit.duration && <span className="reached">✓ 已达标</span>}
                  </div>
                )}

                {/* Footer */}
                <div className="modal-footer">
                  <button type="button" className="cancel-btn" onClick={onClose}>取消</button>
                  <button
                    type="button"
                    className="confirm-btn"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ backgroundColor: habit.color }}
                  >
                    {isSubmitting ? '提交中...' : (
                      <>
                        <CheckCircle2 size={18} />
                        确认完成
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(8px);
          display: flex; align-items: flex-start; justify-content: center;
          z-index: 3000; padding: 8vh 1rem 1rem;
        }
        .modal-content {
          width: 100%; max-width: 440px; background: white;
          border-radius: 28px; padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .modal-header {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;
        }
        .habit-badge {
          width: 52px; height: 52px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; flex-shrink: 0;
        }
        .header-text { flex: 1; }
        .header-text h2 { font-size: 1.2rem; font-weight: 800; color: #1e293b; margin: 0; }
        .habit-title { font-size: 0.85rem; color: #64748b; margin-top: 0.2rem; }
        .close-btn {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: #f1f5f9; color: #64748b; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: 0.2s;
        }
        .close-btn:hover { background: #e2e8f0; color: #1e293b; }

        .stats-row {
          display: flex; gap: 1rem; margin-bottom: 1.5rem;
          padding: 0.75rem 1rem; background: #f8fafc;
          border-radius: 14px; border: 1px solid #f1f5f9;
        }
        .stat-item {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.82rem; color: #64748b;
        }
        .stat-item strong { color: #1e293b; font-weight: 800; }

        .duration-section { margin-bottom: 1.25rem; }
        .duration-section label {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.9rem; font-weight: 700; color: #475569;
          margin-bottom: 0.75rem;
        }
        .duration-section input {
          width: 100%; padding: 0.9rem 1rem;
          border: 2px solid #f1f5f9; border-radius: 14px;
          font-size: 1.1rem; font-weight: 700; text-align: center;
          outline: none; transition: 0.2s; background: #f8fafc;
          color: #1e293b;
        }
        .duration-section input:focus {
          border-color: var(--primary, #3b82f6);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          background: white;
        }

        .quick-btns {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem; margin-top: 0.75rem;
        }
        .quick-btn {
          padding: 0.55rem; border: 1.5px solid #e2e8f0;
          border-radius: 10px; background: white; cursor: pointer;
          font-size: 0.8rem; font-weight: 700; color: #475569;
          transition: all 0.15s;
        }
        .quick-btn:hover { border-color: var(--primary, #3b82f6); color: var(--primary, #3b82f6); }
        .quick-btn.active {
          background: var(--primary-light, #EFF6FF);
          border-color: var(--primary, #3b82f6);
          color: var(--primary, #3b82f6);
        }

        .target-hint {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.82rem; color: #64748b; font-weight: 600;
          padding: 0.6rem 1rem; background: #FFFBEB;
          border: 1px solid #FEF3C7; border-radius: 10px;
          margin-bottom: 1.25rem;
        }
        .reached { color: #10b981; margin-left: auto; font-weight: 800; }

        .modal-footer { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
        .cancel-btn {
          flex: 1; padding: 0.85rem; border: none; border-radius: 14px;
          background: #f1f5f9; color: #64748b; font-weight: 700;
          cursor: pointer; transition: 0.2s; font-size: 0.95rem;
        }
        .cancel-btn:hover { background: #e2e8f0; }
        .confirm-btn {
          flex: 2; padding: 0.85rem; border: none; border-radius: 14px;
          color: white; font-weight: 800; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: all 0.2s; font-size: 0.95rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .confirm-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); }
        .confirm-btn:disabled { opacity: 0.6; transform: none; cursor: not-allowed; }
      `}</style>
    </>
  );
}
