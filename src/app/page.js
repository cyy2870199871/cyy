"use client";

import Header from "@/components/Dashboard/Header";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import QuickActions from "@/components/Dashboard/QuickActions";
import MainTabs from "@/components/Dashboard/MainTabs";
import PetHouse from "@/components/Dashboard/PetHouse";
import InstallPrompt from "@/components/Dashboard/InstallPrompt";

export default function DashboardPage() {
  return (
    <div className="dashboard-container animate-fade-in">
      <Header />
      
      <div className="dashboard-content">
        <StatsGrid />
        
        <div className="main-info-card card">
          <QuickActions />
          <div className="divider" />
          <PetHouse />
        </div>

        <MainTabs />
      </div>

      <InstallPrompt />

      <style jsx>{`
        .dashboard-container {
          min-height: 100vh;
          padding-bottom: 5rem;
          background-color: var(--bg-main);
        }
        .dashboard-content {
          padding: 0 1rem;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .main-info-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }
        .divider {
          height: 1px;
          background: #f1f5f9;
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}
