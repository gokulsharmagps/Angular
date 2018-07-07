const mongoose = require('mongoose');
require('mongoose-html').loadType(mongoose);


const productSchema = mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    isbn13: { type: Number, required: true },
    path: { type: String, required: true },
    createdOn:{type:Date, required:true}

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
