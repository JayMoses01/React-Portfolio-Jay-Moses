import React from 'react';
import SlitherIn from './public/slither-in.png'
import NationalParksSearch from './public/national-park-search-main.png'
import EmployeeManagementSystem from './public/employee-tracker-01.png'
import WeatherDashboard from './public/weather-dashboard.png'
import ECommerce from './public/e-commerce-01.png'
import TextEditor from './public/text-editor-01.png'

const projects = [
    {
        id: 1,
        name: "'Slither-In', A Reptile Database",
        deployedLink: "https://slither-in.herokuapp.com/",
        gitHubLink: "https://github.com/niccolosaurus/slither-in",
        image: SlitherIn
    },
    {
        id: 2,
        name: "National Parks Search",
        deployedLink: "https://seyaryu.github.io/National-Park-Project/",
        gitHubLink: "https://github.com/JayMoses01/National-Park-Project",
        image: NationalParksSearch
    },
    {
        id: 3,
        name: "Employee Management System",
        deployedLink: "https://drive.google.com/file/d/10z2v4_x1kqpTTmM7qFNruR_o8t9npst4/view?usp=sharing",
        gitHubLink: "https://github.com/JayMoses01/hw-12-employee-tracker",
        image: EmployeeManagementSystem
    },
    {
        id: 4,
        name: "Weather Dashboard",
        deployedLink: "https://jaymoses01.github.io/hw-06-weather-dashboard/",
        gitHubLink: "https://github.com/JayMoses01/hw-06-weather-dashboard",
        image: WeatherDashboard
    },
    {
        id: 5,
        name: "E-Commerce Back End",
        deployedLink: "https://drive.google.com/file/d/1AyOMqsmuYQW7FD5abH8GOHpN7rebVVki/view?usp=sharing",
        gitHubLink: "https://github.com/JayMoses01/hw-13-e-commerce-back-end",
        image: ECommerce
    },
    {
        id: 6,
        name: "Text Editor Web App",
        deployedLink: "https://text-editor-web-app.herokuapp.com/",
        gitHubLink: "https://github.com/JayMoses01/Text-Editor-Web-App",
        image: TextEditor
    }
]

export default function Project() {
    return (
        <section className="section box ml-0 has-background-grey-lighter pl-0">

            <section className="section ml-0 pt-1">
                <div className="container ml-0">
                    <div className="columns ml-0">
                        <div className="column is-2 ml-0">
                            <h2 className="has-text-weight-bold is-size-4" id="work">Portfolio</h2>
                        </div>

                        <div class="column is-10 ml-0 box">
                            {projects.map(item => (
                                <div>
                                    <h3 className="pb-2 has-text-weight-bold" key={item.id}>{item.name}</h3>
                                    <div className="columns">
                                        <a className="column is-4" href={item.deployedLink}>Link to Deployed Application</a>
                                        <a className="column is-4" href={item.gitHubLink}>Link to GitHub Repository</a>
                                    </div>
                                    <a href={item.deployedLink}>
                                        <img src={item.image} alt={item.name} /></a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}
