import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 1. 기본적으로 적용될 설정 (모든 파일 대상)
  {
    ignores: ['dist/'], // 'dist' 폴더는 검사에서 제외
  },

  // 2. TypeScript 추천 규칙 적용
  ...tseslint.configs.recommended,

  // 3. Prettier와 충돌하는 스타일 규칙 비활성화
  prettierConfig,

  // 4. 프로젝트별 커스텀 규칙 및 환경 설정
  {
    languageOptions: {
      globals: {
        ...globals.node, // Node.js 전역 변수 (ex: process, console) 사용 가능하도록 설정
      },
    },
    rules: {
      // 필요한 규칙을 여기에 추가할 수 있어.
      // 예: '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수는 에러 대신 경고로 표시
    },
  },
];
