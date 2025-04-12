import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 👉 Tích hợp Prettier vào cấu hình
  {
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
      'react-hooks': (await import('eslint-plugin-react-hooks')).default,
      '@tanstack/query': (await import('@tanstack/eslint-plugin-query')).default
    },
    rules: {
      'prettier/prettier': 'error',
      // 👉 Cảnh báo nếu thiếu deps trong Hooks
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      ...(await import('@tanstack/eslint-plugin-query')).plugin.configs
        .recommended.rules
    }
  },

  // 👉 Tắt xung đột giữa ESLint và Prettier
  ...compat.extends('prettier')
];

export default eslintConfig;
