const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

const authProxy = createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true,
    pathRewrite: {
        [`^/api/auth`]: '',
    },
    on: {
        proxyReq: fixRequestBody,
    },
});

module.exports = authProxy;