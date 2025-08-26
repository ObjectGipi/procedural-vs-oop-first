import { InputView } from './input-view';
import { OutputView } from './output-view';
import { CalculatorService } from './calculator-service';
import { App } from './app';

// 프로그램을 시작시키는 역할 & 의존성 주입
const inputView = new InputView();
const outputView = new OutputView();
const calculatorService = new CalculatorService();
const app = new App(inputView, outputView, calculatorService);

app.run();
