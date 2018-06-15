export class sideBySide {
  configureRouter(config, router){
    this.router = router;
    config.map([ 
        { route: '', name: 'default', viewPorts: 
        { left: { route: '', moduleId: 'leftChild'},
         right: {route:'', moduleId: 'rightChild', name:'rightChild' } } }]);

  }

}