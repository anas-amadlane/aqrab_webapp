import {Component, OnInit} from "@angular/core";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";
import {UserService} from "../login/UserService";

@Component({
  selector: 'adminSelector',
  templateUrl: 'AdminComponent.html',
  styleUrls:['adminCss.css']
})
export class AdminComponent implements OnInit{
  page: number = 1;
  count: number = 0;
  loggedInUser: User = new User();
  tableSize: number = 8;
  sellersList = new Array<User>()
  constructor(
    private storageService : SessionStorageService,
    private userService:UserService

  ) {
  }
  ngOnInit(): void {
    this.loggedInUser = this.storageService.getItem('currentUser');
    this.getDataForAdmin();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getDataForAdmin();
  }
  getDataForAdmin():void{
    this.userService.getListSeller().subscribe(data=>{
      this.sellersList=data;
    });
  }
}
