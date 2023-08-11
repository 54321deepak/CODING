// 1 video 
//moogose help to establish connect between database(mongodb) and node js because if we write code of mongodb we have to write 100 lines+ 
// npm i mongoose
const mongoose = require("mongoose")
//22 next line only use in last not any other video 
 const validator = require("validator")

  
mongoose.connect("mongodb://127.0.0.1:27017/dd")
    .then(() => console.log("connection successfull..."))
    .catch((err) => console.log(err));

    // video 2
    //scheme =define structure of collection
    const play = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // means it is important to fill
    },
    class: Number,
    type: String,
    video: Number,
    active: Boolean,
    date: {
        type: Date,          
        default: Date.now      //means no need to fill , default value will show 
    }
})

//model is used to create collection
//Playlist is class that way its first letter big
//PLaylist is collection inside model
const Playlist = new mongoose.model("Playlist", play)

/*
//  video 3 & 4
//insert document  
const createdocument = async () => {
    try
    //  {const document= new Playlist({
    //      name:"deepak",
    //      class:111,
    //      type:"free",
    //      video:3,
    //      active:true
    //  })

    {
        const document5 = new Playlist({
            name: "deepak5",
            class: 1115,
            type: "free",
            video: 35,
            active: true
        })
        const document6 = new Playlist({
            name: "deepak6",
            class: 1116,
            type: "free",
            video: 36,
            active: true
        })
        const document7 = new Playlist({
            name: "deepak7",
            class: 1117,
            type: "free",
            video: 37,
            active: true
        })

        // const result = await document1.save();     // insert one document 
          const result = await Playlist.insertMany([document5,document6,document7]);  // insert many document
         console.log(result)    
    }
    catch (err) {
        console.log(err);
    }
}
createdocument();

*/
/* 
// video 5  read

const getd = async () =>{
  //  const result1 = await Playlist.find()  //show all
  // const result1 = await Playlist.find({name:"deepak5"}) //show name =deepak documents
const result1 = await Playlist.find({type:"free"}).select({name:1}).limit(1);
console.log(result1)
}

getd();
*/
/*
// video 15 query opertors = $eq $gt $gte $in=give all values match to this array ,$lt $lte ,$ne=give all values not equal to , $nin = give all values notmatch to this array
// 16  logical query opertor  = $and $or  $not  $nor
//17   count and sort opertor
const getd = async () => {
    //15 const result1 = await Playlist.find({video: {$gt : 32}})
    //15 const result1 = await Playlist.find({video: {$in: [35,36]}})
    //16  const result1 = await Playlist.find({$and :[ {video:35} , {class:"1115"} ]})
    
    //17 const result1 = await Playlist.find({ type: "free" })
    //17 .select({ name: 1 })    
    //17 .sort({ name: 1 });     //ascending order
    //17 .sort({ name: -1 });   //decending order
    //17 .count()               // it give number of documents
    //17 .countDocuments()      // same as count
   
    // .limit(1);       // only one

    console.log(result1)
}

getd();
*/
/*
//    video 18 update         Playlist.findByIdAndUpdate({query},{update},{option})

const updatedocument = async (_id) => {
    try {
   //     const result2 = await Playlist.updateOne({ _id}, {  //old way
              const result2 = await Playlist.findByIdAndUpdate({ _id}, {  //object destructuring   //new way
          $set: {
                name: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
            }
        },
        {new:true}                           //pehle console me old data aa raha tha ab new aa raha hai
        )
        console.log(result2)

    } catch (err) {
        console.log(err);
    }
}


updatedocument("64106f352c15edf24ad4e630")

*/

//  video 19 delete

// const deletedocument = async (_id) => {
//     try{
//         // const result3 = await Playlist.deleteOne({ _id })
//         // const result3 = await Playlist.deleteMany({ _id })
//         const result3 = await Playlist.findByIdAndDelete({ _id })
//        console.log(result3);
// }catch(err){
// console.log(err);
// }
// }


// deletedocument("63446af197d168aa92a8bf51")

/* ruf
let a=5;
const b={
    a
}
console.log(b.a)
*/
// video 20  build in validation
// 21 custom(make your own)  validation
/*
//20
const play2 = new mongoose.Schema({
    name: {
        type: String

        // required: true,
        // unique:true,
        // lowercase:true
        // uppercase:true
        // trim:true,
        // minlength:[3,"minmum2letter"],
        // maxlength:50,
    },
    cls: Number,
    type: {
        type: String,
        enum: ["free", "free4"]
    },
    // video: {
    //     type: Number,
      //21 validate(value){
        if(value<0 ){
           throw new Error("invalid")
        }
      }
     
    //     validate: {
    //         validator: function (value) {
    //             return value.length < 0
    //         },
    //         message: "number not be negative"
    //     }
    // },
     email: {
        type: "string",
        
       validate(value) {
   //22         if (!validator.isEmail(value)){
                // error ka e bada likha kar
               throw new Error("email is invalid")
            }
    }
    },

    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", play2)


const createdocument1 = async () => {
    try {
        const document10 = new Playlist({
            name: "vkkhghrtedgfyfdtgyetty21hgtghgtg122sdsfggdk",
            cls: 111,
            type: "free",
//            video: -15,
            email: "thapa@gm",
            active: true
        })

        const result = await Playlist.insertMany([document10]);
        console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}
createdocument1();
*/
//23 24 rest api is user made api
//with the help of postman we test and create rest api and test api
//create=post
//read=get
//update=put,putch
//delete=delete