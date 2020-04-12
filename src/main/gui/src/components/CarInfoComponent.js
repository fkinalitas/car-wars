import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';

const config = {
    types: [
        {
            type: "fuel",
            title: "FUEL",
            icon: <LocalGasStationIcon/>,
            color: "#5a7670",
            endpoint: "/fuel"
        },
        {
            type: "ammo",
            title: "AMMO",
            icon: <WhatshotIcon/>,
            color: "#fa2920",
            endpoint: "/ammo"
        },
        {
            type: "health",
            title: "HEALTH",
            icon: <FavoriteIcon/>,
            color: "#3EB650",
            endpoint: "/health"
        }
    ]
};

class CarInfoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            key: null,
            type: null,
            value: null,
            maxValue: null,
            icon: null,
            color: null
        };
    }


    componentDidMount() {
        let endpoint;
        config.types.forEach((typee) => {
            if (typee.type === this.props.type) {
                endpoint = typee.endpoint;
                this.setState({
                    icon: typee.icon,
                    color: typee.color
                })
            }
        });

        console.log(endpoint);

        setInterval(() => this.restQuery(endpoint), 2000)

    }

    restQuery(endpoint) {
        fetch("http://localhost:8080/info" + endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.type);
                    this.setState({
                        isLoaded: true,
                        key: result.key,
                        type: result.type,
                        value: result.value,
                        maxValue: result.maxValue,
                    });
                }
            )
    }

    render() {

        console.log(this.state);
        let key = this.state.key;
        let type = this.state.type;
        let title = this.state.title;
        let value = this.state.value;
        let maxValue = this.state.maxValue;
        let icon = this.state.icon;
        let color = this.state.color;
        let perCent = (value / maxValue) * 100;


        console.log("Type:" + type);

        const cardStyle = {
            backgroundColor: color,
            borderRadius: "0px",
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.75)",
            color: "white"
        };

        const titleStyle = {
            textTransform: "uppercase",
            fontFamily: "\"Lucida Console\", Courier, monospace"
        };

        const bottomStyle = {
            width: perCent + "%",
            backgroundColor: "#ffffff87",
            borderRight: "2px solid white"
        };

        return (
            <Card style={cardStyle}>
                <CardContent>
                    <Grid container>
                        <Grid md={9}>
                            <Typography gutterBottom variant="h5" component="h2" style={titleStyle}>
                                {key}
                            </Typography>
                        </Grid>
                        <Grid md={3}>
                            <Typography align="right" style={{color:"#ffffff65"}}>
                                {icon}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography align={"center"}>
                        <Typography variant="h3" component="h2" style={{fontWeight:"bold"}}>{value}</Typography>/{maxValue} {type}
                    </Typography>
                    <Typography variant="body2" component="p">
                    </Typography>
                </CardContent>
                <CardActions style={bottomStyle}/>
            </Card>
        );
    }
}

export default CarInfoComponent