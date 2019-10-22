import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  private registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      employee_id: ['', Validators.required]
    });
  }

  ngOnInit() {}
  register(form) {
    this.authService.register(form.value).subscribe(
      (res) => {
        
        console.log(res);
        this.router.navigate(['/home']);
      }
    );
  }
  logForm() {
    console.log(this.registerForm);
  }
}
