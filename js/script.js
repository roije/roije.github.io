//Page initialized
var langSelect = document.getElementById('language-select');

//All multilanguage ID's
var translateableElements = document.getElementsByClassName('translateable');


langSelect.addEventListener("change", function(){
    var selectedLanguage = langSelect.value;
    console.log(typeof translateableElements);
    console.log(translateableElements)

    //Contact header
    
    switch(selectedLanguage) {
    
        case "DA":
            for(var i = 0; i < translateableElements.length; i++ ) {
                var element = translateableElements[i];
                var type = element.getAttribute('data-id');
                element.innerHTML = languages.da[type];
            }
            break;
            case "EN":
                for(var i = 0; i < translateableElements.length; i++ ) {
                    var element = translateableElements[i];
                    var type = element.getAttribute('data-id');
                    element.innerHTML = languages.en[type];
                }
            break;
        default :
            console.log('Something went wrong')
    }
})


var languages = {
    "en" : {
        "contact" : "Contact",
        "name" : "Name",
        "language" : "Language",
        "skills" : "Skills",
        "programmingAndTechnologies" : "Programming languages and technologies",
        "aboutMe" : "About me",
        "birthday" : "Birthday",
        "nationality" : "Nationality",
        "aboutText" : "<p class='about-text'>Throughout my education I have gained experience with projects, project management and working with other people and companies. My education has also given me knowledge about algorithms, data structures, and I have acquired experience with working with design patterns and software development work processes.</p>"+
        "<p class='about-text'>I am a person that gets inspired by responsibilities because responsibility motivates me to do more than what is expected of me. I love to be completely consumed by a given task - and if any issues arise, I am the kind of guy who contains the composure and will work for hours until the task is done. </p>"+
        "<p class='about-text'>If you are looking for a responsible, honest and ambitious person, I am the right choice for you. I am a good colleague with a love for great cooperative work, but who also has a strength in working independetly.</p>"+
        "<p class='about-text'>Because of the interest in web development and web technologies the Computer Science education gave me, I decided to continue with my studying and take a BA in Web Development from Københavns Erhvervsakademi which I will finish in 2019.</p>",
        "education" : "Education",
        "publicSchool" : "Public school",
        "hhx" : "Higher Commercial Examination Programme (HHX)",
        "compScience" : "AP Degree in Computer Science",
        "pbaWeb" : "PBA in Web Development",
        "yearExpect" : "2017-2019 (expected)",
        "internship" : "Internship",
        "internPeriod" : "January 2017 - March 2017",
        "internText" : "Worked as a fullstack developer on a food, nutrition and budget management web application for daycare centers where I gained experience in technologies such as React, Redux, NodeJS and PostgreSQL",
        "workExperience" : "Work experience",
        "workVenus" : "Deckhand on a long liner after finished with 10th grade",
        "workNordis1" : "Employee on a filleting plant after finished with 10th grade",
        "workNordis2" : "Employee on a filleting plant after finished with Higher Commercial Examination Programme",
        "workNorrona" : "Employee on the cruise-ferry Norr&ouml;na as a waiter in a restaurant and as a housekeeping assisant",
        "programmingSkillsNote" : "Programming languages and technologies I have worked with or had some experience with throughout my education, internship or in my free time:",
        "softwareSkillsNote" : "Software, services and operating systems that I have used and have gained experinced with as part of my education, internship or my free time",
        "hobbies" : "Hobbies and interests",
        "hobby1" : "<span>></span> Programming and surfing the internet to gain knowledge about a technology. I love to work on projects, and at the same time read blogs about a certain technology that I want to implement",
        "hobby2" : "<span>></span> When I am relaxing I like to read - I'm a fan of Stephen King books, The Song of Ice and Fire series and I love Tolkien's Middle-earth universe</p>",
        "hobby3" : "<span>></span>  If I don't have any plans I can spend a whole Saturday watching Premier League football</p>",
        "unix" : "Unix based commands",
        "planguage" : "Language"
        
    },
    "da" : {
        "contact" : "Kontakt",
        "name" : "Navn",
        "language" : "Sprog",
        "skills" : "Skills",
        "programmingAndTechnologies" : "Programmeringsprog og teknologier",
        "aboutMe" : "Om mig",
        "birthday" : "Fødselsdato",
        "nationality" : "Nationialitet",
        "aboutText" : "<p class='about-text'>Gennem min uddannelse har jeg fået erfaring med projekter, projektledelse og at arbejde sammen med andre mennesker og virksomheder. " +
        "<p class='about-text'>Min uddannelse har også; givet mig viden om algoritmer, datastrukturer, og jeg har fået erfaring med at arbejde med designmønstre og arbejdsprocesser til udvikling af software.</p>"+
        "<p class='about-text'>Jeg er en person der bliver inspireret af ansvar, det er med til at motivere mig til at gøre mere end det der er forventet af mig. Jeg kan godt lide af være fuldstændig opslugt af en opgave, og hvis problemer opstår, er jeg typen der kan sidde i flere timer indtil problemet er løst.</p> "+ 
        "<p class='about-text'>Hvis I leder efter en ansvarsfuld, ærlig og målbevidst person er jeg den rette for jeres virksomhed. Jeg er en god arbejdskammerat, som godt kan lide at samarbejde om tingene, men også; har en styrke i selvstændigt arbejde.</p>",
        "education" : "Uddannelse",
        "publicSchool" : "Folkeskole",
        "hhx" : "Højere Handelseksamen (HHX)",
        "compScience" : "Datamatiker",
        "pbaWeb" : "PBA i Webudvikling",
        "yearExpect" : "2017-2019 (forventet)",
        "internship" : "Praktikerfaringer",
        "internPeriod" : "Januar 2017 - Mars 2017",
        "internText" : "Arbejdede som en fullstack-udvikler på et mad, nærings og budget styringssystem i form af en web applikation egnet for børneinstitutioner. Her fik jeg erfaring at arbejde med teknologier som React, Redux, NodeJS, and PostreSQL",
        "workExperience" : "Arbejdserfaringer",
        "workVenus" : "Dæksmand på langline fiskebåd efter jeg var færdig med 10. klasse",
        "workNordis1" : "Medarbejder p&aring; en fiske filetfabrik efter 10. klasse",
        "workNordis2" : "Medarbejder p&aring; en fiske filetfabrik efter højere handelsseksamen",
        "workNorrona" : "Medarbejder på cruisefærgen Norr&ouml;na som tjener i en restaurant og housekeeping-hjælper",
        "programmingSkillsNote" : "Programmeringssprog og teknologier som jeg har arbejdet med eller fået nogen erfaring med som del af min uddannelse, praktikforløb eller i min fritid",
        "softwareSkillsNote" : "Software, tjenester og operativsystemer som jeg har brugt eller fået erfaring med som del af min uddannelse, praktikforløb eller min fritid",
        "hobbies" : "Hobbyer og interesser",
        "hobby1" : "<span>></span> Programmering og at surfe internettet for at lære mere om en teknologi. Jeg elsker at arbejde på projekter, og på samme tid læse blogger, artikler og på forummer om en bestemt teknologi som jeg gerne vil implementere</p>",
        "hobby2" : "<span>></span> Når jeg slapper af kan jeg godt lide at læse en bog - jeg er stor fan af Stephen King bøger, The Song of Ice and Fire serien og jeg elsker Tolkien's Middle-wearth univers</p>",
        "hobby3" : "<span>></span>  Hvis jeg ikke skal noget andet, kan jeg bruge en hel Lørdag på sofaen med Premier League fodbold",
        "unix" : "Unix baserede kommandoer",
        "planguage" : "Sprog"
    },
}
 