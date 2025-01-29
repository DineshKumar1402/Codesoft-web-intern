document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const feedback = document.getElementById("feedback").value;
  
    // form validation
    if (name && email && mobile && feedback) {
      alert("Feedback Submitted Successfully!\n\n" + 
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Mobile: " + mobile + "\n" +
            "Feedback: " + feedback);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
  


