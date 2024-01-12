import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  constructor(private AS: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) { }
  form!: FormGroup;
  articleGlobal!: Article;

  ngOnInit(): void {
    //recupiration id
    const idcourant = this.activatedRoute.snapshot.params["id"];
    if (!!idcourant) {
      this.AS.getArticleByid(idcourant).subscribe((item) => {

        this.articleGlobal = item
        this.initForm2(this.articleGlobal)
      })
    }
    else {
      this.initForm()
    }

  }
  initForm() {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      date: new FormControl<Date | null>(null),
      type: new FormControl(null, [Validators.required]),
      sourcePdf: new FormControl(null, [Validators.required]),
    });
  }
  initForm2(item: Article): void {
    this.form = new FormGroup({
      titre: new FormControl(item.titre, [Validators.required]),
      date: new FormControl(item.date, [Validators.required]),
      type: new FormControl(item.type, [Validators.required]),
      sourcePdf: new FormControl(item.sourcePdf, [Validators.required]),
    });
  }
  OnSubmit() {
    const idcourant = this.activatedRoute.snapshot.params["id"];
    
    console.log(idcourant);
    console.log(!!idcourant);

    if (!!idcourant) {
      const article = {
        id : idcourant,
        ...this.form.value,
  
      }
      console.log("update", article);
      
      this.AS.UpdateArticle(article).subscribe(() => { this.router.navigate(['/articles']) })
    }
    else {
      const article = {
        ...this.form.value,
  
      }
      console.log("save");
      
      this.AS.SaveArticle(article).subscribe(() => { this.router.navigate(['/articles']) })
    }

  }
}
