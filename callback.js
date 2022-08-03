function explain_callback(name,age,work){
    console.log('hello',name);
    console.log('age',age);
    work();

}

function washHand(){
    console.log('wash hand ');
}
function shaower(){
    console.log('taker shaowe daily');
}
function usefb(){
    console.log('use fb but dont like post');
}

explain_callback('rahat',20,washHand);
explain_callback('rafi',20,shaower);
explain_callback('rahat',20,usefb);

