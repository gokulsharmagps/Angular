const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sanitizeHtml = require('sanitize-html');
const Product = require("../models/product");
mongoose.plugin(require('mongoose-regex-search'));

router.get("/", (req, res, next) => {
  Product.find()
    .select("title isbn13 path id createdOn")
    .exec()
    .then(docs => {
      // const response = {
      //
      //   count: docs.length,
      //   products: docs.map(doc => {
      //     return {
      //
      //       title: doc.title,
      //       isbn13: doc.isbn13,
      //       mrp:doc.mrp,
      //       stock:doc.stock,
      //       id: doc.id,
      //       createdOn:doc.createdOn,
      //       path: sanitizeHtml(doc.path,{
      //         allowedTags: ['iframe'],
      //         allowedAttributes: {
      //           'iframe': ['width','height','marginwidth','marginheight','scrolling','frameborder','src']
      //         }
      //
      //       }),
      //
      //
      //       request: {
      //         type: "GET",
      //         url: "http://localhost:3000/products/" + doc.id
      //       }
      //     };
      //   })
      // };
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  var count=0;
  Product.find()
    .exec()
    .then(docs => {
      count = docs.length
      console.log(docs.length);
      //console.log(this.count);
      console.log(count);
      //console.log(docs);
      //   if (docs.length >= 0) {
      //res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }

  const product = new Product({
    id: count+1,
    title: req.body.title,
    isbn13: req.body.isbn13,
    path:req.body.path,
    createdOn: new Date()
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.title,
            price: result.price,
            path:result.path,
            id:result.id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/products/" + result.id
            }
        }
      });
    })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:productName", (req, res, next) => {
  const id = req.params.productName;
  stringid=id;
  numberid=parseInt(id);
  var x=null;
  if(isNaN(numberid)){
    x={ title: { $regex: stringid , $options: 'i' } }
  }
  else{
    x={isbn13: numberid};
  }
Product.find(x, 'title isbn13 path id createdOn')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId", (req, res, next) => {
  const _id = req.params.productId;
  Product.remove({ title: _id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/products',
              body: { name: 'String', price: 'Number' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
