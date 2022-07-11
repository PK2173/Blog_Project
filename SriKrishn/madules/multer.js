const multer = require("multer")
const path = require("path")

const uplode = multer({
    storage: multer.diskStorage({
        filename: ((req, file, cd) => {
            let ext = path.extname(file.originalname);
            if (ext != ".jpg" && ext != ".jpeg" && ext != ".pdf" && ext != ".png") {
                cd(new Error("file type is not saport"), false)
                return;
            }
            cd(null, "true")
        })
    })
})

 
// const fileStorageEngine = multer.diskStorage({
    // destination: (req, file, cd) => {
        // cd(null, '../images')
    // }, filename: (req, file, cd) => {
        // cd(null, Date.now() + "--" + file.originalname)
    // }
// })
// 
// const uplode = multer({ storage: fileStorageEngine })

module.exports = uplode