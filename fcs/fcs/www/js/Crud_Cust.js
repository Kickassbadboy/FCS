function insertData(){
  var cname = document.getElementById('name').value;
  var pno = document.getElementById('pno').value;
  var cust_gender =document.getElementById('cust_gender').value;
  var cust_addr = document.getElementById('').value;
  var cust_mob=document.getElementById('').value;
  var cust_blood_group =document.getElementById('').value;
  var cust_desc =document.getElementById('').value;
  var cust_reference=document.getElementById('').value;
  var cust_fit_his=document.getElementById('').value;
  var cust_medic_his=document.getElementById('').value;
  var joining_date =document.getElementById('').value;
  var cust_ending_date =document.getElementById('').value;

  //var users = firebase.database().ref("users/");
var firebaseRef = firebase.database().ref(); // connection to database
firebaseRef.child("users/").push({    // inserting data in realtime {

  customer_name:cname,
  customer_gender:cust_gender,
  customer_addr:cust_addr,
  customer_mob:cust_mob,
  customer_blood_group:cust_blood_group,
  customer_desc:cust_desc,
  customer_reference:cust_reference,
  //cust_quest:,
//  cust_quest_level:"1",
  cust_medic:cust_medic_his,
  cust_fit_history:cust_fit_his,
  cust_join_date:joining_date,
  cust_end_date:cust_ending_date

}
);
}

/*
Data(){
cname
pno
cust_gender
cust_addr
cust_mob
cust_blood_group
cust_desc
cust_reference
cust_fit_his
cust_medic_his
joining_date
cust_ending_date
}






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
