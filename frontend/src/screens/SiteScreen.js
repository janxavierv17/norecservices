import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
export default function SiteScreen(props) {
    const [siteData, setSiteData] = useState({})
    useEffect(() => {
        const fetchSite = async () => {
            const { data } = await axios.get(`/api/sites/${props.match.params.id}`)
            setSiteData(data)
        }
        fetchSite()
    }, [props.match.params.id]) // Dependency a requirment in useEffect();
    return (

        <div>
            <h1>{siteData.name}</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}

