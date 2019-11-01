import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  searchQuery: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  updateSearchParams(){
    this.router.navigate(['items'],{
      relativeTo: this.activatedRoute,
      queryParams: { search: this.searchQuery },
      queryParamsHandling: 'merge'
    });
  }



}
