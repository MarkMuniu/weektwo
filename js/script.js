function submitInfo(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var DD = parseInt(document.getElementById("day").value);
  var MM = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;
  var YY = parseInt(year.slice(2,4));
  var CC = parseInt(year.slice(0,2));
  var personName = document.getElementById("name").value;
  var personBirthday = document.getElementById("birthday").value;

}