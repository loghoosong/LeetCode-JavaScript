/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function (n) {
    if (n == 1 || n == 2) return 2;

    function isPrime(num) {
        if (num & 1 == 0) return false;
        const sqrt = Math.trunc(Math.sqrt(num));
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i == 0) return false;
        }
        return true;
    }

    let nextPalindrome = function (start) {
        this.start = start;
        this.digitsCount = Math.trunc(Math.log10(start)) + 1;
        this.leftDigits = [];
        let mid = (this.digitsCount + 1) >> 1;
        start = Math.trunc(start / Math.pow(10, this.digitsCount - mid));
        while (start > 0) {
            this.leftDigits.push(start % 10);
            start = Math.trunc(start / 10);
        }
    }

    nextPalindrome.prototype.pop = function () {
        let len = this.leftDigits.length;
        if ((this.leftDigits[len - 1] & 1) == 0) {
            for (let i = 0; i < len - 1; i++) {
                this.leftDigits[i] = 0;
            }
            this.leftDigits[len - 1] = this.leftDigits[len - 1] + 1;
        }

        let palindrom = 0;
        for (let i = len - 1; i >= 0; i--) {
            palindrom = palindrom * 10 + this.leftDigits[i];
        }
        for (let i = (this.digitsCount & 1); i < len; i++) {
            palindrom = palindrom * 10 + this.leftDigits[i];
        }

        let carry = 0;
        for (let i = 0; i < len; i++) {
            if (this.leftDigits[i] < 9) {
                this.leftDigits[i] = this.leftDigits[i] + 1;
                carry = 0;
                break;
            } else {
                carry = 1;
                this.leftDigits[i] = 0;
            }
        }
        if (carry == 1) {
            this.digitsCount++;
            if ((this.digitsCount & 1) == 1) this.leftDigits.push(1);
        }

        return palindrom >= this.start ? palindrom : this.pop();
    }

    let pal = new nextPalindrome(n);
    while (true) {
        let p = pal.pop();
        if (isPrime(p)) return p;
    }
}