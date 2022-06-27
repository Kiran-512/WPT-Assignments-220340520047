$(()=>{
    console.log("is it working...")
    $("#btn").click(()=>{

        let input = { username:$("#username").value() ,password :$("#password").value() }

        let paramsOfAjaxFunc = {
            data :input,
            type :'GET',
            dataType : "JSON",  
            url : "http://localhost:1000/login",
            success :(dataFromServer)=>{
                console.log(dataFromServer)
            }, 
            error :(Error)=>{
                console.log("failed to contact server")
            } 
        }

        $.ajax(paramsOfAjaxFunc);

    })

})