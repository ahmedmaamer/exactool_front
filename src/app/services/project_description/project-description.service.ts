import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDescription } from 'models/ProjectDescription';
import { ProjectDesc } from 'models/ProjectDesc';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionService {

  
  constructor(private httpclt:HttpClient) { 
  }

  createProjectDescription(projectDescription: ProjectDesc): Observable<object>
  {
    return this.httpclt.post<ProjectDesc>("http://localhost:8002/CreateProjectDescription", projectDescription);
  }

  getAllProjects():Observable<ProjectDescription[]>
  {
    return this.httpclt.get<ProjectDescription[]>("http://localhost:8003/api/project-descriptions")
  }
}
