import React from "react"
import SiteScreen from "./screens/SiteScreen"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"


import Box from '@material-ui/core/Box';
const App = () => {
  return (
    <Router >
      <Box component="div" m={2}>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/sites/:id" component={SiteScreen} />
          <Route path="/user/login" component={LoginScreen} />
        </main>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
