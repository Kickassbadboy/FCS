function insertData(){
  var cname = document.getElementById('name').value;
  //var cust_gender =document.getElementById('radio').value;
  var cust_addr = document.getElementById('address').value;
  var cust_mob=document.getElementById('mobile').value;
  var cust_blood_group =document.getElementById('bg').value;
  var cust_email =document.getElementById('email').value;
  var cust_reference=document.getElementById('cust_refer').value;
  var cust_fit_his=document.getElementById('cust_fit_hist').value;
  var cust_medic_his=document.getElementById('medic_hist').value;
  var joining_date =document.getElementById('joining_date').value;
  //var cust_ending_date =document.getElementById('ending_date').value;
  var cust_occupation =document.getElementById('occupation').value;
  //var users = firebase.database().ref("users/");
var firebaseRef = firebase.database().ref(); // connection to database
firebaseRef.child("users/").push({    // inserting data in realtime {

  customer_name:cname,

  customer_addr:cust_addr,
  customer_mob:cust_mob,
  customer_blood_group:cust_blood_group,
  customer_email:cust_email,
  customer_reference:cust_reference,
  //cust_quest:,
//  cust_quest_level:"1",
  cust_medic:cust_medic_his,
  cust_fit_history:cust_fit_his,
  cust_join_date:joining_date

}
);
}




//View Customer Data Here
