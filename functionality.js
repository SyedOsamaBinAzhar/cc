var temp = "";
var wordsArr = [];
const lineChangeBreaker = ['\n', '\r']
const wordBreakersArr = ['[', ']', '(', ')', ' ', '+', '-', '/', '*', '%', '{', '}', '!', ',', '=', ':', '\n', '\r\n', '#', '@', '&', '-', '_','\\', '"', '^', '`', '|', '>', '<'];
const arithematicOperatorsArr = ['+', '-', '/', '*', '%'];
const relationalOperatorsArr = ['!', '|', '&'];
const isEqualArr = ['=']
const greaterThan = ['>', '<']
const spaceArr = [' '];
const stringArr = ['"'];
const multiLineCommentArr = ['/', '*'];
const BracketsArr=['(',')','[',']','{','}'];
const newLineBreakerArr=['\r'];
const otherBreakersArr=[':','#','@','_','^']
// const dotArr=['.'];


const newLineReg= /\r?\n|\r/;

var newLineFlag=true;

var temporary;




exports.wordBreak = (readFile) => {
    for (var i = 0; i <= readFile.length; i++) {
        // console.log(readFile[i])
        var flag = false;
        // console.log(readFile[i])
        // This was saving spaces as well
        // if(wordBreakersArr.includes(temp)){
        //         wordsArr.push(temp);
        //         temp=""
        // }
        // Will check what to read and what not to read
        if (wordBreakersArr.includes(readFile[i])) {
            // Checking if temp is empty
            if (temp !== "") {
                // if (temp === ' ') {
                // wordsArr.push(temp);
                // temp = "";
                // } else {
                wordsArr.push(temp);
                temp = "";
                // }
            }
            if (isEqualArr.includes(readFile[i])) {
                // console.log("isEquals",readFile[i])
                // if (!readFile[i - 1] === '+' || !readFile[i - 1] === '*') {
                    temp += readFile[i]
                    if(readFile[i+1]==="=" && readFile[i+2]==="=" ){
                        temp+=readFile[i+1];
                        temp+=readFile[i+2];
                        wordsArr.push(temp);
                        temp=""
                        i=i+2;
                    }
                    if(readFile[i+1]==="=" && readFile[i+2]!=="=" ){
                        temp+=readFile[i+1];
                        // temp+=readFile[i+2];
                        wordsArr.push(temp);
                        temp=""
                        i=i+1;
                    }
                    if(readFile[i+1]!=="="){
                        wordsArr.push(temp);
                        temp=""
                    }

                    // Verifying how many = are written.
                    // Local flag to verify if = count is finshied
                    // var localflag = true
                    // Looping
                    // for (var p = i + 1; localflag; p++) {
                    //     if (readFile[p] === '=') {
                    //         temp += readFile[p]
                    //     } else {
                    //         wordsArr.push(temp);
                    //         temp = ""
                    //         i = p - 1
                    //         break
                    //     }
                    // }

                // }
            }
            if (arithematicOperatorsArr.includes(readFile[i])) {
                // Checking if +
                if (readFile[i] === '+') {
                    temp += readFile[i];
                    if (readFile[i + 1] === '+' || readFile[i + 1] === '=') {
                        temp += readFile[i + 1];
                        i = i + 1;
                        wordsArr.push(temp)
                        temp = ""
                    }

                } else if (readFile[i] === '-') {
                    temp += readFile[i]
                    if (readFile[i + 1] === '-' || readFile[i + 1] === '=') {
                        temp += readFile[i + 1];
                        i = i + 1;
                        wordsArr.push(temp)
                        temp = ""
                    }
                    // if ((readFile[i] === '-') && (readFile[i + 1] === '-')) {
                    //     temp += readFile[i]
                    //     temp += readFile[i + 1]
                    //     wordsArr.push(temp)
                    //     temp = "";
                    //     i = i + 2;
                    //     // console.log(i)

                    // }
                    // if ((readFile[i] === '-') && (readFile[i + 1] !== '-')) {
                    //     temp += readFile[i]
                    //     console.log('SingleMinus', temp)
                    //     wordsArr.push(temp)
                    //     temp = "";
                    //     i++;

                    // }
                } else if (readFile[i] === '*') {
                    // Multiline comments
                    if ((readFile[i + 1] === '/') || (readFile[i - 1] === '/')) {
                        temp += readFile[i];
                        temp = ""
                    }
                    // Multiplication
                    if (readFile[i + 1] === '=') {
                        temp += readFile[i]
                        temp += readFile[i + 1]
                        i = i + 1;
                        wordsArr.push(temp)
                        temp = ""
                    }
                } else if (readFile[i] === '/') {
                    if (readFile[i + 1] === '/') {
                        // Single line comment
                        for (var p = i + 2; true; p++) {
                            if (lineBreaker.includes(readFile[p])) {
                                // Remove all
                                temp = ""
                                // Set index, p-1 because i will be incremented at for loop
                                i = p - 1
                                break;
                            }
                        }
                    } else if ((readFile[i + 1] === '=')) {
                        temp += readFile[i]
                        temp += readFile[i + 1]
                        i = i + 1;
                        wordsArr.push(temp)
                        temp = ""
                    } else {
                        temp += readFile[i]
                        wordsArr.push(temp)
                        temp = ""
                    }
                } else if (readFile[i] === '%') {
                    if (readFile[i + 1] === '=') {
                        temp += readFile[i]
                        temp += readFile[i + 1]
                        i = i + 1;
                        wordsArr.push(temp)
                        temp = ""
                    } else {
                        temp += readFile[i]
                        wordsArr.push(temp)
                        temp = ""
                    }
                }
            }
            if (relationalOperatorsArr.includes(readFile[i])) {
                if (readFile[i] === '!') {
                    temp += readFile[i]
                    if (readFile[i + 1] === '=') {
                        console.log(readFile[i + 1], i + 1)
                        temp += readFile[i + 1]
                        i = i + 1;
                    }
                } else if (readFile[i] === '|') {
                    temp += readFile[i]
                    if (readFile[i + 1] === '|') {
                        temp += readFile[i + 1]
                        i = i + 1;
                    }
                } else if (readFile[i] === '&') {
                    temp += readFile[i]
                    // console.log(temp)
                    if (readFile[i + 1] === '&') {
                        temp += readFile[i + 1]
                        i = i + 1;
                    }
                }
            }
            if (greaterThan.includes(readFile[i])) {
                temp += readFile[i]
                // console.log(temp)
                if (readFile[i + 1] === '=') {
                    temp += readFile[i + 1]
                    // console.log(temp)
                    i++;
                    // console.log(temp)
                }
                var flag = true;

            }
            if (spaceArr.includes(readFile[i])) {
                //  console.log('spaceARr')
                // console.log(readFile[i],i)
                // temp += readFile[i]
                // var flag = true;
            }
            if (stringArr.includes(readFile[i])) {
                temp+=readFile[i]
                // console.log("temp",temp)
                // var u=i;
                for(var u=i+1;u<=readFile.length;u++){
                    if(stringArr[0]===readFile[u]){
                            temp+=readFile[u]
                            break;
                    }
                    temp+=readFile[u]
                }
                wordsArr.push(temp)
                i=u;
                temp="";
            }
            if(BracketsArr.includes(readFile[i])){
                temp+=readFile[i]
                wordsArr.push(temp);
                temp=""
            }
            if(otherBreakersArr.includes(readFile[i])){
                temp+=readFile[i]
                wordsArr.push(temp);
                temp=""
            }

            

        } else if (!flag) {
            if ((readFile[i - 1] === '*') && (readFile[i - 2] === '/')) {
                var flagcom = false
                // temp=""
                while (!flagcom) {
                    temp += readFile[i];
                    temp = "";
                    i++;
                    if ((readFile[i + 1] === '*') && (readFile[i + 2] === '/')) {
                        flagcom = true;
                    }
                }
            } else {
                // console.log("temp",temp)
        // var result=newLineReg.test(word)

                
                temp += readFile[i];
            //     temp.replace('\r','');
            //      console.log(temp)
            // if(temp.includes("\r")){
            //     console.log("word22",temp)
            // }
                // if(temp.includes("\r")){
                //     console.log("temp",temp)
                // temp.replace('\r','');
                // console.log()

                // }
                // temp.replace('\r','');
                // console.log("temp",temp)
                // temporary+=temp;
                // if(newLineReg.test(temp)){
                //     console.log("true",temp)
                //     temp="";
                //     console.log("secondTemp",temp)
                //     }
                // if(readFile[i+1]==="\r"){
                    
                // }
                // console.log("temp",temp)
            }
        }
    }
    return wordsArr
}
