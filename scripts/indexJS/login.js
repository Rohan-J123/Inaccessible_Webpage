if (sessionStorage.getItem("user-id") == null) {
    window.location.href = cloudURL;
}

var gameID;

async function createDocument() {
    try {
        const response = await fetch(cloudURL + '/createDocument', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ collectionName: collectionName })
        });

        const data = await response.json();
        gameID = data.documentId;
        console.log("New game document created with ID:", gameID);
        return gameID;
    } catch (error) {
        console.error("Error creating document:", error);
        return null;
    }
}

async function initializeGame() {
    if (!sessionStorage.getItem('game-id')) {
        gameID = await createDocument();
        if (gameID) {
            sessionStorage.setItem('game-id', gameID);
            addInitialData();
        } else {
            console.error('Failed to create game document.');
        }
    } else {
        gameID = sessionStorage.getItem('game-id');
    }
}

async function getPlayerData(docId) {
    try {
        const response = await fetch(cloudURL + `/getDocumentData?collectionName=player-data&id=${docId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.length > 0) {
            const username = data[0].name;
            const email = data[0].email;
            const previousGames = data[0].refuteGames || [];
            sessionStorage.setItem('user-name', username);
            sessionStorage.setItem('user-email', email);
            sessionStorage.setItem('previous-games', JSON.stringify(previousGames));
            initializeGame();
        } else {
            console.error("No data found for the given document ID");
        }
    } catch (error) {
        console.error("Error fetching document data:", error);
    }
}

async function addInitialData() {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + utcOffset + istOffset);

    try {
        const response = await fetch(cloudURL + `/addDocumentData?collectionName=${collectionName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: gameID,
                name: sessionStorage.getItem('user-name'),
                timestamp: String(istTime)
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data added successfully:", data);
        addPlayerGameID();

    } catch (error) {
        console.error("Error adding data:", error);
    }
}

async function addPlayerGameID() {
    let gameIDs = JSON.parse(sessionStorage.getItem('previous-games')) || [];
    gameIDs.push(gameID);

    try {
        const response = await fetch(cloudURL + `/addDocumentData?collectionName=player-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: sessionStorage.getItem('user-id'),
                refuteGames: gameIDs
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data added successfully:", data);
    } catch (error) {
        console.error("Error adding data:", error);
    }
}

if (!sessionStorage.getItem('user-name')) {
    getPlayerData(sessionStorage.getItem('user-id'));
}

function accountOpen() {
    const userName = sessionStorage.getItem('user-name');
    if (userName) {
        document.getElementById('account-name').innerText = "Name: " + sessionStorage.getItem('user-name');
        document.getElementById('account-email').innerText = "Email: " + sessionStorage.getItem('user-email');
        document.getElementById('account-score').innerText = document.getElementById('score-text').innerText;
    } else {
        console.error("User name not found in sessionStorage.");
    }
}