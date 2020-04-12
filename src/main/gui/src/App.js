import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CarInfoComponent from "./components/CarInfoComponent";



class App extends Component {

    render() {
        return (
            <div style={{marginTop:"20px"}}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={8}>
                    <Grid item md={1} display={{ sm: "none", lg: "block" }}/>
                    <Grid item md={3} sm={4}>
                        <Paper><CarInfoComponent type="fuel"/></Paper>
                    </Grid>
                    <Grid item md={3} sm={4}>
                        <Paper><CarInfoComponent type="ammo"/></Paper>
                    </Grid>
                    <Grid item md={3} sm={4}>
                        <Paper><CarInfoComponent type="health"/></Paper>
                    </Grid>
                    <Grid item md={1} display={{ sm: "none", lg: "block" }}/>
                </Grid>
            </div>
        );
    }
}

export default App;