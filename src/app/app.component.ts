import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent, ListComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  searchTerm: string = '';

  onSearch(term: string) {
    this.searchTerm = term;
  }
}
