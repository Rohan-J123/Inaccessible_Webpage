let data = [];

for (let i = 0; i < 32; i++) {
  data.push(['', '', '', '']);
}

// Success Criteria 1.1.1 Text-Alternatives
data[0][0] = 
`<img src="/src/demo/car.jpg">`;
data[0][1] = 
`<img src="/src/demo/car.jpg" alt="A car driving">`;
data[0][3] = 
`<img src="/src/demo/car.jpg">              <!-- The alternative text should be provided so users can understand the content even if they cannot see the image. -->`;

// Success Criteria 1.2.1 Captions for videos
data[1][0] = 
`<video controls>
        <source src="video.mp4" type="video/mp4">
    </video>`;
data[1][1] = 
`<video controls>
        <source src="video.mp4" type="video/mp4">
        <track kind="captions" label="English" src="captions.vtt" srclang="en">
    </video>`;
data[1][3] = 
`<video controls>               <!-- Subtitles to be video should be provided. -->
        <source src="video.mp4" type="video/mp4">
    </video>`;

// Success Criteria 1.3.1
data[2][0] = 
`<div>
        <span>Main Article Title</span>
        <p>Article content goes here.</p>
    </div>`;
data[2][1] = 
`<article>
        <h1>Main Article Title</h1>
        <p>Article content goes here.</p>
    </article>`;
data[2][3] = 
`<div>              <!-- Semantic HTML elements provide meaning and context to the content, making it more accessible. -->
        <span>Main Article Title</span>
        <p>Article content goes here.</p>
    </div>`;

// Success Criteria 1.3.2 Meaningful sequences
data[3][0] = 
`<article>
        <p>Article content goes here.</p>
        <h2>Article Title</h2>
    </article>`;
data[3][1] = 
`<article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>`;
data[3][3] = 
`<article>              <!-- Heading of the article should appear before the content. -->
        <p>Article content goes here.</p>
        <h2>Article Title</h2>
    </article>`;

// Success Criteria 1.3.3 Don't solely rely on sensory characteristics of the content such as shape, color, size, visual location, orientation, or sound.
data[4][0] = 
`<div id="wrong-answer" style="background-color: red; width: 100px; height: 100px;"></div>`;
data[4][1] = 
`<div id="wrong-answer" style="background-color: red; width: 100px; height: 100px;">X</div>`;
data[4][3] = 
`<div id="div-to-show-wrong-answer" style="background-color: red; width: 100px; height: 100px;"></div>                <!-- Don't solely rely on sensory characteristics of the content such as shape, color, size, visual location, orientation, or sound. -->`;

// Success Criteria 1.4.1 Ensure information conveyed by color is also conveyed without color
data[5][0] = 
`<h2 style="color: red;">Important Heading</h2>
    <p>This is some important information.</p>`;
data[5][1] = 
`<h2 style="color: red;"><span style="border: 2px solid red;">Important Heading</span></h2>
    <p>This is some important information.</p>`;
data[5][3] = 
`<h2 style="color: red;">Important Heading</h2>             <!-- Information conveyed by color should also be conveyed without color. -->
    <p>This is some important information.</p>`;

// Success Criteria 1.4.2 Provide controls to pause, stop, or adjust the volume of audio content
data[6][0] = 
`<audio autoplay>
        <source src="autoplay-audio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio>`;
data[6][1] = 
`<audio controls>
        <source src="audio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio>`;
data[6][3] = 
`<audio autoplay>               <!-- Controls to pause, stop, or adjust the volume of audio content should be provided to the user. -->
        <source src="autoplay-audio.mp3" type="audio/mp3">Your browser does not support the audio element.
    </audio>`;

// Success Criteria 2.1.1 All Content should be focusable
data[7][0] = 
`<div onclick="myFunction()">Click me</div>`;
data[7][1] = 
`<button onclick="myFunction()" tabindex="0">Click me</button>`;
data[7][3] = 
`<div onclick="myFunction()">Click me</div>             <!-- All contents should be focusable. -->`;

