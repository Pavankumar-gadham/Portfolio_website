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
      period: 'Dec 2023 - Nov 2025',
      description: [
            "•  Built and maintained CI/CD pipelines using GitHub Actions/Jenkins to automate builds, testing, and deployment for backend and frontend services.",
            "•  Containerized applications using Docker and optimized images, reducing deployment time by 30%.",
            "•  Managed deployments on Render and cloud-like environments, achieving 99.9% uptime and zero‑downtime rollouts.", 
            "•  Monitored logs, application performance, and errors using built‑in monitoring tools, improving system reliability by 40%.", 
            "•  Collaborated with remote and on‑site teams via GitHub, Slack, and Agile boards to resolve 95% of deployment and integration issues.",
            "•  Automated scheduled tasks and background jobs using Celery/cron to improve operational efficiency."
          ]
      
    },
  ];
}
