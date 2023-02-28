const PI=3.14
function area_circle(r) {
    return (PI * r * r);
}
function max_of_three(a, b, c){
    max_value = 0;
    if (a > b){
        max_value = a;
    }
    else{
        max_value = b;
    }
    if (c > max_value){
        max_value = c;
    }
    return max_value;
}
function range_between(x) {
    if (x >= 0 && x <= 1){
        return true;
    } 
    else{
        return false;
    }
  }
console.log("Area of circle is:", area_circle(3));
console.log("Max value of three is:", max_of_three(11,25,4));
console.log("Number is between 0 and 1(0 and 1 inclusive):", range_between(0.8));
