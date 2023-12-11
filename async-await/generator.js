// generator function
function *fetchNextElement(){
    console.log("inside generator fn");
    const x = 10;
    yield 11;
    console.log("After first yield");
    const y = x + (yield 20);
    console.log("value of y is ", y);
}

const iter = fetchNextElement();
console.log("called generator");
console.log("first", iter.next());
console.log("second", iter.next());
//console.log("third",iter.next());// for this call above y will be NaN, so in order to execute the above line 6 use below line code.
console.log("third new", iter.next(17));


