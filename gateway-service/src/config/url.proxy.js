const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

const urlProxy = createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: {
        [`^/api/urls`]: '',
    },
    on: {
        proxyReq: fixRequestBody,
    },
});

module.exports = urlProxy;