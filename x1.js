let star = document.getElementById('st');
let moon = document.getElementById('moon');
let moun1 = document.getElementById('moun1');
let moun2 = document.getElementById('moun2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let m = document.getElementById('log2');


window.onscroll = function(){
    let v = scrollY;
    moon.style.top = v*3 + 'px' 
    moun1.style.top = v*.5 + 'px' 
    boat.style.left = v*1.5 + 'px' 
    moun2.style.top = v*.1 + 'px'
    m.style.fontSize = v + 'px'
    if(scrollY>90){
        m.style.fontSize = 80 + 'px' 
        m.style.position = 'fixed'
    }
    if(scrollY>560){
        m.style.display = 'none'
    }
    else{
        m.style.display = 'block'
    }
    if(scrollY>125){
        let con = document.querySelector('.con')
        con.style.background = 'linear-gradient(#82bad2 , #82bad2)'}


        if(scrollY<125){
            let con = document.querySelector('.con')
            con.style.background = 'linear-gradient(#001820 , #10001f)'
        }
    }

/** 
 let bt = document.getElementById('bt');
 window.onscroll = function(){
    let v=scrollY;
    if(v>230){
        bt.style.display = 'block'
     }else{
        bt.style.display = 'none'
     }
    }
*/
    