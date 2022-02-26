function js_request(frm){
    var url = frm.url;
    var token = frm.token.val();
    var userId = frm.userId.val();

    $.ajax({
        url: "/admin/User?userId="+userId,
        type: 'POST',
        contentType: 'application/json',
        headers: {
            "Authorization": "Bearer " + token
        },
        async: false
    })
}