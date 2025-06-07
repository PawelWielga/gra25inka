"use strict";

// Variables
const debug = false;
let question_number = 1;
let questions = [];
const answeredQuestionsIds = [];

let questionsCount = 0;
let actualQuestionId = 0;

let answerLocked = false;

let timeout = 2000;

// Game code
$(document).ready(() => {
    if(debug) {timeout = 10;}

    // Parse questions from JSON
    const parsedJSON = JSON.parse(questionsJSON);
    questions = parsedJSON["questions"];
    questionsCount = questions.length

    // Start Game!
    showStartScreen();
});

// Functions
function showStartScreen() {
    if (debug) { console.log("showStartScreen"); }
    $("#question_text").html("Witaj w specjalnej wersji gry Milionerzy przygotowanej specjalnie na Twoje <span class='green'>25</span> urodziny, mam nadzieję że będziesz się świetnie bawiła. Powodzenia!");
    $("#next_button").click(function(){
        $(this).unbind();
        showIntoductionScreen();
    });
};

function showIntoductionScreen() {
    if (debug) { console.log("showIntoductionScreen"); }
    $("#question_text").html("W trakcie gry musisz odpowiedzieć na serię pytań przygotowanych specjalnie dla Ciebie. Mimo iż do wygrania wystarczy poprawnie odpowiedzieć poprawnie na <span class='green'>12</span> pytań to w bazie pytań znajduje się ich więcej, tak więc możesz zagrać kilka razy aby zobaczyć wszystkie pytania.");
    $("#next_button").click(function(){
        $(this).unbind();
        showInstructionsScreen();
    });
}

function showInstructionsScreen() {
    if (debug) { console.log("showInstructionsScreen"); }
    $("#question_text").html("Dodatkowo w trakcie gry masz do wykorzystania 2 koła ratunkowe pół na pół oznaczone <span class='glyphicon glyphicon-eye-close green'></span> oraz zaznaczenie poprawnej odpowiedzi oznaczone <span class='glyphicon glyphicon-ok green'></span>, z każdego koła możesz skorzystać tylko raz więc używaj gdy naprawdę nie znasz odpowiedzi.<br /><br /><span class='green'>PS.</span> To nie jest idealnie napisana gra więc proszę nie zaznaczaj kilku odpowiedzi na raz <span class='glyphicon glyphicon-heart green'></span>");
    $("#next_button").click(function(){
        $(this).css("visibility","hidden");
        $(this).unbind();
        showLifebelts();
        startGame();
    });
}

function showLifebelts()
{
    if (debug) { console.log("showLifebelts"); }
    $(".lifebelt").each( function() {
        $(this).css("visibility","visible");
    });

    $("#lifebelt_5050").click( function() {
        $(this)
            .unbind()
            .prop("disabled", true)
            .css("color", "#02040e")
            .css("cursor", "default");
        hideTwoWrongAnswers();
    });

    $("#lifebelt_good_answer").click( function() {
        $(this)
            .unbind()
            .prop("disabled", true)
            .css("color", "#02040e")
            .css("cursor", "default");
        checkCorrectAnswer();
    });
}

function checkCorrectAnswer() {
    $(".good_answer").trigger( "click" );
}

function hideTwoWrongAnswers() {
    const date = new Date();
    const time = date.getTime();
    const from = time%2;

    if (from === 1) {
        $(".wrong_answer:eq(0)")
            .html("")
            .unbind();
        $(".wrong_answer:eq(1)")
            .html("")
            .unbind();
    }
    else {
        $(".wrong_answer:eq(1)")
            .html("")
            .unbind();
        $(".wrong_answer:eq(2)")
            .html("")
            .unbind();
    }
}

function startGame() {
    if (debug) { console.log("startGame"); }
    actualQuestionId = getNextQuestion();
    showQuestOnScreen(actualQuestionId);
}


function getNextQuestion(){
    let id = Math.floor(Math.random() * questionsCount);
    while (answeredQuestionsIds.includes(id)){
        id = Math.floor(Math.random() * questionsCount);
    }
    answeredQuestionsIds.push(id);
    return id;
};

function showQuestOnScreen(questionId) {
    answerLocked = false;
    const answersOrder = orderAnswers();
    const questionText = questions[questionId]["question"];
    const answerA =      questions[questionId]["answer_" + answersOrder[0]]
    const answerB =      questions[questionId]["answer_" + answersOrder[1]]
    const answerC =      questions[questionId]["answer_" + answersOrder[2]]
    const answerD =      questions[questionId]["answer_" + answersOrder[3]]

    $("#question_number_center").html("Pytanie " + question_number);
    $("#question_text").html(questionText);
    resetAnswersHTML();
    if(answersOrder[0] === 0) { $("#answer_a").children(".answer_center").html(answerA)
                                    .addClass("good_answer")
                                    .click(function(){goodAnswer(this)}); }
    else                      { $("#answer_a").children(".answer_center").html(answerA)
                                    .addClass("wrong_answer")
                                    .click(function(){wrongAnswer(this)}); }
    if(answersOrder[1] === 0) { $("#answer_b").children(".answer_center").html(answerB)
                                    .addClass("good_answer")
                                    .click(function(){goodAnswer(this)}); }
    else                      { $("#answer_b").children(".answer_center").html(answerB)
                                    .addClass("wrong_answer")
                                    .click(function(){wrongAnswer(this)}); }
    if(answersOrder[2] === 0) { $("#answer_c").children(".answer_center").html(answerC)
                                    .addClass("good_answer")
                                    .click(function(){goodAnswer(this)}); }
    else                      { $("#answer_c").children(".answer_center").html(answerC)
                                    .addClass("wrong_answer")
                                    .click(function(){wrongAnswer(this)}); }
    if(answersOrder[3] === 0) { $("#answer_d").children(".answer_center").html(answerD)
                                    .addClass("good_answer")
                                    .click(function(){goodAnswer(this)}); }
    else                      { $("#answer_d").children(".answer_center").html(answerD)
                                    .addClass("wrong_answer")
                                    .click(function(){wrongAnswer(this)}); }
    if(debug){ showGoodAnswer(); }                             
};

