$('#loginForm').submit(function(event) {
    event.preventDefault();
    
    var username = $('#username').val();
    var password = $('#password').val();
  
    // Check credentials
    if (username === "admin" && password === "12345") {
      // Redirect to main page
      window.location.href="todolist.html";
    } else {
      alert("Invalid username or password");
    }
  });