import { Component,NgZone , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  user:any 
  constructor(private authservice:AuthService,private router:Router){}
  ngOnInit(): void {
    this.authservice.getUserClaims().then((res)=>{
      this.user=res
      
    })
  }
  logout():void{
    this.authservice.doLogout().then(()=>{
      this.successRedirect()
    })
  }
  successRedirect():void {
    this.router.navigate(['/'])
    
  }

}
