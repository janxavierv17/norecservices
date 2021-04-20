import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listSiteDetails } from "../actions/siteActions"

export default function SiteScreen(props) {
    const dispatch = useDispatch()
    const siteDetails = useSelector(state => state.siteDetails)
    const { loading, error, site } = siteDetails
    useEffect(() => {
        dispatch(listSiteDetails(props.match.params.id))
    }, [props.match.params.id]) // Dependency a requirment in useEffect();
    console.log(site)
    return (
        <div>
            {loading
                ? <h1>Loading ....</h1>
                : <div> <h1>{site.name}</h1> <Link to="/">Go Home</Link> </div>}
        </div>
    )
}

