import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Car} from './commercial-cars';

@Injectable()
export class CarsService{

    constructor(private http:Http){
        console.log('Car Service Initialized...');
    }

    getCars(){
        return this.http.get('assets/cars.json').map(response=> <Car[]> response.json().carsData);
    }

    // addCar(newCar){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('/api/car', JSON.stringify(newCar), {headers: headers})
    //         .map(res => res.json());
    // }
    //
    // deleteCar(id){
    //     return this.http.delete('/api/car/'+id)
    //         .map(res => res.json());
    // }
    //
    // updateStatus(car){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/car/'+car._id, JSON.stringify(car), {headers: headers})
    //         .map(res => res.json());
    // }

    getCar(number :string) {
      return this.getCars().toPromise()
                 .then(cars => cars.filter(car => car.firm_number === number)[0]);

    }
}
