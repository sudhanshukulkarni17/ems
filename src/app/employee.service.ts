import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/"

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    
    return this.httpClient.get<Employee[]>(`${this.baseUrl + "employees"}`);
  }

  createEmployee(employee : Employee):Observable<any>{

    return this.httpClient.post(`${this.baseUrl + "createEmployee"}`, employee);
  }

  getEmployeeById(id: number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl+ "employees"}/${id}`);
  }

  updateEmployee(id: number, employee: Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl+ "employees"}/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl+ "employees"}/${id}`);
  }
}
