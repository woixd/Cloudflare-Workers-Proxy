[中文](https://github.com/fssxg/Cloudflare-Workers-Proxy/blob/main/README_%E4%B8%AD%E6%96%87.md)/[EN](https://github.com/fssxg/Cloudflare-Workers-Proxy/blob/main/README.md)

# Cloudflare Workers Proxy（支持可选令牌认证）

这是一个部署在 Cloudflare Workers 上的简单代理服务，支持通过 `/?url=` 参数动态访问任意网页或文件资源。

## ✨ 功能特点

- ✅ 支持网页 / 接口 / 任意 URL 的代理请求
- ✅ 简洁 URL 格式：/?url=https://github.com
- ✅ 自动转发内容类型（Content-Type）
- ✅ 支持跨域请求 (CORS)
- ✅ 无需服务器、无需数据库、永久免费（遵守使用规则）  
- ✅ 支持大文件转发加速

---

## 📦 功能说明

- 自动识别并代理 HTTP / HTTPS 请求
- 自动携带 User-Agent / Referer
- 自动添加 CORS 响应头（`Access-Control-Allow-Origin: *`）
- 支持网页、API、图片、音视频等多种资源的转发

---

## 🧩 部署方法

1. 打开 [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)
2. 进入你的账号，点击左侧菜单中的 **计算(Workers)>Worker和Pages**
3. 点击右上角 **创建**，选择 **"Workers>从 Hello World! 开始>开始使用"**
4. 选择 **"部署>编辑代码"**
5. 将本项目中的 [`worker.js`](./worker.js) （无token认证）或 [`worker_token.js`](./worker_token.js) （有token认证）文件内容复制进去（替换原有的内容）
- 有token认证需要改配置内容：找到your-token-123456替换成自定义token
6. 点击顶部 **"部署"**

---

## 🚀 在线演示


无token认证
```
https://your-subdomain.workers.dev/?url=https://github.com
```

有token认证
```
https://your-subdomain.workers.dev/?url=https://github.com&token=your-token-123456
```

替换 `your-subdomain` 为你部署到 Cloudflare 后生成的域名。

---

## 🛠️ 可选功能（配置域名）

- 需要将域名托管在cloudflare
- 假如我的域名是example.com
1. 在刚创建的Workes选择 **"设置>域和路由>域和路由>添加"**
- 自定义域： **"cfw-proxy.example.com"** 添加域
- 路由：区域 **"example.com"** 路由 **"cfw-proxy.example.com/*"** 添加路由
2. 绑定 **"设置>域和路由>绑定>添加"**
- 服务绑定： 变量名称 **"cfw-proxy.example.com/*"** 服务绑定 **"刚创建的Workers项目名称"** 保存


- 使用域名访问：
  ```
  https://cfw-proxy.example.com/?url=https://github.com
  或
  https://cfw-proxy.example.com/?url=https://github.com&token=your-token-123456
  ```

---

## ⚠️ 使用注意事项

请遵守 Cloudflare 的使用条款，不得滥用此代理功能用于：

- 版权资源下载
- 大规模爬虫抓取
- 视频盗链加速
- 非法用途或违法内容

> 官方说明：[Cloudflare Workers 使用政策](https://developers.cloudflare.com/fundamentals/reference/policies-compliance/)

---

## ❤️ 开源许可

MIT License - 免费 / 修改 / 扩展。
如果你喜欢这个项目，欢迎点 ⭐Star 支持！

