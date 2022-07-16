/*
player1_score = 0;
player2_score = 0;
factor1 = document.getElementById('factor1');
factor2 = document.getElementById('factor2');
actualAnswer = parseInt(factor1) * parseInt(factor2);
question_turn = 'player1';
answer_turn = 'player2';
player1_name = 'Abhijeet';
player2_name = 'Mahdi';

function send(){
    questionNumber = "<h4>" + factor1.value + " X " + factor2.value + "</h4>";
    inputBox = "<br>Answer: <input type='text' id='input_box'>"
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("factor1").innerHTML = "";
    document.getElementById("factor2").innerHTML = "";
}
function check(){
    get_answer = document.getElementById('input_box').value;
    if(get_answer == actualAnswer){
        if(answer_turn == 'player1'){
            player1_score += 1;
            answer_turn = 'player2';
            question_turn = 'player1';  
            document.getElementById('questioner').innerHTML = 'Question Turn: ' + player1_name;
            document.getElementById('answerer').innerHTML = 'Answer Turn: ' + player2_name;
            document.getElementById('player1_score').innerHTML = player1_score;
        }
        else{
            player2_score += 1;
            answer_turn = 'player1';
            question_turn = 'player2';  
            document.getElementById('questioner').innerHTML = 'Question Turn: ' + player2_name;
            document.getElementById('answerer').innerHTML = 'Answer Turn: ' + player1_name;
            document.getElementById('player2_score').innerHTML = player2_score;
        }
    }
}
*/


player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
number1 = document.getElementById("factor1").value;
number2 = document.getElementById("factor2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);


question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("factor1").value = "";
document.getElementById("factor2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)	
{
    if(answer_turn == "player1")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}

if(question_turn == "player1")
{
    question_turn = "player2"
    answer_turn = "player1";
    document.getElementById("questioner").innerHTML = "Question Turn - " + player2_name 
    document.getElementById("answerer").innerHTML = "Answer Turn - " + player1_name
}
else 
{
    question_turn = "player1"
    answer_turn = "player2"
    document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name ;
    document.getElementById("answerer").innerHTML = "Answe Turn - " + player2_name;
}

document.getElementById("output").innerHTML = "";
}

