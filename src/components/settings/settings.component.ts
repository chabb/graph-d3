import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ViewEncapsulation
} from '@angular/core';



@Component({
  selector: 'lbl-settings',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './setting.component.html',
  styleUrls: ['./style.less']
})
export class SettingsComponent {

  nodes;

  constructor(private cdr: ChangeDetectorRef) {

  }

  public resetState() {
  }

}
