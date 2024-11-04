let data = [
{
// Success Criteria 1.1.1 Text-Alternatives
"Incorrect" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">`,
"Correct" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;" alt="A stationary car image"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">              <!-- The alternative text should be provided so users can understand the content even if they cannot see the image. -->`,
"Criterion" :
'Criteria 1.1.1'
},

{
"Incorrect" : 
`<video controls style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;">
            <source src="./demoFolder/carVideo.mp4" type="video/mp4">
        </video><br class="break">`,
"Correct" : 
`<video controls style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;">
            <source src="./demoFolder/carVideo.mp4" type="video/mp4">
            <track kind="captions" label="English" src="captions.vtt" srclang="en">
        </video><br class="break">`,
"Chosen":
"",
"Commented" : 
`<video controls style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;">               <!-- Subtitles to be video should be provided. -->
            <source src="./demoFolder/carVideo.mp4" type="video/mp4">
        </video><br class="break">`,
"Criterion" :
'Criteria 1.2.1'
},

{
"Incorrect" : 
`<div>
            <span>The Evolution of Cars</span>
            <p>Cars have transformed from basic transportation tools into sophisticated machines that blend technology, comfort, and style. The design and engineering of cars continue to evolve, shaping the future of transportation.</p>
        </div><br class="break">`,
"Correct" : 
`<article>
            <h2>The Evolution of Cars</h2>
            <p>Cars have transformed from basic transportation tools into sophisticated machines that blend technology, comfort, and style. The design and engineering of cars continue to evolve, shaping the future of transportation.</p>
        </article><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div>              <!-- Semantic HTML elements provide meaning and context to the content, making it more accessible. -->
            <span>The Evolution of Cars</span>
            <p>Cars have transformed from basic transportation tools into sophisticated machines that blend technology, comfort, and style. The design and engineering of cars continue to evolve, shaping the future of transportation.</p>
        </div><br class="break">`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Success Criteria 1.3.2 Meaningful sequences
"Incorrect" : 
`<article>
            <p>Cars have left an indelible mark on culture, shaping everything from fashion to film. Iconic models like the Ford Mustang or Volkswagen Beetle have become symbols of eras, embodying the spirit and aspirations of their times.</p>
            <h2>The Cultural Impact of Cars</h2>
        </article><br class="break">`,
"Correct" : 
`<article>
            <h2>The Cultural Impact of Cars</h2>
            <p>Cars have left an indelible mark on culture, shaping everything from fashion to film. Iconic models like the Ford Mustang or Volkswagen Beetle have become symbols of eras, embodying the spirit and aspirations of their times.</p>
        </article><br class="break">`,
"Chosen":
"",
"Commented" : 
`<article>              <!-- Heading of the article should appear before the content. -->
            <p>Cars have left an indelible mark on culture, shaping everything from fashion to film. Iconic models like the Ford Mustang or Volkswagen Beetle have become symbols of eras, embodying the spirit and aspirations of their times.</p>
            <h2>The Cultural Impact of Cars</h2>
        </article><br class="break">`,
"Criterion" :
'Criteria 1.3.2'
},

{
// Success Criteria 1.3.3 Don't solely rely on sensory characteristics of the content such as shape, color, size, visual location, orientation, or sound.
"Incorrect" :  
`<button type="button" class="btn btn-info" id="button-to-show-question" style="width: 50px; margin-left: auto; margin-right: auto;"></button><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-info" id="question-mark" style="width: 50px; margin-left: auto; margin-right: auto;">?</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button type="button" class="btn btn-info" id="button-to-show-question" style="width: 50px; margin-left: auto; margin-right: auto;"></button><br class="break">                <!-- Don't solely rely on sensory characteristics of the content such as shape, color, size, visual location, orientation, or sound. -->`,
"Criterion" :
'Criteria 1.3.3'
},

{
// Success Criteria 1.4.1 Ensure information conveyed by color is also conveyed without color
"Incorrect" : 
`<h2 style="color: red;">Copyright Notice</h2>
    <p>©We do not own any of the images, videos, or audio content featured on this website. All such media are the property of their respective owners and are used here for informational and educational purposes only.</p>`,
"Correct" : 
`<h2 style="color: red;"><span style="border: 2px solid red;">Copyright Notice</span></h2>
    <p>©We do not own any of the images, videos, or audio content featured on this website. All such media are the property of their respective owners and are used here for informational and educational purposes only.</p>`,
"Chosen":
"",
"Commented" : 
`<h2 style="color: red;">Copyright Notice</h2>             <!-- Information conveyed by color should also be conveyed without color. -->
    <p>©We do not own any of the images, videos, or audio content featured on this website. All such media are the property of their respective owners and are used here for informational and educational purposes only.</p>`,
"Criterion" :
'Criteria 1.4.1'
},

{
// Success Criteria 1.4.2 Provide controls to pause, stop, or adjust the volume of audio content
"Incorrect" : 
`<audio autoplay>
        <source src="./demoFolder/backgroundAudio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio><br class="break">`,
"Correct" : 
`<audio controls>
        <source src="./demoFolder/backgroundAudio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio><br class="break">`,
"Chosen":
"",
"Commented" : 
`<audio autoplay>               <!-- Controls to pause, stop, or adjust the volume of audio content should be provided to the user. -->
        <source src="./demoFolder/backgroundAudio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio><br class="break">`,
"Criterion" :
'Criteria 1.4.2'
},

{
// Success Criteria 2.1.1 All Content should be focusable
"Incorrect" : 
`<div onclick="bookService()">Book Service</div><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="bookService()" tabindex="0">Book Service</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onclick="bookService()">Book Service</div><br class="break">             <!-- All contents should be focusable. -->`,
"Criterion" :
'Criteria 2.1.1'
},

{
// Success Criteria 2.1.4 Avoid the use of single-character key shortcuts
"Incorrect" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()" accesskey="s">Schedule Test Drive.</button><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()">Schedule Test Drive.</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()" accesskey="s">Schedule Test Drive.</button><br class="break">               <!-- Use of single-character key shortcuts should be avoided. -->`,
"Criterion" :
'Criteria 2.1.4'
},

{
// Success Criteria 2.2.1 Allow users to adjust or disable session timeouts.
"Incorrect" : 
`<meta http-equiv="refresh" content="300; url=logout.html">`,
"Correct" :  
`<meta http-equiv="refresh" content="600; url=logout.html">`,
"Chosen":
"",
"Commented" : 
`<meta http-equiv="refresh" content="300; url=logout.html">               <!-- Users should be allowed adjust or disable session timeouts. -->`,
"Criterion" :
'Criteria 2.2.1'
},

{
// Success Criteria 2.2.2 Automatic refresh is set to 0 seconds, meaning it won't automatically refresh. Additionally, a button is provided, allowing users to control when they navigate to the specified URL.
"Incorrect" : 
`<meta http-equiv="refresh" content="5; url=bookingServices.com">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="location.href='example.com'" style="transform: translateX(-50%); position: relative; left: 50%;" >Go to booking services</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<meta http-equiv="refresh" content="5; url=bookingServices.com">               <!-- Automatic redirections after specific time can be disorienting and frustrating for users, especially if they weren't expecting it. -->`,
"Criterion" :
'Criteria 2.2.2'
},

{
// Success Criteria 2.3.1 No part of content should flash more than three times per second
"Incorrect" : 
`<div role="presentation" style="animation: flashing 0.25s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px;"></div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Correct" : 
`<div role="presentation" style="animation: flashing 1s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px"></div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Chosen":
"",
"Commented" : 
`<div role="presentation" style="animation: flashing 0.25s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px"></div><br class="break">               <!-- No part of content should flash more than three times per second. -->
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Criterion" :
'Criteria 2.3.1'
},

{
// Success Criteria 2.4.1 Navigation is easy
"Incorrect" : 
`<div id="Minor-Section"><h2>Introduction: </h2>Time is one of our most valuable resources, fundamentally shaping how we experience life and achieve our goals. Understanding the significance of time encourages us to prioritize our tasks, set meaningful goals, and seize opportunities, ultimately leading to a more fulfilling and well-structured life.</div><br class="break">
    <div id="Important-Section"><h2>Main: </h2>Here, we offer a seamless booking experience for all your vehicle service needs. Whether you're scheduling routine maintenance, a comprehensive inspection, or specialized repairs, our online booking system is designed to make the process as convenient as possible.</div><br class="break">`,
"Correct" : 
`<a href="#Important-Section" class="skip-link">Skip To Main Section</a><br class="break">
    <div id="Minor-Section"><h2>Introduction: </h2>Time is one of our most valuable resources, fundamentally shaping how we experience life and achieve our goals. Understanding the significance of time encourages us to prioritize our tasks, set meaningful goals, and seize opportunities, ultimately leading to a more fulfilling and well-structured life.</div><br class="break">
    <div id="Important-Section"><h2>Main: </h2>Here, we offer a seamless booking experience for all your vehicle service needs. Whether you're scheduling routine maintenance, a comprehensive inspection, or specialized repairs, our online booking system is designed to make the process as convenient as possible.</div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div id="Minor-Section"><h2>Introduction: </h2>Time is one of our most valuable resources, fundamentally shaping how we experience life and achieve our goals. Understanding the significance of time encourages us to prioritize our tasks, set meaningful goals, and seize opportunities, ultimately leading to a more fulfilling and well-structured life.</div><br class="break">
    <div id="Important-Section"><h2>Main: </h2>Here, we offer a seamless booking experience for all your vehicle service needs. Whether you're scheduling routine maintenance, a comprehensive inspection, or specialized repairs, our online booking system is designed to make the process as convenient as possible.</div><br class="break">               <!-- Provide navigations to important sections. -->`,
"Criterion" :
'Criteria 2.4.1'
},

{
// Success Criteria 2.4.2 Add desccriptive and concise title for the page
"Incorrect" : 
`<title></title>`,
"Correct" : 
`<title>Accessibility Demo Website On Cars</title>`,
"Chosen":
"<title>Accessibility Demo Website On Cars</title>",
"Commented" : 
`<title></title>               <!-- Add desccriptive and concise title for the webpage. -->`,
"Criterion" :
'Criteria 2.4.2'
},

{
// Success Criteria 2.4.3 Meaningful order of focus
"Incorrect" : 
`<form>
        <button class="btn btn-primary" type="submit"  >Submit</button><br class="break">
        <label for="username">Name:</label>
        <input type="text" id="username" name="username"><br class="break">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </form><br class="break">`,
"Correct" : 
`<form>
        <label for="username">Name:</label>
        <input type="text" id="username" name="username"><br class="break">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br class="break">
        <button class="btn btn-primary" type="submit"  >Submit</button>
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form>               <!-- Form contents should be organized in a meaningful order. -->
        <button type="submit" class="btn btn-primary"  >Submit</button><br class="break">
        <label for="username">Name:</label>
        <input type="text" id="username" name="username"><br class="break">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </form><br class="break">`,
"Criterion" :
'Criteria 2.4.3'
},

{
// Success Criteria 2.4.4 Link purpose must be stated clearly
"Incorrect" : 
`<a href="/page1" style=" margin-left: auto; margin-right: auto;">Click here</a><br class="break">`,
"Correct" : 
`<a href="/contact" style=" margin-left: auto; margin-right: auto;">Contact booking Services</a><br class="break">`,
"Chosen":
"",
"Commented" : 
`<a href="/page1" style=" margin-left: auto; margin-right: auto;">Click here</a><br class="break">               <!-- Link purpose must be stated clearly. -->`,
"Criterion" :
'Criteria 2.4.4'
},

{
// Success Criteria 2.5.1 Functionality triggered by a pointer gesture is also available through a single pointer without requiring a path-based gesture
"Incorrect" : 
`<div onpinch="openMenu()">Pinch to Open Menu</div><br class="break">`,
"Correct" : 
`<div onpinch="openMenu()" style="display: flex; justify-content: space-between; align-items: center;">Pinch to Open Menu
        <button type="button" class="btn btn-primary" onclick="openMenu()"   style="margin-left: auto; margin-right: 20px;">Open Menu</button><br class="break">
    </div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onpinch="openMenu()">Pinch to Open Menu</div><br class="break">             <!-- Functionality triggered by a pointer gesture should also be available through a single pointer without requiring a path-based gesture. -->`,
"Criterion" :
'Criteria 2.5.1'
},

{
// Success Criteria 2.5.2 Provide alternatives for content that relies on motion, like autoplaying videos
"Incorrect" : 
`<video autoplay style="height: 200px; width: 300px">
        <source src="./demoFolder/carExhibition.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video><br class="break">`,
"Correct" : 
`<video controls style="height: 200px; width: 300px">
        <source src="./demoFolder/carExhibition.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video><br class="break">`,
"Chosen":
"",
"Commented" : 
`<video autoplay style="height: 200px; width: 300px">               <!-- Users may find autoplay annoying, especially if they're not expecting it or if it consumes bandwidth unnecessarily. -->
        <source src="./demoFolder/carExhibition.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video><br class="break">`,
"Criterion" :
'Criteria 2.5.2'
},

{
// Success Criteria 2.5.3 Label purpose must be clear
"Incorrect" : 
`<label for="search">Field1:</label>
    <input type="text" id="search" name="search"><br class="break">`,
"Correct" : 
`<label for="search">Search:</label>
    <input type="text" id="search" name="search"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<label for="search">Field1:</label>               <!-- Label purpose must be stated clearly. -->
    <input type="text" id="search" name="search"><br class="break">`,
"Criterion" :
'Criteria 2.5.3'
},

{
// Success Criteria 2.5.4 Provide alternatives for functionality that relies on motion or requires specific gestures.
"Incorrect" : 
`<div onshake="shakeDevice()">Shake to Activate</div><br class="break">`,
"Correct" : 
`<div onshake="shakeDevice()" style="display: flex; justify-content: space-between; align-items: center;">Shake to Activate
        <button class="btn btn-primary" onclick="shakeDevice()"   style="margin-left: auto; margin-right: 20px;">Shake Device</button><br class="break">
    </div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onshake="shakeDevice()">Shake to Activate</div><br class="break">               <!-- Alternatives for functionality that relies on motion or requires specific gestures must be provided. -->`,
"Criterion" :
'Criteria 2.5.4'
},

{
// Success Criteria 3.1.1 Language of page must be mentioned
"Incorrect" : 
`<html>`,
"Correct" : 
`<html lang="en">`,
"Chosen":
`<html lang="en">`,
"Commented" : 
`<html>               <!-- Language of page must be mentioned. -->`,
"Criterion" :
'Criteria 3.1.1'
},

{
// Success Criteria 3.2.1 Inconsistency in navigation
"Incorrect" : 
`<nav>
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="">Home</a></li>
            <li><a href="/about" style="">About</a></li>
            <li><div onclick="toggleContact()" style="">Contact</div></li>
        </ul>
    </nav>`,
"Correct" :  
`<nav>
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="">Home</a></li>
            <li><a href="/about" style="">About</a></li>
            <li><a href="/contact" style="">Contact</a></li>
        </ul>
    </nav>`,
"Chosen":
"",
"Commented" : 
`<nav>               <!-- Ways to navigate should be consistent. -->
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="">Home</a></li>
            <li><a href="/about" style="">About</a></li>
            <li><div onclick="toggleContact()" style="">Contact</div></li>
        </ul>
    </nav>`,
"Criterion" :
'Criteria 3.2.1'
},

{
// Success Criteria 3.3.1 Form submission is only allowed if there are no errors
"Incorrect" : 
`<form action="/submit" method="post">
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit" onclick="checkForErrors()"  >Submit</button>
    </form><br class="break">`,
"Correct" : 
`<form action="/submit" method="post" onsubmit="return checkForErrors()">
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit"  >Submit</button>
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form action="/submit" method="post">               <!-- Form submission should be allowed only if there are no errors. -->
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit" onclick="checkForErrors()" >Submit</button>
    </form><br class="break">`,
"Criterion" :
'Criteria 3.3.1'
},

{
// Success Criteria 3.3.2 Provide labels for form controls using the label element
"Incorrect" : 
`<input type="text" id="car-name" name="car-name"><br class="break">`,
"Correct" : 
`<label for="car-name">Car Name:</label>
    <input type="text" id="car-name" name="car-name"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<input type="text" id="car-name" name="car-name"><br class="break">               <!-- Labels for form controls should be provided using the label element. -->`,
"Criterion" :
'Criteria 3.3.2'
},

{
// Success Criteria 3.3.7 If same question is repeated, make sure that input is autopopulated
"Incorrect" : 
`<label for="userInput">Enter code to redeem discount:</label>
    <input type="text" id="userInput"><br class="break">
    <label for="userInputAgain">Enter code to redeem discount:</label>
    <input type="text" id="userInputAgain"><br class="break">`,
"Correct" : 
`<script>
        let previousEntry = '';
        function storePreviousEntry(element) {previousEntry = element.value;}
        function autopopulate(element) {element.value = previousEntry;}
    </script>
    <label for="userInput">Enter code to redeem discount:</label>
    <input type="text" id="userInput" onblur="storePreviousEntry(this)"><br class="break">
    <label for="userInputAgain">Enter code to redeem discount:</label>
    <input type="text" id="userInputAgain" onfocus="autopopulate(this)"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<label for="userInput">Enter code to redeem discount:</label>               <!-- If same question is repeated, make sure that input is autopopulated. -->
    <input type="text" id="userInput"><br class="break">
    <label for="userInputAgain">Enter code to redeem discount:</label>
    <input type="text" id="userInputAgain"><br class="break">`,
"Criterion" :
'Criteria 3.3.7'
},

{
// Success Criteria 4.1.2 User interface components must have accessible names and roles
"Incorrect" : 
`<button type="button" class="btn btn-primary" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" >X</button><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" aria-label="Close" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" >X</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button type="button" class="btn btn-primary" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" >X</button><br class="break">               <!--  User interface components must have accessible names and roles. -->`,
"Criterion" :
'Criteria 4.1.2'
},

{
// Test
"Incorrect" : 
`<p>Get deals <span style="font-weight: bold;">now</span>!</p><br class="break">`,
"Correct" : 
`Get deals <em>now</em>!<br class="break">`,
"Chosen":
"",
"Commented" : 
`<p>Get deals <span style="font-weight: bold;">now</span>!</p><br class="break">               <!--  Information, structure, and relationships conveyed through presentation should be programmatically determined. -->`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Test
"Incorrect" : 
`<div class="button" style="">Interested?</div><br class="break">`,
"Correct" : 
`<div role="button" tabindex="0" style="">Interested?</div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div class="button" style="">Interested?</div><br class="break">               <!--  User interface components and navigation must be operable. -->`,
"Criterion" :
'Criteria 2.1.1'
},

{
// Test
"Incorrect" : 
`<a href="google.com" style="">this is a link to a webpage</a><br class="break">`,
"Correct" : 
`<a href="google.com" style="">Go to Google</a><br class="break">`,
"Chosen":
"",
"Commented" : 
`<a href="google.com" style="">this is a link to a webpage</a><br class="break">               <!--  The target or purpose of the link must be clear by the link text alone. -->`,
"Criterion" :
'Criteria 2.4.4'
},

{
// Test
"Incorrect" : 
`<button button type="button" class="btn btn-primary" >buy</button><br class="break">`,
"Correct" : 
`<button button type="button" class="btn btn-primary" aria-label="buy cars" >buy cars</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button button type="button" class="btn btn-primary" >buy</button><br class="break">               <!--  A speech input user would say 'buy', but the speech software won't know what item to add. -->`,
"Criterion" :
'Criteria 2.5.3'
},

{
// Test
"Incorrect" : 
`<button button type="button" class="btn btn-primary" id="button" >submit</button>
    <button button type="button" class="btn btn-primary" id="button" >login</button><br class="break">`,
"Correct" : 
`<button button type="button" class="btn btn-primary" id="submit" >submit</button>
    <button button type="button" class="btn btn-primary" id="login" >login</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button button type="button" class="btn btn-primary" id="button" >submit</button>
    <button button type="button" class="btn btn-primary" id="button" >login</button><br class="break">              <!--  Make sure elements have unique IDs. -->`,
"Criterion" :
'Criteria 4.1.1'
},

{
// Test
"Incorrect" : 
`<img src="./demoFolder/buttonImage.jpeg" alt="click the button to open more info" style="width: 100px"><br class="break">`,
"Correct" : 
`<button button type="button" class="btn btn-primary" id="submit" >MORE INFO</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<img src="./demoFolder/buttonImage.jpeg" alt="click the button to open more info" style="width: 100px"><br class="break">              <!--  User interface components must have accessible names and roles. -->`,
"Criterion" :
'Criteria 4.1.2'
},

{
// Test
"Incorrect" : 
`<input name="userEmail" type="text" placeholder="Enter your email address"><br class="break">`,
"Correct" : 
`<input name="userEmail" type="email" placeholder="Enter your email address"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<input name="userEmail" type="text" placeholder="Enter your email address"><br class="break">              <!--  The purpose of input fields should be programmatically determinable. -->`,
"Criterion" :
'Criteria 1.3.5'
},

{
// Test
"Incorrect" : 
`<style>
        .card {
            width: 500px;
        }
    </style><br class="break">`,
"Correct" : 
`<style>
        .card{
            width: 100%;
        }
        @media screen and (min-width: 768px) {
            .card{
                width: 500px;
            }
        }
    </style><br class="break">`,
"Chosen":
"",
"Commented" : 
`<style>             <!--  Content adapts to different screen sizes and display orientation. -->
        .card {
            width: 500px;
        }
    </style><br class="break">`,
"Criterion" :
'Criteria 1.3.4'
},

{
// Test
"Incorrect" : 
`<style>
        .card-static-units {
            height: 200px;
            width: 400px;
        }
    </style><br class="break">`,
"Correct" : 
`<style>
        .card-dynamic-units {
            height: 12.5rem;
            width: 25rem;
        }
    </style><br class="break">`,
"Chosen":
"",
"Commented" : 
`<style>              <!-- Static sizing will affect the readability of the text if user zooms in. -->
        .card-static-units {
            height: 200px;
            width: 400px;
        }
    </style><br class="break">`,
"Criterion" :
'Criteria 1.4.4'
},

{
// Test
"Incorrect" : 
`<img src="./demoFolder/HeadingText.png" style="width: 500px"><br class="break">`,
"Correct" : 
`<h1 style="text-align: center;"><i>Hello! This Is A Demo Webpage On Cars.</i></h1><br><br class="break">`,
"Chosen":
`<h1 style="text-align: center;"><i>Hello! This Is A Demo Webpage On Cars.</i></h1><br><br class="break">`,
"Commented" :   
`<img src="./demoFolder/HeadingText.png" style="width: 500px"><br class="break">              <!-- Use real text as much as possible instead of images of text. -->`,
"Criterion" :
'Criteria 1.4.5'
},
{
// Test
"Incorrect" : 
`<label>Fill: </label>
    <input type="text"><br class="break">`,
"Correct" : 
`<label>Occupation: </label>
    <input name="occupation" type="text"><br class="break">`,
"Chosen":
``,
"Commented" :   
`<label>Fill: </label>              <!-- Headings and labels should be descriptive. -->
    <input type="text"><br class="break">`,
"Criterion" :
'Criteria 2.4.6'
},

{
// Test
"Incorrect" : 
`<p>Profitez de notre site!</p><br class="break">`,
"Correct" : 
`<p lang="fr">Profitez de notre site!</p><br class="break">`,
"Chosen":
``,
"Commented" :   
`<p>Profitez de notre site!</p><br class="break">              <!-- Programmatically define the language of any text or element with a different language than the primary. -->`,
"Criterion" :
'Criteria 3.1.2'
},

{
// Test
"Incorrect" : 
`<a href="https://www.w3.org/" style="color: black; text-decoration: none; ">See WCAG Guidelines</a><br class="break">`,
"Correct" : 
`<a href="https://www.w3.org/" style="">See WCAG Guidelines</a><br class="break">`,
"Chosen":
``,
"Commented" :   
`<a href="https://www.w3.org/" style="color: black; text-decoration: none; ">See WCAG Guidelines</a><br class="break">              <!-- Provide a clearly visible focus indicator for all the interactive elements. -->`,
"Criterion" :
'Criteria 2.4.7'
},

{
// Test
"Incorrect" :
`<a onFocus="this.blur()" href="./page.html" style="">Next Page</a><br class="break">`,
"Correct" : 
`<a href="./page.html" style="">Next Page</a><br class="break">`,
"Chosen":
``,
"Commented" :   
`<a onFocus="this.blur()" href="./page.html" style="">Next Page</a><br class="break">              <!-- Any keyboard operable UI must have a mode of operation where the keyboard focus indicator is visible. -->`,
"Criterion" :
'Criteria 2.4.7'
},

{
// Test
"Incorrect" : 
`<label for="username">Pet Name:</label>
    <input type="text" onFocus="this.blur();" name="username"><br class="break">`,
"Correct" : 
`<label for="username">Pet Name:</label>
    <input type="text" name="username"><br class="break">`,
"Chosen":
``,
"Commented" :   
`<label for="username">Pet Name:</label>              <!-- All contents should be focusable. -->
    <input type="text" onFocus="this.blur();" name="username"><br class="break">`,
"Criterion" :
'Criteria 2.1.1'
},

{
// Test
"Incorrect" : 
`Our recent sales:-
    <pre>
                        Monday          Tuesday	            Wednesday	                Thursday	            Friday
        8:00-9:00	    Sam				
        9:00-10:00                                          Dr. Williams	            Sam again	            Lewis
    </pre><br class="break">`,
"Correct" : 
`Our recent sales:-
    <table>
        <tr>
            <th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></tr>
        <tr>
            <td>8:00 - 9:00</td><td>Sam</td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
            <td>9:00 - 10:00</td><td></td><td></td><td>Dr. Williams</td><td>Sam again</td><td>Lewis</td>
        </tr>
    </table><br class="break">`,
"Chosen":
``,
"Commented" :   
`Our recent sales:-
    <pre>              <!-- Information, structure, and relationships conveyed through presentation should be programmatically determined. -->
                        Monday          Tuesday	            Wednesday	                Thursday	            Friday
        8:00-9:00	    Sam				
        9:00-10:00                                          Dr. Williams	            Sam again	            Lewis
    </pre><br class="break">`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Test
"Incorrect" : 
`<table>
        <tr><td>Cars</td><td>Top!</td></tr>
        <tr><td>Get You</td><td>To The</td></tr>
    </table><br class="break">`,
"Correct" : 
`<table>
        <tr><td>Cars</td><td>Get You</td></tr>
        <tr><td>To The</td><td>Top!</td></tr>
    </table><br class="break">`,
"Chosen":
``,
"Commented" :   
`<table>              <!-- The correct reading order should be programmatically determined. -->
        <tr><td>Cars</td><td>Top!</td></tr>
        <tr><td>Get You</td><td>To The</td></tr>
    </table><br class="break">`,
"Criterion" :
'Criteria 1.3.2'
},

{
// Test
"Incorrect" : 
`<table>
        <tr>
            <td><a href="#" style="">Mercedes</a></td>
            <td><img src="./demoFolder/car.jpg" alt="Car Image" style="width: 100px;"></td>
        </tr> 
        <tr><td><a href="#" style="">Ferreri</a></td></tr>
        <tr><td><a href="#" style="">Audi</a></td></tr>
    </table><br class="break">`,
"Correct" : 
`<table>
        <tr><td><a href="#" style="">Mercedes</a></td></tr> 
        <tr><td><a href="#" style="">Ferrari</a></td></tr>
        <tr><td><a href="#" style="">Aui</a></td></tr>
        <tr><td><img src="./demoFolder/car.jpg" alt="Car Image" style="width: 100px;"></td></tr>
    </table><br class="break">`,
"Chosen":
``,
"Commented" :   
`<table>              <!-- The correct reading order should be programmatically determined. -->
        <tr>
            <td><a href="#" style="">Mercedes</a></td>
            <td><img src="./demoFolder/car.jpg" alt="Car Image" style="width: 100px;"></td>
        </tr> 
        <tr><td><a href="#" style="">Ferrari</a></td></tr>
        <tr><td><a href="#" style="">Audi</a></td></tr>
    </table><br class="break">`,
"Criterion" :
'Criteria 1.3.2'
},

{
// Test
"Incorrect" : 
`<p>
        50% discount on cars for the next <span style="font-weight: bold; text-transform: uppercase;">15</span>, days! 
    </p><br class="break">`,
"Correct" : 
`<p>
        50% discount on cars for the next <strong>15</strong>, days! 
    </p><br class="break">`,
"Chosen":
``,
"Commented" :   
`<p>              <!--  The information conveyed by using the CSS font-weight property is not conveyed through semantic markup. -->
        50% discount on cars for the next <span style="font-weight: bold; text-transform: uppercase;">15</span>, days!
    </p><br class="break">`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Test
"Incorrect" : 
`<marquee>The Best Car Shop Ever!</marquee>`,
"Correct" : 
`<marquee onclick="this.stop()" onmouseout="this.start()">The Best Car Shop Ever!</marquee>`,
"Chosen":
``,
"Commented" :   
`<marquee>The Best Car Shop Ever!</marquee>              <!--  For scrolling information that lasts more than five seconds, users must be presented with mechanism to pause, stop or hide it. -->`,
"Criterion" :
'Criteria 2.2.2'
},

{
// Test
"Incorrect" : 
`<img src="./demoFolder/Tata.jpeg" alt="image" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">`,
"Correct" : 
`<img src="./demoFolder/Tata.jpeg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;" alt="A stationary Tata car image"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<img src="./demoFolder/Tata.jpeg" alt="image" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">              <!-- The alternative text should serve as an alternative without loss of any information. -->`,
"Criterion" :
'Criteria 1.1.1'
},

{
// Test
"Incorrect" : 
`<h2 style="text-align: center;">W e l c o m e</h2><br class="break">`,
"Correct" : 
`<h2 style="text-align: center;">Welcome</h2><br class="break">`,
"Chosen":
"",
"Commented" : 
`<h2 style="text-align: center;">W e l c o m e</h2><br class="break">             <!-- The use of white space characters for formatting a word is a failure to present meaningful sequences properly. -->`,
"Criterion" :
'Criteria 1.3.2'
},

{
// Test
"Incorrect" : 
`<h2 style="text-align: center;">C&nbsp;A&nbsp;R&nbsp;S!</h2><br class="break">`,
"Correct" : 
`<h2 style="text-align: center;">CARS!</h2><br class="break">`,
"Chosen":
"",
"Commented" : 
`<h2 style="text-align: center;">C&nbsp;A&nbsp;R&nbsp;S!</h2><br class="break">             <!-- The use of white space characters even as &nbsp; for formatting a word is a failure to present meaningful sequences properly. -->`,
"Criterion" :
'Criteria 1.3.2'
},

{
// Test
"Incorrect" : 
`<form id="form1" onsubmit="event.preventDefault();">
        <label for="AadharNumber">Aadhar Number:</label>
        <input type="text" name="AadharNumber" onchange="if false form1.submit();">
    </form><br class="break">`,
"Correct" : 
`<form id="form1" onsubmit="event.preventDefault();">
        <label for="AadharNumber">Aadhar Number:</label>
        <input type="text" name="AadharNumber">
        <button class="btn btn-primary" type="submit" >Submit</button><br class="break">
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form id="form1" onsubmit="event.preventDefault();">             <!-- Changing UI content shouldn't automatically change context unless user has been advised so. -->
        <label for="AadharNumber">Aadhar Number:</label>
        <input type="text" name="AadharNumber" onchange="if false form1.submit();">
    </form><br class="break">`,
"Criterion" :
'Criteria 3.2.2'
},

{
// Test
"Incorrect" : 
`<div style="animation: flashing 1s infinite; display: flex; align-items: center; justify-content: center;">
        <img src="./demoFolder/Enjoy.png" style="height: 200px; width: 200px;">
    </div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Correct" : 
`<div role="presentation" style="animation: flashing 1s infinite; display: flex; align-items: center; justify-content: center;">
        <img src="./demoFolder/Enjoy.png" style="height: 200px; width: 200px;">
    </div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Chosen":
"",
"Commented" : 
`<div style="animation: flashing 1s infinite; display: flex; align-items: center; justify-content: center;">                <!-- Decorative images should have alt="" attribute or role="presentation" attribute so it can be ignored by AT-->
        <img src="./demoFolder/Enjoy.png" style="height: 200px; width: 200px;">
    </div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Criterion" :
'Criteria 1.1.1'
},

{
// Test
"Incorrect" : 
`<span onclick="location.href='./Mahindra.html' style=''">
        Redirect to Mahindra Page
    </span><br class="break">`,
"Correct" : 
`<a href="./Mahindra.html" style="">Redirect to Mahindra Page</a><br class="break">`,
"Chosen":
"",
"Commented" : 
`<span onclick="location.href='./Mahindra.html' style=''">                <!-- Assistive technology would not recognize this element as a link. -->
        Redirect to Mahindra Page
    </span><br class="break">`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Test
"Incorrect" : 
`<p>Interested in learning more? Write to us at</p> 
    <h4>3333 Third Avenue, Suite 300 · New York City</h4>
    <p>And we'll send you the complete informational packet absolutely Free!</p><br class="break">`,
"Correct" : 
`<p>Interested in learning more? Write to us at 
    3333 Third Avenue, Suite 300 · New York City
    And we'll send you the complete informational packet absolutely Free!</p><br class="break">`,
"Chosen":
"",
"Commented" : 
`<p>Interested in learning more? Write to us at</p>                <!-- The address does not identify as a new section of the document, so it should not be marked as a heading. --> 
    <h4>3333 Third Avenue, Suite 300 · New York City</h4>
    <p>And we'll send you the complete informational packet absolutely Free!</p><br class="break">`,
"Criterion" :
'Criteria 1.3.1'
},

{
// Test
"Incorrect" : 
`<ol>
        <li><a href="./Tata.html" tabindex="4" style="">Tata Cars</a></li>
        <li><a href="./Mahindra.html" tabindex="3" style="">Mahindra Cars</a></li>
        <li><a href="./Ferrari" tabindex="1" style="">Ferrari Cars</a></li>
    </ol><br class="break">`,
"Correct" : 
`<ol>
        <li><a href="./Tata.html" style="">Tata Cars</a></li>
        <li><a href="./Mahindra.html" style="">Mahindra Cars</a></li>
        <li><a href="./Ferrari" style="">Ferrari Cars</a></li>
    </ol><br class="break">`,
"Chosen":
"",
"Commented" : 
`<ol>                <!-- Focusable components should receive focus in an order that preserves meaning and operability. -->
        <li><a href="./Tata.html" tabindex="4" style="">Tata Cars</a></li>
        <li><a href="./Mahindra.html" tabindex="3" style="">Mahindra Cars</a></li>
        <li><a href="./Ferrari" tabindex="1" style="">Ferrari Cars</a></li>
    </ol><br class="break">`,
"Criterion" :
'Criteria 2.4.3'
},

{
// Test
"Incorrect" : 
`<form>
        Preferred name: 
        <input type="text" name="preferredName">
    </form><br class="break">`,
"Correct" : 
`<form>
        <label for="preferredName">Preferred Name:</label>
        <input type="text" name="preferredName">
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form>                <!-- Form control elements should have a name and label exposed to Assistive Technologies. -->
        Preferred name: 
        <input type="text" name="preferredName">
    </form><br class="break">`,
"Criterion" :
'Criteria 4.1.2'
}
]