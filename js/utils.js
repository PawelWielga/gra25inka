"use strict";

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

function setButtonColor(button, color) {
    $(button).css("background-color",color);
    $(button).parent().children(".answer_left").css("border-right-color",color);
    $(button).parent().children(".answer_right").css("border-left-color",color);
}

function resetButtonColor(button) {
    $(button).css("background-color","");
    $(button).parent().children(".answer_left").css("border-right-color","");
    $(button).parent().children(".answer_right").css("border-left-color","");
}

window.orderAnswers = orderAnswers;
window.setButtonColor = setButtonColor;
window.resetButtonColor = resetButtonColor;
