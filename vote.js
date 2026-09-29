function vote() {

    // Get input values

    let name =
        document.getElementById("name").value.trim();

    let age =
        document.getElementById("age").value;

    let nationality =
        document.getElementById("nationality").value.trim();

    let answer =
        document.getElementById("Answer");


    // Remove previous result styles

    answer.className = "";


    // Check empty fields

    if (
        name === "" ||
        age === "" ||
        nationality === ""
    ) {

        answer.innerHTML =
            "⚠️ Please fill in all the fields.";

        answer.classList.add("error");

        return;
    }


    // Convert age to number

    age = Number(age);


    // Validate age

    if (
        age <= 0 ||
        age > 120
    ) {

        answer.innerHTML =
            "⚠️ Please enter a valid age.";

        answer.classList.add("error");

        return;
    }


    // Convert nationality to lowercase

    let userNationality =
        nationality.toLowerCase();


    // Check voting eligibility

    if (
        age >= 18 &&
        userNationality === "indian"
    ) {

        answer.innerHTML =
            "✅ Congratulations, " +
            name +
            "!<br><br>" +
            "You are eligible to vote in India.";

        answer.classList.add("success");

    }


    else if (age < 18) {

        answer.innerHTML =
            "❌ Sorry, " +
            name +
            ".<br><br>" +
            "You must be at least 18 years old to vote.";

        answer.classList.add("error");

    }


    else {

        answer.innerHTML =
            "❌ Sorry, " +
            name +
            ".<br><br>" +
            "You must be an Indian citizen to vote in this checker.";

        answer.classList.add("error");

    }

}



// Reset everything

function resetForm() {

    document.getElementById("name").value = "";

    document.getElementById("age").value = "";

    document.getElementById("nationality").value = "";


    let answer =
        document.getElementById("Answer");

    answer.innerHTML = "";

    answer.className = "";

}



// Press Enter to submit

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            vote();

        }

    }
);



// Interactive background

document.addEventListener(
    "mousemove",
    function(event) {

        let x =
            (event.clientX / window.innerWidth) * 10;

        let y =
            (event.clientY / window.innerHeight) * 10;


        document.body.style.backgroundPosition =
            `${50 + x / 10}% ${50 + y / 10}%`;

    }
);