export type CalHistory = {
  operation: string;
  num1: number;
  num2: number;
  result: string;
};

export const createCalHistory = (
  operation: string,
  num1: number,
  num2: number,
  result: string,
): CalHistory => {
  return { operation, num1, num2, result };
};
