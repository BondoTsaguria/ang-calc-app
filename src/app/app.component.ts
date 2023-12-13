import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  calcValue = 0;
  funcT = 'NoFunction';
  calNumber = 'noValue';

  firstNumber = 0;
  secondNumber = 0;

  onClickValue(val: string, type: string) {
    if (type == 'number') this.onNumberClick(val);
    if (type == 'function') this.onFunctionClick(val);
  }

  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calcValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calcValue;
      this.calcValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT !== 'NoFunction') {
      this.secondNumber = this.calcValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') this.onEqualPress();
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') this.onEqualPress();
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') this.onEqualPress();
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') this.onEqualPress();
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') this.onEqualPress();
    }
  }

  totalAssignValues(total: number, val: string) {
    this.calcValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
