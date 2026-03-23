# 部署说明文档 (Deployment Guide)

本项目是一个基于 Next.js、Prisma 和 MySQL 构建的个人/家庭习惯与学习管理系统。

## 1. 环境准备

在部署之前，请确保您的系统已安装以下软件：
- **Node.js**: 建议版本 v18.x 或更高。
- **MySQL**: 建议版本 8.0 或更高。
- **npm**: 随 Node.js 一同安装。

## 2. 快速开始

### 步骤 1: 克隆项目并安装依赖
```bash
# 安装项目依赖
npm install
```

### 步骤 2: 配置环境变量
在项目根目录下创建一个 `.env` 文件（如果不存在），并配置您的数据库连接字符串：
```env
DATABASE_URL="mysql://用户名:密码@localhost:3306/数据库名"
```
*示例: `DATABASE_URL="mysql://root:secret@localhost:3306/bj_db"`*

### 步骤 3: 初始化数据库
使用 Prisma 同步数据库架构并在本地生成客户端：
```bash
# 1. 生成 Prisma Client
npx prisma generate

# 2. 将架构推送到数据库（如果是首次部署，会自动创建表）
npx prisma db push
```

### 步骤 4: 启动项目

#### 开发环境 (Development)
```bash
npm run dev
```
访问地址: [http://localhost:3000](http://localhost:3000)

#### 生产环境 (Production)
```bash
# 构建生产包
npm run build

# 启动服务
npm run start
```

## 3. 核心功能与管理

- **多家庭系统**: 系统采用家庭账号隔离模式。每个账号下的子档案（孩子/家长）共享该家庭的打卡和计划数据。
- **VIP 权限拦截**: 只有通过卡密激活的账号才能使用主功能。未激活账号会被重定向至 `/redeem`。
- **总管理后台 (`/admin`)**: 
  - 通过 `/admin` 访问，默认账号为 `admin`，密码为 `admin888`。
  - 您可以在此手动创建用户、批量生成 16 位加密样式的会员卡密。

## 4. 常见问题 (FAQ)

- **数据库连接失败**: 请检查 `.env` 中的 `DATABASE_URL` 是否正确，并确保 MySQL 服务已启动。
- **页面 404 或 报错**: 请检查 `npm run dev` 终端是否输出 `ReferenceError` 或 `Module not found`。
- **卡密无法使用**: 请确保卡密是在后台生成的，且数据库已成功同步 (`db push`)。

---
*由 Antigravity 助手生成 - 最后更新: 2026-03-23*
