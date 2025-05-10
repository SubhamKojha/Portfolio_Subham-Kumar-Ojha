const symbols = ['{', '}', '&lt;', '&gt;', '/', '\\', '()', '[]', 'JS', 'HTML', 'CSS', 'SQL', 'API', '()', '=>'];
    const bg = document.getElementById('bg-animation');
    for(let i=0;i<28;i++){
      const el = document.createElement('div');
      el.className = 'symbol';
      el.style.left = Math.random()*100+'vw';
      el.style.top = (Math.random()*100+10)+'vh';
      el.style.fontSize = (1.5+Math.random()*2.5)+'rem';
      el.style.animationDuration = (8+Math.random()*14)+'s';
      el.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
      bg.appendChild(el);
    }
    for(let i=0;i<9;i++){
      const c = document.createElement('div');
      c.className = 'circuit';
      c.style.top = (Math.random()*100)+'vh';
      c.style.animationDuration = (12+Math.random()*10)+'s';
      bg.appendChild(c);
    }
    for(let i=0;i<6;i++){
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.style.left = Math.random()*100+'vw';
      chip.style.top = (Math.random()*100)+'vh';
      chip.style.animationDuration = (10+Math.random()*16)+'s';
      bg.appendChild(chip);
    }
    
    document.querySelectorAll('nav .nav-links a').forEach(link=>{
      link.addEventListener('click',function(e){
        const href = this.getAttribute('href');
        if(href.startsWith('#')){
          e.preventDefault();
          document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
      });
    });

    const sections = Array.from(document.querySelectorAll('section, #cv'));
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    function setActiveLink() {
      let index = sections.length-1;
      for(let i=0;i<sections.length;i++){
        if(window.scrollY + 80 < sections[i].offsetTop) {
          index = i-1;
          break;
        }
      }
      navLinks.forEach(l=>l.classList.remove('active'));
      if(index>=0 && navLinks[index]) navLinks[index].classList.add('active');
    }
    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);




    const toggleBtn = document.getElementById('toggle-mode');
    const body = document.body;
    function setMode(mode){
      if(mode==='light'){
        body.classList.add('light');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        body.classList.remove('light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      }
      localStorage.setItem('theme',mode);
    }
    toggleBtn.onclick = ()=>{
      setMode(body.classList.contains('light')?'dark':'light');
    };
    
    setMode(localStorage.getItem('theme')||'dark');

    const text = "coming soon...";
            let i = 0;
            function typeWriter() {
              if (i <= text.length) {
                document.getElementById("coming-soon").innerHTML = text.slice(0, i) + '<span style="opacity:0.4;">|</span>';
                i++;
                setTimeout(typeWriter, 120);
              } else {
                setTimeout(() => {
                  i = 0;
                  typeWriter();
                }, 1200);
              }
            }
            typeWriter();