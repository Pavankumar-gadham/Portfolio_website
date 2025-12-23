import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role:'DevOps Engineer Trainee',
      company:'ADYAHR BUSINESS SERVICES PRIVATE LIMITED',
      period: 'Dec 2023 - Present',
      description: [
            "•  Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment effort by ~30–40%.",
            "•  Automated build, test, and deployment workflows, reducing release time to ~20–30 minutes.",
            "•  Containerized backend and frontend services using Docker, improving deployment consistency across   environments.", 
            "•  Supported Kubernetes-based runtime environments, ensuring smooth rollouts and basic scalability.", 
            "•  Deployed and managed infrastructure on AWS (EC2, VPC, Security Groups) for reliable application delivery.",
            "•  Implemented monitoring and logging using AWS CloudWatch, reducing issue resolution time by ~25%.",
            "•  Collaborated with teams to resolve CI/CD and deployment issues, achieving ~95–98% deployment success rate."

          ]
      
    },
  ];
}
