let data = [];

for (let i = 0; i < 32; i++) {
  data.push(['', '', '']);
}

// Success Criteria 1.1.1 Text-Alternatives
data[0][0] = 
`<img src="/src/demo/car.jpg">
`;
data[0][1] = 
`<img src="/src/demo/car.jpg" alt="A car driving">
`;

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

// Success Criteria 1.3.3 Don't rely solely on sensory characteristics
data[4][0] = 
`<div style="background-color: red; width: 100px; height: 100px;"></div>
`;
data[4][1] = 
`<img src="image.jpg" alt="Visual representation of data">
`;

// Success Criteria 1.4.1 Ensure information conveyed by color is also conveyed without color
data[5][0] = 
`<h1 style="color: red;">Important Heading</h1>
    <p>This is some important information.</p>`;
data[5][1] = 
`<h1 style="color: red;"><span style="border: 2px solid red;">Important Heading</span></h1>
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

// Success Criteria 2.1.1 All Content should be focusable
data[7][0] = 
`<div onclick="myFunction()">Click me</div>
`;
data[7][1] = 
`<button onclick="myFunction()" tabindex="0">Click me</button>
`;

// Success Criteria 2.1.4 Avoid the use of single-character key shortcuts
data[8][0] = 
`<button onclick="submitForm()" accesskey="s">Submit</button>
`;
data[8][1] = 
`<button onclick="submitForm()">Submit</button>
`;

// Success Criteria 2.2.1 Allow users to adjust or disable session timeouts.
data[9][0] = 
`<meta http-equiv="refresh" content="300;url=logout.html">
`;
data[9][1] = 
`<meta http-equiv="refresh" content="600;url=logout.html">
`;

// Success Criteria 2.2.2 Automatic refresh is set to 0 seconds, meaning it won't automatically refresh. Additionally, a button is provided, allowing users to control when they navigate to the specified URL.
data[10][0] = 
`<meta http-equiv="refresh" content="5;url=example.com">
`;
data[10][1] = 
`<meta http-equiv="refresh" content="0;url=example.com">
    <button onclick="location.href="example.com"">Go to Example</button>`;

// Success Criteria 2.3.1 No part of content should flash more than three times per second
data[11][0] = 
`<div style="animation: flashing 0.5s infinite;"></div>
`;
data[11][1] = 
`<div style="animation: flashing 1s infinite;"></div>
`;

// Success Criteria 2.4.1 Navigation is easy
data[12][0] = 
`<div>Main content here</div>
`;
data[12][1] = 
`<a href="#main-content" class="skip-link">Skip to main content</a>
    <div id="main-content">Main content here</div>`;

// Success Criteria 2.4.2 Add desccriptive and concise title for the page
data[13][0] = 
`<title></title>
`;
data[13][1] = 
`<title>Accessible Page Title</title>
`;

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

// Success Criteria 2.4.4 Link purpose must be stated clearly
data[15][0] = 
`<a href="/page1">Click here</a>
`;
data[15][1] = 
`<a href="/contact">Contact Us</a>
`;

// Success Criteria 2.5.1 Functionality triggered by a pointer gesture is also available through a single pointer without requiring a path-based gesture
data[16][0] = 
`<div onpinch="openMenu()">Pinch to Open Menu</div>
`;
data[16][1] = 
`<button onclick="openMenu()">Open Menu</button>
`;

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

// Success Criteria 2.5.3 Label purpose must be clear
data[18][0] = 
`<label for="search">Field1:</label>
    <input type="text" id="search" name="search">`;
data[18][1] = 
`<label for="search">Search:</label>
    <input type="text" id="search" name="search">`;

// Success Criteria 2.5.4 Provide alternatives for functionality that relies on motion or requires specific gestures.
data[19][0] = 
`<div onshake="shakeDevice()">Shake to Activate</div>
`;
data[19][1] = 
`<button onclick="shakeDevice()">Shake Device</button>
`;

// Success Criteria 3.1.1 Language of page must be mentioned
data[20][0] = 
`<html>
`;
data[20][1] = 
`<html lang="en">
`;

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

// Success Criteria 3.3.2 Provide labels for form controls using the label element
data[23][0] = 
`<input type="text" id="username" name="username">
`;
data[23][1] = 
`<label for="username">Username:</label>
    <input type="text" id="username" name="username">`;

// Success Criteria 3.3.7 If same question is repeated, make sure that input is autopopulated
data[24][0] = 
`<label for="userInput">Enter something:</label>
    <input type="text" id="userInput">
    <br>
    <label for="userInput">Enter something:</label>
    <input type="text" id="userInput">`;
data[24][1] = 
`<label for="userInput">Enter something:</label>
    <input type="text" id="userInput">
    <br>
    <label for="userInput">Enter something:</label>
    <input type="text" id="userInput" onblur="storePreviousEntry(this)" onfocus="autopopulate(this)">`;

// Success Criteria 4.1.2 User interface components must have accessible names and roles
data[25][0] = 
`<button onclick="closeDialog()">X</button>
`;
data[25][1] = 
`<button aria-label="Close" onclick="closeDialog()">X</button>
`;