import { PrismaClient } from '@prisma/client'
import { connect } from '@tidbcloud/serverless'
import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter'

const prismaClientSingleton = () => {
  if (process.env.NODE_ENV === 'production') {
    const connection = connect({ url: process.env.DATABASE_URL })
    const adapter = new PrismaTiDBCloud(connection)
    return new PrismaClient({ adapter })
  }
  return new PrismaClient()
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
