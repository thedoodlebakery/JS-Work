function newNumber(digit){
  for(var digit=0; 1 <== digit <== 100; digit++){
    if(digit % 3 === 0){
    console.log("right");
    }
    else if(digit % 5 === 0){
    console.log("point");
    }
    else if(digit % 3 === 0 && digit % 5 === 0){
      console.log("rightpoint");
    }
    else{
      console.log("Try again");
    }
  }
}
