function isPrime(num) { 
  if (num < 2) {
    return false;
  }

  let n = Math.floor(Math.sqrt(num) + 1);
  for (let i = 2; i <= n; i++) {
    if (num % i === 0 && num !== n) {
      return false;
    }
  }
  
  return true;
}


isPrime(23213);