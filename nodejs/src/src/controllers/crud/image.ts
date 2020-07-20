import { CrudController } from '../crud'
import {
    DJContainer,
    ImageService
} from '../../services';
import { TYPES } from '../../types';

export class ImageController extends CrudController<any>{
    constructor() {
        super(DJContainer.get<ImageService>(TYPES.ImageService));
    }
}