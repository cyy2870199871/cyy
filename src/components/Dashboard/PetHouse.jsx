"use client";

import { usePet, ALL_PET_TYPES } from "@/hooks/useGamification";
import { Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PetHouse() {
  const { pet, levelName } = usePet();

  const currentType = ALL_PET_TYPES.find(t => t.id === pet.typeId) || ALL_PET_TYPES[0];

  // Ensure values are within valid ranges
  const safeFullness = Math.min(100, Math.max(0, Number(pet.fullness) || 0));
  const safeMood = Math.min(100, Math.max(0, Number(pet.mood) || 0));

  const nextLevelIntimacy = pet.level >= 4 ? 300 : (pet.level === 3 ? 300 : (pet.level === 2 ? 150 : 50));
  const progressPercent = Math.min(100, (pet.intimacy / nextLevelIntimacy) * 100);

  return (
    <div className="pet-house animate-fade-in">
      <Link href="/pet" className="pet-container">
        <div className="pet-header">
          <div className="pet-info">
            <h3>{pet.name}</h3>
            <p className="level-badge">{levelName} Lv.{pet.level}</p>
          </div>
          <ChevronRight size={20} className="arrow" />
        </div>

        <div className="pet-body">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="pet-avatar-box"
          >
            <img 
              src={currentType.image || '/pets/corgi.png'} 
              alt={currentType.name} 
              className="pet-img" 
              style={{ display: 'block' }}
              onError={(e) => { 
                if (e.target.src !== window.location.origin + '/pets/corgi.png') {
                  e.target.src = '/pets/corgi.png'; 
                }
              }}
            />
          </motion.div>

          <div className="pet-stats">
            <div className="stat-row">
              <span className="stat-label">饱腹度</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${safeFullness}%`, backgroundColor: '#F59E0B' }}
                />
              </div>
              <span className="stat-value">{safeFullness}%</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">心情值</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${safeMood}%`, backgroundColor: '#EC4899' }}
                />
              </div>
              <span className="stat-value">{safeMood}%</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">亲密度</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%`, backgroundColor: '#10B981' }}
                />
              </div>
              <span className="stat-value">{pet.intimacy}/{nextLevelIntimacy}</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .pet-container { display: block; text-decoration: none; color: inherit; transition: all 0.2s; }
        .pet-container:hover { transform: translateX(4px); }
        .pet-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.2rem; }
        .pet-info h3 { font-size: 1.05rem; font-weight: 900; margin-bottom: 0.3rem; color: #1e293b; }
        .level-badge { font-size: 0.75rem; background: #eff6ff; color: #3b82f6; padding: 0.2rem 0.6rem; border-radius: 8px; display: inline-block; font-weight: 800; }
        .arrow { color: #94a3b8; }

        .pet-body { display: flex; align-items: center; gap: 1.2rem; }
        
        .pet-avatar-box { 
          width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; 
          background: white; border-radius: 16px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          border: 3px solid white; overflow: hidden;
        }
        .pet-img { width: 30%; height: 30%; object-fit: cover; pointer-events: none; }

        .pet-stats { flex: 1; display: flex; flex-direction: column; gap: 0.85rem; }
        .stat-row { display: flex; align-items: center; gap: 0.75rem; }
        .stat-label { font-size: 0.75rem; color: #64748b; font-weight: 800; width: 2.8rem; }
        .progress-bar { flex: 1; height: 8px; background: #f1f5f9; border-radius: 999px; overflow: hidden; }
        .progress-fill { height: 100%; border-radius: 999px; transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .stat-value { font-size: 0.7rem; color: #94a3b8; font-weight: 800; width: 2.5rem; text-align: right; }
      `}</style>
    </div>
  );
}
