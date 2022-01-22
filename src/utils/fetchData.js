let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData =(url_api)=>{
    return new Promise((resolve, reject)=>{
        const xhttp=new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange=(()=>{

            if(xhttp.readyState===4){
                (xhttp.status===200)
                    ? resolve(JSON.parse(xhttp.responseText))//Se ejecuta
                    : reject(new Error ('Error', url_api))//Rechaza
            }
        });
        xhttp.send();
    });
}
module.exports=fetchData;