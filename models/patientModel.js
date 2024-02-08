const mongoos=require("mongoose")
const patientschema=mongoos.Schema(
    {
        name:String,
        phone:String,
        address:String,
        symptom:String,
        status:String
    }
)

module.exports=mongoos.model("patients",patientschema)