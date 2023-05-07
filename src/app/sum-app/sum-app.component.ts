import { Component } from '@angular/core';
import {SumAppService} from "../sum-app/sum-app.service";

@Component({
  selector: 'app-sum-app',
  templateUrl: './sum-app.component.html',
  styleUrls: ['./sum-app.component.css']
})
export class SumAppComponent {
  sumInfo: any;

  constructor(private sumAppService: SumAppService) { }

  ngOnInit(): void {
    // Obtener los datos de la API
    this.sumAppService.getMachineInfo().subscribe(data => {
      this.sumInfo = data
    });
  }
}
