import { Component, inject, signal } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../components/loader/loader";
import { TitleCasePipe } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [Loader, TitleCasePipe, JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appService = inject(AppService)

  signalTest = signal(0)
}
