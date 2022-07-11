const cloudinary = require("cloudinary").v2;

const cloud = cloudinary.config({
    cloud_name: "freelince",
    api_key: 887248159336691,
    api_secret: "heDLkbT4G5BJtqhQD2OzomvEJRQ"
})


module.exports = cloudinary;