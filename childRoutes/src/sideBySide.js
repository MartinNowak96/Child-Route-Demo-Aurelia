import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)

export class sideBySide {
  configureRouter(config, router){
    this.router = router;
    config.map([ 
        { route: '', name: 'blank', viewPorts: 
        { left: { route: '', moduleId: 'leftChild', viewPorts:{ moduleId:'leftChild' }},

         right: {route:'', moduleId: 'rightChild', name:'rightChild' } } }]);

  }
 constructor(router)
  {
   this.router= router
  }


  goToChild(){
    this.router.navigateToRoute('childOne')
  }


}