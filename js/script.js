function submitInfo(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var DD = parseInt(document.getElementById("day").value);
  var MM = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;
  var YY = parseInt(year.slice(2,4));
  var CC = parseInt(year.slice(0,2));
  var pickPosition = Math.abs(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10)+DD)%7);
  pickPosition = Math.floor(pickPosition);
  if(document.getElementById("hisgender").checked){
    var gender = 'male';
  }else{
    var gender = 'female';
  };
  var name = gender[pickPosition];
  days = days[pickPosition];
  var personName = document.getElementById("name").value;
  var personBirthday = document.getElementById("birthday").value;
  document.getElementById("name")

}