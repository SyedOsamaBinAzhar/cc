const {
    wordBreak
} = require('./functionality')

var tokenArr = [];

const keywordDictionary=[
    {
        class:"DataType",
        word:'int'
    },
    {
        class:"DataType",
        word:'double'
    },
    {
        class:"DataType",
        word:'string'
    },
    {
        class:"DataType",
        word:'char'
    }
    ,
    {
        class:"DataType",
        word:'bool'
    }
    ,
    {
        class:"public",
        word:'public'
    }
    ,
    {
        class:"private",
        word:'private'
    }
    ,
    {
        class:"protected",
        word:'protected'
    }
    ,
    {
        class:"return",
        word:'return'
    }
    ,
    {
        class:"static",
        word:'static'
    }
    ,
    {
        class:"void",
        word:'void'
    }
    ,
    {
        class:"fn",
        word:'fn'
    }
    ,
    {
        class:"switch",
        word:'switch'
    }
    ,
    {
        class:"class",
        word:'class'
    }
    ,
    {
        class:"new",
        word:'new'
    }
    ,
    {
        class:"extends",
        word:'extends'
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
]
// const punctuatorDictionary=[
//     {
//         class: "BracketOp",
//         word: '('
//     },
//     {
//         class: "BracketOp",
//         word: ')'
//     },
//     {
//         class: "BracketOp",
//         word: '{'
//     },
//     {
//         class: "BracketOp",
//         word: '}'
//     },
//     {
//         class: "BracketOp",
//         word: '['
//     },
//     {
//         class: "BracketOp",
//         word: ']'
//     },
//     {
//         class: "InvertedCommaOp",
//         word: '"'
//     },
//     {
//         class: "CarrotOp",
//         word: '^'
//     },
//     {
//         class: "templateStringOp",
//         word: '`'
//     },
//     {
//         class: "underscoreOp",
//         word: '_'
//     },
//     {
//         class: "hyphenOp",
//         word: '-'
//     },
//     {
//         class: "colonOp",
//         word: ':'
//     },
//     ,
//     {
//         class: "commaOp",
//         word: ','
//     },
//     ,
//     {
//         class: "atTheRateOp",
//         word: '@'
//     },
//     ,
//     {
//         class: "hashOP",
//         word: '#'
//     },
// ]

// TODO : Punctuator
// TODO : Variable/Identitifier ----> Create Regex
// TODO : Constant ----> Create Regex
// RE:

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
    class: "Inc/Dec",
    word: '++'
},
]



let identifierRegex = /^[A-Za-z]+$/;
let integerRegex= /^[-+]?\d+$/;
let doubleRegex=/^[+-]?\d*[.]{1}\d+$/
const doubleregex = ""
const charregex = ""
const stringregex = /^[A-Za-z]+$/




var checkKeyword=(word)=>{
    for(var x=0;x<keywordDictionary.length;x++){
        if(keywordDictionary[x].word===word){
            console.log("checkkeyword = "+word)
            var TokenObj={
                class: keywordDictionary[x].class,
                word: keywordDictionary[x].word,
            }
            tokenArr.push(TokenObj)
        // console.log(tokenArr)
        return true
        }
    }
}

var checkOperator = (word) => {
        // TODO:
        for(var x=0;x<operatorDictionary.length;x++){
            if(operatorDictionary[x].word===word){
            console.log("checkOperator = "+word)
                var keywordTokenObj={
                    class: operatorDictionary[x].class,
                    word: operatorDictionary[x].word
                }
                tokenArr.push(keywordTokenObj)
                // console.log("checkOper",tokenArr)
                return true
            }
        }
}

var checkPunctuator = (word) => {
        // TODO:
        for(var x=0;x<punctuatorDictionary.length;x++){
            if(punctuatorDictionary[x].word===word){
            console.log("checkPunc = "+word)
                
                var keywordTokenObj={
                    class: punctuatorDictionary[x].class,
                    word: punctuatorDictionary[x].word,
                }
                tokenArr.push(keywordTokenObj)
                // console.log("checkOper",tokenArr)
            }
        }
}

var checkIdentifier=(word)=>{
        var result=identifierRegex.test(word);
     
        if(result){
            // console.log("hi1")
            // console.log("checkID = "+word)

            var tokenObj={
                class:"identifier",
                word:word
            }
            tokenArr.push(tokenObj)
            return result;
        }
}

var checkInteger=(word)=>{
    var result=integerRegex.test(word);
    if(result){
        // console.log("hi1")
        console.log("checkInt = "+word)

        var tokenObj={
            class:"integer",
            word:word
        }
        tokenArr.push(tokenObj)
        return result;
    }

}
  
var checkDouble=(word)=>{
var result=doubleRegex.test(word);
if(result){
    var tokenObj={
        class:"double",
        word:word
    }
    console.log("checkDouble")
    tokenArr.push(tokenObj)
    // console.log(tokenArr,"")
    return result;

}
}

//check string ka function krna hai like above functions
var checkString=(word)=>{
    var result = stringregex.test(word)
    console.log("String Result ", result)
    // console.log(" = "+word)
    if(result){
        var tokenObj={
            class:"string",
            word:word
        }
        tokenArr.push(tokenObj)
        return result;
    }
}
//check char ka function krna hai like above functions
var checkChar=(word)=>{}


// Requiring fs module in which  
// readFile function is defined. 

const fs = require('fs')
var readFile;
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    readFile = data.toString()
    // console.log(readFile)
    var wordsArr = wordBreak(readFile)
    console.log("*******************wordsArr*************")
    console.log(wordsArr)
    console.log("********************************")

    wordsArr.forEach((word =>{
          var keyword=checkKeyword(word)
          console.log("keyword",keyword)
        //   checking keyword
          if(typeof(keyword) === "undefined"){
              var operator=checkOperator(word)
              console.log("operator",operator)
              //checking operator
              if(typeof(operator) === "undefined"){
                  //checking punctuator
                  var punctuator=checkPunctuator(word)
              console.log("punctuator",punctuator)
              if(typeof(punctuator) === "undefined"){
                        var identifier=checkIdentifier(word)
                        console.log("ID",identifier)
                        if(typeof(identifier) == "undefined"){
                        var integer=checkInteger(word)
                        console.log("integer",integer)
                            if(typeof(integer) == "undefined"){
                                var double=checkDouble(word)
                                console.log("double",double)
                                if(typeof(double)==="undefined"){
                                    var string = checkString(word)
                                    if(typeof(string)=="undefined"){
                                        // TODO: STRING TODO
                                    }
                                }
                            }
                        }
              }

              }
          } 
    }))

console.log("tokenArr",tokenArr)

})


