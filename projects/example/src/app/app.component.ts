import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Column } from 'spread-table';
import { RequiredValidator } from './custom-validators/required-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', width: 120 }),
    new Column({ displayName: 'Title', name: 'title', width: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', width: 300 }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', width: 300 })];

  data: any;

  constructor(private httpClient: HttpClient) {
    this.getData();
  }

  private async getData() {
    const products: any = await lastValueFrom(this.httpClient.get('../assets/data.json'));

    this.data = products;
  }
}
