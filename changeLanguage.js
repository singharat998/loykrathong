const slectLang = document.querySelector('#slectLang');

const s1Title = document.querySelector('.sec1-title');
const s1Title1 = document.querySelector('.sec1-title-1');
const s1Text = document.querySelector('.sec1-text');
const Navm1 = document.querySelector('.nav-m1');
const Navm2 = document.querySelector('.nav-m2');
const Navm3 = document.querySelector('.nav-m3');
const Navm4 = document.querySelector('.nav-m4');

const balltext = document.querySelectorAll('.balltext');
const howtomake = document.querySelectorAll('.howtomake');
const step = document.querySelectorAll('.step');
const ittitle = document.querySelectorAll('.it-title');

const titlequestion = document.querySelector('.title-question');
const tiltlequestionready =document.querySelector('.title-question-ready');


slectLang.onchange = function(){
    
    const Language = slectLang.value;
    changeLanguage(Language);
}

function changeLanguage(InputLanguage) {
    if(InputLanguage == 'th'){
       window.location.href = "index.html";
    }
    if(InputLanguage == 'eng'){
        Navm1.innerHTML = 'Homepage';
        Navm2.innerHTML = 'MakeKratong';
        Navm3.innerHTML = 'Requests';
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
        howtomake[0].innerHTML = 'How to make this .';
        howtomake[1].innerHTML = 'How to make this .';
        howtomake[2].innerHTML = 'How to make this .';
        step[0].innerHTML = '1. Cut the banana leaves 1.5 inches wide and 6 inches long, approximately 2. fold them according to the figure of 3 petals, then overlay them to be reduced according to the image, which will count as 1 liver 3. Attach it around the edge of the base of the cockerel, which is the banana tree cut into glasses, approximately 1.5 – 2 inches thick, depending on the size of the body. Base 4. Then adorn the flowers to your liking and put the candles incense in it.';
        step[1].innerHTML = '1. Cut the banana leaves 1.5 inches wide and 6 inches long, approximately 2. fold them into rose petals as shown. Then put it in a sufficient distance to your liking, the tops of the petals and the curls of the petals should always be straight in one line, which will make the work look beautiful and tidy. 3. Use a green thread close to the banana leaves or black to stitch together with a straight back. 4. Fold the banana leaf petals and sew them continuously until they can cover the edges of the base of the cockerer around them. Pin the banana leaves to the base of the cockernage with pins, then circumcize the so-long sections and always finish the base. When done, it resembles a crown headpiece 5.';
        step[2].innerHTML = '1. Cut the banana leaves 1.5 inches wide and 6 inches long, approximately 2. fold according to the figure of 3 petals, then put them together with a sufficient distance to suit your preferences to make the work look beautiful and tidy. Each petal should be folded to the same size at any point. 3. Use a green thread close to the banana leaves or black to stitch together with a straight back. ';
        ittitle[0].innerHTML = 'Type 1 Petals';
        ittitle[1].innerHTML = 'Type 2 Rose Petals';
        ittitle[2].innerHTML = 'Type 3 Axe Head';
        titlequestion.innerHTML = 'What do you want to do in Loy Krathong?';
        tiltlequestionready.innerHTML = 'Lets make cockeries.';
    }
    
} 