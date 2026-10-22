import dotenv from "dotenv"
dotenv.config({
    'path': './.env'
})
import {app} from "./app.js"


    app.on("error",(error)=>{
        console.log("can talk error",error)
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`serving on the port ${process.env.PORT || 8000}`)
    })
