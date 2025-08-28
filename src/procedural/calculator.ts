// 계산을 수행하는 비즈니스 로직
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(
  a: number,
  b: number,
): { quotient: number; remainder: number } {
  if (b === 0) {
    throw new Error(`0으로 나눌 수 없습니다.`);
  }
  const quotient = Math.floor(a / b);
  const remainder = a % b;
  return { quotient, remainder };
}
