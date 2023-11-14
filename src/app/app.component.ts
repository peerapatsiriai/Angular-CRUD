import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  title = 'my-app';
  fetchedData: any[] = [] // Initialize as an empty array

  constructor(private dataService: DataService) {}
  
  input1Value: string = '';
  input2Value: string = '';

  ngOnInit() {
    this.dataService.fetchData().subscribe((data) => {
      // console.log(data);
      
      this.fetchedData = data; // Access the "Data" property
    });
  }

  sendValues(input1: string, input2: string): void {
    this.input1Value = input1;
    this.input2Value = input2;
    const Data = {
      "Name": input1,
      "price": input2
    }
    this.dataService.insertData(Data).subscribe(
      (response) => {
        console.log('Data successfully inserted:', response);
        alert('Data successfully inserted');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error inserting data:', error);
        alert('Error inserting data');
      }
    );
    
  }

  deleteItem(item: any): void {
    // Call the deleteData function from your service to send a delete request to the API
    this.dataService.deleteData(item).subscribe(
      (response) => {
        console.log('Item deleted:', item);
        alert('Item deleted'); // Remove the item from the array
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting item:', error);
        alert('Error deleting item');
      }
    );
  }
  
}
