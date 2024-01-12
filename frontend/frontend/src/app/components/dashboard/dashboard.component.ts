import { Component } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ToolService } from 'src/services/tool.service';
import{ChartDataset , ChartOptions} from 'chart.js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_Students:number=0;
  nb_Teachers:number=0;
  nb_Tools:number=0;
  nb_Events:number=0;
  nb_Articles:number=0;
  constructor(private Ms:MemberService,private Ts:ToolService,private Es:EventService,private As:ArticleService){
    this.As.getArticles().subscribe((tab)=>{
      this.nb_Articles=tab.length;
    })
    this.Ms.getAllStudents().subscribe((tab)=>{
      this.nb_Students=tab.length;
    })
    this.Ms.getAllTeachers().subscribe((tab)=>{
      this.nb_Teachers=tab.length;
    })
    this.Ts.getTools().subscribe((tab)=>{
      this.nb_Tools=tab.length;
    })
    this.Es.getEvents().subscribe((tab)=>{
      this.nb_Events=tab.length;
    })

  }
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'number of articles',
      data: this.getNumbers()
    }
  ];
  chartLabels: String[] = [];
  chartOptions: ChartOptions = {};
  stab:number[]=[]
  getNumbers(){
    //this.Ms.getNbPubByMember().subscribe((x)=>this.stab=x)
    return this.stab
  }
  chartLabelsPie: String[] = ["Student","Teacher"];
  chartOptionsPie: ChartOptions = {};
  chartDataPie: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'nombre ',
      data: this.getNumbersStudent()
    }
  ];
  Studenttab:number[]=[]
  getNumbersStudent(){
    this.Ms.getNbStudByTeacher().subscribe((x)=>this.Studenttab=x)
    return this.Studenttab
  }
}
