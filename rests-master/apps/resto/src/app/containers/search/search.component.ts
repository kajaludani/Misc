import { Component, OnInit } from '@angular/core';
import { RessearchService } from '../../ressearch.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'test13-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies$: Observable<any[]>;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(private ressearchService:RessearchService) { }

  ngOnInit() {
    this.movies$ = this.ressearchService.getMovies(this.startAt);
  }

  search(searchText) {
    this.startAt.next(searchText);
  }

}
