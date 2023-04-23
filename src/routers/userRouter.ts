import { deleteUser, getAllUser, getUserId } from "../controller/user";
import  express, { Router }  from "express";
import { isAuthentication, } from "../middlewares";
import { updateUser } from "../controller/user";
import { getUserById } from "../db/user";

export default (router:Router)=>{
    router.get("/users",isAuthentication,getAllUser)
    router.patch("/users/:id",isAuthentication,updateUser)
    router.delete("/users/:id",isAuthentication,deleteUser)
    router.get("/users/:id",isAuthentication,getUserId)

}

