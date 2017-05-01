/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import { Observable } from 'rxjs';

import { AppsStoreService, NotificationService } from './../declarations-base';

import { ComponentBase } from './component-base';

export abstract class AppComponentBase extends ComponentBase {
    private appName$: Observable<string>;

    constructor(notifications: NotificationService,
        private readonly appsStore: AppsStoreService
    ) {
        super(notifications);

        this.appName$ = this.appsStore.selectedApp.map(a => a!.name).take(1);
    }

    public appName(): Observable<string> {
        return this.appName$;
    }
}
