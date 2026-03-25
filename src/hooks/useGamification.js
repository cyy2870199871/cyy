"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useApp } from './useAppContext';

const PetContext = createContext();

export const ALL_PET_TYPES = [
  { id: 'corgi', name: '柯基', image: '/pets/corgi.png', rarity: 'common', cost: 0, desc: '活泼好动的小短腿' },
  { id: 'shiba', name: '柴犬', image: '/pets/shiba.png', rarity: 'common', cost: 100, desc: '呆萌治愈的微笑天使' },
  { id: 'golden', name: '金毛大暖男', image: '/pets/golden.png', rarity: 'rare', cost: 300, desc: '阳光温柔的居家伴侣' },
  { id: 'rabbit', name: '垂耳兔', image: '/pets/rabbit.png', rarity: 'rare', cost: 250, desc: '毛茸茸的乖巧甜心' },
  { id: 'hamster', name: '贪吃仓鼠', image: '/pets/hamster.png', rarity: 'epic', cost: 800, desc: '脸颊塞满瓜子的胖墩' },
  { id: 'ragdoll', name: '布偶猫', image: '/pets/ragdoll.png', rarity: 'legendary', cost: 1500, desc: '拥有星辰大海般双眼的仙女' },
  // New Pets (Using Improved Online Assets)
  { id: 'husky', name: '哈士奇', image: '/pets/husky.png', rarity: 'epic', cost: 900, desc: '拆房小能手，眼神里透着智慧(二哈)' },
  { id: 'samoyed', name: '萨摩耶', image: '/pets/samoyed.png', rarity: 'rare', cost: 600, desc: '微笑天使，治愈系白云团子' },
  { id: 'panda', name: '大熊猫', image: '/pets/panda.png', rarity: 'legendary', cost: 2000, desc: '国宝级选手，除了吃就是睡' },
  { id: 'capybara', name: '水豚', image: '/pets/capybara.png', rarity: 'legendary', cost: 1800, desc: '情绪极其稳定的精神领袖' },
  { id: 'fox', name: '小狐狸', image: '/pets/fox.png', rarity: 'rare', cost: 500, desc: '聪明伶俐的红狐，尾巴超级蓬松' },
  { id: 'koala', name: '考拉', image: '/pets/koala.png', rarity: 'epic', cost: 800, desc: '职业发呆选手，永远在睡觉的边缘徘徊' },
  { id: 'axolotl', name: '六角恐龙', image: '/pets/axolotl.png', rarity: 'epic', cost: 1100, desc: '粉嫩的水中精灵，治愈系数爆表' },
  { id: 'penguin', name: '小企鹅', image: '/pets/penguin.png', rarity: 'rare', cost: 450, desc: '来自南极的小绅士，走起路摇摇晃晃' },
  { id: 'dragon', name: '小福龙', image: '/pets/dragon.png', rarity: 'mythic', cost: 5000, desc: '传说中的吉祥神兽，能带来无尽福气' },
  { id: 'calico', name: '三花猫', image: '/pets/calico.png', rarity: 'common', cost: 200, desc: '性格灵动的招财小猫' },
  { id: 'greycat', name: '小灰猫', image: '/pets/greycat.png', rarity: 'common', cost: 150, desc: '乖巧温顺的身后跟班' },
];

