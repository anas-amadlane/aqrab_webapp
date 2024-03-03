import {Component, OnInit} from "@angular/core";
import {User} from "../User";
import {SessionStorageService} from "../../session-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'seller-profil',
  templateUrl: 'UserProfileComponent.html',
  styleUrls :['UserProfilCss.css']
})
export class UserProfileComponent implements OnInit{
  user: User = new User();

  constructor(private storageService : SessionStorageService , private router: Router) {
  }
  ngOnInit(): void {
    this.user = this.storageService.getItem('currentUser');
  }

  logout(){
    this.storageService.clear();
    this.router.navigate(['/login']);
  }


}
