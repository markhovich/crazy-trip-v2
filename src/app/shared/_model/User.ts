export class User{
    
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public created?: Date,
        public role?: number,
        public token?: string){}
}