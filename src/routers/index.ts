import express, { Router } from 'express'
import authRouter from './authenticationRout'
import userRouter from './userRouter'

const router = Router()

export default (): Router => {
    authRouter(router)
    userRouter(router)
    return router
}