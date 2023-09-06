
import fs from "fs";

export class ProductManagerFiles{
    constructor(pathFile){
        this.pathFile = pathFile;

    };

    fileExist(){
        return fs.existsSync(this.pathFile);
    }

    async addProduct (userInfo) {
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const contenidoJson = JSON.parse(contenido);
                contenidoJson.push(userInfo);
                await fs.promises.writeFile(this.pathFile,JSON.stringify(contenidoJson,null,"/t"))
                console.log("Producto agregado")


            }else {
                throw new Error("Error al agregar producto")
            }

        } catch (error) {
            console.log(error.message);
            throw error;
        }
      
    }

    async getProduct(){

        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.pathFile, "utf-8");
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
               


            }else {
                throw new Error("Error al obtener producto")
            }

        } catch (error) {
            console.log(error.message);
            throw error;
        }
      
    }
    

    getProductById(){};

    updateProduct(){};

    deleteProduct(){};
};

const operations = async () =>{
    try{
        const manager = new UserManager("./products.json")

    }catch(error){
        console.log(error.message)
    }
}