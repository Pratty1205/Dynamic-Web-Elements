player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score+":";
document.getElementById("player2_score").innerHTML=player2_score+":";
document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("lowercase_word"+ word);
    letter1=word.charAt(1);
    console.log("letter1"+letter1);
    middle_letter=Math.floor(word.length/2)
    letter2=word.charAt(middle_letter);
    console.log("letter2"+letter2);
    second_last_letter=word.length-1;
    letter3=word.charAt(second_last_letter)
    console.log("letter3",+letter3);
    remove_letter1=word.replace(letter1,"_");
    remove_letter2=remove_letter1.replace(letter2,"_");
    remove_letter3=remove_letter2.replace(letter3,"_");
    question_word = "<h4 id='word_display'> Q. "+remove_letter3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; document.getElementById("word").value = "";
}
question_turn="player1";
answer_turn="player2";
function check() {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase;
    if (answer==word) {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else { 
    player2_score = player2_score +1;
    document.getElementById("player2_score").innerHTML = player2_score;
    }
    if (question_turn=="player1") {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
    }
    else {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
    }
    if (answer_turn="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
    }
    else {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}