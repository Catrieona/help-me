module.exports = function count(s, pairs) {
  const gcd = function(a,b) {
    if (!b) { return a; }
    return gcd(b, a % b);
}

const phi = function(n) {
    let result = n;
    for (let i = 2; i*i <= n; ++i)
         if (n % i == 0) {
            while (n % i == 0)
            n /= i;
            result -= result / i;
         }
    if (n > 1){
        result -= result / n;
    }
     return result;
} 

let N = 1, k = 0;

for (let i = 0, len = pairs.length; i < len; i++) {
  N *= Math.pow(pairs[i][0],pairs[i][1]);
}  
    
if (s[0] === '1' && s.length === 1) { return k = phi(N);} 


 N = N % 1000000; 

for (let i = 0; i < N; i++) {
  for (let j = 0, lenStr = s.length; j < lenStr; j++) {
     
    if (s[j] == 1) {
      if (gcd(N, i+j) !== 1) { break; }
        else if (j === lenStr - 1) { k++; }
    } 
    else {  
      if (gcd(N, i+j) === 1) { break; } 
        else if (j === lenStr - 1) { k++; }
    }

  }
}

return k%1000000007;
} 