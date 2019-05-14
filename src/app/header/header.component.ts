import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

    constructor(private dataStorage: DataStorageService) {}

    ngOnInit() {
    }

    onFetchRecipes() {
        this.dataStorage.fetchRecipes();
    }

    onSaveRecipes() {
        this.dataStorage.storeRecipes().subscribe((response: HttpResponse<any>) => {
            if (response.ok) {
                alert('Data saved');
            }
        });
    }
}
