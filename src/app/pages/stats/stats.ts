import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Chart } from "../../components/chart_container/chart/chart";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [Chart, TitleCasePipe],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  appService = inject(AppService)
}
