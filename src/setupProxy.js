const { createProxyMiddleware } = require('http-proxy-middleware');

// https://openapi.naver.com ==> /api로 proxy로 설정
// proxy를 설정한 후, npm start를 다시 해보자!!
module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api', {
            target: "https://openapi.naver.com",
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/'
            }
        })
    );
};