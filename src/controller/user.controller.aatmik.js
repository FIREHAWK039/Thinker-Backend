import { asyncHandler } from "../utils/AsyncHandler.js"
import { Apiresponse } from "../utils/ApiResponse.js"
import { startChat,clearChat } from "../ai/openrouter.ai.js"


const aiResponse = asyncHandler( async (req,res)=>{

    
 const {message} = req.body;
 
    console.log("messgae recived ",message);
    
    
    const reply = await startChat(message);

    console.log("reply from ai ",reply);
    
    
    return res
    .status(200)
    .json(
        new Apiresponse(200,
            {
                message:reply
            },
            "user message recived"

        )
    )

    
})


const clearchat = asyncHandler( async (req,res)=>{
clearChat();
return res
    .status(200)
    .json(
        new Apiresponse(200,
            {
                message:"chat cleared"
            },
            "user message recived"

        )
    )



})



export{
    aiResponse,
    clearchat
}

