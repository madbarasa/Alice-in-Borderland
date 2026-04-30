const html = require("eslint-plugin-html");

module.exports = [
  {
    plugins: {
      html: html
    },
    files: ["**/*.html", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        Math: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        alert: "readonly",
        location: "readonly",
        console: "readonly",
        confirm: "readonly",
        eval: "readonly",
        Image: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off", // 全局函数被 HTML 属性引用，关闭此检查
      "no-console": "off",
      "no-undef": "off" // 跨文件调用的变量/函数会触发此项，暂时关闭以适配纯 HTML 架构
    }
  }
];
