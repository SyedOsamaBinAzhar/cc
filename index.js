const{wordBreak}=require('./functionality')
var commonKeywords=[];
const keywordsArr=['public','return','static','void','class','switch','fn','new','extends',"int","double","string","char","bool"];


var checkKeyword=(wordsArr)=>{
for (let j = 0; j < wordsArr.length; j++) {
flag=false;
for (let p = 0; p < keywordsArr.length; p++) {
    if(wordsArr[j]===keywordsArr[p]){
        commonKeywords.push({
            type:keywordsArr[p],
            value:keywordsArr[p],
        })
        flag=true
        break;
}
}
    if(!flag){
        commonKeywords.push({
            type:null,
            value:wordsArr[j],
        })
    }
}
console.log(commonKeywords);
}


// Requiring fs module in which  
// readFile function is defined. 
const fs = require('fs') 
var readFile;
fs.readFile('./input.txt', (err, data) => { 
    if (err) throw err; 
    readFile=data.toString() 
    // console.log(readFile)
    var wordsArr=wordBreak(readFile)
    console.log(wordsArr)
    // checkKeyword(wordsArr);
}) 
