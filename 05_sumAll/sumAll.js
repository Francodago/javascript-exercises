const sumAll = function(num1, num2) {
    let sum=0;
   // Check if either num1 or num2 is not a number or is negative
   if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
   if (num1 < 0 || num2 < 0) return 'ERROR';
   if (!Number.isInteger(num1)|| !Number.isInteger(num2)) return 'ERROR';
  let start =Math.min(num1,num2);
  let end =Math.max(num1,num2);

  for(let i=start;i<=end;i++){
    sum+=i
  }
  return sum;
};
//sumAll(1, 4); // 1 + 2 + 3 + 4 = 10

// Do not edit below this line
module.exports = sumAll;
