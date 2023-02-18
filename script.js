let hr = document.querySelector('#jam');
let mn = document.querySelector('#men');
let sc = document.querySelector('#det');

setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    let hour = document.getElementById('hour');
    let minut = document.getElementById('menu');
    let sec = document.getElementById('seco');
    let ampm = document.getElementById('ampm');
    
   
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";


    hour.innerHTML = h;
    minut.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = am;

    let dy = document.getElementById('dy');

    let d = new Date();

    dy.innerHTML = d;

})


