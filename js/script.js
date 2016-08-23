
function Get_Timestamp(){
  var time = new Date()
  var detik = time.getSeconds()
  var menit = time.getMinutes()
  var jam = time.getHours()
  var day = time.getDate()
  var hari = time.getDay()
  var month = time.getMonth()
  var year = time.getFullYear()

  var indmonth = ['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER']
  var indhari = ['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU']

  var tanggalnya = day +' '+ indmonth[month] +' '+ year
  var jamnya = jam +':'+ menit +':'+ detik

  document.getElementById('tanggal').innerHTML = tanggalnya
  document.getElementById('hari').innerHTML = indhari[hari]
  document.getElementById('jam').innerHTML = jamnya
}
setInterval('Get_Timestamp()',1000)

function Get_Sensor_Value(){

  //Bagian ini digunakan untuk membangkitkan nilai acak untuk sensor
  //Bagian ini perlu dihapus jika akan diintegrasikan dengan aplikasi back-end
  var val = Math.floor((Math.random()*100)+1) // nilai acak untuk status dan kompas
  var val1 = Math.floor((Math.random()*100)+1) // nilai acak untuk kemiringan tilt angel
  var val2 = Math.floor((Math.random()*100)+1) // nilai acak untuk roll angel
  var val3 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor suhu
  var val4 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor cahaya
  var val5 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor tanah
  var val6 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor kedalaman
  var val7 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor asap
  var val8 = Math.floor((Math.random()*100)+1) //nilai acak untuk sensor api

  //ini untuk memberikan index array untuk variabel statusnya
  if(val<11){status=0}
  else{status=1}

  // ini untuk konversi nilai derajat kompas
  if(val<=50){compass_val = -1*(Math.floor(val*0.9))}
  else if(val>50){compass_val = Math.floor((val-50)*0.9)}

  // ini untuk konversi nilai derajat kemiringan/tilt angel
  if(val1<=50){kemiringan_val = -1*(Math.floor(val*0.4))}
  else if(val1>50){kemiringan_val = Math.floor((val-50)*0.4)}

  // ini untuk konversi nilai derajat roll angel
  if(val2<=50){roll_val = -1*(Math.floor((val*1.04)-16))}
  else if(val2>50){roll_val = Math.floor(((val-50)*1.04)-16)}

  // ini untuk konversi nilai suhu
  temp_val = val3
  temp_dn = Math.floor(val3*1023/100)

  // ini untuk konversi nilai cahaya
  light_val = val4
  light_dn = Math.floor(val4*1023/100)

  // ini untuk konversi nilai soil moisture
  soil_val = val5
  soil_dn = Math.floor(val5*1023/100)

  // ini untuk konversi nilai kedalaman
  depth_val = val6
  depth_dn = Math.floor(val6*1023/100)

  // ini untuk konversi nilai smoke
  smoke_val = val7*1.8
  smoke_persen = val7
  smoke_dn = Math.floor(val7*1023/100)

  // ini untuk konversi nilai smoke
  flame_val = val8*1.8
  flame_persen = val8
  flame_dn = Math.floor(val8*1023/100)

  var statusnya = ['NOT CONNECTED','CONNECTED']
  var kelasnya = ['unconnect', 'connect']

  // Berikan nilai untuk status koneksi
  document.getElementById('koneksi').innerHTML = statusnya[status]
  if (status == 1) {document.getElementById('koneksi').className = 'connect'}
  else {document.getElementById('koneksi').className = 'unconnect'}

  // Berikan nilai untuk derajat kemiringan kompas
  document.getElementById('compass').style.transform = 'rotate('+ compass_val +'deg)'

  // Berikan nilai untuk derajat kemiringan tilt sensor
  document.getElementById('kemiringan').style.transform = 'rotate('+ kemiringan_val +'deg)'

  // Berikan nilai untuk derajat kemiringan roll sensor
  document.getElementById('sudut').style.marginTop = roll_val +'px'
  //document.getElementById('test').innerHTML = val

  // Berikan nilai untuk suhu
  document.getElementById('temp').innerHTML = temp_val
  document.getElementById('temp-dn').innerHTML = temp_dn

  // Berikan nilai untuk cahaya
  document.getElementById('light').innerHTML = light_val
  document.getElementById('light-dn').innerHTML = light_dn

  // Berikan nilai untuk soil moisture
  document.getElementById('soil').innerHTML = soil_val
  document.getElementById('soil-dn').innerHTML = soil_dn

  // Berikan nilai untuk soil moisture
  document.getElementById('depth').innerHTML = depth_val
  document.getElementById('depth-dn').innerHTML = depth_dn

  // Berikan nilai untuk smoke
  document.getElementById('smoke').style.transform = 'rotate('+ smoke_val +'deg)'
  document.getElementById('smoke-persen').innerHTML = smoke_persen
  document.getElementById('smoke-dn').innerHTML = smoke_dn

  // Berikan nilai untuk flame
  document.getElementById('flame').style.transform = 'rotate('+ flame_val +'deg)'
  document.getElementById('flame-persen').innerHTML = flame_persen
  document.getElementById('flame-dn').innerHTML = flame_dn
}
setInterval('Get_Sensor_Value()',2000)
