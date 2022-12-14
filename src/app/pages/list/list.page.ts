import { Component, OnInit } from '@angular/core';
import { UserCrudService } from './../../services/user-crud.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  Users: any = [];

  constructor( 
    private authService: AuthenticationService,
    private userCrudService: UserCrudService,
    private router: Router
  ) { }

  ngOnInit() {  }

  ionViewDidEnter() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  removeUser(user, i) {
    if (window.confirm('I gotta cool down it HEATED')) {
      this.userCrudService.deleteUser(user.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('User deleted!')
        }
      )
    }
  }

  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

}
