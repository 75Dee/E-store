// JavaScript source code
var productObj = [
    {
        "Smart Wall Pad": [{ id: 'smPad1', img: 'assets/images/product/smpad/img1.png', price: 159.00, discription: 'SHT-3625 Basic 4" wall pad suitable for small-to-medium-scale new' },
            { id: 'smPad2', img: 'assets/images/product/smpad/img2.png', price: 199, discription: 'SHT-7017 Full touch-type wall pad suitable for new large-scal' },
            { id: 'smPad3', img: 'assets/images/product/smpad/img3.png', price: 239, discription: 'SHT-3006 Basic 6" wall pad suitable for villas and general houses' },
            { id: 'smPad4', img: 'assets/images/product/smpad/img4.png', price: 300, discription: 'SHT-3605 Basic 4.3" wall pad suitable for small-to-medium-sc' },
            { id: 'smPad5', img: 'assets/images/product/smpad/img5.png', price: 300, discription: 'SHT-3602 Basic 4" wall pad suitable for small-to-medium-scale new' },],
    },
    {
        "Door Camera": [{ id: 'doCam1', img: 'assets/images/product/doCam/img1.png', price: 159.00, discription: 'SHT-3625 Basic 4" wall pad suitable for small-to-medium-scale new' },
            { id: 'doCam2', img: 'assets/images/product/doCam/img2.png', price: 536, discription: 'SHT-CN512 Lens angle adjustable door camera' },
            { id: 'doCam3', img: 'assets/images/product/doCam/img3.png', price: 536, discription: 'SHT-CN810 Door camera with sophisticated touch screen' },
            { id: 'doCam4', img: 'assets/images/product/doCam/img4.png', price: 536, discription: 'WW81J44E0BW Front Loading with Hygiene Steam 8.0kg' },
            { id: 'doCam5', img: 'assets/images/product/doCam/img5.png', price: 536, discription: 'SHT-CN640 Door camera which is up to four homes linked with one' },],
    },
    {
        "Push Pull": [{ id: 'puPull1', img: 'assets/images/product/puPul/img1.png', price: 159.00, discription: 'SHT-3625 Basic 4" wall pad suitable for small-to-medium-scale new' },
            { id: 'puPull2', img: 'assets/images/product/puPul/img2.png', price: 536, discription: 'SHT-CN512 Lens angle adjustable door camera' },
            { id: 'puPull3', img: 'assets/images/product/puPul/img3.png', price: 536, discription: 'SHT-CN810 Door camera with sophisticated touch screen' },
            { id: 'puPull4', img: 'assets/images/product/puPul/img4.png', price: 536, discription: 'WW81J44E0BW Front Loading with Hygiene Steam 8.0kg' },
            { id: 'puPull5', img: 'assets/images/product/puPul/img5.png', price: 536, discription: 'SHT-CN640 Door camera which is up to four homes linked with one' },]
    }
]

/*create local store*/

var appendData = document.getElementById('productData')
productObj.forEach(function(value, index) {
    var keyArray = Object.keys(value)
    var headinghtmlData = "<div class='d-flex align-items-center productTitle'><h2 class='mr-auto'>" + keyArray[0] + "</h2><a href='#' class='view-all d-flex align-items-center'>View all <img src='assets/images/icon/ic_arrow_right.svg' alt='right arrow' /></a></div>"+
                          "<div class='row' id='products"+index+"'></div>"
    appendData.innerHTML += headinghtmlData
    var appendProductData = document.getElementById('products'+index)
    value[keyArray[0]].forEach(function(value, index) {
        if (index < 5) {
            var cardhtmlData = "<div id='" + value.id + "' class='col col-12 productCard'>" +
                "<div class='card'>" +
                "<div class='thumbnail'><img class='card-img-top' src='" + value.img + "'/></div>" +
                "<div class='card-body'>" +
                "<p class='card-text discription'>" + value.discription + "</p>" +
                "<div class='row justify-content-between'>" +
                "<strong class='col'>$" + value.price + "</strong>" +
                "<button class='col btn btn-border btn-sm mr-3'>Add to cart</button>" +
                "</div >" +
                "</div >" +
                "</div >" +
                "</div >"
            appendProductData.innerHTML += cardhtmlData
        }
    })
})

function gotoPage(data) {
    window.location.href = "list.html?type="+data+"";
}