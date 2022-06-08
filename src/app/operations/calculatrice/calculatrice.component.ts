import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  operator!: string;
  numbers: string = "";

  value1!: any;
  value2!: any;

  operations: string = "0";

  constructor(private service: OperationsService) { }

  ngOnInit(): void {
  }

  selectedNumber(number: string) {
    if (this.operations === "0") {
      this.operations = "";
    }
    this.numbers += number;
    this.operations += number;
  }

  selectedOperator(op: string) {
    this.setValues();

    this.operator = op;
    this.operations += ` ${this.operator} `;
  }

  setValues() {
    if (!this.value1) {
      this.value1 = parseFloat(this.numbers);
      this.numbers = "";
    }
    if (!this.value2) {
      this.value2 = parseFloat(this.numbers);
      this.numbers = "";
    }

    if (this.value1 && this.value2) {
      this.getResult();
    }
  }

  resetOperations() {
    this.operations = "0";
    this.value1 = undefined;
    this.value2 = undefined;
  }

  getResult() {
    switch (this.operator) {
      case '+':
        this.service.addition(this.value1, this.value2).subscribe({
          next: result => {
            this.value1 = result;
            this.value2 = undefined;
          }
        });
        break;
      case '-':
        this.service.subtraction(this.value1, this.value2).subscribe({
          next: result => {
            this.value1 = result;
            this.value2 = undefined;
          }
        });
        break;
      case '*':
        this.service.multiplication(this.value1, this.value2).subscribe({
          next: result => {
            this.value1 = result;
            this.value2 = undefined;
          }
        });
        break;
      case '/':
        this.service.division(this.value1, this.value2).subscribe({
          next: result => {
            this.value1 = result;
            this.value2 = undefined;
          }
        });
        break;
      default:
        break;
    }
  }

  calculate() {
    this.setValues();

    if (this.value1 && this.value2) {
      setTimeout(() => {
        this.getResult();
        this.operations = this.value1;
      }, 100);
    }
  }

}
