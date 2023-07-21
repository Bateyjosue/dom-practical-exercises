
function isPrime(n) {
  if (n == 1) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function rotate(n) {
  var nn = ""+n;
  var n2 = nn[nn.length-1]+nn.substring(0,nn.length-1);
  return parseInt(n2);
}

function circular(N) {
  var outbound = 0;
  for (var i = 2; i <= N; i++) {
    var isMatch = true;
    var check = i;
    for (j = 0; j < (""+i).length; ++j) {
      if (!isPrime(check)) {
        isMatch = false;
        break;
      }
      check = rotate(check);
    }
    if (isMatch) outbound++;
  }
  return outbound;
}

const input = document.querySelector(".number");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
  result.innerHTML = circular(input.value);
});