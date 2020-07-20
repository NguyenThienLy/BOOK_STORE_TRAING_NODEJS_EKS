import { CrudRouter } from '../crud';
import { Request, Response } from '../base';
import { imageController } from '../../controllers';

export default class ImageRouter extends CrudRouter<typeof imageController>{
   
    constructor() {
        super(imageController);
    }

    customRouter() {
     
    }
}

