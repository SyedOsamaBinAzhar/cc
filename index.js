//importing wordBreak function from functionality.js
const {
    wordBreak
} = require('./functionality')

//An array to store my tokens
var tokenArr = [];

//Multiple dictionaries to check and categorize the operators /punctuators/keywords etc
const keywordDictionary = [{
        class: "DataType",
        word: 'int'
    },
    {
        class: "DataType",
        word: 'double'
    },
    {
        class: "DataType",
        word: 'string'
    },
    {
        class: "DataType",
        word: 'char'
    },
    {
        class: "DataType",
        word: 'bool'
    },
    {
        class: "public",
        word: 'public'
    },
    {
        class: "private",
        word: 'private'
    },
    {
        class: "protected",
        word: 'protected'
    },
    {
        class: "return",
        word: 'return'
    },
    {
        class: "static",
        word: 'static'
    },
    {
        class: "void",
        word: 'void'
    },
    {
        class: "fn",
        word: 'fn'
    },
    {
        class: "switch",
        word: 'switch'
    },
    {
        class: "class",
        word: 'class'
    },
    {
        class: "new",
        word: 'new'
    },
    {
        class: "extends",
        word: 'extends'
    }
    ,
    {
        class: "Data Type",
        word: 'var'
    }
]

const operatorDictionary = [{
        class: "Arithmatic Op",
        word: '+'
    },
    {
        class: "Arithmatic Op",
        word: '-'
    },
    {
        class: "Arithmatic Op",
        word: '*'
    },
    {
        class: "Arithmatic Op",
        word: '/'
    },
    {
        class: "Inc/Dec",
        word: '++'
    },
    {
        class: "Inc/Dec",
        word: '--'
    },
    {
        class: "AdditionAssignment/SubtractionAssignment",
        word: '+='
    },
    {
        class: "AdditionAssignment/SubtractionAssignment",
        word: '-='
    },
    {
        class: "MultiplyAssignment",
        word: '*='
    }
    ,
    {
        class: "ComparisonOperators",
        word: '=='
    },
    {
        class: "ComparisonOperators",
        word: '==='
    },
    {
        class: "Assignment Operator",
        word: '='
    },
    {
        class: "Comparison Operator",
        word: '>'
    },
    {
        class: "Comparison Operator",
        word: '<'
    },
    {
        class: "Comparison Operator",
        word: '=<'
    },
    {
        class: "Comparison Operator",
        word: '>='
    }
]

const punctuatorDictionary = [{
        class: "bracketops",
        word: '('
    },
    {
        class: "bracketops",
        word: ')'
    },
    {
        class: "bracketops",
        word: '{'
    },
    {
        class: "bracketops",
        word: '}'
    },
    {
        class: "bracketops",
        word: ']'
    },
    {
        class: "bracketops",
        word: '['
    },
    {
        class: "Inc/Dec",
        word: '++'
    },
    {
        class: "Inc/Dec",
        word: '--'
    },
    {
        class: "CompoundAssignment",
        word: '+='
    },
    {
        class: "CompoundAssignment",
        word: '-='
    },
    
    {
        class: "Punctuator",
        word: ':'
    }
    ,
    
    {
        class: "Punctuator",
        word: '@'
    }
    ,
    
    {
        class: "Punctuator",
        word: '^'
    }
    ,
    
    {
        class: "Punctuator",
        word: '#'
    }
    ,
    
    {
        class: "Punctuator",
        word: '_'
    }
]


//DEFINING RE's.
let identifierRegex = /^[A-Za-z]+$/;
let integerRegex = /^[-+]?\d+$/;
let doubleRegex = /^[+-]?\d*[.]{1}\d+$/
const charregex = ""
const stringregex = /^"*[A-Za-z]*"+$/
const newLineReg= /\r?\n|\r/;

var lineNumber=1;



//The functions who check the current word using the RE's metnioned above
//PS: Character RE is not performed.
var checkKeyword = (word,lineNumber) => {
    for (var x = 0; x < keywordDictionary.length; x++) {
        if (keywordDictionary[x].word === word) {
            // console.log("checkkeyword = "+word)
            var TokenObj = {
                class: keywordDictionary[x].class,
                Value: keywordDictionary[x].word,
                LineNumber:lineNumber
            }
            tokenArr.push(TokenObj)
            // console.log(tokenArr)
            return true
        }
    }
}

var checkOperator = (word,lineNumber) => {
    // TODO:
    for (var x = 0; x < operatorDictionary.length; x++) {
        if (operatorDictionary[x].word === word) {
            // console.log("checkOperator = "+word)
            var keywordTokenObj = {
                class: operatorDictionary[x].class,
                Value: operatorDictionary[x].word,
                LineNumber:lineNumber
            }
            tokenArr.push(keywordTokenObj)
            // console.log("checkOper",tokenArr)
            return true
        }
    }
}

var checkPunctuator = (word,lineNumber) => {
    // TODO:
    for (var x = 0; x < punctuatorDictionary.length; x++) {
        if (punctuatorDictionary[x].word === word) {
            // console.log("checkPunc = "+word)

            var keywordTokenObj = {
                class: punctuatorDictionary[x].class,
                Value: punctuatorDictionary[x].word,
                LineNumber:lineNumber
            }
            tokenArr.push(keywordTokenObj)
            // console.log("checkOper",tokenArr)
        }
    }
}