function showGoodAnswer(){
    $(".wrong_answer").css("color","white");
    $(".good_answer").css("color","green");
}

function resetAnswersHTML() {
    $("#answer_a").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .removeClass("checking")
        .css("cursor","pointer")
        .unbind()
        .html("");
    $("#answer_b").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .removeClass("checking")
        .css("cursor","pointer")
        .unbind()
        .html("");
    $("#answer_c").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .removeClass("checking")
        .css("cursor","pointer")
        .unbind()
        .html("");
    $("#answer_d").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .removeClass("checking")
        .css("cursor","pointer")
        .unbind()
        .html("");
};

function disableAllAnswers() {
    $(".answer_center").off("click").css("cursor","default");
}

function goodAnswer(answerBtn) {
    if(answerLocked) { return; }
    answerLocked = true;
    $(answerBtn).addClass("checking");
    if (debug) { console.log("goodAnswer"); }
    disableAllAnswers();
    setButtonColor(answerBtn,"goldenrod");
    setTimeout(function(){
        setButtonColor(answerBtn,"green");
        checkScore();
        setTimeout(function(){
            question_number++;
            $(answerBtn).removeClass("checking");
            resetButtonColor(answerBtn);
            if(question_number<13)
            {
                startGame();
            }
            else {
                winGame();
            }
        }, timeout);
    }, timeout);
};

function wrongAnswer(answerBtn) {
    if(answerLocked) { return; }
    answerLocked = true;
    $(answerBtn).addClass("checking");
    if (debug) { console.log("wrongAnswer"); }
    disableAllAnswers();
    setButtonColor(answerBtn,"goldenrod");
    setTimeout(function(){
        setButtonColor(answerBtn,"red");
        setButtonColor($(".good_answer"),"green");
        setTimeout(function(){
            $(answerBtn).removeClass("checking");
            $(".good_answer").removeClass("checking");
            resetButtonColor(answerBtn);
            resetButtonColor($(".good_answer"));
            loseGame();
        }, timeout);
    }, timeout);
};

function checkScore() {
    $("#point_step_"+(question_number)).children(".point_symbol").addClass("point_answered")
}

function loseGame() {
    if (debug) { console.log("loseGame"); }
    $("#question_number_center").html("Koniec Gry");
    resetAnswersHTML();
    let points = "0";
    if(question_number >= 3 && question_number < 8) { points = "1.000"; }
    else if(question_number >= 8) {points = "40.000"; }
    $("#question_text").html("Niestety nie udało Ci się odpowiedzieć na wszystkie pytania. Zdobyłaś <span class='green'>"+ points +"</span> całusów <span class='glyphicon glyphicon-heart green'></span>");
    $("#next_button").css("visibility","visible").click(function(){
        $(this).unbind();
        showCredits();
    });
};

function winGame() {
    if (debug) { console.log("winGame"); }
    $("#question_number_center").html("Koniec Gry");
    resetAnswersHTML();
    $("#question_text").html("Gratulacje odpowiedziałaś poprawnie na wszytkie pytania! Zdobyłaś <span class='green'>1.000.000</span> całusów <span class='glyphicon glyphicon-heart green'></span>");
    $("#next_button").css("visibility","visible").click(function(){
        $(this).unbind();
        showCredits();
    });
}

function showCredits() {
    if (debug) { console.log("showCredits"); }
    $("#question_text").html("<span class='green'>Zaprogramował:</span><br /> Paweł Wielga<br /><br /><span class='green'>Pytania zredagowali:</span><br />Paweł Wielga, Monika Jamny, Magda Kopczyńska, Ela Chruścińska, Aneta Romanowska, Patrycja Ogradnik, Efffcik, Karlin6191");
    $("#next_button").click(function(){
        $(this).unbind();
        nextGame()
    });
}

function nextGame() {
    if (debug) { console.log("nextGame"); }
    $("#question_text").html("W bazie jest więcej pytań niż 12 więc możesz odświerzyć stronę i zagrać jeszcze raz <span class='glyphicon glyphicon-heart green'></span>");
    $("#next_button").css("visibility","hidden").unbind();
}



