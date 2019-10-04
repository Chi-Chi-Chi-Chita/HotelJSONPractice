var roomAllData;

var roomData = JSON.parse(localStorage.getItem('roomId')) || '';

console.log(roomData);

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + roomData, true);
xhr.setRequestHeader("Authorization", "Bearer fYhTaBdTXomfYbFiZmgsloYv3NQzfdgtSiQv5729JVfBSuGKh4NBZb5hfKEp");
xhr.send(null);

xhr.onload = function () {
    if (xhr.status !== 200) { return; }
    roomAllData = JSON.parse(xhr.responseText);

    // 內容改變
    reContent()
}

// 改內容
function reContent() {
    var imgOne = document.querySelector('.toppic_left');
    var imgTwo = document.querySelector('.toppic_rightop');
    var imgThree = document.querySelector('.toppic_rightdown');
    var roomTitle = document.querySelector('.room_title');
    var roomNote = document.querySelector('.room_note');
    var guestmin = document.querySelector('.guestmin');
    var guestmax = document.querySelector('.guestmax');
    var privateBath = document.querySelector('.privateBath');
    var footAge = document.querySelector('.roomspace');
    var checkInTime = document.querySelector('.checkintime');
    var checkOutTime = document.querySelector('.checkouttime');
    var equipment = document.querySelector('.tool');
    var nPrice = document.querySelector('.normal_price');
    var hPrice = document.querySelector('.holidayprice');

    imgOne.style.backgroundImage = `url(${roomAllData.room[0].imageUrl[2]})`;
    imgTwo.style.backgroundImage = `url(${roomAllData.room[0].imageUrl[1]})`;
    imgThree.style.backgroundImage = `url(${roomAllData.room[0].imageUrl[0]})`;
    roomTitle.innerHTML = roomAllData.room[0].name;
    roomNote.innerHTML = roomAllData.room[0].description;
    guestmin.innerHTML = roomAllData.room[0].descriptionShort.GuestMin;
    guestmax.innerHTML = roomAllData.room[0].descriptionShort.GuestMax;
    privateBath.innerHTML = roomAllData.room[0].descriptionShort["Private-Bath"];
    footAge.innerHTML = roomAllData.room[0].descriptionShort.Footage;
    checkInTime.innerHTML = roomAllData.room[0].checkInAndOut.checkInEarly + ' - ' + roomAllData.room[0].checkInAndOut.checkInLate;
    checkOutTime.innerHTML = roomAllData.room[0].checkInAndOut.checkOut;
    console.log(roomAllData.room[0].checkInAndOut.checkOut);
    nPrice.innerHTML = "NT." + roomAllData.room[0].normalDayPrice;
    hPrice.innerHTML = "NT." + roomAllData.room[0].holidayPrice;


    console.log(roomAllData.room[0].amenities["Television"]);
    console.log(equipment.childNodes);
    if (roomAllData.room[0].amenities["Wi-Fi"] == false) {
        equipment.childNodes[1].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Television"] == false) {
        equipment.childNodes[3].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Great-View"] == false) {
        equipment.childNodes[5].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities.Breakfast == false) {
        equipment.childNodes[7].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Air-Conditioner"] == false) {
        equipment.childNodes[9].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Smoke-Free"] == false) {
        equipment.childNodes[11].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Mini-Bar"] == false) {
        equipment.childNodes[13].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Refrigerator"] == false) {
        equipment.childNodes[15].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Child-Friendly"] == false) {
        equipment.childNodes[17].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Room-Service"] == false) {
        equipment.childNodes[19].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Sofa"] == false) {
        equipment.childNodes[21].style.opacity = "0.3";
    }
    if (roomAllData.room[0].amenities["Pet-Friendly"] == false) {
        equipment.childNodes[23].style.opacity = "0.3";
    }

}


/* <li class="${dataRoom.amenities.Great_View}">
    <img src="img/icon/mountain-range.svg" alt="">
    <p>漂亮的視野</p>
</li> */

/*日曆*/
let date = new Date();
console.log(date)
let myYear = date.getFullYear(); // 取得今天的年
console.log(typeof (myYear));
let myMonth = date.getMonth(); // 取得今天的月,月從0開始算
console.log(myMonth);
let myDate = date.getDate(); //取得今天幾號
console.log(myDate);

/*取得本月有幾天 */
function dayAmount(year, month) {
    let dayAmountStr = (new Date(year, (month + 1), 0)).getDate(); //帶0會取得上個月最後1天
    console.log("dayAmountStr:", dayAmountStr);
    return dayAmountStr;
}

/*某月第一天是星期幾*/
function firstDayOfMonth(year, month) {
    let tmpDate = new Date(year, month, 1);
    let tmpDateDay = tmpDate.getDay();
    console.log(tmpDateDay);
    return tmpDateDay;
}

function calendar(locYear, locMonth, locDate) {
    let str = '';

    /*呼叫本月有幾天的function*/
    let dayTotal = dayAmount(locYear, locMonth);
    console.log(dayTotal);
    /*呼叫第一天是星期幾的function*/
    let firstDay = firstDayOfMonth(locYear, locMonth);
    console.log("firstDay:", firstDay);
    /*起始日之前創空白*/
    for (let i = 0; i < firstDay; i++) {
        str += `<span></span>`;
    }

    for (let i = 1; i <= dayTotal; i++) {
        let className = '';
        //之前的日期，淺灰
        if ((i < locDate && locYear == date.getFullYear() && locMonth == date.getMonth()) || (locMonth < date.getMonth() && locYear <= date.getFullYear()) || (locYear < date.getFullYear())) {
            className += 'past'; // 判斷過去日期
        }
        else if (i == date.getDate() && locMonth == date.getMonth() && locYear == date.getFullYear()) {
            className += 'today'; // 判斷今天日期
        }
        str += `<span class="${className}">${i}</span>`
    }

    document.querySelector('.date').innerHTML = str;
    document.querySelector('.year').innerHTML = locYear;
    document.querySelector('.month').innerHTML = locMonth + 1;
}
calendar(myYear, myMonth, myDate);

//上個月、下個月做監聽
document.querySelector('.last').addEventListener('click', lastCalendar);
document.querySelector('.next').addEventListener('click', pastCalendar)

//上個月function 
function lastCalendar() {
    myMonth -= 1
    if (myMonth < 0) {
        myYear -= 1;
        myMonth = 11;
    }
    calendar(myYear, myMonth, myDate)
};
//下個月function 
function pastCalendar() {
    myMonth += 1
    if (myMonth > 11) {
        myYear += 1;
        myMonth = 0;
    }
    calendar(myYear, myMonth, myDate)
}

/*燈箱*/
