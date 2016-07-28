// word[0] word[1]...word[n]
// loop start:
// choose random number from
var word = "mango";
var numberList = [];

for (var x = 0; x < word.length; x++) {

    for (var i = 0; i < word.length; i++) {
        numberList.push(i);
    

        var num = numberList[Math.floor(Math.random()*numberList.length)];

        var scrambledString = "";
        scrambledString += word[num];

    // numberList.splice(num, 1);
}

