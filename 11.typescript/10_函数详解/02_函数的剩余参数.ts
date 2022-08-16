function sum(initialNumber: number, ...nums: number[]) {
  let total = initialNumber;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// 后边三个 20 30 40 被作为 num数组传递过去了 [20, 30, 40]
console.log(sum(10, 20, 30, 40));
