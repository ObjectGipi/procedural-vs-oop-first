// 출력에 관련된 클래스
import { CalHistory } from './cal-history';

export class OutputView {
  printMenu() {
    console.log('=== 객체지향 계산기 ===');
    console.log('1. 더하기');
    console.log('2. 빼기');
    console.log('3. 곱하기');
    console.log('4. 나누기');
    console.log('5. 계산 내역 보기');
    console.log('6. 계산 내역 삭제');
    console.log('7. 프로그램 종료');
  }

  printResult(calHistory: CalHistory) {
    console.log(`결과: ${calHistory.result}\n${JSON.stringify(calHistory)}`);
  }

  printErrorKnown(error: Error) {
    console.log(error.message);
  }

  printErrorUnKnown(error: unknown) {
    console.log(`알 수 없는 에러`, error);
  }

  printAllHistory(calHistories: CalHistory[]) {
    console.log(`계산 내역\n${JSON.stringify(calHistories)}`);
  }

  printDelete() {
    console.log(`계산 내역이 삭제되었습니다.`);
  }
}
