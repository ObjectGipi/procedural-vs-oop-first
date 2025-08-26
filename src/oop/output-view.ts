// 출력에 관련된 클래스
export class OutputView {
  printMenu() {
    console.log('=== 객체지향 계산기 ===');
    console.log('1. 더하기');
    console.log('2. 빼기');
    console.log('3. 곱하기');
    console.log('4. 나누기');
    console.log('5. 프로그램 종료');
  }

  printResult(resultString: string) {
    console.log(resultString);
  }

  printErrorKnown(error: Error) {
    console.log(error.message);
  }

  printErrorUnKnown(error: unknown) {
    console.log(`알 수 없는 에러`, error);
  }
}
