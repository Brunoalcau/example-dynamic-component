import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoaderDigibee } from '../container/component-loader-digibee';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css'],
  providers: [ComponentLoaderDigibee]
})
export class WidgetContainerComponent implements OnInit {
  @ViewChild('content', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() src = 'assets/config.json';

  constructor(private loader: ComponentLoaderDigibee, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loader.loadComponentConfig(this.src)
    .then(components => Promise.all(components.map(this.loadComp.bind(this))));
  }

  private loadComp(comp: any, index: number) {
    const componentFactory = this.resolver.resolveComponentFactory(comp);
    return this.container.createComponent(componentFactory, index, this.container.injector);
    // .then(factory => this.container.createComponent(factory, index, this.container.injector));
  }

}
