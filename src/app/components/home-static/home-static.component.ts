import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-static',
  templateUrl: './home-static.component.html',
  styleUrls: ['./home-static.component.css']
})
export class HomeStaticComponent implements OnInit{

    // constructor of the HomeComponent Class
    constructor(
      private router: Router,
      private userService: UserService
    ){}

  ngOnInit(): void {
    let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;
    regcomp.style.display="none";
  }
  
    // login button click function
    // This method will hide Register Component and Show Login Component
    clickLogin(){
      let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;
      let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;
      regcomp.style.display="none";
      logincomp.style.display="block";
    }
  
    // Sign up button click function
    // This method will hide Login Component and Show Register Component
    clickSignUp(){
      let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;
      let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;
      regcomp.style.display= "block";
      logincomp.style.display= "none";
      
    }
  
    login(user: User) {
      this.userService.Login(user)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['/dynamic-wall']);
            },
          error: (error: any) => {
            alert("Failed to login");
            console.error(error);
          }
        });
    }
  
    reg(user: User) {
      this.userService.createUser(user)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['/dynamic-wall']);
            },
          error: (error: any) => {
            alert("Failed to Register");
            console.error(error);
          }
        });
    }

}
