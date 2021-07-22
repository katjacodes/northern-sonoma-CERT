# Northern Sonoma County CERT – Testing details

[Main README.md file](README.md)

[View website on GitHub Pages](https://katjacodes.github.io/northern-sonoma-CERT/)

## Testing

### Automated Testing
#### Validation Services
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) was used to validate HTML.
- [W3C Markup Validation](https://validator.w3.org/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JS.

        - When running JSHint, the error ```unused variable``` appears for the function ```function topFunction()``` on line 18 in the [script.js](script.js). The reason for this error message is that JSHint evaluate the JS code independently from other files. However, this function gets called inline on line 16 of the [gallery.html](gallery.html) and the [gallery_es.html](gallery_es.html) files as part of the scroll-to-top button: ```<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>```. When evaluating this line of code together with the JS file, the error message disappears.
        
        - Additionally, the error ```unused variable``` was caused by the jQuery symbol ```$``` on lines 104 and 105 of the [form-validation.js file](form-validation.js). Upon further research on [Stackoverflow](https://stackoverflow.com/questions/8852765/jshint-and-jquery-is-not-defined) and in the [JSHINT documentation](https://jshint.com/docs/options/), I discovered that JSHint does not recognize jQuery unless explicitly prompted. Based on these two sources, I prompted JSHint to do just that by including ```/*globals $:false */``` at the top of the [form-validation.js file](form-validation.js). This solved the issue.

### Client stories testing:
The path through the website will vary depending on the visitor's interest, existing level of familiarity with the event, and preferred language. Testing the client stories from the UX section provides further insights into the different paths taken by site visitors:

#### Testing client stories from UX section of README.md
1. As a new visitor to the website, I want to be able to easily accesss information in either English or Spanish, depending on my preferred language.
   1. A language selection menu located in a conventional location (upper left corner) with abbreviations for English and Spanish in each language (i.e., "EN" for English and "ES" for Español) allows the visitor to easily select their preferred language on any page of the website.
   2. The language selection menu leads the visitor to the current page in the language the select.
   3. In addition, the language selection menu changes the language of the navigation bar across pages.
    
2. As a new visitor to the website, I want to have easy access to more information about the upcoming Fire and Earthquake Safety Expo and potentially sign up to volunteer.
   1. Information about the upcoming Fire and Earthquake Safety Expo is accessible right from the landing page. Depending on the selected language, the visitor can access the event flyer and the volunteer sign-up form in their preferred language. The event flyer is a donwloadable pdf file that opens in a new tab.
   2. The visitor can also access the volunteer role descriptions and sign-up form by selecting "Events" in the navigation bar.
   3. The Facebook icon is located in the navigation bar in a conventional location (upper right corner), allowing the visitor to easily navigate to more information about CERT and the expo from any page. The Facebook url opens up in a new tab to allow the visitor to return to the CERT page easily.


3. As someone already familiar with the Fire and Earthquake Safety Expo and interested in volunteering, I want to know what volunteer roles are available and sign up.
   1. Visitors interested in volunteering can access the sign-up form either by clicking on "Events" in the navigation bar or by clicking on the direct link on the landing page.
   2. Short descriptions of the available volunteer roles are provided at the top of the sign-up form in either English or Spanish, depending on the selected language.
   3. The testing form cannot be submitted unless the vistor provided a name, a valid email address, and selected at least one volunteer role.

4. As a local beat reporter, I want to have acess to basic information regarding the Fire and Earthquake Safety Expo, including date, time, and where to find additional information.
   1. Information about the upcoming Fire and Earthquake Safety Expo is accessible right from the landing page. Depending on the selected language, the visitor can access the event flyer in their preferred language. The event flyer is a donwloadable pdf file that opens in a new tab.
   3. The Facebook icon is located in the navigation bar in a conventional location (upper right corner), allowing the visitor to easily navigate to more information about CERT and the expo from any page and reach out to the event organizers with more questions. The Facebook url opens up in a new tab to allow the visitor to return to the CERT page easily.

### Manual (logical) testing of all elements and functionality on every page.

#### Home Page
1. Navigation bar & homepage background image
   1. Go to the "Home" page from a desktop.
   2. Using both Firefox Developer Tools and different devices: Look at the homepage on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that
      - The navigation bar turns into a burger menu when navigating to the homepage on a phone screen.
      - The background image gets resized and cropped in a way that its content remains recognizable and aesthetically pleasing.
   3. Make sure the burger menu pushes down the content when opened. _During testing, the menu would initially overlay the remaining website content. This turned out to be due to a typo in the linked script._
   4. Click on the logo in the navigation bar and verify that it links to the homepage. 
   5. Click on each navigation menu item and verify that it links to the correct page.
   6. Repeat steps 4 and 5 on phone and a tablet.

2. Jumbotron
   1. Click on link to Contact page to verify it links to the Contact page.
   2. Click on the  Spotify logo to verify it links to the musical's Spotify page.

### About page
1. Navigation bar:
   1. Repeat verification steps for the navigation bar on the home page.

2.  Page content
    1. Reduce and expand width of window to verify that the text behaves the way expected
    2. Using both Firefox Developer Tools and different devices: Look at the About on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that
       - The text arrangement looks good on all device widths.
       - The margins adjust depending on the device width for optimal use of space.
    3. Click on the link to the musical's Spotify profile embedded in the text to verify it links to the correct page.

### Cast + team page & individual profile pages
1. Navigation bar
   1. Repeat verification steps for the navigation bar on the home page.

2. Page content
   1. Click on each profile image to verify it links to the correct profile.
   2. Using both Firefox Developer Tools and different devices: Look at the About on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that the images rearrange with increasing/decreasing screen width. _During testing, the imgages did not rearrange. Researching the reason for this, I found out that all of them need to be wrapped into on single row to be fully responsive._

3. Individual profile pages
   1. Navigation bar:
      1. Repeat verification steps for the navigation bar on the home page.

   2. Using both Firefox Developer Tools and different devices: Look at the About on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that
      - The text arrangement looks good on all device widths.
      -  The size of the profile image increase on tables and desktop screens.
      -  The styling of the quotes changes with increasing/decreasing screen width.

### Contact page
1. Navigation bar:
   1. Repeat verification steps for the navigation bar on the home page.

2. Page content
   1. Click on the  Facebook and Instagram logos to verify it links to the musical's social media presences. 
   2. Using both Firefox Developer Tools and different devices: Look at the About on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that
      - The text arrangement looks good on all device widths.
      - The margins and width text input fields adjust depending on the device width for optimal use of space.
   3. NOTE: The form is not functional while the website it deployed on GitHub. It will be once the client deploys it using Squarespace hosting.

###  Footer 
1. Using both Firefox Developer Tools and different devices: Look at the About on a desktop screen, a tablet screen, and a phone screen (both in portrait and landscape orientation) to verify that the footer is sticky on all pages and across devices. 
2. Click on the Letters and Bytes link to verify it leads to the developer's website  on all pages.

## Further testing: 
1. Asked friends, family members, and other Code Institute students to look at the site on their devices and report any issues they find. 