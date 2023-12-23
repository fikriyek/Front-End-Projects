let usernameInfo = 'fikriye'
let passwordInfo = "zx1cas2dqw3e:;"
// hesaptaki bakiye
let balance = 45000

let button = document.getElementById('logInSubmit')

button.onclick = function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(username == usernameInfo && password == passwordInfo){
        alert('Login successful, Welcome to F Bank!!!')
        window.open("http://127.0.0.1:5500/activity.html", "_blank");

    }
    else{
        alert('Geçersiz kullanıcı adı ya da şifre! Lütfen tekrar deneyiniz...')
    }
    
}

function displaySelection(){
    var optionToDo = document.getElementsByName('option');
    let optionValue;
    for (i = 0; i < optionToDo.length; i++) {
        if (optionToDo[i].checked)
            optionValue = optionToDo[i].value
    }

    optionValue = optionValue.toUpperCase()
    alert(optionValue)

    if(optionValue == 'WITHDRAW MONEY'){
        // cekilecek tutar
        let amountToWithdraw = Number(prompt('Çekilmek istenen tutar: '));
        if(amountToWithdraw <= balance){
            balance = balance - amountToWithdraw
            alert('Çekilen tutar: ' + amountToWithdraw +'\n' + 'Hesaptaki bakiye: ' + balance)
        }
        else{
            alert("Çekilecek tutar bakiye tutarından fazla! Yetersiz bakiye...")
        }
    }
    else if(optionValue == 'INVESTMENT'){
        // yatirilacak tutar
        let amountToInvest = Number(prompt('Yatırılmak istenen tutar: '));
        balance = balance + amountToInvest
        alert('Yatırılan tutar: ' + amountToInvest +'\n' + 'Hesaptaki bakiye: ' + balance)
    }
    else if(optionValue == 'GET CREDIT'){
        let amountCredit = Number(prompt('Çekilmek istenen kredi tutarı: '))
        let amountToPay = amountCredit + (amountCredit * (0.18))
        let amountToPayPerMonth = (amountToPay /12).toFixed(2)
        alert('Faizli ödenecek tutar: ' + amountToPay + '\n' + 'Aylık ödenecek tutar: ' + amountToPayPerMonth)
    }


}


