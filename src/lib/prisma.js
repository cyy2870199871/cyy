import { PrismaClient } from '@prisma/client'
import { connect } from '@tidbcloud/serverless'
import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter'

const prismaClientSingleton = () => {
  let url = process.env.DATABASE_URL
  if (!url) {
    console.error('Prisma: DATABASE_URL is missing!');
    return new PrismaClient()
  }

  // 1. Clean URL
  url = url.trim().replace(/^["']|["']$/g, '');

  try {
    const urlObj = new URL(url);
    const host = urlObj.hostname;
    const user = urlObj.username;
    const db = urlObj.pathname.slice(1);
    
    // REDACTED LOGGING
    console.log(`[Database Debug] 正在通过 HTTP 适配器连接到: ${host}`);
    console.log(`[Database Debug] 用户: ${user}, 数据库: ${db}`);
    console.log(`[Database Debug] 原始协议: ${urlObj.protocol}, 原始端口: ${urlObj.port}`);

    // Rebuild ultra-clean URL
    const cleanUrl = `mysql://${user}:${urlObj.password}@${host}${urlObj.pathname}`;
    
    const connection = connect({ url: cleanUrl });
    const adapter = new PrismaTiDBCloud(connection);
    
    const client = new PrismaClient({ adapter });
    
    // Add a middleware-like check or just wait for first query failure
    return client;
    
  } catch (err) {
    console.error('[Database Debug] URL 解析严重失败:', err.message);
    const fallbackUrl = url.replace(':4000', '').split('?')[0];
    const connection = connect({ url: fallbackUrl });
    const adapter = new PrismaTiDBCloud(connection);
    return new PrismaClient({ adapter });
  }
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
