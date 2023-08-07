module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "airbnb",
        "airbnb-typescript"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
    },
    plugins: [
        "react"
    ]
}