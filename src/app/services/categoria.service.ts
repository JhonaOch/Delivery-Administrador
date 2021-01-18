import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private afs:AngularFirestore) { }


  guardarCategoria(categoria:Category){
    const refCategoria=this.afs.collection("categoria");
    if(categoria.uid==null){
      categoria.uid=this.afs.createId();

    }
   
    refCategoria.doc(categoria.uid).set(Object.assign({},categoria),{merge:true})
  }




  guardarCategoriaEmpresa(categoria:Category,idCategoria:string,idEmpresa:string){
    const refCategoria=this.afs.collection("Categorias");
    if(categoria.uid==null ){
      categoria.uid=this.afs.createId();
    }
    
    refCategoria.doc(idCategoria).collection("Empresas").doc(idEmpresa).collection("Categoria_Productos").doc(categoria.uid).set(Object.assign({},categoria),{merge:true})
  }








  
}
