import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/services/data-access.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	
	
  public fstName:any;
  public lstName:any;
  public phn:any;
  
  user;
  data;
  constructor(private router:Router, 
    private dataSvc:DataAccessService, 
    private authSvc:AuthenticationService) { 

      this.authSvc.getUser().subscribe(user => {
        this.user = user; 
        this.dataSvc.getProfileData(this.user.uid).subscribe(result=>{
          console.log(result);
          this.data = result;
        })
		//this.dataSvc.updateName(this.user.uid);
       });
	    
     
    }

  ngOnInit() {
  }
  
  updateData(){
	   //this.n1 = this.phn;
	  
	  //this.dataSvc.updateName(this.user.uid, this.n1 ,this.n1,this.n1);
	  console.log(this.fstName);
	  console.log(this.lstName);
	  
  }
  

  
}
