const $buttonAdd = document.querySelector(".js-add");
const $listTask = document.querySelector(".js-item"); // Este es el item que lleva la tarea
const $input = document.querySelector(".js-input");
const $list = document.querySelector(".js-list");
const $clear = document.querySelector(".js-clear");
const $x = document.querySelector(".js-x");
const $contentListItem = document.querySelector(".js-contentList");
let array = []

$buttonAdd.addEventListener("click", function() {
    if(!($input.value === "")) {
        $listTask.innerHTML = $input.value;
        $input.value = "";
        var display = document.querySelector(".js-list").style.display= "flex";
    }
})

$clear.addEventListener("click", function() {
    var display = document.querySelector(".js-list").style.display= "none";
})

$x.addEventListener("click", function() {
    $contentListItem.style.display= "none";
})

