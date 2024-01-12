import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article } from 'src/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }
  tab: Article[] = [];

  SaveArticle(tool: Article): Observable<void> {
    return this.httpClient.post<void>("http://localhost:8083/publications/publication", tool);
  }

  UpdateArticle(tool: Article): Observable<void> {
    const id = tool.id; // Assuming 'id' is a property in your Article model
    return this.httpClient.put<void>(`http://localhost:8083/publications/publication/${id}`, tool);
  }

  getArticleByid(id: string): Observable<Article> {
    return this.httpClient.get<Article>(`http://localhost:8083/publication/${id}`);
  }

  deleteArticleByid(id: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8083/publications/${id}`);
  }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("http://localhost:8083/publications").pipe(
      tap((articles: Article[]) => {
        this.tab = articles;
      })
    );
  }
}
