// angular import
import { Component, inject } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { EditOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public props
  title = 'mantis-free-version';
  private iconService = inject(IconService)

  ngOnInit() {
    this.iconService.addIcon(...[
      EditOutline
    ])
  }
}
