import React, { useState } from 'react';

export default function Resume() {
    return (
        <section className="section ml-0 has-background-grey-lighter">
            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0">
                        <h2 className="has-text-weight-bold is-size-4" id="skills">Skills</h2>
                    </div>

                    <div className="content">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>APIs</li>
                            <li>T-SQL</li>
                            <li>MySQL/MySQL2</li>
                            <li>Express.js</li>
                            <li>Sequelize</li>
                            <li>Handlebars.js</li>
                            <li>Node.js</li>
                            <li>React</li>
                        </ul>

                    </div>

                </div>
            </div>

            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0 my-4">
                        <h2 className="has-text-weight-bold is-size-4" id="skills">Resume</h2>
                    </div>

                    {/* <div className="content">
                        <a className="has-text-black has-text-weight-bold" href="./public/JayMoses_Resume.docx">
                            Jay Moses
                        </a>

                    </div> */}

                    <div className="column is-2 ml-0 is-vcentered my-4">
                        <a className="is-vcentered" href="./public/JayMoses_Resume.docx" download>
                            Download Resume - Jay Moses
                        </a>
                    </div>

                </div>
            </div>


        </section>

    );
}
