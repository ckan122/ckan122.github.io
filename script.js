var stand_list = [{
    "title": "210角落廢物",
    "desc": "爆米花&氣泡飲",
    "image": "ck210.png",
    "html": `
    酥脆爆米花搭配順口氣泡飲～
    掰不下去了～
    `
}, {
    "title": "建中軍武社",
    "desc": "實彈射擊體驗",
    "image": "ckmc.png",
    "html": ``
}, {
    "title": "徵的就是你",
    "desc": "加入十班聯盟湊齊十個攤位吧",
    "image": "test/1.png",
    "html": `詳情請洽<strong>210黃庭耀</strong>或<strong>210毛柏毅</strong>`
}];

$(function () {
    stand_list.forEach(function (now, id) {
        $("main").append(`
        <div class="link" id="link-${id}">
            <img src="img/${now.image}" alt="${now.title}">
            <div><b>${now.title}</b><p>${now.desc}</p></div>
        </div>`);
        $("body").on("click", `#link-${id}`, function() {
            Swal.fire({
                grow: "fullscreen",
                imageUrl: `img/${now.image}`,
                imageAlt: now.title,
                title: `<strong>${now.title}</strong>`,
                html: now.html,
                showCloseButton: true,
                showConfirmButton: false
            });
        });
    });
});