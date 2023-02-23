const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let http = new XMLHttpRequest();

    http.open('GET', urlApi, true);
    http.onreadystatechange = function(event){
        if(http.readyState === 4){
            // 0 not init
            // 1 Loading
            // 2 has been loaded
            // 3 processing if any
            if(http.status === 200){
                callback(null, JSON.parse(http.responseText));
            }else{
                const error = new Error('Error: ' + urlApi);
                return callback(error, null);
            }
        }
    }
    http.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if(error1){
        return console.error(error1);
    }
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2){
            return console.error(error2);
        }
        fetchData(`${API}/categories/${data2.category?.id}`, function(error3, data3){
            if(error3){
                return console.error(error3);
            }
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});