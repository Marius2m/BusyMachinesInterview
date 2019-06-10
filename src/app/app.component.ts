import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'BusyMachinesInterview';
  private selectedFunction;
  private a = 0;
  private b = 0;
  private c = 0;
  private stringToReverse = '';
  private res = '';

  onSubmit() {
    switch (Number(this.selectedFunction)) {
      case 0:
        this.res = this.sum(this.a, this.b) + '';
        break;
      case 1:
        this.res = this.max(this.a, this.b, this.c) + '';
        break;
      case 2:
        this.res = this.isPrime(this.a) === true ? `${this.a} is a Prime Number` : `${this.a} is NOT a Prime Number`;
        break;
      case 3:
        this.res = this.reversed(this.stringToReverse);
        break;
    }
  }

  private isPrime(a: number) {
    let i;
    let dividedTimes = 0;

    if (a <= 1) { return false; }
    if (a <= 3 ) { return true; }

    for (i = 2; i <= a / 2; i++) {
      if (a % i === 0) {
        dividedTimes += 1;
      }
    }
    if (dividedTimes >= 1) {
      return false;
    }
    return true;
  }

  private sum(a, b) {
    return Number(a) + Number(b);
  }

  private max(a: number, b: number, c: number) {
    let maxNr: number = a;
    if (maxNr < b) {
      maxNr = b;
    }
    if (maxNr < c) {
      maxNr = c;
    }
    return maxNr;
  }

  private reversed(stringToReverse: string) {
    // return stringToReverse
    //   .split('')
    //   .reverse()
    //   .join('');
    let reversedString = '';
    for (let i = stringToReverse.length - 1; i >= 0 ; --i) {
      reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
  }
}
