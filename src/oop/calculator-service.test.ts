// import { CalculatorService } from './calculator-service';
// import {HistoryRepository} from "./history-Repository";
//
// let historyReposTest: HistoryRepository;
// let calculatorServiceTest: CalculatorService;
//
// beforeEach(() => {
//   historyReposTest = new HistoryRepository();
//   calculatorServiceTest = new CalculatorService(historyReposTest);
// });
//
// describe('계산 로직 함수 테스트', () => {
//   // 더하기 테스트
//   it('add 함수는 두 숫자를 더한 값을 반환해야 한다', () => {
//     // expect(calculatorServiceTest.add(1, 2)).toEqual({ createdAt: 2025-08-28T08:55:12.577Z, num1: 1, num2: 2, operation: "add", result: 3});
//     expect(calculatorServiceTest.add(-1, -1)).toBe(-2);
//   });
//
//   // 빼기 테스트
//   it('subtract 함수는 두 숫자를 뺀 값을 반환해야 한다', () => {
//     expect(calculatorServiceTest.subtract(5, 2)).toBe(3);
//     expect(calculatorServiceTest.subtract(2, 5)).toBe(-3);
//   });
//
//   // 곱하기 테스트
//   it(`multiply 함수는 두 숫자를 곱한 값을 반환해야 한다`, () => {
//     expect(calculatorServiceTest.multiply(1, 2)).toBe(2);
//     expect(calculatorServiceTest.multiply(5, 0)).toBe(0);
//   });
// });
//
// // 나누기 테스트 & 예외 처리 테스트
// describe('divide 함수', () => {
//   it('두 숫자를 나눈 몫과 나머지를 객체로 반환해야 한다', () => {
//     expect(calculatorServiceTest.divide(1, 2)).toEqual({ quotient: 0, remainder: 1 });
//     expect(calculatorServiceTest.divide(5, 3)).toEqual({ quotient: 1, remainder: 2 });
//   });
//
//   it('0으로 나누려고 하면 에러를 던져야 한다', () => {
//     expect(() => calculatorServiceTest.divide(1, 0)).toThrow(`0으로 나눌 수 없습니다.`);
//   })
// });
//
// // 데이터 관련 테스트
// // describe('', () => {
// //   it('~~한다', () => {
// //
// //   });
// // });
