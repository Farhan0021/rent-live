import mongoose from '../config/conn.js'

let PropSchema = mongoose.Schema({
    owner_id : { ref : "owner", type : mongoose.Schema.Types.ObjectId},
    tittle : String,
    address : String,
    property_type : String,
    rent : Number,
    image : String,
    deposite : { type : Number, default : 0 },
    amenity : [],
    advance_money : Number
},{timestamps : true})

let Prop = mongoose.model("property", PropSchema)

export default Prop;