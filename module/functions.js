function one() {
  return 1;
}

function twoReturnString() {
  return "1";
}

// 함수 이름 앞에 is가 붙어있을 경우 return이 불리언일 경우가 높음
// 개발자들의 암묵적인 약속
function isThree() {
  return true;
}

function four() {
  return {
    a: 1,
    b: "2",
    c: true,
  }
}

// 리턴이 없다, void
// 전형적인 동작만을 위한 함수, 실행 함수 라고 부른다
function five() {
  let a = 1 + 1;
}

twoReturnString() === "1"; //true