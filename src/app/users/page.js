"use client";

import { useApp } from "@/hooks/useAppContext";
import { ChevronLeft, Plus, Users, Edit2, Trash2, Check, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UsersPage() {
  const { members, currentMemberId, addMember, updateMember, deleteMember, switchMember } = useApp();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({ name: '', avatar: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      addMember(formData.name, formData.avatar);
      setIsAddModalOpen(false);
      setFormData({ name: '', avatar: '' });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && editingMember) {
      updateMember(editingMember.id, { name: formData.name, avatar: formData.avatar });
      setEditingMember(null);
      setFormData({ name: '', avatar: '' });
    }
  };

  const openEdit = (member) => {
    setEditingMember(member);
    setFormData({ name: member.name, avatar: member.avatar });
  };

  return (
    <div className="users-page-container animate-fade-in">
      <header className="page-header border-b">
        <div className="header-inner">
          <Link href="/" className="back-btn"><ChevronLeft size={24} /></Link>
          <h1>多成员档案管理</h1>
          <button className="add-text-btn" onClick={() => setIsAddModalOpen(true)}>
            <Plus size={18} /> 添加成员
          </button>
        </div>
      </header>

      <main className="users-main">
        <section className="members-grid">
          {members.map(member => (
            <div key={member.id} className={`member-card card ${member.id === currentMemberId ? 'active' : ''}`}>
              <div className="member-info-row">
                <div className="member-avatar-box" onClick={() => switchMember(member.id)}>
                  <img src={member.avatar} alt={member.name} />
                  {member.id === currentMemberId && <div className="active-tag"><Check size={12} /></div>}
                </div>
                <div className="member-text" onClick={() => switchMember(member.id)}>
                  <h3>{member.name}</h3>
                  <p className="role-tag">{member.role === 'primary' ? '主档案' : '普通档案'}</p>
                </div>
                <div className="member-actions">
                  <button className="icon-btn edit" onClick={() => openEdit(member)} title="编辑"><Edit2 size={16} /></button>
                  {member.role !== 'primary' && (
                    <button className="icon-btn delete" onClick={() => deleteMember(member.id)} title="删除"><Trash2 size={16} /></button>
                  )}
                </div>
              </div>
              <div className="member-footer">
                <div className="stat-pill">⭐ {member.points} 星星</div>
                <div className="stat-pill">📅 {member.checkInDays} 天打卡</div>
              </div>
            </div>
          ))}
        </section>

        {/* Empty State */}
        {members.length === 0 && (
          <div className="empty-state">
            <Users size={64} className="empty-icon" />
            <p>暂无成员档案，快去添加一个吧</p>
            <button className="btn-primary" onClick={() => setIsAddModalOpen(true)}>立即添加</button>
          </div>
        )}
      </main>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(isAddModalOpen || editingMember) && (
          <div className="modal-overlay" onClick={() => {setIsAddModalOpen(false); setEditingMember(null);}}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content card" 
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{editingMember ? '编辑档案信息' : '添加新成员档案'}</h2>
              </div>
              <form onSubmit={editingMember ? handleEdit : handleAdd} className="member-form">
                <div className="form-item">
                  <label>档案名称</label>
                  <input 
                    placeholder="例如：大宝、小美" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    autoFocus
                  />
                </div>
                <div className="form-item">
                  <label>头像地址 (URL)</label>
                  <input 
                    placeholder="https://..." 
                    value={formData.avatar}
                    onChange={e => setFormData({...formData, avatar: e.target.value})}
                  />
                  <p className="hint">留空将自动生成可爱头像</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn-secondary" onClick={() => {setIsAddModalOpen(false); setEditingMember(null);}}>取消</button>
                  <button type="submit" className="btn-primary" disabled={!formData.name.trim()}>
                    {editingMember ? '保存修改' : '立即创建'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .users-page-container { min-height: 100vh; background: var(--bg-main); padding-bottom: 3rem; }
        .header-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1rem; }
        .add-text-btn { display: flex; align-items: center; gap: 0.4rem; color: var(--primary); font-weight: 700; background: none; border: none; cursor: pointer; }
        
        .users-main { padding: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .members-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
        
        .member-card { padding: 1.5rem; transition: all 0.2s; border: 2px solid transparent; cursor: pointer; }
        .member-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .member-card.active { border-color: var(--primary); background: #fefeff; }
        
        .member-info-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .member-avatar-box { position: relative; width: 60px; height: 60px; border-radius: 50%; overflow: visible; border: 3px solid #f1f5f9; }
        .member-avatar-box img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
        .active-tag { position: absolute; bottom: -2px; right: -2px; width: 22px; height: 22px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; }
        
        .member-text { flex: 1; }
        .member-text h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.25rem; }
        .role-tag { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; background: #f1f5f9; padding: 0.1rem 0.5rem; border-radius: 4px; display: inline-block; }
        
        .member-actions { display: flex; gap: 0.5rem; }
        .icon-btn { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border); background: white; color: var(--text-muted); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; }
        .icon-btn:hover { border-color: var(--primary); color: var(--primary); background: #f5f7ff; }
        .icon-btn.delete:hover { border-color: var(--danger); color: var(--danger); background: #fff5f5; }

        .member-footer { display: flex; gap: 0.75rem; }
        .stat-pill { background: #f8fafc; color: var(--text-main); font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 999px; border: 1px solid var(--border); }

        /* Modal Styles */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .modal-content { width: 100%; max-width: 440px; padding: 2rem; }
        .modal-header h2 { font-size: 1.25rem; font-weight: 850; margin-bottom: 1.5rem; }
        .form-item { margin-bottom: 1.25rem; }
        .form-item label { display: block; font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main); }
        .form-item input { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: 12px; font-size: 1rem; outline: none; transition: 0.2s; }
        .form-item input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
        .hint { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.4rem; }
        .modal-footer { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
        .btn-secondary { padding: 0.75rem 1.5rem; border: 1px solid var(--border); background: white; border-radius: 12px; font-weight: 700; cursor: pointer; }
        .btn-primary { padding: 0.75rem 1.5rem; background: var(--primary); color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.2s; }
        .btn-primary:disabled { opacity: 0.5; }
      `}</style>
    </div>
  );
}
