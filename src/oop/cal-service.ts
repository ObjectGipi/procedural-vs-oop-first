// 계산을 수행하는 비즈니스 로직
import { CalHistoryRepository } from './cal-history-Repository';
import { createCalHistory } from './cal-history';

export class CalService {
  private historyRepo: CalHistoryRepository;

  constructor(historyRepo: CalHistoryRepository) {
    this.historyRepo = historyRepo;
  }

  public add(a: number, b: number) {
    const calHistory = createCalHistory(`add`, a, b, (a + b).toString());
    return this.historyRepo.saveCalHistory(calHistory);
  }

  public subtract(a: number, b: number) {
    const calHistory = createCalHistory(`subtract`, a, b, (a - b).toString());
    return this.historyRepo.saveCalHistory(calHistory);
  }

  public multiply(a: number, b: number) {
    const calHistory = createCalHistory(`multiply`, a, b, (a * b).toString());
    return this.historyRepo.saveCalHistory(calHistory);
  }

  public divide(a: number, b: number) {
    if (b === 0) {
      throw new Error(`0으로 나눌 수 없습니다.`);
    }
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    const divideResult = `몫: ${quotient}, 나머지 ${remainder}`;
    const calHistory = createCalHistory(`divide`, a, b, divideResult);
    return this.historyRepo.saveCalHistory(calHistory);
  }

  public readAllCalHistory() {
    return this.historyRepo.readAllCalHistory();
  }

  public deleteCalAllHistory() {
    this.historyRepo.deleteAllCalHistory();
  }
}
