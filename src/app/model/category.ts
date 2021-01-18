import { Company } from "./company";
import { Product } from "./product";

export class Category {
    uid:string;
    img:string;
    nombre:string;
    descripcion:string;
    companias?:Company[];
    productos?:Product[]
    
}
