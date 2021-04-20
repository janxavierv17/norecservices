import React from "react"
import { Link } from "react-router-dom"
import GridListTileBar from '@material-ui/core/GridListTileBar';
export default function Site({ siteData }) {
    const fireDamper = siteData.fireDamper
    const fireDamperItems = fireDamper.map(fd => fd.fireDamperItems)
    const fireDamperImage = fireDamperItems.map((fd, index) => fd[index].image)
    return (
        <>
            {/* This anchor tag will later turn into a Link, React Router's component */}
            <Link to={`/sites/${siteData._id}`}>
                <img className="siteImages" src={fireDamperImage} alt={siteData.name} />
            </Link>
            <GridListTileBar
                title={siteData.name}
                subtitle={<span>{siteData.workType}</span>}
            />
        </>
    )
}