import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/services/data-access.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
	
	listings;
	searchText: String = '';
	items: Observable<any[]>;
	private itemsCollection: AngularFirestoreCollection<any>;
	
	user;
	data;
	constructor(private router:Router, 
    private dataSvc:DataAccessService, 
    private authSvc:AuthenticationService) { 

      this.authSvc.getUser().subscribe(user => {
        this.user = user; 
        this.dataSvc.getAllListings().subscribe(result=>{
          console.log(result);
          this.data = result;
		  this.listings =result ;
        })
      
       });
     
    }
	
	search() {
    return this.listings.filter(listing => {
      return listing.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 ||
	  listing.description.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
    })
  }
	
	
	
	


 

}
