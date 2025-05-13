## [中文](https://github.com/fssxg/Cloudflare-Workers-Proxy/blob/main/README_%E4%B8%AD%E6%96%87.md)/[EN](https://github.com/fssxg/Cloudflare-Workers-Proxy/blob/main/README.md)

# Cloudflare Workers Proxy (Supports Optional Token Authentication)

This is a simple proxy service deployed on Cloudflare Workers that allows dynamic access to any webpage or file resource via the `/?url=` parameter.

## ✨ Features

- ✅ Proxy requests for websites / APIs / any URLs
- ✅ Clean URL format: /?url=https://github.com
- ✅ Automatic forwarding of content types (Content-Type)
- ✅ Supports Cross-Origin Requests (CORS)
- ✅ No server, no database, permanently free (as long as usage rules are followed)
- ✅ Supports accelerated forwarding for large files

---

## 📦 Feature Description

- Automatically detects and proxies HTTP / HTTPS requests
- Automatically includes User-Agent / Referer
- Automatically adds CORS response headers (`Access-Control-Allow-Origin: *`)
- Supports forwarding for websites, APIs, images, audio, video, and more

---

## 🧩 Deployment Guide

1. Open the [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)
2. Go to your account, click **Compute (Workers) > Workers and Pages** on the left menu
3. Click **Create** in the upper right corner, then choose **"Workers > Start from Hello World! > Start building"**
4. Choose **"Deploy > Edit code"**
5. Replace the default content with the code from either [`worker.js`](./worker.js) (no token) or [`worker_token.js`](./worker_token.js) (with token)
   - For token authentication, replace `your-token-123456` with your custom token
6. Click **"Deploy"** at the top

---

## 🚀 Live Demo

Without token authentication:
```
https://your-subdomain.workers.dev/?url=https://github.com
```

With token authentication:
```
https://your-subdomain.workers.dev/?url=https://github.com&token=your-token-123456
```

Replace `your-subdomain` with your actual Cloudflare subdomain.

---

## 🛠️ Optional Configuration (Custom Domain)

- Your domain must be hosted on Cloudflare
- Suppose your domain is example.com:
1. In the Workers project you just created, go to **Settings > Custom Domains > Add**
   - Custom domain: **"cfw-proxy.example.com"**
   - Route: Zone **"example.com"**, Route **"cfw-proxy.example.com/*"**
2. Then go to **Settings > Custom Domains > Bindings > Add**
   - Service Binding: Variable name **"cfw-proxy.example.com/*"**, Service Binding **"Your Workers project name"**

- Access via domain:
  ```
  https://cfw-proxy.example.com/?url=https://github.com
  or
  https://cfw-proxy.example.com/?url=https://github.com&token=your-token-123456
  ```

---

## ⚠️ Usage Notes

Please comply with Cloudflare’s terms of service. Do not misuse this proxy for:

- Downloading copyrighted content
- Large-scale web scraping
- Video hotlinking or acceleration
- Illegal purposes or prohibited content

> Official Statement: [Cloudflare Workers Usage Policy](https://developers.cloudflare.com/fundamentals/reference/policies-compliance/)

---

## ❤️ License

MIT License - free to use / modify / extend.
If you like this project, feel free to ⭐Star it!
