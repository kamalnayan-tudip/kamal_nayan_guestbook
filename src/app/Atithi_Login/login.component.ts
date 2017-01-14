import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({

    selector: 'login',
    templateUrl: 'app/Atithi_Login/login.component.html'
  })

export class LoginComponent implements OnInit{

  submitted=false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
    onSubmit()  {
      this.submitted=true;
    }
}



