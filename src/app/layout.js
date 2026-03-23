"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AppProvider } from '@/hooks/useAppContext';
import { HabitsProvider } from '@/hooks/useHabits';
import { PetProvider } from '@/hooks/useGamification';
import { LearningProvider } from '@/hooks/useLearningPlan';
import { RewardsProvider } from '@/hooks/useRewards';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <AppProvider>
          <LearningProvider>
            <HabitsProvider>
              <RewardsProvider>
                <PetProvider>
                  {children}
                </PetProvider>
              </RewardsProvider>
            </HabitsProvider>
          </LearningProvider>
        </AppProvider>
      </body>
    </html>
  );
}
