import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL = "https://media.istockphoto.com/id/828198028/photo/wood-thermometer.jpg?s=1024x1024&w=is&k=20&c=Yxx0wllnnJMtU1RTbQqrK6CjWdhgZ3BjXqHZnuhbKiA="
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0="

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
           ? RAIN_URL
           : info.temp > 15
           ? HOT_URL
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity>80
           ? <ThunderstormIcon/>
           : info.temp > 15
           ? <WbSunnyIcon/>
           : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}