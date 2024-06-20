import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 
  private apiUrl = 'https://localhost:5001/api/schedule';

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${localStorage.getItem("user_Id")}`);
  }
  addLecture(lecture: Lecture): Observable<Lecture> {
    return this.http.post<Lecture>(`${this.apiUrl}/addLecture`, lecture);
  }

  updateLecture(lecture: Lecture): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/updateLecture/${lecture.id}`, lecture);
  }

  deleteLecture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteLecture/${id}`);
  }
}

export interface Lecture {
  id: number;
  title: string;
  time: string;
  dayScheduleId: number;
}

