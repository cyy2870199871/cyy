"use client";

import React, { useState, useEffect } from 'react';
import { useApp } from '@/hooks/useAppContext';
import { 
  Users, Ticket, Plus, ShieldCheck, 
  Trash2, ExternalLink, Zap, Download, RefreshCcw 
} from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('families');
  const [families, setFamilies] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [couponStats, setCouponStats] = useState({ total: 0, used: 0, unused: 0 });
  const [loading, setLoading] = useState(false);
  const [genParams, setGenParams] = useState({ count: 5, days: 31 });

  const [newFamily, setNewFamily] = useState({ username: '', password: '', name: '' });
  const [adminAuth, setAdminAuth] = useState({ username: '', password: '' });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'families') {
        const res = await fetch('/api/admin/families');
        const data = await res.json();
        setFamilies(data);
      } else {
        const res = await fetch('/api/admin/coupons');
        const data = await res.json();
        setCoupons(data.coupons || []);
        setCouponStats(data.stats || { total: 0, used: 0, unused: 0 });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchData();
    }
  }, [activeTab, isAdminAuthenticated]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminAuth.username === 'admin' && adminAuth.password === 'admin888') {
      setIsAdminAuthenticated(true);
    } else {
      alert('管理员账号或密码错误');
    }
  };

  const handleCreateFamily = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFamily)
      });
      if (res.ok) {
        alert('家庭账号创建成功！');
        setNewFamily({ username: '', password: '', name: '' });
        fetchData();
      } else {
        const error = await res.json();
        alert(error.error || '创建失败');
      }
    } catch (e) {
      alert('网络错误');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCoupons = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/coupons/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(genParams)
      });
      if (res.ok) {
        alert('卡密生成成功！');
        fetchData();
      }
    } catch (e) {
      alert('生成失败');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('已复制到剪贴板');
  };

  if (!isAdminAuthenticated) {
    return (
      <div className="admin-login-overlay">
        <div className="login-card card">
          <div className="logo"><ShieldCheck size={32} /></div>
          <h2>管理员登录</h2>
          <form onSubmit={handleAdminLogin}>
            <div className="input-group">
              <label>管理员账号</label>
              <input 
                type="text" 
                value={adminAuth.username}
                onChange={e => setAdminAuth({...adminAuth, username: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <label>后台密钥</label>
              <input 
                type="password" 
                value={adminAuth.password}
                onChange={e => setAdminAuth({...adminAuth, password: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="login-btn">进入系统</button>
          </form>
        </div>
        <style jsx>{`
          .admin-login-overlay { 
            position: fixed; inset: 0; background: #0f172a; 
            display: flex; align-items: center; justify-content: center; z-index: 9999;
          }
          .login-card { width: 360px; padding: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem; text-align: center; }
          .logo { color: #3b82f6; display: flex; justify-content: center; }
          h2 { font-size: 1.5rem; font-weight: 800; color: #1e293b; }
          form { display: flex; flex-direction: column; gap: 1.25rem; text-align: left; }
          .input-group { display: flex; flex-direction: column; gap: 0.5rem; }
          .input-group label { font-size: 0.85rem; font-weight: 700; color: #64748b; }
          .input-group input { padding: 0.75rem; border-radius: 8px; border: 1px solid #e2e8f0; width: 100%; font-weight: 600; }
          .login-btn { 
            padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 8px; 
            font-weight: 700; cursor: pointer; transition: 0.2s;
          }
          .login-btn:hover { background: #2563eb; transform: translateY(-2px); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="admin-logo">
          <ShieldCheck size={24} />
          <span>总管理后台</span>
        </div>
        
        <nav className="nav-menu">
          <button 
            className={activeTab === 'families' ? 'active' : ''} 
            onClick={() => setActiveTab('families')}
          >
            <Users size={20} /> 家庭账号管理
          </button>
          <button 
            className={activeTab === 'coupons' ? 'active' : ''} 
            onClick={() => setActiveTab('coupons')}
          >
            <Ticket size={20} /> 会员卡密管理
          </button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => window.location.href = '/'} className="exit-btn">
            退出后台
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>{activeTab === 'families' ? '家庭账号列表' : '卡密管理中心'}</h1>
          <button onClick={fetchData} className="refresh-btn" disabled={loading}>
            <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} /> 刷新
          </button>
        </header>

        {activeTab === 'families' ? (
          <div className="families-section">
            <div className="gen-tool card mb-6">
              <h3>新增家庭账号</h3>
              <form onSubmit={handleCreateFamily} className="form-row">
                <div className="input-group">
                  <label>用户名</label>
                  <input 
                    type="text" 
                    value={newFamily.username} 
                    onChange={e => setNewFamily({...newFamily, username: e.target.value})}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>密码</label>
                  <input 
                    type="password" 
                    value={newFamily.password} 
                    onChange={e => setNewFamily({...newFamily, password: e.target.value})}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>家庭名称</label>
                  <input 
                    type="text" 
                    value={newFamily.name}
                    placeholder="可选"
                    onChange={e => setNewFamily({...newFamily, name: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="gen-btn" 
                  disabled={loading}
                >
                  <Plus size={18} /> 创建账号
                </button>
              </form>
            </div>

            <div className="data-table card">
              <table>
                <thead>
                  <tr>
                    <th>账号</th>
                    <th>家庭名称</th>
                    <th>成员数</th>
                    <th>VIP状态</th>
                    <th>到期时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {families.map(f => {
                    const isVip = f.isVip && Number(f.vipExpiry) > Date.now();
                    const date = isVip ? new Date(Number(f.vipExpiry)).toLocaleDateString() : '-';
                    return (
                      <tr key={f.id}>
                        <td className="font-mono">{f.username}</td>
                        <td>{f.name || '未设置'}</td>
                        <td>{f.memberCount}</td>
                        <td>
                          <span className={`badge ${isVip ? 'badge-success' : 'badge-gray'}`}>
                            {isVip ? 'PREMIUM' : 'FREE'}
                          </span>
                        </td>
                        <td>{date}</td>
                        <td>
                          <button className="icon-btn danger" disabled><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="coupons-section">
            <div className="stats-row">
              <div className="stat-card">
                <span className="lbl">总生成</span>
                <span className="val">{couponStats.total}</span>
              </div>
              <div className="stat-card">
                <span className="lbl">待使用</span>
                <span className="val highlight">{couponStats.unused}</span>
              </div>
              <div className="stat-card">
                <span className="lbl">已兑换</span>
                <span className="val">{couponStats.used}</span>
              </div>
            </div>

            <div className="gen-tool card">
              <h3>批量生成卡密</h3>
              <div className="form-row">
                <div className="input-group">
                  <label>生成数量</label>
                  <input 
                    type="number" 
                    value={genParams.count} 
                    onChange={e => setGenParams({...genParams, count: parseInt(e.target.value)})}
                  />
                </div>
                <div className="input-group">
                  <label>有效天数</label>
                  <input 
                    type="number" 
                    value={genParams.days} 
                    onChange={e => setGenParams({...genParams, days: parseInt(e.target.value)})}
                  />
                </div>
                <button 
                  className="gen-btn" 
                  onClick={handleGenerateCoupons}
                  disabled={loading}
                >
                  <Plus size={18} /> 立即生成
                </button>
              </div>
            </div>

            <div className="data-table card mt-6">
              <table>
                <thead>
                  <tr>
                    <th>卡密 (16位加密风格)</th>
                    <th>天数</th>
                    <th>状态</th>
                    <th>兑换家庭</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map(c => (
                    <tr key={c.id}>
                      <td className="font-mono text-blue-600 font-bold">{c.code}</td>
                      <td>{c.days} 天</td>
                      <td>
                        <span className={`badge ${c.used ? 'badge-gray' : 'badge-success pulse'}`}>
                          {c.used ? '已使用' : '待兑换'}
                        </span>
                      </td>
                      <td>{c.family?.username || '-'}</td>
                      <td>
                        <button 
                          className="icon-btn" 
                          onClick={() => copyToClipboard(c.code)}
                          title="复制卡密"
                        >
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          background: #f1f5f9;
        }
        .sidebar {
          width: 260px;
          background: #1e293b;
          color: white;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
        }
        .admin-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 3rem;
          padding-left: 0.5rem;
        }
        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-menu button {
          background: none;
          border: none;
          color: #94a3b8;
          padding: 1rem 1.25rem;
          text-align: left;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .nav-menu button:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }
        .nav-menu button.active {
          background: #3b82f6;
          color: white;
        }
        .sidebar-footer {
          margin-top: auto;
          padding-top: 2rem;
        }
        .exit-btn {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255,255,255,0.1);
          color: white;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        .main-content {
          flex: 1;
          padding: 2.5rem 3rem;
          max-height: 100vh;
          overflow-y: auto;
        }
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        h1 { font-size: 1.8rem; font-weight: 800; color: #0f172a; }
        .refresh-btn {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 600;
        }

        .data-table {
          overflow: hidden;
          background: white;
        }
        table { width: 100%; border-collapse: collapse; }
        th { text-align: left; background: #f8fafc; padding: 1rem; font-size: 0.85rem; color: #64748b; font-weight: 600; }
        td { padding: 1.25rem 1rem; border-top: 1px solid #f1f5f9; font-size: 0.95rem; }
        .font-mono { font-family: monospace; }
        .badge {
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .badge-success { background: #dcfce7; color: #15803d; }
        .badge-gray { background: #f1f5f9; color: #64748b; }
        .icon-btn {
          background: none; border: none; color: #94a3b8; cursor: pointer; padding: 0.5rem; transition: 0.2s;
        }
        .icon-btn:hover { color: #3b82f6; }
        .icon-btn.danger:hover { color: #ef4444; }

        .stats-row { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
        .stat-card {
          flex: 1;
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .stat-card .lbl { font-size: 0.85rem; color: #64748b; font-weight: 700; }
        .stat-card .val { font-size: 1.75rem; font-weight: 850; color: #1e293b; }
        .stat-card .val.highlight { color: #3b82f6; }

        .gen-tool { padding: 1.5rem; }
        .gen-tool h3 { font-size: 1.1rem; margin-bottom: 1.25rem; font-weight: 750; }
        .form-row { display: flex; gap: 1.5rem; align-items: flex-end; }
        .input-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .input-group label { font-size: 0.75rem; font-weight: 700; color: #64748b; }
        .input-group input { 
          padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; width: 120px;
          font-weight: 600;
        }
        .gen-btn {
          height: 42px; background: #0f172a; color: white; border: none; padding: 0 1.5rem; border-radius: 10px;
          cursor: pointer; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;
        }
        .gen-btn:hover { background: #1e293b; }
        .mt-6 { margin-top: 1.5rem; }
        .pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .7; } }
      `}</style>
    </div>
  );
}
