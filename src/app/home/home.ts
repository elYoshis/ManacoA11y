import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { Layout } from '../layout/layout';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',

})
export class Home {
  banner = 'assets/banner.jpg';
  zapato1 = 'assets/zapato1.jpg';
  zapato2 = 'assets/zapato2.jpg';
  zapato3 = 'assets/zapato3.jpg';
}
