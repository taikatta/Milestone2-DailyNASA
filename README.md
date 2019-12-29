# Daily NASA

This is my second Milestone Project on the Full Stack Web Developer Code Institute course. For Interactive Frontend Development module.

### Summary

#### Project purpose: Presentation of interacitve data
In this project, you'll build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

Value provided:
Users are able to interact with the site in their particular way, to achieve their personal goals and derive answers to their specific questions.
The site owner advances their own goals by providing this functionality, potentially by being a regular user themselves.

Main Technologies
* Required: HTML, CSS, JavaScript.

* Optional: jQuery, d3.js, crossfilter and/or dc.js, any other JavaScript libraries, SaSS, external APIs.

Daily NASA

I follow NASA on Instagram, as I love their photos and a couple of months ago I found out that they have open API.

In documentation examples, the special DEMO_KEY api key is used. This API key can be used for initially exploring APIs prior to signing up, but it has much lower rate limits, so you’re encouraged to signup for your own API key if you plan to use the API. The rate limits for the DEMO_KEY are:

* Hourly Limit: 30 requests per IP address per hour
* Daily Limit: 50 requests per IP address per day

I signed up for an API key to access and use web services available on the Data.gov developer network. Rate limits may vary by service, but the defaults are:

* Hourly Limit: 1,000 requests per hour

For each API key, these limits are applied across all api.nasa.gov API requests. Exceeding these limits will lead to your API key being temporarily blocked from making further requests. The block will automatically be lifted by waiting an hour.

## UX

User stories:

* As a user I want to be able to find NASA's Picture of the Day for any given day

* As a user I want to read about interesting facts

Design and colors:

Fonts:

I used Open Sans, from https://fonts.google.com/specimen/Open+Sans I have chosen Open Sans, as Udemy.com is also using them and I really liked it. On fonts.google.com in the about section the description of the font is the following: Open Sans was designed with an upright stress, open forms and a neutral, yet friendly appearance. It was optimized for print, web, and mobile interfaces, and has excellent legibility characteristics in its letterforms.

Colors:

First I used https://www.canva.com/colors/color-palette-generator/ color palette generator with NASA's logo and used the colors I got there for the website. (Dark blue and lighter blue.) But then I switched to black background and white fonts. For the date input form background I used #ededed, which is a light gray color.

Wireframes:

Originally I wanted to use NASA's logo on the landing page, but then I have found a great Hubble photo on https://images.nasa.gov/ and I changed to that.

Initial Wireframes:

Mobile View

Desktop View

Final Wireframes:

Mobile View

Desktop View

## Features

* I have created the Daily NASA logo with [Font Meme](https://fontmeme.com/fonts/nasalization-font/)

* Next to the date picker I used [Font Awesome](https://fontawesome.com/icons/calendar-alt?style=regular)'s Calendar icon

* To prevent user to pick a future date from the calendar I got the solution from: [stackoverflow](https://stackoverflow.com/) But this was not enough, as it turned out that NASA only had images from 16-06-1995, now if the user selects a date which is before this date or after today's date, there is a warning sign saying: "Please enter a date between 16/06/1995 and today!".

* The first problem while writing the JavaScript appeared when I noticed that the Picture of the day sometimes is not a picture but a video. As I used <img> in my HTML it was not possible to play the video. I used replaceChild and appendChild to resolve this problem.

* After successfully displaying the Picture of the Day (either it was an image or a video) I noticed that the height of the video was not set correctly. I have found the solution on [stackoverflow](https://stackoverflow.com/questions/35814653/automatic-height-when-embedding-a-youtube-video) 

* At the Picture of the Day there is the Title of the picture and a short Explanation.

* After the image, title and explanation of the Picture of the Day, I added some information about near earth asteroids. On the chosen date the user will know the number of near Earth objects, the estimated maximum diameter of the largest asteroid and if there is potentially hazardous asteroid among them.

#### Features Left to Implement


## Technologies

* HTML5 
* CSS
* JavaScript
* Visual Studio Code
* Git - used for version control
* [GitHub](https://github.com/) 
* [Font Awesome](https://fontawesome.com/) 
* [Google Fonts](https://fonts.google.com/) 
* [moquaps](https://moqups.com)

## Testing

## Deployment

This project was developed using the Visual Studio Code.

This website is hosted using GitHub pages, deployed directly from the master branch. Every time I made a change to the site, I used commited to git and pushed to GitHub.

#### How to enable GitHub Pages to publish your site
* Select the [Repository](https://github.com/taikatta/Milestone1-Konyvkucko)
* Under the repository name click `Settings` 
* Find `GitHub Pages` section
* From the drop-down menu select `master`
* Click `Save`

#### How to clone your repository to create a local copy
* Select the [Repository](https://github.com/taikatta/Milestone1-Konyvkucko)
* Click on the 'Clone or Download' button
* Copy the URL provided
* Open terminal (Mac) / Open Git Bash (Windows) 
* Find the directory you want to clone the repository to
* Type `git clone` and paste the URL, press Enter
* Your local clone has be created

## Credits

#### Media

All photos are from NASA.gov

#### Acknowledgements









