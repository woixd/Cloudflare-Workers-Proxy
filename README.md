# Cloudflare Workers Proxy

这是一个部署在 Cloudflare Workers 上的简单代理服务，支持通过 `?url=` 参数动态访问任意网页或文件资源。

> ✅ **支持跨域请求 (CORS)**  
> ✅ **无需服务器、无需数据库、永久免费（遵守使用规则）**  
> ✅ **支持大文件下载（实测最高 1GB）**

---

## 🚀 在线演示

```
https://your-subdomain.workers.dev/?url=https://example.com
```

替换 `your-subdomain` 为你部署到 Cloudflare 后生成的域名。

---

## 📦 功能说明

- 自动识别并代理 HTTP / HTTPS 请求
- 自动携带 User-Agent / Referer
- 自动添加 CORS 响应头（`Access-Control-Allow-Origin: *`）
- 支持网页、API、图片、音视频等多种资源的转发

---

## ⚠️ 使用注意事项

请遵守 Cloudflare 的使用条款，不得滥用此代理功能用于：

- 版权资源下载
- 大规模爬虫抓取
- 视频盗链加速
- 非法用途或违法内容

> 官方说明：[Cloudflare Workers 使用政策](https://developers.cloudflare.com/fundamentals/reference/policies-compliance/)

---

## 🧩 部署方法（适合新手）

1. 打开 [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)
2. 进入你的账号，点击左侧菜单中的 **Workers & Pages**
3. 点击右上角 **Create application**，选择 **"Worker"**
4. 选择 **"Start from scratch"**
5. 将本项目中的 [`worker.js`](./worker.js) 文件内容复制进去
6. 点击顶部 **"Save and Deploy"**
7. 复制你的访问地址，例如：  
   ```
   https://yourname.workers.dev/?url=https://example.com
   ```

---

## 🛠️ 可选增强功能（进阶用户）

- 添加 token 验证（防止滥用）
- 限制来源 Referer 白名单
- 配合 KV/R2 使用缓存代理内容
