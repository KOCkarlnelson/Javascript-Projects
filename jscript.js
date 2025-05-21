const NB_QUESTIONS = 12;
const QUESTIONS = 12;
const QUESTIONS_OBG = 9;
const MAX_MAX = 13;

let splitted_value_friend = "";
let splitted_value_family = "";
let button_elt = document.createElement('button');
let button_elt2 = document.createElement('button');
/*

Business section (fill) : colonne 14, ligne_up(...)
 

prefixes: a_entree_ e_entree_ s_entree_
 a_diff_ a_action_ e_diff_ e_action_ t_diff_ t_action_
 a_sortie e_sortie_ t_entree_ t_sortie_

 a_entree = [];
 e_entree = [];
 t_entree = [];
 a_sortie = [];
 e_sortie = [];
 t_sortie = [];
a_diff = [];
a_action = [];
e_diff = [];
e_action = [];
t_diff = [];
t_action = [];


Family section(fill): 
prefixes:

  splitted_value_family;

  family_member_a_e="family_member_a_e_",
  family_member_a_s="family_member_a_s_",
  family_member_e_e="family_member_e_e_",
  family_member_e_s="family_member_e_s_",
  family_member_t_e="family_member_t_e_",
  family_member_t_s="family_member_t_s_";

  "a_family_diff" 
  "a_family_action" 

family_a_entree = [];
family_e_entree = [];
family_t_entree = [];
family_a_sortie = [];
family_e_sortie = [];
family_t_sortie = [];
family_a_diff = [];
family_a_action = [];
family_e_diff = [];
family_e_action = [];
family_t_diff = [];
family_t_action = [];


Friends section(fill):
prefixes:

splitted_value_friend;

   let friend_member_a_e="friend_member_a_e_",
    friend_member_a_s="friend_member_a_s_",
    friend_member_e_e="friend_member_e_e_",
    friend_member_e_s="friend_member_e_s_",
    friend_member_t_e="friend_member_t_e_",
    friend_member_t_s="friend_member_t_s_";

    let prefix_diff = "f_a_diff_";
    let prefix_action = "f_a_action_";

*/
let elt1 = "", elt2="";
let tab = [];
let table_fill;
let taille2 = 0;
let taille_1 = 0;
let taille = 0;
let n = 1;
let prefix = "bloc_question_";
let indice = 0;
let table_questions = [];
let business_entries = ["Formation","Impot","Communication",
  "Loyer","Transport","Employes","Fournisseur"
  ,"Clients","Banques","Partenaires",
  "Concurrence","Gouvernement","Factures"];
let table_sum_1 = [];
let family;
let state_family = 0;
let friends;
let state_friends = 0;
let association;
let religion;
let business;
let vacances;
let tontine;
let sport;
let sante;
let nutrition;
let table_rep_questions = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

let a_entree = [];
let e_entree = [];
let t_entree = [];
let count_entree = 0;
let a_sortie = [];
let e_sortie = [];
let t_sortie = [];
let  count_sortie = 0;

let a_diff = [];
let a_act = [];
let e_diff = [];
let e_act = [];
let t_diff = [];
let t_act = [];

let a_total_entree = 0;
let e_total_entree = 0;
let t_total_entree = 0;
let a_total_sortie = 0;
let e_total_sortie = 0;
let t_total_sortie = 0;

let diff_1 = 0;
let action_1 = "";
let diff_2 = 0;
let action_2 = "";
let diff_3 = 0;
let action_3 = "";
let tab_elts = "";
let ligne = tab_elts.length;
let ligne_up = ligne + MAX_MAX;


function to_number(caractere){

  return parseInt(caractere);

}

function family_elts(){

  family_member_a_e = "family_member_a_e_",
  family_member_a_s = "family_member_a_s_",
  
  a_entree = [];
  a_sortie = [];

  let family_a_entree = [];

  let family_a_sortie = [];
  let family_a_diff = [];
  let family_a_action = [];
  let a_family_total_entree = "a_family_total_entree";
  let a_family_total_sortie = "a_family_total_sortie";
  let a_f_t_entree = 0 ;
  let a_f_t_sortie = 0 ;

  family_member_e_e = "family_member_e_e_";
  family_member_e_s = "family_member_e_s_";
  
  e_entree = [];
  e_sortie = [];

  
  let family_e_entree = [];
  let family_e_sortie = [];
  let family_e_diff = [];
  let e_family_total_entree = "e_family_total_entree";
  let e_family_total_sortie = "e_family_total_sortie";
  let e_f_t_entree = 0;
  let e_f_t_sortie = 0;


  family_member_t_e = "family_member_t_e_",
  family_member_t_s = "family_member_t_s_",
  

  t_entree = [];
  t_sortie = [];
 
  let family_t_entree = [];
  let family_t_sortie = [];
  let family_t_diff = [];
  let t_family_total_entree = "t_family_total_entree";
  let t_family_total_sortie = "t_family_total_sortie";
  let t_f_t_entree = 0;
  let t_f_t_sortie = 0;

  let a_family_diff = "a_family_diff_";
  let a_family_action = "a_family_action_";
  let e_family_diff = "e_family_diff_";
  let e_family_action = "e_family_action_";
  let t_family_diff = "t_family_diff_";
  let t_family_action = "t_family_action_";
  let a_family_suff;
  let e_family_suff;
  let t_family_suff;



  let family_action_a = "a_family_action_";
  let family_action_e = "e_family_action_";
  let family_action_t = "t_family_action_";
  let family_diff_a = "f_diff_";
  let family_diff_e = "f_diff_";
  let family_diff_t = "f_diff_";

  let char_entree_a;
  let char_sortie_a;
  let char_action_a;
  let char_entree_e;
  let char_sortie_e;
  let char_action_e;
  let char_entree_t;
  let char_sortie_t;
  let char_action_t;



  for(let i = 0; i < splitted_value_family.length; i++){

     char_entree_a = family_member_a_e + (i+1);
     char_sortie_a = family_member_a_s + (i+1);
     a_family_suff = a_family_diff +  (i+1);
     e_family_suff = e_family_diff + (i+1);
     t_family_suff = t_family_diff + (i+1);    

     char_action_a = family_action_a + (i+1);

    // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
    a_entree.push(parseInt(document.getElementById(char_entree_a).value));
    a_sortie.push(parseInt(document.getElementById(char_sortie_a).value));

   // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
    console.log("L'entree vaut " + a_entree[i] + " et c'est gere" + typeof(a_entree[i]));
    family_a_diff.push(a_entree[i] - a_sortie[i]);
    a_f_t_entree += parseInt(a_entree[i]);
    a_f_t_sortie += parseInt(a_sortie[i]);
    diff_1 += parseInt(a_entree[i]) - parseInt(a_sortie[i]);

    console.log("le total vaut :" + a_f_t_entree + " et " + a_f_t_sortie);
    document.getElementById(a_family_total_entree).innerHTML = a_f_t_entree;
    document.getElementById(a_family_total_sortie).innerHTML = a_f_t_sortie;

    document.getElementById(a_family_suff).innerHTML = a_entree[i] - a_sortie[i];

    if(family_a_diff[i]  == 0){
      document.getElementById(char_action_a).innerHTML = "Nul- augmenter les entrees";
  }else if(family_a_diff[i] > 0){
      document.getElementById(char_action_a).innerHTML = "Aucune";
  }else{
      let adjust = 0 - family_a_diff[i];
      document.getElementById(char_action_a).innerHTML = "besoin de  +" + adjust;
  }

    char_entree_e = family_member_e_e + (i+1);
    char_sortie_e = family_member_e_s + (i+1);
    char_action_e = family_action_e + (i+1);

     e_entree.push(parseInt(document.getElementById(char_entree_e).value));
     e_sortie.push(parseInt(document.getElementById(char_sortie_e).value));
    // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
     family_e_diff.push(e_entree[i] - e_sortie[i]);
     e_f_t_entree += parseInt(e_entree[i]);
     e_f_t_sortie += parseInt(e_sortie[i]);
     diff_2 += parseInt(e_entree[i]) - parseInt(e_sortie[i]);
     document.getElementById(e_family_suff).innerHTML = e_entree[i] - e_sortie[i];
     
     document.getElementById(e_family_total_entree).innerHTML = e_f_t_entree;
     document.getElementById(e_family_total_sortie).innerHTML = e_f_t_sortie;
     if(family_e_diff[i]  == 0){
      document.getElementById(char_action_e).innerHTML = "Nul- augmenter les entrees";
  }else if(family_e_diff[i] > 0){
      document.getElementById(char_action_e).innerHTML = "Aucune";
  }else{
      let adjust = 0 - family_e_diff[i];
      document.getElementById(char_action_e).innerHTML = "besoin de  +" + adjust;
  }
     
     char_entree_t = family_member_t_e + (i+1);
     char_sortie_t = family_member_t_s + (i+1);
     char_action_t = family_action_t + (i+1);
  
     
    // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
    t_entree.push(parseInt(document.getElementById(char_entree_t).value));
    t_sortie.push(parseInt(document.getElementById(char_sortie_t).value));
   // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);

    family_t_diff.push(t_entree[i] - t_sortie[i]);
    diff_3 += parseInt(t_entree[i]) - parseInt(t_sortie[i]);

    t_f_t_entree += parseInt(t_entree[i]);
    t_f_t_sortie += parseInt(t_sortie[i]);

    document.getElementById(t_family_suff).innerHTML = t_entree[i] - t_sortie[i];

    document.getElementById(t_family_total_entree).innerHTML = t_f_t_entree;
    document.getElementById(t_family_total_sortie).innerHTML = t_f_t_sortie;

    if(family_t_diff[i]  == 0){
      document.getElementById(char_action_t).innerHTML = "Nul- augmenter les entrees";
      console.log("on est dans diff la!!");
    }else if(family_t_diff[i] > 0){
      document.getElementById(char_action_t).innerHTML = "Aucune";
    }else{
        let adjust = 0 - family_t_diff[i];
        document.getElementById(char_action_t).innerHTML = "besoin de  +" + adjust;
    }
}

/*diff_1 = parseInt(a_total_entree) - parseInt(a_total_sortie);
console.log("Oui diff_1 vaut :" + diff_1);

diff_2 = e_total_entree - e_total_sortie;
console.log(diff_2 + " est diff_2");


diff_3 = t_total_entree - t_total_sortie;
console.log("diff_3 " + diff_3);*/

document.getElementById('f_diff_1').innerHTML = diff_1;
if(diff_1 == 0){
    document.getElementById('f_action_1').innerHTML = "Nul- augmenter les entrees";
    action_1 = "Nul- augmenter les entrees";
}else if(diff_1 > 0){
    document.getElementById('f_action_1').innerHTML = "Aucune";
    action_1 = "Aucune";
}else{
    let adjust = 0 - diff_1;
    document.getElementById('f_action_1').innerHTML = "besoin de +" + adjust;
    action_1 = "besoin de + " + adjust;
}

document.getElementById('f_diff_2').innerHTML = diff_2;
if(diff_2 == 0){
    document.getElementById('f_action_2').innerHTML = "Nul- augmenter les entrees";
    action_2 = "Nul- augmenter les entrees";
}else if(diff_2 > 0){
    document.getElementById('f_action_2').innerHTML = "Aucune";
    action_2 = "Aucune";
}else{
    let adjust = 0 - diff_2;
    document.getElementById('f_action_2').innerHTML = "besoin de +" + adjust;
    action_2 = "besoin de + " + adjust;
}

document.getElementById('f_diff_3').innerHTML = diff_3;

if(diff_3 == 0){
    document.getElementById('f_action_3').innerHTML = "Nul- augmenter les entrees";
    action_3 = "Nul- augmenter les entrees";
}else if(diff_3 > 0){
    document.getElementById('f_action_3').innerHTML = "Aucune";
    action_3 = "Aucune";
}else{
    let adjust = 0 - diff_3;
    document.getElementById('f_action_3').innerHTML = "besoin de +" + adjust;
    action_3 = "besoin de + " + adjust;
}


}

