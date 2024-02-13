import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    isEditMode: boolean = false;
    constructor() { }

    ngOnInit() {
        
    }
    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }
}
