// console.log(document.head)
// console.log(document.url)
// console.log(document.links)
// console.log(document.form)
// // console.log(document.form[0])
// console.log(document.images)
// console.log(document.all)
// var headerTitle =  (document.getElementById("header-title"))
// console.log(headerTitle)
// var header =  (document.getElementById("main-header"))
// document.title = "Change Item"

// header.style.border = "solid 2px black";

// var addItem = document.getElementsByClassName("title-one");
// console.log(addItem)
// addItem[0].style.color = "green"
// // addItem.style.color="green"
// addItem[0].style.weight="bold"

// var listGroup = document.getElementsByClassName("list-group-item")

// listGroup[2].style.backgroundColor="green"
// for(let i=0;i<listGroup.length;i++){
//     listGroup[i].style.fontWeight = "bold"
// }


// var newElement = document.getElementsByClassName("list-group-items")
// newElement[0].style.backgroundColor="green";

// var li = document.getElementsByTagName("li")
// console.log(li)
// li[4].style.fontWeight="bold"

// var secondEle = document.querySelector(".list-group-item:nth-child(2)");
// secondEle.style.backgroundColor="green"

// var thirdEle = document.querySelector(".list-group-item:nth-child(3)");
// thirdEle.style.display="none"

// var secondElement = document.querySelectorAll(".list-group-item")
// secondElement[1].style.color="green"

// var odd = document.querySelectorAll("li:nth-child(odd)");

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "green"
// }

//Traversing the dom


//ParentNode
// var itemList = document.querySelector("#items")
//     console.log(itemList.parentNode)
//     itemList.parentNode.style.backgroundColor = "grey"


//ParentElement

var itemList = document.querySelector("#items")
    // console.log(itemList.parentElement)
    // itemList.parentElement.style.backgroundColor = "grey"

    // console.log(itemList.childNodes)

    // console.log(itemList.children)

    // console.log(itemList.children[1])

    // itemList.children[1].style.color = "yellow"

    // console.log(itemList.firstChild)

    // console.log(itemList.firstElementChild)

    // itemList.firstElementChild.textContent="Ayush"


   //LastChild 
    // console.log(itemList.lastChild)

    // console.log(itemList.lastElementChild)

    // itemList.lastElementChild.textContent="Ayush"

    // console.log(itemList.nextSibling)

    // console.log(itemList.nextElementSibling)

    // console.log(itemList.previousSibling)

    // console.log(itemList.previousElementSibling)

    // itemList.previousElementSibling.style.color="red"

    //createElement

    // var newDiv = document.createElement('div')

    // newDiv.className='hello'
    // newDiv.id="hello1"
    // newDiv.setAttribute('title' , 'Hello Div')
    

    // let newDivText = document.createTextNode("Hellow World")

    // newDiv.appendChild(newDivText)

    // console.log(newDiv)

     var container = document.querySelector(".container");
     var ele = document.createElement("h1")
     ele.appendChild(document.createTextNode("Hello World"))
    //  container.firstChild = ele
    container.insertBefore(ele , document.querySelector('#header-title'))
    //  container.appendChild(ele)

    itemList.insertBefore(ele , itemList.firstElementChild)