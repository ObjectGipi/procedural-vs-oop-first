import { OutputView } from './output-view';
import { InputView } from './input-view';
import { CalService } from './cal-service';
import { CalHistory } from './cal-history';

export class App {
  private inputView: InputView;
  private outputView: OutputView;
  private calService: CalService;

  constructor(
    inputView: InputView,
    outputView: OutputView,
    calService: CalService,
  ) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.calService = calService;
  }

  async run() {
    while (true) {
      try {
        // 메뉴 출력
        this.outputView.printMenu();

        // 연산 & 종료 메서드 & 숫자 입력값
        const choice = await this.inputView.getChoice();

        // 예외 발생 시, 콘솔 말고 throw로 처리
        if (![1, 2, 3, 4, 5, 6, 7].includes(choice)) {
          throw new Error(`보기 중에서 하나를 선택해주세요.`);
        }

        if (choice === 7) {
          console.log(`프로그램을 종료합니다.`);
          this.inputView.close();
          process.exit(0);
        }

        if (choice === 1) {
          const getNumbers = await this.inputView.getNumbers();
          const result = this.calService.add(
            getNumbers.num1,
            getNumbers.num2);
          this.outputView.printResult(result);
        } else if (choice === 2) {
          const getNumbers = await this.inputView.getNumbers();
          const result: CalHistory = this.calService.subtract(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(result);
        } else if (choice === 3) {
          const getNumbers = await this.inputView.getNumbers();
          const result = this.calService.multiply(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(result);
        } else if (choice === 4) {
          const getNumbers = await this.inputView.getNumbers();
          const result = this.calService.divide(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(result);
        } else if (choice === 5) {
          const calHistories = this.calService.readAllCalHistory();
          this.outputView.printAllHistory(calHistories);
        } else if (choice === 6) {
          this.calService.deleteCalAllHistory();
          this.outputView.printDelete();
          const calHistories = this.calService.readAllCalHistory();
          this.outputView.printAllHistory(calHistories);
        }
      } catch (error) {
        if (error instanceof Error) {
          this.outputView.printErrorKnown(error);
        } else {
          this.outputView.printErrorUnKnown(error);
        }
      }
    }
  }
}
