import React, { useState } from 'react';
import MePhoto from '../../public/me.jpeg'

export default function AboutMe() {
    return (

        <section className="section box has-background-grey-lighter ml-0">
            <div className="container ml-0">
                <div className="columns ml-0">
                    <div className="column is-2 ml-0">
                        <h2 className="has-text-weight-bold is-size-4" id="about-me">About Me</h2>
                    </div>
                    <div className="column is-8 ml-0">
                        <p>
                            Hello! My name is Jay Moses and I am learning Full-Stack Web Development through UCSD Extension's Coding Bootcamp. Here are some samples of my work created through group projects and individually. Please contact me if you have any questions. Thank you!
                        </p>
                    </div>
                    <div className="column is-2 ml-0 box">
                        <img src={MePhoto} alt="Photo of Me" />
                    </div>
                </div>
            </div>

        </section>

    );
}
