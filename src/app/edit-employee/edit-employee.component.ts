import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(data => {
      console.log('data ', data)
      this.employee = data;
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee._id, this.employee).subscribe(() => {
      this.router.navigateByUrl('employees');
    });
  }
}
