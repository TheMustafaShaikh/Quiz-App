function result() {
    var answerArray = ["South Africa", "Cricket", "Washington", "21", "600 g"];
    var answersByUser = [];
    var score = 0;
    for (var i = 0; i < answerArray.length; i++) {
        document.getElementsByName("question" + (i + 1).toString()).forEach((Ele) => {
            if (Ele.checked) {
                answersByUser.push(Ele.value);
            }
        })
    }
    for (var i = 0; i < answerArray.length; i++) {
        if (answersByUser[i] === answerArray[i]) {
            score++;
        }
    }

    document.querySelector(".results").style.display = "flex";
    document.querySelector(".results").innerHTML = "<h3>Correct Anwer: " + score.toString() + "</h3>";
}