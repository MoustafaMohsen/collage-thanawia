import { Component, OnInit,Input } from '@angular/core';
import {  islamic_section,literature_boys,literature_girls,science_boys,science_girls } from "../collages";
import { Subject,Observable,Observer } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputoptions
  boolList:boolean=false;
  availableCollages:available_collages[];
  @Input() Mark;
  constructor() { }

  ngOnInit() {
  }

  check_collage(mark,section:string):available_collages[]{

    var current_collage:available_collages[];
    //science_boys
    if (section="Science boys") {
      science_boys.forEach(c => {
        if (c.mark <= mark) {

          if(current_collage == null){ current_collage= [{mark:c.mark,collage:c.collage}] }
          else{
          current_collage.push(c)
          }

        }
      });
      return current_collage;
    }

    //literature_boys
    if (section="Literature boys") {
      literature_boys.forEach(c => {
        if (c.mark <= mark) {
          
          if(current_collage == null){ current_collage= [{mark:c.mark,collage:c.collage}] }
          else{
          current_collage.push(c)
          }
        }
      });
      return current_collage;
    }

    //literature_girls
    if (section="Literature girls") {
      literature_girls.forEach(c => {
        if (c.mark <= mark) {
          
          if(current_collage == null){ current_collage= [{mark:c.mark,collage:c.collage}] }
          else{
          current_collage.push(c)
          }
        }
      });
      return current_collage;
    }

    //science_girls
    if (section="Science girls") {
      science_girls.forEach(c => {
        if (c.mark <= mark) {
          
          if(current_collage == null){ current_collage= [{mark:c.mark,collage:c.collage}] }
          else{
          current_collage.push(c)
          }
        }
      });
      return current_collage;
    }

    //islamic_section
    if (section="Islamic section") {
      islamic_section.forEach(c => {
        if (c.mark <= mark) {
          
          if(current_collage == null){ current_collage= [{mark:c.mark,collage:c.collage}] }
          else{
          current_collage.push(c)
          }
        }
      });
      return current_collage;
    }

  }


  Searchbutton(){//button
    this.availableCollages=this.check_collage(this.Mark,this.inputoptions)

    if (this.availableCollages!=null||this.availableCollages.length!=0) {
      this.boolList=true
    }

  }
  
}

export interface available_collages{
  mark:number
  collage:string 
}