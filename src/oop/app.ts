import { OutputView } from './output-view';
import { InputView } from './input-view';
import { CalculatorService } from './calculator-service';

export class App {
  private inputView: InputView;
  private outputView: OutputView;
  private calculatorService: CalculatorService;

  constructor(
    inputView: InputView,
    outputView: OutputView,
    calculatorService: CalculatorService,
  ) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.calculatorService = calculatorService;
  }

  async run() {
    console.log(`실행`);
    while (true) {
      try {
        // 메뉴 출력
        this.outputView.printMenu();

        // 연산 & 종료 메서드 & 숫자 입력값
        const choice = await this.inputView.getChoice();

        // 예외 발생 시, 콘솔 말고 throw로 처리
        if (![1, 2, 3, 4, 5].includes(choice)) {
          throw new Error(`보기 중에서 하나를 선택해주세요.`);
        }

        if (choice === 5) {
          console.log(`프로그램을 종료합니다.`);
          this.inputView.close();
          process.exit(0);
        }

        const getNumbers = await this.inputView.getNumbers();

        if (choice === 1) {
          const result = this.calculatorService.add(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(`결과: ${result}`);
        } else if (choice === 2) {
          const result = this.calculatorService.subtract(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(`결과: ${result}`);
        } else if (choice === 3) {
          const result = this.calculatorService.multiply(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(`결과: ${result}`);
        } else if (choice === 4) {
          const result = this.calculatorService.divide(
            getNumbers.num1,
            getNumbers.num2,
          );
          this.outputView.printResult(
            `결과: ${result.quotient}, ${result.remainder}`,
          );
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
