import * as readline from 'node:readline';
import { add, divide, multiply, subtract } from './calculator';

// 사용자 입력을 받기 위한 readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자에게 질문하고 답변을 받는 Promise 형태로 반환하는 헬퍼 함수
function prompt(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// 프로젝트 전체 흐름을 제어하는 main 함수
async function main() {
  /*
  =================== lint 실험용 코드 추가 ===================
  // const unusedVariable = 'hello'; // 1. 사용하지 않는 변수
  // let anyType: any = 'world'; // 2. any 타입 사용
  ==========================================================
   */

  while (true) {
    try {
      console.log('=== 절차지향 계산기 ===');
      console.log('1. 더하기');
      console.log('2. 빼기');
      console.log('3. 곱하기');
      console.log('4. 나누기');
      console.log('5. 프로그램 종료');

      const choice = parseInt(
        await prompt(`원하는 연산의 번호를 입력하고 엔터를 눌러주세요.`),
      );

      // 예외 발생 시, 콘솔 말고 throw로 처리
      if (![1, 2, 3, 4, 5].includes(choice)) {
        throw new Error(`보기 중에서 하나를 선택해주세요.`);
      }

      if (choice === 5) {
        console.log(`프로그램을 종료합니다.`)
        rl.close();
        process.exit(0);
      }

      // 입력받은 값을 숫자로 변환
      // 예외 발생 시, 콘솔 말고 throw로 처리
      const num1 = parseInt(await prompt(`첫번째 숫자를 입력해주세요.`));
      const num2 = parseInt(await prompt(`두번째 숫자를 입력해주세요.`));
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error(`숫자를 입력해주세요.`);
      }

      // 절차 중심의 프로그래밍
      let resultMessage = ``;
      if (choice === 1) {
        const result = add(num1, num2);
        resultMessage = `결과: ${result}`;
      } else if (choice === 2) {
        const result = subtract(num1, num2);
        resultMessage = `결과: ${result}`;
      } else if (choice === 3) {
        const result = multiply(num1, num2);
        resultMessage = `결과: ${result}`;
      } else if (choice === 4) {
        const result = divide(num1, num2);
        resultMessage = `결과: ${result.quotient}, ${result.remainder}`;
      }
      console.log(resultMessage);

      // 여기서 예외 한번에 처리
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(`알 수 없는 에러`, error);
      }
    }
  }
}

main();
