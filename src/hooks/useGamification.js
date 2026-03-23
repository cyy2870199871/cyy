"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useApp } from './useAppContext';

const PetContext = createContext();

export const ALL_PET_TYPES = [
  { id: 'teddy', name: '泰迪', icon: '🐶', rarity: 'common', cost: 0, desc: '活泼好动的小淘气' },
  { id: 'bichon', name: '比熊', icon: '🐩', rarity: 'common', cost: 100, desc: '像棉花糖一样软糯' },
  { id: 'husky', name: '哈士奇', icon: '🐺', rarity: 'rare', cost: 300, desc: '英俊潇潇的二哈' },
  { id: 'calico', name: '三花猫', icon: '🐱', rarity: 'rare', cost: 250, desc: '安静优雅的伙伴' },
  { id: 'devil', name: '小恶魔', icon: '😈', rarity: 'epic', cost: 800, desc: '有点调皮的神秘伙伴' },
  { id: 'phoenix', name: '烈焰凤凰', icon: '🦜', rarity: 'legendary', cost: 1500, desc: '浴火重生的神圣之鸟' },
  { id: 'mecha', name: '机械战甲', icon: '🤖', rarity: 'legendary', cost: 2000, desc: '充满未来科技感的守护者' },
  { id: 'dragon', name: '翡翠神龙', icon: '🐉', rarity: 'mythical', cost: 5000, desc: '掌控自然之力的上古神龙' },
];

export function PetProvider({ children }) {
  const { user, addPoints, isInitialized: appInitialized } = useApp();
  
  const initialPet = {
    name: '小汤圆Buddy',
    typeId: 'teddy',
    level: 1,
    intimacy: 0,
    fullness: 80,
    cleanliness: 90,
    mood: 85,
  };

  const [pet, setPet] = useState(null);
  const [myPets, setMyPets] = useState(['teddy']); 
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
            const myPetsToMigrate = savedMyPets ? JSON.parse(savedMyPets) : ['teddy'];

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
          if (dbMyPets) setMyPets(dbMyPets);
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
    if (newPet.intimacy >= 300) newPet.level = 4;
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
