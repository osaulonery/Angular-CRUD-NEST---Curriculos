import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculo-add',
  templateUrl: './curriculo-add.component.html',
  styleUrls: ['./curriculo-add.component.css'],
})
export class CurriculoAddComponent implements OnInit {
  primeiroFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  segundoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  terceiroFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  quartoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  quintoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sextoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sétimoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  oitavoFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {}

  voltarHome(): void {
    this.route.navigate(['/home']);
  }
}
