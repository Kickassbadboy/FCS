
 firebase.database().ref().child("users").on('value', function (snapshot) {
   snapshot.forEach(function(childSnapshot) {
    var name=childSnapshot.val().Customer_name;
  });
});
