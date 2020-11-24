/// <reference path="./lib/sweetalert2.all.min.js" />

var coupon_list = [{
    "id": "ck210",
    "title": "210角落廢物",
    "desc": "爆米花&氣泡飲",
    "image": "ck210.png"
}, {
    "id": "ckmc",
    "title": "建中軍武社",
    "desc": "實彈射擊體驗",
    "image": "ckmc.png"
}, {
    "id": "test",
    "title": "徵的就是你",
    "desc": "加入十班聯盟湊齊十個攤位吧",
    "image": "test/1.png"
}];

$(function () {
    coupon_list.forEach(function (now, id) {
        $("main").append(`
        <div class="link" id="link-${now.id}">
            <img src="img/${now.image}" alt="${now.title}">
            <div>${now.title}<p>${now.desc}</p></div>
        </div>`);
    });
});



$("body")
.on("click", "#link-ck210", function () {$("#modal-ck210").show();})
.on("click", "#close-ck210", function () {$("#modal-ck210").hide();});