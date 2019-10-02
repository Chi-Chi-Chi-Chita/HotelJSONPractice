var allData;
localStorage.removeItem('roomId');


//抓 API
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', true);
xhr.setRequestHeader("Authorization", "Bearer fYhTaBdTXomfYbFiZmgsloYv3NQzfdgtSiQv5729JVfBSuGKh4NBZb5hfKEp");
xhr.send(null);

//確認 API 資料的執行
xhr.onload = function () {
    if (xhr.status !== 200) { return; }
    allData = JSON.parse(xhr.responseText);

    showContent();
}


function showContent() {
    // 更改 Menu
    var menu = document.querySelector('.menu');
    var roomStr = '';

    for (var i = 0; i < allData.items.length; i++) {
        roomStr +=
            `<li class="menu_p">${allData.items[i].name}</li>`
    };

    roomStr += `<div class="grad"></div>`
    menu.innerHTML = roomStr;
    // 對每個 Menu 做監聽
    var menulist = document.querySelectorAll('.menu_p')
    for (var i = 0; i < menulist.length; i++) {
        menulist[i].addEventListener('mouseover', changeContent.bind(this, i));
        menulist[i].addEventListener('click', changePage.bind(this, i));
    }
    // 一開始預先載入 
    changeContent(0);
}

// Menu 滑過去內容變更
function changeContent(i) {
    console.log(i.target);
    var roomname = document.querySelector('.roomname');
    var num = document.querySelector('.num');
    var coverpic = document.querySelector('.coverpic');
    var roomnameStr = '';
    var numstr = '';

    roomnameStr = allData.items[i].name;
    numStr = "0" + (i + 1);
    coverpic.style.backgroundImage = `url(${allData.items[i].imageUrl})`;

    roomname.innerHTML = roomnameStr;
    num.innerHTML = numStr;
}

function changePage(i) {
    localStorage.setItem('roomId', JSON.stringify(allData.items[i].id));
    window.location = 'room.html';  /*原視窗打開*/
    // window.open('room.html'); /*另開一頁*/
}



// document.querySelector('.title').innerHTML = titleStr;


// var abc = new XMLHttpRequest();
// abc.open('get', 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu', true);
// abc.setRequestHeader("Authorization", "Bearer fYhTaBdTXomfYbFiZmgsloYv3NQzfdgtSiQv5729JVfBSuGKh4NBZb5hfKEp");
// abc.send(null);

// abc.onload = function () {
//     var str = console.log(JSON.parse(abc.responseText));
// }