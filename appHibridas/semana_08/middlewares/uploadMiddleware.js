import multer from 'multer';
import path from 'path';
import fs, { existsSync } from 'fs';

const uploadDirectory = 'uploads/profiles';

if( !fs.existsSync(uploadDirectory)){
    fs.mkdirSync( uploadDirectory, { recursive:true });
}

const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null, uploadDirectory)
    },
    filename: ( req, file, cb ) => {
        const extension = path.extname ( file.originalname );
        
        const {user} = req;
        const fileName =`user-${user._id}${extension}`;
        // modificar el nombre
        cb(null, fileName)
    } 

});

const fileFilter = (req, file, cb) => {

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if ( allowedTypes.includes( file.mimetype ) ){
        cb(null, true);
    }else{
        cb ( new Error ('Formato de archivo no permitido'));
    }

};

const upload = multer({
    storage,
    fileFilter,
    limits:{
            fileSize: 2 * 1024 * 1024
    }
});

export default upload;





