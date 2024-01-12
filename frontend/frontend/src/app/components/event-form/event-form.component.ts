import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/services/event.service';
import { Event } from 'src/models/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  constructor(private ES: EventService,private router:Router,private activatedRoute:ActivatedRoute) { }
  form!: FormGroup;
  eventGlobal!:Event ;
  
  ngOnInit():void {
    //recupiration id
    const idcourant = this.activatedRoute.snapshot.params["id"] ;
    if(!!idcourant){
      this.ES.getEventByid(idcourant).subscribe((item)=>{
        this.changeState(item).then(()=>this.initForm2(item) )
      })
    }
    else{
      this.initForm()
    }

  }
  changeState=async(item:Event)=>{
    this.eventGlobal=item;
  }
  initForm() {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl<Date | null>(null),
      dateFin: new FormControl<Date | null>(null),
      lieu: new FormControl(null, [Validators.required]),
    });
  }
  initForm2(item:Event):void {
    console.log(item)
    this.form = new FormGroup({
      titre: new FormControl(item.titre, [Validators.required]),
      dateDebut: new FormControl(item.dateDebut, [Validators.required]),
      dateFin: new FormControl(item.dateFin, [Validators.required]),
      lieu: new FormControl(item.lieu, [Validators.required]),
    });
  }
  OnSubmit() {
    const idcourant = this.activatedRoute.snapshot.params["id"];
    const event = {
      ...this.eventGlobal,
      ...this.form.value,
    }
    if (!!idcourant) {
      this.ES.UpdateEvent(event).subscribe(() => { this.router.navigate(['/events']) })
    }
    else { 
      this.ES.SaveEvent(event).subscribe(() => { this.router.navigate(['/events']) })
    }

  }
}
