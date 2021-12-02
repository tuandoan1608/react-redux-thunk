import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const login =  (userid,password)=>{

    return axios.post(API_URL +"login",{
        userid,
        password
    }).then((response)=>{
        if(response.data){
            
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem("user");
};
const exportedObject = {
    login, logout
};

export default exportedObject