// Success Criteria 2.1.4 Avoid the use of single-character key shortcuts
data[8][0] = 
`<button onclick="submitForm()" accesskey="s">Submit</button>`;
data[8][1] = 
`<button onclick="submitForm()">Submit</button>`;
data[8][3] = 
`<button onclick="submitForm()" accesskey="s">Submit</button>               <!-- Use of single-character key shortcuts should be avoided. -->`;

// Success Criteria 2.2.1 Allow users to adjust or disable session timeouts.
data[9][0] = 
`<meta http-equiv="refresh" content="300;url=logout.html">`;
data[9][1] = 
`<meta http-equiv="refresh" content="600;url=logout.html">`;
data[9][3] = 
`<meta http-equiv="refresh" content="300;url=logout.html">               <!-- Users should be allowed adjust or disable session timeouts. -->`;

// Success Criteria 2.2.2 Automatic refresh is set to 0 seconds, meaning it won't automatically refresh. Additionally, a button is provided, allowing users to control when they navigate to the specified URL.
data[10][0] = 
`<meta http-equiv="refresh" content="5;url=example.com">`;
data[10][1] = 
`<button onclick="location.href="example.com"">Go to Example</button>`;
data[10][3] = 
`<meta http-equiv="refresh" content="5;url=example.com">               <!-- Automatic redirections after specific time can be disorienting and frustrating for users, especially if they weren't expecting it. -->`;

// Success Criteria 2.3.1 No part of content should flash more than three times per second
data[11][0] = 
`<div style="animation: flashing 0.25s infinite;"></div>`;
data[11][1] = 
`<div style="animation: flashing 1s infinite;"></div>`;
data[11][3] = 
`<div style="animation: flashing 0.25s infinite;"></div>               <!-- No part of content should flash more than three times per second. -->`;

// Success Criteria 2.4.1 Navigation is easy
data[12][0] = 
`<div>Important Section</div>`;
data[12][1] = 
`<a href="#main-content" class="skip-link">Skip to important section</a>
    <div id="main-content">Important content here</div>`;
data[12][3] = 
`<div>Important Section</div>               <!-- Provide navigations to important sections. -->`;

// Success Criteria 2.4.2 Add desccriptive and concise title for the page
data[13][0] = 
`<title></title>`;
data[13][1] = 
`<title>Accessible Page Title</title>`;
data[13][3] = 
`<title></title>               <!-- Add desccriptive and concise title for the webpage. -->`;

// Success Criteria 2.4.3 Meaningful order of focus
data[14][0] = 
`<form>
        <button type="submit">Submit</button>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </form>`;
data[14][1] = 
`<form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button type="submit">Submit</button>
    </form>`;
data[14][3] = 
`<form>               <!-- Form contents should be organized in a meaningful order. -->
        <button type="submit">Submit</button>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </form>`;

// Success Criteria 2.4.4 Link purpose must be stated clearly
data[15][0] = 
`<a href="/page1">Click here</a>`;
data[15][1] = 
`<a href="/contact">Contact Us</a>`;
data[15][3] = 
`<a href="/page1">Click here</a>               <!-- Link purpose must be stated clearly. -->`;

// Success Criteria 2.5.1 Functionality triggered by a pointer gesture is also available through a single pointer without requiring a path-based gesture
data[16][0] = 
`<div onpinch="openMenu()">Pinch to Open Menu</div>`;
data[16][1] = 
`<div onpinch="openMenu()">Pinch to Open Menu</div>
    <button onclick="openMenu()">Open Menu</button>`;
data[16][3] = 
`<div onpinch="openMenu()">Pinch to Open Menu</div>             <!-- Functionality triggered by a pointer gesture should also be available through a single pointer without requiring a path-based gesture. -->`;

// Success Criteria 2.5.2 Provide alternatives for content that relies on motion, like autoplaying videos
data[17][0] = 
`<video autoplay>
        <source src="motion-video.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video>`;
data[17][1] = 
`<video controls>
        <source src="video.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video>`;
