"use client";

import React, { useState } from 'react';
import { useApp } from '@/hooks/useAppContext';
import { LogIn, UserPlus, ShieldCheck, Zap } from 'lucide-react';

export default function LoginPage() {
  const { login, register } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const success = await login(formData.username, formData.password);
        if (success) window.location.href = '/';
        else alert('登录失败，请检查用户名和密码');
      } else {
        const success = await register(formData.username, formData.password, formData.name);
        if (success) {
          alert('注册成功，请登录');
          setIsLogin(true);
        } else {
          alert('注册失败，用户名可能已存在');
        }
      }
    } catch (err) {
      alert('操作失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card animate-scale-up">
        <div className="login-header">
          <div className="logo-icon">
            <ShieldCheck size={40} color="white" />
          </div>
          <h1>{isLogin ? '欢迎回来' : '开启家庭计划'}</h1>
          <p>{isLogin ? '登录您的家庭账号管理习惯' : '创建一个新的家庭管理账号'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="input-group">
              <label>家庭名称</label>
              <input 
                type="text" 
                placeholder="例如：幸福之家"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label>用户名</label>
            <input 
              type="text" 
              placeholder="请输入用户名"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <label>密码</label>
            <input 
              type="password" 
              placeholder="请输入密码"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? '处理中...' : (isLogin ? <><LogIn size={20}/> 立即登录</> : <><UserPlus size={20}/> 立即注册</>)}
          </button>
        </form>

        <div className="login-footer">
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin ? '没有账号？立即注册' : '已有账号？返回登录'}
          </button>
        </div>

        <div className="premium-badge">
          <Zap size={14} fill="currentColor" /> Premium Family Ready
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top left, #4f46e5 0%, #3b82f6 50%, #2563eb 100%);
          padding: 2rem;
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 3rem 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          overflow: hidden;
        }
        .login-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .logo-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
          transform: rotate(-5deg);
        }
        h1 {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 800;
        }
        p {
          color: #64748b;
          font-size: 0.95rem;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          margin-left: 0.25rem;
        }
        input {
          background: #f8fafc;
          border: 2px solid #f1f5f9;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          transition: all 0.2s;
        }
        input:focus {
          outline: none;
          border-color: #3b82f6;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .submit-btn {
          margin-top: 1rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.2s;
        }
        .submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
        .submit-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
        .login-footer {
          margin-top: 2rem;
          text-align: center;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
        }
        .toggle-btn:hover {
          color: #2563eb;
        }
        .premium-badge {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: #fef9c3;
          color: #a16207;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
