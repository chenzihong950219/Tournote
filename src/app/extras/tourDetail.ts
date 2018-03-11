import { Tour } from "./tour";
import {CommentObj} from './commentObj'

export class TourDetail {

    constructor(
        public tour:Tour,
        public comments:Array<Comment>
    )
    {

    }

}