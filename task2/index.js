function storeDetails(){  
    var name=document.getElementById("username").value;  
    var password=document.getElementById("password").value;  
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(name.length == 0 || password.length == 0 || password.length<8){
        // !password.match(numbers)|| !password.match(upperCaseLetters) || !password.match(lowerCaseLetters)){
        window.location.href="./index.html";
        window.location.reload(true)
        window.location.replace("./index.html")
        alert("please fill in email & password correctly i.e., password must be of atleast 8 characters long including uppercase,lowercase letter and 1 number");
        
       
    }else{
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        window.location.href="./dashboard.html";
        alert("Your account has been created");
        
    }
    
}

    