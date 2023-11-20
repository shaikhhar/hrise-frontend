import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  addEmployee() {
    const employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      position: this.position,
      department: this.department
    };
    console.log('employee ', employee);
    this.employeeService.addEmployee(employee).subscribe(() => {
      this.router.navigateByUrl('employees')
    });
  }
}
