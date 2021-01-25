function showPass(id) {
    if ($('#' + id).attr('type') == 'text') {
        $('#' + id).attr('type', 'password')
        $('#showText').hide()
        $('#showPass').show()
    } else {
        $('#' + id).attr('type', 'text')
        $('#showText').show()
        $('#showPass').hide()
    }
}

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log(email, '++++')
    if (reg.test(email) == false) {
        return (false);
    }
}
function checkInput(id) {
    var elem = document.getElementById(id)
    if (elem.value != '') {
        elem.parentNode.classList.remove("error")
    }
}
function validateForm() {
    var fName = document.getElementById('firstName')
    var lName = document.getElementById('lastName')
    var eId = document.getElementById('emailId')
    var fno = document.getElementById('phoneNo')
    var pass = document.getElementById('password')
    var cPass = document.getElementById('confirmPassword')
    if (fName.value == '') {
        fName.focus()
        fName.parentNode.classList.add("error")
        return false;
    } else if (lName.value == '') {
        lName.focus()
        lName.parentNode.classList.add("error");
        return false;
    } else if (eId.value == '') {
        eId.focus()
        eId.parentNode.classList.add("error");
        return false;
    } else if (validateEmail(eId.value) == false) {
        eId.focus()
        eId.parentNode.classList.add("error");
        alert('inValid Email')
        return false;
    } else if (fno.value == '') {
        fno.focus()
        fno.parentNode.classList.add("error");
        return false;
    } else if (fno.value.length != 10 && typeof(fno.value) != 'number') {
        fno.focus()
        fno.parentNode.classList.add("error");
        alert('required 10 digit Contact Number')
        return false;
    } else if (pass.value == '') {
        pass.focus()
        pass.parentNode.classList.add("error");
        return false;
    } else if (cPass.value == '') {
        cPass.focus()
        cPass.parentNode.classList.add("error");
        return false;
    } else if (pass.value !== cPass.value) {
        cPass.parentNode.classList.add("error");
        alert('password and confirm password not matched')
        cPass.focus()
    } else {
        fName.value = ""; lName.value = ""; eId.value = ""; fno.value = ""; pass.value = ""; cPass.value = "";
        return true
    }
}