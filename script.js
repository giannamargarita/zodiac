function zodiac(day, month){ 
 // returns the zodiac sign according to day and month ( https://coursesweb.net/ ) 
 var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']; 
 var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 22, 22, 21, 20, 19]; 
 return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
} 
document.getElementById('test_z').onclick = function(){ 
 document.getElementById('s_zodiac').innerHTML = zodiac(document.getElementById('s_days').value, document.getElementById('s_m').value); 
}
