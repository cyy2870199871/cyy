"use client";

import React, { useState } from 'react';
import { useApp } from '@/hooks/useAppContext';
import { ArrowRight, Mail, Lock, User, Eye, EyeOff, Sparkles } from 'lucide-react';

// Theme configs for each gender
const THEMES = {
  male: {
    bg: 'linear-gradient(160deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)',
    blob1: 'rgba(255,255,255,0.06)',
    blob2: 'rgba(96,165,250,0.12)',
    tabActive: '#2563eb',
    tabActiveShadow: 'rgba(37, 99, 235, 0.25)',
    btnBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    btnShadow: 'rgba(37, 99, 235, 0.25)',
    btnHoverShadow: 'rgba(37, 99, 235, 0.35)',
    focusBorder: '#2563eb',
    focusShadow: 'rgba(37, 99, 235, 0.08)',
    linkColor: '#2563eb',
    emoji: '👦',
    label: '男',
    slogan: '勇往直前，坚持不懈！',
  },
  female: {
    bg: 'linear-gradient(160deg, #9d174d 0%, #ec4899 50%, #f472b6 100%)',
    blob1: 'rgba(255,255,255,0.08)',
    blob2: 'rgba(251,207,232,0.15)',
    tabActive: '#ec4899',
    tabActiveShadow: 'rgba(236, 72, 153, 0.25)',
    btnBg: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    btnShadow: 'rgba(236, 72, 153, 0.25)',
    btnHoverShadow: 'rgba(236, 72, 153, 0.4)',
    focusBorder: '#ec4899',
    focusShadow: 'rgba(236, 72, 153, 0.08)',
    linkColor: '#db2777',
    emoji: '👧',
    label: '女',
    slogan: '温柔而坚定，每天进步一点点 🌸',
  },
};

