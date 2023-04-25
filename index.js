function printCard(){
     window.print();

}
function saveCard(){
    var name = document.getElementById("name-input");
    name.readOnly = true;
    var pronouns = document.getElementById("pronouns-input");
    pronouns.readOnly = true;
    var strPronouns = document.getElementById("pronouns-input").value;

    var resPronouns = "";
    var alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var last = '%'
    for (var i = 0; i < strPronouns.length; i++) {
        if(alf.indexOf(strPronouns[i])!=-1){
            resPronouns+=strPronouns[i];
            last = strPronouns[i];

        }else{
            if(last != '/'){
                resPronouns+="/";
            }
            last = '/';
        }    
    }
    if(resPronouns[resPronouns.length-1] == '/'){
        resPronouns = resPronouns.slice(0,-1);
    }
    if(resPronouns[0] == '/'){
        resPronouns = resPronouns.slice(1,resPronouns.length);
    }
    pronouns.value = resPronouns;
}