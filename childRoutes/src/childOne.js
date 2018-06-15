import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class childOne{
    configureRouter(config, router){
        this.router = router;
        config.map([ 
    {route: ['','blank'], name: 'blank', nav:true, moduleId: 'blank', title:'blank' },
    {route: 'childTwo', name: 'childTwo', nav:true, moduleId: 'childTwo', title:'childTwo' }
    ]);
    }
    goToChild(){
        this.router.navigateToRoute('childTwo')
    }

}