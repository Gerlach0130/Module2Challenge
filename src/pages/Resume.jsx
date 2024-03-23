export default function ResumePage() {
    const technicalSkills = [
        'JavaScript', 'Node (Node.js)', 'Express (Express.js)', 'MySQL', 'MongoDB', 'Sequelize (ORM)', 'React (React.js)',
        'Mongoose', 'Insomnia', 'Git', 'jQuery', 'Bootstrap', 'CSS', 'GraphQL', 'Handlebars (Handlebars.js)',
        'Heroku', 'HTML', 'Jest', 'MVC', 'OOP', 'Vite', 'Webpack', 'State', 'Redux', 'Bootstrap', 'Tailwind', 'Flowbite'
    ];

    const otherExperience = [
        {
            title: 'Automotive Technician',
            company: 'Wilson County Chevrolet Buick GMC',
            location: 'Lebanon, TN USA',
            dates: '2020 - Current',
            responsibilities: [
                'Advanced diagnostics automotive gasoline technician specializing in current General Motors brands Chevrolet, GMC, Buick, Cadillac, and Corvette.',
                'Utilizing background in mechanical engineering, daily tasks comprise of verifying customer complaints of their vehicles',
                'and applying technical problem solving to correct any issues that arise.'
            ]
        },
        {
            title: 'Automotive Technician',
            company: 'Bridgestone Americas (Firestone Complete Auto Care)',
            location: 'Lebanon, TN USA',
            dates: '2015 - 2020',
            responsibilities: [
                'Started out as a General Service Automotive Technician and gained substantial experience',
                'and knowledge in mechanical engineering and technical problem solving'
            ]
        },
    ];

    return (
        <main className="resumeContainer">
            <h1 id="top">My Resume</h1>
            <div className="resume">
                <div id="skills">
                    <h3>Technical Skills</h3>
                    <div>
                        {technicalSkills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </div>
                </div>
                <div id="experience">
                    <h3>Other Experience</h3>
                    {otherExperience.map((job, index) => (
                        <div key={index}>
                            <h4>{job.title}</h4>
                            <p>{job.company}, {job.location}</p>
                            <p>{job.dates}</p>
                            <div>
                                {job.responsibilities.map((responsibility, index) => (
                                    <p key={index}>{responsibility}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="education">
                    <h3>Education</h3>
                    <p>
                        Vanderbilt Full Stack Web Development<br />
                        Vanderbilt University - Nashville, TN
                    </p>
                    <p>Back to <a href="#top">Top</a></p>
                </div>
            </div>
        </main>
    );
};