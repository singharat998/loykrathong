const slectLang = document.querySelector('#slectLang');

const s1Title = document.querySelector('.sec1-title');
const s1Title1 = document.querySelector('.sec1-title-1');
const s1Text = document.querySelector('.sec1-text');
const Navm1 = document.querySelector('.nav-m1');
const Navm2 = document.querySelector('.nav-m2');
const Navm3 = document.querySelector('.nav-m3');
const Navm4 = document.querySelector('.nav-m4');

const balltext = document.querySelectorAll('.balltext');



slectLang.onchange = function(){
    
    const Language = slectLang.value;
    changeLanguage(Language);
}

function changeLanguage(InputLanguage) {
    if(InputLanguage == 'th'){
        Navm1.innerHTML = 'หน้าแรก';
        Navm2.innerHTML = 'ลอยกระทง';
        Navm3.innerHTML = 'ประวัติความเป็นมา';
        Navm4.innerHTML = 'ผู้จัดทำ';
        s1Title.innerHTML = 'ประวัติวันลอยกระทง';
        s1Title1.innerHTML = 'ที่ใหนบ้างนะที่คนชอบไปลอยกระทง?';
        s1Text.innerHTML = 'ประเพณีลอยกระทงนั้น ไม่มีหลักฐานระบุแน่ชัดว่าเริ่มตั้งแต่เมื่อใด แต่เชื่อว่าประเพณีนี้ได้สืบต่อกันมายาวนานตั้งแต่สมัยสุโขทัย โดยในรัชสมัยพ่อขุนรามคำแหง เรียกประเพณีลอยกระทงนี้ว่า "พิธีจองเปรียญ" หรือ "การลอยพระประทีป" และมีหลักฐานจากศิลาจารึกหลักที่ 1 กล่าวถึงงานเผาเทียนเล่นไฟว่าเป็นงานรื่นเริงที่ใหญ่ที่สุดของกรุงสุโขทัย ทำให้เชื่อกันว่างานดังกล่าวน่าจะเป็นงานลอยกระทงอย่างแน่นอน';
    }
    if(InputLanguage == 'eng'){
        Navm1.innerHTML = 'Homepage';
        Navm2.innerHTML = 'LoyKratong';
        Navm3.innerHTML = 'History';
        Navm4.innerHTML = 'Organizer';
        s1Title.innerHTML = 'History of Loy Krathong';
        s1Title1.innerHTML = 'Where is Lenna going to Loi Krathong?';
        s1Text.innerHTML = 'Loi Krathong There is no definitive evidence as to when it started. But believe that this tradition has been carried on for a long time since the Sukhothai period. In the reign of King Ramkhamhaeng This tradition is called Loi Krathong. "The ceremony of chanting" or "floating the lantern" and evidence from the main stone inscription 1 mentions that the candle-burning festival is the largest festival of Sukhothai. It is believed that this event is definitely a Loy Krathong event.';
        balltext[0].innerHTML = 'Icon Siam';
        balltext[1].innerHTML = 'Asiatique';
        balltext[2].innerHTML = 'Rama VIII Bridge';
        balltext[3].innerHTML = 'Chulalongkorn University';
        balltext[4].innerHTML = 'Thammasat University, Tha Prachan';
        balltext[5].innerHTML = 'Kasetsart University, Bangkhen  ';
    }
    
} 