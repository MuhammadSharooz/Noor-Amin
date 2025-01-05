import React from 'react'
import './Project.css'
import coffero from './one/coffero.webp'
import hresque from './one/Hresque.webp'
import jazel from './one/Jazel.jpeg'
import Sauced from './one/Sauced.webp'
import Card from './Card/Card'

const Project = (props) => {
    return (

        <div id='projects' >
            <h1 id='project-heading' >Projects</h1>
            <div className="all-cards">
                <Card image={coffero} title="Coffero Cafe" source="https://coffero-cafe-react.web.app/" />
                <Card image={hresque} title="Hresque" source="https://markcoders.hresque.com/" />
                <Card image={jazel} title="Jazel" source="https://sodaexports.netlify.app/Inventory-snapshot" />
                <Card image={Sauced} title="Sauced" source="https://app.saucedapp.com/" />
                
            </div>
        </div>

    )
}

export default Project

