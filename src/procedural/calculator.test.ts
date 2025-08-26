import { add, subtract, multiply, divide } from './calculator';

// describe: 연관된 테스트들을 하나의 그룹으로 묶어주는 역할
describe('계산 로직 함수 테스트', () => {
  // it (또는 test): 하나의 테스트 케이스를 정의. "add 함수는 두 숫자를 더해야 한다" 처럼 자연어로 작성
  it('add 함수는 두 숫자를 더한 값을 반환해야 한다', () => {
    // expect: 특정 값이 ~일 것이라고 '기대'하는 문법.
    // toBe: 기대하는 결과값을 비교하는 'Matcher'.
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
  });

  it('subtract 함수는 두 숫자를 뺀 값을 반환해야 한다', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  });

  it('multiply 함수는 두 숫자를 곱한 값을 반환해야 한다', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(3, 0)).toBe(0);
  });

  describe('divide 함수', () => {
    it('두 숫자를 나눈 몫과 나머지를 객체로 반환해야 한다', () => {
      // 객체나 배열을 비교할 때는 toBe 대신 toEqual을 사용
      expect(divide(10, 3)).toEqual({ quotient: 3, remainder: 1 });
      expect(divide(10, 2)).toEqual({ quotient: 5, remainder: 0 });
    });

    it('0으로 나누려고 하면 에러를 던져야 한다', () => {
      // 특정 함수가 에러를 던지는지 테스트하는 방법
      expect(() => divide(10, 0)).toThrow('0으로 나눌 수 없습니다.');
    });
  });
});
