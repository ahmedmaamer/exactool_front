import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDescriptionService } from 'app/services/project_description/project-description.service';
import { ProjectDescription } from 'models/ProjectDescription';
import { ProjectDesc } from 'models/ProjectDesc';

@Component({
  selector: 'app-table-description',
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.css']
})
export class TableDescriptionComponent implements OnInit {
  projectDto:ProjectDesc = new ProjectDesc();
  projectDescription:ProjectDescription = this.projectDto.projectDescription;
  selectedSource: string = 'Select Source';
  co2Result: number = 0;
  ch4Result: number = 0;
  n2oResult: number = 0;

  constructor(private projectService:ProjectDescriptionService , private route:Router) { }

  ngOnInit(): void {
  }

private saveProject()
{
  this.projectService.createProjectDescription(this.projectDto).subscribe(data =>{
    console.log(data);
    
    },
    error =>console.log(error));
} 

onSubmit(){
  console.log(this.projectDto);
  this.saveProject();
};

 
  





updateResults() {
  switch (this.selectedSource) {
    case '100yr SAR':
      this.co2Result = 1;
      this.ch4Result = 21;
      this.n2oResult = 310;
      break;
    case '100yr AR4':
      this.co2Result = 1;
      this.ch4Result = 25;
      this.n2oResult = 298;
      break;
    case '100yr AR5 with CC feedback':
      this.co2Result = 1;
      this.ch4Result = 34;
      this.n2oResult = 298;
      break;
    default:
      this.co2Result = 0;
      this.ch4Result = 0;
      this.n2oResult = 0;
      break;
  }
}

}
