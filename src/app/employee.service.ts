// employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployee(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee: any) {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(id: string, employee: any) {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
