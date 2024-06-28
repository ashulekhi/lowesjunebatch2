import axios from "axios";


axios.interceptors.request.use(function(request){
    console.log("Api api is triggeren at " , new Date())

    try {

    if(request.url.includes("cart")|| request.url.includes("order")){
        request.headers.Authorization = localStorage.token

        return request
    }
}
catch(e){
    console.log("Error " , e)

}


    return request
})