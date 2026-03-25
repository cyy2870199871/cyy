"use client";

import { useState, useEffect } from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { useHabits } from '@/hooks/useHabits';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddHabitModal({ isOpen, onClose, habitToEdit }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
    };
  }, [isOpen]);

  const { addHabit, updateHabit } = useHabits();
  
  const [formData, setFormData] = useState({
    title: '',
    icon: '💡',
    color: '#4F46E5',
    points: 5,
    type: 'daily',
    maxTimes: 1,
    category: '生活',
    duration: 30,
    desc: ''
  });

  useEffect(() => {
    if (habitToEdit) {
      setFormData(habitToEdit);
    } else {
      setFormData({
        title: '',
        icon: '💡',
        color: '#4F46E5',
        points: 5,
        type: 'daily',
        maxTimes: 1,
        category: '生活',
        duration: 30,
        desc: ''
      });
    }
  }, [habitToEdit, isOpen]);

  if (!isOpen) return null;

  const icons = ['💡', '🏃', '🥦', '💧', '🧹', '🎮', '📵', '🛌', '🎸', '🎨', '🐶', '🍕'];
  const colors = ['#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#64748B'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    
    const finalData = {
      ...formData,
      points: Number(formData.points) || 0,
      maxTimes: Number(formData.maxTimes) || 1,
      duration: Number(formData.duration) || 0
    };

    if (habitToEdit) {
      updateHabit(finalData);
    } else {
      addHabit(finalData);
    }
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div key="modal-overlay" className="modal-overlay" onClick={onClose}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="modal-content card"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="header-title">
                <div className="icon-wrapper" style={{ backgroundColor: `${formData.color}20`, color: formData.color }}>
                  {formData.icon}
                </div>
                <h2>{habitToEdit ? '修改习惯档案' : '制订新习惯'}</h2>
              </div>
              <button type="button" className="close-btn" onClick={onClose}><X size={20} /></button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form-layout">
              <div className="modal-body custom-scrollbar">
                <div className="form-group">
                  <label>习惯名称</label>
                  <input 
                    type="text" 
                    placeholder="给自己一个小目标，如：晨跑 3KM"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    required
                    autoFocus
                  />
                </div>

                <div className="flex-row">
                  <div className="form-group">
                    <label>选择图标</label>
                    <div className="icon-grid">
                      {icons.map(icon => (
                        <button 
                          key={icon} type="button" 
                          className={`choice-btn ${formData.icon === icon ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, icon })}
                        >{icon}</button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>专属色</label>
                    <div className="color-grid">
                      {colors.map(color => (
                        <button 
                          key={color} type="button" 
                          className="color-btn"
                          style={{ backgroundColor: color }}
                          onClick={() => setFormData({ ...formData, color })}
                        >
                          {formData.color === color && <Check size={14} color="white" strokeWidth={3} />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid-2col">
                  <div className="form-group">
                    <label>每次奖励星星</label>
                    <div className="points-input">
                      <input 
                        type="number" 
                        value={formData.points}
                        onChange={e => setFormData({ ...formData, points: e.target.value })}
                        required
                        className="highlight-input"
                      />
                      <span className="unit">⭐</span>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>分类归属</label>
                    <div className="select-wrapper">
                      <select 
                        value={formData.category} 
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="学习">📚 学习</option>
                        <option value="生活">🏠 生活</option>
                        <option value="运动">🏃 运动</option>
                        <option value="健康">🥗 健康</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group info-box">
                  <div className="grid-2col">
                    <div className="form-group-sub">
                      <label>打卡频率</label>
                      <div className="select-wrapper">
                        <select 
                          value={formData.type} 
                          onChange={e => setFormData({ ...formData, type: e.target.value })}
                        >
                          <option value="daily">每日打卡 (1次)</option>
                          <option value="daily_multiple">每日多次</option>
                          <option value="weekly_multiple">每周多次</option>
                        </select>
                      </div>
                    </div>
                    
                    {(formData.type === 'daily_multiple' || formData.type === 'weekly_multiple') ? (
                      <div className="form-group-sub">
                        <label>目标次数</label>
                        <input 
                          type="number" 
                          value={formData.maxTimes}
                          onChange={e => setFormData({ ...formData, maxTimes: e.target.value })}
                          min="1"
                        />
                      </div>
                    ) : (
                      <div className="form-group-sub">
                        <label>预期耗时 (分)</label>
                        <input 
                          type="number" 
                          value={formData.duration}
                          onChange={e => setFormData({ ...formData, duration: e.target.value })}
                          min="0"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>写句碎碎念吧 (选填)</label>
                  <textarea 
                    placeholder="例如：坚持就是胜利！不喝奶茶变仙女..."
                    value={formData.desc}
                    onChange={e => setFormData({ ...formData, desc: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  取消
                </button>
                <button type="submit" className="submit-btn" disabled={!formData.title} style={{ backgroundColor: formData.color }}>
                  <Sparkles size={18} /> {habitToEdit ? '保存修改' : '创建习惯'}
                </button>
              </div>
            </form>
          </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(6px);
          display: flex; align-items: flex-start; justify-content: center; z-index: 2000;
          padding: 8vh 1rem 2rem;
        }
        .modal-content {
          background: white; width: 100%; max-width: 520px;
          border-radius: 28px; 
          display: flex; flex-direction: column;
          max-height: 90vh; 
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden; /* Important to keep border-radius clean */
        }
        
        .modal-header { 
          display: flex; justify-content: space-between; align-items: center; 
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid #F1F5F9;
          background: white;
          z-index: 10;
        }
        .header-title { display: flex; align-items: center; gap: 0.75rem; }
        .icon-wrapper { 
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.25rem; transition: background 0.3s;
        }
        .modal-header h2 { font-size: 1.2rem; font-weight: 800; color: #1E293B; margin: 0; }
        
        .close-btn { 
          background: #F8FAFC; border: none; width: 36px; height: 36px; 
          border-radius: 50%; cursor: pointer; color: #64748B;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover { background: #F1F5F9; color: #0F172A; transform: scale(1.05); }

        .modal-form-layout {
          display: flex; flex-direction: column;
          flex: 1; overflow: hidden; /* allows body to scroll */
        }

        .modal-body {
          padding: 1.5rem;
          display: flex; flex-direction: column; gap: 1.25rem;
          overflow-y: auto;
        }
        
        /* Custom Scrollbar for inner content */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; margin: 0.5rem 0; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94A3B8; }

        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group-sub { display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }
        .flex-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem; }
        .grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        
        label { font-size: 0.85rem; font-weight: 700; color: #475569; }
        
        input, select, textarea {
          padding: 0.85rem 1rem; border: 2px solid #F1F5F9;
          border-radius: 14px; font-size: 0.95rem; background: #F8FAFC; 
          outline: none; transition: all 0.2s; color: #1E293B; font-weight: 500;
        }
        input:focus, select:focus, textarea:focus { 
          border-color: var(--primary); background: white; 
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1); 
        }
        
        .select-wrapper { position: relative; display: flex; align-items: center; }
        .select-wrapper select { width: 100%; appearance: none; cursor: pointer; padding-right: 2.5rem; }
        .select-wrapper::after {
          content: "▼"; position: absolute; right: 1rem; font-size: 0.7rem; color: #94A3B8; pointer-events: none;
        }
        
        .icon-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .choice-btn { 
          font-size: 1.2rem; width: 42px; height: 42px; border: 2px solid transparent; 
          background: #F1F5F9; border-radius: 12px; cursor: pointer; 
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .choice-btn:hover { background: #E2E8F0; transform: translateY(-2px); }
        .choice-btn.active { border-color: var(--primary); background: #EEF2FF; transform: scale(1.05); }

        .color-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .color-btn { 
          width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent; 
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s; outline: none;
        }
        .color-btn:hover { transform: scale(1.1); }
        .color-btn:focus-visible { box-shadow: 0 0 0 3px rgba(0,0,0,0.1); }

        .points-input { position: relative; display: flex; align-items: center; }
        .points-input input { width: 100%; padding-right: 2.5rem; font-weight: 700; color: #F59E0B; }
        .points-input input:focus { border-color: #F59E0B; box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1); }
        .points-input .unit { position: absolute; right: 1rem; font-size: 1.1rem; pointer-events: none; }

        .info-box {
          background: #F8FAFC; border-radius: 16px; padding: 1rem;
          border: 1px dashed #E2E8F0;
        }

        .modal-footer {
          display: flex; gap: 1rem; padding: 1rem 1.5rem 1.5rem;
          background: white; border-top: 1px solid #F1F5F9;
          z-index: 10;
        }
        
        .btn-cancel {
          flex: 1; padding: 0.9rem; border: none; background: #F1F5F9; 
          color: #64748B; border-radius: 16px; font-weight: 700; font-size: 1rem; 
          cursor: pointer; transition: 0.2s;
        }
        .btn-cancel:hover { background: #E2E8F0; color: #1E293B; }
        
        .submit-btn {
          flex: 2; padding: 0.9rem; border: none; color: white;
          border-radius: 16px; font-weight: 800; font-size: 1rem; 
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: all 0.2s; box-shadow: 0 8px 16px -4px rgba(0,0,0,0.2);
        }
        .submit-btn:not(:disabled):hover { transform: translateY(-2px); filter: brightness(1.1); box-shadow: 0 12px 20px -4px rgba(0,0,0,0.3); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; filter: grayscale(1); }
      `}</style>
    </>
  );
}
