function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
let  c=counter(5);
c();
c();
c();
