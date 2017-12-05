
import { SystemJsNgModuleLoader, Injectable } from '@angular/core';

@Injectable()
export class ComponentLoaderDigibee {

  constructor(private _loader: SystemJsNgModuleLoader) {}
  loadComponentConfig(url) {

    return fetch(url)
      .then(res => res.json())
      .then(componentList => Promise.all(componentList.map(this.loadComponent.bind(this))));
  }
  loadComponent(configObject) {
    return System.import(`../${configObject.path}`)
      .then(componentModule => componentModule[configObject.component]);
    // .then(componentModule => componentModule[configObject.component]);
    // System.import('');
    // System.import(comp).then(x => console.log(x));
    // import('../widget-1').then(c => console.log(c));
    // return import('../widget-1')

  }
}
