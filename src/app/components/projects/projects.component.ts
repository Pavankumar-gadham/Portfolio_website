import { Component } from '@angular/core';
import { Project } from 'src/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Ecommerce Shopping Website',
      description: [
        'Built and deployed a full-stack eCommerce platform using Angular and Django REST Framework, implementing authentication, product APIs, and checkout workflows.',
        'Containerized frontend and backend with Docker and deployed on AWS EC2 behind an Nginx reverse proxy, improving deployment consistency and production reliability.',
      ],
      tech: ['Angular', 'DRF', 'Docker', 'AWS EC2', 'Nginx', 'SQLite', 'Jenkins'],
      image: 'assets/images/ecommerce.webp',
      liveLink: 'http://my-angular-frontend-demo-123.s3-website.eu-north-1.amazonaws.com/home',  
      codeLink: 'https://github.com/Pavankumar-gadham/django-angular-ecommerce-aws-'
    },

    {
      name: 'Recipe Manager',
      description: ['Developed a REST-based recipe management application using Django REST Framework and Angular with JWT-based authentication.',
      'Deployed the application on AWS EC2 using Docker, managed Linux-based servers, and collaborated via GitHub for version control and issue resolution.'],
      tech: ['Python', 'AWS EC2', 'Docker', 'Linux', 'Git', 'MySQL'],
      image: 'assets/images/recipe.jpeg',
      liveLink: 'http://foodie-frontend.s3-website.eu-north-1.amazonaws.com/',
      codeLink: 'https://github.com/Pavankumar-gadham/Foodie_Fullstack_DA'
    },
    {
      name: 'Food Ordering System',
      description: ['Developed a dynamic food ordering web app using Django REST Framework and Angular with secure JWT authentication.',
      'Integrated RESTful APIs and real-time order management features, enabling seamless remote frontend-backend communication.'],
      tech: ['Angular', 'Django', 'MySQL'],
      image: 'assets/images/food.jpg',
      liveLink: 'https://angular-frontends.vercel.app/home',
      codeLink: 'https://github.com/Pavankumar-gadham/Django-backend'
    },
    {
      name: 'Ecommerce Shopping Website',
      description: ['Built a scalable eCommerce platform and Angular with features like user authentication, product listings, and cart management.',
      'Optimized database queries and collaborated via GitHub and Trello in a remote workflow environment.'],
      tech: ['Angular', 'HTML', 'CSS', 'Javascript'],
      image: 'assets/images/shopping.jpeg',
      liveLink: 'https://e-commerce-shopping-azure.vercel.app/home',
      codeLink: 'https://github.com/Pavankumar-gadham/E-commerce-shopping'
    },
    {
      name: 'Image Search Application',
      description: ['Created a web-based image search tool leveraging third-party APIs and Django backend for query processing.',
      'Handled asynchronous API calls and integrated responsive Angular frontend for a smooth remote-accessible application.'],
      tech: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/images/image.jpeg',
      liveLink: 'https://image-search-seven-rouge.vercel.app/',
      codeLink: 'https://github.com/Pavankumar-gadham/Image-Search'
    },
    {
      name: 'Heart Disease Identification',
      description: ['Developed a machine learning-powered health application with Django for backend predictions and integrated REST APIs.',
      'Deployed in a remote test environment and coordinated issue tracking and model tuning via GitHub projects.'],
      tech: ['Machine Learning', 'Flask', 'Mysql', 'python'],
      image: 'assets/images/heart.avif',
      liveLink: 'https://github.com/Pavankumar-gadham/Heart-disease-prediction',
      codeLink: 'https://github.com/Pavankumar-gadham/Heart-disease-prediction'
    },
    {
      name: 'Login Registration Form',
      description: ['Designed a responsive, mobile-friendly login and registration UI using HTML, CSS, and vanilla JavaScript, implementing interactive form validations and animations.',
      'Deployed and tested the application in a remote environment, collaborating via GitHub for version control and issue tracking.'],
      tech: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/images/login.jpeg',
      liveLink: 'https://login-registration-form-xi.vercel.app/',
      codeLink: 'https://github.com/Pavankumar-gadham/Login-Registration-Form'
    },
  ];
}

