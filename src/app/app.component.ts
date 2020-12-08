import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from './services/fetch.service';
import { Joke } from './models/joke';
import { CatsPhoto } from './models/cats-photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'STKNG Progressive Web App';

  joke$: Observable<Joke>;
  catUrl$: Observable<CatsPhoto>;

  constructor (private fetchService: FetchService) { }

  ngOnInit(): void {
    this.joke$ = this.fetchService.getJoke();
    this.catUrl$ = this.fetchService.getCats();
  }

}
