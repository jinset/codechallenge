import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IPost } from '../../shared/interface/call.interface';
import ApicallService from '../../shared/services/apicall.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export default class ListComponent {
    private apicallService = inject(ApicallService);
    dataApi: IPost[] = [];

    constructor() {
      this.getTheData();
    }

    getTheData() {
      this.apicallService.httpCall().subscribe((data: any) => {
        if (!data) {
          return;
        }
        this.dataApi = data;
      });
    }
 }
