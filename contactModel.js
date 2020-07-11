var mongoose = require('mongoose');
/*firstName: "Rohitash"
gender: "Male"
lastName: "Kator"
mail: "rohitashkmwt@gmail.com"
position: "Backend Developer"
qualification: "B.tech"
resume: "C:\fakepath\AdmitCard_80029622.pdf"
salutation: "Mr."*/
var contactSchema = mongoose.Schema({
    salutation: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    gender: String,
    mail: String,
    position: String,
    resume: String,
    qualification: String,

    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}