const $buttonAdd = document.querySelector(".js-add");
const $listTask = document.querySelector(".js-item"); // Este es el item que lleva la tarea
const $input = document.querySelector(".js-input");
const $list = document.querySelector(".js-list");
const $clear = document.querySelector(".js-clear");
const $x = document.querySelector(".js-x");
const $contentListItem = document.querySelector(".js-contentList");


$buttonAdd.addEventListener("click", function() {
    let inputTxt = $input.value;
    if(inputTxt === "") {
        alert("Please, write a task...")
    }else {
        let item = $contentListItem.cloneNode(true);
        var display = document.querySelector(".js-contentList").style.display= "block";
        $listTask.innerHTML = $input.value;
        $list.insertBefore(item, $list.childNodes[0]);
        var display = document.querySelector(".js-list").style.display= "flex";
        $input.value = "";
    }

})

$clear.addEventListener("click", function() {
    var display = document.querySelector(".js-list").style.display= "none";
})

$x.addEventListener("click", function() {
    $contentListItem.parentElement.remove;
})
