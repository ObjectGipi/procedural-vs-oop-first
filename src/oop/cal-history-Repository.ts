import { CalHistory } from './cal-history';

export class CalHistoryRepository {
  // DB 대신 사용할 CalHistoryRepository 객체의 배열
  private calHistories: CalHistory[] = [];

  // 연산 결과 저장
  public saveCalHistory = (calHistory: CalHistory) => {
    this.calHistories.push(calHistory);
    return calHistory;
  };

  // 전체 조회
  public readAllCalHistory = () => {
    return this.calHistories;
  };

  // 전체 삭제
  public deleteAllCalHistory = () => {
    this.calHistories = [];
  };
}
