(()=>{
  const canvas=document.getElementById('blobField');
  const ctx=canvas?.getContext('2d');
  const clock=document.getElementById('clock');
  const bubble=document.querySelector('.status-bubble');
  const buddyOutput=document.getElementById('buddyOutput');
  let w=0,h=0,dpr=1,t=0,blobs=[];
  const rand=(a,b)=>a+Math.random()*(b-a);
  const palette=[318,176,76,262,142,192];

  function tick(){
    if(clock) clock.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  }
  setInterval(tick,10000); tick();

  document.addEventListener('pointermove',e=>{
    document.documentElement.style.setProperty('--mx',e.clientX+'px');
    document.documentElement.style.setProperty('--my',e.clientY+'px');
  },{passive:true});

  document.querySelectorAll('[data-guide]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-guide]').forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const msg=btn.dataset.message || `${btn.dataset.guide} is online. Pick a recipe and build the thing.`;
      if(bubble) bubble.innerHTML=`<b>${btn.dataset.guide} is online.</b><br>Pick a recipe and build the thing.`;
      if(buddyOutput) buddyOutput.textContent=msg;
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      if(id && id.length>1){
        const el=document.querySelector(id);
        if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
      }
    });
  });

  if(!canvas || !ctx) return;
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);
    w=innerWidth; h=innerHeight;
    canvas.width=w*dpr; canvas.height=h*dpr;
    canvas.style.width=w+'px'; canvas.style.height=h+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    seed();
  }
  function seed(){
    blobs=[];
    const n=Math.max(9,Math.min(18,Math.floor(w/115)));
    for(let i=0;i<n;i++){
      blobs.push({
        x:rand(-80,w+80),y:rand(-40,h+80),
        vx:rand(-.16,.16),vy:rand(-.12,.12),
        r:rand(80,190),seed:rand(0,999),hue:palette[i%palette.length]+rand(-16,16)
      });
    }
  }
  function shape(b){
    const wob=.18; const pts=[];
    for(let i=0;i<14;i++){
      const a=Math.PI*2*i/14;
      const wave=Math.sin(t*.0012+b.seed+i*1.7)*wob+Math.cos(t*.0009+b.seed*.6+i*2.1)*wob*.7;
      const rr=b.r*(1+wave);
      pts.push([b.x+Math.cos(a)*rr,b.y+Math.sin(a)*rr]);
    }
    ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]);
    for(let i=0;i<pts.length;i++){
      const p=pts[i],n=pts[(i+1)%pts.length];
      ctx.quadraticCurveTo(p[0],p[1],(p[0]+n[0])/2,(p[1]+n[1])/2);
    }
    ctx.closePath();
  }
  function drawBlob(b,i){
    const pulse=Math.sin(t*.001+b.seed)*.5+.5;
    const g=ctx.createRadialGradient(b.x-b.r*.2,b.y-b.r*.22,b.r*.08,b.x,b.y,b.r*1.35);
    g.addColorStop(0,`hsla(${b.hue+t*.018},100%,92%,.95)`);
    g.addColorStop(.18,`hsla(${b.hue+70},100%,66%,.88)`);
    g.addColorStop(.42,`hsla(${b.hue+155},100%,70%,.72)`);
    g.addColorStop(.68,`hsla(${b.hue+250},100%,70%,.56)`);
    g.addColorStop(1,`hsla(${b.hue+110},100%,55%,.02)`);
    ctx.save();
    ctx.shadowBlur=55+pulse*35;
    ctx.shadowColor=`hsla(${b.hue+120},100%,70%,.38)`;
    ctx.globalCompositeOperation='lighter';
    shape(b); ctx.fillStyle=g; ctx.fill();
    ctx.lineWidth=2; ctx.strokeStyle=`hsla(${b.hue+180+i*9},100%,86%,.46)`; ctx.stroke();
    ctx.restore();
  }
  function metaballLines(){
    ctx.save(); ctx.globalCompositeOperation='screen'; ctx.lineWidth=1;
    for(let i=0;i<blobs.length;i++) for(let j=i+1;j<blobs.length;j++){
      const a=blobs[i],b=blobs[j],dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy),limit=(a.r+b.r)*1.22;
      if(dist<limit){ctx.strokeStyle=`rgba(207,255,121,${(1-dist/limit)*.14})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    }
    ctx.restore();
  }
  function frame(now){
    t=now; ctx.clearRect(0,0,w,h);
    const bg=ctx.createRadialGradient(w*.5,h*.48,0,w*.5,h*.5,Math.max(w,h)*.75);
    bg.addColorStop(0,'rgba(38,55,33,.42)');
    bg.addColorStop(.48,'rgba(8,6,10,.96)');
    bg.addColorStop(1,'rgba(0,0,0,1)');
    ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
    blobs.forEach((b,i)=>{
      b.x+=b.vx+Math.sin(t*.0007+b.seed)*.08;
      b.y+=b.vy+Math.cos(t*.0008+b.seed)*.07;
      if(b.x<-b.r)b.x=w+b.r; if(b.x>w+b.r)b.x=-b.r;
      if(b.y<-b.r)b.y=h+b.r; if(b.y>h+b.r)b.y=-b.r;
      drawBlob(b,i);
    });
    metaballLines();
    requestAnimationFrame(frame);
  }
  addEventListener('resize',resize,{passive:true});
  resize(); requestAnimationFrame(frame);
})();
