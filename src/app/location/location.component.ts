import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Ilocation } from '../ilocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule,
            RouterModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input() location!: Ilocation;
}
