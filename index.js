// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini.kala kala sada sada rong jomeche sada kala.';
// const result = lyrics.includes('nai');
// console.log(result);
// console.log(lyrics.indexOf('bondhua'));

// if(lyrics.indexOf('sada') !== -1){
//   console.log('exists inside the string');
// }else{
//   console.log('cannot find it');
// }


// startWith & endsWith function
// console.log(lyrics.startsWith('Tumi'));

// const fileName = 'mybiodata.pdf';
// console.log(fileName.endsWith('.pdf'));

// split function
// const lyrics ="Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.kala kala sada sada rong jomeche sada kala.";
// const parts = lyrics.split(' ');
// const sentences = lyrics.split('.');
// const chars = lyrics.split('');
// console.log(parts)
// console.log(sentences);
// console.log(chars);

// slice, substring and at function
// const lyrics ="Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.kala kala sada sada rong jomeche sada kala.";
// const parts = lyrics.slice(5, 11);
// const parts = lyrics.substring(5, 10);
// const parts = lyrics.at(-5);
// const parts = lyrics.substr(0,8);
// console.log(parts);

// join function
// const lines = [
//   "Tumi bondhu kala pakhi ami jeno ki",
//   " bosonto kale tomai bolte pari ni",
//   " kala kala sada sada rong jomeche sada kala",
//   "",
// ];
// const newSong = lines.join(';');
// console.log(newSong);

// trim function
// const sentences = ' tumi bondhu kala pakhi ';
// console.log(sentences.trim());


// Math function
// const result = Math.pow(3,8);
// console.log(result);

// const marks1 = 25;
// const marks2 = 45;
// const gap = Math.abs(marks1 - marks2);
// if(gap < 5){
//   console.log('you guys can be friends');
// }else{
//   console.log('you guys stay apart');
// }

// const number = 2.595124;
// const fullNumber = Math.round(number);
// const result = Math.ceil(number);
// const result = Math.floor(number);
// console.log(result);

// Random
// for(let i = 0; i <= 20; i++){
//   const random = Math.round(Math.random() * 6);
//   console.log(random);
// }

//swap function
// let first = 5;
// let second = 7;
// console.log(first, second);

// approach: 1
// const temp = first;
// first = second;
// second = temp;

// approach: 2
// [ first, second ] = [ second, first ];
// console.log(first, second);



// ----------------
// Practice Problem No: 1;
// const jim = 100;
// const dela = 97;
// if(jim > dela){
//   console.log('Jim will get the cake');
// } 
// else{
//   console.log('Dela will get the cake');
// }
// ----------------

// ----------------
// HomeWork: 1

// approach 1
// function number(){
//   const num1 = 50;
//   const num2 = 70;
//   const num3 = 80;
//   if(num1 > num2 && num1 > num3){
//     return  "The max number is 1";
//   }
//   else if(num2 > num1 && num2 > num3){
//     return  "The max number is 2";
//   }
//   else{
//     return  'The max number is 3';
//   }
//   }
// console.log(number());


// function number(){
//    const getMaxNumber = Math.max(50,70,20);
//   return getMaxNumber;
//   }
// console.log(number());



// approach 2
  // function getMinNumber(num1,num2, num3){
  //   if(num1 < num2 && num1 < num3){
  //     return "The min number is 1";
  //   }
  //   else if(num2 < num1 && num2 < num3){
  //     return  "The min number is 2";
  //   }
  //     else{
  //   return  'The min number is 3';
  //   }
  // }
  // const result = getMinNumber(5,70,20);
  // console.log(result);

  // function getMinNumber(num1,num2,num3){
  //   const getMin = Math.min(num1,num2,num3);
  //   return getMin;
  // }
  // const result = getMinNumber(50,7,20);
  // console.log(result);
// ----------------

// maxLength
// function maxInArray(numbers){
//   let largest = numbers[0];
//   for(let item of numbers){
//     if(item >  largest){
//       largest = item;
//     }
//   }
//   return largest; 
// }

// const heights = [167,190,120,165,737];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);


// function minInArray(numbers){
//   let lowest = numbers[0];
//   for(let item of numbers){
//     if(item <  lowest){
//       lowest = item;
//     }
//   }
//   return lowest; 
// }

// const heights = [167,190,120,165,737];
// const low = minInArray(heights);
// console.log('lowest person is: ', low);

// function myString(revers){
//   let reversed = revers.split(' ');
//   let result = [];
//   for(let i = reversed.length - 1; i>=0; i--){
//     const element = reversed[i];
//     result.push(element);
//   }
//   const getReversed =result.join(' ');
//   return getReversed;
// }

// const string = 'I am a good boy';
// console.log(myString(string));




// fibonacci function
// const fibo = [0,1];
// for(let i = 2; i<=10; i++){
//   fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);



// ___________________

// practice problem 3

// function numbers(arr){
// let sum = 0;
// const length = arr.length;
// for(let item of arr){
//   sum += item;
// }
// const average = sum / length;
// return average;
// }
// const arr = [40,50,30,70,50,20,10,5];
// const result = numbers(arr);
// console.log(result);

// practice problem 4
// function area(length, height){
//   const getArea = length *height;
//   return getArea;
// }
// const result = area(10,5);
// console.log(result);


// practice problem 5
       
  
// ___________________



// function add(a, b){
//  return a + b;
// }
// console.log(add("adam" + "eve"))

// function add(a, b){
//  return a + b;
// }
// console.log(add("adam" , "eve"))