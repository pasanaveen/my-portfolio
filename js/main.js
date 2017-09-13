import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example 1 - Serverless using AWS",
    'href': "https://github.com/pasanaveen/my-portfolio",
    'desc': `"Build a complete Portfolio website using AWS technologies. 
    - Serverless programming is a great way to build websites without using any native servers. 
    
    - The technologies used in this project are : 
    1. AWS S3 ( For storing Objects, Images, Frontend code related files etc.. ).
    2. AWS Lambda ( For invoking the Lambda function in AWS to deploy the code ).
    3. Code Build ( For automatic build ).
    4. Cloud Front ( For distribution of the website to other regions ).
    5. IAM ( For security and credentials ).
    6. Code Pipeline ( For automating entire code build, deploy process).
    7. Python & boto3 ( For writing scripts for Lambda function).
    8. GitHub ( Used as Code Repository).
    9. HTML, CSS, Babel ( For maintaining compatability across browsers ).
    10. ReactJS ( React Js framework for making the website dynamic and interactive ).
    11. Web Pack ( For packaging the files and distributing the code in proper manner ).
    12. Jest, Enzyme, Chai , Mocha ( For making responsive and Testing the code).
    13. Node Js and NPM.",`
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example1.PNG",
      'comment': ""
    }
  },

  {
    'title': "Work Example 2",
    'href': "https://example.com",
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
    'href': "https://portfolio.corecomet.com",
    'desc': "Pending...",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.PNG",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
