import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

    public gifList: Gif[] = [];

    private _tagHistory: string[] = [];
    private apikey: string = 'OampTUt7ZiXdqPrmt1Kgk7QwooSkvTfz';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


    constructor( private http: HttpClient ) {
        this.GetLocalStorage();
        console.log('Service inicializado');
     }


    get tagsHistory(){
        return [...this._tagHistory];
    }
    private organizeHistory(tag : string) {
        tag = tag.toLowerCase();

        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
        }
        this._tagHistory.unshift( tag );
        this._tagHistory = this.tagsHistory.splice(0,10);
        this.SaveLocalStorage();
    }
    private SaveLocalStorage(): void{
        localStorage.setItem('history', JSON.stringify(this._tagHistory));
    }
    private GetLocalStorage(): void{
        if(!localStorage.getItem('history')) return;

        this._tagHistory = JSON.parse( localStorage.getItem('history')! );

        if ( this._tagHistory.length === 0 ) return;
        this.searchTag( this._tagHistory[0])
    }   

    searchTag( tag: string):void {
        if( tag.length === 0 ) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key', this.apikey)
        .set('limit', '10')
        .set('q', tag)

        this.http.get<SearchResponse>(`${ this.serviceUrl}/search`, {params})
            .subscribe( resp => {
                this.gifList = resp.data;
              //  console.log({gifs: this.gifList});
            })

        // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apikey }&q=${ tag }&limit=10`)
      //  fetch('http://api.giphy.com/v1/gifs/search?api_key=OampTUt7ZiXdqPrmt1Kgk7QwooSkvTfz&q=digimon&limit=10')
      //      .then( resp => resp.json() )
       //     .then( data => console.log(data) );
      //  console.log( this.tagsHistory );

        // OTRA MANERA DE HACER LO MISMO
       // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=OampTUt7ZiXdqPrmt1Kgk7QwooSkvTfz&q=digimon&limit=10')
       // const data = await resp.json();
            


   }
    
}