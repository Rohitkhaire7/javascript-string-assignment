function capitalize(event){
   var str =  document.getElementById("capitalize").value;

    
   str=str.toLowerCase();
   let asciiRef = str.charCodeAt(0);
   let newAsciiRef = asciiRef - 32;
   let newChar = String.fromCharCode(newAsciiRef);
   var result=  newChar + str.substr(1);

   document.getElementById("strResult").innerHTML = result;
}

function capitalizeAll(event){
    var strCapitalizeAll = document.getElementById("capitalizeAll").value;

    let result = "";
  
  
  for (let i = 0; i < strCapitalizeAll.length; i++) {
    let char = strCapitalizeAll[i];
    
    
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
     
      result += char;
    }
  }
  
  


    document.getElementById("strResultCapitalizeAll").innerHTML =result;
}

function isExist(){
  var word = document.getElementById("isExist").value;
  var str1 = "riting into an HTML element, using innerHTML Writing into an HTML using document.write()writing into an alert message using windows.alert"
  
  var result = str1.includes(word);
    if(result){
  document.getElementById("resultIsExist").innerHTML = "word is present id String"
    }
    else{
        document.getElementById("resultIsExist").innerHTML =  "word is not present in the String"
    }
}


    function getOccurrenceCount(e){
      let stringGetOccurrenceCount = document.getElementById("stringOccuranceCount").value;
      let wordGetOccurrencecount =  document.getElementById("getOccurrenceCountWord").value;
      let count = 0;
      let word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount)
      while (word != -1){
        count++;
        word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount, word+1);

      }
      document.getElementById("resultgetOccurrenceCount").innerHTML = ("Word Occurance count is:",count);
    }

    

    function wordDensity(){
      let stringGetOccurrenceCount = document.getElementById("stringOccuranceCount").value;
      let wordGetOccurrencecount =  document.getElementById("getOccurrenceCountWord").value;
      let count = 0;
      let wordCount=0;
      let i=0;
      let stringLength = stringGetOccurrenceCount.length-1;
      for( i= 0; i<= stringLength; i++){
        if(stringGetOccurrenceCount[i] == " "){
          count++;
        }
      }
      let word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount)
      while (word != -1){
        wordCount++;
        word = stringGetOccurrenceCount.indexOf(wordGetOccurrencecount, word+1);
      }
      var density= (wordCount / count) * 100;

       printDensity = "word Density is: ";
      console.log(printDensity);
     document.getElementById("wordDensity").innerHTML = printDensity+ density;
  
    }


function getSelectedFile(e) {
  
  const fileInput = document.getElementById("fileInput").value;
  console.log(fileInput);

  const fileExtentionIS = fileInput.slice(fileInput.lastIndexOf(".")); 
  document.getElementById("fileExtension").innerHTML = fileExtentionIS;
}

function removewhiteSpaces(e){
  const str = document.getElementById("removewhiteSpaces").value;
 const result= str.replace(/\s/g, "");
 document.getElementById("whiteSpacesRemoved").innerHTML = result;
}


function reverseWords(e){
  const word = document.getElementById("reverseWords").value;
  let length = word.length;
  var reverceWordResult ="";

  for(var i = length; length>= -1; i--){
    reverceWordResult = reverceWordResult+ word[i];

  }

  document.getElementById("result").innerHTML = reverceWordResult;
}


function countVowels(e){
  var str = document.getElementById("countVowels").value;
  var length =str.length;
  var count =0;

  for(i=0; i<=length; i++){
    if(str[i]=="a" || str[i] == "A" || str[i]=="e" || str[i]=="E" || str[i] == "i" || str[i]=="I" || str[i]=="o" || str[i]=="O" || str[i]== "v" || str[i]=="V"){
      count++;
    }

  }

  document.getElementById("countVowelsResult").innerHTML = count;

}


function isPalindrome(e){
  const str =  document.getElementById("isPalindrome").value;
  let length = str.length;
  var reverceWordResult ="";

  for(var i = length; i >= 0; i--){
    reverceWordResult = reverceWordResult+ str[i];
  }

  if(str == reverceWordResult){
    document.getElementById("isPalindromeResult").innerHTML = "String is palindrome";
  }
  else
  {
    document.getElementById("isPalindromeResult").innerHTML = "String is not Palindrome";
  }
}