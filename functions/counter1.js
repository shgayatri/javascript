function counter(start){
    let count = start;

    return {
        increment: function(){
            count++;
            console.log(count);
        },

        decrement: function(){
            count--;
            console.log(count);
        }
    }
}

let c = counter(5);

c.increment(); 
c.increment(); 
c.decrement();  