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

console.log(data.slack_name);

  
app.get('/api/slack_name/:name/track/:track', (req, res) => {
        const name = req.params.name;
        const track = req.params.track;
        
        console.log(`Paramter name ---- ${name} ----`)
        console.log(`Paramter track ---- ${track} ----`)
        if (name === data[0].slack_name && track === data[0].track ) {
            res.status(200);
            res.send(JSON.stringify(data));
        }
    
   
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})
