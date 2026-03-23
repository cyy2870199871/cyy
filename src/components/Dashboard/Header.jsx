"use client";

import { useApp } from "@/hooks/useAppContext";
import { User, Gift, Zap, Ticket, ChevronDown, Users, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { user, members, switchMember, family, logout } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const vipDays = family?.vipExpiry ? Math.max(0, Math.ceil((Number(family.vipExpiry) - Date.now()) / (1000 * 60 * 60 * 24))) : 0;

  return (
    <header className="header">
      <div className="brand">
        <h1>小打卡 - 学习打卡助手</h1>
        <p>今日已打卡 <span className="highlight">{user.checkInDays}</span> 天</p>
      </div>

      <div className="user-info">
        <div className="vip-badge-row">
          <div className={`vip-badge ${family?.isVip ? 'active' : ''}`}>
            <span className="crown">{family?.isVip ? '👑' : '💎'}</span> 
            {family?.isVip ? `会员剩余 ${vipDays} 天` : '未激活会员'}
          </div>
          <Link href="/redeem" className="btn-exchange">
            <Zap size={12} /> 兑换
          </Link>
        </div>
        
        <div className="avatar-group-wrap" ref={menuRef}>
          <div className="avatar-group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="user-nickname">{user.name}</span>
            <div className="avatar-ring">
              <img src={user.avatar} alt="Avatar" className="avatar" />
            </div>
            <ChevronDown size={14} className={`arrow-icon ${isMenuOpen ? 'rotate' : ''}`} />
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="user-dropdown card"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: '220px',
                  zIndex: 1000,
                  padding: '0.5rem 0',
                  overflow: 'hidden'
                }}
              >
                <div className="dropdown-header">切换成员档案</div>
                <div className="members-list">
                  {members.map(member => (
                    <div 
                      key={member.id} 
                      className={`member-item ${member.id === user.id ? 'active' : ''}`}
                      onClick={() => { switchMember(member.id); setIsMenuOpen(false); }}
                    >
                      <img src={member.avatar} alt={member.name} className="mini-avatar" />
                      <span className="name">{member.name}</span>
                      {member.id === user.id && <span className="active-dot" />}
                    </div>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link href="/users" className="footer-link" onClick={() => setIsMenuOpen(false)}>
                    <Settings size={14} /> 管理成员
                  </Link>
                  <div className="footer-link logout" onClick={logout}>
                    <LogOut size={14} /> 退出登录
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.5rem 1rem;
          background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
          color: white;
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.15);
        }
        .brand h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .brand p {
          font-size: 0.75rem;
          opacity: 0.9;
        }
        .highlight {
          color: #FCD34D;
          font-weight: 850;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }
        .vip-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .vip-badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          padding: 0.4rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .crown { font-size: 0.85rem; }
        .btn-exchange {
          background: #F59E0B;
          color: white;
          text-decoration: none;
          padding: 0.4rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.2s;
        }
        .btn-exchange:hover { transform: translateY(-2px); background: #D97706; }

        .avatar-group-wrap { position: relative; display: flex; align-items: center; }
        .avatar-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          padding: 0.2rem;
          border-radius: 999px;
          transition: background 0.2s;
        }
        .avatar-group:hover { background: rgba(255,255,255,0.1); }
        .user-nickname { font-size: 0.9rem; font-weight: 600; }
        .avatar-ring { width: 34px; height: 34px; border-radius: 50%; border: 2px solid white; overflow: hidden; background: white; }
        .avatar { width: 100%; height: 100%; object-fit: cover; }
        .arrow-icon { opacity: 0.7; transition: transform 0.2s; }
        .arrow-icon.rotate { transform: rotate(180deg); }

        .user-dropdown {
          background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); 
          color: #1e293b;
        }
        .dropdown-header { padding: 0.75rem 1rem; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
        .members-list { max-height: 240px; overflow-y: auto; }
        .member-item {
          display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; 
          cursor: pointer; transition: 0.2s; color: #1e293b;
        }
        .member-item:hover { background: #f8fafc; }
        .member-item.active { background: #eff6ff; color: var(--primary); }
        .mini-avatar { width: 28px; height: 28px; border-radius: 50%; border: 1px solid #e2e8f0; }
        .member-item .name { flex: 1; font-size: 0.9rem; font-weight: 600; color: inherit; }
        .active-dot { width: 8px; height: 8px; background: var(--primary); border-radius: 50%; }

        .dropdown-footer { border-top: 1px solid #f1f5f9; margin-top: 0.5rem; padding-top: 0.5rem; }
        .footer-link {
          display: flex; align-items: center; gap: 0.6rem; padding: 0.75rem 1rem; 
          font-size: 0.85rem; font-weight: 700; color: #1e293b; text-decoration: none; cursor: pointer; transition: 0.2s;
        }
        .footer-link:hover { background: #f8fafc; color: var(--primary); }
        .footer-link.logout { color: var(--danger); }
        .footer-link.logout:hover { background: #fff5f5; }
      `}</style>
    </header>
  );
}
