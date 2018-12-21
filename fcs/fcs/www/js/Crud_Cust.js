function insertData(){
  var cname = document.getElementById('name').value;
  var pno = document.getElementById('pno').value;
  var cgen = document.getElementById('cgen').value;

  //var users = firebase.database().ref("users/");
var firebaseRef = firebase.database().ref(); // connection to database
firebaseRef.child("users/").push({    // inserting data in realtime {

  customer_name:"yash",
  customer_gender:"male",
  customer_addr:"pune",
  customer_mob:"999999",
  customer_blood_group:"a+",
  customer_desc:"blahlha",
  cust_how_info:"from friend",
  cust_quest:"NO, i dont know",
  cust_quest_level:"1",
  cust_medic:"None",
  cust_fit_history:"2",

}
);
}

/*
function insert_cust()
{
customer_name;
customer_gender;
customer_addr;
customer_mob;
customer_blood_group;
customer_desc;
cust_how_info;
cust_quest;
cust_quest_level;
cust_medic;
cust_fit_history;
}
function update_cust()
{
  customer_name;
  customer_gender;
  customer_addr;
  customer_mob;
  customer_blood_group;
  customer_desc;
  cust_how_info;
  cust_quest;
  cust_quest_level;
  cust_medic;
  cust_fit_history;
}
function delete()
{
  customer_name;
  customer_gender;
  customer_addr;
  customer_mob;
  customer_blood_group;
  customer_desc;
  cust_how_info;
  cust_quest;
  cust_quest_level;
  cust_medic;
  cust_fit_history;
}
*/
