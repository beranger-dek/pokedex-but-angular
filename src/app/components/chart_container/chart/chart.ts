import { ChartContainer } from '../chart_container';
import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  imports: [ChartContainer, BaseChartDirective],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
  standalone: true
})
export class Chart implements OnChanges {
  @Input() stats: { base_stat: number; stat: { name: string } }[] = [];

  public radarChartOptions: ChartConfiguration['options'] = {
    animation: {
    duration: 400,
    easing: 'easeOutQuart',
  },
  };
  public radarChartType: ChartType = 'radar';

  public radarChartData: ChartData<'radar'> = {
    labels: [],
    datasets: [{ data: [], label: 'Stats' }],
  };

  private titleCasePipe = new TitleCasePipe();

  ngOnChanges(): void {
    if (this.stats?.length) {
      this.radarChartData = {
        labels: this.stats.map(s => this.titleCasePipe.transform(s.stat.name)),
        datasets: [
          { data: this.stats.map(s => s.base_stat), label: 'Stats' },
        ],
      };
    }
  }
}