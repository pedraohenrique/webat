<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/pedraohenrique/webat">
    <img src="client/public/logo-color-300px.png" alt="Logo" width="150" height="40">
  </a>

  <h3 align="center">We Bat Travel</h3>

  <p align="center">
    Wet Bat is a national travel agency chain that provides tour services to 50 countries around the world for thousands of families every year.
    <br />
    <br />
    <a href="https://github.com/pedraohenrique/webat">View Demo</a>
    ·
    <a href="https://github.com/pedraohenrique/webat/issues">Report Bug</a>
    ·
    <a href="https://github.com/pedraohenrique/webat/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

DISCLAIMER: This project is part of a coding challenge and it has no commercial purposes.

Client Goal:

Wet Bat wants to be globally recognized as a high quality service provider. To be able to invest more on the quality of service without reducing their profit margin, Wet Bat wants to reduce their operational cost in half by creating a lean and efficient operation.

Wet Bat creates around 200 quotes a day and provides in average 75 tours per month. Currently they have a portfolio of 10,000 clients and revenue of $5,000,000 yearly. One of the main FY2020 strategic actions is to implement an easy to use back-office solution that allows their staff to:

* Create and manage quotes
* Convert quotes into “services”
* Manage the programs (tours)
* Manage invoices
* View key business info



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project.

* React
* Redux
* Node.js
* Express
* Sequelize
* MySql

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedraohenrique/webat.git
   ```
2. Install NPM packages
   ```sh
   cd server
   npm install
   cd client
   npm install
   ```
3. Create the database (first time only!)   
   ```sh
   cd server
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```
4. Configure Database connection in `server/.env`
    ```
    DB_NAME=[DATABASE_NAME]
    DB_USER=[USER_NAME]
    DB_PWD=[USER_PWD]
    DB_HOST=[DATABASE_HOST]
    DB_PORT=[DATABASE_PORT]
    DB_DIALECT=mysql
    ```
5. For airport searching, get a free API Key at [https://airlabs.co/](https://airlabs.co/)

4. Configure client API connection in `client/.env`
   ```
    REACT_APP_API_URL=[SERVER_URL] ex.:  http://localhost:8000
    REACT_APP_AIRLABS_APIKEY='ENTER YOUR API'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Corado - [@pedraohenrique](https://twitter.com/pedraohenrique) - pedraohenrique@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/pedraohenrique/webat)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/pedraohenrique/webat.svg?style=for-the-badge
[contributors-url]: https://github.com/pedraohenrique/webat/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pedraohenrique/webat.svg?style=for-the-badge
[forks-url]: https://github.com/pedraohenrique/webat/network/members
[stars-shield]: https://img.shields.io/github/stars/pedraohenrique/webat.svg?style=for-the-badge
[stars-url]: https://github.com/pedraohenrique/webat/stargazers
[issues-shield]: https://img.shields.io/github/issues/pedraohenrique/webat.svg?style=for-the-badge
[issues-url]: https://github.com/pedraohenrique/webat/issues
[license-shield]: https://img.shields.io/github/license/pedraohenrique/webat.svg?style=for-the-badge
[license-url]: https://github.com/pedraohenrique/webat/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/pedro-corado
[product-screenshot]: client/public/screenshot.webp
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Nodejs.org]: https://img.shields.io/badge/Nodejs-0769AD?style=for-the-badge&logo=nodejs&logoColor=white
[Nodejs-url]: https://nodejs.org/