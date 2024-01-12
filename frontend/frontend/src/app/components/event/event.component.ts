import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventService } from 'src/services/event.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Event} from 'src/models/event'
import { AffectEventToMemberComponent } from '../affect-event-to-member/affect-event-to-member.component';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
  
  constructor(private ES:EventService,private MS:MemberService,private router:Router,private dialog:MatDialog){}
  //pointer sur le tableau du service 
  displayedColumns: string[] = ['id', 'titre', 'DateDebut', 'DateFin', 'lieu','action'];
  dataSource!: Event[] ;

  ngOnInit(): void {
    this.fetch()
  }
  fetch():void{
    this.ES.getEvents().subscribe((tab)=>{
      this.dataSource=tab
    })
    console.log(this.dataSource)
  }
  deleteEvent(id:string):void{
    //open the dialog component
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    // wait for the result of afterclosed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ES.deleteEventByid(id).subscribe(()=>{this.fetch()})
      }
    }); 
  }
  OpenDialog(id? :string ):void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef= this.dialog.open(AffectEventToMemberComponent, dialogConfig);
  
  dialogRef.afterClosed().subscribe(data => {
    
    if (data) {

        const member_event={
          event_id:String(data.event.id),
          participant_id:String(data.createur.id),
        }
        console.log(member_event);
        
        this.MS.affecterEvent(member_event).subscribe(()=>{this.fetch()})
      }
    
    
  }); 
}
  
}
