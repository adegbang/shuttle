var firebaseConfig = {
    apiKey: "AIzaSyBp44YGezL49chlhzBTixnIzgiTY-5fNeQ",
    authDomain: "auth-53c94.firebaseapp.com",
    databaseURL: "https://auth-53c94.firebaseio.com",
    projectId: "auth-53c94",
    storageBucket: "auth-53c94.appspot.com",
    messagingSenderId: "192902077110",
    appId: "1:192902077110:web:b853dcf14b792a1d2ee417",
    measurementId: "G-4YECLC1S7N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


  $("#btn-signin").click(function()
  {

var email=$("#email").val();
var password=$("#password").val();
    if(email!=""&& password !="")
    {
        var email= firebase.auth().signInWithEmailAndPassword(email,password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message:"+errorMessage);  


    });
}
    else
    {
        window.alert("Form is incomplete. please fill out all the fields");
    }


  });
  $("#btn-logout").click(function()
  {
    firebase.auth.signOut;  
  });
  $("#btn-signup").click(function()
  {

var email=$("#email").val();
var phonenumber=$("#phonenumber").val();
var password=$("#password").val();

    if(email!=""&& phonenumber!=""&& password !="")
    {
        var result= firebase.auth().createUserWithEmailAndPassword(email,password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message:"+errorMessage);  


    });
}
    else
    {
        window.alert("Form is incomplete. please fill out all the fields");
    }


  });