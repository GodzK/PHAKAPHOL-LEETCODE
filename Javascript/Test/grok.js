function factorial(number) {
    let ans = 1
    for (let i = number ; i > 0;i--) {
        ans *= i
    }
    return ans
}
console.log(factorial(5));