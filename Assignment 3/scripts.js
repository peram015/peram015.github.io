console.log

console.log("increasing roses");
var symbols = ["@", "@-", "@--", "@- @-", "@-- @--", "@---", "@~~~", "@~", "@~ @~", "@- @-", "@-- @--", "@---", "@~~~", "@~", "@~ @~", "@- @-", "@-- @--", "@---", "@~~~", "@~", "@~ @~", "@- @-", "@-- @--", "@---", "@~~~", "@~", "@~ @~",]
var pattern = "@~";

for (var increment= 0; increment < symbols.length; increment++) {
    console.log(pattern);
    pattern = pattern + symbols[increment];
    var ampersand = "";
    console.log(increment);
    
    if (increment > 30)
        for (var another = 0; another < 10; another++) {
            console.log(ampersand);
            ampersand = ampersand + ["-", "-"]
            
        }
}

function addnumbers(num1, num2) { 
   var sum = (num1 + num2)
   return sum; 
   


}