export default function LoginPage() {
  const { login, register, setTheme } = useApp();
  const saveGender = (g) => setTheme?.(g === 'female' ? 'pink' : 'blue');
  const [gender, setGender] = useState('male');
  const [isLogin, setIsLogin] = useState(true);
  const [showPwd, setShowPwd] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const theme = THEMES[gender];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        const success = await login(formData.username, formData.password);
        if (success) {
          saveGender(gender); // persist gender to global context
          window.location.href = '/';
        } else setError('用户名或密码错误，请重试');
      } else {
        const success = await register(formData.username, formData.password, formData.name);
        if (success) {
          saveGender(gender);
          setError('');
          setIsLogin(true);
        } else {
          setError('注册失败，该用户名可能已存在');
        }
      }
    } catch (err) {
      setError('操作失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (toLogin) => {
    setIsLogin(toLogin);
    setError('');
    setFormData({ username: '', password: '', name: '' });
  };

  const switchGender = (g) => {
    setGender(g);
    saveGender(g); // also update global context immediately for live preview
    setError('');
  };

  return (
    <div className="login-bg">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Gender chooser floating at the top */}
      <div className="gender-chooser">
        <button
          className={`gender-btn ${gender === 'male' ? 'gender-active' : ''}`}
          onClick={() => switchGender('male')}
          data-gender="male"
        >
          <span className="g-emoji">👦</span> 男生
        </button>
        <div className="gender-divider" />
        <button
          className={`gender-btn ${gender === 'female' ? 'gender-active' : ''}`}
          onClick={() => switchGender('female')}
          data-gender="female"
        >
          <span className="g-emoji">👧</span> 女生
        </button>
      </div>

      <div className="above-card">
        <div className="brand-logo">
          <Sparkles size={22} color="white" />
        </div>
        <h1 className="brand-title">家庭打卡系统</h1>
        <p className="brand-slogan">{theme.slogan}</p>
      </div>

      <div className="login-card">
        <div className="tab-switcher">
          <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={() => switchTab(true)}>登录</button>
          <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={() => switchTab(false)}>注册</button>
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          {!isLogin && (
            <div className="input-row">
              <div className="icon-wrap"><User size={16} color="#94a3b8" /></div>
              <input
                type="text"
                placeholder="请输入家庭名称"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          )}

          <div className="input-row">
            <div className="icon-wrap"><Mail size={16} color="#94a3b8" /></div>
            <input
              type="text"
              placeholder="请输入用户名"
              value={formData.username}
              onChange={e => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div className="input-row">
            <div className="icon-wrap"><Lock size={16} color="#94a3b8" /></div>
            <input
              type={showPwd ? 'text' : 'password'}
              placeholder="请输入密码"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button type="button" className="eye-btn" onClick={() => setShowPwd(p => !p)}>
              {showPwd ? <EyeOff size={16} color="#94a3b8" /> : <Eye size={16} color="#94a3b8" />}
            </button>
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? '处理中...' : (isLogin ? '登录' : '注册')}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="card-footer">
          {isLogin ? (
            <p>还没有账号？<button onClick={() => switchTab(false)} className="link-btn">立即注册</button></p>
          ) : (
            <p>已有账号？<button onClick={() => switchTab(true)} className="link-btn">返回登录</button></p>
          )}
        </div>
      </div>

      <div className="below-card">
        <p>© 2025 家庭打卡系统 · 让学习变得简单</p>
      </div>

      <style jsx>{`
        .login-bg {
          min-height: 100vh;
          background: ${theme.bg};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          transition: background 0.5s ease;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: background 0.5s ease;
        }
        .blob-1 { width: 500px; height: 500px; top: -150px; left: -150px; background: ${theme.blob1}; }
        .blob-2 { width: 400px; height: 400px; bottom: -100px; right: -100px; background: ${theme.blob2}; }

        /* Gender chooser */
        .gender-chooser {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 999px;
          padding: 6px;
          margin-bottom: 2rem;
        }
        .gender-btn {
          display: flex; align-items: center; gap: 0.4rem;
          padding: 0.5rem 1.25rem;
          border: none; border-radius: 999px;
          font-size: 0.95rem; font-weight: 800;
          cursor: pointer; transition: all 0.25s;
          background: transparent; color: rgba(255,255,255,0.7);
        }
        .gender-btn.gender-active {
          background: white;
          color: #1e293b;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .gender-btn:hover:not(.gender-active) { color: white; background: rgba(255,255,255,0.15); }
        .g-emoji { font-size: 1.1rem; }
        .gender-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.3); }

        /* Brand above card */
        .above-card {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        .brand-logo {
          width: 52px; height: 52px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .brand-title {
          font-size: 1.8rem; font-weight: 900; color: white;
          margin-bottom: 0.4rem; letter-spacing: -0.5px;
        }
        .brand-slogan {
          font-size: 0.9rem; color: rgba(255,255,255,0.85); font-weight: 500;
          transition: all 0.3s;
        }

        /* Card */
        .login-card {
          width: 100%; max-width: 400px;
          background: white; border-radius: 28px; padding: 2rem;
          box-shadow: 0 32px 64px rgba(0,0,0,0.15);
          position: relative; z-index: 2;
          animation: slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tabs */
        .tab-switcher {
          display: flex; background: #f1f5f9; border-radius: 14px; padding: 5px; margin-bottom: 1.75rem;
        }
        .tab-btn {
          flex: 1; padding: 0.65rem; border: none; background: transparent;
          border-radius: 10px; font-size: 0.95rem; font-weight: 700; color: #64748b;
          cursor: pointer; transition: all 0.2s;
        }
        .tab-btn.active {
          background: ${theme.tabActive};
          color: white;
          box-shadow: 0 4px 12px ${theme.tabActiveShadow};
          transition: background 0.4s, box-shadow 0.4s;
        }

        /* Form */
        .form-body { display: flex; flex-direction: column; gap: 1rem; }
        .input-row {
          display: flex; align-items: center;
          background: #f8fafc; border: 2px solid #f1f5f9;
          border-radius: 14px; padding: 0 1rem; transition: all 0.2s;
        }
        .input-row:focus-within {
          border-color: ${theme.focusBorder};
          background: white;
          box-shadow: 0 0 0 4px ${theme.focusShadow};
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .icon-wrap { display: flex; align-items: center; flex-shrink: 0; }

        input {
          flex: 1; border: none; background: transparent;
          padding: 0.9rem 0.75rem; font-size: 0.95rem; color: #1e293b;
          outline: none; font-weight: 500;
        }
        input::placeholder { color: #94a3b8; font-weight: 400; }

        .eye-btn {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; padding: 0.25rem;
        }

        .error-msg {
          background: #fef2f2; border: 1px solid #fecaca; color: #dc2626;
          font-size: 0.82rem; font-weight: 600; padding: 0.6rem 1rem;
          border-radius: 10px; text-align: center;
        }

        .submit-btn {
          margin-top: 0.5rem;
          background: ${theme.btnBg};
          color: white; border: none; border-radius: 14px; padding: 1rem;
          font-size: 1rem; font-weight: 800; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s, background 0.4s;
          box-shadow: 0 8px 20px ${theme.btnShadow};
          letter-spacing: 0.5px;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px ${theme.btnHoverShadow};
        }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn:disabled { background: #94a3b8; box-shadow: none; cursor: not-allowed; transform: none; }

        /* Card footer */
        .card-footer {
          margin-top: 1.5rem; text-align: center;
          font-size: 0.9rem; color: #64748b; font-weight: 500;
        }
        .link-btn {
          background: none; border: none; color: ${theme.linkColor};
          font-weight: 700; font-size: inherit; cursor: pointer;
          transition: color 0.4s;
        }
        .link-btn:hover { text-decoration: underline; }

        /* Below card */
        .below-card {
          margin-top: 2rem; text-align: center;
          color: rgba(255,255,255,0.6); font-size: 0.8rem;
          position: relative; z-index: 2;
        }
      `}</style>
    </div>
  );
}
