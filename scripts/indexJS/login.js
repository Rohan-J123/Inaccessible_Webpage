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
    const area = document.getElementById("login-area").value;

    // Calculate current IST time
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000; // Get the current UTC offset in milliseconds
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const istTime = new Date(now.getTime() + utcOffset + istOffset); // Adjust current time to IST    

    var subfield='';
    switch(document.getElementById("login-field").value){
        case 'High School Student': subfield = document.getElementById('subfield-highschool').value; break;
        case 'Undergraduate Student': subfield = document.getElementById('subfield-undergrad').value; break;
        case 'Graduate Student': subfield = document.getElementById('subfield-grad').value; break;
        case 'Working Professional': subfield = document.getElementById('subfield-worker').value; break;
        case 'Other': subfield = document.getElementById('subfield-other').value; break;
    }

    var userId = db.collection("users").doc().id;
    console.log(typeof userId);

    firebase.auth().createUserWithEmailAndPassword(userId + "@123.com", userId)
    .then((userCredential) => {
        db.collection("users").doc(userId).set({
            name: name,
            email: email,
            field: field,
            accessibilityKnowledge: accessibilityKnowledge,
            area: area,
            subfield: subfield,
            timestamp: String(istTime)
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

document.getElementById('login-field').addEventListener('change', function() {
    var selectedValue = '';
    switch (this.value) {
        case 'High School Student': selectedValue = 'subfield-highschool'; break;
        case 'Undergraduate Student': selectedValue = 'subfield-undergrad'; break;
        case 'Graduate Student': selectedValue = 'subfield-grad'; break;
        case 'Working Professional': selectedValue = 'subfield-worker'; break;
        case 'Other': selectedValue = 'subfield-other'; break;
    };
    var dropdowns = document.getElementById('sub-field-dropdowns').children;
    
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';    
    }

    document.getElementById(selectedValue).style.display = 'block';
    document.getElementById(selectedValue + '-label').style.display = 'block';
});