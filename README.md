# Interactive Frontend Project

The purpose of this project was to create a website for the module Interactive Frontend Development, showcasing knowledge of the frontend technologies HTML, CSS and Javascript. I based my site around a fictional 'glamping' (glamorous camping) website, which I named 'Hidden Huts'.

## UX and UI
I started the UX process by looking at other accomodation wesites, mainly [Canopy and Stars](https://www.canopyandstars.co.uk/). This helped me to get a better understanding of what a user would expect to see from such a site.
I created some low-fidelity wireframes using the Balsamiq wireframing tool. After I had created these, I moved onto some high-fidelity wireframes using Adobe Xd. Once I was happy with my website, I could then begin the build process.

You can find my user stories under the UI/UX folder in the main directory.

## Features

### Existing Features

* Feature 1 - **navigation** - users can intuitively navigate the menu.

* Feature 2 - **images** - a user can browse multiple images to get an idea of what's available.

* Feature 3 - **availability** - to check hut availability.

* Feature 4 - **tabs** - users can toggle between tabs, so more information is displayed without the need to scroll.

* Feature 5 - **maps** - Google Maps API to see precise location.

* Feature 6 - **contact** - fill out contact form requesting a stay.

* Feature 7 - **validation** - form is validated so no need to come back and submit again.

* Feature 8 - **emailjs** - site owner receives user response.

* Feature 9 - **smoothscroll** - for ease of use.

## Features Left to Implement

To scale up this website, I could add multiple pages and a variety of new features such as:

* Authenticated login

* Local weather

* Filtering

* Save favourites


## Technologies used

HTML, CSS and Javascript were the fundamental technologies this project was built upon. Aside from those, I used the following to assist with the planning and implementation my website;

1. [Balsamiq](https://balsamiq.com/)
* Wireframing tool used to create low-fidelity wireframes.
2. [Adobe Xd](https://www.adobe.com/uk/products/xd.html)
* A vector-based user experience design tool for high-fidelity wireframes.
3. [Bootstrap](https://flask.palletsprojects.com/en/1.1.x/)
* Robust front-end library for HTML, CSS and JS.
4. [Google Fonts](https://fonts.google.com/)
*  Fonts for appealing typography.
5. [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
* Google Maps is a web mapping service developed by Google.
6. [jQuery](https://jquery.com/)
*  The project uses jQuery to simplify DOM manipulation.
7. [jQuery UI](https://jqueryui.com/)
*  jQuery UI is a widget and interaction library built on top of jQuery.
8. [slick](https://kenwheeler.github.io/slick/)
* slick is a responsive image carousel jQuery plugin.
9. [Responsive Availability Calendar](https://www.jqueryscript.net/time-clock/Simple-Responsive-Availability-Calendar-Plugin-For-jQuery.html)
* A lightweight, responsive jQuery availability calendar plugin.
10. [emailJS](https://www.emailjs.com/)
* Sends an email from Javascript code.

## Testing

I decided to manually test the application. Each page was tested on Chrome, Firefox, Safari, Opera, Internet Explorer using the following the testing criteria;


## Deployment

I have deployed this project to GitHub Pages - you can find the live version [here](https://stellaexp.github.io/interactive-frontend-project/):

I did this following these steps:

1. Created repository.
2. Pushed all changes to repository.
3. Navigate to the 'settings' tab on the top right navigation bar, under project name. 
4. Selected GitHub Pages.
5. Published project.

To run this project locally, go to your command line interface and navigate to the directory you want to store the repository in using:

`cd local-directory`

Then run

`git clone https://github.com/stellaexp/interactive-frontend-project.git`

Now open up index.html in the browser of your choice.

To open on Gitpod, simply add the Gitpod extension to your browser, navigate to the repository and use the green 'Gitpod' button located on the right hand 
side of the screen.

## Credits

## Bugs

I encountered numerous bugs and was able to troubleshoot them by reading documentation, using stack overflow and going over my code with a fine tooth comb. 

I will list the major bugs I encountered here and in my comments:

### Google Maps

Google maps would not load on page. I kept getting this error message in the console:

`Google Maps JavaScript API RefererNotAllowedMapError`

I went into the Google Cloud Platform Console and amended the credentials, billing details and upgraded my account but it still wouldn't show. 

I then tried troubleshooting it here on [stack overflow](https://stackoverflow.com/questions/35288250/google-maps-javascript-api-referernotallowedmaperror)
I went through my cdn's and realised the cdn path was incorrect, both the API key supplied was incorrect and the calling of `initMap`.

### Email JS

On clicking the 'submit' button on the contact form page, I found that my emailJS was working - I got this response in the console

`SUCCESS Object { status: 200, text: "OK" }`

However, the form would not clear. 

I tried various methods of troubleshooting this - I used this question on [stack overflow](https://stackoverflow.com/questions/14837466/clearing-a-text-field-on-button-click) to create a function:

``` function ClearFields() {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";
    document.getElementById("option").value = "";
    document.getElementById("group").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementById("total").value = "";
    document.getElementById("notes").value = "";
}
```

But the onClick handler clashed with the emailJS library. In the end the simplest way to clear the form was to use the Form reset() Method, which I found on [w3 schools](https://www.w3schools.com/Jsref/met_form_reset.asp).

## Content
I took some text from the Canopy and Stars website, and alerted it to make it fit with my site narrative. You can find the page that inspired my text [here](https://www.canopyandstars.co.uk/britain/england/devon/berridon-farm/spekes#search_type=keyword&search_text=&).

## Media
The photos used in this site were obtained from unsplash.com. The credits for these are as follows:

**Image 01.jpg**

<span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/glamping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

**Image 04.jpg, 05.jpg 06.jpg**

<span>Photo by <a href="https://unsplash.com/@andreaedavis?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andrea Davis</a> on <a href="https://unsplash.com/s/photos/glamping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

**Image 07.jpg and 08.jpg**

<span>Photo by <a href="https://unsplash.com/@espenbi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Espen Bierud</a> on <a href="https://unsplash.com/s/photos/glamping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

**Image 09.jpg**

<span>Photo by <a href="https://unsplash.com/@alexandre13?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alex Batonisashvili</a> on <a href="https://unsplash.com/s/photos/glamping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

All other images are my own.

## Acknowledgements
I received inspiration for this project from [Canopy and Stars](https://www.canopyandstars.co.uk/). I would also like to thank tutor support, who helped me when I tried to change my last commit message and ended up in a merge conflict.