"use client";

import { Smartphone, X } from 'lucide-react';
import { useState } from 'react';

export default function InstallPrompt() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="install-prompt">
      <div className="content">
        <div className="icon-box">
          <Smartphone size={18} />
        </div>
        <div className="text">
          <p className="title">安装小打卡到桌面</p>
          <p className="desc">点击地址栏右侧的安装图标</p>
        </div>
      </div>
      <div className="actions">
        <button className="btn btn-primary btn-sm">立即安装</button>
        <button className="close-btn" onClick={() => setVisible(false)}><X size={16} /></button>
      </div>

      <style jsx>{`
        .install-prompt {
          position: fixed;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          background: var(--primary);
          color: white;
          padding: 1rem;
          border-radius: var(--radius-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          max-width: 600px;
          margin: 0 auto;
        }
        .content { display: flex; align-items: center; gap: 1rem; }
        .icon-box { background: rgba(255, 255, 255, 0.2); padding: 0.5rem; border-radius: var(--radius); }
        .text .title { font-size: 0.85rem; font-weight: 700; }
        .text .desc { font-size: 0.7rem; opacity: 0.9; }
        .actions { display: flex; align-items: center; gap: 0.75rem; }
        .btn-sm { padding: 0.4rem 0.8rem; font-size: 0.75rem; background: white; color: var(--primary); }
        .close-btn { background: none; border: none; color: white; cursor: pointer; opacity: 0.7; }
      `}</style>
    </div>
  );
}
