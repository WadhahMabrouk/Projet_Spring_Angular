import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { AffectArticleToMemberComponent } from '../affect-article-to-member/affect-article-to-member.component';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(private AS:ArticleService,private MS:MemberService,private router:Router,private dialog:MatDialog){}
  //pointer sur le tableau du service 
  displayedColumns: string[] = ['id', 'titre', 'Date', 'type', 'sourcePdf','action'];
  dataSource!: Article[] ;
  dataSource2 =new MatTableDataSource(this.dataSource);


  ngOnInit(): void {
    this.fetch()
  }
  fetch():void{
    this.AS.getArticles().subscribe((tab)=>{
      this.dataSource=tab
      this.dataSource2 =new MatTableDataSource(this.dataSource);

    })
    console.log(this.dataSource)
  }
  deleteArticle(id:string):void{
    //open the dialog component
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    // wait for the result of afterclosed
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.AS.deleteArticleByid(id).subscribe(()=>{this.fetch()})
      }
    }); 
  }
  OpenDialog(id? :string ):void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef= this.dialog.open(AffectArticleToMemberComponent, dialogConfig);
  
  dialogRef.afterClosed().subscribe(data => {
    
    if (data) {

        const member_article={
          publication_id:String(data.article.id),
          auteur_id:String(data.createur.id),
        }
        console.log(member_article);
        
        this.MS.affecterArticle(member_article).subscribe(()=>{this.fetch()})
      }
    
    
  }); 
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    
  }
}
