const mongoose = require('mongoose');
require('mongoose-html').loadType(mongoose);


const productSchema = mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    isbn13: { type: Number, required: true },
    path: { type: String, required: true },
    createdOn:{type:Date, required:true}
//     Title: { type: String, required: true },
// ISBN13 : { type: Number, required: true },
// ISBN10: { type: Number, required: true },
// SKU: { type: String, required: true },
// Author: { type: String, required: true },
// Publisher: { type: String, required: true },
// Edition: { type: String },
// Volume: { type: String},
// Binding: { type: String },
//
// PublicationYear: { type: Number },
// Language: { type: String },
// BookPages: { type: Number },
// ItemCondition: { type: String },
// MRP: { type: Number},
// SellingPrice: { type: Number},
// Disc: { type: Number},
// Freight: { type: Number},
// Stock: { type: Number},
// Subject: { type: String},
// SubSubject: { type: String}

});

module.exports = mongoose.model('Product', productSchema);


// mongoose.Schema.Types.Html,
// setting: {
//   allowedTags: ['iframe'],
//   allowedAttributes: {
//     'iframe': ['src']
//   },
//   allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
//   allowedIframeHostnames: ['ws-in.amazon-adsystem.com']
// },
