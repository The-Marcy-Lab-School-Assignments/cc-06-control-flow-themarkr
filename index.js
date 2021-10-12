//1
function sumOfThreeAndFive(){
    let sum = 0;
  for (let i = 1; i < 1000; i++){
      if (i % 3 === 0 || i % 5 === 0){
          sum += i;
      }
  }
  return sum;
}

function greaterNum(num1, num2){
  if (num1 === num2){
      return "both integers are equal";
  }else if ( num1 > num2){
      return num1;
  }else{
      return num2;
  }
}

function oddAndEvenInFifteen(){
  for (let i = 0; i<=15; i++){
      if (i % 2 === 0){
          console.log(`${i} is even`)
      }else{
          console.log(`${i} is odd`)
      }
    }
}


// ONLY SIX POSSIBLE WAYS TO ORDER 3 UNIQUE NUMBERS IF ALL COMBINATIONS ARE COVERED 
// ALL CASES ARE COVERED.
function sortThreeNums(pos1,pos2,pos3){
  if(pos1 < pos2 && pos2 < pos3){
      console.log( `${pos3} ${pos2} ${pos1}`); // 3 2 1
  }else if(pos1 > pos2 && pos2 > pos3){
      console.log(`${pos1} ${pos2} ${pos3}`); // 1 2 3
  }else if(pos1 > pos2 && pos2 < pos3){
      if( pos1 < pos3){
          console.log(`${pos3} ${pos1} ${pos2}`); // 3 1 2
      }else{
          console.log(`${pos1} ${pos3} ${pos2}`); // 1 3 2
      }
  }else if(pos1 > pos3 && pos3  < pos2 ){
      if (pos1 > pos2){
          console.log(`${pos1} ${pos2} ${pos3}`); //duplicate of 1 2 3
      }else{
          console.log(`${pos2} ${pos1} ${pos3}`); // 2 1 3
      }
  }else{
      console.log(`${pos2} ${pos3} ${pos1}`); // 2 3 1
  }
}

console.log(sumOfThreeAndFive());
console.log(greaterNum(10,10));
oddAndEvenInFifteen();
sortThreeNums(-14, 14 , -1);


