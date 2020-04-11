export class Article{

    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public image?: string,
        public created?: Date,
        public loveIt?: number,
        public comments?: Comment[]
        ){}
}