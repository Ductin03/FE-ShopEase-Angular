import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingService } from 'src/app/src/services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  loadingService = inject(LoadingService);
}
