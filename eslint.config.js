import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        plugins: { react, 'react-hooks': reactHooks, 'unused-imports': unusedImports },
        languageOptions: {
            ecmaVersion: 2020,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react/prop-types': 'off',
            'react/jsx-key': 'off',
            'react/react-in-jsx-scope': 'off',

            // unused-imports правило
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
            'no-unused-vars': 'off',
        },
    },
])
