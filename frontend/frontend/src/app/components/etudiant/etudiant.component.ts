import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  constructor(private MS:MemberService,private router:Router,private dialog:MatDialog){}
  //pointer sur le tableau du service 
  displayedColumns: string[] = ['id', 'cin', 'name', 'dateInscription', 'sujet', 'action'];
  dataSource!: Member[] ;
  dataSource2 =new MatTableDataSource(this.dataSource);

  ngOnInit(): void {
    this.fetch()
  }
  fetch():void{
    this.MS.getAllStudents().subscribe((tab)=>{
      
      this.dataSource=tab
      this.dataSource2 = new MatTableDataSource(this.dataSource);
    })
    console.log(this.dataSource2);

  }
  deleteMember(id:string):void{
    //open the dialog component
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    // wait for the result of afterclosed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.MS.deleteMemberByid(id).subscribe(()=>{this.fetch()})
      }
    }); 
    

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    
  }
}
