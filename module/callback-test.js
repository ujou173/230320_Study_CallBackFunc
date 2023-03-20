function six(number, append) {
  if( typeof (number) === "number" && typeof (append) === "number" ) {
    return number + append;
  } else {
    console.error("이 매개변수는 숫자여야 동작합니다");
  }
}

function seven(number, append) {
  return number - append;
}

// 맨 마지막 매개변수는 callback 이라는 이름으로 고정
function eight(number, append, callback) {
  let a = number + 1; // number에 + 1 을 더하는 연산
  let b = append +2;  // append에 + 2 를 더하는 연산
  return callback(a, b); // 연산을 한 '다음'에 실행
}

console.log(eight(1, 2, function(a, b){
  return a + b;
}));

