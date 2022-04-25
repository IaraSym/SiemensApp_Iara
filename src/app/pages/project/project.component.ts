import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  name: string;
  startdate: string;
  enddate: string;
  status: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'First project', startdate: '10-05-2015', enddate: '15-11-2015', status:100},
  {name: 'Second project', startdate: '02-01-2016', enddate: '31-08-2017', status:100},
  {name: 'Third project', startdate: '31-09-2017', enddate: '20-04-2022', status:56},
  {name: 'Fifth project', startdate: '28-04-2021', enddate: '01-01-2021', status:100},
  {name: 'Sixth project', startdate: '10-05-2021', enddate: '20-14-2022', status:20},
  {name: 'Seventh project', startdate: '27-01-2022', enddate: '20-04-2022', status:98},
  
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  displayedColumns: string[] = ['name', 'startdate', 'enddate', 'status', 'action'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }

}
