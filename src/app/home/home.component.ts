import { Component } from '@angular/core'
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FlowergalleryComponent } from '../flowergallery/flowergallery.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchbarComponent, FlowergalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
