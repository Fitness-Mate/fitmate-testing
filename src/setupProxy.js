const { createProxyMiddleware } = require("http-proxy-middleware");
const TARGET = process.env.REACT_APP_DOMAIN;
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: TARGET,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
