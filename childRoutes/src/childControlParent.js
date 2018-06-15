

import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class childControlsParent{
    configureRouter(config,router) {
        this.selfRouter = router
        config.title = 'Aurelia';
        config.map([
            { route: '', name: 'blank', viewPorts: { child: { moduleId: 'blank' } } },
            { route: 'parent', name: 'parent',  moduleId: 'childThree'  },
            { route: 'child', name: 'child',  viewPorts: { child:{ moduleId: 'childOne'  }}}
        ]);

        
    }

    constructor(Router){
        this.router= Router;
    }

    selfControl(){
        this.selfRouter.navigateToRoute('child');
    }
    parentControl(){
        this.router.navigateToRoute('childOne');
    }
}