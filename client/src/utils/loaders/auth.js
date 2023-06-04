import { redirect } from "react-router-dom";

/*============================
😎 @author: Henil Mehta
🚩 @uses: get auth token from local storage 
🗓 @created: 03/06/2023
============================*/
export function getAuthToken() {
    const token = localStorage.getItem("access_token");
    return token;
}

/*============================
😎 @author: Henil Mehta
🚩 @uses: check that user is logged in or not 
🗓 @created: 03/06/2023
============================*/
export function checkAuth() {
    const token = getAuthToken();

    // 
    // checked wheather token not exists than redirect to auth page
    // 
    if (!token) {
        return redirect("/auth/signin");
    }
    return null;
}

/*============================  
😎 @author: Henil Mehta
🚩 @uses: checks weather the user is logged in  
🗓 @created: 03/06/2023
============================*/
export function checkLogin(){

    const token = getAuthToken();

    // 
    // if user is logged in then redirect to home page
    // 
    if(token){
        return redirect("/");
    }

    return null;

}