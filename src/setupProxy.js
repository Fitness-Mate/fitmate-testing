const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target:
        "http://ac19ea981376348a5b83c41bb96bfa7b-1216454409.ap-northeast-2.elb.amazonaws.com:8080",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
