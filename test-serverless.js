// 这个脚本用于诊断 HTTP 网关是否连通，绕过 Prisma 适配器层
// 需要运行: node test-serverless.js
const { connect } = require('@tidbcloud/serverless');

// 这里的 URL 请从 .env 中手动复制粘贴，或者如果你本地能读到 .env 也可以
const DATABASE_URL = "mysql://3DbXAPfXB12VJ7X.root:N9BbA9UTJKB0ti6O@gateway01.eu-central-1.prod.aws.tidbcloud.com:4000/test?sslaccept=strict";

async function testConnection() {
  console.log('--- TiDB Serverless HTTP SDK 诊断开始 ---');
  
  // 模拟 prisma.js 中的清洗逻辑
  const cleanUrl = DATABASE_URL
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(':4000', '')
    .split('?')[0];
    
  console.log(`[Diagnostic] 尝试连接 Host: ${cleanUrl.split('@')[1]}`);

  try {
    const conn = connect({ url: cleanUrl });
    const result = await conn.execute('SELECT 1 as success');
    console.log('✅ Success: HTTP 网关连接成功！', result);
  } catch (err) {
    console.error('❌ Failed: HTTP 网关连接报错:', err.message);
    if (err.message.includes('Forbidden') || err.message.includes('403')) {
      console.error('\n提示：403 Forbidden 意味着您的请求已经到达 TiDB 但被拒绝了。');
      console.error('常见原因：');
      console.error('1. IP 白名单未命中 (最常见，即使设置了 0.0.0.0/0，有时生效需要一两分钟)。');
      console.error('2. 您的 TiDB Cloud 账户可能因为某些原因 (欠费等) 禁用了公共访问。');
      console.error('3. 该集群在当前 Region 的 HTTP 流量受限。');
    } else {
      console.error('\n错误详情:', err);
    }
  }
}

testConnection();
