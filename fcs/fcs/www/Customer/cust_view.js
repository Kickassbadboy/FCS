//Reading AND Display Customer data


/*
var config = {
  apiKey: "AIzaSyBRCFWB0Y6d2Fc_maBNX7bzG-t78lQMX_M",
  authDomain: "demofcs-38f75.firebaseapp.com",
  databaseURL: "https://demofcs-38f75.firebaseio.com",
  projectId: "demofcs-38f75",
  storageBucket: "demofcs-38f75.appspot.com",
  messagingSenderId: "232208593374"
};
firebase.initializeApp(config);
*/


//import insertData from './cust_add.js';

function myFunction(){

firebaseRef.child("users").on('value', function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var name=childSnapshot.val().customer_name;
    });
  });
  console.log(name);
/*
var infiniteList = document.getElementById('infinite-list');

  infiniteList.delegate = {
    createItemContent: function(i) {
      return ons.createElement('<ons-list-item>' + name + '</ons-list-item>');
    }
  };
 infiniteList.refresh();
 */
}
