class SmartCalculator {
    constructor(initialValue) {
        this.result = 0;

        this.operations = [];
        this.numbers = [];
        this.numbers[-1] = initialValue;
        this.amtOfOperations = 5;
    }

    valueOf() {
        this.update();
        return this.result;
    }

    update() {
        for (let operationPriority = 0; operationPriority < this.amtOfOperations; operationPriority++) {
            for (let j = 0; j < this.numbers.length; j++) {
                let length = this.numbers.length;
                if (operationPriority == 0 && this.operations[length - 1 - j] == operationPriority) {
                    let initialNumber = this.numbers[length - 1 - j - 1];
                    for (let k = 1; k < this.numbers[length - 1 - j]; k++) {
                        this.numbers[length - 1 - j - 1] *= initialNumber;
                    }
                    this.deleteSolvedPart(length - 1 - j);
                    --j;
                    continue;
                }

                if (this.operations[j] == operationPriority) {
                    if (operationPriority == 1) {
                        this.numbers[j - 1] /= this.numbers[j];
                        this.deleteSolvedPart(j);
                        --j;
                    }
                    else if (operationPriority == 2) {
                        this.numbers[j - 1] *= this.numbers[j];
                        this.deleteSolvedPart(j);
                        --j;
                    }
                    else if (operationPriority == 3) {
                        this.numbers[j - 1] -= this.numbers[j];
                        this.deleteSolvedPart(j);
                        --j;
                    }
                }
            }
        }

        for (let m = -1; m < this.numbers.length; m++) {
            this.result += this.numbers[m];
        }
    }

    deleteSolvedPart(j) {
        this.numbers.splice(j, 1);
        this.operations.splice(j, 1);
        return this;
    }

    add(number) {
        this.operations.push(4);
        this.numbers.push(number);
        return this;
    }
  
    subtract(number) {
        this.operations.push(3);
        this.numbers.push(number);
        return this;
    }

    multiply(number) {
        this.operations.push(2);
        this.numbers.push(number);
        return this;
    }

    devide(number) {
        this.operations.push(1);
        this.numbers.push(number);
        return this;
    }

    pow(number) {
        this.operations.push(0);
        this.numbers.push(number);
        return this;
    }
}

module.exports = SmartCalculator;
