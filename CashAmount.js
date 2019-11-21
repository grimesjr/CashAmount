class CashAmount {
    constructor(double) {
        this.pennies = double * 100;
    }
    totalInPennies() {
        // let pennies = Number(this.double) * 100;
        return this.pennies;
    }
    addDoubleAmount(float) {
        let floatInt = float * 100;
        let total = floatInt + this.pennies;
        this.pennies = total;
    }

    toDouble() {
        return this.pennies/100;
    }

    toDoubleSting() {
        let pennies = String(this.pennies);
        let len = pennies.length;

        let doubleString = pennies.slice(0, len - 2) + '.' + pennies.slice(len - 2);
        return doubleString;
    }

    quantityOfEachDenomination() {
        let denomination = {
            'hundreds': 0,
            'fifties': 0,
            'twenties': 0,
            'tens': 0,
            'fives': 0,
            'ones': 0,
            'quarters': 0,
            'dimes': 0,
            'nickels': 0,
            'pennies': 0
          }

          let amount = this.pennies;

          while(amount > 0) {
            if(amount - 10000 >= 0) {
                denomination.hundreds++;
                amount -= 10000;
            } else if(amount - 5000 >= 0) {
                denomination.fifties++;
                amount -= 5000;
            } else if(amount - 2000 >= 0) {
                denomination.twenties++;
                amount -= 2000;
            } else if(amount - 1000 >= 0) {
                denomination.tens++;
                amount -= 1000;
            } else if(amount - 500 >= 0) {
                denomination.fives++;
                amount -= 500;
            } else if(amount - 100 >= 0) {
                denomination.ones++;
                amount -= 100;
            } else if(amount - 25 >= 0) {
                denomination.quarters++;
                amount -= 25;
            } else if(amount - 10 >= 0) {
                denomination.dimes++;
                amount -= 10;
            } else if(amount - 5 >= 0) {
                denomination.nickels++;
                amount -= 5;
            } else if(amount - 1 >= 0) {
                denomination.pennies++
                amount -= 1;
            }
          }
          return denomination;
    }

}

const cash = new CashAmount(10.50);
cash.totalInPennies();
console.log('here');