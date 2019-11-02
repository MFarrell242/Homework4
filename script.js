var oops = document.querySelector("#oops");
var begin = document.querySelector("#start");
var question = document.querySelector(".question");
var answers = document.querySelectorAll(".btn-alert");
var prevanswercorrect = document.querySelector(".pvanswer");
var currQ = 0;
var questions = [
    {
        q = "What is your name?",
        choice = ["Arthur, King of the Britons", "Sir Lancelot", "Sir Galahad", "Sir Robin"],
        a = 1
    }
    {
        q = "What is your quest?",
        choice = ["To seek the holy grail", "I seek the holy grail", "uh", "what?"],
        a = 1
    }
]

$(begin).on("click", function() {
    $(begin).hide();
    $(oops).show();
    // nextQ();
});

function nextQ() {
    $(question).text(questions[currQ,1]);
    $(answers).for()
}