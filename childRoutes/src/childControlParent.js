

import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class childControlsParent{
    //everything in this has to do with the routerview on this page
    configureRouter(config,router) {
        this.selfRouter = router
        config.title = 'Aurelia';
        config.map([
            { route: '', name: 'blank', moduleId: 'blank'   },
            { route: 'child', name: 'child', moduleId: 'childOne' }
        ]);

        
    }

    constructor(Router){
        this.router= Router;
    }

    selfControl(){
        this.selfRouter.navigateToRoute('child');
    }
    parentControl(){
        //this was injected from the parent page
        this.router.navigateToRoute('childOne');
    }
}