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
    
        case "Danish":
            for(var i = 0; i < translateableElements.length; i++ ) {
                var element = translateableElements[i];
                var type = element.getAttribute('data-id');
                element.innerHTML = languages.da[type];
            }
            break;
            case "English":
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
        "nationality" : "Nationality"

    },
    "da" : {
        "contact" : "Kontakt",
        "name" : "Navn",
        "language" : "Sprog",
        "skills" : "Færdigheder",
        "programmingAndTechnologies" : "Programmeringsprog og teknologier",
        "aboutMe" : "Om mig",
        "birthday" : "Fødselsdato",
        "nationality" : "Nationialitet"
    },
}