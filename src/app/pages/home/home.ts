import { Component, inject, signal } from '@angular/core';
import { AppService } from '../../services/app-service';

@Component({
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appService = inject(AppService)

  signalTest = signal(0)
}
