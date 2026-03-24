export default function manifest() {
  return {
    name: '小打卡 - 学习打卡助手',
    short_name: '小打卡',
    description: '您的全方位成长手册和学习打卡助手',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/pet-dog.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any'
      },
      {
        src: '/pet-dog.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any'
      }
    ],
  };
}
