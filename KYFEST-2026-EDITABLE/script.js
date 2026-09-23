const setText=(id,value)=>{const el=document.getElementById(id);if(el)el.innerText=value};
const setLink=(id,value)=>{const el=document.getElementById(id);if(el)el.href=value};
const html=(s)=>s.replace(/\n/g,'<br>');

document.title=SITE.title;
setText('navBrand',SITE.brand);
setText('heroEyebrow',SITE.hero.eyebrow);setText('heroTitleTop',SITE.hero.titleTop);setText('heroTitleMain',SITE.hero.titleMain);setText('heroTitleBottom',SITE.hero.titleBottom);setText('heroDescription',SITE.hero.description);setText('heroButton',SITE.hero.buttonText);setLink('heroButton',SITE.hero.buttonLink);setLink('navRegister',SITE.register.buttonLink);
setText('aboutKicker',SITE.about.kicker);document.getElementById('aboutTitle').innerHTML=html(SITE.about.title);setText('aboutDescription',SITE.about.description);document.getElementById('aboutHighlight').innerHTML=html(SITE.about.highlight);
setText('competitionKicker',SITE.competitions.kicker);document.getElementById('competitionTitle').innerHTML=html(SITE.competitions.title);setText('competitionDescription',SITE.competitions.description);
document.getElementById('competitionList').innerHTML=SITE.competitions.items.map(x=>`<article class="comp reveal"><div class="number">${x.number}</div><h3>${x.name}</h3><p>${x.description}</p></article>`).join('');
setText('timelineKicker',SITE.timeline.kicker);document.getElementById('timelineTitle').innerHTML=html(SITE.timeline.title);setText('timelineDescription',SITE.timeline.description);document.getElementById('timelineList').innerHTML=SITE.timeline.items.map(x=>`<article class="event reveal"><div class="event-date">${x.date}</div><div><h3>${x.title}</h3><p>${x.description}</p></div></article>`).join('');
setText('prizeKicker',SITE.prize.kicker);setText('prizeAmount',SITE.prize.amount);setText('prizeDescription',SITE.prize.description);
setText('faqKicker',SITE.faq.kicker);document.getElementById('faqTitle').innerHTML=html(SITE.faq.title);document.getElementById('faqList').innerHTML=SITE.faq.items.map(x=>`<details><summary>${x.question}</summary><p>${x.answer}</p></details>`).join('');
setText('registerKicker',SITE.register.kicker);document.getElementById('registerTitle').innerHTML=html(SITE.register.title);setText('registerDescription',SITE.register.description);setText('registerButton',SITE.register.buttonText);setLink('registerButton',SITE.register.buttonLink);
setText('footerCopyright',SITE.footer.copyright);setText('footerSchool',SITE.footer.school);
const nav=document.getElementById('nav');window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
