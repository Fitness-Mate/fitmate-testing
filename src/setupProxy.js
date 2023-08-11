const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.200.20.25:8080",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
