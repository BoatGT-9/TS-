
import { login,logout,register } from "../controller/authentication";
import  Express, { Router }  from "express";

export default (router:Router)=>{
    router.post("/auth/register",register)
    router.post("/auth/login",login)
    router.get("/auth/logout",logout)

}