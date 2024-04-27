if(sessionStorage.getItem("user-id") == null){
    document.getElementById("login-open").click();
}

document.getElementById("login-info").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById('spinner-circle').style.display = 'block';
    const name = document.getElementById("login-name").value;
    const email = document.getElementById("login-email").value;
    const field = document.getElementById("login-field").value;
    const accessibilityKnowledge = document.getElementById("login-accessibilty-knowledge").value;
    var userId = db.collection("users").doc().id;
    db.collection("users").doc(userId).set({
        name: name,
        email: email,
        field: field,
        accessibilityKnowledge: accessibilityKnowledge
    })
    .then(function() {
        console.log("Document successfully written with ID: ", userId);
        sessionStorage.setItem("user-id", userId);
        sessionStorage.setItem("user-name", name);
        sessionStorage.setItem("user-email", email);
        document.getElementById('spinner-circle').style.display = 'none';
        document.getElementById("login-close").click();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
});

function accountOpen(){
    document.getElementById('account-name').innerText = "Name: " + sessionStorage.getItem('user-name');
    document.getElementById('account-email').innerText = "Email: " + sessionStorage.getItem('user-email');
    document.getElementById('account-score').innerText = document.getElementById('score-text').innerText;
}