import { PrismaClient } from '@prisma/client'
import { connect } from '@tidbcloud/serverless'
import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter'

const prismaClientSingleton = () => {
  if (process.env.NODE_ENV === 'production') {
    let url = process.env.DATABASE_URL
    if (!url) {
      console.error('CRITICAL: DATABASE_URL is missing in production environment');
      throw new Error('DATABASE_URL environment variable is required');
    }
    
    // Serverless 驱动通过 HTTP (443) 连接，带上 :4000 端口会导致 Forbidden 错误
    const cleanUrl = url.replace(':4000', '');
    const connection = connect({ url: cleanUrl })
    const adapter = new PrismaTiDBCloud(connection)
    return new PrismaClient({ adapter })
  }
  return new PrismaClient()
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
