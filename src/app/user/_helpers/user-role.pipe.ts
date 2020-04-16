import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'userRole'})
export class UserRolePipe implements PipeTransform{
    transform(role: number): string{
        switch(role){
            case 0:
                return 'Membre';
            case 1: 
                return 'Contributeur';
            case 2:
                return 'Administrateur';
            default:
                return 'Erreur';
        }
    }
}