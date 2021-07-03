# Northern Sonoma CERT

<div align="center">
    <img src="#" alt="Mockup of how home page looks on diffferent screen sizes"/>
</div>
<br>

[View deployed site here](https://katjacodes.github.io/#/)

## Project Description
The online presence for Northern Sonoma CERT was created by Katja Schatte as a digital platform for Northern Sonoma CERT, a community emergency preparedness program located in northern Sonoma County in northern California, United States. 

Community Emergency Response Teams (CERT) are based on the National CERT Program, run by FEMA, the United States' Federal Emergency Management Agency. The local programs are administered by a local goverment agency, such as a police or fire department. The agency trains community members in basic disaster response skills, customized to the most prevalent emergencies in the respectie region. In California, these emergencies include earthquakes and wildfires. In the event of a major disaster, the trained volunteer emergency workers are equipped to support local first responders.

At the moment, the Northern Sonoma CERT is looking specifically for a website to promote its upcoming Fire and Earthquake Safety Expo. However, in the future, the purpose of the website will shift to a more general representatio of the group and include annoucements of various upcoming events.

Currently, the general goals of the website are:
* Provide information about the upcoming Fire and Earthquake Safety Expo
* Allow community members to sign up for specific activties offered as part of the expo
* A photo gallery where the site admins can upload pictures from the expo after the event (currently contains test images)
* Provide all information and functionalities in both English and Spanish to make the website more widely accessible to the local community (The website creator is an English<>Spanish translator, interpreter, and copy writer.)

## UX

### Core Target Audience
#### The core target audience of this organization is:
* Residents in northern Sonoma County
* Local community members of all ages
* English- and Spanish speaking individuals
* Community members who have heard about northern Sonoma CERT and visit the website to learn about upcoming activities
* Community members who alredy know about the Fire and Earthquake Safety Expo and want to sign up for specific activities
* Members of CERT programs in other parts of the country who are interested in learning more about the activities of this program

#### Visitors to This Website Are Searching for:
* More information about upcoming activities offered by Nortern Sonoma CERT
* A way to register for activities offered as part of the Fire and Earthquake Safety Expo
* After the event: Attendees who'd like to leave feedback

#### Client Stories
1. As a new visitor to the website, I want to have easy access to the music, so I can get a taste of the musical.
2. As a new visitor to the website, I want find reader-friendly, well-organized information about the musical's content, background, and those involved in it.
3. As a new visitor to the website, I want to find out how I can connect with the musical, especially on social media platforms I already use.
4. As someone already familiar with the musical, I want to have a way to stay updated about recent developments related to the musical, including its new premier date.
5. As someone already familiar with the musical, I want to know which businesses in my community financially support artistic production. (In progress)
6. As a journalist focusing on local news and/or LGBTQIA issues, I want to be have access to background information about the musical and ways of contacting those involved.

### Wireframe Mockups: 
- [Home](assets/images/wireframes/#.png)
- [Events](assets/images/wireframes/#.png)
- [Gallery](assets/images/wireframes/#.png)

## Features

#### Across Pages
Each page features a responsive **navigation bar** with conventional placing of **logo** (top left).
Each page has a **footer** with **copyright information**. 

Every page features a background created by the same artist who created to artwork for posters, flyers, and social media presence to make sure the website is on brand. 

#### Home
The home page features a background imagethat draws the vistor's attention to the central topic of the musical: rugby. The background image is cropped to make the content recognizable and aesthetically appealing across devices and screen orientations. To that end, there are three different versions of the image: a version for screens below 768px, a version for screens above 768px, and a version for phone and tablet screens in portrait orientation.

The **Jumbotron** on the homepage features the two major ways visitors can interact with the musical at this point: A direct **link to the contact form** and a **Spotify button** leading the visitor to the musical's Spotify. At the moment, the client is particularly interested in visitors visiting the musical's Spotify page to generate revenue and for visitors to have an easy way to stay up to date about new developments, including a new premier dates. Due to the evolving business needs of the client, the homepage is designed in a way that its content can easily be updated and adapted. 

#### About
The About page features a brief synopsis and background information about the musical. The copy was provided by Sarah Julius, writer, composer and producer of _Great Big Rainbow World_. Visitors who prefer traditional writing to social media content or who are looking for a quick way to get an overview of the musical (e.g., for potential media requests), this page provides all the necessary information.

#### Cast + Team and Individual Profile Pages
The cast and teams page consists of **two responsive grids**: one featuring the **pictures and names** of the cast and one featuring the pictures and names of the creative team. The standard setting of the grid is two images per row. Above that, the grid features three images per row on screens 768px and above, four images per row on screens 992px and above, and six images per row on screens 1400px and above. In addition, the image size increases for screens 768px and above. The purpose of this structure is to provide a clean and organized overview of everyone involved, despite the relatively large number or cast and team members. 

In addition, each image and name is clickable and **links** an **individual profile** featuring a profile image (larger for screens 992px and above, the cast or team member's name, pronouns, and role and a brief quote and personal information. The breakpoint for the styling of the quotes is 576px to strike a balance between readability and aesthetics. 

All content for the grid and the individual pages was provided by the artists themselves.

#### Sponsors
Due to the tight deadline of the course, it was agreed upon with the client to post a **"Coming Soon"** disclaimer on the sponsors page for now. After the next update, the sponsors pags will be styled simiarly to the cast and team page, featuring the logos and names of all current sponsors.

#### Contact
The contact page consists of three sections. The first section features links to the musicals **Facebook** and **Instagram** presence. The second section consists of sign-up form for the **newsletter**, which requests the visitor's email address followed by a *Submit  button**.  Finally, the third section consists of message form requesting the visitor's name and email address followed by a box to leave a message and another **Submit button**.

 
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