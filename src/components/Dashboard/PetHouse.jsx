"use client";

import { usePet } from "@/hooks/useGamification";
import { Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PetHouse() {
  const { pet, levelName } = usePet();

  // Ensure values are within 0-100 and valid numbers
  const safeFullness = Math.min(100, Math.max(0, Number(pet.fullness) || 0));
  const safeMood = Math.min(100, Math.max(0, Number(pet.mood) || 0));

  return (
    <div className="pet-house animate-fade-in">
      <Link href="/pet" className="pet-container">
        <div className="pet-header">
          <div className="pet-info">
            <h3>我的宠物：{pet.name}</h3>
            <p className="level-badge">{levelName} Lv.{pet.level}</p>
          </div>
          <ChevronRight size={20} className="arrow" />
        </div>

        <div className="pet-body">
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pet-avatar"
          >
            <span className="emoji">🐶</span>
          </motion.div>

          <div className="pet-stats">
            <div className="stat-row">
              <span className="stat-label">饱腹度</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill fullness" 
                  style={{ 
                    width: `${safeFullness}%`,
                    backgroundColor: '#F59E0B'
                  }} 
                />
              </div>
            </div>
            <div className="stat-row">
              <span className="stat-label">心情值</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill mood" 
                  style={{ 
                    width: `${safeMood}%`,
                    backgroundColor: '#EC4899'
                  }} 
                />
              </div>
            </div>
            <div className="intimacy">
              <Heart size={14} fill="#EC4899" color="#EC4899" />
              <span>亲密度：{pet.intimacy || 0}</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .pet-container { display: block; text-decoration: none; color: inherit; transition: all 0.2s; }
        .pet-container:hover { transform: translateX(6px); }
        .pet-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
        .pet-info h3 { font-size: 1rem; font-weight: 800; margin-bottom: 0.25rem; color: #1e293b; }
        .level-badge { font-size: 0.7rem; background: #eff6ff; color: #3b82f6; padding: 0.1rem 0.6rem; border-radius: 6px; display: inline-block; font-weight: 800; }
        .arrow { color: #94a3b8; }

        .pet-body { display: flex; align-items: center; gap: 1.5rem; }
        .pet-avatar { 
          width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; 
          background: #f8fafc; border-radius: 20px; 
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          border: 1px solid #f1f5f9;
        }
        .emoji { font-size: 2.8rem; }

        .pet-stats { flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
        .stat-row { display: flex; align-items: center; gap: 0.75rem; }
        .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 700; width: 3rem; }
        .progress-bar { flex: 1; height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; position: relative; }
        .progress-fill { height: 100%; border-radius: 4px; transition: width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        
        .intimacy { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; font-weight: 800; color: #EC4899; }
      `}</style>
    </div>
  );
}
