import { Component } from '@angular/core';
import { CharacterService } from './characters/character/character.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'marvel-api';
  listHeroes : any[] = [];  
  p : number = 10;
  offset: any ='0';
  limit = '100';
  constructor(
    private heroeS: CharacterService
) {}

  ngOnInit(): void {
    
    this.heroeS.consultarPersonajes().subscribe(res => {
      
      //console.log('Respuesta heroes', res);
      this.listHeroes = res.data.results;
      const array = JSON.parse(JSON.stringify(this.listHeroes));
      const unique = array[0];
    })
    
  }

    recorrerSerie(serie : any): string {
    let returValue = '';
    if(serie.series.items.length > 0){
      returValue = JSON.parse(JSON.stringify(serie.series.items))[0].name
    }
    return returValue;
  }
}

