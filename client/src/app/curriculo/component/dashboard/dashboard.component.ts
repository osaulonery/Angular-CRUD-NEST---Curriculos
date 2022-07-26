import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  voltarAdmin() {
    this.route.navigate(['/curriculo/admin']);
  }
}