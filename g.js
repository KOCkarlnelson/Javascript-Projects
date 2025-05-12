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
    