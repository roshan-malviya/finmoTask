import { Body, Controller, Get, Param, Post,Query,UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageDto } from './image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import { query } from 'express';

@Controller('image')

export class ImageController {

    constructor(private imageService : ImageService){}

    @Get()
    getImages(){
        return this.imageService.getImages()
    }


    //upload image with body
    
    @Post('upload') 
    @UseInterceptors(FileInterceptor(
        "image",{
            storage: diskStorage({
              destination: './uploads'
              , filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${extname(file.originalname)}`)
              }
            })
          }
    ))


    postImage(@UploadedFile() file,@Body() body ){


      const imagePath = file.path;
      const title = body.title;
      const artist = body.artist
      const price = Number(body.price)

        return this.imageService.postImage({
          imagePath,
          title,
          artist,
          price
        })


    }


    @Get(':id')

    public getImageById(@Param('id') id : string){

      return this.imageService.getImageById(id)

    }

    @Get('search/:artist')
    public async search(@Param('artist') artist: string){
      
      return this.imageService.serarch(artist)
    }

}
