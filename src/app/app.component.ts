import { Component } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ApplicationAuthService } from './application-auth.service';
// import { AuthService } from './application-auth.service123213';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [AuthService]
})
export class AppComponent {
  title = '';

  constructor(private applicationAuthService: ApplicationAuthService,/*private authService: AuthService*/) {
  }

  onGoogleLogin = (): any => {
    this.applicationAuthService.googleAuth().then((res: any) => {
      debugger
    })
  }
}
