let summ = 0;
let summ_chetnye = 0;

for (let a = 1; a <= 150; a++) {
  summ = summ + a;
  // console.log(summ);
  if (a % 2 === 0) {
    summ_chetnye = summ_chetnye + a;
    // console.log(summ_chetnye);
  }
}

console.log(summ);
console.log(summ_chetnye);
