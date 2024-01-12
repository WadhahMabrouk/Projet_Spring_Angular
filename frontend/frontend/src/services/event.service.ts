import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Event } from 'src/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  tab: Event[] = [];

  constructor(private httpClient: HttpClient) { }

  SaveEvent(event: Event): Observable<void> {
    return this.httpClient.post<void>("http://localhost:8084/evenements/evenement", event);
  }

  UpdateEvent(event: Event): Observable<void> {
    const id = event.id; // Assuming 'id' is a property in your Event model
    return this.httpClient.put<void>(`http://localhost:8084/evenements/evenement/${id}`, event);
  }

  getEventByid(id: string): Observable<Event> {
    return this.httpClient.get<Event>(`http://localhost:8084/evenement/${id}`);
  }

  deleteEventByid(id: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8084/evenements/${id}`);
  }

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>("http://localhost:8084/evenements").pipe(
      tap((events: Event[]) => {
        this.tab = events;
      })
    );
  }
}
