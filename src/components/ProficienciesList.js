import React from "react";

export default function Proficiencies() {
    const proficienciesData = [
        {
            listTitle: "Front End Proficiencies",
            listItems: [
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
                "Bootstrap",
                "React.js",
                "Handlebars.js",
                "Agile Methodologies"
            ].map((item) => <li key={item}>{item}</li>)
        },
        {
            listTitle: "Back End Proficiencies",
            listItems: [
                "Node.js",
                "Express.js",
                "MySQL",
                "MongoDB",
                "Sequelize",
                "Mongoose",
                "RESTful APIs",
                "GraphQL"
            ].map((item) => <li key={item}>{item}</li>)
        },
        {
            listTitle: "Other Proficiencies",
            listItems: [
                "Git",
                "GitHub",
                "Heroku",
                "Command Line",
                "Object Oriented Programming"
            ].map((item) => <li key={item}>{item}</li>)
        },
    ];
    return (
        <div className="proficiencies-section">
            <h1 className='section-header'>Proficiencies</h1>
            <hr id='proficiencies-hr'/>
            <div className='proficiencies-container'>
                {proficienciesData.map((Proficiencies) => {
                    return(
                    <>
                    <div className='proficiency-list-title'>
                        <h4 id="listTitle">{Proficiencies.listTitle}</h4>
                        <div id='lists' className='proficiencies-list'>
                            <ul id="items">{Proficiencies.listItems}</ul>
                        </div>
                        </div>
                    </>
                    );
                })}
                </div>
        </div>
    );
}
