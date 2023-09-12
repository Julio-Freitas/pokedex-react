/* eslint-disable no-undef */
module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{js,ts,jsx,tsx}",
        "!<rootDir>/**/*Type.{js,ts,jsx,tsx}",
        "!<rootDir>/**/*.styled.{js,ts,jsx,tsx}",
        "!<rootDir>/**/icons/**",
        "!<rootDir>/**/App.tsx",
        "!<rootDir>/**/main.tsx",
        "!<rootDir>/**/vite-env.d.ts",
        "!<rootDir>/**/index.ts",
        "!<rootDir>/**/*.enum.{js,ts,jsx,tsx}",
    ],
};
