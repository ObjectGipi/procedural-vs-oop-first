// 계산을 수행하는 비즈니스 로직
import {HistoryRepository} from "./history-Repository";

export class CalculatorService {
  private historyRepo: HistoryRepository;

  constructor(historyRepo: HistoryRepository) {
    this.historyRepo = historyRepo;
  }

  public add(a: number, b: number) {
    return this.historyRepo.saveHistory(`add` ,a, b);
  }

  public subtract(a: number, b: number) {
    return a - b;
  }

  public multiply(a: number, b: number) {
    return a * b;
  }

  public divide(a: number, b: number): { quotient: number; remainder: number } {
    if (b === 0) {
      throw new Error(`0으로 나눌 수 없습니다.`);
    }
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return { quotient, remainder };
  }

  public readAllHistory() {
    return this.historyRepo.readAllHistory();
  }

  public deleteAllHistory() {
    this.historyRepo.deleteAllHistory();
  }
}
