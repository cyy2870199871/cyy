"use client";

import { useApp } from "@/hooks/useAppContext";
import { useEffect } from "react";

export const THEMES = {
  blue: {
    name: '冰川蓝',
    icon: '🌊',
    color: '#3B82F6',
    vars: `
      --primary: #3B82F6;
      --primary-dark: #2563EB;
      --primary-light: #EFF6FF;
      --gender-gradient: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
      --gender-shadow: rgba(37, 99, 235, 0.2);
      --gender-soft: #EFF6FF;
      --gender-text: #1d4ed8;
    `
  },
  pink: {
    name: '樱花粉',
    icon: '🌸',
    color: '#EC4899',
    vars: `
      --primary: #EC4899;
      --primary-dark: #DB2777;
      --primary-light: #FDF2F8;
      --gender-gradient: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
      --gender-shadow: rgba(236, 72, 153, 0.2);
      --gender-soft: #FDF2F8;
      --gender-text: #be185d;
    `
  },
  green: {
    name: '森林绿',
    icon: '🌿',
    color: '#10B981',
    vars: `
      --primary: #10B981;
      --primary-dark: #059669;
      --primary-light: #ECFDF5;
      --gender-gradient: linear-gradient(135deg, #059669 0%, #10b981 100%);
      --gender-shadow: rgba(16, 185, 129, 0.2);
      --gender-soft: #ECFDF5;
      --gender-text: #047857;
    `
  },
  purple: {
    name: '梦幻紫',
    icon: '💜',
    color: '#8B5CF6',
    vars: `
      --primary: #8B5CF6;
      --primary-dark: #7C3AED;
      --primary-light: #F5F3FF;
      --gender-gradient: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
      --gender-shadow: rgba(139, 92, 246, 0.2);
      --gender-soft: #F5F3FF;
      --gender-text: #6d28d9;
    `
  },
  orange: {
    name: '活力橙',
    icon: '🌅',
    color: '#F97316',
    vars: `
      --primary: #F97316;
      --primary-dark: #EA580C;
      --primary-light: #FFF7ED;
      --gender-gradient: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
      --gender-shadow: rgba(249, 115, 22, 0.2);
      --gender-soft: #FFF7ED;
      --gender-text: #c2410c;
    `
  },
  rose: {
    name: '玫瑰红',
    icon: '🌹',
    color: '#E11D48',
    vars: `
      --primary: #E11D48;
      --primary-dark: #BE123C;
      --primary-light: #FFF1F2;
      --gender-gradient: linear-gradient(135deg, #be123c 0%, #e11d48 100%);
      --gender-shadow: rgba(225, 29, 72, 0.2);
      --gender-soft: #FFF1F2;
      --gender-text: #9f1239;
    `
  },
  cyan: {
    name: '清新青',
    icon: '🏖️',
    color: '#06B6D4',
    vars: `
      --primary: #06B6D4;
      --primary-dark: #0891B2;
      --primary-light: #ECFEFF;
      --gender-gradient: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
      --gender-shadow: rgba(6, 182, 212, 0.2);
      --gender-soft: #ECFEFF;
      --gender-text: #0e7490;
    `
  },
  yellow: {
    name: '暖阳黄',
    icon: '🌼',
    color: '#EAB308',
    vars: `
      --primary: #EAB308;
      --primary-dark: #CA8A04;
      --primary-light: #FEFCE8;
      --gender-gradient: linear-gradient(135deg, #ca8a04 0%, #eab308 100%);
      --gender-shadow: rgba(234, 179, 8, 0.2);
      --gender-soft: #FEFCE8;
      --gender-text: #a16207;
    `
  },
  teal: {
    name: '抹茶绿',
    icon: '🍵',
    color: '#14B8A6',
    vars: `
      --primary: #14B8A6;
      --primary-dark: #0D9488;
      --primary-light: #F0FDFA;
      --gender-gradient: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
      --gender-shadow: rgba(20, 184, 166, 0.2);
      --gender-soft: #F0FDFA;
      --gender-text: #0f766e;
    `
  },
  fuchsia: {
    name: '星空紫',
    icon: '🌌',
    color: '#D946EF',
    vars: `
      --primary: #D946EF;
      --primary-dark: #C026D3;
      --primary-light: #FDF4FF;
      --gender-gradient: linear-gradient(135deg, #c026d3 0%, #d946ef 100%);
      --gender-shadow: rgba(217, 70, 239, 0.2);
      --gender-soft: #FDF4FF;
      --gender-text: #a21caf;
    `
  },
  amber: {
    name: '咖啡棕',
    icon: '☕',
    color: '#D97706',
    vars: `
      --primary: #D97706;
      --primary-dark: #B45309;
      --primary-light: #FFFBEB;
      --gender-gradient: linear-gradient(135deg, #b45309 0%, #d97706 100%);
      --gender-shadow: rgba(217, 119, 6, 0.2);
      --gender-soft: #FFFBEB;
      --gender-text: #92400e;
    `
  },
  slate: {
    name: '极夜灰',
    icon: '🌙',
    color: '#475569',
    vars: `
      --primary: #475569;
      --primary-dark: #334155;
      --primary-light: #F8FAFC;
      --gender-gradient: linear-gradient(135deg, #334155 0%, #475569 100%);
      --gender-shadow: rgba(71, 85, 105, 0.2);
      --gender-soft: #F8FAFC;
      --gender-text: #1e293b;
    `
  }
};

export default function ThemeInjector() {
  const { theme } = useApp();

  useEffect(() => {
    const currentTheme = THEMES[theme] || THEMES.blue;
    const vars = currentTheme.vars;
    
    let style = document.getElementById("app-theme-vars");
    if (!style) {
      style = document.createElement("style");
      style.id = "app-theme-vars";
      document.head.appendChild(style);
    }
    style.textContent = `:root { ${vars} }`;
    
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Remove legacy gender-theme-vars if it exists
  useEffect(() => {
    const oldStyle = document.getElementById("gender-theme-vars");
    if (oldStyle) oldStyle.remove();
  }, []);

  return null;
}
