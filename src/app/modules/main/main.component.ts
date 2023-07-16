import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from './services/fetch-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
  status$: Observable<number> = this.fetchService.status$;
  constructor(private fetchService: FetchService) {}
}
