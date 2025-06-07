"use strict";

// Variables
const debug = false;
let question_number = 1;
let questions = [];
const answeredQuestionsIds = [];

let questionsCount = 0;
let actualQuestionId = 0;

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
        .unbind()
        .html("");
    $("#answer_b").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .unbind()
        .html("");
    $("#answer_c").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .unbind()
        .html("");
    $("#answer_d").children(".answer_center")
        .removeClass("good_answer")
        .removeClass("wrong_answer")
        .unbind()
        .html("");
};

function disableAllAnswers() {
    $(".answer_center").off("click").css("cursor","default");
}

function goodAnswer(answerBtn) {
    if (debug) { console.log("goodAnswer"); }
    disableAllAnswers();
    setButtonColor(answerBtn,"goldenrod");
    setTimeout(function(){
        setButtonColor(answerBtn,"green");
        checkScore();
        setTimeout(function(){
            question_number++;
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
    if (debug) { console.log("wrongAnswer"); }
    disableAllAnswers();
    setButtonColor(answerBtn,"goldenrod");
    setTimeout(function(){
        setButtonColor(answerBtn,"red");
        setButtonColor($(".good_answer"),"green");
        setTimeout(function(){
            resetButtonColor(answerBtn);
            resetButtonColor($(".good_answer"));
            loseGame();
        }, timeout);
    }, timeout);
};

function setButtonColor(button, color) {
    $(button).css("background-color",color);
    $(button).parent().children(".answer_left").css("border-right-color",color);
    $(button).parent().children(".answer_right").css("border-left-color",color);
}

function resetButtonColor(button)
{
    $(button).css("background-color","");
    $(button).parent().children(".answer_left").css("border-right-color","");
    $(button).parent().children(".answer_right").css("border-left-color","");
}

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

function orderAnswers() {
    const nums = [0,1,2,3];
    const ranNums = [];
    let i = nums.length;
    let j = 0;

    while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
    }

    return ranNums;
}


// Data
// Answer 0 => good answer
const questionsJSON = "{"+
                    "   \"questions\": ["+
                    "       {"+
                    "           \"id\" : 1,"+
                    "           \"question\" : \"Z jakiego kraju pochodzi synek Tuliś?\","+
                    "           \"answer_0\" : \"Azerbejdżanu\","+
                    "           \"answer_1\" : \"Chin\","+
                    "           \"answer_2\" : \"Polski\","+
                    "           \"answer_3\" : \"Bangladeszu\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 2,"+
                    "           \"question\" : \"Jaki może być stan pupy?\","+
                    "           \"answer_0\" : \"Podwyższony\","+
                    "           \"answer_1\" : \"Rozszerzony\","+
                    "           \"answer_2\" : \"Szeroki\","+
                    "           \"answer_3\" : \"Obniżony\","+
                    "           \"author\" : \"Monika Jamny\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 3,"+
                    "           \"question\" : \"Czym odpędzałyście razem z Magdą Kopczyńską natrętną pszczołę będąc kiedyś na Kortowie?\","+
                    "           \"answer_0\" : \"Perfumami\","+
                    "           \"answer_1\" : \"Reklamówką\","+
                    "           \"answer_2\" : \"Butem\","+
                    "           \"answer_3\" : \"Piwem\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 4,"+
                    "           \"question\" : \"Ile polubień na facebooku ma zdjęcie Magdy Kopczyńskiej wykonane przez Ciebie podczas sesji zdjęciowej na dworcu kolejowym?\","+
                    "           \"answer_0\" : \"233\","+
                    "           \"answer_1\" : \"250\","+
                    "           \"answer_2\" : \"302\","+
                    "           \"answer_3\" : \"207\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 5,"+
                    "           \"question\" : \"Ile piw wypiłaś wraz z Magdą Kopczyńską feralnego wieczoru w którym został utopiony jej telefon?\","+
                    "           \"answer_0\" : \"11\","+
                    "           \"answer_1\" : \"9\","+
                    "           \"answer_2\" : \"10\","+
                    "           \"answer_3\" : \"12\","+
                    "           \"author\" : \"Magda Kopczyńska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 6,"+
                    "           \"question\" : \"Jak nazywa się grupa na facebooku w której zapisujesz z Pawłem Wielga wasze śmieszne powiedzenia?\","+
                    "           \"answer_0\" : \"Myśl\","+
                    "           \"answer_1\" : \"Przekręty\","+
                    "           \"answer_2\" : \"Śmieszne\","+
                    "           \"answer_3\" : \"Cytaty\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 7,"+
                    "           \"question\" : \"Przed jakim krwiożerczym zwierzęciem, z całą pewnością uciekała, dziewczyna w czerwonej sukience?\","+
                    "           \"answer_0\" : \"Indorem\","+
                    "           \"answer_1\" : \"Kogutem\","+
                    "           \"answer_2\" : \"Bykiem\","+
                    "           \"answer_3\" : \"Kaczorem\","+
                    "           \"author\" : \"Efffcik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 8,"+
                    "           \"question\" : \"Jeden z Twoich listowych przyjaciół, możesz go spotkać także w lesie, zwłaszcza jesienią, to: \","+
                    "           \"answer_0\" : \"Grzybek\","+
                    "           \"answer_1\" : \"Kasztan\","+
                    "           \"answer_2\" : \"Żółty liść\","+
                    "           \"answer_3\" : \"Podgrzybek\","+
                    "           \"author\" : \"Karlin6191\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 9,"+
                    "           \"question\" : \"„Krowy niemowy” to tytuł:\","+
                    "           \"answer_0\" : \"Piosenki\","+
                    "           \"answer_1\" : \"Sonetu\","+
                    "           \"answer_2\" : \"Psalmu\","+
                    "           \"answer_3\" : \"Wiersza\","+
                    "           \"author\" : \"Patrycja Ogrodnik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 10,"+
                    "           \"question\" : \"Jaką byłaś uczesana w dniu pasowania na ucznia w pierwszej klasie?\","+
                    "           \"answer_0\" : \"Kucyk\","+
                    "           \"answer_1\" : \"Warkoczyki\","+
                    "           \"answer_2\" : \"Kucyki\","+
                    "           \"answer_3\" : \"Koczek\","+
                    "           \"author\" : \"Elżbieta Chruścińska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 11,"+
                    "           \"question\" : \"Co chodziło po łóżku Patrycji Ogrodnik w Augustowie? \","+
                    "           \"answer_0\" : \"Szczypawka\","+
                    "           \"answer_1\" : \"Stonoga\","+
                    "           \"answer_2\" : \"Mucha\","+
                    "           \"answer_3\" : \"Osa\","+
                    "           \"author\" : \"Patrycja Ogrodnik\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 12,"+
                    "           \"question\" : \"Jakie testy kazałaś rozwiązywać Radkowi Romanowskiemu aby sprawdzić czy nadaje się na męża? (Niestety mimo pytań nie otrzymałem widomości z odpowiedziami)\","+
                    "           \"answer_0\" : \"Dobra odpowiedź\","+
                    "           \"answer_1\" : \"Zła odpowiedź\","+
                    "           \"answer_2\" : \"Zła odpowiedź\","+
                    "           \"answer_3\" : \"Zła odpowiedź\","+
                    "           \"author\" : \"Aneta Romanowska\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 13,"+
                    "           \"question\" : \"Ilu masz followerów na Insta? (dane z dnia 19.07.2017, godzina 18:00)\","+
                    "           \"answer_0\" : \"242\","+
                    "           \"answer_1\" : \"224\","+
                    "           \"answer_2\" : \"244\","+
                    "           \"answer_3\" : \"214\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 14,"+
                    "           \"question\" : \"Ile masz zdjęć na Insta? (dane z dnia 19.07.2017, godzina 18:00)\","+
                    "           \"answer_0\" : \"256\","+
                    "           \"answer_1\" : \"220\","+
                    "           \"answer_2\" : \"311\","+
                    "           \"answer_3\" : \"249\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 15,"+
                    "           \"question\" : \"W jaki kształt układają się pieprzyki na plecach Łukasza Wielga (stan zmyślony, nie pokrywający się z rzeczywistością)\","+
                    "           \"answer_0\" : \"Świnki Pepy\","+
                    "           \"answer_1\" : \"Statku\","+
                    "           \"answer_2\" : \"Komputera\","+
                    "           \"answer_3\" : \"Niczego\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 16,"+
                    "           \"question\" : \"Duży komputer bez klawiatury to:\","+
                    "           \"answer_0\" : \"Telewizor\","+
                    "           \"answer_1\" : \"Tablet\","+
                    "           \"answer_2\" : \"Monitor\","+
                    "           \"answer_3\" : \"Duży smartfon\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 17,"+
                    "           \"question\" : \"Wytwór uboczy ogrzewania to:\","+
                    "           \"answer_0\" : \"Pierd\","+
                    "           \"answer_1\" : \"Beknięcie\","+
                    "           \"answer_2\" : \"Gorąc\","+
                    "           \"answer_3\" : \"Uf uf uf\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 18,"+
                    "           \"question\" : \"Ile lat ma Niemek Niewiadomek?\","+
                    "           \"answer_0\" : \"5\","+
                    "           \"answer_1\" : \"4\","+
                    "           \"answer_2\" : \"3\","+
                    "           \"answer_3\" : \"12\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 19,"+
                    "           \"question\" : \"Liśnik to:\","+
                    "           \"answer_0\" : \"Język\","+
                    "           \"answer_1\" : \"Licznik prądu\","+
                    "           \"answer_2\" : \"Licznik wody\","+
                    "           \"answer_3\" : \"Nos\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       },"+
                    "       {"+
                    "           \"id\" : 20,"+
                    "           \"question\" : \"Jak przękręciłaś nazwę miejscowości Rozogi:\","+
                    "           \"answer_0\" : \"Uwaga nogi\","+
                    "           \"answer_1\" : \"Rozłóż nogi\","+
                    "           \"answer_2\" : \"Różowe nogi\","+
                    "           \"answer_3\" : \"Rozłogi\","+
                    "           \"author\" : \"Paweł Wielga\""+
                    "       }"+
                    "   ]"+
                    "}";
