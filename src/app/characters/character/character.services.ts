import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, retry } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    constructor(public http: HttpClient){}
    
    public consultarPersonajes(){
    
    let url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8cf2c1b6d1b84f508a4c63e4d549572e&hash=4a9e8ae93505339fb12d209bbae0860c&nameStartsWith=Spider&limit=20';   
    
    return this.http.get(url).pipe(
        map((res: any) =>{
            return res;
        }),
        retry(5));
    };
    
    
    public obtenerPersonajes(url: string){

        return this.http.get(url).pipe(
            map((res: any) => {
                return res;
            }),
            retry(5));
        
}

}
