console.log(document.head)
console.log(document.url)
console.log(document.links)
console.log(document.form)
// console.log(document.form[0])
console.log(document.images)
console.log(document.all)
var headerTitle =  (document.getElementById("header-title"))
console.log(headerTitle)
var header =  (document.getElementById("main-header"))
document.title = "Change Item"

header.style.border = "solid 2px black";

var addItem = document.getElementsByClassName("title-one");
console.log(addItem)
addItem[0].style.color = "green"
// addItem.style.color="green"
addItem[0].style.weight="bold"

