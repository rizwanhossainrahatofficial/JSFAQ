// argument holo akdoroner object jei khane function thake extra data niye excess kora jai

function addnumber(num1,num2){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum=sum+num;
       
        }
       
    
    function loginfo(meassage){
        console.log( meassage);
    }
    loginfo('good night');

    return sum;
}

var result=addnumber(5,4,8,70);
console.log(result);