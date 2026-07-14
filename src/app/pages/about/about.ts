import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';

@Component({
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  appService = inject(AppService)

}