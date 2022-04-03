import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { environment } from "src/environments/environment";
import { SearchParamsService } from "../../services/searchParams.service";

@Component({
    selector: 'gs-search-track-top-bar',
    templateUrl: './search-track-top-bar.component.html',
    styleUrls: ['./search-track-top-bar.component.css']
})

export class SearchTrackTopBarComponent implements OnInit {
    private baseUrl = environment.apiUrl + "search/";
    @ViewChild("searchTopNav") searchTopNav: ElementRef;

    constructor(private searchParamsService: SearchParamsService, private router: Router) {
        
    }
    ngOnInit(): void {
    }
    
    onSearch() {
        this.router.navigateByUrl("search");
        this.searchParamsService.loadSearchParams(this.searchTopNav.nativeElement.value);
    }
    
    onReset() {
        this.searchTopNav.nativeElement.value = undefined;
    }
}