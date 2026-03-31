"use client";

import React, { useState, useEffect } from "react";
import { X, Share, PlusSquare, Download, Smartphone, Monitor } from "lucide-react";

/**
 * 统一的 PWA 安装引导组件
 * 支持 iOS (气泡式引导), Android (APK 下载), Desktop (原生 PWA 弹窗)
 */
const AddtoHomeScreenGuide = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [platform, setPlatform] = useState("desktop"); // 'ios' | 'android' | 'desktop'
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // 1. 基本环境检测
    const ua = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) ||
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/.test(ua);

    // 2. 检测是否已在独立模式/App模式运行
    const isStandalone =
      window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches ||
      !!window.Capacitor;

    if (isStandalone) return;

    // 设置当前平台
    if (isIOS) setPlatform("ios");
    else if (isAndroid) setPlatform("android");
    else setPlatform("desktop");

    // 3. 记录关闭状态 (使用 v2 key 以便你重新验证)
    const isDismissed = localStorage.getItem("pwa_install_guide_v2_dismissed") === "true";
    if (isDismissed) return;

    // 4. 电脑/安卓浏览器原生 PWA 监听
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowGuide(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 所有平台：延迟 3 秒自动显示（如果没被关闭且没被安装）
    const timer = setTimeout(() => {
      setShowGuide(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleDismiss = () => {
    setShowGuide(false);
    localStorage.setItem("pwa_install_guide_v2_dismissed", "true");
  };

  const handleInstallClick = async () => {
    if (platform === "android") {
      // 触发 APK 下载链接
      window.location.href = "https://dfgfdg.siw22.cn/xiaodaka.apk";
      handleDismiss();
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        handleDismiss();
      }
      setDeferredPrompt(null);
    } else if (platform === "desktop") {
      alert("请在浏览器地址栏右侧点击‘安装’图标进行安装。");
    }
  };

  if (!showGuide) return null;

  // iOS 渲染气泡风格
  if (platform === "ios") {
    return (
      <div className="ios-guide-container">
        <div className="ios-guide-bubble">
          <button className="close-btn" onClick={handleDismiss} aria-label="关闭">
            <X size={16} />
          </button>
          <div className="content">
            <div className="title">📱 添加到主屏幕</div>
            <p className="description">
              点击下方 <span className="icon-wrap"><Share size={16} className="inline-icon" /></span> 按钮
              并选择 <span className="highlight">“添加到主屏幕”</span>
              <span className="icon-wrap"><PlusSquare size={16} className="inline-icon" /></span>
              即可快速访问！
            </p>
          </div>
          <div className="arrow-indicator"></div>
        </div>
        <style jsx>{iOS_Styles}</style>
      </div>
    );
  }

  // Android 和 Desktop 渲染横幅风格
  return (
    <div className="banner-guide-container">
      <div className="banner-guide-card">
        <div className="main">
          <div className="icon-box">
            {platform === "android" ? <Smartphone size={20} /> : <Monitor size={20} />}
          </div>
          <div className="text-content">
            <h4 className="title">{platform === "android" ? "下载官方 App" : "将应用保存到桌面"}</h4>
            <p className="desc">{platform === "android" ? "安装 APK 原生版，体验更流畅" : "点击立即安装，无需地址栏快速访问"}</p>
          </div>
        </div>
        <div className="actions">
          <button className="install-btn" onClick={handleInstallClick}>
            {platform === "android" ? "立即下载" : "立即安装"}
          </button>
          <button className="close-btn-simple" onClick={handleDismiss}>
            <X size={18} />
          </button>
        </div>
      </div>
      <style jsx>{Banner_Styles}</style>
    </div>
  );
};

const iOS_Styles = `
  .ios-guide-container {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    width: 90%;
    max-width: 320px;
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ios-guide-bubble {
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 16px 20px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .close-btn { position: absolute; top: 10px; right: 10px; border: none; background: none; color: #999; cursor: pointer; padding: 4px; }
  .title { font-weight: 700; font-size: 16px; color: #111; margin-bottom: 6px; }
  .description { font-size: 14px; color: #444; line-height: 1.6; margin: 0; }
  .highlight { font-weight: 700; color: #e11d48; }
  .icon-wrap { display: inline-flex; align-items: center; justify-content: center; vertical-align: middle; background: #f3f4f6; padding: 2px; border-radius: 4px; margin: 0 2px; }
  .inline-icon { color: #007aff; }
  .arrow-indicator { position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid rgba(255, 255, 255, 0.95); }
  @keyframes slideUp { from { transform: translate(-50%, 60px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
  @supports (padding-bottom: env(safe-area-inset-bottom)) { .ios-guide-container { bottom: calc(20px + env(safe-area-inset-bottom)); } }
`;

const Banner_Styles = `
  .banner-guide-container {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 480px;
    z-index: 10000;
    animation: slideUpBanner 0.4s ease-out;
  }
  .banner-guide-card {
    background: #e11d48;
    color: white;
    padding: 1rem 1.25rem;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 12px 30px rgba(225, 29, 72, 0.35);
  }
  .main { display: flex; align-items: center; gap: 1rem; }
  .icon-box { background: rgba(255, 255, 255, 0.2); padding: 0.5rem; border-radius: 12px; }
  .text-content { }
  .text-content .title { font-size: 0.95rem; font-weight: 800; margin: 0; }
  .text-content .desc { font-size: 0.75rem; opacity: 0.9; margin: 0; margin-top: 2px; }
  .actions { display: flex; align-items: center; gap: 0.75rem; }
  .install-btn { background: white; color: #e11d48; border: none; padding: 0.5rem 1rem; border-radius: 12px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: transform 0.2s; }
  .install-btn:active { transform: scale(0.95); }
  .close-btn-simple { background: rgba(0,0,0,0.1); border: none; color: white; border-radius: 50%; padding: 4px; cursor: pointer; }
  @keyframes slideUpBanner { from { transform: translate(-50%, 20px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
  @media (max-width: 480px) {
    .banner-guide-card { padding: 0.75rem 1rem; }
    .icon-box { display: none; }
  }
`;

export default AddtoHomeScreenGuide;
