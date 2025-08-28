import { InputView } from './input-view';
import { OutputView } from './output-view';
import { CalService } from './cal-service';
import { App } from './app';
import { CalHistoryRepository } from './cal-history-Repository';

// 프로그램을 시작시키는 역할 & 의존성 주입
const inputView = new InputView();
const outputView = new OutputView();
const historyRepo = new CalHistoryRepository();
const calService = new CalService(historyRepo);
const app = new App(inputView, outputView, calService);

app.run();
