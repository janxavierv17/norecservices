import React, { useState, useEffect } from "react"
import Site from "../components/Site"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        overflow: "hidden",
    }

}))

export default function HomeScreen() {
    const [sites, setSites] = useState([])
    useEffect(() => {
        const fetchSites = async () => {
            const { data } = await axios.get("/api/sites")
            setSites(data)
        }
        fetchSites()
    }, []) // Dependency a requirment in useEffect();

    const classes = useStyles();
    return (
        <div >
            <h3>Rectification Sites</h3>
            <GridList className={classes.root}>
                {sites.map(site => (
                    <GridListTile
                        key={site.id}>
                        <Site siteData={site} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}