import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/items'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  insertData(Data: any) {
    return this.http.post(this.apiUrl, Data);
  }

  deleteData(item: any) {
    // Construct the delete URL, assuming item has an ID property
    const deleteUrl = `${this.apiUrl}/${item}`;
    return this.http.delete(deleteUrl);
  }
}
