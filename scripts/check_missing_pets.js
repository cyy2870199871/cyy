const fs = require('fs');
const path = require('path');

const pets = [
  { id: 'fire_dragon', name: '炽焰兽', element: '火', gender: 'male', rarity: 'common', cost: 0, desc: '性格热血的火之幼龙，梦想是成为劫火龙皇。', isEvolutionary: true },
  { id: 'water_jellyfish', name: '珍珠水母', element: '水', gender: 'female', rarity: 'common', cost: 100, desc: '优雅安静的水之精灵，进阶后会成为深海皇后。', isEvolutionary: true },
  { id: 'cyber_bee', name: '发条工蜂', element: '机械', gender: 'male', rarity: 'common', cost: 150, desc: '勤劳的赛博昆虫，体内蕴含无限能源。', isEvolutionary: true },
  { id: 'forest_spirit', name: '花苞精灵', element: '自然', gender: 'female', rarity: 'rare', cost: 300, desc: '守护森林的小仙子，能听到大自然的声音。', isEvolutionary: true },
  { id: 'holy_angel', name: '圣翼星灵', element: '光', gender: 'female', rarity: 'rare', cost: 500, desc: '来自高维空间的纯净能量体，拥有治愈之力。', isEvolutionary: true },
  { id: 'thunder_hamster', name: '霹雳仓鼠', element: '电', gender: 'male', rarity: 'rare', cost: 450, desc: '速度极快的电气鼠，脸颊闪烁着蓝色的火花。', isEvolutionary: true },
  { id: 'ice_rabbit', name: '雪兔公主', element: '冰', gender: 'female', rarity: 'epic', cost: 800, desc: '诞生于极寒之地的萌兔，其冰雕技艺举世无双。', isEvolutionary: true },
  { id: 'dark_demon', name: '暗影幼魔', element: '暗', gender: 'male', rarity: 'epic', cost: 900, desc: '在阴影中穿梭的小恶魔，调皮但并不邪恶。', isEvolutionary: true },
  { id: 'light_knight', name: '辉光小骑', element: '战士', gender: 'male', rarity: 'rare', cost: 600, desc: '幼年的荣誉骑士，誓死守护家庭的每一份努力。', isEvolutionary: true },
  { id: 'music_cat', name: '歌姬猫咪', element: '乐理', gender: 'female', rarity: 'legendary', cost: 1500, desc: '热爱唱歌的猫耳偶像，其歌声能让心情瞬间变好。', isEvolutionary: true },
  { id: 'astro_corgi', name: '宇航柯基', element: '空间', gender: 'male', rarity: 'epic', cost: 1100, desc: '身穿宇航服的柯基，正在探索未知的数码星系。', isEvolutionary: true },
  { id: 'dessert_fox', name: '奶油狐狸', element: '甜点', gender: 'female', rarity: 'rare', cost: 400, desc: '浑身散发出草莓香味的小狐狸，尾巴像奶油般柔滑。', isEvolutionary: true },
  { id: 'cloud_turtle', name: '雷云乌龟', element: '气象', gender: 'male', rarity: 'common', cost: 200, desc: '背负着雷云的老实乌龟，能够预测明天的天气。', isEvolutionary: true },
  { id: 'gem_peacock', name: '翠王孔雀', element: '宝石', gender: 'female', rarity: 'legendary', cost: 2000, desc: '开屏时能散发出如宝石般绚丽的光芒。', isEvolutionary: true },
  { id: 'ancient_tiger', name: '剑齿萌虎', element: '古代', gender: 'male', rarity: 'epic', cost: 1200, desc: '来自远古时代的掠食者，现在只想安静地睡觉。', isEvolutionary: true },
  { id: 'alch_rabbit', name: '烧瓶兔耳', element: '炼金', gender: 'female', rarity: 'rare', cost: 550, desc: '精通药水制作的兔耳少女，经常炸掉实验室。', isEvolutionary: true },
  { id: 'paper_dragon', name: '折纸飞龙', element: '纸艺', gender: 'male', rarity: 'common', cost: 150, desc: '由特殊数码宣纸折叠而成，怕水但飞行极快。', isEvolutionary: true },
  { id: 'lucky_fish', name: '锦鲤福娃', element: '节日', gender: 'female', rarity: 'mythic', cost: 5000, desc: '代表好运的终极锦鲤，能带给全家人幸福。', isEvolutionary: true },
];

const petsDir = path.join('e:', 'daka2', 'public', 'pets');
const missing = [];

pets.forEach(pet => {
  for (let lv = 1; lv <= 5; lv++) {
    const fileName = `${pet.id}_lv${lv}.png`;
    const filePath = path.join(petsDir, fileName);
    if (!fs.existsSync(filePath)) {
      missing.push(fileName);
    }
  }
});

console.log('Missing images:', missing);
