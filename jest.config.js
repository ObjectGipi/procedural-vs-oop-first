/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Jest에게 TypeScript 코드는 ts-jest를 사용해서 테스트하라고 알려줌
  testEnvironment: 'node', // 테스트 환경을 Node.js로 설정
  testPathIgnorePatterns: ['/dist/'], // 불필요한 js 파일 test 방지
};
