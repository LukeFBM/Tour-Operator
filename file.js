function myFunction() {

    let x = document.getElementById("floatingInput").value;
    let y = document.getElementById("floatingPassword").value;

    if (x == "" || y == "") {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

