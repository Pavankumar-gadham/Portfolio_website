import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role:'DevOps Engineer',
      company:'ADYAHR BUSINESS SERVICES PRIVATE LIMITED',
      period: 'Dec 2023 - Present',
      description: [
            "•  Managed AWS infrastructure supporting development and production environments.",
            "•  Provisioned cloud resources including EC2 instances, S3 buckets, IAM roles, VPC components, and security groups.",
            "•  Designed and maintained Terraform configurations for infrastructure provisioning and environment setup.", 
            "•  Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate application build and deployment.", 
            "•  Containerized backend services using Docker and managed image builds and version control.",
            "•  Configured CloudWatch dashboards and alerts for monitoring system health and application logs.",
            "•  Performed Linux server administration, deployment troubleshooting, and runtime issue resolution."

          ]
      
    },
  ];
}