function friends_elts(){


  friend_member_a_e = "friend_member_a_e_",
  friend_member_a_s = "friend_member_a_s_",
  
  a_entree = [];
  a_sortie = [];


  let friend_a_diff = [];
  let friend_a_action = [];
  let a_friend_total_entree = "a_friend_total_entree";
  let a_friend_total_sortie = "a_friend_total_sortie";
  let a_f_t_entree = 0 ;
  let a_f_t_sortie = 0 ;


  friend_member_e_e = "friend_member_e_e_";
  friend_member_e_s = "friend_member_e_s_";
  
  e_entree = [];
  e_sortie = [];

  
  let friend_e_entree = [];
  let friend_e_sortie = [];
  let friend_e_diff = [];
  let e_friend_total_entree = "e_friend_total_entree";
  let e_friend_total_sortie = "e_friend_total_sortie";
  let e_f_t_entree = 0;
  let e_f_t_sortie = 0;


  friend_member_t_e = "friend_member_t_e_";
  friend_member_t_s = "friend_member_t_s_";
  

  t_entree = [];
  t_sortie = [];
  
  let friend_t_diff = [];
  let t_friend_total_entree = "t_friend_total_entree";
  let t_friend_total_sortie = "t_friend_total_sortie";
  let t_f_t_entree = 0;
  let t_f_t_sortie = 0;

  let a_friend_diff = "a_friend_diff_";
  let a_friend_action = "a_friend_action_";
  let e_friend_diff = "e_friend_diff_";
  let e_friend_action = "e_friend_action_";
  let t_friend_diff = "t_friend_diff_";
  let t_friend_action = "t_friend_action_";
  let a_friend_suff;
  let e_friend_suff;
  let t_friend_suff;



  let friend_action_a = "a_friend_action_";
  let friend_action_e = "e_friend_action_";
  let friend_action_t = "t_friend_action_";
 
  let total_diff_friend1 = "fr_diff_1";
  let total_diff_friend2 = "fr_diff_2";
  let total_diff_friend3 = "fr_diff_3";
  let total_action_friend1= "fr_action_1";
  let total_action_friend2 = "fr_action_2";
  let total_action_friend3 = "fr_action_3";

  let char_entree_a;
  let char_sortie_a;
  let char_action_a;
  let char_entree_e;
  let char_sortie_e;
  let char_action_e;
  let char_entree_t;
  let char_sortie_t;
  let char_action_t;



  for(let i = 0; i < splitted_value_friend.length; i++){

     char_entree_a = friend_member_a_e + (i+1);
     char_sortie_a = friend_member_a_s + (i+1);
     a_friend_suff = a_friend_diff +  (i+1);
     e_friend_suff = e_friend_diff + (i+1);
     t_friend_suff = t_friend_diff + (i+1);    

     char_action_a = friend_action_a + (i+1);

    // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
    a_entree.push(parseInt(document.getElementById(char_entree_a).value));
    a_sortie.push(parseInt(document.getElementById(char_sortie_a).value));

   // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
    console.log("L'entree vaut " + a_entree[i] + " et c'est gere" + typeof(a_entree[i]));
    friend_a_diff.push(a_entree[i] - a_sortie[i]);
    a_f_t_entree += parseInt(a_entree[i]);
    a_f_t_sortie += parseInt(a_sortie[i]);
    diff_1 += parseInt(a_entree[i]) - parseInt(a_sortie[i]);

    console.log("le total vaut :" + a_f_t_entree + " et " + a_f_t_sortie);
    document.getElementById(a_friend_total_entree).innerHTML = a_f_t_entree;
    document.getElementById(a_friend_total_sortie).innerHTML = a_f_t_sortie;

    document.getElementById(a_friend_suff).innerHTML = a_entree[i] - a_sortie[i];

    if(friend_a_diff[i]  == 0){
      document.getElementById(char_action_a).innerHTML = "Nul- augmenter les entrees";
  }else if(friend_a_diff[i] > 0){
      document.getElementById(char_action_a).innerHTML = "Aucune";
  }else{
      let adjust = 0 - friend_a_diff[i];
      document.getElementById(char_action_a).innerHTML = "besoin de  +" + adjust;
  }

    char_entree_e = friend_member_e_e + (i+1);
    char_sortie_e = friend_member_e_s + (i+1);
    char_action_e = friend_action_e + (i+1);

    console.log(e_friend_suff + " is important");
     e_entree.push(parseInt(document.getElementById(char_entree_e).value));
     e_sortie.push(parseInt(document.getElementById(char_sortie_e).value));
    // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
     friend_e_diff.push(e_entree[i] - e_sortie[i]);
     e_f_t_entree += parseInt(e_entree[i]);
     e_f_t_sortie += parseInt(e_sortie[i]);
     diff_2 += parseInt(e_entree[i]) - parseInt(e_sortie[i]);
     console.log("YOOOOOOOOOOOOOOOOO!");
     document.getElementById(e_friend_suff).innerHTML = e_entree[i] - e_sortie[i];
     
     document.getElementById(e_friend_total_entree).innerHTML = e_f_t_entree;
     document.getElementById(e_friend_total_sortie).innerHTML = e_f_t_sortie;
     if(friend_e_diff[i]  == 0){
      document.getElementById(char_action_e).innerHTML = "Nul- augmenter les entrees";
  }else if(friend_e_diff[i] > 0){
      document.getElementById(char_action_e).innerHTML = "Aucune";
  }else{
      let adjust = 0 - friend_e_diff[i];
      document.getElementById(char_action_e).innerHTML = "besoin de  +" + adjust;
  }
     
     char_entree_t = friend_member_t_e + (i+1);
     char_sortie_t = friend_member_t_s + (i+1);
     char_action_t = friend_action_t + (i+1);
  
     
    // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
    t_entree.push(parseInt(document.getElementById(char_entree_t).value));
    t_sortie.push(parseInt(document.getElementById(char_sortie_t).value));
   // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);

    friend_t_diff.push(t_entree[i] - t_sortie[i]);
    diff_3 += parseInt(t_entree[i]) - parseInt(t_sortie[i]);

    t_f_t_entree += parseInt(t_entree[i]);
    t_f_t_sortie += parseInt(t_sortie[i]);

    document.getElementById(t_friend_suff).innerHTML = t_entree[i] - t_sortie[i];

    document.getElementById(t_friend_total_entree).innerHTML = t_f_t_entree;
    document.getElementById(t_friend_total_sortie).innerHTML = t_f_t_sortie;

    if(friend_t_diff[i]  == 0){
      document.getElementById(char_action_t).innerHTML = "Nul- augmenter les entrees";
      console.log("on est dans diff la!!");
    }else if(friend_t_diff[i] > 0){
      document.getElementById(char_action_t).innerHTML = "Aucune";
    }else{
        let adjust = 0 - friend_t_diff[i];
        document.getElementById(char_action_t).innerHTML = "besoin de  +" + adjust;
    }
}

/*diff_1 = parseInt(a_total_entree) - parseInt(a_total_sortie);
console.log("Oui diff_1 vaut :" + diff_1);

diff_2 = e_total_entree - e_total_sortie;
console.log(diff_2 + " est diff_2");


diff_3 = t_total_entree - t_total_sortie;
console.log("diff_3 " + diff_3);*/

document.getElementById(total_diff_friend1).innerHTML = diff_1;
if(diff_1 == 0){
    document.getElementById(total_action_friend1).innerHTML = "Nul- augmenter les entrees";
    action_1 = "Nul- augmenter les entrees";
}else if(diff_1 > 0){
    document.getElementById(total_action_friend1).innerHTML = "Aucune";
    action_1 = "Aucune";
}else{
    let adjust = 0 - diff_1;
    document.getElementById(total_action_friend1).innerHTML = "besoin de +" + adjust;
    action_1 = "besoin de + " + adjust;
}

document.getElementById(total_diff_friend2).innerHTML = diff_2;
if(diff_2 == 0){
    document.getElementById(total_action_friend2).innerHTML = "Nul- augmenter les entrees";
    action_2 = "Nul- augmenter les entrees";
}else if(diff_2 > 0){
    document.getElementById(total_action_friend2).innerHTML = "Aucune";
    action_2 = "Aucune";
}else{
    let adjust = 0 - diff_2;
    document.getElementById(total_action_friend3).innerHTML = "besoin de +" + adjust;
    action_2 = "besoin de + " + adjust;
}

document.getElementById(total_diff_friend3).innerHTML = diff_3;

if(diff_3 == 0){
    document.getElementById(total_action_friend3).innerHTML = "Nul- augmenter les entrees";
    action_3 = "Nul- augmenter les entrees";
}else if(diff_3 > 0){
    document.getElementById(total_action_friend3).innerHTML = "Aucune";
    action_3 = "Aucune";
}else{
    let adjust = 0 - diff_3;
    document.getElementById(total_action_friend3).innerHTML = "besoin de +" + adjust;
    action_3 = "besoin de + " + adjust;
}


}

