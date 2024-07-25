const ExamResult = require('../Model/ExamResult');




const getData = async(req,res)=>{
    try{
        const posts = await ExamResult.find()
        res.status(200).json(posts)
    }
    catch(err){
        
        console.log(err)
        res.status(500).json({error:"There is a internal server error"})
    }
}

module.exports = {getData}