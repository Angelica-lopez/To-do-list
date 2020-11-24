const $buttonAdd = document.querySelector(".js-add");
const $listTask = document.querySelector(".js-item");
const $input = document.querySelector(".js-input");
const $list = document.querySelector(".js-list");
const $clear = document.querySelector(".js-clear");

$buttonAdd.addEventListener("click", function() {
    $listTask.innerHTML = $input.value;
    $input.value = "";
    var display = document.querySelector(".js-list").style.display= "flex";
})

$clear.addEventListener("click", function() {
    var display = document.querySelector(".js-list").style.display= "none";
})


