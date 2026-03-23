/**
 * 艾宾浩斯记忆曲线算法工具
 * 结合目标网站的四种预设模式
 */

export const EBBINGHAUS_MODES = {
  STANDARD: {
    name: '标准模式',
    offsets: [0, 1, 3, 6, 14, 29] // 天数偏移
  },
  GENTLE: {
    name: '温和模式',
    offsets: [0, 2, 6, 13, 29]
  },
  EXAM: {
    name: '考前冲刺',
    offsets: [0, 1, 2, 4, 6, 9, 14]
  },
  INTENSE: {
    name: '强化训练',
    offsets: [0, 1, 3, 6, 14, 29, 59]
  }
};

/**
 * 根据开始日期和模式获取所有的复习日期
 * @param {string|Date} startDate 开始日期 (ISO string 或 Date 对象)
 * @param {string} modeKey 模式键名 (STANDARD, GENTLE, etc.)
 * @returns {string[]} ISO 日期数组 (yyyy-mm-dd)
 */
export function getEbbinghausDates(startDate, modeKey) {
  const mode = EBBINGHAUS_MODES[modeKey] || EBBINGHAUS_MODES.STANDARD;
  const start = new Date(startDate);
  
  return mode.offsets.map(offset => {
    const d = new Date(start);
    d.setDate(d.getDate() + offset);
    return d.toISOString().split('T')[0];
  });
}
