//TODOリスト//////////////////////////////////////////////////////
var addTask = document.querySelector(".add");
var list = document.querySelector(".list");

addTask.addEventListener("submit", function (e) {
    e.preventDefault();

    var task = addTask.add.value.trim(); //空白削除
    task.replace(/\r?\n/g, ""); //改行コード置き換え
    if (task.length !== 0) {
        createTodoList(task);
        addTask.reset();
    }
}, false);

var createTodoList = function (task) {
    var html = `
<li class=" list-group-item border border-success text-left p-2">
    <i class="far fa-trash-alt delete text-danger"></i>
    <span>${task}</span>
</li>`;
    list.innerHTML += html;
};

//TODO削除
list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove();
    }
}, false);