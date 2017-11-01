import {Component, OnInit} from '@angular/core';
import {EventsService} from "../services/eventsService";
import {myAnimation} from "../animations/animation";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    animations:[myAnimation('Y','500px')]
})
export class HomeComponent implements OnInit{
   state='normal';
   location = '';
   progressBar='progress-bar progress-bar-striped progress-bar-animated';
   skillSet = [
       {
        name:'Angular 4',
        bootstrapClasses:this.progressBar+' bg-success',
        width:'80%'
       },
       {
        name:'JavaScript',
        bootstrapClasses:this.progressBar+' bg-info',
        width:'70%'
       },
       {
        name:'DHTML',
        bootstrapClasses:this.progressBar+' bg-danger',
        width:'80%'
       },
       {
        name:'Bootstrap',
        bootstrapClasses:this.progressBar+' bg-dark',
        width:'80%'
       }
   ];


  constructor(private eventsService:EventsService) {

      this.eventsService.eventEmitter.subscribe(
          (status:string) => {
              console.log(status);
              this.animateIt(status);
          }
      )
  }

  animateIt(status){

  }
  ngOnInit(){
      // this.state == 'normal' ? this.state='highlighted': this.state='normal';

  }


}
