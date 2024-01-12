import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Tool } from 'src/models/tool';
@Injectable({
  providedIn: 'root'
})
export class ToolService {
  constructor(private httpClient:HttpClient) { }
  tab:Tool[]=[];

  SaveTool(tool:Tool):Observable<void>{
    return this.httpClient.post<void>("http://localhost:8100/OUTIL-SERVICE" ,tool) ;
  }
  UpdateTool(tool:Tool):Observable<void>{
    return this.httpClient.put<void>("http://localhost:8100/OUTIL-SERVICE/outil/update" ,tool) ;
  }
  getToolByid(id:string):Observable<Tool>{
    return this.httpClient.get<Tool>("http://localhost:8100/OUTIL-SERVICE/outil/"+id)
  }
  deleteToolByid(id:string):Observable<void>{
    return this.httpClient.delete<void>("http://localhost:8100/OUTIL-SERVICE/"+id)
  }
  getTools():Observable<Tool[]>{
    return this.httpClient.get<Tool[]>("http://localhost:8100/OUTIL-SERVICE/outil").pipe(
      tap((tools: Tool[]) => {
        this.tab=tools;
      })
    );
  }
}
