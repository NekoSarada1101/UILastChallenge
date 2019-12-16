function calc() {
    var money = document.getElementById("money").value;
    var date = document.getElementById("date").value.split("-");

    var today = new Date();
    date = new Date(date[0], date[1] - 1, date[2]);

    // 残りの日数
    var remaining_days = date.getTime() - today.getTime();
    remaining_days = Math.floor(remaining_days / 1000 / 60 / 60 / 24);

    // 1日あたりの金額
    var price_each_one_day = Math.floor(money / remaining_days);

    var text = "（残り" + remaining_days + "日）　1日あたり約" + price_each_one_day + "円で達成できます。";
    document.getElementById("remaining").textContent = text;
}

function random() {
    var idea_list = [];
    for (var i = 0; i < 5; i++) {
        var idea = document.getElementById("idea" + i).value;
        // 入力されているところだけ
        if (idea !== "") {
            idea_list.push(idea);
        }
    }

    var determination = Math.floor(Math.random() * idea_list.length);

    var text = "それでは【" + idea_list[determination] + "】にしましょう。";
    document.getElementById("determination").textContent = text;

}
