var fb1 = document.getElementById("feedback");
var fb2 = document.getElementById("feedback2");
var fb3 = document.getElementById("feedback3");

var answer = Math.floor(Math.random()*100);
var count = 0;
var guessNums = [];

function guessGame(){
    var userGuess = document.getElementById("guess").value;

    if(userGuess<=1 || userGuess>=100){
        alert("請輸入有效地數值");
    }
    else{
        guessNums.push(userGuess);
        count+=1;

        if(userGuess < answer){
            fb1.textContent = "您猜得太低了!";
            fb2.textContent = "您猜了: " + count;
            fb3.textContent = "您猜過: " + guessNums;
        }
        else if(userGuess > answer){
            fb1.textContent = "您猜得太高了!";
            fb2.textContent = "您猜了: " + count;
            fb3.textContent = "您猜過: " + guessNums;
        }
        else if(userGuess == answer){
            fb1.textContent = "恭喜答對了!";
            fb2.textContent = "最終數字是: " + answer;
            fb3.textContent = "您總共猜了 " + count + "次";
            document.getElementById("btn").disabled = true;
        }
    }
}