import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-full-member',
  templateUrl: './full-member.component.html',
  styleUrls: ['./full-member.component.css']
})
export class FullMemberComponent implements OnInit {
  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }
  dataSource!: Member ;
  ngOnInit(): void {
    const idcourant = this.activatedRoute.snapshot.params["id"];
    if (!!idcourant) {
      this.fetch(idcourant)
    }
  }

  fetch(id:string):void{
    this.MS.getFullMember(id).subscribe((tab)=>{
      
      this.dataSource=tab
    })

  }
}
