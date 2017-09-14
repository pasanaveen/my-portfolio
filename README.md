                    #####Portfolio Application Using Serverless Technologies in AWS.######
                                     https://portfolio.corecomets.com

-> Description : 
  - This is very basic responsive design and can be modified accordingly to make it fully responsive without any limits. This       application is completely built on AWS services. 
  - All the code activities has been automated using the AWS services and all the test front end code has test cases which run on a PREBUILD stage in order to make sure we get the clean and runnable code always into AWS envieonment. 
  - SNS service is used to send notifications whenever the build is triggered. 
This application has been registered with the domain name and DNS services provided by AWS Route 53 Service. And the Application uses https certificates.

-> What does it contain: 
  - This is a personal Portfolio application. This can be used to project the portfolio of the person and share the related information of the person through this application.
  - This App has "About Me " Section where the person can define himself. This also have the links to other social networking platforms like LinkedIn, Facebook, Instagram or Github to share the resume, code work etc...
  - This also have the bubbled designed on the home page where the person can exhibit his work.



                                                    Technologies Used:

-> Front End Technologies:
  - HTML is used for basic index page.
  - CSS is used for the styling.
  - React JS is f\used for making the website responsive using the React Components and React DOM's
  - Babel is used for making the application cross browser compatible and suppot all browsers.
  - Chai and Mocha are used for front end testing
  - Jest and Enzyme are used for testing React Components
  - NPM and Webpack are used for packaging the code and running automated test cases.
  
 -> Back End : 
  - AWS S3 : This is used to store all the objects related to the application like (images, favicon's, index.html, css file etc)
  
  - AWS Code Build : This is used for building the code from the github and creating a build zip file, which can be used 
  for deployment activities.
  
  - AWS Lambda: A serverless technology by AWS which is actually a function and takes the request to deploy the code. 
  The invoke  method is used to trigger the depployment of the code submitted by CodeBuild Component.
  
  - AWS CodePipeline : This is used to autmate the complete process of code checkout, code build and code deployment. The 
  CodeBuild in this application is used to get the code from the github, build it with CodeBuild Servce, and deploy it using 
  the Lambda function which we created for the deployment.
  
  - AWS CloudFront : This is used to distriubute the application to all the edge locations available worldwide. The Cloudfront 
  is configured to use the S3 origin. Which means the CloudFront actually deploys the website with the content available in S3.
  
  - AWS IAM : This is used to configure the security policies for the Admin user who manages the application. Also used 
  to provide the proper roles and security authentication for the AWS services in order for them to communicate with each 
  other and perform the task.
  
  - AWS Route 53 : This is a domain name service provided by AWS. The new domain name has been acquired from Route 53 and 
  the hosted zones are configured in order to use CloudFront.
  
  - AWS SNS : The SNS service is used to send the quick messages using Email/Text or trigger any other Lambda function. In 
  this application the SNS is used to trigger the message wheneevr the CodePipeline service runs. Hence we get 
  notifcations whenever the code build has been successful or failed.
  
  - AWS Certificate Manager : This is used to configure the Certificate for the domain name to use/ route all the traffic 
  into  https
  
  - Python : Python is used to write the Lambda Script used by the Lambda Function to deploy build deploy the application.
  
                                      ####Steps to Build Portfolio Application#####
   ........pending.....to be continued.......
  
  
