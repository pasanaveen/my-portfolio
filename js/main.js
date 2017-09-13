import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example - Build Serverless Website using AWS",
    'href': "https://portfolio.corecomet.com/",
    'desc': "Build a complete Portfolio website using AWS technologies. Serverless programming is a great way to build websites       without using any native servers. The technologies used in this project are : AWS S3 ( For storing Objects, Images, Frontend code related files etc.. ), AWS Lambda ( For invoking the Lambda function in AWS to deploy the code ), Code Build ( For automatic build ), Cloud Front ( For distribution of the website to other regions ), IAM ( For security and credentials ), Code Pipeline ( For automating entire code build, deploy process) , Python & boto3 ( For writing scripts for Lambda function), GitHub ( Used as Code Repository), HTML, CSS, Babel ( For maintaining compatability across browsers ), ReactJS ( React Js framework for making the website dynamic and interactive ), Web Pack ( For packaging the files and distributing the code in proper manner ), Jest, Enzyme, Chai , Mocha ( For making responsive and Testing the code), Node Js and NPM.",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example1.PNG",
      'comment': ""
    }
  },

  {
    'title': "Work Example 2",
    'href': "https://portfolio.corecomet.com/",
    'desc': "Pending.....",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example1.PNG",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  },

  {
    'title': "Work Example 3",
    'href': "https://portfolio.corecomet.com/",
    'desc': "Pending...",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.PNG",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
