import { ConvertToPipe } from './../../pipes/convert_to.pipe';
import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../components/loader/loader";

@Component({
  imports: [Loader, ConvertToPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  appService = inject(AppService)

}