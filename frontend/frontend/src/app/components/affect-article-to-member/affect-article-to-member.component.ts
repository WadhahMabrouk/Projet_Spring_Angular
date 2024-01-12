import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Article } from 'src/models/article';
import { Member } from 'src/models/member';
import { ArticleService } from 'src/services/article.service';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-affect-article-to-member',
  templateUrl: './affect-article-to-member.component.html',
  styleUrls: ['./affect-article-to-member.component.css']
})
export class AffectArticleToMemberComponent implements OnInit{
  constructor(private MS:MemberService,private AS: ArticleService,private dialogRef: MatDialogRef<AffectArticleToMemberComponent>,private fb: FormBuilder){}
  form!:FormGroup
  
  dataMembers!: Member[] ;
  dataArticles!: Article[] ;
  ngOnInit(){
    this.fetch()
    this.form = this.fb.group({
      article: new FormControl(null,[]),
      createur: new FormControl(null,[])
    })
  } 
  fetch():void{
    this.MS.getMembers().subscribe((tab)=>{
      
      this.dataMembers=tab
    })
    this.AS.getArticles().subscribe((tab)=>{
      
      this.dataArticles=tab
    })
  }
  save():void{this.dialogRef.close(this.form.value)}
  close():void{this.dialogRef.close()}

}
