setInterval(()=>{
    // console.log("omi");
    d= new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();


    hrotation= 30 * htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;



    hour.style.transform = `rotate(${hrotation}deg)`
    min.style.transform = `rotate(${mrotation}deg)`
    sec.style.transform = `rotate(${srotation}deg)`
   
   
    // console.log(date);
},1000)