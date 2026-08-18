const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const digital = document.getElementById('digital');
const date = document.getElementById('date');
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG",
    "SEP", "OCT", "NOV", "DEC"];

function clock(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    hour.style.transform = `rotate(${h*30+m/20}deg)`;
    minute.style.transform = `rotate(${m*6+s*0.1}deg)`;
    second.style.transform = `rotate(${s*6}deg)`;
}