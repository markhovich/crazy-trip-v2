import { Article } from './Article';

export class Comment{
   
    constructor( public id: number,
        public content: string,
        public created: Date,
        public article: Article){}
}