import { Component } from '@angular/core';

import { Form } from './form';
import { NrelService } from './nrel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private nrel:NrelService) {  }

  title = 'Scanifly';

  model = new Form("json", "QDNgWoKJ33hxwF60jh0BhtnOmaoJZpKeOzhlXHpn", "hourly");
  request_url: string = '';
  doy: number = -1;
  results: any[] = [];
  form = true;
  loading = false;

  submitForm() {
    this.loading = true;
    this.request_url = `https://developer.nrel.gov/api/pvwatts/v6.${this.model.format}?api_key=${this.model.api_key}&lat=${this.model.lat}&lon=${this.model.lon}&system_capacity=${this.model.system_capacity}&azimuth=${this.model.azimuth}&tilt=${this.model.tilt}&array_type=${this.model.array_type}&module_type=${this.model.module_type}&losses=${this.model.losses}&timeframe=${this.model.timeframe}`;

    this.nrel.submit_to_NREL(this.request_url).subscribe((data: any) => {
      for(let i=0; i<data.outputs.ac.length; i++) {
        if(i%24 === 0) {
          this.doy++;
          this.results[this.doy] = [];
        }
        this.results[this.doy][i%24] = {"ac":data.outputs.ac[i], "poa": data.outputs.poa[i]};
      }
      this.loading = false;
    })
    this.form = false;
  }

  back2Form() {
    this.form = true;
  }
}
