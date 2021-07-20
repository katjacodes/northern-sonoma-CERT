# Northern Sonoma CERT

<div align="center">
    <img src="assets/images/mockup.png" alt="Mockup of how home page looks on diffferent screen sizes"/>
</div>
<br>

[View deployed site here](https://katjacodes.github.io/northern-sonoma-CERT/)

## Project Description
The online presence for Northern Sonoma County CERT, a community emergency preparedness program located in northern Sonoma County in northern California, United States, was created by Katja Schatte to help Northern Sonoma CERT. The current purpose of the website is to provide information about the upcoming Fire and Earthquake Safety Expo and allow both English- and Spanish-speaking community members to sign up as volunteer for the expo.

Community Emergency Response Teams (CERT) are based on the National CERT Program, run by FEMA, the United States' Federal Emergency Management Agency. The local programs are administered by a local goverment agency, such as a police or fire department. The agency trains community members in basic disaster response skills, customized to the most prevalent emergencies in the respectie region. In California, these emergencies include earthquakes and wildfires. In the event of a major disaster, the trained volunteer emergency workers are equipped to support local first responders.

At the moment, the Northern Sonoma CERT is looking specifically for a website to allow community members to access the flyer, sign up for its upcoming Fire and Earthquake Safety Expo, and share photos after the expo. However, in the future, the purpose of the website will shift to a more general representation of the program and include a general description of the program's purpose and announcements of various upcoming events.

Currently, the general goals of the website are:
* Provide information about the upcoming Fire and Earthquake Safety Expo
* Allow community members to sign up for specific activties offered as part of the expo
* A photo gallery where the site admins can upload pictures from the expo after the event (currently contains test images)
* Provide all information and functionalities in both English and Spanish to make the website more widely accessible to the local community. (The website creator is an English<>Spanish translator, interpreter, and copy writer.)

## UX

### Core Target Audience
#### The core target audience of this organization is:
* Residents in northern Sonoma County
* Local community members of all ages
* English- and Spanish-speaking individuals
* Community members who have heard about the Northern Sonoma County CERT program and visit the website to learn about upcoming activities
* Community members who alredy know about the Fire and Earthquake Safety Expo and want to sign up to volunteer
* Members of CERT programs in other parts of the country who are interested in learning more about the activities of this program

#### Visitors to This Website Are Searching for:
* More information about the upcoming the Fire and Earthquake Safety Expo
* A way to register as volunteers for the Fire and Earthquake Safety Expo
* After the event: Share and look at photos

#### Client Stories
1. As a new visitor to the website, I want to have easy access to more information about the upcoming Fire and Earthquake Safety Expo and potentially sign up to volunteer.
2. As a new visitor to the website, I want to be able to easily accesss in either English or Spanish, depending on my preferred language.
3. As someone already familiar with the Fire and Earthquake Safety Expo and interested in volunteering, I want o know what volunteer roles are available and sign up.

### Wireframe Mockups: 
- [Landing Page](assets/images/wireframes/#nosococertLandingPage.png)
- [Events](assets/images/wireframes/nosococertEvents.png)
- [Gallery](assets/images/wireframes/nosococertGallery.png)

## Features

#### Across Pages
Each page features a responsive **navigation bar** with a **language selection menu** (top left) and an easily recognizable **Facebook icon** linking to the program's Facebook page (top right).
Each page has a **footer** with **copyright information**. 

Every page features a background of a typical Sonoma County landscape (vineyards). The background image is cropped to make the content recognizable and aesthetically appealing across devices and screen orientations. 

#### Home
The landing page features the offical CERT logo as the **hero image**. The percentage of the screen the hero image covers increases for screens 768px and above in potrait mode and decreases for screens 768px and above in landscape mode to make the page visually appealing and the content below the hero image easy to locate. Below the hero image, visitors can find direct links to **the event flyer** in pdf format and the volunteer sign-up form. Depending on the language in which the visitor is accesing the landing page, they will be directed to the flyer and the sign-up form in either English or Spanish. In the future, the links to the current event-related information will be replaced with more general information about the program and updated links to event information. Due to the evolving business needs of the client, the homepage is designed in a way that its content can easily be updated and adapted. 

#### Events
Currently, the events pages features **information about volunteer roles** at the upcoming Fire and Earthquake Safety Expo and **sign-up form** that transmits the information directly to a Google spreadsheet using the _API Spreadsheets_ API. The form is optimized to usable on mobile screens and adapts to tablet and computer screens (768px and above).

#### Gallery
The gallery page currently features sample images demonstrating what the gallyery layout will look like once the event pictures get added to it. The standard setting of the **image grid** is one image per row. Above that, the grid features two images per row on screens 768px and above and three images per row on screens 1400px and above. The purpose of this structure is to allow users to clearly see the details of the images at first glance. In addition, the image gallery provides a **JavaScript-supported modal** that enlarge an image to full-screen size on click. After looking at the image, the visitor can return to the gallery by clicking ont the "x" in the upper right corner. Additionally, as soon as the menu bar is no longer visible on the screen, a **scroll-to-the-top button** appears in the lower right corner of the screen. On clicking it, the visitor is taken directly back to the top of the gallery.

 
### Existing Features
- Header Logo - Exists on [every page](index.html) and allows all users to easily recognise the business brand. Clicking the logo returns users to the home page as they would expect.
- Header Navigation Bar - Exists on [every page](index.html) and allows all users to easily navigate all the website's pages and find what they are looking for quickly.
- Footer Copyright Info - Exists on [every page](index.html) and protects business copyright.
- [About Page](about.html) - Allows potential clients to connect with the artist without overloading them with information.
- [Cast + Team Page](castandteam.html)
- Social Media links - Linking to the musical's presence on Spotify, Facebook, and Instagram

### Features to Implement in Future
- Restyling of navbar. To keep menu items from moving to the left when one item is clicked. - More research needed.
- _Functioning_ [Contact Form](contact.html) - Allows potential clients to ask questions, and/or make the first step in their ordering process. - Backend functionality needed. Will be provided by the client's web host once the page is deployed there.
- Add CAPTCHA to contact form - Helps protect the contact form from malicious use, i.e., spam - JavaScript needed
- [Sponsors page](sponsors.html) - Features all businesses and organizations currently supporting the musical.
- Improve loading speed on mobile devices - Optimizes experience for visitors using their mobile device to access the page. - Further tinkering with image files, sripts, and stylesheents necessary.
- Improve SEO optimization - Increases visitor stream to the page. - Additional meta tags and editing the copy provided by the client.
- Ticket purchase functionality - Backend skills needed


## Technologies Used
- This project uses HTML and CSS programming languages.
- [Gitpod](https://gitpod.io) 
    - This project uses **Gitpod** for their IDE.
- [BootstrapCDN](https://www.bootstrapcdn.com/)
    - This project uses **Bootstrap4** to simplify the structure of the website and make the website responsive
    - This project also uses BootstrapCDN to provide icons from [FontAwesome](https://www.bootstrapcdn.com/fontawesome/)
- [Google Fonts](https://fonts.google.com/)
    - This project uses **Google fonts** to style the website fonts.
- [jQuery](https://jquery.com/)
    - This project uses **jQuery** to reference Javascript needed for the responsive navbar.
- [Popper.js](https://popper.js.org/)
    - This project uses **Popper.js** to reference Javascript needed for the responsive navbar.
- [ColorSpace](https://mycolor.space)
    - This project uses **ColorSpace** to determine font colors that go well together.
- [WAVE](https://wave.webaim.org)
    - This project uses the **Web Accessibilty Evaluation Tool** to make sure the website if accessible to visitors of differing abilities. 
- [WebAIM](https://webaim.org/resources/contrastchecker/)
    - This project uses the **WebAIM contrast checker** to make sure the website is accessible to readers with impaired vision.
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
    - This project uses **Google PageSpeed Insights** to optimize loading time.

## Testing 
Testing information can be found in separate [TESTING.md file](TESTING.md)

## Deployment
This project was developed using the [Gitpod](https://gitpod.io), committed to git, and pushed to GitHub using the Gitpod terminal. 

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/katjacodes/gbrw), the following process was completed: 
1. Log into GitHub. 
2. Klick on the account avatar in the top right corner and select "Your repositories" from the dropdown menu.
3. From the list of repositories, select **gbrw**.
4. From the menu bar at the top of the page, select **Settings**.
5. In the menu bar on the left side of the screen, select the second menu item from the bottom, "Pages."
6. In the **Source** section, select **Master Branch** from the dropdown menu, then click on **Save**.
7. As a result, the page is refreshed and the website deployed. The **website URL** appears in a blue box above the **Source Section**.

At the moment of submitting this Milestone project the Development Branch and Master Branch are identical. 

### How to Run This Project Locally
To clone this project into Gitpod you will need a Github account. [Create a Github account here](https://github.com/)

Then follow these steps:
1. Log into [Gitpod](https://gitpod.com) with your gitpod account.
2. Navigate to the [Project GitHub repository](https://github.com/katjacodes/gbrw)
3. Click the green "Gitpod" button in the top right corner of the respository
4. This will trigger a new gitpod workspace to be created based on the code in GitHub. There, you will be able to work locally.

To work on the project code within a local IDE such as VSCode, Sublime Text, etc.:
1. Navigate to the [Project GitHub repository](https://github.com/katjacodes/gbrw)
2. Click the "Code" download button next to the green "Gitpod" button.
3. In the Clone section, select HTTPs and copy the clone URL for the repository. 
4. Open your local terminal.
5. Change the current working directory to the location where you want the cloned directory to be located.
6. Type ```git clone```, and then paste the URL you copied in Step 4.
7. Press Enter for your local clon to be created.

## Credits

### Content
- The text for the About page was written by Sarah Julius. Each artist and member of the creative time provided their own bio and headshot.

### Media
- The background images and logo were created by Alexis Politz.

### Code
- HTML code for burger menu was original taken from [W3 Schools](https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_navbar_collapse) and then edited.
- CSS code to align and size logo and navbar was originally taken from a post on [Stackoverflow](https://stackoverflow.com/questions/53171559/navbar-smaller-than-navbar-brand) and then edited.
- CSS  code to center text in the footer was taken from [W3 Schools](https://www.w3schools.com/css/css_align.asp).
- CSS code to style quotes on the individual profile pages was original taken from Jonathan Clift's profile on [Codepen](https://codepen.io/cliftwalker/pen/XJaEXY) and then edited.
- The design of the Cast + Team page was inspired by the [Vera Institute](https://www.vera.org/about/peoplehttps://www.vera.org/about/people). However, no code was taken from the site.

### Acknowledgements
- I got the opportunity to build a website for a real-world project from Sarah Julius.
- Code Institute tutors were helpful and guided me in the right direction on two separate occasions when I got stuck did not know how to fix my CSS.
- My Code Institute mentor, Sebastian Immel provided helpful feedback regarding the behavior of my navar, which I will implment as part of the next version of the site. (See **Features to Implement in the Future** section for details.)