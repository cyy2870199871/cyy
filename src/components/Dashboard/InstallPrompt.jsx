"use client";

import { Smartphone, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [visible, setVisible] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent browser default prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('您的浏览器可能不支持自动安装，或者已经安装。请尝试点击浏览器菜单（或分享按钮）中的“添加到主屏幕”来安装哦！');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setVisible(false);
    }
    setDeferredPrompt(null);
  };

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
        <button className="btn btn-primary btn-sm" onClick={handleInstallClick}>
          立即安装
        </button>
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
