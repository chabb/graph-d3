import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, OnDestroy,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'lbl-dashboard',
  encapsulation: ViewEncapsulation.None, // FIXME(chab) i think emulated encapsulation fails because d3 insert the nodes
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  constructor() {

  }


  public onConfigChange($event) {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
