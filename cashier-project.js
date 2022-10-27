class Counter {
  constructor(fullName, num, arr) {
    this.cashierName = fullName;
    this.cashBoxNumber = num;
    this.cashBox = arr;
  }
  // Static methods
  static countIn(obj) {
    return `${
      obj.#sumOfPaid / 100
    } Euro is The Total incoming in The Cash Box ${obj.cashBoxNumber}`;
  }
  static countOut(obj) {
    return `${
      obj.#sumOfChange / 100
    } Euro is The Total outcoming from The Cash Box ${obj.cashBoxNumber}`;
  }
  static countEarn(obj) {
    return `${obj.cashierName} had earned ${obj.#sumOfPrice / 100} Euro`;
  }
  static totalCashBox(obj) {
    let total = obj.cashBox
      .map((item) => Object.entries(item))
      .flat()
      .reduce((prev, curr) => prev + +curr[0] * curr[1], 0);
    return `${total} Euro in The Cash Box ${obj.cashBoxNumber}`;
  }
  // This is a Private field declarations to use to sum all prices, all paid, and all changes
  #sumOfPrice = 0;
  #sumOfPaid = 0;
  #sumOfChange = 0;
  // Properties Methods
  cashCounter(price, paid) {
    let change = parseFloat((paid - price).toFixed(2));
    this.#sumOfPrice += price * 100;
    this.#sumOfPaid += paid * 100;
    this.#sumOfChange += change * 100;
    if (change < 0) {
      return `Customer should pay ${change * Math.sign(change)} Euro more`;
    }
    this.#addMoney(paid);
    if (change === 0) {
      return `Thank you`;
    }

    return this.#giveChange(change);
  }
  // This is a Private methods declarations  to add the amount of paid money to cash box
  #addMoney(num) {
    let arr = num.toString().split(".");
    if (arr.length === 2) {
      if (arr[1].length === 1) {
        arr.splice(1, 1, arr[1] + "0");
      }
    }
    let arr1 = arr;
    for (let i = 0; i <= 1; i++) {
      let num = arr1[i];
      let num1 = num % 50;
      let num2 = num1 % 20;
      let num3 = num2 % 10;
      let num4 = num3 % 5;
      let num5 = num4 % 2;

      if (i === 0) {
        if (num >= 50) {
          this.cashBox[0][50] += parseInt(num / 50);
        }
        if (num1 >= 20) {
          this.cashBox[1][20] += parseInt(num1 / 20);
        }
        if (num2 >= 10) {
          this.cashBox[2][10] += parseInt(num2 / 10);
        }
        if (num3 >= 5) {
          this.cashBox[3][5] += parseInt(num3 / 5);
        }
        if (num4 >= 2) {
          this.cashBox[4][2] += parseInt(num4 / 2);
        }
        if (num >= 1) {
          this.cashBox[5][1] += num5;
        }
      } else {
        if (num >= 50) {
          this.cashBox[6][0.5] += parseInt(num / 50);
        }
        if (num1 >= 20) {
          this.cashBox[7][0.2] += parseInt(num1 / 20);
        }
        if (num2 >= 10) {
          this.cashBox[8][0.1] += parseInt(num2 / 10);
        }
        if (num3 >= 5) {
          this.cashBox[9][0.05] += parseInt(num3 / 5);
        }
        if (num4 >= 2) {
          this.cashBox[10][0.02] += parseInt(num4 / 2);
        }
        if (num5 >= 1) {
          this.cashBox[11][0.01] += num5;
        }
      }
    }
  }

  // this is a Private methods declarations to pull the change  out of the cash box

  #giveChange(num) {
    let arr = num.toString().split(".");
    if (arr.length === 2) {
      if (arr[1].length === 1) {
        arr.splice(1, 1, arr[1] + "0");
      }
    }
    let arr1 = arr;
    let changBox = ["Change "];
    for (let i = 0; i <= 1; i++) {
      let num = arr1[i];
      let num1 = num % 50;
      let num2 = num1 % 20;
      let num3 = num2 % 10;
      let num4 = num3 % 5;
      let num5 = num4 % 2;
      if (i === 0) {
        if (num >= 50) {
          this.cashBox[0][50] -= parseInt(num / 50);
          changBox.push({ "50 Euro": parseInt(num / 50) });
        }
        if (num1 >= 20) {
          this.cashBox[1][20] -= parseInt(num1 / 20);
          changBox.push({ "20 Euro": parseInt(num1 / 20) });
        }
        if (num2 >= 10) {
          this.cashBox[2][10] -= parseInt(num2 / 10);
          changBox.push({ "10 Euro": parseInt(num2 / 10) });
        }
        if (num3 >= 5) {
          this.cashBox[3][5] -= parseInt(num3 / 5);
          changBox.push({ "5 Euro": parseInt(num3 / 5) });
        }
        if (num4 >= 2) {
          this.cashBox[4][2] -= parseInt(num4 / 2);
          changBox.push({ "2 Euro": parseInt(num4 / 2) });
        }
        if (num5 >= 1) {
          this.cashBox[5][1] -= num5;
          changBox.push({ "1 Euro": num5 });
        }
      } else {
        if (num >= 50) {
          this.cashBox[6][0.5] -= parseInt(num / 50);
          changBox.push({ "50 Cent": parseInt(num / 50) });
        }
        if (num1 >= 20) {
          this.cashBox[7][0.2] -= parseInt(num1 / 20);
          changBox.push({ "20 Cent": parseInt(num1 / 20) });
        }
        if (num2 >= 10) {
          this.cashBox[8][0.1] -= parseInt(num2 / 10);
          changBox.push({ "10 Cent": parseInt(num2 / 10) });
        }
        if (num3 >= 5) {
          this.cashBox[9][0.05] -= parseInt(num3 / 5);
          changBox.push({ "5 Cent": parseInt(num3 / 5) });
        }
        if (num4 >= 2) {
          this.cashBox[10][0.02] -= parseInt(num4 / 2);
          changBox.push({ "2 Cent": parseInt(num4 / 2) });
        }
        if (num5 >= 1) {
          this.cashBox[11][0.01] -= num5;
          changBox.push({ "1 Cent": num5 });
        }
      }
    }

    return changBox;
  }
}
//

//
//// you should give a name and the number of the cash Box and diposit //// /////   /////

let diposit = [
  { 50: 10 },
  { 20: 10 },
  { 10: 10 },
  { 5: 25 },
  { 2: 25 },
  { 1: 25 },
  { 0.5: 25 },
  { 0.2: 25 },
  { 0.1: 25 },
  { 0.05: 25 },
  { 0.02: 25 },
  { 0.01: 25 },
];

const cashier1 = new Counter("Diouani", 4, diposit);
console.log(cashier1);
console.log(cashier1.cashCounter(13, 13));
console.log(cashier1.cashCounter(20, 50));
console.log(cashier1.cashCounter(5.99, 10));
console.log(cashier1.cashCounter(6.14, 31.14));

console.log(Counter.countEarn(cashier1));
console.log(Counter.countIn(cashier1));
console.log(Counter.countOut(cashier1));
console.log(Counter.totalCashBox(cashier1));
console.log(cashier1);
