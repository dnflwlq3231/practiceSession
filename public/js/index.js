$('#submit').on('click', () => {
    let userId = $('#id').val();
    let userPassword = $('#password').val();

    $.ajax({
        url: "/login",
        data: {id: userId, password: userPassword},
        type: "POST",
        success: function (result) {
            if (result.msg == "success") {
                window.location.href = '/wallet'
            } else {
                alert('login fail')
            }
        },
        error: (request, status, error) => {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
        }
    })
})