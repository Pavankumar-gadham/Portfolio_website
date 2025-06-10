import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Millenium Intech Pvt Ltd',
      period: 'sep 2023 - Present',
      description: [
            "•  Developed and deployed full-stack web applications using Angular for the frontend and Django REST Framework for the backend.",
            "•  Implemented responsive UI designs and optimized API calls for better performance.",
            "•  Integrated RESTful APIs to handle 500+ daily requests with real-time frontend-backend communication.", 
            "•  Optimized API response time by 40% using SQL tuning and Redis caching.", 
            "•  Collaborated with a 5+ member team to deploy, fix 95% of bugs, and enhance UI/UX, boosting user satisfaction by",
            "•  Collaborated with a team to debug and resolve issues in production."
          ]
      
    },
  ];
}
