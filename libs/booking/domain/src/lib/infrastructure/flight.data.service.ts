import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createFlightDescription, createFlightId, createFlightName, Flight } from '../entities/flight';

@Injectable({ providedIn: 'root' })
export class FlightDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Flight[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Flight[]>(url, {params, headers});
        */

    return of([
      { id: createFlightId(1), name: createFlightName('Lorem ipsum'), description: createFlightDescription('Lorem ipsum dolor sit amet') },
      {
        id: createFlightId(2),
        name: createFlightName('At vero eos'),
        description: createFlightDescription('At vero eos et accusam et justo duo dolores'),
      },
      {
        id: createFlightId(3),
        name: createFlightName('Duis autem'),
        description: createFlightDescription('Duis autem vel eum iriure dolor in hendrerit'),
      },
    ]);
  }
}
