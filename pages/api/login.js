import { data } from "@/data/data"
import { withSession } from "@/sess"
const handler =  async function handler(req,res){
    const {userName,Password} = req.body

    const user = data.find((item)=>item.username == userName)

    if(user && user.password == Password){
        req.session.set("user",user)
        await req.session.save()
        res.status(200).json({message:"user authecation"})
    }else{
        res.status(403).json({message:"wrong"})
    }
        
}
export default withSession(handler)