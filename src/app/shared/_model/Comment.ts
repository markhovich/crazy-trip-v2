import { Article } from './Article';
import { User } from './User';

export class Comment{
   
    constructor(
        public id: number,
        public content: string,
        public created: Date,
        public article: Article,
        public user?: User){}
}