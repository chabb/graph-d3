import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { select } from 'd3-selection';

@Component({
  selector: 'lbl-dashboard',
  encapsulation: ViewEncapsulation.None, // FIXME(chab) i think emulated encapsulation fails because d3 insert the nodes
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  constructor() {}

  @ViewChild('pipelineGraphContainer', { static: false })
  pipelineGraphContainer: ElementRef;

  private svgNode;
  private graphContainer;

  private nodes = [
    { ui: { x: 20, y: 100 } },
    { ui: { x: 30, y: 200 } },
    { ui: { x: 1000, y: 200 } }
  ];

  ngAfterViewInit() {
    this.renderShell();
  }

  private renderShell() {
    this.graphContainer = select('svg');
    this.svgNode = this.graphContainer.select('svg');
  }

  ngOnDestroy() {}
}
