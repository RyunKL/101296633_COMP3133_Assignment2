import { Component } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private graphqlService: GraphqlService) { }

  login(username: string, password: string) {
    this.graphqlService.login(username, password).subscribe(result => {
      console.log(result);
      // Handle successful login here
    }, error => {
      console.error('Error:', error);
      // Handle error
    });
  }
}
