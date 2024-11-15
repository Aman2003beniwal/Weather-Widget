import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import './InfoBox.css';
import { Stack } from '@mui/material';

export default function InfoBox({ info }) {
    let Hot_URL="https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/A8KpIyONVQ/uq-contact-el-nino-summer-weather-andrew-heatwave-2560x1440.jpg";

    let Cold_URL="https://images.pexels.com/photos/28518049/pexels-photo-28518049.jpeg?cs=srgb&dl=pexels-gsn-travel-28518049.jpg&fm=jpg";

    let rain_url="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg ";

    let fresh_url="https://cxcs.co.uk/agriculture/wp-content/uploads/sites/2/2023/07/1100_800_1507563650-sunset-and-wheat-field-wallpaper-hd-beautiful-desktop-background-hd-wallpapers-of-sunset-field-free-download.jpg"

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card className='card' sx={{ maxWidth: 400}}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={info.humidity>80?rain_url : info.temp>=20&& info.temp<=30?fresh_url:info.temp<20?Cold_URL:Hot_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity>80?<ThunderstormIcon/> : info.temp>=20&& info.temp<=30?<BrightnessHighIcon/>:info.temp<20?<AcUnitIcon/>:<WbSunnyIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={Stack}>
                            <p>Temperature :{info.temp}&deg;C</p>
                            <p>Temperature Min :{info.tempMin}&deg;C</p>
                            <p>Temperature Max :{info.tempMax}&deg;C</p>
                            <p>Humidity :{info.humidity}</p>
                            <p> The weather can described as {info.weather} and fells like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}