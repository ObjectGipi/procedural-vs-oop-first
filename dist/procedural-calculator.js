'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== 'default') __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
const readline = __importStar(require('node:readline'));
// 사용자 입력을 받기 위한 readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 사용자에게 질문하고 답변을 받는 Promise 형태로 반환하는 헬퍼 함수
function prompt(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}
// 계산을 수행하는 비즈니스 로직
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error(`0으로 나눌 수 없습니다.`);
  }
  const quotient = Math.floor(a / b);
  const remainder = a % b;
  return { quotient, remainder };
}
function exit() {
  process.exit(0);
}
// 프로젝트 전체 흐름을 제어하는 main 함수
async function main() {
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
        rl.close();
        exit();
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
