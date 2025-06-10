import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Food Ordering System',
      description: 'Built with Django REST and Angular with cart & payment.',
      tech: ['Angular', 'Django', 'MySQL'],
      image: 'assets/images/food.jpg',
      liveLink: 'https://angular-frontends.vercel.app/home',
      codeLink: 'https://github.com/Pavankumar-gadham/Django-backend'
    },
    {
      name: 'Ecommerce Shopping Website',
      description: 'Shopping website with order and payment system',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/images/shopping.jpeg',
      liveLink: 'https://e-commerce-shopping-website-liart.vercel.app/',
      codeLink: 'https://github.com/Pavankumar-gadham/E-commerce-shopping-website'
    },
    {
      name: 'Image Search Application',
      description: 'Image search app with visual interactivity',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/images/image.jpeg',
      liveLink: 'https://image-search-seven-rouge.vercel.app/',
      codeLink: 'https://github.com/Pavankumar-gadham/Image-Search'
    },
    {
      name: 'Recipe Manager',
      description: 'RESTful app with advanced filtering and CRUD features.',
      tech: ['Angular', 'DRF', 'Python'],
      image: 'assets/images/recipe.jpeg',
      liveLink: '',
      codeLink: 'https://github.com/Pavankumar-gadham/E-commerce-RecipeHUb'
    },
    {
      name: 'Heart Disease Identification',
      description: 'Web app for identifyying heart problems accurately',
      tech: ['Machine Learning', 'Flask', 'Mysql', 'python'],
      image: 'assets/images/heart.avif',
      liveLink: 'https://github.com/Pavankumar-gadham/Heart-disease-prediction',
      codeLink: 'https://github.com/Pavankumar-gadham/Heart-disease-prediction'
    },
    {
      name: 'Login Registration Form',
      description: 'Login and user registration form.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/images/login.jpeg',
      liveLink: 'https://login-registration-form-xi.vercel.app/',
      codeLink: 'https://github.com/Pavankumar-gadham/Login-Registration-Form'
    },
  ];
}

