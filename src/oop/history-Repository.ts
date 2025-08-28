import { History } from "./history";

export class HistoryRepository {
  // DB 대신 사용할 HistoryRepository 객체의 배열
  private histories: History[] = [];
  private history(
    operation: string,
    num1: number,
    num2: number,
    result: number
  ): History {
    return {
      operation,
      num1,
      num2,
      result,
    };
  }

  // 연산 결과 저장
  public saveHistory = (operation: string, a: number, b: number) => {
    const history = this.history(operation, a, b, a + b)
    this.histories.push(history);
    return history;
  }

  // 전체 조회
  public readAllHistory = () => {
    console.log(this.histories);
    return this.histories;
  }

  // 전체 삭제
  public deleteAllHistory = () => {
    this.histories = [];
  }
}