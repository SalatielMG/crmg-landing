import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ServiceInterface } from '../service/service.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public services: ServiceInterface[] = [
    {
      title: 'Internet Residencial',
      srcImg: 'assets/images/slides/crmg-1.jpg',
      altImg: 'Internet Residencial',
      icon: 'fas fa-wifi'
    },
    {
      title: 'Venta de Fichas',
      srcImg: 'assets/images/slides/crmg-7.jpg',
      altImg: 'Venta de Fichas',
      icon: 'fas fa-mobile'
    },
    {
      title: 'Servicio Técnico',
      srcImg: 'assets/images/slides/crmg-8.jpg',
      altImg: 'Servicio Técnico',
      icon: 'fas fa-laptop'
    },
    {
      title: 'Seguridad Electrónica',
      srcImg: 'assets/images/slides/crmg-9.jpg',
      altImg: 'Seguridad Electrónica',
      icon: 'fas fa-shield-halved'
    },
    {
      title: 'Cotizaciones de Equipos',
      srcImg: 'assets/images/slides/crmg-6.jpg',
      altImg: 'Seguridad Electrónica',
      icon: 'fas fa-list'
    },
    {
      title: 'Soporte 24/7',
      srcImg: 'assets/images/slides/crmg-11.jpg',
      altImg: 'Soporte 24/7',
      icon: 'fas fa-headset'
    }
  ];

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
