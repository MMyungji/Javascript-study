const multer = require('multer');
const path = require('path');

const upload = multer({
    storage:multer.diskStorage({
        // 폴더 위치지정
        destination:(req,file,done) => {
            done(null, "uploads/");
        },
        //파일 이름지정
        filename:(req,file,done) => {
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname,ext)+Date.now()+ext;
            done(null,filename);
        }
    }),
    limits: {fileSize: 30*1024*1024}
})

module.exports = {upload}