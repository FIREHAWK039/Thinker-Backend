import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });
const { app } = await import("./app.js");


console.log("index",process.env.CORS_ORIGIN)



    app.on("error",(error)=>{
        console.log("can talk error",error)
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`serving on the port ${process.env.PORT || 8000}`)
    })
