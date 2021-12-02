import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
    artist : String,
    imagePath: String,
    title : String,
    price : Number
})