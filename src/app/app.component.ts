import {
    Component
}
from '@angular/core';

@
Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '22227 Paul miller BMW';
     columnDefs = [
        {
            headerName: 'Make',
            field: 'make'
        },
        {
            headerName: 'Model',
            field: 'model'
        },
        {
            headerName: 'Price',
            field: 'price'
        }
    ];

    rowData = [
        {
            make: 'Toyota',
            model: 'Celica',
            price: 35000
        },
        {
            make: 'Ford',
            model: 'Mondeo',
            price: 32000
        },
        {
            make: 'Porsche',
            model: 'Boxter',
            price: 72000
        }
    ];
}