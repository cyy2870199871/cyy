"use client";

import { useHabits } from "@/hooks/useHabits";
import { useApp } from "@/hooks/useAppContext";
import { useMemo } from "react";
import { Flame } from "lucide-react";

function getDates(days = 365) {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

function getWeekday(dateStr) {
  return new Date(dateStr).getDay(); // 0=Sun 6=Sat
}

const MONTH_LABELS = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const DAY_LABELS = ["日", "一", "三", "五"];
const DAY_LABEL_ROWS = [0, 2, 4, 6]; // Sun,Tue,Thu,Sat spaced

export default function CheckInHeatmap() {
  const { records } = useHabits();
  const { gender } = useApp();

  const isFemale = gender === "female";
  const colorScale = isFemale
    ? ["#fce7f3", "#f9a8d4", "#f472b6", "#ec4899", "#be185d"]
    : ["#dbeafe", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"];
  const activeColor = isFemale ? "#ec4899" : "#3b82f6";

  const dates = useMemo(() => getDates(365), []);

  // Build a map: date → count of positiveCheckIns that day
  const countMap = useMemo(() => {
    const m = {};
    records.forEach((r) => {
      if (r.pointsChange > 0 && r.date) {
        m[r.date] = (m[r.date] || 0) + 1;
      }
    });
    return m;
  }, [records]);

  // Compute max for color scale
  const maxCount = useMemo(() => {
    const vals = Object.values(countMap);
    return vals.length > 0 ? Math.max(...vals) : 4;
  }, [countMap]);

  const getColor = (count) => {
    if (!count) return "#f1f5f9";
    const idx = Math.min(Math.floor((count / maxCount) * 4), 4);
    return colorScale[idx];
  };

  // Build grid: pad start so first date aligns to correct weekday
  const firstDayOfWeek = getWeekday(dates[0]);
  const paddedDates = [...Array(firstDayOfWeek).fill(null), ...dates];
  // Split into columns of 7
  const weeks = [];
  for (let i = 0; i < paddedDates.length; i += 7) {
    weeks.push(paddedDates.slice(i, i + 7));
  }

  // Month labels: find which column index each month starts at
  const monthPositions = useMemo(() => {
    const positions = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const firstReal = week.find((d) => d !== null);
      if (firstReal) {
        const m = new Date(firstReal).getMonth();
        if (m !== lastMonth) {
          positions.push({ month: m, col: wi });
          lastMonth = m;
        }
      }
    });
    return positions;
  }, [weeks]);

  // Streak: count consecutive days ending today with at least one check-in
  const streak = useMemo(() => {
    const today = new Date();
    let s = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const ds = d.toISOString().split("T")[0];
      if (countMap[ds]) s++;
      else if (i > 0) break; // break as soon as streak ends (skip today if not yet)
    }
    return s;
  }, [countMap]);

  const totalActiveDays = Object.keys(countMap).length;
  const totalCheckIns = records.filter((r) => r.pointsChange > 0).length;

  return (
    <div className="heatmap-wrapper">
      {/* Summary pills */}
      <div className="summary-row">
        <div className="summary-chip" style={{ background: isFemale ? "#fdf2f8" : "#eff6ff" }}>
          <Flame size={16} color={activeColor} />
          <span className="chip-label">连续打卡</span>
          <span className="chip-value" style={{ color: activeColor }}>{streak} 天</span>
        </div>
        <div className="summary-chip">
          <span className="chip-label">打卡天数</span>
          <span className="chip-value">{totalActiveDays} 天</span>
        </div>
        <div className="summary-chip">
          <span className="chip-label">总打卡次数</span>
          <span className="chip-value">{totalCheckIns} 次</span>
        </div>
      </div>

      {/* Heatmap grid */}
      <div className="heatmap-scroll">
        <div className="heatmap-inner">
          {/* Month labels row */}
          <div className="month-row">
            <div className="day-label-col" />
            {weeks.map((_, wi) => {
              const pos = monthPositions.find((p) => p.col === wi);
              return (
                <div key={wi} className="month-cell">
                  {pos ? MONTH_LABELS[pos.month] : ""}
                </div>
              );
            })}
          </div>

          {/* Grid rows (0=Sun … 6=Sat) */}
          <div className="grid-area">
            {/* Day labels */}
            <div className="day-label-col">
              {[0,1,2,3,4,5,6].map(row => (
                <div key={row} className="day-label-cell">
                  {DAY_LABEL_ROWS.includes(row) ? DAY_LABELS[DAY_LABEL_ROWS.indexOf(row)] : ""}
                </div>
              ))}
            </div>

            {/* Columns */}
            {weeks.map((week, wi) => (
              <div key={wi} className="week-col">
                {week.map((date, di) => {
                  if (!date) return <div key={di} className="day-cell empty" />;
                  const count = countMap[date] || 0;
                  const isToday = date === new Date().toISOString().split("T")[0];
                  return (
                    <div
                      key={di}
                      className={`day-cell ${isToday ? "today" : ""}`}
                      style={{
                        background: getColor(count),
                        outline: isToday ? `2px solid ${activeColor}` : "none",
                      }}
                      title={`${date}：${count} 次打卡`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="legend-row">
            <span className="legend-label">少</span>
            {colorScale.map((c, i) => (
              <div key={i} className="legend-cell" style={{ background: c }} />
            ))}
            <span className="legend-label">多</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heatmap-wrapper {
          background: white;
          border-radius: 24px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .summary-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .summary-chip {
          background: #f8fafc;
          border-radius: 14px;
          padding: 0.7rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid #f1f5f9;
        }
        .chip-label { font-size: 0.8rem; color: #64748b; font-weight: 600; }
        .chip-value { font-size: 1rem; font-weight: 900; color: #1e293b; }

        .heatmap-scroll { overflow-x: auto; padding-bottom: 0.5rem; }
        .heatmap-inner { display: inline-flex; flex-direction: column; gap: 4px; min-width: 600px; }

        .month-row {
          display: flex;
          gap: 3px;
          padding-left: 0;
        }
        .month-cell {
          width: 14px;
          font-size: 0.62rem;
          color: #94a3b8;
          font-weight: 600;
          white-space: nowrap;
          overflow: visible;
          text-align: left;
        }
        .day-label-col { width: 20px; }

        .grid-area { display: flex; gap: 3px; }

        .day-label-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 14px;
          flex-shrink: 0;
        }
        .day-label-cell {
          width: 14px; height: 14px;
          font-size: 0.58rem; color: #94a3b8; font-weight: 600;
          display: flex; align-items: center; justify-content: flex-end;
          padding-right: 2px;
        }

        .week-col { display: flex; flex-direction: column; gap: 3px; }

        .day-cell {
          width: 14px; height: 14px;
          border-radius: 3px;
          transition: transform 0.15s, outline 0.15s;
          cursor: default;
        }
        .day-cell.empty { background: transparent !important; }
        .day-cell:not(.empty):hover { transform: scale(1.3); border-radius: 4px; z-index: 2; }
        .day-cell.today { outline-offset: 1px; }

        .legend-row {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 6px;
          justify-content: flex-end;
          padding-right: 4px;
        }
        .legend-label { font-size: 0.65rem; color: #94a3b8; font-weight: 600; }
        .legend-cell { width: 14px; height: 14px; border-radius: 3px; }
      `}</style>
    </div>
  );
}
