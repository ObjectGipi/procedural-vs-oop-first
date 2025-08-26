// input 기능은 따로 뺴고 console.log 부분도 따로 뺄 수 있지 않나? -> 사용자 입력을 받기 위한 readline 인터페이스 생성
import readline from 'readline';

// 입력에 관련된 클래스
export class InputView {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async getChoice(): Promise<number> {
    const choice = await this.prompt(
      `원하는 연산의 번호를 입력하고 엔터를 눌러주세요.`,
    );
    return parseInt(choice);
  }

  async getNumbers(): Promise<{ num1: number; num2: number }> {
    const num1 = parseInt(await this.prompt(`첫번째 숫자 입력`));
    const num2 = parseInt(await this.prompt(`두번째 숫자 입력`));
    return { num1, num2 };
  }

  close() {
    this.rl.close();
  }
}
