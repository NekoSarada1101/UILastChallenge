function calc() {
    var money = document.getElementById("money").value;
    var date = document.getElementById("date").value.split("-");
    var progress = document.querySelector(".progress");
    var progress_money = document.querySelector(".progress_money");

    progress.classList.remove("select2-display-none");
    progress.classList.add("progress_anime");


    if (money === "" || date[0] === "") {
        alert("目標金額と到達希望日を入力してください。");
        return;
    }

    var today = new Date();
    date = new Date(date[0], date[1] - 1, date[2]);

    // 残りの日数
    var remaining_days = date.getTime() - today.getTime();
    remaining_days = Math.floor(remaining_days / 1000 / 60 / 60 / 24) + 2;

    // 1日あたりの金額
    var price_each_one_day = Math.floor(money / remaining_days);

    var day_half = Math.ceil(remaining_days / 2);
    document.getElementById("day_first").textContent = "1日目";
    document.getElementById("day_half").textContent = day_half + "日目";
    document.getElementById("day_last").textContent = remaining_days + "日目";

    var money_first = price_each_one_day;
    var money_half = price_each_one_day * day_half;
    var money_last = money;

    document.getElementById("money_first").textContent = money_first + "円";
    document.getElementById("money_half").textContent = money_half + "円";
    document.getElementById("money_last").textContent = money_last + "円";

    var text = "（残り" + remaining_days + "日）1日あたり約" + price_each_one_day + "円で達成できます。";
    document.getElementById("remaining").textContent = text;
}

function random() {
    var null_count = 0;
    var idea_list = [];
    for (var i = 0; i < 5; i++) {
        var idea = document.getElementById("idea" + i).value;
        // 入力されているところだけ
        if (!(idea === "" || idea === " " || idea === "　")) {
            idea_list.push(idea);
        } else {
            null_count++;
        }
    }

    if (null_count === 5) {
        return;
    }

    var determination = Math.floor(Math.random() * idea_list.length);

    var text = "それでは【" + idea_list[determination] + "】にしましょう。";
    document.getElementById("determination").textContent = text;
}
