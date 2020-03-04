$('#create').on('click', (req, res) => {

    let userKey = $('#userKey').val();

    //create wallet
    $.ajax({
        url: 'https://api.luniverse.io/tx/v1.1/wallets',
        type: "POST",
        crossDomain: true,
        dataType: 'json',
        headers: {
            'api-key': 'nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2'
        },
        data: {
            'walletType': "LUNIVERSE",
            'userKey': userKey
        },
        success: (result) => {
            $('#address').append(
                result.data.address
            );
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    });

    //set userKey at db
    $.ajax({
        url: "/setUserKey",
        type: "POST",
        data: {
            "userKey" : userKey
        },
        success: (result) => {
            alert('비밀번호 생성 성공')
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
}) 

//logout
$('#logout').on('click', (req, res) => {
    $.ajax({
        url: "/logout",
        type: "GET",
        success: (result) => {
            if (result.msg == "logoutSuccess") {
                console.log('logout ajax success')
                window.location.href = '/'
            } else {
                alert('logout fail')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})