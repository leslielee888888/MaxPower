import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OPEN_MEMBER_PROFILE_MODAL } from '../../maxpower-reducer/reducers/modal-reducer';
// import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute, private store: Store<any>) {

    }

    ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    onClick() {
        this.store.dispatch({ type: OPEN_MEMBER_PROFILE_MODAL })
    }
    // NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1) {
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
        }
    }
}
