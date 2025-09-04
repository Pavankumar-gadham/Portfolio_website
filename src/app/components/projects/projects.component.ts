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
      name: 'Recipe Manager',
      description: ['Designed a full-stack recipe management system with Django REST Framework, Angular, and JWT authentication.',
      'Collaborated asynchronously with a distributed team using GitHub and Slack to implement CRUD operations and resolve UI bugs.'],
      tech: ['Angular', 'DRF', 'Python'],
      image: 'assets/images/recipe.jpeg',
      liveLink: 'https://foodie-heaven-black.vercel.app/home',
      codeLink: 'https://github.com/Pavankumar-gadham/Foodieheaven_backend'
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

