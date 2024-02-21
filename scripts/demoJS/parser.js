fetch('./demoFolder/demoCode.html')
    .then(response => response.text())
    .then(data => {
        var eofMarker = "</html>";
        var eofIndex = data.indexOf(eofMarker);

        var sofMarker = "<body>";
        var sofIndex = data.indexOf(sofMarker);
        
        newText = data;
        var startMarker = "<!-- Code injected by live-server -->";
        var endMarker = "</script>";

        i = sofIndex;
        while (i < eofIndex) {
            var startIndex = newText.indexOf(startMarker, i);
            var endIndex = newText.indexOf(endMarker, i);

            if (startIndex !== -1 && endIndex !== -1) {
                newText = newText.substring(0, startIndex) + newText.substring(endIndex + endMarker.length + 1);
                i = startIndex;
            }
            else{
                break;
            }
        }
        newText = replaceTags(newText);

        var codeElement = document.getElementById('code');
        codeElement.textContent = newText;

        codeElement.classList.add('language-html');
        hljs.highlightElement(codeElement);
    })
    .catch(error => console.error('Error fetching file:', error));