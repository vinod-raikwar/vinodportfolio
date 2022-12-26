const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    }
  },
  mobile:{
    type: String,
    required: true,
    unique: true,
  },
  messages:[],
});

//save messages

userSchema.methods.Messagesave = async function(message) {
    try{
        this.messages = this.messages.concat({message});
        await this.save();
        return message;
    }catch(error){
        console.log(error);
    };
};

//Create a model mean create a collection name

const Users = new mongoose.model("Users", userSchema);

module.exports = Users;


