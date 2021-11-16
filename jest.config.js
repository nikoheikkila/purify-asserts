/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    maxWorkers: 8,
    maxConcurrency: 4,
    verbose: true,
};
