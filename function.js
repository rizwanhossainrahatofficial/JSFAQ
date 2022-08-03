function evenify(num){
    if(num%2==0){
            console.log(num,'the number is even');
    }
    else{
        console.log(num,'the numebr is odd');
    }
        
    }
    




function evenfor(nums){
for (let i = 0; i < nums.length; i++) {
    var num = nums[i];
   evenify(num)
}
}


age=[5,7,6,8];
// evenfor(age);
nums=[5,9,7,6,78,2];

// evenfor(nums);






// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if(element%2==0){
//         console.log(element,'the number is even');
//     }
//     else{
//         console.log(element*2,'the number is odd');
//     }
// }

function evenify(num){
    var result;
    if(num%2==0){
           result= num;
    }
    else{
        result= num;
        
    }
    return result;
}
    var number=evenify(15);
     var square=number*number;
     console.log(square);