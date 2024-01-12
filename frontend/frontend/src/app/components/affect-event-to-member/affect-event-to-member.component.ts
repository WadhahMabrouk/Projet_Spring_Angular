import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/models/event';
import { Member } from 'src/models/member';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-affect-event-to-member',
  templateUrl: './affect-event-to-member.component.html',
  styleUrls: ['./affect-event-to-member.component.css']
})
export class AffectEventToMemberComponent implements OnInit{
  constructor(private MS:MemberService,private ES: EventService,private dialogRef: MatDialogRef<AffectEventToMemberComponent>,private fb: FormBuilder){}
  form!:FormGroup
  
  dataMembers!: Member[] ;
  dataEvents!: Event[] ;
  ngOnInit(){
    this.fetch()
    this.form = this.fb.group({
      event: new FormControl(null,[]),
      createur: new FormControl(null,[])
    })
  } 
  fetch():void{
    this.MS.getMembers().subscribe((tab)=>{
      
      this.dataMembers=tab
    })
    this.ES.getEvents().subscribe((tab)=>{
      
      this.dataEvents=tab
    })
  }
  save():void{this.dialogRef.close(this.form.value)}
  close():void{this.dialogRef.close()}

}