data[17][3] = 
`<video autoplay>               <!-- Users may find autoplay annoying, especially if they're not expecting it or if it consumes bandwidth unnecessarily. -->
        <source src="motion-video.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
    </video>`;

// Success Criteria 2.5.3 Label purpose must be clear
data[18][0] = 
`<label for="search">Field1:</label>
    <input type="text" id="search" name="search">`;
data[18][1] = 
`<label for="search">Search:</label>
    <input type="text" id="search" name="search">`;
data[18][3] = 
`<label for="search">Field1:</label>               <!-- Label purpose must be stated clearly. -->
    <input type="text" id="search" name="search">`;

// Success Criteria 2.5.4 Provide alternatives for functionality that relies on motion or requires specific gestures.
data[19][0] = 
`<div onshake="shakeDevice()">Shake to Activate</div>`;
data[19][1] = 
`<div onshake="shakeDevice()">Shake to Activate</div>
    <button onclick="shakeDevice()">Shake Device</button>`;
data[19][3] = 
`<div onshake="shakeDevice()">Shake to Activate</div>               <!-- Alternatives for functionality that relies on motion or requires specific gestures must be provided. -->`;

// Success Criteria 3.1.1 Language of page must be mentioned
data[20][0] = 
`<html>`;
data[20][1] = 
`<html lang="en">`;
data[20][3] = 
`<html>               <!-- Language of page must be mentioned. -->`;

// Success Criteria 3.2.1 Inconsistency in navigation
data[21][0] = 
`<nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><div onclick="toggleContact()">Contact</div></li>
        </ul>
    </nav>`;
data[21][1] = 
`<nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>`;
data[21][3] = 
`<nav>               <!-- Ways to navigate should be consistent. -->
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><div onclick="toggleContact()">Contact</div></li>
        </ul>
    </nav>`;

// Success Criteria 3.3.1 Form submission is only allowed if there are no errors
data[22][0] = 
`<form action="/submit" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <button type="submit" onclick="checkForErrors()">Submit</button>
    </form>`;
data[22][1] = 
`<form action="/submit" method="post" onsubmit="return checkForErrors()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <button type="submit">Submit</button>
    </form>`;
data[22][3] = 
`<form action="/submit" method="post">               <!-- Form submission should be allowed only if there are no errors. -->
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <button type="submit" onclick="checkForErrors()">Submit</button>
    </form>`;

// Success Criteria 3.3.2 Provide labels for form controls using the label element
data[23][0] = 
`<input type="text" id="name" name="name">`;
data[23][1] = 
`<label for="name">Name:</label>
    <input type="text" id="name" name="name">`;
data[23][3] = 
`<input type="text" id="name" name="name">               <!-- Labels for form controls should be provided using the label element. -->`;

// Success Criteria 3.3.7 If same question is repeated, make sure that input is autopopulated
data[24][0] = 
`<label for="userInput">Enter something:</label>
    <input type="text" id="userInput">
    <br>
    <label for="userInputAgain">Enter something:</label>
    <input type="text" id="userInputAgain">`;
data[24][1] = 
`<label for="userInput">Enter something:</label>
    <input type="text" id="userInput">
    <br>
    <label for="userInputAgain">Enter something:</label>
    <input type="text" id="userInputAgain" onblur="storePreviousEntry(this)" onfocus="autopopulate(this)">`;
data[24][3] = 
`<label for="userInput">Enter something:</label>               <!-- If same question is repeated, make sure that input is autopopulated. -->
    <input type="text" id="userInput">
    <br>
    <label for="userInputAgain">Enter something:</label>
    <input type="text" id="userInputAgain">`;

// Success Criteria 4.1.2 User interface components must have accessible names and roles
data[25][0] = 
`<button onclick="closeDialog()">X</button>`;
data[25][1] = 
`<button aria-label="Close" onclick="closeDialog()">X</button>`;
data[25][3] = 
`<button onclick="closeDialog()">X</button>               <!--  User interface components must have accessible names and roles. -->`;