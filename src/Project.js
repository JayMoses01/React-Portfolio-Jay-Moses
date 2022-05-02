import React, { useState } from 'react';
import SlitherIn from './public/slither-in.png'
import NationalParksSearch from './public/national-park-search-main.png'
import EmployeeManagementSystem from './public/employee-tracker-01.png'
import WeatherDashboard from './public/weather-dashboard.png'


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
                        <h3 className="pb-2 has-text-weight-bold">"Slither-In", A Reptile Database</h3>
                        <div className="columns">
                            <a className="column is-4" href="https://slither-in.herokuapp.com/">Link to Deployed Application</a>
                            <a className="column is-4" href="https://github.com/niccolosaurus/slither-in">Link to GitHub Repository</a>
                        </div>
                        <a href="https://slither-in.herokuapp.com/">
                        <img src={SlitherIn} alt="Slither-In"/></a>
                    </div>

                </div>
            </div>
        </section>
    
        <section className="section ml-0">
            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0">
                    </div>
                    <div className="column is-10 ml-0 box">
                        <h3 className="pb-2 has-text-weight-bold">National Parks Search</h3>
                        <div className="columns">
                            <a className="column is-4" href="https://seyaryu.github.io/National-Park-Project/">Link to Deployed Application</a>
                            <a className="column is-4" href="https://github.com/JayMoses01/National-Park-Project">Link to GitHub Repository</a>
                        </div>
                        <a href="https://seyaryu.github.io/National-Park-Project/">
                        <img src={NationalParksSearch} alt="National Parks Search"/></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="section ml-0">
            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0">
                    </div>
                    <div className="column is-10 ml-0 box">
                        <h3 className="pb-2 has-text-weight-bold">Employee Management System</h3>
                        <div className="columns">
                            <a className="column is-4" href="https://drive.google.com/file/d/10z2v4_x1kqpTTmM7qFNruR_o8t9npst4/view?usp=sharing">Link to Walkthrough Demo</a>
                            <a className="column is-4" href="https://github.com/JayMoses01/hw-12-employee-tracker">Link to GitHub Repository</a>
                        </div>
                        <div className="is-flex is-justify-content-center">
                            <a href="https://drive.google.com/file/d/10z2v4_x1kqpTTmM7qFNruR_o8t9npst4/view?usp=sharing">
                                <img src={EmployeeManagementSystem}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section ml-0">
            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0">
                    </div>
                    <div className="column is-10 ml-0 box">
                        <h3 className="pb-2 has-text-weight-bold">Weather Dashboard</h3>
                        <div className="columns">
                            <a className="column is-4" href="https://jaymoses01.github.io/hw-06-weather-dashboard/">Link to Deployed Application</a>
                            <a className="column is-4" href="https://github.com/JayMoses01/hw-06-weather-dashboard">Link to GitHub Repository</a>
                        </div>
                        <a href="https://jaymoses01.github.io/hw-06-weather-dashboard/">
                            <img src={WeatherDashboard} alt="Weather Dashboard"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    </section>
    );
}