function get_a_elts(){
  a_total_entree = 0;
  a_total_sortie = 0;
  a_entree = [];
  a_sortie = [];
  a_diff = []; 

  for(let i = 0; i < ligne_up; i++){

      let char_entree = "a_entree_" + (i+1);
      let char_sortie = "a_sortie_" + (i+1);
      let char_diff = "a_diff_" + (i+1);
      let char_action = "a_action_" + (i+1);
      a_entree.push(document.getElementById(char_entree).value); 
      a_sortie.push(document.getElementById(char_sortie).value);
     // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
      a_diff.push(a_entree[i] - a_sortie[i]);
      document.getElementById(char_diff).innerHTML = a_diff[i];

      a_total_entree += parseInt(a_entree[i]);
      a_total_sortie += parseInt(a_sortie[i]);
      console.log(a_total_entree + ' vaut : ' + typeof(a_total_entree));

      if(a_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(a_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - a_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }

  document.getElementById('a_total_entree').innerHTML = a_total_entree;
  document.getElementById('a_total_sortie').innerHTML = a_total_sortie;
  diff_1 = a_total_entree - a_total_sortie;

  document.getElementById('diff_1').innerHTML = diff_1;
  if(diff_1 == 0){
      document.getElementById('action_1').innerHTML = "Nul- augmenter les entrees";
      action_1 = "Nul- augmenter les entrees";
  }else if(diff_1 > 0){
      document.getElementById('action_1').innerHTML = "Aucune";
      action_1 = "Aucune";
  }else{
      let adjust = 0 - diff_1;
      document.getElementById('action_1').innerHTML = "besoin de +" + adjust;
      action_1 = "besoin de + " + adjust;
  }

}

function get_e_elts(){
  e_total_entree = 0;
  e_total_sortie = 0;
  e_entree = [];
  e_sortie = [];
  e_diff = [];

  for(let i = 0; i < ligne_up; i++){

      let char_entree = "e_entree_" + (i+1);
      let char_sortie = "e_sortie_" + (i+1);
      let char_diff = "e_diff_" + (i+1);
      let char_action = "e_action_" + (i+1);
      e_entree.push(document.getElementById(char_entree).value); 
      console.log(e_entree[i]);
      e_sortie.push(document.getElementById(char_sortie).value);
     // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
      e_diff.push(e_entree[i] - e_sortie[i]);
      document.getElementById(char_diff).innerHTML = e_diff[i];
     
    
      e_total_entree += parseInt(e_entree[i]);
      e_total_sortie += parseInt(e_sortie[i]);


      if(e_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(e_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - e_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }

  //document.getElementById('e_total_entree').innerHTML = e_total_entree;
  //document.getElementById('e_total_sortie').innerHTML = e_total_sortie;
  diff_2 = e_total_entree - e_total_sortie;

  document.getElementById('diff_2').innerHTML = diff_2;
  if(diff_2 == 0){
      document.getElementById('action_2').innerHTML = "Nul- augmenter les entrees";
      action_2 = "Nul- augmenter les entrees";
  }else if(diff_2 > 0){
      document.getElementById('action_2').innerHTML = "Aucune";
      action_2 = "Aucune";
  }else{
      let adjust = 0 - diff_2;
      document.getElementById('action_2').innerHTML = "besoin de +" + adjust;
      action_2 = "besoin de + " + adjust;
  }


}

function get_t_elts(){

  t_total_entree = 0;
  t_total_sortie = 0;
  t_entree = [];
  t_sortie = [];
  t_diff = [];

  for(let i = 0; i < ligne_up; i++){

      let char_entree = "t_entree_" + (i+1);
      let char_sortie = "t_sortie_" + (i+1);
      let char_diff = "t_diff_" + (i+1);
      let char_action = "t_action_" + (i+1);
      t_entree.push(document.getElementById(char_entree).value); 
      t_sortie.push(document.getElementById(char_sortie).value);
     // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
      t_diff.push(t_entree[i] - t_sortie[i]);
    //  console.log(e_diff[i] + "vaut ");
      document.getElementById(char_diff).innerHTML = t_diff[i];
      t_total_entree += parseInt(t_entree[i]);
      t_total_sortie += parseInt(t_sortie[i]);


      if(t_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(t_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - t_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }

  document.getElementById('t_total_entree').innerHTML = t_total_entree;
  document.getElementById('t_total_sortie').innerHTML = t_total_sortie;
  diff_3 = t_total_entree - t_total_sortie;

  document.getElementById('diff_3').innerHTML = diff_3;
  if(diff_3 == 0){
      document.getElementById('action_3').innerHTML = "Nul- augmenter les entrees";
      action_3 = "Nul- augmenter les entrees";
  }else if(diff_3 > 0){
      document.getElementById('action_3').innerHTML = "Aucune";
      action_3 = "Aucune";
  }else{
      let adjust = 0 - diff_3;
      document.getElementById('action_3').innerHTML = "besoin de +" + adjust;
      action_3 = "besoin de + " + adjust;
  }


}

function filtre(tableau){
  const TAILLE_MAX = 10;
  let tab_etat = [0,0,1,0,0,0,0,0,1,1];
  let tab_final = [];
  for(let i = 0; i < tab_etat.length; i++){
    if(tab_etat[i] == 0 && taille < TAILLE_MAX){
      tab_final.push(tableau[i]);
      taille++;
    }
  }
  return tab_final;
}

function integrate(){

  family = document.querySelector('input[name="family"]:checked');
  friends = document.querySelector('input[name = "friend"]:checked');
  association = document.querySelector('input[name = "association"]:checked');
  religion = document.querySelector('input[name = "religion"]:checked');
  business = document.querySelector('input[name = "business"]:checked');
  vacances = document.querySelector('input[name = "holiday"]:checked');
  tontine = document.querySelector('input[name = "tontine"]:checked');
  sport = document.querySelector('input[name = "sport"]:checked');
  sante = document.querySelector('input[name = "sante"]:checked');
  nutrition= document.querySelector('input[name = "nutrition"]:checked');
}
  
let table_quest = ["Association","Religion","Business","Vacances",
  "Tontine","Sport","Sante","Nutrition","Family","Friend"];

let table_of_elements = [];

function initialize_tab_questions(){

  for(let i = 0 ; i < QUESTIONS ; i++){
    table_questions.push(-1);    
  }
}

function to_filter(){

  for(let i = 0 ; i < table_quest.length; i++){
    if(table_quest[i] == "Business" ||  table_quest[i] == "Family" ||  table_quest[i] == "Friend"){
      continue;
    }else if(table_rep_questions[i] == "Oui"  || (i == 1 && table_rep_questions[i] != -1)){
      table_of_elements.push(table_quest[i]);
    }
  }

  console.log(table_of_elements);

return table_of_elements;
}

function fill_bloc_1(){

  const TAILLE_MAX_2 = 7;
  const taille_1_MAX = 1;
  if(taille_1 < taille_1_MAX){
    table_sum_1.push("Cadeau");
    table_sum_1.push("Formation");
    taille_1++;
  }

//  let tab_tmp = filtre(table_questions);
    let tab_tmp = to_filter();

  for(let i = 0; i < tab_tmp.length; i++){
   // if(taille2 < TAILLE_MAX_2){
      table_sum_1.push(tab_tmp[i]);
     // taille2++;
    //}
  }


  return table_sum_1;
}



function initialize_mat(mat,ligne,colonne){
  for(let i = 0; i < ligne; i++){
    mat.push("");
    for(let j = 0; j < colonne; j++){
      mat[i] = new Array(colonne);
    }
  }
}

function create_matrice(mat,ligne,colonne){

  for(let i = 0; i < ligne; i++){
    mat.push(new Array(colonne));
  }

}


function main(){
  integrate();
  fill_bloc_1();
}

function initialize_table(tr,taille){
  
  for(let i = 0; i < taille ; i++){
    tr.push(10);
  }
}

function get_elts(){
  get_a_elts();
  get_e_elts();
  get_t_elts();
}

function family_get_elts(){
  family_elts();
}


function family_generate(){
  generate_elts_type(splitted_value_family,"family_member_a_e_","family_member_a_s_","a_family_diff_"
    ,"a_family_action_","a_family_total_entree","a_family_total_sortie","f_diff_1","f_action_1");
  generate_elts_type(splitted_value_family,"family_member_e_e_","family_member_e_s_","e_family_diff_"
      ,"e_family_action_","e_family_total_entree","e_family_total_sortie","f_diff_2","f_action_2");
  generate_elts_type(splitted_value_family,"family_member_t_e_","family_member_t_s_","t_family_diff_"
        ,"t_family_action_","t_family_total_entree","t_family_total_sortie","f_diff_3","f_action_3");          
}

function friends_generate(){
  generate_elts_type(splitted_value_friend,"friend_member_a_e_","friend_member_a_s_","a_friend_diff_"
    ,"a_friend_action_","a_friend_total_entree","a_friend_total_sortie","fr_diff_1","fr_action_1");
  generate_elts_type(splitted_value_friend,"friend_member_e_e_","friend_member_e_s_","e_friend_diff_"
      ,"e_friend_action_","e_friend_total_entree","e_friend_total_sortie","fr_diff_2","fr_action_2");
  generate_elts_type(splitted_value_friend,"friend_member_t_e_","friend_member_t_s_","t_friend_diff_"
        ,"t_friend_action_","t_friend_total_entree","t_friend_total_sortie","fr_diff_3","fr_action_3");
}


function generate_elts_type(bloc_type,type_entree,type_sortie,type_diff,type_action,type_total_entree,type_total_sortie,type_total_diff,type_total_action){
    let total_entree = 0; // variable locale
    let total_sortie = 0; // variable locale
    let entree = []; // variable locale
    let sortie = []; // variable locale
    let diff = []; // variable locale

    for(let i = 0; i < bloc_type.length; i++){ //splitted_family_value.length / splitted_friend_value.length
        let rand_e = Math.ceil(Math.random()*100);
        let rand_s = Math.ceil(Math.random()*100);
        entree.push(rand_e); // pas touche 
        sortie.push(rand_s); // pas touche
        
        let char_entree = type_entree + (i+1); //var_a_entree / var_e_entree / var_t_entree variable locale
        let char_sortie = type_sortie + (i+1); // var_a_sortie / var_e_sortie / var_t_sortie  variable locale
        let char_diff = type_diff + (i+1); // var_a_diff / var_e_diff / var_t_diff
        let char_action = type_action + (i+1); // var_a_action / var_e_action / var_t_action
        document.getElementById(char_entree).value = rand_e;
        document.getElementById(char_sortie).value = rand_s;
        diff.push(parseInt(entree[i]) - parseInt(sortie[i]));
        document.getElementById(char_diff).innerHTML = diff[i];
        total_entree += parseInt(entree[i]);
        total_sortie += parseInt(sortie[i]);

        diff_1 += parseInt(entree[i]) - parseInt(sortie[i]);
        document.getElementById(type_total_entree).innerHTML = total_entree;
        document.getElementById(type_total_sortie).innerHTML = total_sortie;
    
        document.getElementById(char_diff).innerHTML = parseInt(entree[i]) - parseInt(sortie[i]);

        if(diff[i]  == 0){
            document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
        }else if(diff[i] > 0){
            document.getElementById(char_action).innerHTML = "Aucune";
        }else{
            let adjust = 0 - diff[i];
            document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
        }
    }
  
    document.getElementById(type_total_entree).innerHTML = total_entree; // var_a_tot_entree / var_e_tot_entree / var_t_tot_entree
    document.getElementById(type_total_sortie).innerHTML = total_sortie; // var_a_tot_sortie / var_e_tot_sortie / var_t_tot_sortie
    diff_1 = total_entree - total_sortie;
  
    document.getElementById(type_total_diff).innerHTML = diff_1;
    if(diff_1 == 0){
        document.getElementById(type_total_action).innerHTML = "Nul- augmenter les entrees";
        action_1 = "Nul- augmenter les entrees";
    }else if(diff_1 > 0){
        document.getElementById(type_total_action).innerHTML = "Aucune";
        action_1 = "Aucune";
    }else{
        let adjust = 0 - diff_1;
        document.getElementById(type_total_action).innerHTML = "besoin de +" + adjust;
        action_1 = "besoin de + " + adjust;
    }

}

  function generate_t_elts(){
    t_total_entree = 0;
    t_total_sortie = 0;
    t_entree = [];
    t_sortie = [];
    t_diff = [];
  
    for(let i = 0; i < ligne_up; i++){
        let char_entree = "t_entree_" + (i+1);
        let char_sortie = "t_sortie_" + (i+1);
        let char_diff = "t_diff_" + (i+1);
        let char_action = "t_action_" + (i+1);
        let t_rand_e = Math.ceil(Math.random()*100)
        let t_rand_s = Math.ceil(Math.random()*100);
        document.getElementById(char_entree).value = t_rand_e;
        document.getElementById(char_sortie).value = t_rand_s;
        t_entree.push(t_rand_e); 
        t_sortie.push(t_rand_s);
        t_diff.push(t_entree[i] - t_sortie[i]);
        document.getElementById(char_diff).innerHTML = t_diff[i];
        t_total_entree += t_entree[i];
        t_total_sortie += t_sortie[i];
  
  
        if(t_diff[i]  == 0){
            document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
        }else if(t_diff[i] > 0){
            document.getElementById(char_action).innerHTML = "Aucune";
        }else{
            let adjust = 0 - t_diff[i];
            document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
        }
    }
  
    document.getElementById("t_total_entree").innerHTML = t_total_entree;
    document.getElementById("t_total_sortie").innerHTML = t_total_sortie;
    diff_3 = t_total_entree - t_total_sortie;
  
    document.getElementById('diff_3').innerHTML = diff_3;
    if(diff_3 == 0){
        document.getElementById('action_3').innerHTML = "Nul- augmenter les entrees";
        action_3 = "Nul- augmenter les entrees";
    }else if(diff_3 > 0){
        document.getElementById('action_3').innerHTML = "Aucune";
        action_3 = "Aucune";
    }else{
        let adjust = 0 - diff_3;
        document.getElementById('action_3').innerHTML = "besoin de +" + adjust;
        action_3 = "besoin de + " + adjust;
    }    

}

let print_table_once = false;
function fill(){
  let th_first_row = [];
  let td_second_row = [];
  let tr_first_elt_row = document.createElement('tr');
  let tr_second_elt_row = document.createElement('tr');

  let few_elts = false;

  let a_entree = "a_entree_";
  let e_entree = "e_entree_";
  let t_entree = "t_entree_";
  let a_sortie = "a_sortie_";
  let e_sortie = "e_sortie_";
  let t_sortie = "t_sortie_";
  let a_diff = "a_diff_";
  let e_diff = "e_diff_";
  let t_diff = "t_diff_";
  let a_action = "a_action_";
  let e_action = "e_action_";
  let t_action = "t_action_";
  tab_elts = fill_bloc_1();


  ligne = tab_elts.length;
  let colonne = 14;
  let state_business = false;
  ligne_up = ligne + MAX_MAX;
  let matrice = [];
  create_matrice(matrice,ligne,colonne);
  let m = 1;
  let n = 0;
  let input_1 = 0;
  let input_2 = 0;
  let input_3 = 0;
  let input_4 = 0;
  let input_5 = 0;
  let input_6 = 0;


  if(print_table_once == false){
  for(let i  = 0 ; i < ligne; i++){
    let k = 0;
    for(let j = 1; j <= colonne ; j++){

      matrice[i][k] = document.createElement('tr');
      matrice[i][j] = document.createElement('th');
      matrice[i][j] = document.createTextNode(tab_elts[n]);
      j++;

      matrice[i][j] = document.createElement('td');
      input_1 = document.createElement('input');
      input_1.setAttribute('type','number');
      input_1.setAttribute('id',a_entree + m);
      input_1.setAttribute('size','12');
      matrice[i][j].appendChild(input_1);
      j++;

      matrice[i][j] = document.createElement('td');
      input_2 = document.createElement('input');
      input_2.setAttribute('type','number');
      input_2.setAttribute('id',a_sortie + m);
      input_2.setAttribute('size','12');
      matrice[i][j].appendChild(input_2);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id',a_diff + m);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id', a_action + m );
      j++;

      matrice[i][j] = document.createElement('td');
      input_3 = document.createElement('input');
      input_3.setAttribute('type','number');
      input_3.setAttribute('id',e_entree + m);
      input_3.setAttribute('size','12');
      matrice[i][j].appendChild(input_3);
      j++;

      matrice[i][j] = document.createElement('td');
      input_4 = document.createElement('input');
      input_4.setAttribute('type','number');
      input_4.setAttribute('id',e_sortie + m);
      input_4.setAttribute('size','12');
      matrice[i][j].appendChild(input_4);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id',e_diff + m);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id',e_action + m);
      j++;

      matrice[i][j] = document.createElement('td');
      input_5 = document.createElement('input');
      input_5.setAttribute('type','number');
      input_5.setAttribute('id',t_entree + m);
      input_5.setAttribute('size','12');
      matrice[i][j].appendChild(input_5);
      j++;

      matrice[i][j] = document.createElement('td');
      input_6 = document.createElement('input');
      input_6.setAttribute('type','number');
      input_6.setAttribute('id',t_sortie + m);
      input_6.setAttribute('size','12');
      matrice[i][j].appendChild(input_6);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id',t_diff + m);
      j++;

      matrice[i][j] = document.createElement('td');
      matrice[i][j].setAttribute('id',t_action + m);
      j++;
      m++;
      n++;
    }
  }

  let  special_banner = document.createElement('td');
  special_banner.setAttribute("colspan","13");
  special_banner.setAttribute('align','center');
  special_banner.innerText = "BUSINESS SECTION";
  special_banner.style.backgroundColor = 'grey';

    if(table_rep_questions[2] == "Oui"){
      state_business = true;
      k=0;
      n=0;
      for(let i = ligne; i < ligne_up+1; i++){
        matrice.push(new Array(colonne));
        for(let q = 1; q <= colonne; q++){
          if(i==ligne){
            matrice[i][k] = document.createElement('tr');
          }else{
            matrice[i][k] = document.createElement('tr');
            matrice[i][q] = document.createElement('th');
            matrice[i][q] = document.createTextNode(business_entries[n]);
            q++;

            matrice[i][q] = document.createElement('td');
            input_1 = document.createElement('input');
            input_1.setAttribute('type','number');
            input_1.setAttribute('id',a_entree + m);
            input_1.setAttribute('size','12');
            matrice[i][q].appendChild(input_1);
            q++;

            matrice[i][q] = document.createElement('td');
            input_2 = document.createElement('input');
            input_2.setAttribute('type','number');
            input_2.setAttribute('id',a_sortie + m);
            input_2.setAttribute('size','12');
            matrice[i][q].appendChild(input_2);
            q++;

            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id',a_diff + m);
            q++;

            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id', a_action + m );
            q++;

            matrice[i][q] = document.createElement('td');
            input_3 = document.createElement('input');
            input_3.setAttribute('type','number');
            input_3.setAttribute('id',e_entree + m);
            input_3.setAttribute('size','12');
            matrice[i][q].appendChild(input_3);
            q++;

            matrice[i][q] = document.createElement('td');
            input_4 = document.createElement('input');
            input_4.setAttribute('type','number');
            input_4.setAttribute('id',e_sortie + m);
            input_4.setAttribute('size','12');
            matrice[i][q].appendChild(input_4);
            q++;

            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id',e_diff + m);
            q++;

            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id',e_action + m);
            q++;

            matrice[i][q] = document.createElement('td');
            input_5 = document.createElement('input');
            input_5.setAttribute('type','number');
            input_5.setAttribute('id',t_entree + m);
            input_5.setAttribute('size','12');
            matrice[i][q].appendChild(input_5);
            q++;

            matrice[i][q] = document.createElement('td');
            input_6 = document.createElement('input');
            input_6.setAttribute('type','number');
            input_6.setAttribute('id',t_sortie + m);
            input_6.setAttribute('size','12');
            matrice[i][q].appendChild(input_6);
            q++;

            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id',t_diff + m);
            q++;
            matrice[i][q] = document.createElement('td');
            matrice[i][q].setAttribute('id',t_action + m);
            q++;
            m++;
            n++;
          }
        }
    }
  }


       tr_first_elt_row = document.createElement('tr');
       tr_second_elt_row = document.createElement('tr');
       table_fill = document.createElement('table');

        initialize_table(th_first_row,10);
        initialize_table(td_second_row,13);
      
        for(let i = 0; i < th_first_row.length; i++){
          th_first_row[i] = document.createElement('th');
        }

      th_first_row[0].innerText  = "Domain";
      th_first_row[1].innerText = "Argent";
      th_first_row[1].setAttribute('colspan','2');
      th_first_row[2].innerText = 'Diff';
      th_first_row[3].innerText = 'Action';
      th_first_row[4].innerText = 'Energie';
      th_first_row[4].setAttribute('colspan','2');
      th_first_row[5].innerText = 'Diff';
      th_first_row[6].innerText = 'Action';
      th_first_row[7].innerText = 'Temps';
      th_first_row[7].setAttribute('colspan','2');
      th_first_row[8].innerText = 'Diff';
      th_first_row[9].innerText = 'Action';

      for(let i = 0; i < th_first_row.length; i++)
        tr_first_elt_row.appendChild(th_first_row[i]);

      for(let i = 0; i < td_second_row.length; i++){
        td_second_row[i] = document.createElement('th');
      }
      td_second_row[0].innerText = '';
      td_second_row[0].setAttribute('class','vide');
      td_second_row[1].innerText = 'Entree';
      td_second_row[2].innerText ='Sortie';
      td_second_row[3].innerText = '';
      td_second_row[3].setAttribute('class','vide');
      td_second_row[4].innerText ='';
      td_second_row[4].setAttribute('class','vide');
      td_second_row[5].innerText = 'Entree';
      td_second_row[6].innerText = 'Sortie';
      td_second_row[7].innerText = '';
      td_second_row[7].setAttribute('class','vide');
      td_second_row[8].innerText = '';
      td_second_row[8].setAttribute('class','vide');
      td_second_row[9].innerText ='Entree';
      td_second_row[10].innerText = 'Sortie';
      td_second_row[11].innerText = '';
      td_second_row[11].setAttribute('class','vide');
      td_second_row[12].innerText ='';
      td_second_row[12].setAttribute('class','vide');

      
      for(let i = 0; i < td_second_row.length; i++)
        tr_second_elt_row.appendChild(td_second_row[i]);

      // Remplissage des deux premieres lignes du tableau
      table_fill.appendChild(tr_first_elt_row);
      table_fill.appendChild(tr_second_elt_row);
      //Remplissage table avec les tr

   
  if(state_business == true){
    for(let i = 0; i < ligne_up + 1; i++){
      let k = 0;
      for(let j = 1; j < colonne; j++){
        if(i == ligne){
          matrice[i][k].appendChild(special_banner);
        }else
          matrice[i][k].appendChild(matrice[i][j]);
      }
  }
  }else{
    few_elts = true;
    ligne_up = ligne;
    for(let i = 0; i < ligne_up; i++){
      let k = 0;
      for(let j = 1; j < colonne; j++){
          matrice[i][k].appendChild(matrice[i][j]);
      }
    }
  }
  print_table_once = true;

    let total_tr = document.createElement('tr');
    let total = document.createElement('td');
    let text_node = document.createTextNode('Total');
    total.appendChild(text_node); 
    let a_total_entree = document.createElement('td');
    a_total_entree.setAttribute('id','a_total_entree');
    let a_total_sortie = document.createElement('td');
    a_total_sortie.setAttribute('id','a_total_sortie');
    let diff_1 = document.createElement('td');
    diff_1.setAttribute('id','diff_1');
    let action_1 = document.createElement('td');
    action_1.setAttribute('id','action_1');
    let e_total_entree = document.createElement('td');
    e_total_entree.setAttribute('id','e_total_entree');
    let e_total_sortie = document.createElement('td');
    e_total_sortie.setAttribute('id','e_total_sortie');
    let diff_2 = document.createElement('td');
    diff_2.setAttribute('id','diff_2');
    let action_2 = document.createElement('td');
    action_2.setAttribute('id','action_2');
    let t_total_entree = document.createElement('td');
    t_total_entree.setAttribute('id','t_total_entree');
    let t_total_sortie = document.createElement('td');
    t_total_sortie.setAttribute('id','t_total_sortie');
    let diff_3 = document.createElement('td');
    diff_3.setAttribute('id','diff_3');
    let action_3 = document.createElement('td');
    action_3.setAttribute('id','action_3');

    total_tr.appendChild(total);
    total_tr.appendChild(a_total_entree);
    total_tr.appendChild(a_total_sortie);
    total_tr.appendChild(diff_1);
    total_tr.appendChild(action_1);
    total_tr.appendChild(e_total_entree);
    total_tr.appendChild(e_total_sortie);
    total_tr.appendChild(diff_2);
    total_tr.appendChild(action_2);
    total_tr.appendChild(t_total_entree);
    total_tr.appendChild(t_total_sortie);
    total_tr.appendChild(diff_3);
    total_tr.appendChild(action_3);

    //telechargement des tr dans la table
  if(few_elts == false){
    for(let i = 0 ; i < ligne_up + 1; i++)
      table_fill.appendChild(matrice[i][0]);
  }else{
    for(let i = 0; i < ligne_up ; i++){
      table_fill.appendChild(matrice[i][0]);
    }
  }

    table_fill.appendChild(total_tr);
  

    document.getElementById('fill_validate').appendChild(table_fill);
    button_elt = document.createElement('input');

    button_elt.setAttribute('type','button');    
    button_elt.setAttribute('value','Calculate');
    button_elt.setAttribute('class','calcul');
    button_elt.setAttribute('onclick','get_elts()');     
    document.getElementById('button_fill').appendChild(button_elt);

    button_elt2 = document.createElement('input');
    button_elt2.setAttribute('type', 'button');
    button_elt2.setAttribute('value', 'Random');
    button_elt2.setAttribute('class','random');
    button_elt2.setAttribute('onclick','random_generator()');
    document.getElementById('button_fill').appendChild(button_elt2);

  }

 }

 function generate_a_elts(){
  a_total_entree = 0;
  a_total_sortie = 0;
  a_entree = [];
  a_sortie = [];
  a_diff = [];

  for(let i = 0; i < ligne_up; i++){
      let a_rand_e = Math.ceil(Math.random()*100)
      let a_rand_s = Math.ceil(Math.random()*100);
      a_entree.push(a_rand_e); 
      a_sortie.push(a_rand_s);
      
      let char_entree = "a_entree_" + (i+1);
      let char_sortie = "a_sortie_" + (i+1);
      let char_diff = "a_diff_" + (i+1);
      let char_action = "a_action_" + (i+1);
      document.getElementById(char_entree).value = a_rand_e;
      document.getElementById(char_sortie).value = a_rand_s;
      a_diff.push(a_entree[i] - a_sortie[i]);
      document.getElementById(char_diff).innerHTML = a_diff[i];
      a_total_entree += a_entree[i];
      a_total_sortie += a_sortie[i];


      if(a_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(a_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - a_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }

  document.getElementById('a_total_entree').innerHTML = a_total_entree;
  document.getElementById('a_total_sortie').innerHTML = a_total_sortie;
  diff_1 = a_total_entree - a_total_sortie;

  document.getElementById('diff_1').innerHTML = diff_1;
  if(diff_1 == 0){
      document.getElementById('action_1').innerHTML = "Nul- augmenter les entrees";
      action_1 = "Nul- augmenter les entrees";
  }else if(diff_1 > 0){
      document.getElementById('action_1').innerHTML = "Aucune";
      action_1 = "Aucune";
  }else{
      let adjust = 0 - diff_1;
      document.getElementById('action_1').innerHTML = "besoin de +" + adjust;
      action_1 = "besoin de + " + adjust;
  }


}

function generate_e_elts(){
  e_total_entree = 0;
  e_total_sortie = 0;
  e_entree = [];
  e_sortie = [];
  e_diff=[];

  for(let i = 0; i < ligne_up; i++){
      let char_entree = "e_entree_" + (i+1);
      let char_sortie = "e_sortie_" + (i+1);
      let char_diff = "e_diff_" + (i+1);
      let char_action = "e_action_" + (i+1);
      let e_rand_e = Math.ceil(Math.random()*100)
      let e_rand_s = Math.ceil(Math.random()*100);
      document.getElementById(char_entree).value = e_rand_e;
      document.getElementById(char_sortie).value = e_rand_s;
      e_entree.push(e_rand_e); 
      e_sortie.push(e_rand_s);
      e_diff.push(e_entree[i] - e_sortie[i]);
      document.getElementById(char_diff).innerHTML = e_diff[i];
      e_total_entree += e_entree[i];
      e_total_sortie += e_sortie[i];

      if(e_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(e_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - e_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }
      /*e_total_entree = 0;
      e_total_sortie = 0;
      for(let i = 0; i < TAILLE_MAX; i++){
          e_total_entree += e_entree[i];
          e_total_sortie += e_sortie[i];
      }*/

  document.getElementById('e_total_entree').innerHTML = e_total_entree;
  document.getElementById('e_total_sortie').innerHTML = e_total_sortie;
  diff_2 = e_total_entree - e_total_sortie;

  document.getElementById('diff_2').innerHTML = diff_2;
  if(diff_2 == 0){
      document.getElementById('action_2').innerHTML = "Nul- augmenter les entrees";
      action_2 = "Nul- augmenter les entrees";
  }else if(diff_2 > 0){
      document.getElementById('action_2').innerHTML = "Aucune";
      action_2 = "Aucune";
  }else{
      let adjust = 0 - diff_2;
      document.getElementById('action_2').innerHTML = "besoin de +" + adjust;
      action_2 = "besoin de + " + adjust;
  }


}

function generate_t_elts(){
  t_total_entree = 0;
  t_total_sortie = 0;
  t_entree = [];
  t_sortie = [];
  t_diff = [];

  for(let i = 0; i < ligne_up; i++){
      let char_entree = "t_entree_" + (i+1);
      let char_sortie = "t_sortie_" + (i+1);
      let char_diff = "t_diff_" + (i+1);
      let char_action = "t_action_" + (i+1);
      let t_rand_e = Math.ceil(Math.random()*100)
      let t_rand_s = Math.ceil(Math.random()*100);
      document.getElementById(char_entree).value = t_rand_e;
      document.getElementById(char_sortie).value = t_rand_s;
      t_entree.push(t_rand_e); 
      t_sortie.push(t_rand_s);
      t_diff.push(t_entree[i] - t_sortie[i]);
      document.getElementById(char_diff).innerHTML = t_diff[i];
      t_total_entree += t_entree[i];
      t_total_sortie += t_sortie[i];


      if(t_diff[i]  == 0){
          document.getElementById(char_action).innerHTML = "Nul- augmenter les entrees";
      }else if(t_diff[i] > 0){
          document.getElementById(char_action).innerHTML = "Aucune";
      }else{
          let adjust = 0 - t_diff[i];
          document.getElementById(char_action).innerHTML = "besoin de  +" + adjust;
      }
  }

  document.getElementById("t_total_entree").innerHTML = t_total_entree;
  document.getElementById("t_total_sortie").innerHTML = t_total_sortie;
  diff_3 = t_total_entree - t_total_sortie;

  document.getElementById('diff_3').innerHTML = diff_3;
  if(diff_3 == 0){
      document.getElementById('action_3').innerHTML = "Nul- augmenter les entrees";
      action_3 = "Nul- augmenter les entrees";
  }else if(diff_3 > 0){
      document.getElementById('action_3').innerHTML = "Aucune";
      action_3 = "Aucune";
  }else{
      let adjust = 0 - diff_3;
      document.getElementById('action_3').innerHTML = "besoin de +" + adjust;
      action_3 = "besoin de + " + adjust;
  }    
}
  

function random_generator(){
  generate_a_elts();
  generate_e_elts();
  generate_t_elts();
}

function count_uncount(){
  for(let i = 0; i < NB_QUESTIONS; i++){
    if( indice == i){
      document.getElementById(prefix+indice).classList.add('activate');
      document.getElementById(prefix+indice).classList.remove('deactivate');
    }else{
      document.getElementById(prefix+i).classList.add('deactivate');
      document.getElementById(prefix+i).classList.remove('activate');
    }
  }
}


let print_family_once = false;
function family_fill(){ 
  if(print_family_once == false){
    print_family_once = true;
  if(elt1 == "")
    elt1 = document.getElementById('family_members').value;
  splitted_value_family = elt1.split(',');
  let table_elt;
  let family_member_a_e="family_member_a_e_",
  family_member_a_s="family_member_a_s_",
  family_member_e_e="family_member_e_e_",
  family_member_e_s="family_member_e_s_",
  family_member_t_e="family_member_t_e_",
  family_member_t_s="family_member_t_s_";
  
  let prefix_diff_a = "a_family_diff_";
  let prefix_action_a = "a_family_action_";

  let prefix_diff_e = "e_family_diff_";
  let prefix_action_e = "e_family_action_";

  let prefix_diff_t = "t_family_diff_";
  let prefix_action_t = "t_family_action_";


  let tr_first_element;


  let th_first_element = [];

  function initialize_table(tr,taille){
    for(let i = 0; i < taille ; i++){
      tr.push(10);
  }
}

  initialize_table(th_first_element,10);

  
  let td_first_element = [];

  initialize_table(td_first_element,13);

  
  const MAX_COL = 12;


//  let tr_values = [splitted_value_family.length];
//  let td_values = new Array(12);

  let mat_tr_td = [];
  let string_char = "";

  for(let i = 0; i < splitted_value_family.length; i++){
    mat_tr_td.push(new Array (MAX_COL+1));
  }

  for(let i = 0; i < splitted_value_family.length; i++){
    let  k = 0;
    for(let j = 1; j <= MAX_COL+1 ; j++){
      mat_tr_td[i][k] = document.createElement('tr');
      mat_tr_td[i][j] = document.createElement('td');
    }
  }

//  console.log(mat_tr_td[0][0]);
//  console.log(mat_tr_td[1][0]);
//  console.log(mat_tr_td[2][0]);
  let tr_second_row;

  table_elt = document.createElement('table');
  tr_first_element= document.createElement('tr');
//  td_first_element = document.createElement('td');
//  td_fst_element = document.createElement('td');
  for(let j = 0 ; j < th_first_element.length; j++){
      th_first_element[j] = document.createElement('th');
  }  
   

  th_first_element[0].innerText = 'Famille';
  th_first_element[1].innerText = 'Argent';
  th_first_element[1].setAttribute('colspan','2');
  th_first_element[2].innerText = 'Diff';
  th_first_element[3].innerText = 'Action';
  th_first_element[4].innerText = 'Energie';
  th_first_element[4].setAttribute('colspan','2');
  th_first_element[5].innerText = 'Diff';
  th_first_element[6].innerText = 'Action';
  th_first_element[7].innerText = 'Temps';
  th_first_element[7].setAttribute('colspan','2');
  th_first_element[8].innerText = 'Diff';
  th_first_element[9].innerText = 'Action';

  
  for(let k = 0; k < td_first_element.length; k++){
    td_first_element[k] = document.createElement('td');
  }

  td_first_element[0].innerText = '';
  td_first_element[0].setAttribute('class','vide');
  td_first_element[1].innerText = 'Entree';
  td_first_element[2].innerText ='Sortie';
  td_first_element[3].innerText = '';
  td_first_element[3].setAttribute('class','vide');
  td_first_element[4].innerText ='';
  td_first_element[4].setAttribute('class','vide');
  td_first_element[5].innerText = 'Entree';
  td_first_element[6].innerText = 'Sortie';
  td_first_element[7].innerText = '';
  td_first_element[7].setAttribute('class','vide');
  td_first_element[8].innerText = '';
  td_first_element[8].setAttribute('class','vide');
  td_first_element[9].innerText ='Entree';
  td_first_element[10].innerText = 'Sortie';
  td_first_element[11].innerText = '';
  td_first_element[11].setAttribute('class','vide');
  td_first_element[12].innerText ='';
  td_first_element[12].setAttribute('class','vide');

  let m = 0;
  let n = 0;
  for(let i = 0; i < splitted_value_family.length; i++){
      m++;
      n++;
      let input_type_1;
      let input_type_2;
      let input_type_3;
      let input_type_4;
      let input_type_5;
      let input_type_6;

        mat_tr_td[i][0] = document.createElement('tr');

        mat_tr_td[i][1] = document.createElement('td');
        mat_tr_td[i][1].innerText = splitted_value_family[i];
        mat_tr_td[i][2] = document.createElement('td');
        input_type_1 = document.createElement('input');
        input_type_1.setAttribute('type','number');
        input_type_1.setAttribute('id',family_member_a_e + m);
        input_type_1.setAttribute('size','12');
        mat_tr_td[i][2].appendChild(input_type_1);
        mat_tr_td[i][3]= document.createElement('td');
        input_type_2 = document.createElement('input');
        input_type_2.setAttribute('type','number');
        input_type_2.setAttribute('id',family_member_a_s + m);
        input_type_2.setAttribute('size','12');
        mat_tr_td[i][3].appendChild(input_type_2);
        mat_tr_td[i][4] = document.createElement('td');
        mat_tr_td[i][4].setAttribute('id',prefix_diff_a + n);
        mat_tr_td[i][5] = document.createElement('td');
        mat_tr_td[i][5].setAttribute('id',prefix_action_a + n);
        mat_tr_td[i][6] = document.createElement('td');
        input_type_3 = document.createElement('input');
        input_type_3.setAttribute('type','number');
        input_type_3.setAttribute('id',family_member_e_e + m);
        input_type_3.setAttribute('size','12');
        mat_tr_td[i][6].appendChild(input_type_3);
        mat_tr_td[i][7] = document.createElement('td');
        input_type_4 = document.createElement('input');
        input_type_4.setAttribute('type','number');
        input_type_4.setAttribute('id',family_member_e_s + m);
        input_type_4.setAttribute('size','12');
        mat_tr_td[i][7].appendChild(input_type_4);

        mat_tr_td[i][8] = document.createElement('td');
        mat_tr_td[i][8].setAttribute('id',prefix_diff_e + n);

        mat_tr_td[i][9] = document.createElement('td');
        mat_tr_td[i][9].setAttribute('id',prefix_action_e + n);

        input_type_5 = document.createElement('input');
        input_type_5.setAttribute('type','number');
        input_type_5.setAttribute('id',family_member_t_e + m);
        input_type_5.setAttribute('size','12');

        mat_tr_td[i][10] = document.createElement('td');
        mat_tr_td[i][10].appendChild(input_type_5);
       // mat_tr_td[i][8].appendChild(input_type_5);

//        mat_tr_td[i][9] = document.createElement('td');
//        mat_tr_td[i][9].setAttribute('id',prefix_diff + n);
//        mat_tr_td[i][10] = document.createElement('td');
        mat_tr_td[i][11] = document.createElement('td');

        input_type_6 = document.createElement('input');
        input_type_6.setAttribute('type','number');
        input_type_6.setAttribute('id',family_member_t_s + m);
        input_type_6.setAttribute('size','12');
        mat_tr_td[i][11].appendChild(input_type_6);

        mat_tr_td[i][12] = document.createElement('td');
        mat_tr_td[i][12].setAttribute('id',prefix_diff_t + n );
        mat_tr_td[i][13] = document.createElement('td');
        mat_tr_td[i][13].setAttribute('id',prefix_action_t + n); 
                
     }

  

     for(let k = 0; k < th_first_element.length; k++)
      tr_first_element.appendChild(th_first_element[k]);

      document.getElementById('family_validate').appendChild(tr_first_element);

    tr_second_row = document.createElement('tr');

    for(let j = 0; j < td_first_element.length; j++){
      tr_second_row.appendChild(td_first_element[j]);
    }
    document.getElementById('family_validate').appendChild(tr_second_row);

    for(let i = 0 ; i < splitted_value_family.length; i++){
        let k = 0;
        for(let j = 1; j <= MAX_COL+1 ; j++){
          mat_tr_td[i][k].appendChild(mat_tr_td[i][j]);
        }
    }

    /*for(let i = 0; i < splitted_value_family.length; i++){
      let k = 0;
      document.getElementById('family_validate').appendChild(mat_tr_td[i][k]);
    }*/

     table_elt.appendChild(tr_first_element);
     table_elt.appendChild(tr_second_row);

     let total_tr = document.createElement('tr');
     let total = document.createElement('td');
     let text_node = document.createTextNode('Total');
     total.appendChild(text_node); 
     a_total_entree = document.createElement('td');
     a_total_entree.setAttribute('id','a_family_total_entree');
     a_total_sortie = document.createElement('td');
     a_total_sortie.setAttribute('id','a_family_total_sortie');
     let diff_1 = document.createElement('td');
     diff_1.setAttribute('id','f_diff_1');
     let action_1 = document.createElement('td');
     action_1.setAttribute('id','f_action_1');
     e_total_entree = document.createElement('td');
     e_total_entree.setAttribute('id','e_family_total_entree');
     let e_total_sortie = document.createElement('td');
     e_total_sortie.setAttribute('id','e_family_total_sortie');
     let diff_2 = document.createElement('td');
     diff_2.setAttribute('id','f_diff_2');
     let action_2 = document.createElement('td');
     action_2.setAttribute('id','f_action_2');
     t_total_entree = document.createElement('td');
     t_total_entree.setAttribute('id','t_family_total_entree');
     t_total_sortie = document.createElement('td');
     t_total_sortie.setAttribute('id','t_family_total_sortie');
     let diff_3 = document.createElement('td');
     diff_3.setAttribute('id','f_diff_3');
     let action_3 = document.createElement('td');
     action_3.setAttribute('id','f_action_3');
 
     total_tr.appendChild(total);
     total_tr.appendChild(a_total_entree);
     total_tr.appendChild(a_total_sortie);
     total_tr.appendChild(diff_1);
     total_tr.appendChild(action_1);
     total_tr.appendChild(e_total_entree);
     total_tr.appendChild(e_total_sortie);
     total_tr.appendChild(diff_2);
     total_tr.appendChild(action_2);
     total_tr.appendChild(t_total_entree);
     total_tr.appendChild(t_total_sortie);
     total_tr.appendChild(diff_3);
     total_tr.appendChild(action_3);
 
     for(let i = 0; i < splitted_value_family.length; i++){
       let k = 0;
       table_elt.appendChild(mat_tr_td[i][k]);
     }

     table_elt.appendChild(total_tr);

     document.getElementById('family_validate').appendChild(table_elt);



     button_elt = document.createElement('input');
     button_elt.setAttribute('type','button');
     button_elt.setAttribute('value','Calculate');    
     button_elt.setAttribute('onclick','family_get_elts()');
     document.getElementById('family_fill').appendChild(button_elt);

     button_elt2 = document.createElement('input');
     button_elt2.setAttribute('type', 'button');
     button_elt2.setAttribute('value', 'Random');
     button_elt2.setAttribute('class','random');
     button_elt2.setAttribute('onclick','family_generate()');
     document.getElementById('family_fill').appendChild(button_elt2);
 
     
  }
}

let is_inside_once = false;
function inject(){
//  let table_section = document.createElement('div');
//  table_section.setAttribute('id','table_section');
  let fill_validate = document.createElement('div');
  fill_validate.setAttribute('id','fill_validate');
  let button_bloc = document.createElement('div');
  button_bloc.setAttribute('id','button_fill');
  fill_validate.appendChild(button_bloc);
  let family_validate = document.createElement('div');
  let family_bloc = document.createElement('div');
  family_bloc.setAttribute('id','family_fill');
  family_validate.setAttribute('id','family_validate');
  family_validate.appendChild(family_bloc);
  let friends_validate = document.createElement('div');
  friends_validate.setAttribute('id','friends_validate');
  let friends_bloc = document.createElement('div');
  friends_bloc.setAttribute('id','friends_fill');
  friends_validate.appendChild(friends_bloc);
  if(elt2==""){
    elt2 = document.getElementById('friends_members').value;
    is_inside_once = true;
  }
  document.getElementById('bloc_questionnaire').style.display = 'none';

  document.getElementById('table_section').appendChild(fill_validate);
  document.getElementById('table_section').appendChild(family_validate);
  document.getElementById('table_section').appendChild(friends_validate);
  document.getElementById('table_section').classList.add('activate');
  document.getElementById('table_section').classList.remove('deactivate');
  let test = document.body.childNodes;  
  document.body.removeChild(test[0]);
  document.body.removeChild(test[0]);

 // document.body.appendChild(table_section); 
}

function business_fill(){
  let doc = document.getElementById('bloc_question_1');
 if(k == 0){
  doc.classList.add("deactivate");
  doc.classList.remove('activate');
  k= 1;
 }else{
  doc.classList.add('activate');
  doc.classList.remove('deactivate');
  k=0;
 }
}

/* This function is going to generate a table based
 on the informations provided in the questionnaire. Only personal
 user modifiers and business might appear. no family
  and friends. Case 1 : Family => 0 , Friends => 0*/
function generate_informations_case1(){
  inject();
  fill();
}


/* This function is going to generate a table based
 on the informations provided in the questionnaire.Not Only personal
 user modifiers and business might appear, also family
  but not friends. Case 2 : Family => Yes , Friends => No*/
function generate_informations_case2(){
  inject();
  fill();
  family_fill();
}

/* This function is going to generate a table based
 on the informations provided in the questionnaire.Not Only personal
 user modifiers and business might appear, also friends
  but not family. Case 3 : Family => No , Friends => Yes*/
  function generate_informations_case3(){
    inject();
    fill();
    friends_validate();
  }


  /* This function is going to generate a table based
 on the informations provided in the questionnaire.Not Only personal
 user modifiers and business might appear, also friends
 and family. Case 4 : Family => Yes , Friends => Yes*/
  function generate_informations_case4(){
    inject();
    fill();
    family_fill();
    friends_validate();
  }



class Question{
  bloc = document.createElement('div');
  label = document.createElement('div');
  lib = document.createElement('span');
  pquestion = document.createElement('p');
  poptions = document.createElement('p');
  labels = [];

  constructor(bloc_question,number,question_lib,question,name,options,values,state){
    this.bloc_question = bloc_question;
    this.number = number;
    this.question_lib = question_lib;
    this.question = question;
    this.name = name;
    this.options = options;
    this.values = values;
    this.state = state;
  }

  create_section_bloc(){ 
    this.bloc.setAttribute('id',this.bloc_question);
    if(this.state == "false"){
      //this.bloc.setAttribute('class','deactivate');
      this.bloc.classList.add('deactivate');
      this.bloc.classList.remove('activate');
      this.bloc.classList.setAttribute('class','deactivate');
    }
    else{
      //this.bloc.setAttribute('class','activate');
      this.bloc.classList.add('activate');
      this.bloc.classList.remove('deactivate');
    }
  }

  create_section_label(){
    this.label.setAttribute('class','question_label');
  }
  create_section_lib(){
    this.lib.setAttribute('class','question_lib');
    this.lib.innerText = "Question " + this.number; 
  }

  create_section_question(){
    this.pquestion.setAttribute('class','question');
    this.pquestion.innerText = this.question;
  }

  create_section_options(){
    let div;
    this.poptions.setAttribute('class','options');
    for(let i = 0; i < this.options.length; i++){
      div = document.createElement('div');
      div.setAttribute('id','option_' + parseInt(i+1));
      let input = document.createElement('input');
      this.labels.push(document.createElement('label'));
      let tmp = this.name + "_" + parseInt(i+1);
      input.setAttribute('type','radio');
      input.setAttribute('name',this.name);
      input.setAttribute('id',tmp);
      input.setAttribute('value',this.values[i]);
      this.labels[i].setAttribute('for',tmp);
      this.labels[i].innerText = this.options[i];
      div.appendChild(input);
      div.appendChild(this.labels[i])
      //this.poptions.appendChild(input);
      //this.poptions.appendChild(this.labels[i]);
      this.poptions.appendChild(div);
    }
  }


  assemble(){
    this.create_section_bloc();
    this.create_section_label();
    this.create_section_lib();
    this.create_section_question();
    this.create_section_options();
    this.bloc.appendChild(this.label);
    this.label.appendChild(this.lib);
    this.bloc.appendChild(this.label);
    this.bloc.appendChild(this.pquestion);
    this.bloc.appendChild(this.poptions);
  }

  show(){
    //console.log(this.bloc);
  }
}

class Field extends Question{

  field = document.createElement('input');
  dfield = document.createElement('div');

  constructor(bloc_question,number,question_lib,question,name,options,values,state,text,members){
    super(bloc_question,number,question_lib,question,name,options,values,state);
    this.text = text;
    this.members=members;
  }

  create_section_question(){
    this.dfield.setAttribute('class','question');
  }

  create_section_field(){
    let p_tmp = document.createElement('p');
    this.field.setAttribute('type','text');
    this.field.setAttribute('id',this.members);
    this.field.setAttribute('size','30');
    this.field.setAttribute('placeholder',this.text);
    p_tmp.append(this.question);
    p_tmp.appendChild(document.createElement('br'));
    p_tmp.appendChild(document.createElement('br'));
    p_tmp.appendChild(this.field);
    this.dfield.appendChild(p_tmp);
  }

  assemble(){
    this.create_section_bloc();
    this.create_section_label();
    this.create_section_lib();
    this.create_section_question();
    this.create_section_field();
    this.bloc.appendChild(this.label);
    this.label.appendChild(this.lib);
    this.bloc.appendChild(this.label);
    this.bloc.appendChild(this.dfield);
  }

}


let questionn = [new Question("bloc_question_1",1,"Question","Faites vous partie d'une association?","association",["Oui","Non"],["Oui","Non"],true),
  new Question("bloc_question_2",2,"Question","Quelle est votre Religion?","religion",["Chretien","Musulman","Juif","Bouddhiste","Pentecotiste","Aucun"],["Chretien","Musulman","Juif","Bouddhiste","Pentecotiste","Aucun"],false),
  new Question("bloc_question_3",3,"Question","Avez vous un business?","business",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_4",4,"Question","Prenez vous des vacances?","holiday",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_5",5,"Question","Faites vous partie d'une tontine?","tontine",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_6",6,"Question"," Pratiquez vous un sport ?","sport",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_7",7,"Question","Investissez vous dans votre sante?","sante",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_8",8,"Question","Pensez vous regulierement a votre nutrition?","nutrition",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_9",9,"Question","Avez vous une famille?","family",["Oui","Non"],["Oui","Non"],false),
  new Question("bloc_question_10",10,"Question"," Avez vous des amis?","friend",["Oui","Non"],["Oui","Non"],false),
  new Field("bloc_question_11",11,"Question","Entrez le nombre de membres de la famille(a separer par une virgule)","","","",false,"Ex: Mama,Papa,Oncle","family_members"),
  new Field("bloc_question_12",12,"Question","Entrez le nombre d'amis(a separer par une virgule)","","","",false,"Ex: Lena,Stella,Kaya","friends_members")
  ];


for(let i = 0; i < QUESTIONS; i++){
  questionn[i].assemble();
}




window.onload = function(){
  document.getElementById('sensitive_bloc').classList.add('activate');
  document.getElementById('sensitive_bloc').classList.remove('deactivate');

  document.getElementById('sensitive_bloc').appendChild(questionn[0].bloc); 
}

let z = 0; // a ne pas oublier(comme tu es BETE LA!! ) z= 1 pour la vraie fonction right arrow
let l = -1;
let state = false;
let cur_state = false;
let final_state = false;
let id_family = 8, id_amis =9;
let val_family = "";
let val_amis = "";
let amis = "";
let button = document.createElement('input');
let input;
let counter = 0 , counter2 = 0, counter3 =0;
let boolean_0 = false,boolean_1 = false, boolean_2 = false, boolean_3 = false;
let final_questions = 10;
let push_through = false;
let button_in_case = 0;
let stop_button_in_case = false;
let final_counter = false;
let in_form_11 = false;

function create_button(){
    button = document.createElement('input');
    button.setAttribute('type','button');
    button.setAttribute('value','Valider'); 
    button.setAttribute('id','validate_button');
    document.getElementById('special_button').appendChild(button);
}

function validate_form(){
  let validate_family = 8
  let validate_friends = 9;
  let value1 =  false, value2 = false;
  let returned_value_1 = "";
  let returned_value_2 = "";
  let cases;
  
  if(table_rep_questions[8] == "Oui"){
    
    try{
      returned_value_1 = (document.getElementById('family_validate').value).split(",");
    }catch(error){
      console.error("Valeur undefined");
    }finally{
      alert("Erreur traitee");
    }

/*    if(returned_value_1.length == "" || returned_value_1.length == " "){
      value1 = false;
    }else
      value1 = true; 
    }

    if(table_rep_questions[9] == "Oui"){
      returned_value_2 = (document.getElementById('friends_validate').value).split(",");
      if(returned_value_2.length == "" || returned_value_2 == " "){
        value2 = false;
      }else
        value2 = true; 
      }

  cases = value1 && value2;

  switch(cases){

    case value1 == true && value2 == false:
      console.log("Yup1");
      return 1;
    break;

    case value1 == false && value2 == true:
      console.log("Yup2");
      return 2;
      break;
    case value1 == true && value2 == true:
      console.log("Yup3");
      return 3;
    break;

    default:
      console.log('Yup default');
      break;
  }*/
}
}

function left_arrow(){
  if(z>0){
    if(z == 10 && boolean_0 == true){
      z-=2;
    }else if(z == 10 && boolean_1 == true){
      z--;
    }else if(z == 10 && boolean_2 == true){
      z--;
    }else if(z == 10 && boolean_3 == true){
      boolean_3 = false;
    }else{   
        z--;
    }
    l--;

    //Fix the bug of l-- , might need to console.log its values
    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    console.log(document.getElementById('sensitive_bloc'));
  }
  console.log(z + "vaut ");
}

let change = false;
let a = 0;

function right_arrow(){  

  input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
  
/*  if(a%2 == 0){
    document.getElementById('sensitive_bloc').classList.add('deactivate'); 
    document.getElementById('sensitive_bloc').classList.remove('activate');  
    a++;
  }else{
    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[z+1].bloc);
    
    document.getElementById('sensitive_bloc').classList.add('activate'); 
    document.getElementById('sensitive_bloc').classList.remove('deactivate');
    a++;  

  }*/


  /*  if(change == false){    
    document.getElementById('sensitive_bloc').classList.add('deactivate');
    document.getElementById('sensitive_bloc').classList.remove('activate');
    change = true;
    console.log(change);
    }else{
      document.getElementById('sensitive_bloc').classList.add('activate');
      document.getElementById('sensitive_bloc').classList.remove('deactivate');
      change = false;
      console.log(change);
    }*/
  
  if(z <= QUESTIONS_OBG & state == false){ 
    if(z != 9){
      z++;
      l++;
      for(let i = 0; i < input.length; i++){
        if(input[i].checked){
          table_rep_questions[l]= input[i].value;
  //        console.log(input[i].value);
          console.log(table_rep_questions);
        }
      }
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
//      console.log(document.getElementById('sensitive_bloc'));
//      console.log("z vaut ici " + z);
    }else if(z == 9 && push_through == false){
      //push_through = true;  
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
      //l++;
      console.log(input[0].parentNode.parentNode);
      console.log(input[0].checked);
      console.log(input[1].checked);

     if(input[0].checked)
      table_rep_questions[9] = input[0].value;
    else if(input[1].checked)
      table_rep_questions[9] = input[1].value;

      console.log(table_rep_questions);  
      console.log(document.getElementById('sensitive_bloc'));
      z++;
      console.log("valeur de z " + z);
    }
}

  if(z == 10 && (table_rep_questions[8] == "Non" || table_rep_questions[8] == -1 ) && (table_rep_questions[9] == "Non" || table_rep_questions[9] == -1 )){
    //l++;
    create_button();
    button.setAttribute('onclick','generate_informations_case1()');
    //Case 2 : family registeres, but not friends 
    boolean_0 = true;
    boolean_1 = false;
    boolean_2 == false;
    boolean_3 == false;
    
  }else if( z == 10 && table_rep_questions[8] == "Oui" &&  (table_rep_questions[9] == "Non" || table_rep_questions[9] == -1)){
    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    document.getElementById('family_members').addEventListener('focusout',function(){
      create_button();
      button.setAttribute('onclick','generate_informations_case2()');
    });

    if(stop_button_in_case == false)
      button_in_case++;

    if(button_in_case == 2){
      document.getElementById('right-arrow').addEventListener('click',function(){
        create_button();
        button.setAttribute('onclick','generate_informations_case2()');
      });
      stop_button_in_case = true;
    }

 //   document.getElementById('right-arrow').setAttribute('onclick',animate());
    /*document.getElementById('right-arrow').addEventListener('click',function(){
      create_button();
      button.setAttribute('onclick','generate_informations_case2()');
    });*/
    boolean_0 = false;
    boolean_1 = true;
    boolean_2 == false;
    boolean_3 == false;
  }else if( z == 10 && (table_rep_questions[8] == "Non" || table_rep_questions[8] == -1 ) &&  table_rep_questions[9] == "Oui"){
    console.log("test2");
    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[11].bloc);
    document.getElementById('friends_members').addEventListener('focusout',function(){
      create_button();
      button.setAttribute('onclick','generate_informations_case3()');
    });

    if(stop_button_in_case == false)
      button_in_case++;

    if(button_in_case == 2){
      document.getElementById('right-arrow').addEventListener('click',function(){
        create_button();
        button.setAttribute('onclick','generate_informations_case2()');
      });
      stop_button_in_case = true;
    }
  boolean_0 = false;
  boolean_1 == false;
  boolean_2 = true;
  boolean_3 = false;
  final_counter = false;
 
}else if(z == 10 && table_rep_questions[8] == "Oui" && table_rep_questions[9] == "Oui"){
    console.log("test3");
    console.log(elt1 + " pile au debut");

    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[final_questions].bloc);
    if(final_questions < 11){
     final_questions++;
     in_form_11 = true;
    }else if(final_questions == 11){
      document.getElementById('friends_members').addEventListener('focusout',function(){
        create_button();
        button.setAttribute('onclick','generate_informations_case4()');  
      });
    }

    if(final_questions == 11 && in_form_11 == true ){
      document.getElementById('family_members').addEventListener('focusout',function(){
        elt1 = document.getElementById('family_members').value;
      });
      console.log(document.getElementById('family_members'));
      in_form_11 = false;
      console.log(elt1);

    }
  

    if(stop_button_in_case == false)
      button_in_case++;
  
    if(button_in_case == 3){
      document.getElementById('right-arrow').addEventListener('click',function(){
        create_button();
        button.setAttribute('onclick','generate_informations_case4()');
      });
      stop_button_in_case = true;
    }
    boolean_0 = false;
    boolean_3 = true;
    boolean_2 = false;
    boolean_1 =false;
  }


}
 

let print_once_friend = false;

function friends_validate(){
  if(print_once_friend == false){
    print_once_friend = true;
    if(is_inside_once == true){
      alert("Valeur deja rentree!");
    }else if(elt2 == "")
      elt2 = document.getElementById('friends_members').value;
    
    splitted_value_friend = elt2.split(',');
    let table_elt;
    let prefix = "friend_member_";
    let friend_member_a_e="friend_member_a_e_",
    friend_member_a_s="friend_member_a_s_",
    friend_member_e_e="friend_member_e_e_",
    friend_member_e_s="friend_member_e_s_",
    friend_member_t_e="friend_member_t_e_",
    friend_member_t_s="friend_member_t_s_";

    let total_tr = document.createElement('tr');
    let total = document.createElement('td');
    let text_node = document.createTextNode('Total');
    let diff_1 = document.createElement('td');
    let action_1 = document.createElement('td');
    let a_total_sortie = document.createElement('td');
    let e_total_sortie = document.createElement('td');
    let t_total_sortie = document.createElement('td');
    let diff_2 = document.createElement('td');
    let action_2 = document.createElement('td');
    let diff_3 = document.createElement('td');
    let action_3 = document.createElement('td');

 
    let prefix_diff_a = "a_friend_diff_";
    let prefix_action_a = "a_friend_action_";
  
    let prefix_diff_e = "e_friend_diff_";
    let prefix_action_e = "e_friend_action_";
  
    let prefix_diff_t = "t_friend_diff_";
    let prefix_action_t = "t_friend_action_";
  
    let tr_first_element;
  
    let th_first_element = [];
  
    function initialize_table_f(tr,taille){
      for(let i = 0; i < taille ; i++){
        tr.push(10);
    }
  }
  
    initialize_table_f(th_first_element,10);
  
    
    let td_first_element = [];
  
    initialize_table_f(td_first_element,13);
  
    
    const MAX_COL = 12;
  
  
  //  let tr_values = [splitted_value_family.length];
  //  let td_values = new Array(12);
  
    let mat_tr_td = [];
    let string_char = "";
  
    for(let i = 0; i < splitted_value_friend.length; i++){
      mat_tr_td.push(new Array (MAX_COL+1));
    }
  
    for(let i = 0; i < splitted_value_friend.length; i++){
      let  k = 0;
      for(let j = 1; j <= MAX_COL+1 ; j++){
        mat_tr_td[i][k] = document.createElement('tr');
        mat_tr_td[i][j] = document.createElement('td');
      }
    }
  
  //  console.log(mat_tr_td[0][0]);
  //  console.log(mat_tr_td[1][0]);
  //  console.log(mat_tr_td[2][0]);
    let tr_second_row;
  
    table_elt = document.createElement('table');
    tr_first_element= document.createElement('tr');
  //  td_first_element = document.createElement('td');
  //  td_fst_element = document.createElement('td');
    for(let j = 0 ; j < th_first_element.length; j++){
        th_first_element[j] = document.createElement('th');
    }  
     
  
    th_first_element[0].innerText = 'Amis';
    th_first_element[1].innerText = 'Argent';
    th_first_element[1].setAttribute('colspan','2');
    th_first_element[2].innerText = 'Diff';
    th_first_element[3].innerText = 'Action';
    th_first_element[4].innerText = 'Energie';
    th_first_element[4].setAttribute('colspan','2');
    th_first_element[5].innerText = 'Diff';
    th_first_element[6].innerText = 'Action';
    th_first_element[7].innerText = 'Temps';
    th_first_element[7].setAttribute('colspan','2');
    th_first_element[8].innerText = 'Diff';
    th_first_element[9].innerText = 'Action';
  
    
    for(let k = 0; k < td_first_element.length; k++){
      td_first_element[k] = document.createElement('td');
    }
  
    td_first_element[0].innerText = '';
    td_first_element[0].setAttribute('class','vide');
    td_first_element[1].innerText = 'Entree';
    td_first_element[2].innerText ='Sortie';
    td_first_element[3].innerText = '';
    td_first_element[3].setAttribute('class','vide');
    td_first_element[4].innerText ='';
    td_first_element[4].setAttribute('class','vide');
    td_first_element[5].innerText = 'Entree';
    td_first_element[6].innerText = 'Sortie';
    td_first_element[7].innerText = '';
    td_first_element[7].setAttribute('class','vide');
    td_first_element[8].innerText = '';
    td_first_element[8].setAttribute('class','vide');
    td_first_element[9].innerText ='Entree';
    td_first_element[10].innerText = 'Sortie';
    td_first_element[11].innerText = '';
    td_first_element[11].setAttribute('class','vide');
    td_first_element[12].innerText ='';
    td_first_element[12].setAttribute('class','vide');
  
    let m = 0;
    let n = 0;
    for(let i = 0; i < splitted_value_friend.length; i++){
        m++;
        n++;
        let input_type_1;
        let input_type_2;
        let input_type_3;
        let input_type_4;
        let input_type_5;
        let input_type_6;
  
          mat_tr_td[i][0] = document.createElement('tr');
  
          mat_tr_td[i][1] = document.createElement('td');
          mat_tr_td[i][1].innerText = splitted_value_friend[i];
          mat_tr_td[i][2] = document.createElement('td');
          input_type_1 = document.createElement('input');
          input_type_1.setAttribute('type','number');
          input_type_1.setAttribute('id',friend_member_a_e + m);
          input_type_1.setAttribute('size','12');
          mat_tr_td[i][2].appendChild(input_type_1);
          mat_tr_td[i][3]= document.createElement('td');
          input_type_2 = document.createElement('input');
          input_type_2.setAttribute('type','number');
          input_type_2.setAttribute('id',friend_member_a_s + m);
          input_type_2.setAttribute('size','12');
          mat_tr_td[i][3].appendChild(input_type_2);
          mat_tr_td[i][4] = document.createElement('td');
          mat_tr_td[i][4].setAttribute('id',prefix_diff_a + n);
          mat_tr_td[i][5] = document.createElement('td');
          mat_tr_td[i][5].setAttribute('id',prefix_action_a + n);
          mat_tr_td[i][6] = document.createElement('td');
          input_type_3 = document.createElement('input');
          input_type_3.setAttribute('type','number');
          input_type_3.setAttribute('id',friend_member_e_e + m);
          input_type_3.setAttribute('size','12');
          mat_tr_td[i][6].appendChild(input_type_3);
          mat_tr_td[i][7] = document.createElement('td');
          input_type_4 = document.createElement('input');
          input_type_4.setAttribute('type','number');
          input_type_4.setAttribute('id',friend_member_e_s + m);
          input_type_4.setAttribute('size','12');
          mat_tr_td[i][7].appendChild(input_type_4);
  
          mat_tr_td[i][8] = document.createElement('td');
          mat_tr_td[i][8].setAttribute('id',prefix_diff_e + n);
  
          mat_tr_td[i][9] = document.createElement('td');
          mat_tr_td[i][9].setAttribute('id',prefix_action_e + n);
  
          input_type_5 = document.createElement('input');
          input_type_5.setAttribute('type','number');
          input_type_5.setAttribute('id',friend_member_t_e + m);
          input_type_5.setAttribute('size','12');
  
          mat_tr_td[i][10] = document.createElement('td');
          mat_tr_td[i][10].appendChild(input_type_5);
         // mat_tr_td[i][8].appendChild(input_type_5);
  
  //        mat_tr_td[i][9] = document.createElement('td');
  //        mat_tr_td[i][9].setAttribute('id',prefix_diff + n);
  //        mat_tr_td[i][10] = document.createElement('td');
          mat_tr_td[i][11] = document.createElement('td');
  
          input_type_6 = document.createElement('input');
          input_type_6.setAttribute('type','number');
          input_type_6.setAttribute('id',friend_member_t_s + m);
          input_type_6.setAttribute('size','12');
          mat_tr_td[i][11].appendChild(input_type_6);
  
          mat_tr_td[i][12] = document.createElement('td');
          mat_tr_td[i][12].setAttribute('id',prefix_diff_t + n );
          mat_tr_td[i][13] = document.createElement('td');
          mat_tr_td[i][13].setAttribute('id',prefix_action_t + n);
          


/*          let total_tr = document.createElement('tr');
          let total = document.createElement('td');
          let text_node = document.createTextNode('Total');
          let diff_1 = document.createElement('td');
          let action_1 = document.createElement('td');
          let e_total_sortie = document.createElement('td');
          let diff_2 = document.createElement('td');
          let action_2 = document.createElement('td');
          let diff_3 = document.createElement('td');
          let action_3 = document.createElement('td');*/
       }

       total.appendChild(text_node);
       a_total_entree = document.createElement('td');
       a_total_entree.setAttribute('id','a_friend_total_entree');
       a_total_sortie = document.createElement('td');
       a_total_sortie.setAttribute('id','a_friend_total_sortie');
       diff_1.setAttribute('id','fr_diff_1');
       action_1.setAttribute('id','fr_action_1');
       e_total_entree = document.createElement('td');
       e_total_entree.setAttribute('id','e_friend_total_entree');
       e_total_sortie.setAttribute('id','e_friend_total_sortie');
       diff_2.setAttribute('id','fr_diff_2');
       action_2.setAttribute('id','fr_action_2');
       t_total_entree = document.createElement('td');
       t_total_entree.setAttribute('id','t_friend_total_entree');
       t_total_sortie = document.createElement('td');
       t_total_sortie.setAttribute('id','t_friend_total_sortie');
       diff_3.setAttribute('id','fr_diff_3');
       action_3.setAttribute('id','fr_action_3');
   
       total_tr.appendChild(total);
       total_tr.appendChild(a_total_entree);
       total_tr.appendChild(a_total_sortie);
       total_tr.appendChild(action_1);
       total_tr.appendChild(diff_1);
       total_tr.appendChild(e_total_entree);
       total_tr.appendChild(e_total_sortie);
       total_tr.appendChild(diff_2);
       total_tr.appendChild(action_2);
       total_tr.appendChild(t_total_entree);
       total_tr.appendChild(t_total_sortie);
       total_tr.appendChild(diff_3);
       total_tr.appendChild(action_3);


       for(let k = 0; k < th_first_element.length; k++)
        tr_first_element.appendChild(th_first_element[k]);

      tr_second_row = document.createElement('tr');

      for(let j = 0; j < td_first_element.length; j++){
        tr_second_row.appendChild(td_first_element[j]);
      }

      for(let i = 0 ; i < splitted_value_friend.length; i++){
          let k = 0;
          for(let j = 1; j <= MAX_COL+1 ; j++){
            mat_tr_td[i][k].appendChild(mat_tr_td[i][j]);
          }
      }

      table_elt.appendChild(tr_first_element);
      table_elt.appendChild(tr_second_row);

      for(let i = 0; i < splitted_value_friend.length; i++){
        let k = 0;
        table_elt.appendChild(mat_tr_td[i][k]);
      }

        table_elt.appendChild(total_tr);

          document.getElementById('friends_fill').appendChild(table_elt);  
        
          button_elt = document.createElement('input');
          button_elt.setAttribute('type','button');    
          button_elt.setAttribute('value','Calculate');
          button_elt.setAttribute('onclick','friends_elts()');
          document.getElementById('friends_fill').appendChild(button_elt);
          
          button_elt2 = document.createElement('input');
          button_elt2.setAttribute('type', 'button');
          button_elt2.setAttribute('value', 'Random');
          button_elt2.setAttribute('class','random');
          button_elt2.setAttribute('onclick','friends_generate()');
          document.getElementById('friends_fill').appendChild(button_elt2);

      }
    }




// next phase

//we take into consideration the id of the div(question) . For a specific element id, check the tag name attribute, verify for the attribute
// the value of the radio tag(selected one) and adjust the table based on it(just a simple push inside a table)