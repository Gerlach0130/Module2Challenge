import Carousel from 'rsuite/Carousel';
import 'rsuite/Carousel/styles/index.css';

export default function PortfolioPage() {
    const projects = [
        {   
            img: 'images/tabletopties-img.png',
            title: 'TableTop Ties',
            siteLink: 'https://desolate-coast-16417-f21d4a060ca1.herokuapp.com/',
            repoLink: 'https://github.com/Gerlach0130/tabletop-ties',
            subtitle: 'Express/Node, MySQL, Handlebars',
            description: 'Matchmaking web application for tabletop and card game players'
        },
        {
            img: 'images/work-day-scheduler-img.png',
            title: 'Work Day Scheduler',
            siteLink: 'https://gerlach0130.github.io/work-day-scheduler/',
            repoLink: 'https://github.com/Gerlach0130/work-day-scheduler',
            subtitle: 'HTML, CSS, JavaScript, jQuery, DayJS',
            description: 'Front end application for a day planner that updates and real time and stores information locally'
        },
        {
            img: 'images/mysql-img.png',
            title: 'E-Commerce Back End',
            siteLink: 'https://drive.google.com/file/d/1_WHlcqbxiOsAEElsG1w-xHzp4IhLMktr/view',
            repoLink: 'https://github.com/Gerlach0130/e-commerce-back-end',
            subtitle: 'Node, Express, MySQL, Insomnia',
            description: 'Command line application for online retailers to manage their inventory'
        },
        {
            img: 'images/svg-logo-img.svg',
            title: 'Logo Generator',
            siteLink: 'https://drive.google.com/file/d/1RezODSgvvgI0fnVy1W-HMzTZdGHuHkMk/view',
            repoLink: 'https://github.com/Gerlach0130/simple-logo-generator',
            subtitle: 'Node, Inquirer, Jest, OOP',
            description: 'Command line application that generates a simple SVG logo based on user input'
        },
        {
            img: 'images/mongodb-img.png',
            title: 'Social Network API',
            siteLink: 'https://drive.google.com/file/d/1wTMZ1LB1EQYW1NcjTxvpDYrjHFANyPYa/view',
            repoLink: 'https://github.com/Gerlach0130/social-network-api',
            subtitle: 'Node, Express, MongoDB, Insomnia',
            description: 'Back end application for social media start up with users, friends, thoughts, and reactions'
        },
        {
            img: 'images/readme-img.svg',
            title: 'README Generator',
            siteLink: 'https://drive.google.com/file/d/11N6W7EnBUMySH0Vsx7sSMNdPjQRCpzg_/view',
            repoLink: 'https://github.com/Gerlach0130/node-readme-generator',
            subtitle: 'Node, Inquirer, Jest',
            description: 'Command line application that generates markdown via user input'
        }
    ];
    return (
        <div className="portfolio-page">
            <h1>My Portfolio</h1>
            <Carousel autoplay className="custom-slider">
                <div className="carousel1">
                    <a href={projects[0].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[0].siteLink}><img src='/images/redirect-icon.png'></img></a>
                </div>
                <div className="carousel2">
                    <a href={projects[1].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[1].siteLink}><img src='/images/redirect-icon.png'></img></a>
                </div>
                <div className="carousel3">
                    <a href={projects[2].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[2].siteLink}><img src='/images/redirect-icon.png'></img></a><br />
                    E-Commerce Back End
                </div>
                <div className="carousel4">
                    <a href={projects[3].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[3].siteLink}><img src='/images/redirect-icon.png'></img></a><br />
                    Logo Generator
                </div>
                <div className="carousel5">
                    <a href={projects[4].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[4].siteLink}><img src='/images/redirect-icon.png'></img></a><br />
                    Social Network API
                </div>
                <div className="carousel6">
                    <a href={projects[5].repoLink}><img src='/images/github-logo.png'></img></a>
                    <a href={projects[5].siteLink}><img src='/images/redirect-icon.png'></img></a><br />
                    Markdown Generator
                </div>
            </Carousel>
        </div>
    );
}