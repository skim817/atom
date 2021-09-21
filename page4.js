//1번
console.log("--------------1번-------");

let i = 0;

while(i < 10){
  console.log("출력");
  i++;
}

//2번
console.log("--------------2번-------");

for(let i = 0; i < 20; i = i + 2){
  console.log("출력");
}

// 2번 참고용
console.log("--------------2번 참고-------");

let count = 0;

for(let i = 0; i < 20; i = i + 2){
  count++;
}

console.log(count + "번 돌아갔어요");

//3번
console.log("--------------3번-------");

let number = 7;
let star = "*";
let start = "";
let empty = " ";

for(let i = 0; i < 8; i++){
  number -= i;

  while(number > 0){
    start += empty;
    number -= 1;
  }

  console.log(start + star);

  number = 7;
  star += "**";
  start = "";
}

//4번
console.log("--------------4번-------");

//배열을 선언합니다.
let array = [52, 273, 32, 93, 103];

//for of 반복문 적용
for(let element of array){
  console.log(element);
}

console.log("--- 답 :  for in 으로 변경 -- ");

for(let i in array){
  console.log(array[i]);
}

//5번
console.log("--------------5번-------");

//배열을 선언합니다.
let array = [273, 52, 103, 57, 271];

//최솟값과 최댓값을 계산합니다.
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

//구성합니다. (답)
for(let i = 0; i < array.length; i++){
  if(array[i]<min){
    min = array[i];
  }
  if(array[i]>max){
    max = array[i];
  }
}

//출력합니다.
console.log("가장 큰 수 : " + max);
console.log("가장 작은 수 : " + min);

//6번
console.log("--------------6번-------");

let array = [52, 71, 32, 103, 273, 93];

for(let i = array.length; i >= 0; --i){
  console.log(array[i]);
}
