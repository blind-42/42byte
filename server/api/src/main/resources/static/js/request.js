function js_request(form){

    let url = form['url'].value;
    let params = form['params'].value;
    let method = form['method'].value;

    $.ajax({
        url: `${url}${params}`,
        type: `${method}`,
        contentType: 'application/json',
        headers: {
            "Authorization": "Bearer " + "access"
        },
        async:false,
        error : function() {
            alert("Error!");
        },
        success : function() {
            alert("success!");
        },
        complete : function() {
            history.replaceState({}, null, location.pathname);
        }
    })
}

function js_request_input(form){
    let url = form['url'].value;
    let input_name = form['input'].name;
    let input_message = form['input'].value;
    let params = form['params'].value;
    let method = form['method'].value;

    /* 입력창 */
    let inputString = prompt(input_message, null);
    if (inputString == null)
        return;
    params = params + "&" + input_name + "=" + inputString;
    $.ajax({
        url: `${url}${params}`,
        type: `${method}`,
        contentType: 'application/json',
        headers: {
            "Authorization": "Bearer " + "access"
        },
        async:false,
        error : function() {
            alert("Error!");
        },
        success : function() {
            alert("success!");
        },
        complete : function() {
            history.replaceState({}, null, location.pathname);
        }
    })
}
