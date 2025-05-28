function isPermutation(a, b) {
    let sortA = a.toString().split('').sort().join('');
    let sortB = b.toString().split('').sort().join('');
    return sortA === sortB;
}

function findSpecialNumber() {
    for (let num = 100000; num <= 999999; num++) {
        let valid = true;
        for (let i = 2; i <= 6; i++) {
            if (!isPermutation(num, num * i)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            return num;
        }
    }
    return null;
}

let result = findSpecialNumber();
console.log("Tapılan ədəd:", result);