export function PetProvider({ children }) {
  const { user, addPoints, isInitialized: appInitialized } = useApp();
  
  const initialPet = {
    name: '小汤圆Buddy',
    typeId: 'corgi',
    level: 1,
    intimacy: 0,
    fullness: 80,
    cleanliness: 90,
    mood: 85,
  };

  const [pet, setPet] = useState(null);
  const [myPets, setMyPets] = useState(['corgi']); 
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from API and Migration
  useEffect(() => {
    if (appInitialized && user?.id) {
      const loadPetData = async () => {
        setIsInitialized(false);
        try {
          const res = await fetch(`/api/pets?userId=${user.id}`);
          const data = await res.json();
          
          let dbPet = data.pet;
          let dbMyPets = data.unlockedPets;

          // Migration: If no pet in DB, check localStorage
          if (!dbPet) {
            const savedPet = localStorage.getItem(`bj_pet_${user.id}`);
            const savedMyPets = localStorage.getItem(`bj_my_pets_${user.id}`);
            
            const petToMigrate = savedPet ? JSON.parse(savedPet) : initialPet;
            const myPetsToMigrate = savedMyPets ? JSON.parse(savedMyPets) : ['corgi'];

            const resPost = await fetch('/api/pets', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                ...petToMigrate, 
                userId: user.id,
                unlockedPets: myPetsToMigrate
              })
            });
            if (resPost.ok) {
              dbPet = await resPost.json();
              dbMyPets = myPetsToMigrate;
            }
          }

          if (dbPet) setPet(dbPet);
          if (dbMyPets) {
            // Ensure current pet is always in the unlocked list
            if (dbPet && !dbMyPets.includes(dbPet.typeId)) {
              dbMyPets.push(dbPet.typeId);
            }
            setMyPets(dbMyPets);
          }
          setIsInitialized(true);
        } catch (error) {
          console.error('Load pet error:', error);
          setIsInitialized(true);
        }
      };
      
      loadPetData();
    }
  }, [user?.id, appInitialized]);

  const levelName = (lvl) => {
    if (lvl >= 5) return '超默契';
    if (lvl >= 4) return '最佳伙伴';
    if (lvl >= 3) return '好伙伴';
    if (lvl >= 2) return '好朋友';
    return '刚认识';
  };

  const updatePetRemote = async (updatedPet, updatedMyPets = null) => {
    try {
      await fetch(`/api/pets?userId=${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...updatedPet, 
          unlockedPets: updatedMyPets || myPets 
        })
      });
    } catch (error) {
      console.error('Update pet persistence error:', error);
    }
  };

  const interact = async (type) => {
    if (!pet) return false;
    const config = {
      feed: { cost: 10, fullness: 20, intimacy: 5, mood: 5 },
      wash: { cost: 15, cleanliness: 30, intimacy: 8, mood: -5 },
      play: { cost: 20, mood: 30, fullness: -10, intimacy: 12 },
      sleep: { cost: 8, mood: 10, fullness: -5, intimacy: 3 }
    };

    const action = config[type];
    if (user.points < action.cost) {
      alert('星星不足，快去打卡赚星星吧！');
      return false;
    }

    addPoints(-action.cost);
    
    // Update local state
    const newPet = {
      ...pet,
      fullness: Math.min(100, Math.max(0, pet.fullness + (action.fullness || 0))),
      cleanliness: Math.min(100, Math.max(0, pet.cleanliness + (action.cleanliness || 0))),
      mood: Math.min(100, Math.max(0, pet.mood + (action.mood || 0))),
      intimacy: pet.intimacy + (action.intimacy || 0)
    };
    
    // Level calculation
    if (newPet.intimacy >= 700) newPet.level = 5;
    else if (newPet.intimacy >= 300) newPet.level = 4;
    else if (newPet.intimacy >= 150) newPet.level = 3;
    else if (newPet.intimacy >= 50) newPet.level = 2;
    
    setPet(newPet);
    updatePetRemote(newPet);
    return true;
  };

  const unlockPet = async (typeId) => {
    const petType = ALL_PET_TYPES.find(t => t.id === typeId);
    if (!petType) return;
    if (myPets.includes(typeId)) return switchPet(typeId);

    if (user.points < petType.cost) {
      alert('星星不足，无法领养新宠物');
      return;
    }

    addPoints(-petType.cost);
    const newMyPets = [...myPets, typeId];
    setMyPets(newMyPets);
    
    const newPet = { ...pet, typeId };
    setPet(newPet);
    updatePetRemote(newPet, newMyPets);
  };

  const switchPet = async (typeId) => {
    const newPet = { ...pet, typeId };
    setPet(newPet);
    updatePetRemote(newPet);
  };

  const renamePet = async (name) => {
    const newPet = { ...pet, name };
    setPet(newPet);
    updatePetRemote(newPet);
  };

  return (
    <PetContext.Provider value={{
      pet: pet || initialPet,
      myPets,
      interact,
      renamePet,
      unlockPet,
      switchPet,
      levelName: levelName(pet?.level || 1),
      isInitialized
    }}>
      {children}
    </PetContext.Provider>
  );
}

export function usePet() {
  const context = useContext(PetContext);
  if (!context) throw new Error('usePet must be used within a PetProvider');
  return context;
}
