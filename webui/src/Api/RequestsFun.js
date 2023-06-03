import axios from "axios";

let allInfo = []
const Requests =async (url,method,ID,data) =>{
    
    // if(method == 'get'){
    //     if(ID){
    //         await axios.get(`${url}/${ID}`,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }else{
            await axios.get(url,{withCredentials:true})
            .then(res=>{
                allInfo = res.data
            })
            .catch(err=>{
                console.log(err);
            })
    //     }
    // }

    // if(method == 'post'){
    //     if(ID){
    //         axios.post(`${url}/${ID}`,data,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }else{
    //         axios.post(url,data,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }
    // }

    // if(method == 'put'){
    //     if(ID){
    //         await axios.put(`${url}/${ID}`,data,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }else{
    //         await axios.put(url,data,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }
    // }

    // if(method == 'delete'){
    //     if(ID){
    //         await axios.delete(`${url}/${ID}`,{withCredentials:true})
    //         .then(res=>{
    //             return res.data
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    //     }
    // }

    return allInfo
}


export default Requests