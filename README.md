# Project Overview

This project aims to develop a simple, serverless Online Store with Google Sheet API.

Disclaimer: The whole project is still work-in-progress. The payment gateway and logistics functions are not yet integrated. Also, the setup procedure has been tested on Mac OS only. Meanwhile, basic knowledge of bash command is required. If you still want to have a quick look at the project, please keep reading.

For detail of the development progress, please check out the following Medium post :
https://medium.com/@codeyourventurefree/build-an-online-store-for-free-with-google-sheet-part-1-wip-fcaa72834d22

# Installation

You can watch this YouTube Video for the installation demo :

[![Video](https://img.youtube.com/vi/1GfxFFv10iQ/0.jpg)](https://youtu.be/1GfxFFv10iQ)

## Step 1, register a Google and AWS account. 
They are the prerequisite for the whole application. All we need are the 15GB storage on Google Drive and 5GB free tier from AWS S3.

Google Drive : https://www.google.com/drive/

AWS : https://aws.amazon.com/

## Step 2, cloning the template from my Google Drive to yours and generate an API key via the Google Cloud Services.

Google Drive Template : https://drive.google.com/open?id=1ZmOCfo22sAhplMh5AAoItxuy2eYdnooi

Google Sheet API : https://console.developers.google.com/flows/enableapi?apiid=sheets.googleapis.com


## Step 3, download the files from GitHub and unzip all them. 
Amend the env.js file with any text editor. Replace the API key that you generated from Google Cloud Service, the layout sheet id, and product sheet id respectively.

## Step 4, build the script.
Open your terminal. Go to the root directory of the folder that you downloaded from Github. Run the command "NPM install" and then run another command "NPM build"afterward. Bear in mind that the prerequisite of this step is to install NodeJs and NPM on your computer. If you don't have any idea about them, please check out the tutorial in the description link below.

Prerequisite - How to install NodeJS and NPM :

Windows : https://www.youtube.com/watch?v=epH81xhS6mk

Mac : https://www.youtube.com/watch?annotation_id=annotation_3330403137&feature=iv&src_vid=epH81xhS6mk&v=BIVfpvPnU0U

## Step 5, create an S3 bucket on Amazon. 
Drag and drop all the files in the build directory to the bucket, copy and paste the permission setting. Enable static hosting and set the index document as index.html.

Bucket Policy for the AWS S3:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::google-sheet-shop-dev/*"
    }
  ]
}
```
