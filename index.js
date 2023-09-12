const express = require('express');

const app = express()

const port = 8000;

const date = new Date();

const year = date.getUTCFullYear();
const month = date.getUTCMonth();
const day = date.getUTCDay();
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const seconds = date.getUTCSeconds();
const milliseconds = date.getUTCMilliseconds();
   
const utc_time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const currentDay = date.getDay();

let data = [
  {
    slack_name: "solomon macharia",
    current_day: weekDays[currentDay],
    utc_time: utc_time,
    track: "backend",
    github_file_url: "https://github.com/SolomonMacharia/HNG/blob/master/index.js",
    github_repo_url: "https://github.com/SolomonMacharia/HNG",
    statusCode: 200
  }
]

  
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const trackName = req.query.track;
        
    console.log(`Paramter name ---- ${slackName} ----`)
    console.log(`Paramter track ---- ${trackName} ----`)
    
    if (!slackName || !trackName ) {
        return res.status(400).json({ error: 'Both slack_name and track query parameters are required.' });
    } else if (slackName !== data[0].slack_name) {
        return res.status(404).json({error: `${slackName} Not Found!`})
    } else if (trackName !== data[0].track) {
        return res.status(404).json({error: `${trackName} Not Found!`})
    } else {
        res.status(200);
        res.send(JSON.stringify(data[0]))
    }
   
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})
