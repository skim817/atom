//1번
console.log("--------------1번-------");

let 이름들 = ["김일", "김이", "김삼", "김사", "김오"];
console.log(이름들[0]);

//2번
console.log("--------------2번-------");

let input = 5;
while(input != 0){
  console.log("input : " + input);
  input--;
}

//3번
console.log("--------------3번-------");

for(let i = 0; i < 3; i++){
  console.log("안녕하세요 저는 " + i + "번째 입니다.")
}

//4번
console.log("--------------4번-------");

let 과일들 = ["사과", "바나나", "딸기"];

for (let i in 과일들){
  console.log(i + " : " + 과일들[i]);
}

console.log();

for(let 과일 of 과일들){
  console.log("저는 " + 과일 + "를 좋아합니다.");
}
