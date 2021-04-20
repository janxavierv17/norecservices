import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listSites } from "../actions/siteActions"
import Site from "../components/Site"
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
    const classes = useStyles();
    const dispatch = useDispatch();
    const siteList = useSelector(state => state.siteList)
    const { loading, error, sites } = siteList
    useEffect(() => {
        dispatch(listSites())
    }, [dispatch]) // Dependency a requirment in useEffect();

    return (
        <div >
            <h3>Rectification Sites</h3>
            {loading
                ? <h1>Loading ...</h1>
                : error
                    ? <h3>{error}</h3>
                    :
                    <GridList className={classes.root}>
                        {sites.map(site => (
                            <GridListTile
                                key={site._id}>
                                <Site siteData={site} />
                            </GridListTile>
                        ))}
                    </GridList>
            }
        </div>
    )
}