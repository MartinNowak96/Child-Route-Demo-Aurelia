import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class childTwo{
    configureRouter(config, router){
        this.router = router;
        config.map([ 
    {route: ['','blank'], name: 'blank', nav:true, moduleId: 'blank', title:'blank' },
    {route: 'childThree', name: 'childThree', nav:true, moduleId: 'childThree', title:'childThree' }
    ]);
    }
    goToChild(){
        this.router.navigateToRoute('childThree')
    }

}