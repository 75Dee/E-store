// JavaScript source code
var productObj = [
    {
        "Smart Wall Pad": [{ id: 'smPad1', img: 'assets/images/product/smpad/img1.png', price: 159.00, discription: 'SHT-3625 Basic 4" wall pad suitable for small-to-medium-scale new' },
        { id: 'smPad2', img: 'assets/images/product/smpad/img2.png', price: 199, discription: 'SHT-7017 Full touch-type wall pad suitable for new large-scal' },
        { id: 'smPad3', img: 'assets/images/product/smpad/img3.png', price: 239, discription: 'SHT-3006 Basic 6" wall pad suitable for villas and general houses' },
        { id: 'smPad4', img: 'assets/images/product/smpad/img4.png', price: 300, discription: 'SHT-3605 Basic 4.3" wall pad suitable for small-to-medium-sc' },
        { id: 'smPad5', img: 'assets/images/product/smpad/img5.png', price: 300, discription: 'SHT-3602 Basic 4" wall pad suitable for small-to-medium-scale new' },
        { id: 'smPad6', img: 'assets/images/product/smpad/img2.png', price: 199, discription: 'SHT-7017 Full touch-type wall pad suitable for new large-scal' },
        { id: 'smPad7', img: 'assets/images/product/smpad/img3.png', price: 239, discription: 'SHT-3006 Basic 6" wall pad suitable for villas and general houses' },
        { id: 'smPad8', img: 'assets/images/product/smpad/img4.png', price: 300, discription: 'SHT-3605 Basic 4.3" wall pad suitable for small-to-medium-sc' },
        { id: 'smPad9', img: 'assets/images/product/smpad/img5.png', price: 300, discription: 'SHT-3602 Basic 4" wall pad suitable for small-to-medium-scale new' }],
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

var queryString = window.location.search;
function urlParem(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}
var urlParams = urlParem('type');
var appendData = document.getElementById('productData')
var appendTitle = document.getElementById('productTitle')


productObj.forEach(function (value, index) {
    var keyArray = Object.keys(value)
    if (urlParams == keyArray[0]) {
        var headinghtmlData = "<div class='d-flex align-items-center productTitle'><h2 class='mr-auto ml-2'>" + urlParams + "</h2></div>" 
            appendTitle.innerHTML = headinghtmlData
            value[keyArray[0]].forEach(function (value, index) {
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
            appendData.innerHTML += cardhtmlData
        })
    }
})

var minInput = document.getElementById('minData')
var maxInput = document.getElementById('maxData')
console.log(minInput, maxInput)
function minValue() {
    var value = minInput.value;
    return value
}
function maxValue() {
    var value = maxInput.value;
    return value
}

function gotoPage(data) {
    window.location.href = "list.html?type=" + data + "";
}



function filterData(min, max) {
    console.log(min,max,'++++')
    var minValue = min?min:0;
    var maxValue = max?max:10000000000;
    appendData.innerHTML = "";
    productObj.forEach(function (value, index) {
        var keyArray = Object.keys(value)
        if (urlParams == keyArray[0]) {
            value[keyArray[0]].forEach(function (value, index) {
                if (value.price >= minValue && value.price <= maxValue) {
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
                        appendData.innerHTML += cardhtmlData
                    }
            })
        }
    })
}