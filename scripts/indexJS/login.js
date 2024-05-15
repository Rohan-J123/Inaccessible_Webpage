if(sessionStorage.getItem("user-id") == null){
    document.getElementById("login-open").click();
}

document.getElementById("login-info").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById('spinner-circle').style.display = 'block';
    const name = document.getElementById("login-name").value;
    const email = document.getElementById("login-email").value;
    const accessibilityKnowledge = document.getElementById("login-accessibilty-knowledge").value;
    const area = document.getElementById("login-area").value;

    var userId = db.collection("users").doc().id;
    console.log(typeof userId);

    firebase.auth().createUserWithEmailAndPassword(userId + "@123.com", userId)
    .then((userCredential) => {
        db.collection("users").doc(userId).set({
            name: name,
            email: email,
            accessibilityKnowledge: accessibilityKnowledge,
            area: area
        })
        .then(function() {
            console.log("Document successfully written with ID: ", userId);
            sessionStorage.setItem("user-id", userId);
            sessionStorage.setItem("user-name", name);
            sessionStorage.setItem("user-email", email);
            document.getElementById('spinner-circle').style.display = 'none';
            document.getElementById('First-Modal-Next').click();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error:", errorCode, errorMessage);
    });
});

function accountOpen(){
    document.getElementById('account-name').innerText = "Name: " + sessionStorage.getItem('user-name');
    document.getElementById('account-email').innerText = "Email: " + sessionStorage.getItem('user-email');
    document.getElementById('account-score').innerText = document.getElementById('score-text').innerText;
}

document.addEventListener("DOMContentLoaded", function() {
    var label1 = document.getElementById('login-accessibility-knowledge-label');
    var label2 = document.getElementById('login-area-label');
    
    var label1Height = label1.clientHeight;
    var label2Height = label2.clientHeight;
    
    var maxHeight = Math.max(label1Height, label2Height);
    
    label1.style.height = maxHeight + 'px';
    label2.style.height = maxHeight + 'px';
});