let n = parseInt(prompt("Enter a number to detect whether its prime or not...!!!"));
let isPrime = true;
if (n <= 1) {
    alert("This number is not prime. ")
} else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`This number is prime..`);

    } else {
        alert(`This number is not prime..`);

    }
}