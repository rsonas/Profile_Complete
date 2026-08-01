import mongoose from 'mongoose'
import crypto from "crypto";

//will add role to assignment 4 when we add authentication
const userSchema = new mongoose.Schema({

    fName: {
        type: String,
        trim: true,
        required: "First name is required."
    },
    lName: {
        type: String,
        trim: true,
        required: "Last name is required."
    },
    email: {
        type: String,
        trim: true,
        required: "Email is required.",
        match: [/.+\@.+\../, "Invalid email address"],
        unique: "Email already exists."
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now
    },
    hashed_password: {
        type: String,
        trim:true,
        required: "Password is required."
    },
    salt: String
});

userSchema.virtual('password')
.set(function(password) {

    console.log(password);

    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password)
})
.get(function() {
    return this._password;
});
userSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 8) {
        this.invalidate(
            'hashed_password',
            'Password must be at least 8 characters.');
    }
    if (this.isNew && !this._password){
        this.invalidate(
            'hashed_password',
            'Password is required.')
    }
}, null);

userSchema.methods = {
    authenticate: function(plaintext) {
        return this.encryptPassword(plaintext) === this.hashed_password
    },
    encryptPassword: function(password) {
        if (!password) return ''
        try {
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: function () {
        return Math.round(( new Date().valueOf() * Math.random())) + ''
    }
}


export default mongoose.model('users', userSchema);