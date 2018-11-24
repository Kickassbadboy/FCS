// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRCFWB0Y6d2Fc_maBNX7bzG-t78lQMX_M",
  authDomain: "demofcs-38f75.firebaseapp.com",
  databaseURL: "https://demofcs-38f75.firebaseio.com",
  projectId: "demofcs-38f75",
  storageBucket: "demofcs-38f75.appspot.com",
  messagingSenderId: "232208593374"
};
firebase.initializeApp(config);


var user = document.getElementById('name').value;
var pno = document.getElementById('pnp').value;
function insertData(user,pno){
  counter+=1;
  console.log(counter);
  var customers ={
    cname:user,
    phonenumber:pno

  }
  let db=firebase.database().ref("users/"+counter);
  db.set(customers);
}