var checkIdentifier = (word,lineNumber) => {
    var result = identifierRegex.test(word);

    if (result) {
        // console.log("hi1")
        // console.log("checkID = "+word)

        var tokenObj = {
            class: "identifier",
            Value: word,
            LineNumber:lineNumber
        }
        tokenArr.push(tokenObj)
        return result;
    }
}

var checkInteger = (word,lineNumber) => {
    var result = integerRegex.test(word);
    if (result) {
        // console.log("hi1")
        // console.log("checkInt = "+word)

        var tokenObj = {
            class: "integer",
            Value: word,
            LineNumber:lineNumber
        }
        tokenArr.push(tokenObj)
        return result;
    }

}

var checkDouble = (word,lineNumber) => {
    var result = doubleRegex.test(word);
    if (result) {
        var tokenObj = {
            class: "double",
            Value: word,
            LineNumber:lineNumber
        }
        // console.log("checkDouble")
        tokenArr.push(tokenObj)
        // console.log(tokenArr,"")
        return result;

    }
}


// var checkNewLine = (word,lineNumber) => {
//     const newLineReg= /\r?\n|\r/;
//     var result=newLineReg.test(word)
//     if (result) {
//         var tokenObj = {
//             class: "",
//             word: word
//         }
//         // console.log("checkDouble")
//         tokenArr.push(tokenObj)
//         // console.log(tokenArr,"")
//         return result;

// }   
// }

//check string ka function krna hai like above functions
var checkString = (word,lineNumber) => {
    var result = stringregex.test(word)
    // console.log("String Result ", result)
    if (result) {
        var tokenObj = {
            class: "string",
            Value: word,
            LineNumber:lineNumber
        }
        tokenArr.push(tokenObj)
        return result;
    }
}
//check char ka function krna hai like above functions
var checkChar = (word) => {}


// Requiring fs module in which  
// readFile function is defined. 

const fs = require('fs')
var readFile;
//reading .txt file
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;

    readFile = data.toString()
    //calling the imported function from functionality.js which returns words arr
    var wordsArr = wordBreak(readFile)
    console.log("*******************wordsArr*************")
    console.log(wordsArr)
    // for (let index = 0; index < wordsArr.length; index++) {
    //     // const element = array[index];
    //     console.log(
    //         wordsArr[index]
    //     )

    // }
    console.log("********************************")

    wordsArr.forEach((word => {
        //checking if the word contains \r
        //.test method returns true or false.
        var result=newLineReg.test(word)
        if(result){
            // console.log(lineNumber++)
            var tokenObj = {
                class: "newLineCharIssue",
                Value: word,
                LineNumber:lineNumber
            }
            tokenArr.push(tokenObj)
            lineNumber++;
            // console.log(lineNumber)
            // word.replace('\r','');
            // console.log(word)
            // if(word.includes("\r")){
            //     console.log("word22",word)
            // }
            // for(var q=0;q<wordsArr.length;q++){
            //     if(wordsArr[q]===word){
            //         // console.log("word",word)
            //         // console.log("q",wordsArr[q])
            //         word=undefined;
            //         delete(word);
            //         var word=wordsArr[q];
            //         if(word.includes("\r")){
            //             // console.log(word.indexOf())
            //             console.log("r not removed")
            //         }
            //         else{
            //             console.log("word",word)
            //         }

            //     }
            // }
        }
        //calling the functions to check each word that from which dictionary this word belongs to..
        var keyword = checkKeyword(word,lineNumber)
        //   checking keyword
        if (typeof (keyword) === "undefined") {
            var operator = checkOperator(word,lineNumber)
            //checking operator
            if (typeof (operator) === "undefined") {
                //checking punctuator
                var punctuator = checkPunctuator(word,lineNumber)
                //   console.log("punctuator",punctuator)
                if (typeof (punctuator) === "undefined") {
                    var identifier = checkIdentifier(word,lineNumber)
                    // console.log("worddd",word)
                    // console.log("ID",identifier)
                    if (typeof (identifier) == "undefined") {
                        var integer = checkInteger(word,lineNumber)
                        // console.log("integer",integer)
                        if (typeof (integer) == "undefined") {
                            var double = checkDouble(word,lineNumber)
                            // console.log("double",double)
                            if (typeof (double) === "undefined") {
                                var string = checkString(word,lineNumber)
                                // console.log("string",string)

                                //Error is not working properly
                                if (typeof (string) == "undefined"
                                 && typeof (double) == "undefined" 
                                 && typeof (punctuator) == "undefined" 
                                 && typeof (identifier) == "undefined" 
                                 && typeof (operator) == "undefined"
                                 && typeof (integer) == "undefined") {
                                    // console.log(`There is a lexical error in  line number + ${lineNumber}`,word)
                                    
                                }
                            }
                        }
                    }
                }

            }
        }
    }))

    //printing the generated tokens
    console.log("tokenArr", tokenArr)
    // console.log(lineCount)
})

//tasks left in lexical phase.
//1) Char RE
//2) Error reporting fixing
//3) Removing newline character from words which is creating an issue


