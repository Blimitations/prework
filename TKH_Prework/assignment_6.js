//Given the below array, create a function which loops through each name, comparing the length of each to determine the longest name, save that name to the variable longest_name. Return longest_name to the another variable called answer and log the answer variable to the screen.

const strings2 =["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"];

function longestName(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++){
        let currentItem = arr[i]
        if(currentItem.length > result.length){
            result = arr[i];
        }
    }
return result;
}

const ans = "Answer for assignment number six is ", res = (longestName(strings2)), sum2 = ans + res;

console.log (sum2)


 
/*
const over_under_array = [1,45,32,21,5,17,43,93] 


for(let i=0; i<over_under_array.length; i++){

    if(i>25){
        console.log("over")
      
    }else if(i<25){console.log("under")}
  
  }
*/  