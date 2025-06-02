  let test = document.getElementById('sensitive_bloc');
  let val = test.lastElementChild;
 
  if(z <= 9){
    z++;
    if(test.hasChildNodes){
      test.removeChild(val);
    }
 
    //    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    questionn[z].bloc.classList.add('showher');
    console.log(questionn[z].bloc);
    console.log("z avant de sortir du premier if " + z);
    if(z == 8){
      console.log("pour z == 8 , z vaut: " + z);
      console.log(document.getElementById('family_1').value);
      val_family = document.querySelector('input[name="*"]:checked');
      console.log(val_family);
    }
  }

  if(z == 8){
    console.log("pour z == 9 , z vaut: " + z);
    val_family = document.querySelector('input[name="family"]:checked').value;
    console.log(val_family);
  }


  if(z == 9){
  val_amis = document.querySelector('input[name="friend"]:checked').value;
  console.log("Pour z== 10 , z vaut " + z);
  console.log(val_amis);
  }

 

  if(val_family == "Oui"){
    z++;
    test = document.getElementById('sensitive_bloc');
    
    if(test.hasChildNodes){
      test.removeChild(val);
    }
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    questionn[z].bloc.classList.add('showher');
  }else if(val_amis == "Oui"){
    z++;
    console.log(z);
    test = document.getElementById('sensitive_bloc');
    
    if(test.hasChildNodes){
      test.removeChild(val);
    }
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    console.log(questionn[z].bloc);
    questionn[z].bloc.classList.add('showher');
  }




  function right_arrow(){  
  
    let test = document.getElementById('sensitive_bloc');
    let val = test.lastElementChild;
    let input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
  
    if(z <= QUESTIONS_OBG & state == false){
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
  
      l++;
      for(let i = 0; i < input.length; i++){
        if(input[i].checked){
          table_rep_questions[l]= input[i].value;
        //  console.log(input[i].value);
        //  console.log(table_rep_questions);
        }
      }
      z++;
      console.log(z);
      if(z==9){
        document.getElementById('sensitive_bloc').innerHTML = "";
        console.log("valeur de z avant  append " + z );
        document.getElementById('sensitive_bloc').appendChild(questionn[9].bloc);
        console.log(document.getElementById('sensitive_bloc'));
        input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
        console.log(input);
        l++;
        for(let i = 0; i < input.length; i++){
          if(input[i].checked){
            table_rep_questions[l]= input[i].value;
            console.log(input[i].value);
            console.log(table_rep_questions);
           }
        }  
      }    
  
    }
  
    console.log(table_rep_questions);
    if(z < 12){
  
      if(table_rep_questions[8] == "Oui"){
        state = true;
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
        z++;
      }else if(table_rep_questions[8] == "Non"){
        z++;
        state = true;
      }
  
      if(table_rep_questions[9] == "Oui"){
        z++;
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
      }
    }
    if(z==12 && final_state == false){
      create_button();
      final_state = true;
    }
  }


  function right_arrow(){  
  
    let test = document.getElementById('sensitive_bloc');
    input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
  
    if(z != 0){
      if(z <= QUESTIONS_OBG & state == false){
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
        input =document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
        console.log("inside " + input.length);
  
      }
    }
        l++;
        for(let i = 0; i < input.length; i++){
          if(input[i].checked){
            table_rep_questions[l]= input[i].value;
            console.log(input[i].value);
            console.log(table_rep_questions);
          }
        }
        z++;
     
    
    if(z == 0 && cur_state == false){
      z = 1;
      cur_state = true;
      console.log("inside golden state nigga ");
      console.log(input[i].value);
    }
  
  
    if(z < 12){
  
      if(table_rep_questions[8] == "Oui"){
        state = true;
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
        z++;
      }else if(table_rep_questions[8] == "Non"){
        z++;
        state = true;
      }
  
      if(table_rep_questions[9] == "Oui"){
        z++;
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
      }
    }
    if(z==12 && final_state == false){
      create_button();
      final_state = true;
    }
  }

  

  function right_arrow(){  
  
    let test = document.getElementById('sensitive_bloc');
    input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
    
    if(z <= QUESTIONS_OBG & state == false){
      l++;
      for(let i = 0; i < input.length; i++){
        if(input[i].checked){
          table_rep_questions[l]= input[i].value;
          console.log(input[i].value);
          console.log(table_rep_questions);
        }
      }
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      z++;
      console.log("z vaut ici " + z);
  }
    if(z <= 10){
      console.log("dans if z 12 z vaut " + z);
      if(z==10){
        z--;
        console.log('z decremente!!!' + z);
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
        console.log(document.getElementById('sensitive_bloc'));
        input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
        if(input[0].checked)
          table_rep_questions[9] == input[0].value;
        else if(input[1].checked)
          table_rep_questions[9] == input[1].value;
        console.log(table_rep_questions);    
      }
      if( z== 8 && table_rep_questions[8] == "Oui" &&  counter == 0){
        counter = 1;
        console.log("z vaut " + z + " et j'etais la!");
        console.log(document.getElementById('sensitive_bloc'));
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
        z++;
      }else if( z == 8 && table_rep_questions[8] == "Non" &&  counter == 0){
        z++;
        console.log("On a dit non, j<etais la!!!");
        counter = 1;
      }
  
      if(table_rep_questions[9]=="Non" && state == false){
        console.log("derniere question, nope! pas de result");
        z++;
        console.log(z);
        state = true;
      }
  
      if(table_rep_questions[9] == "Oui" && state == false){
        z = 11;
        state =true;
      }    
    }
  
    if(z >= 10 && z <= QUESTIONS && state == true && counter ==1){
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
      z = 11 ;
    }
  
    if(z==12 && final_state == false){
      create_button();
      final_state = true;
    }
  }



  function right_arrow(){  
  
    let test = document.getElementById('sensitive_bloc');
    input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
    
    if(z <= QUESTIONS_OBG & state == false){
      l++;
      for(let i = 0; i < input.length; i++){
        if(input[i].checked){
          table_rep_questions[l]= input[i].value;
          console.log(input[i].value);
          console.log(table_rep_questions);
        }
      }
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      z++;
      console.log("z vaut ici " + z);
   
  }
    if(z <= 10){
      console.log("dans if z 12 z vaut " + z);
      if(z== 10 && state == true)
        z=11;
  
      if(z==10){
        z--;
        console.log('z decremente!!!' + z);
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
        console.log(document.getElementById('sensitive_bloc'));
        input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
        if(input[0].checked)
          table_rep_questions[9] == input[0].value;
        else if(input[1].checked)
          table_rep_questions[9] == input[1].value;
        console.log(table_rep_questions);    
      }
      if( z== 8 && table_rep_questions[8] == "Oui" &&  counter == 0){
        counter = 1;
        console.log("z vaut " + z + " et j'etais la!");
        console.log(document.getElementById('sensitive_bloc'));
        document.getElementById('sensitive_bloc').innerHTML = "";
        document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc); 
        z++;
      }else if( z == 8 && table_rep_questions[8] == "Non" &&  counter == 0){
        z++;
        console.log("On a dit non, j<etais la!!!");
        counter = 1;
      }
  
      if(table_rep_questions[9]=="Non" && state == false){
        console.log("derniere question, nope! pas de result");
        z++;
        console.log(z);
        state = true;
      }
  
      if(table_rep_questions[9] == "Oui" && state == false){
        z = 11;
        state =true;
      }    
    }
  
    if(z == 11){
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z-1].bloc);
      z++;
    }else if(z>=11){
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z-1].bloc);
      z++;
  
    }
  
  
  
    if(z==12 && final_state == false){
      create_button();
      final_state = true;
    }
  }


  function right_arrow(){  
  
    let test = document.getElementById('sensitive_bloc');
    input = document.getElementById('sensitive_bloc').lastElementChild.lastElementChild.getElementsByTagName('input');
    
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
      boolean_1 = true;
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
      boolean_2 = true;
    }else if(z == 10 && table_rep_questions[8] == "Oui" && table_rep_questions[9] == "Oui"){
      if (final_questions< 12){
      z++;
      console.log("test3");
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[final_questions].bloc);
      final_questions++;
      }
      boolean_3 = true;
  
      if(final_questions == 12){
        document.getElementById('friends_members').addEventListener('focusout',function(){
          create_button();
          button.setAttribute('onclick','generate_informations_case4()');  
        });
      }
    }
  
  }



  function left_arrow(){
    if(z>0){
  
      if(z == 10 && boolean_1 == true){
        z--;
      }else if(z == 10 && boolean_2 == true){
        z--;
      }else if(z == 10 && boolean_3 == true){
        if(final_counter){
          z = 10;
          final_counter = false;
        }else{
          z--;
        }
  
      }else if(z == 10)
        z-=2;
      else
        z--;
  
      l--;
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      console.log(document.getElementById('sensitive_bloc'));
    }
  }
  
  
  function left_arrow(){
    if(z>0){
  
      if(z == 10 && boolean_1 == true){
        z--;
      }else if(z == 10 && boolean_2 == true){
        z--;
      }else if(z == 10 && boolean_3 == true){
        
      }else if(z == 10)
        z-=2;
      else
        z--;
  
      l--;
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      console.log(document.getElementById('sensitive_bloc'));
    }
  }
  
  


  if(z>0){

    if(z == 10 && boolean_1 == true){
      z--;
      console.log("Bollean1")
    }else if(z == 10 && boolean_2 == true){
      z--;
      console.log("Booleen2");
    }else if(z == 10 && boolean_3 == true){
     
    }else if(z == 10){
      if(boolean_3 == true){
        z--;
      }
    }

    if(z!= 10)
      z--;
     
    l--;
    document.getElementById('sensitive_bloc').innerHTML = "";
    document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
    console.log(document.getElementById('sensitive_bloc'));
  }





  function left_arrow(){
    if(z>0){
  
      if(z == 10 && boolean_1 == true){
        z--;
      }else if(z == 10 && boolean_2 == true){
        z--;
      }else if(z == 10 && boolean_3 == true){
        
      }else if(z == 10)
        z-=2;
      else{
        z--;
        console.log("Hey yo");
      }
      l--;
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      console.log(document.getElementById('sensitive_bloc'));
      if(z == 10 && boolean_3 == true)
        z--;
    }
    console.log(z + "vaut ");
  }
  

  function left_arrow(){
    if(z>0){
  
      if(z == 10 && boolean_1 == true){
        z--;
      }else if(z == 10 && boolean_2 == true){
        z--;
      }else if(z == 10 && boolean_3 == true){
        boolean_3 = false;
      }else{   
          z--;
      }
      l--;
      document.getElementById('sensitive_bloc').innerHTML = "";
      document.getElementById('sensitive_bloc').appendChild(questionn[z].bloc);
      console.log(document.getElementById('sensitive_bloc'));
    }
    console.log(z + "vaut ");
  }
  



  function fill(){
    let th_first_row = [];
    let td_second_row = [];
    let a_entree = "a_entree_";
    let e_entree = "e_entree_";
    let s_entree = "s_entree_";
    let a_diff = "a_diff_";
    let a_action = "a_action_";
    let e_diff = "e_diff_";
    let e_action = "e_action_";
    let t_diff = "t_diff_";
    let t_action = "t_action_";
    let a_sortie = "a_sortie_";
    let e_sortie = "e_sortie_";
    let t_entree = "t_entree_";
    let t_sortie = "t_sortie_";
    integrate();
    let tab_elts = fill_bloc_1();
    let ligne = 9;
    let colonne = 14;
    let p = colonne+1;
    let ligne_up = ligne + MAX_MAX;
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
  
    for(let i  = 0 ; i < ligne; i++){
      let k = 0;
      for(let j = 1; j < colonne ; j++){
  
        matrice[i][k] = document.createElement('tr');
        matrice[i][j] = document.createElement('th');
        matrice[i][j] = document.createTextNode(tab_elts[n]);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_1 = document.createElement('input');
        input_1.setAttribute('type','text');
        input_1.setAttribute('id',a_entree + m);
        input_1.setAttribute('size','12');
        matrice[i][j].appendChild(input_1);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_2 = document.createElement('input');
        input_2.setAttribute('type','text');
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
        input_3.setAttribute('type','text');
        input_3.setAttribute('id',e_entree + m);
        input_3.setAttribute('size','12');
        matrice[i][j].appendChild(input_3);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_4 = document.createElement('input');
        input_4.setAttribute('type','text');
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
        input_5.setAttribute('type','text');
        input_5.setAttribute('id',t_entree + m);
        input_5.setAttribute('size','12');
        matrice[i][j].appendChild(input_5);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_6 = document.createElement('input');
        input_6.setAttribute('type','text');
        input_6.setAttribute('id',t_sortie + m);
        input_6.setAttribute('size','12');
        matrice[i][j].appendChild(input_6);
        j++;
  
        matrice[i][j] = document.createElement('td');
        matrice[i][j].setAttribute('id',t_action + m);
        j++;
  
        matrice[i][j] = document.createElement('td');
        matrice[i][j].setAttribute('id',t_diff + m);
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
        k=0;
        n=0;
        for(let i = ligne; i < ligne_up+1; i++){
          matrice.push(new Array(colonne));
          for(let q = 1; q < colonne; q++){
            if(i == ligne){
              matrice[i][k] = document.createElement('tr');
              
            }else{
              matrice[i][k] = document.createElement('tr');
              matrice[i][q] = document.createElement('th');
              matrice[i][q] = document.createTextNode(business_entries[n]);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_1 = document.createElement('input');
              input_1.setAttribute('type','text');
              input_1.setAttribute('id',a_entree + m);
              input_1.setAttribute('size','12');
              matrice[i][q].appendChild(input_1);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_2 = document.createElement('input');
              input_2.setAttribute('type','text');
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
              input_3.setAttribute('type','text');
              input_3.setAttribute('id',e_entree + m);
              input_3.setAttribute('size','12');
              matrice[i][q].appendChild(input_3);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_4 = document.createElement('input');
              input_4.setAttribute('type','text');
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
              input_5.setAttribute('type','text');
              input_5.setAttribute('id',t_entree + m);
              input_5.setAttribute('size','12');
              matrice[i][q].appendChild(input_5);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_6 = document.createElement('input');
              input_6.setAttribute('type','text');
              input_6.setAttribute('id',t_sortie + m);
              input_6.setAttribute('size','12');
              matrice[i][q].appendChild(input_6);
              q++;
  
              matrice[i][q] = document.createElement('td');
              matrice[i][q].setAttribute('id',t_action + m);
              q++;
              matrice[i][q] = document.createElement('td');
              matrice[i][q].setAttribute('id',t_diff + m);
              q++;
              m++;
              n++;
            }
          }
      }
  
    let tr_first_elt_row = document.createElement('tr');
    let tr_second_elt_row = document.createElement('tr');
    let table_fill = document.createElement('table');
  
      initialize_table(th_first_row,10);
      initialize_table(td_second_row,13)
    
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
      table_fill.appendChild(tr_second_elt_row);;
      //Remplissage table avec les tr
      for(let i = 0; i < ligne_up+1; i++){
        let k = 0;
        for(let j = 1; j < colonne-1; j++){
          if(i == ligne){
            matrice[i][k].appendChild(special_banner);
          }else
            matrice[i][k].appendChild(matrice[i][j]);
        }
      }
  
      console.log("Affichage")
      //telechargement des tr dans la table
      for(let i = 0 ; i < ligne_up+1; i++)
        table_fill.appendChild(matrice[i][0]);
     
      document.getElementById('table_section').appendChild(table_fill);
  
    for(let i = 0 ; i <23; i++){
      for(let j = 0; j < colonne; j++){
        console.log(matrice[i][j]);
      }
    }
   }
  }


  //version fonctionnelle avec special banner
  function fill(){
    let th_first_row = [];
    let td_second_row = [];
    let a_entree = "a_entree_";
    let e_entree = "e_entree_";
    let s_entree = "s_entree_";
    let a_diff = "a_diff_";
    let a_action = "a_action_";
    let e_diff = "e_diff_";
    let e_action = "e_action_";
    let t_diff = "t_diff_";
    let t_action = "t_action_";
    let a_sortie = "a_sortie_";
    let e_sortie = "e_sortie_";
    let t_entree = "t_entree_";
    let t_sortie = "t_sortie_";
    integrate();
    let tab_elts = fill_bloc_1();
    let ligne = 9;
    let colonne = 14;
    let p = colonne+1;
    let ligne_up = ligne + MAX_MAX;
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
  
    for(let i  = 0 ; i < ligne; i++){
      let k = 0;
      for(let j = 1; j < colonne ; j++){
  
        matrice[i][k] = document.createElement('tr');
        matrice[i][j] = document.createElement('th');
        matrice[i][j] = document.createTextNode(tab_elts[n]);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_1 = document.createElement('input');
        input_1.setAttribute('type','text');
        input_1.setAttribute('id',a_entree + m);
        input_1.setAttribute('size','12');
        matrice[i][j].appendChild(input_1);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_2 = document.createElement('input');
        input_2.setAttribute('type','text');
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
        input_3.setAttribute('type','text');
        input_3.setAttribute('id',e_entree + m);
        input_3.setAttribute('size','12');
        matrice[i][j].appendChild(input_3);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_4 = document.createElement('input');
        input_4.setAttribute('type','text');
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
        input_5.setAttribute('type','text');
        input_5.setAttribute('id',t_entree + m);
        input_5.setAttribute('size','12');
        matrice[i][j].appendChild(input_5);
        j++;
  
        matrice[i][j] = document.createElement('td');
        input_6 = document.createElement('input');
        input_6.setAttribute('type','text');
        input_6.setAttribute('id',t_sortie + m);
        input_6.setAttribute('size','12');
        matrice[i][j].appendChild(input_6);
        j++;
  
        matrice[i][j] = document.createElement('td');
        matrice[i][j].setAttribute('id',t_action + m);
        j++;
  
        matrice[i][j] = document.createElement('td');
        matrice[i][j].setAttribute('id',t_diff + m);
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
        k=0;
        n=0;
        for(let i = ligne; i < ligne_up+1; i++){
          matrice.push(new Array(colonne));
          for(let q = 1; q < colonne; q++){
            if(i == ligne){
              matrice[i][k] = document.createElement('tr');
              
            }else{
              matrice[i][k] = document.createElement('tr');
              matrice[i][q] = document.createElement('th');
              matrice[i][q] = document.createTextNode(business_entries[n]);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_1 = document.createElement('input');
              input_1.setAttribute('type','text');
              input_1.setAttribute('id',a_entree + m);
              input_1.setAttribute('size','12');
              matrice[i][q].appendChild(input_1);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_2 = document.createElement('input');
              input_2.setAttribute('type','text');
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
              input_3.setAttribute('type','text');
              input_3.setAttribute('id',e_entree + m);
              input_3.setAttribute('size','12');
              matrice[i][q].appendChild(input_3);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_4 = document.createElement('input');
              input_4.setAttribute('type','text');
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
              input_5.setAttribute('type','text');
              input_5.setAttribute('id',t_entree + m);
              input_5.setAttribute('size','12');
              matrice[i][q].appendChild(input_5);
              q++;
  
              matrice[i][q] = document.createElement('td');
              input_6 = document.createElement('input');
              input_6.setAttribute('type','text');
              input_6.setAttribute('id',t_sortie + m);
              input_6.setAttribute('size','12');
              matrice[i][q].appendChild(input_6);
              q++;
  
              matrice[i][q] = document.createElement('td');
              matrice[i][q].setAttribute('id',t_action + m);
              q++;
              matrice[i][q] = document.createElement('td');
              matrice[i][q].setAttribute('id',t_diff + m);
              q++;
              m++;
              n++;
            }
          }
      }
  
    let tr_first_elt_row = document.createElement('tr');
    let tr_second_elt_row = document.createElement('tr');
    let table_fill = document.createElement('table');
  
      initialize_table(th_first_row,10);
      initialize_table(td_second_row,13)
    
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
      table_fill.appendChild(tr_second_elt_row);;
      //Remplissage table avec les tr
      for(let i = 0; i < ligne_up+1; i++){
        let k = 0;
        for(let j = 1; j < colonne-1; j++){
          if(i == ligne){
            matrice[i][k].appendChild(special_banner);
          }else
            matrice[i][k].appendChild(matrice[i][j]);
        }
      }
  
  
  
  
      //telechargement des tr dans la table
      for(let i = 0 ; i < ligne_up; i++)
        table_fill.appendChild(matrice[i][0]);
     
      document.getElementById('table_section').appendChild(table_fill);
  
    for(let i = 0 ; i <22; i++){
      for(let j = 0; j < colonne; j++){
        console.log(matrice[i][j]);
      }
    }
   }
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
    let a_f_t_entree = [];
    let a_f_t_sortie = [];
  
    family_member_e_e = "family_member_e_e_";
    family_member_e_s = "family_member_e_s_";
    
    e_entree = [];
    e_sortie = [];
  
    
    let family_e_entree = [];
    let family_e_sortie = [];
    let family_e_diff = [];
    let e_family_total_entree = "e_family_total_entree";
    let e_family_total_sortie = "e_family_total_sortie";
    let e_f_t_entree = [];
    let e_f_t_sortie = [];
  
  
    family_member_t_e = "family_member_e_e_",
    family_member_t_s = "family_member_e_s_",
    
  
    t_entree = [];
    t_sortie = [];
   
    let family_t_entree = [];
    let family_t_sortie = [];
    let family_t_diff = [];
    let t_family_total_entree = "t_family_total_entree";
    let t_family_total_sortie = "t_family_total_sortie";
    let t_f_t_entree = [];
    let t_f_t_sortie = [];
  
    let t_family_diff = "t_family_diff_";
    let t_family_action = "t_family_action_";
  
    let family_action_a = "f_action_1";
    let family_action_e = "f_action_2";
    let family_action_t = "f_action_3";
  
    let char_entree_a;
    let char_sortie_a;
    let char_action_a;
    let char_entree_e;
    let char_sortie_e;
    let char_action_e;
    let char_entree_t;
    let char_sortie_t;
    let char_action_t;
  
  
  
    let m = 1;
  
    for(let i = 0; i < splitted_value_family.length; i++){
  
       char_entree_a = family_member_a_e + (i+1);
       char_sortie_a = family_member_a_s + (i+1);
       char_action_a = family_action_a;
  
      // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
      a_entree.push(document.getElementById(char_entree_a).value);
      a_sortie.push(document.getElementById(char_sortie_a).value);
     // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
  
      family_a_diff.push(a_entree[i] - a_sortie[i]);
      a_f_t_entree += a_entree[i];
      a_f_t_sortie += a_sortie[i];
  
      document.getElementById(a_family_total_entree).innerHTML = a_f_t_entree;
      document.getElementById(a_family_total_sortie).innerHTML = a_f_t_sortie;
      diff_1 = a_total_entree - a_total_sortie;
          
      char_entree_e = family_member_e_e + (i+1);
      char_sortie_e = family_member_e_s + (i+1);
      char_action_e = family_action_e + (i+1);
  
      if(family_a_diff[i]  == 0){
        document.getElementById(char_action_a).innerHTML = "Nul- augmenter les entrees";
    }else if(family_a_diff[i] > 0){
        document.getElementById(char_action_a).innerHTML = "Aucune";
    }else{
        let adjust = 0 - family_a_diff[i];
        document.getElementById(char_action_a).innerHTML = "besoin de  +" + adjust;
    }
  
    a_entree = [];
    a_sortie = [];
  
       e_entree.push(document.getElementById(char_entree_e).value);
       e_sortie.push(document.getElementById(char_sortie_e).value);
      // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
       family_e_diff.push(e_entree[i] - e_sortie[i]);
       e_f_t_entree += e_entree[i];
       e_f_t_sortie += e_sortie[i];
  
       document.getElementById("f_e_total_entree").innerHTML = e_f_t_entree;
       document.getElementById("f_e_total_sortie").innerHTML = e_f_t_sortie;
       diff_2 = e_total_entree - e_total_sortie;
   
       
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
       char_action_t = family_action_t;
  
      // Diff et action sont de grosse salopes . Elles savent pas compter (incrementer les valeurs de diff et action)
      t_entree.push(document.getElementById(char_entree_t).value);
      t_sortie.push(document.getElementById(char_sortie_t).value);
     // document.getElementById(char_entree).value = Math.ceil(Math.random()*100);
  
      family_t_diff.push(t_entree[i] - t_sortie[i]);
      t_f_t_entree += t_entree[i];
      t_f_t_sortie += t_sortie[i];
  
      document.getElementById("f_t_total_entree").innerHTML = t_f_t_entree;
      document.getElementById("f_t_total_sortie").innerHTML = t_f_t_sortie;
      diff_3 = t_total_entree - t_total_sortie;
    
      if(family_t_diff[i]  == 0){
        document.getElementById(char_action_t).innerHTML = "Nul- augmenter les entrees";
    }else if(family_t_diff[i] > 0){
        document.getElementById(char_action_t).innerHTML = "Aucune";
    }else{
        let adjust = 0 - family_t_diff[i];
        document.getElementById(char_action_t).innerHTML = "besoin de  +" + adjust;
    }
  
  
  }
  
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
  

  

  function to_filter(){

    for(let i = 0 ; i < table_quest.length; i++){
      if(table_rep_questions[i] == "Oui" && table_quest[i] != "Business"){
        table_of_elements.push(table_quest[i]);
      }else if(i == 2){
        table_of_elements.push(table_rep_questions[i]);
      }else if(table_quest[i] == "Business"){
        continue;
      }
    }
  }



  function friends_validate(){
    if(print_once_friend == false){
      print_once_friend = true;
      if(elt2 == "")
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
            n++;
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
            n++;
    
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
  
  
  
            let total_tr = document.createElement('tr');
            let total = document.createElement('td');
            let text_node = document.createTextNode('Total');
            total.appendChild(text_node); 
            a_total_entree = document.createElement('td');
            a_total_entree.setAttribute('id','a_friend_total_entree');
            a_total_sortie = document.createElement('td');
            a_total_sortie.setAttribute('id','a_friend_total_sortie');
            let diff_1 = document.createElement('td');
            diff_1.setAttribute('id','fr_diff_1');
            let action_1 = document.createElement('td');
            action_1.setAttribute('id','fr_action_1');
            e_total_entree = document.createElement('td');
            e_total_entree.setAttribute('id','e_friend_total_entree');
            let e_total_sortie = document.createElement('td');
            e_total_sortie.setAttribute('id','e_friend_total_sortie');
            let diff_2 = document.createElement('td');
            diff_2.setAttribute('id','fr_diff_2');
            let action_2 = document.createElement('td');
            action_2.setAttribute('id','fr_action_2');
            t_total_entree = document.createElement('td');
            t_total_entree.setAttribute('id','t_friend_total_entree');
            t_total_sortie = document.createElement('td');
            t_total_sortie.setAttribute('id','t_friend_total_sortie');
            let diff_3 = document.createElement('td');
            diff_3.setAttribute('id','fr_diff_3');
            let action_3 = document.createElement('td');
            action_3.setAttribute('id','fr_action_3');
        
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
  
         }
  
            table_elt.appendChild(total_tr);
            document.getElementById('friends_validate').appendChild(table_elt);  
          
            button_elt = document.createElement('input');
  
            button_elt.setAttribute('type','button');    
            button_elt.setAttribute('value','Calculate');
            button_elt.setAttribute('onclick','friends_elts()');
            document.getElementById('friends_validate').appendChild(button_elt);
            
  
        }
      }
      let tableau_initial_csv_format = [];

      function from_id_to_bloc_to_csv(){
        let table_origin = new Array((tab_elts.length)+2);
        let footer = [];
    
        if(bool_for_case1 == true){
        
          table_origin[0] = header;
    
          for(let i = 1; i <= tab_elts.length ; i++){
    //          table_origin[0] = new Array(COLONNE);
              tableau_initial_csv_format = [];
              tableau_initial_csv_format.push(tab_elts[i-1]);
              for(let j = 1; j < COLONNE; j++){
                if(tableau_initial[j].substring(0,7) == "a_diff_" || tableau_initial[j].substring(0,9) == "a_action_" || tableau_initial[j].substring(0,7) == "e_diff_" || tableau_initial[j].substring(0,9) == "e_action_" || tableau_initial[j].substring(0,7) == "t_diff_" || tableau_initial[j].substring(0,9) == "t_action_"){
                  tableau_initial_csv_format.push(document.getElementById(tableau_initial[j] + parseInt(i)).textContent);
               //   alert(document.getElementById(tableau_initial[j] + parseInt(i)).textContent);
                }else{
                tableau_initial_csv_format.push(document.getElementById(tableau_initial[j] + parseInt(i)).value);
                }
              }
              table_origin[i] = tableau_initial_csv_format;
              
          }
          footer.push("Total");
          for(let j = 13; j < tableau_initial.length; j++){
            footer.push(document.getElementById(tableau_initial[j]).textContent);
          }
          table_origin[table_origin.length - 1] = footer;
        }else if(bool_for_case2 == true){
    
        }else if(bool_for_case3 == true){
    
        }else if(bool_for_case4 == true){
    
        }
    
        exportArrayToCsv(table_origin);
      } 