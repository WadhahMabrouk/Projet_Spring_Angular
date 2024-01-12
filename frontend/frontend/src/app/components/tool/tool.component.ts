import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToolsCreateComponent } from '../tools-create/tools-create.component';
import { ToolService } from 'src/services/tool.service';
import { Tool } from 'src/models/tool';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MemberService } from 'src/services/member.service';
import { AffectToolToMemberComponent } from '../affect-tool-to-member/affect-tool-to-member.component';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  constructor(private TS:ToolService, private MS:MemberService,private dialog: MatDialog) {}
  displayedColumns: string[] = ['id', 'Date', 'Source','action'];
  dataSource!: Tool[] ;
  dataSource2 =new MatTableDataSource(this.dataSource);

  ngOnInit(): void {
    this.fetch()
    console.log(this.dataSource2);

  }
  fetch():void{
    this.TS.getTools().subscribe((tab)=>{
      this.dataSource=tab
      this.dataSource2 = new MatTableDataSource(this.dataSource);

    })
    
  }
  OpenDialog(id? :string ):void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef= this.dialog.open(ToolsCreateComponent, dialogConfig);
  
  dialogRef.afterClosed().subscribe(data => {
    
    if (data) {
      const outil ={
        id:id,
        ...data
      }
      
      this.TS.UpdateTool(outil).subscribe(()=>{this.fetch()})
      
    }
  }); 
}
OpenDialog2(id? :string ):void{
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  const dialogRef= this.dialog.open(AffectToolToMemberComponent, dialogConfig);

dialogRef.afterClosed().subscribe(data => {
  
  if (data) {

      const member_tool={
        outil_id:String(data.tool.id),
        membre_id:String(data.createur.id),
      }
      console.log(member_tool);
      
      this.MS.affecterOutil(member_tool).subscribe(()=>{this.fetch()})
    }
  
  
}); 
}
deleteOutil(id:string):void{
  //open the dialog component
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '200px',
    width: '300px',
  });
  // wait for the result of afterclosed
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.TS.deleteToolByid(id).subscribe(()=>{this.fetch()})
    }
  }); 
  

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource2.filter = filterValue.trim().toLowerCase();
  
}
}
