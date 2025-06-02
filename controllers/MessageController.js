


// import jwt from 'jsonwebtoken';
// import Msg from '../models/Message.js';
// import Seeker from '../models/Seeker.js'; 
// import Razorpay from 'razorpay'

// // import dotenv from 'dotenv';
// // dotenv.config();

// const KEY_ID = "rzp_test_zM1RfP1SDCMo0M";
// const KEY_SECRET = "Wk6rXi8pe8SisWYppsmECpgk";

// const rzpy = new Razorpay({
//   key_id : KEY_ID,
//   key_secret : KEY_SECRET
// });
// try{
// const orders = await rzpy.orders.create({
//      amount : 50 * 100,
//      currency : 'INR'
//   });
//   // console.log(req.body);
  
//   // res.send({success:true, orderId : order.id });
// }catch(err){
//   console.log("*********",err);
// }


// let saveMessage = async (req, res) => {
//   // console.log(req.body);return
//     try {
//         const token = req.body.seeker_token;
//         const obj = jwt.decode(token, process.env.ENC_KEY);
//         const amount = req.body.amount;

//         const order = await orders.create({
//           amount: amount*100,
//           currency: 'INR'
//         })

//         const saveDataObj = {
//             message: req.body.message,
//             seeker_id: obj.id,
//             owner_id: req.body.owner_id,
//             property_id: req.body.property_id
//         };

//        // await Msg.create(saveDataObj);

//        // res.send({ success: true });
       
//     } catch (err) {
//         console.error('Error saving message:', err);
//         res.status(500).send({ success: false, error: 'Failed to save message' });
//     }
// };




// export const getAllMsgByPropertyId = async (req, res) => {
//   try {
//     const propertyId = req.params.id;

//     const messages = await Msg.find({ propertyId })
//       .populate('seeker_id', 'name email contact') 
//     res.status(200).json(messages);
//   } catch (err) { 
//     console.error('Error fetching messages:', err);
//     res.status(500).json({ error: 'Failed to fetch messages' });
//   }
// };


// export { saveMessage};



import Msg from "../models/Message.js";
import jwt from 'jsonwebtoken'
import Razorpay from 'razorpay'

const KEY_ID = "rzp_test_zM1RfP1SDCMo0M";
const KEY_SECRET = "Wk6rXi8pe8SisWYppsmECpgk";

const rzpy = new Razorpay({
    key_id : KEY_ID,
    key_secret : KEY_SECRET
});

let rzpyOrder = async(req, res)=>{
    let amount = req.body.amount;
    try{
        const order = await rzpy.orders.create({
            amount : amount*100,
            currency : 'INR'
        });
        
        res.send({success:true, orderId : order.id});
    }catch(err){
        console.log("***************", err);
    }
}


let saveMessage = async(req, res)=>{
    let token = req.body.seeker_token;
    let obj = jwt.decode(token, process.env.ENC_KEY);
    let amount = req.body.amount;
    let saveDataObj = {
        message : req.body.message,
        seeker_id : obj.id,
        owner_id : req.body.owner_id,
        property_id : req.body.property_id
    };
    
    // return;
    // await Msg.create(saveDataObj);

}

let getAllMsgByPropertyId = async(req, res)=>{
    let result = await Msg.find({property_id : req.params.pid}).populate("seeker_id").exec();
    res.send(result);
}

export {saveMessage, getAllMsgByPropertyId, rzpyOrder};