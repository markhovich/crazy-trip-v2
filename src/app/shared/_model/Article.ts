import { Category } from './Category';

export class Article{

    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public image?: any,
        public created?: Date,
        public loveIt?: number,
        public comments?: Comment[],
        public categories?: Category[]
        ){}
}