"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useApp } from './useAppContext';

const RewardsContext = createContext();

const DEFAULT_WISHES = [
  { title: '吃一支冰淇淋', icon: '🍦', cost: 10, category: '食品', repeatType: 'MULTIPLE', count: 0 },
  { title: '玩30分钟游戏', icon: '🎮', cost: 20, category: '娱乐', repeatType: 'MULTIPLE', count: 0 },
  { title: '买一套新乐高', icon: '🧱', cost: 100, category: '玩具', repeatType: 'SINGLE', count: 0 },
];

const DEFAULT_MEDALS = [
  { title: '初露锋芒', icon: '🥈', desc: '累计完成5个任务', target: 5, current: 0, unlocked: false, reward: 20 },
  { title: '打卡达人', icon: '🥇', desc: '连续打卡7天', target: 7, current: 0, unlocked: false, reward: 50 },
  { title: '博览群书', icon: '📚', desc: '累计阅读10小时', target: 600, current: 0, unlocked: false, reward: 100 },
];

export function RewardsProvider({ children }) {
  const { user, addPoints, isInitialized: appInitialized } = useApp();
  const [wishes, setWishes] = useState([]);
  const [medals, setMedals] = useState([]);
  const [history, setHistory] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from API and Migration
  useEffect(() => {
    if (appInitialized && user?.id) {
      const loadRewardsData = async () => {
        setIsInitialized(false);
        try {
          const res = await fetch(`/api/rewards?userId=${user.id}`);
          const data = await res.json();
          
          let dbWishes = data.wishes || [];
          let dbMedals = data.medals || [];
          let dbHistory = data.history || [];

          // Migration: If no wishes in DB, check localStorage or use defaults
          if (dbWishes.length === 0) {
            const savedWishes = localStorage.getItem(`bj_wishes_${user.id}`);
            const wishesToMigrate = savedWishes ? JSON.parse(savedWishes) : DEFAULT_WISHES;
            for (const w of wishesToMigrate) {
              const resPost = await fetch('/api/rewards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'WISH', data: w, userId: user.id })
              });
              if (resPost.ok) dbWishes.push(await resPost.json());
            }
          }

          if (dbMedals.length === 0) {
            const savedMedals = localStorage.getItem(`bj_medals_${user.id}`);
            const medalsToMigrate = savedMedals ? JSON.parse(savedMedals) : DEFAULT_MEDALS;
            for (const m of medalsToMigrate) {
              const resPost = await fetch('/api/rewards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'MEDAL', data: m, userId: user.id })
              });
              if (resPost.ok) dbMedals.push(await resPost.json());
            }
          }

          if (dbHistory.length === 0) {
            const savedHistory = localStorage.getItem(`bj_history_${user.id}`);
            if (savedHistory) {
              const historyToMigrate = JSON.parse(savedHistory);
              for (const h of historyToMigrate) {
                const resPost = await fetch('/api/rewards', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ type: 'HISTORY', data: h, userId: user.id })
                });
                if (resPost.ok) dbHistory.push(await resPost.json());
              }
            }
          }

          setWishes(dbWishes);
          setMedals(dbMedals);
          setHistory(dbHistory);
          setIsInitialized(true);
        } catch (error) {
          console.error('Load rewards error:', error);
          setIsInitialized(true);
        }
      };
      
      loadRewardsData();
    }
  }, [user?.id, appInitialized]);

  const addHistory = async (type, amount, reason) => {
    const data = {
      type, // 'GAIN' or 'LOSS'
      amount,
      reason,
      date: new Date().toISOString()
    };
    try {
      const res = await fetch('/api/rewards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'HISTORY', data, userId: user.id })
      });
      if (res.ok) {
        const newHistoryItem = await res.json();
        setHistory(prev => [newHistoryItem, ...prev]);
      }
    } catch (error) {
      console.error('Add history error:', error);
    }
  };

  const addWish = async (wishData) => {
    const data = { ...wishData, count: 0 };
    try {
      const res = await fetch('/api/rewards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'WISH', data, userId: user.id })
      });
      if (res.ok) {
        const newWish = await res.json();
        setWishes(prev => [...prev, newWish]);
      }
    } catch (error) {
      console.error('Add wish error:', error);
    }
  };

  const redeemWish = async (id) => {
    const wish = wishes.find(w => w.id === id);
    if (!wish) return { success: false, message: '愿望不存在' };
    
    if (user.points < wish.cost) {
      return { success: false, message: `星星不足！还差 ${wish.cost - user.points} 个` };
    }

    addPoints(-wish.cost);
    const updatedWish = { ...wish, count: wish.count + 1 };
    setWishes(prev => prev.map(w => w.id === id ? updatedWish : w));
    
    try {
      await fetch(`/api/rewards/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'WISH', data: updatedWish })
      });
      addHistory('LOSS', wish.cost, `兑换愿望: ${wish.title}`);
    } catch (error) {
      console.error('Redeem wish error:', error);
    }
    
    return { success: true, message: '兑换成功！快去享受吧' };
  };

  const checkMedals = async (stats) => {
    const updatedMedals = [];
    for (const m of medals) {
      if (m.unlocked) {
        updatedMedals.push(m);
        continue;
      }
      let newValue = m.current;
      if (m.title === '初露锋芒') newValue = stats.completedTasks || 0;
      
      const isUnlocked = newValue >= m.target;
      const updatedM = { ...m, current: newValue, unlocked: isUnlocked };
      
      if (isUnlocked && !m.unlocked) {
        addPoints(m.reward);
        addHistory('GAIN', m.reward, `解锁勋章: ${m.title}`);
      }
      
      if (newValue !== m.current || isUnlocked !== m.unlocked) {
        try {
          await fetch(`/api/rewards/${m.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'MEDAL', data: updatedM })
          });
        } catch (e) {}
      }
      updatedMedals.push(updatedM);
    }
    setMedals(updatedMedals);
  };

  return (
    <RewardsContext.Provider value={{ 
      wishes, medals, history,
      addWish, redeemWish, addHistory, checkMedals,
      isInitialized 
    }}>
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const context = useContext(RewardsContext);
  if (!context) throw new Error('useRewards must be used within a RewardsProvider');
  return context;
}
