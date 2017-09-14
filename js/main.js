import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Code Example",
    'href': "https://github.com/pasanaveen/my-portfolio",
    'desc': `Build a complete Portfolio website using AWS technologies. 
    Serverless programming is a great way to build websites without using any native servers. 
    The technologies used in this project are : 
     AWS S3, AWS Lambda, Code Build, Cloud Front, IAM, Code Pipeline, Python & boto3, GitHub, HTML, CSS, Babel, ReactJS, Web Pack 
     Jest, Enzyme, Chai , Mocha, Node Js and NPM.
    
    Click on "CHECK IT OUT" button to learn more about this.`,
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example1.PNG",
      'comment': ""
    }
  },

  {
    'title': "Music Album",
    'href': "https://soundcloud.com/naveen-pa/sets/soundcomet-2017",
    'desc': `Check out my first Album "soundcomet-2017" produced and composed by me!..
            The music is produced and composed using LoopPacks and LaunchPad. 
  
             Click on "CHECK IT OUT" button!...`,
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example1.PNG",
      'comment': ""
    }
  },

  {
    'title': "Example Work Pending...",
    'href': "https://portfolio.corecomet.com",
    'desc': "IBM Watson Sample Project Pending...",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.PNG",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
