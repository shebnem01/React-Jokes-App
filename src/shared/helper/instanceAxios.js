import axios from "axios";
import { baseURL } from "shared/constant/baseUrl";
export const instanceAxios=axios.create({
    baseURL,
    timeout:1000,
    headers:{
        "Accept":"application/json"
    }
})