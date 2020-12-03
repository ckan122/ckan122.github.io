var stand_list = [{
    "title": "210 角落廢物",
    "desc": "酥脆爆米花 & 清爽氣泡飲",
    "image": "ck210.png",
    "html": `
    <a href="doc/210.pdf"><img src="img/ck210_desc.png" style="max-height: 80vh; max-width: 80vw;"></a>
    `
}, {
    "title": "建中軍武社",
    "desc": "實彈射擊體驗",
    "image": "ckmc.png",
    "html": `
    有機會獲得精美好禮OWO
    `
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