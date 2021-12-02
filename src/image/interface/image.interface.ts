import { Document } from "mongoose";

export interface imageInter extends Document {

    readonly imageUrl : string;
    readonly title : string;
    readonly  price : number

}