import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Member } from 'src/models/member';
import { Tool } from 'src/models/tool';
import { MemberService } from 'src/services/member.service';
import { ToolService } from 'src/services/tool.service';

@Component({
  selector: 'app-affect-tool-to-member',
  templateUrl: './affect-tool-to-member.component.html',
  styleUrls: ['./affect-tool-to-member.component.css']
})
export class AffectToolToMemberComponent implements OnInit{
  constructor(private MS:MemberService,private TS: ToolService,private dialogRef: MatDialogRef<AffectToolToMemberComponent>,private fb: FormBuilder){}
  form!:FormGroup
  
  dataMembers!: Member[] ;
  dataTools!: Tool[] ;
  ngOnInit(){
    this.fetch()
    this.form = this.fb.group({
      tool: new FormControl(null,[]),
      createur: new FormControl(null,[])
    })
    console.log(this.form);
    
  } 
  fetch():void{
    this.MS.getMembers().subscribe((tab)=>{
      
      this.dataMembers=tab
    })
    this.TS.getTools().subscribe((tab)=>{
      
      this.dataTools=tab
    })
  }
  save():void{this.dialogRef.close(this.form.value)}
  close():void{this.dialogRef.close()}

}
