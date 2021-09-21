//2번
console.log("--------------2번-------");

let x = 10;
let y = 2;

if(x > 4){
  if(y > 2){
    console.log(x * y);
  }
}else{
  console.log();
}

//3번
console.log("--------------3번-------");

let x = 15

if(x > 10 && x < 20){
  console.log("조건에 맞습니다.");
}

//4번
console.log("--------------4번-------");

//학년 변수를 생성합니다.
let level = 1;

//출력합니다.
if(level == 1){
  console.log("수강해야 하는 전공 학점 : 12 학점");
}else if(level == 2){
  console.log("수강해야 하는 전공 학점 : 18 학점");
}else if(level == 3){
  console.log("수강해야 하는 전공 학점 : 10 학점");
}else if(level == 4){
  console.log("수강해야 하는 전공 학점 : 18 학점");
}

//답: switch 조건문으로 옯기시오.

console.log("--------------답-----------")

switch (level) {
  case 1:
  console.log("수강해야 하는 전공 학점 : 12 학점");
  break;
  case 2:
  console.log("수강해야 하는 전공 학점 : 18 학점");
  break;
  case 3:
  console.log("수강해야 하는 전공 학점 : 10 학점");
  break;
  case 4:
  console.log("수강해야 하는 전공 학점 : 18 학점");
  break;
}
