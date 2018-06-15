import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class childThree{
    configureRouter(config, router){
        this.router = router;
        config.map([ 
    {route: ['','blank'], name: 'blank', nav:true, moduleId: 'blank', title:'blank' },
    {route: 'childOne', name: 'childOne', nav:true, moduleId: 'childOne', title:'childOne' }
    ]);
    }
    goToChild(){
        this.router.navigateToRoute('childOne')
    }

}