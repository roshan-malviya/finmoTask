import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbRoshan:roshan@cluster0.4odpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ImageModule
  ]
})
export class AppModule {}
