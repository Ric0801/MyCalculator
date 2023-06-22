import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-main',
  templateUrl: './calc-main.component.html',
  styleUrls: ['./calc-main.component.css']
})
export class CalcMainComponent {


  calcResult = 0;
  resOne = 0;
  operator = ""
  toResultDelete = true
  isCommaActive = false
  commaFactor = 1

  displayResult() {
    return this.calcResult / this.commaFactor;
  }

  resetValue() {
    this.calcResult = 0;
    this.resOne = 0;
    this.commaFactor = 1;
  }

  calcValue() {        //calculate section (=)
    console.log("Ich denke nach...")
    this.doCalculation()
  }

  addValue(value: number) {
    console.log(value);
    if (this.toResultDelete) {
      this.calcResult = 0;
      this.commaFactor = 1;
      this.isCommaActive = false;
    }
    this.calcResult = (10 * this.calcResult) + value;
    if (this.isCommaActive) {
      this.commaFactor = 10 * this.commaFactor;
    }
    this.toResultDelete = false;
  }

  addComma() {
    this.isCommaActive = true;
  }

  toggleSign() {
    this.calcResult *= -1;
  }

  startOperation(op: string) {
    if (this.operator === "") {
      this.resOne = this.calcResult / this.commaFactor;
    } else {
      this.doCalculation();
    }
    this.operator = op
    this.toResultDelete = true;
  }

  doCalculation() {
    if (this.operator == "*") {
      this.calcResult = this.resOne * (this.calcResult / this.commaFactor);
    } else if (this.operator == "+") {
      this.calcResult = this.resOne + (this.calcResult / this.commaFactor);
    } else if (this.operator == "-") {
      this.calcResult = this.resOne - (this.calcResult / this.commaFactor);
    } else if (this.operator == "÷") {
      this.calcResult = this.resOne / (this.calcResult / this.commaFactor);
    } else if (this.operator == "%") {
      this.calcResult = this.resOne * ((this.calcResult / this.commaFactor) / 100);
    }


    this.resOne = this.calcResult;
    this.operator = "";
    this.toResultDelete = true;
    this.isCommaActive = false;
    this.commaFactor = 1
  }


}

