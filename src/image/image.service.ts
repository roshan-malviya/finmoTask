import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { imageInter } from './interface/image.interface';

@Injectable()
export class ImageService {

    constructor (@InjectModel('Image') private readonly imageModel: Model<imageInter>){}
    
    //get all images
    public async getImages(){
        const images = await this.imageModel.find().exec()
        if(!images || images.length === 0){

            throw new HttpException('Not found',404)

        }
        
        return images
    }


// add image
    public async postImage(image1) {
        const image = await new this.imageModel(image1)
        return image.save()
        
        
    }

    // find by id

    public async  getImageById(id:String) {

        const image = await this.imageModel.findById(id).exec()

        if(!image){

            throw new HttpException('Not found',404)

        }
        return image

        
    }

    //find by artist 
    public async  serarch(params:String) {

        const images = await this.imageModel.find({artist:params},{_id:0})
        if(!images || images.length === 0){

            throw new HttpException('Not found',404)

        }
        
        return images
    }
    
}
