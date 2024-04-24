if(sessionStorage.getItem("user-id") == null){
    document.getElementById("login-open").click();
} else {
    startStop();
}

document.getElementById("login-info").addEventListener("submit", function(event) {
    event.preventDefault();

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
        startStop();
        sessionStorage.setItem("user-id", userId);
        document.getElementById("login-close").click();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
});
