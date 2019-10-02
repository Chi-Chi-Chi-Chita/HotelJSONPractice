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