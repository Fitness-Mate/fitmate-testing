const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv");

// 환경변수 로드
dotenv.config();

const API_TARGET = process.env.REACT_APP_DOMAIN;
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: API_TARGET,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
