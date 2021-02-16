module.exports = {
    presets: ['next/babel'],
    plugins: [
        ["babel-plugin-styled-components", {
            "ssr": false,"displayName": true,"fileName": true
        }],
    ],
};

