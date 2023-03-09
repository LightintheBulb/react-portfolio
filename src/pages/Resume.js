import React from 'react';
import Proficiencies from '../components/ProficienciesList';
import ResumeSection from '../components/resumecomponent';
import './Resume.css'


export default function Resume() {
    return (
        <div className="container-fluid custom-about-container pb-1">
        <Proficiencies />
        <ResumeSection />
        </div>
    );
}



//   return (
//     <div>
//       <h1 className='coming-soon-header'>Proficiencies</h1>
//         <div className='proficiencies'>
//             {proficienciesData.map((Proficiencies) => {
//                 return(
//                 <>
//                     <div className='proficiencies-list'>
//                         <ul>

//                         </ul>
//                     </div>
//                 </>
//                 );
//                 console.log(proficienciesData);
//             })}
//             <div className='proficiencies-list'> 
//                 <ul>
//                     <li>HTML</li>
//                     <li>CSS</li>
//                     <li>JavaScript</li>
//                     <li>jQuery</li>
//                     <li>Bootstrap</li>
//                     <li>Node.js</li>
//                     <li>Express.js</li>
//                     <li>React.js</li>
//                     <li>MySQL</li>
//                     <li>MongoDB</li>
//                     <li>Sequelize</li>
//                     <li>Mongoose</li>
//                     <li>Handlebars.js</li>
//                     <li>RESTful APIs</li>
//                     <li>GraphQL</li>
//                     <li>JSON</li>
//                     <li>Git</li>
//                     <li>GitHub</li>
//                     <li>Heroku</li>
//                     <li>Command Line</li>
//                     <li>Object Oriented Programming</li>
//                     <li>Agile Methodologies</li>
//                 </ul>
//             </div>
        
//             </div>


//     </div>

//   );
// }