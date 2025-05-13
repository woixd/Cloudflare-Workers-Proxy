
# Cloudflare Workers 代理（支持可选令牌认证）

一个简单而强大的基于 Cloudflare Workers 的 HTTP 代理。支持通过 `?url=` 转发请求，并可选启用 `?token=` 令牌验证。

## 🔧 功能特点

- 📡 通过 `?url=https://example.com` 代理任意公开 URL
- 🔐 可选基于令牌的访问控制：`?token=your-token`
- 🚀 快速部署于 Cloudflare Workers，无需服务器
- 🌐 支持 CORS（已启用 Access-Control-Allow-Origin: *）

---

## 📁 项目结构

```
cloudflare-workers-proxy/
├── worker.js       # 主 Cloudflare Worker 脚本
└── README.md       # 本文档
```

---

## 🚀 快速开始

### 1. 📦 克隆此仓库

你可以下载 ZIP 或通过 Git 克隆：

```bash
git clone https://github.com/your-username/cloudflare-workers-proxy.git
cd cloudflare-workers-proxy
```

---

### 2. 🛠 修改允许的令牌

打开 `worker.js`，找到：

```js
const VALID_TOKENS = ['your-token-123456'];
```

用你自己的密钥令牌替换。你可以添加多个令牌。

---

### 3. 🧪 部署到 Cloudflare Workers

> ⚠️ 你需要一个免费的 [Cloudflare 账户](https://dash.cloudflare.com) 和对 [Workers](https://developers.cloudflare.com/workers/) 的访问权限。

#### ✅ 方式一：通过 Cloudflare 控制台快速部署

1. 打开 [Cloudflare Workers 控制台](https://dash.cloudflare.com/)
2. 点击 **“创建服务”**
3. 选择 **“HTTP handler”**，然后粘贴 `worker.js` 的代码到编辑器中
4. 保存并部署 🎉

#### ✅ 方式二：使用 `wrangler`（进阶用法）

如果你更喜欢使用命令行工具：

1. 安装 Wrangler：

```bash
npm install -g wrangler
```

2. 初始化并发布：

```bash
wrangler init
# 用 `worker.js` 替换生成的代码
wrangler publish
```

---

## 🌐 使用示例

#### ✅ 带令牌的有效请求

```
https://your-subdomain.workers.dev/?url=https://example.com&token=your-token-123456
```

#### ❌ 未携带令牌的无效请求

```
https://your-subdomain.workers.dev/?url=https://example.com
```

返回：

```
401 Unauthorized: Invalid or missing token
```

---

## ✅ 可选：禁用令牌验证

如果你不想使用令牌验证，可以在 `worker.js` 中注释掉以下代码段：

```js
if (!VALID_TOKENS.includes(token)) {
  return new Response('Unauthorized: Invalid or missing token', { status: 401 });
}
```

---

## ⚠️ 使用政策

Cloudflare Workers 功能强大但为共享资源。请**勿滥用**此代理用于非法活动或大量下载。请遵守 [Cloudflare 服务条款](https://www.cloudflare.com/terms/)。

---

## 🙋‍♀️ 新手指南

没有编程经验？请按以下步骤操作：

- 打开 Cloudflare 控制台
- 点击 “Workers” → “创建服务”
- 复制并粘贴 `worker.js` 中的代码
- 保存并部署
- 使用如下链接访问：

```
https://your-subdomain.workers.dev/?url=https://example.com&token=your-token
```

就这么简单！你已上线 🎉
