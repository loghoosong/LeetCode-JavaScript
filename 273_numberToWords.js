/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num == 0) return 'Zero';
    let ans = '';
    function underTwentyWords(n) {
        switch (n) {
            case 1:
                return 'One';
            case 2:
                return 'Two';
            case 3:
                return 'Three';
            case 4:
                return 'Four';
            case 5:
                return 'Five';
            case 6:
                return 'Six';
            case 7:
                return 'Seven';
            case 8:
                return 'Eight';
            case 9:
                return 'Nine';
            case 10:
                return 'Ten';
            case 11:
                return 'Eleven';
            case 12:
                return 'Twelve';
            case 13:
                return 'Thirteen';
            case 14:
                return 'Fourteen';
            case 15:
                return 'Fifteen';
            case 16:
                return 'Sixteen';
            case 17:
                return 'Seventeen';
            case 18:
                return 'Eighteen';
            case 19:
                return 'Nineteen';
        }
    }

    function underHundred(n) {
        if (n < 20) return underTwentyWords(n);
        let ans = '';
        let m = Math.trunc(n / 10);
        switch (m) {
            case 2:
                ans = 'Twenty';
                break;
            case 3:
                ans = 'Thirty';
                break;
            case 4:
                ans = 'Forty';
                break;
            case 5:
                ans = 'Fifty';
                break;
            case 6:
                ans = 'Sixty';
                break;
            case 7:
                ans = 'Seventy';
                break;
            case 8:
                ans = 'Eighty';
                break;
            case 9:
                ans = 'Ninety';
        }
        if ((n - m * 10) > 0) {
            ans = ans + ' ' + underTwentyWords(n - m * 10);
        }
        return ans;
    }

    function underThousandWords(n) {
        if (n < 100) return underHundred(n);
        let ans = '';
        let m = Math.trunc(n / 100);
        ans = underTwentyWords(m) + ' Hundred';
        if ((n - m * 100) > 0) {
            ans = ans + ' ' + underHundred(n - m * 100);
        }
        return ans;
    }

    if (num >= 1000000000) {
        let b = Math.trunc(num / 1000000000);
        ans = ans + underThousandWords(b) + ' Billion';
        if ((num - b * 1000000000) == 0) return ans;
        ans += ' ';
        num -= b * 1000000000;
    }

    if (num >= 1000000) {
        let m = Math.trunc(num / 1000000);
        ans = ans + underThousandWords(m) + ' Million';
        if ((num - m * 1000000) == 0) return ans;
        ans += ' ';
        num -= m * 1000000;
    }

    if (num >= 1000) {
        let t = Math.trunc(num / 1000);
        ans = ans + underThousandWords(t) + ' Thousand';
        if ((num - t * 1000) == 0) return ans;
        ans += ' ';
        num -= t * 1000;
    }

    ans += underThousandWords(num);

    return ans;
};


console.log(numberToWords(1234567890));