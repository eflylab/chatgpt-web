FROM node:lts-alpine

# 更新源并安装依赖
RUN apk update && apk add --no-cache git

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm
