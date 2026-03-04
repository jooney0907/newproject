import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SettingsComponent {}
