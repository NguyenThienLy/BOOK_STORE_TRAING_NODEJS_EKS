import { CrudController } from '../crud'
import { 
    DJContainer,
    PublishingService
} from '../../services';
import { TYPES } from '../../types';

export class PublishingController extends CrudController<any>{
    constructor() {
        super(DJContainer.get<PublishingService>(TYPES.PublishingService));
    }
}