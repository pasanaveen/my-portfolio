import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:680058821313:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        portfolio_bucket = s3.Bucket('portfolio.corecomet.com')
        build_bucket = s3.Bucket('portfoliobuild.corecome.com')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for name in myzip.namelist():
                obj = myzip.open(name)
                portfolio_bucket.upload_fileobj(obj, name)
                portfolio_bucket.Object(name).Acl().put(ACL='public-read')

        print "Job Done!"
        topic.publish(Subject="Portfolio Success", Message="Portfolio was deployed successfully")
    except:
        topic.publish(Subject="Portfolio failed", Message="Portfolio failed with an exception")
    raise
    return "hello from lambda"
