module.exports = {
    rootDir: ".",
    testMatch: [
        "**/test/**/*.{js,jsx,test.js,test.jsx,jest.js,jest.jsx}",
        "**/?(*.)+(spec|test).js",
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    testEnvironment: "jest-environment-jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
};