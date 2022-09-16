

  // template:`<div>
  // <h1>welcome to meanpp stack app</h1>
  // </div>`

  // templete: '<div>welcome
  import { Component } from '@angular/core';
//decorator
@Component({
  //component directive
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<p>hi</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  websiteDiscription:string='IMDb is the world\'s most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.'

  sayHello():void{
    console.log('hi from class');
    
  }
}
  // </div>',


  

  
  

//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title:string  = 'apps'; 
//   firstName:string = '';
//   isDisabled:boolean =false
  //  singleMovie:any={
//   "adult":false,
//  "backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
//  "genre_ids":[
//     28,
//     878,
//     27
//  ],
//  "id":766507,
//  "original_language":"en",
//  "original_title":"Prey",
//  "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
//  "popularity":9839.591,
//  "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//  "release_date":"2022-08-02",
//  "title":"Prey",
//  "video":false,
//  "vote_average":8.1,
//  "vote_count":2894,
//  isVisiable:false,
// }
// moviesData:Imovie[]=[
//   {
    
//     "id":766507,


//     "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//     "release_date":"2022-08-02",
//     "title":"Prey",
    
//     isVisiable:false
//  },
//  {
    
//     "id":610150,
   
//     "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
//     "release_date":"2022-06-11",
//     "title":"Dragon Ball Super: Super Hero",
    
//     isVisiable:false
//  },
//  {
    
//     "id":616037,
   
//     "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
//     "release_date":"2022-07-06",
//     "title":"Thor: Love and Thunder",
   
//     isVisiable:false
//  },
//  {
    
    
//     "id":507086,

//     "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
//     "release_date":"2022-06-01",
//     "title":"Jurassic World Dominion",
   
//     isVisiable:false
//  },
//  {
//     "adult":false,
//     "backdrop_path":"/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
//     "genre_ids":[
//        16,
//        12,
//        35,
//        14
//     ],
//     "id":438148,

//     "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//     "release_date":"2022-06-29",
//     "title":"Minions: The Rise of Gru",
    
//     isVisiable:false
//  },
//  ]

//   printtoconsole():void{
// console.log("button pressed");

//   }
// toggleData(moviedId:string):void {
//   this.moviesData.filter(function(movie){
// //     if(movie.id==moviedId){
// // movie.isVisiable=!movie.isVisiable;
//     }

  
// // this.singleMovie.isVisiable=!this.singleMovie.isVisiable
  


    
     
    
  




  


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'meanapp';
// }
   