// // var a='';
// // console.log('a',a,'b')
// var wordsArr = []
// var temp;
// var stringArr = ['"']
// var stringSeparator = (readFile) => {
//     var temp = ""
//     var stringFlag = false;
//     var stringFlagCount = 0
//     for (var i = 0; i < readFile.length - 1; i++) {
//         if (stringArr[0] === readFile[i]) {
//             stringFlag = true;
//             stringFlagCount++
//         }
//         // if (stringFlagCount&&stringFlagCount)
//         if (stringFlag&&stringFlagCount<=2) {
//             // if (stringArr[0] !== readFile[i]) {

//             // }
//             temp += readFile[i]

//         }

//     }
//     console.log(temp)
//     return wordsArr
// }
// var temp=""
// var wordsArr=[]
// var plusFn=(readFile)=>{
//     for (var i = 0; i <= readFile.length; i++) {
//         console.log(i,readFile[i])
//         if(readFile[i]==='+'){
//             temp+=readFile[i];
//             console.log(i,"temp",temp)
//             p=i;
//             console.log('p=',p)
//             while((readFile[p+1]==='+')){
//                 console.log('while start')
//                 console.log('while P',p)
//                 console.log('p+1',p+1);
//                 temp+=readFile[p+1];
//                 console.log("whileTemp",temp)
//                 if(temp='++'){
//                     console.log('if two ++ true')
//                     wordsArr.push(temp);
//                     temp="";
//                 }
//                 p=p+2;
//             }
//         }
//         return wordsArr;
//     }
// }


// Requiring fs module in which  
// readFile function is defined. 
// const fs = require('fs')
// var readFile;
// fs.readFile('./input.txt', (err, data) => {
//     if (err) throw err;
//     readFile = data.toString()
//     // console.log(readFile)
//     // console.log(
//     //     stringSeparator(readFile)
//     // );
// console.log(
//     plusFn(readFile)

// )
    // var wordsArr=wordBreak(readFile)
    // console.log(wordsArr)
    // checkKeyword(wordsArr);
// })



// let identifierRegex = /^[A-Za-z]+$/;
// var result=identifierRegex.test(4);
// console.log(result)

// var regex = /^[-+]?\d+$/;
// var result=regex.test(0.1);
// console.log(result)

// var regex = /^[+-]?\d+$/;
// var doubleRegex=/^[+-]?\d*[.]{1}\d+$/
// var result=regex.test(-2343.34656);
// console.log(result)'

// var stringRegex=/"@^[""](\W|\w)*[""]$"/
// var result=stringRegex.test('osama');
// console.log(result)

// const stringregex = /^[A-Za-z]+$/
// var result=stringregex.test(243.45);
// console.log(result)


// let identifierRegex = /^[A-Za-z]+$/;
// var result=identifierRegex.test("abc.obj")
// console.log(result)

// const stringregex = /^"*[A-Za-z]*"+$/
// var result=stringregex.test(`"abcobj"`)
// console.log(result)

// const newLineReg= /\r?\n|\r/;
// // var result=newLineReg.test("osama123")
// // console.log(result)
// if(newLineReg.test("osama123")){
// console.log("true")
// }
// else{
// console.log("false")

// }

// var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g
// var result=regex.test('osama12345677')
// console.log(result)

var mystring = "crtr2002_2";
mystring = mystring.replace('\r','');
console.log(mystring)