let data = [
// Success Criteria 1.1.1 Text-Alternatives
{
"Incorrect" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">`,
"Correct" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;" alt="A stationary car image"><br class="break">`,
"Chosen":
"",
"Commented" : 
`<img src="./demoFolder/car.jpg" style="height: 200px; width: 300px; margin-left: auto; margin-right: auto;"><br class="break">              <!-- The alternative text should be provided so users can understand the content even if they cannot see the image. -->`
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
        </video><br class="break">`
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
        </div><br class="break">`
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
        </article><br class="break">`
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
`<button type="button" class="btn btn-info" id="button-to-show-question" style="width: 50px; margin-left: auto; margin-right: auto;"></button><br class="break">                <!-- Don't solely rely on sensory characteristics of the content such as shape, color, size, visual location, orientation, or sound. -->`
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
    <p>©We do not own any of the images, videos, or audio content featured on this website. All such media are the property of their respective owners and are used here for informational and educational purposes only.</p>`
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
    </audio><br class="break">`
},

{
// Success Criteria 2.1.1 All Content should be focusable
"Incorrect" : 
`<div onclick="bookService()">Book Service</div><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="bookService()" tabindex="0" disabled>Book Service</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onclick="bookService()">Book Service</div><br class="break">             <!-- All contents should be focusable. -->`
},

{
// Success Criteria 2.1.4 Avoid the use of single-character key shortcuts
"Incorrect" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()" accesskey="s" disabled>Schedule Test Drive.</button><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()" disabled>Schedule Test Drive.</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button type="button" class="btn btn-primary" onclick="scheduleTestDrive()" accesskey="s" disabled>Schedule Test Drive.</button><br class="break">               <!-- Use of single-character key shortcuts should be avoided. -->`
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
`<meta http-equiv="refresh" content="300; url=logout.html">               <!-- Users should be allowed adjust or disable session timeouts. -->`
},

{
// Success Criteria 2.2.2 Automatic refresh is set to 0 seconds, meaning it won't automatically refresh. Additionally, a button is provided, allowing users to control when they navigate to the specified URL.
"Incorrect" : 
`<meta http-equiv="refresh" content="5; url=bookingServices.com">`,
"Correct" : 
`<button type="button" class="btn btn-primary" onclick="location.href='example.com'" style="transform: translateX(-50%); position: relative; left: 50%;" disabled>Go to booking services</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<meta http-equiv="refresh" content="5; url=bookingServices.com">               <!-- Automatic redirections after specific time can be disorienting and frustrating for users, especially if they weren't expecting it. -->`
},

{
// Success Criteria 2.3.1 No part of content should flash more than three times per second
"Incorrect" : 
`<div style="animation: flashing 0.25s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px;"></div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Correct" : 
`<div style="animation: flashing 1s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px"></div><br class="break">
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`,
"Chosen":
"",
"Commented" : 
`<div style="animation: flashing 0.25s infinite; display: flex; align-items: center; justify-content: center;"><img src="./demoFolder/smileyFace.png" style="height: 200px; width: 200px"></div><br class="break">               <!-- No part of content should flash more than three times per second. -->
    <style>@keyframes flashing {0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } </style>`
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
    <div id="Important-Section"><h2>Main: </h2>Here, we offer a seamless booking experience for all your vehicle service needs. Whether you're scheduling routine maintenance, a comprehensive inspection, or specialized repairs, our online booking system is designed to make the process as convenient as possible.</div><br class="break">               <!-- Provide navigations to important sections. -->`
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
`<title></title>               <!-- Add desccriptive and concise title for the webpage. -->`
},

{
// Success Criteria 2.4.3 Meaningful order of focus
"Incorrect" : 
`<form>
        <button class="btn btn-primary" type="submit" disabled>Submit</button><br class="break">
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
        <button class="btn btn-primary" type="submit" disabled>Submit</button>
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form>               <!-- Form contents should be organized in a meaningful order. -->
        <button type="submit" class="btn btn-primary" disabled>Submit</button><br class="break">
        <label for="username">Name:</label>
        <input type="text" id="username" name="username"><br class="break">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </form><br class="break">`
},

{
// Success Criteria 2.4.4 Link purpose must be stated clearly
"Incorrect" : 
`<a href="/page1" style="pointer-events: none; margin-left: auto; margin-right: auto;">Click here</a><br class="break">`,
"Correct" : 
`<a href="/contact" style="pointer-events: none; margin-left: auto; margin-right: auto;">Contact booking Services</a><br class="break">`,
"Chosen":
"",
"Commented" : 
`<a href="/page1" style="pointer-events: none; margin-left: auto; margin-right: auto;">Click here</a><br class="break">               <!-- Link purpose must be stated clearly. -->`
},

{
// Success Criteria 2.5.1 Functionality triggered by a pointer gesture is also available through a single pointer without requiring a path-based gesture
"Incorrect" : 
`<div onpinch="openMenu()">Pinch to Open Menu</div><br class="break">`,
"Correct" : 
`<div onpinch="openMenu()" style="display: flex; justify-content: space-between; align-items: center;">Pinch to Open Menu
        <button type="button" class="btn btn-primary" onclick="openMenu()" disabled style="margin-left: auto; margin-right: 20px;">Open Menu</button><br class="break">
    </div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onpinch="openMenu()">Pinch to Open Menu</div><br class="break">             <!-- Functionality triggered by a pointer gesture should also be available through a single pointer without requiring a path-based gesture. -->`
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
    </video><br class="break">`
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
    <input type="text" id="search" name="search"><br class="break">`
},

{
// Success Criteria 2.5.4 Provide alternatives for functionality that relies on motion or requires specific gestures.
"Incorrect" : 
`<div onshake="shakeDevice()">Shake to Activate</div><br class="break">`,
"Correct" : 
`<div onshake="shakeDevice()" style="display: flex; justify-content: space-between; align-items: center;">Shake to Activate
        <button class="btn btn-primary" onclick="shakeDevice()" disabled style="margin-left: auto; margin-right: 20px;">Shake Device</button><br class="break">
    </div><br class="break">`,
"Chosen":
"",
"Commented" : 
`<div onshake="shakeDevice()">Shake to Activate</div><br class="break">               <!-- Alternatives for functionality that relies on motion or requires specific gestures must be provided. -->`
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
`<html>               <!-- Language of page must be mentioned. -->`
},

{
// Success Criteria 3.2.1 Inconsistency in navigation
"Incorrect" : 
`<nav>
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="pointer-events: none;">Home</a></li>
            <li><a href="/about" style="pointer-events: none;">About</a></li>
            <li><div onclick="toggleContact()" style="pointer-events: none;">Contact</div></li>
        </ul>
    </nav>`,
"Correct" :  
`<nav>
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="pointer-events: none;">Home</a></li>
            <li><a href="/about" style="pointer-events: none;">About</a></li>
            <li><a href="/contact" style="pointer-events: none;">Contact</a></li>
        </ul>
    </nav>`,
"Chosen":
"",
"Commented" : 
`<nav>               <!-- Ways to navigate should be consistent. -->
        <ul style="display: flex; justify-content: space-around;">
            <li><a href="/" style="pointer-events: none;">Home</a></li>
            <li><a href="/about" style="pointer-events: none;">About</a></li>
            <li><div onclick="toggleContact()" style="pointer-events: none;">Contact</div></li>
        </ul>
    </nav>`
},

{
// Success Criteria 3.3.1 Form submission is only allowed if there are no errors
"Incorrect" : 
`<form action="/submit" method="post">
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit" onclick="checkForErrors()" disabled>Submit</button>
    </form><br class="break">`,
"Correct" : 
`<form action="/submit" method="post" onsubmit="return checkForErrors()">
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit" disabled>Submit</button>
    </form><br class="break">`,
"Chosen":
"",
"Commented" : 
`<form action="/submit" method="post">               <!-- Form submission should be allowed only if there are no errors. -->
        <label for="reference">Booking Reference Number:</label>
        <input type="text" id="reference" name="reference"><br class="break">
        <button class="btn btn-primary" type="submit" onclick="checkForErrors()" disabled>Submit</button>
    </form><br class="break">`
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
`<input type="text" id="car-name" name="car-name"><br class="break">               <!-- Labels for form controls should be provided using the label element. -->`
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
    <input type="text" id="userInputAgain"><br class="break">`
},

{
// Success Criteria 4.1.2 User interface components must have accessible names and roles
"Incorrect" : 
`<button type="button" class="btn btn-primary" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" disabled>X</button><br class="break">`,
"Correct" : 
`<button type="button" class="btn btn-primary" aria-label="Close" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" disabled>X</button><br class="break">`,
"Chosen":
"",
"Commented" : 
`<button type="button" class="btn btn-primary" onclick="closeDialog()" style="width: 50px; margin-left: auto; margin-right: auto;" disabled>X</button><br class="break">               <!--  User interface components must have accessible names and roles. -->`
}
]