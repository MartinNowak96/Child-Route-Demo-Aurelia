import 'bootstrap';

import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class App {
  configureRouter(config, router){
    this.router = router;
    config.map([ 
{route: ['','blank'], name: 'blank', nav:true, moduleId: 'blank', title:'blank' },
{route: 'sideBySide', name: 'sideBySide', nav:true, moduleId: 'sideBySide', title:'sideBySide' },
{route: 'childOne', name: 'childOne', nav:true, moduleId: 'childOne', title:'childOne' }
]);

  }
 constructor(router)
  {
   this.router= router
  }


  goToChild(){
    this.router.navigateToRoute('childOne');
  }

  goToSideBySide(){
    this.router.navigateToRoute('sideBySide');
  }

}
