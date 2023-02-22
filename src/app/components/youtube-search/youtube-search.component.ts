import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss'],
})
export class YoutubeSearchComponent {
  query: FormControl = new FormControl('');

  constructor(private http: HttpClient) {}

  onClick() {
    // this.query.valueChanges
    //   .pipe(
    //     debounceTime(750),
    //     distinctUntilChanged(),
    //     switchMap((test) =>
    //       this.http
    //         .get(this.tempUrl)
    //         .pipe(
    //           map((articles) =>
    //             articles.filter((article) =>
    //               article.attributes.title.includes(test)
    //             )
    //           )
    //         )
    //     )
    //   )
    //   .subscribe((data) => {
    //     this.searchInitiated = true;
    //     if (this.query.value === '') {
    //       this.searchInitiated = false;
    //       this.articles = [];
    //     } else {
    //       this.articles = data;
    //     }
    //   });
  }
}
