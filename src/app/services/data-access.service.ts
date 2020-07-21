import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, mergeAll, zipAll } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private afs:AngularFirestore) { 
      
  }
  
	
	
	
  addListing(userId, listing) {
   
     return this.afs.collection<any>(`userListings/${userId}/listings`).add(listing);
     
  }

  getListings(userId){
    return this.afs.collection<any>(`userListings/${userId}/listings`).valueChanges();
   
  }
  
  getProfileData(userId){
    return this.afs.doc<any>(`users/${userId}`).valueChanges();
   
  }
  getAllListings() {
    return this.afs.collectionGroup('listings').valueChanges();
  }
  
  updateName(id,n1,n2 ,n3){
	  this.afs.doc(`users/${id}`).update({firstName:n1  , lastName:n2 , phone:n3 });
  }


  
}
