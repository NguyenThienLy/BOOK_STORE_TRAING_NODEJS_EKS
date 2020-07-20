import { CrudRouter } from '../crud';
import { Request, Response } from '../base';
import { publishingController } from '../../controllers';

export default class PublishingRouter extends CrudRouter<typeof publishingController>{
   
    constructor() {
        super(publishingController);
    }

    customRouter() {
     
    }
}
