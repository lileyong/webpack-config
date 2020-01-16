module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ["standard", "plugin:vue/essential"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["vue"],
    rules: {
        indent: ["error", 4],
        "no-new": "off",
        "comma-dangle": "off"
    }
};
