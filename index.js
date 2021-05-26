let UI=(function () {

  let selectors={
    prvaStrana:'.prva-strana',
    drugaStrana:'.druga-strana',
    trecaStrana:'.treca-strana',
    gornjiElementi:'.one',
    srednjiElementi:'.two',
    izmedu:'.izmedu',
    donjiElementi:'.three',
    drugaStranaPrviElement:'.four',
    drugaStranaDrugiElement:'.five',
    slika:'.slika',
    uno:'.uno',
    results:'.results',
    sakri:'.sakri'
  }

  let pokusaj=0;
  //Array na prvoj strani
  let gornjiElementiArray=[];
  let srednjiElementiArray=[];
  let donjiElementiArray=[];
  let izmeduArray=[];

  //Array na drugoj strani
  let drugaStranaPrviArray=[];
  let drugaStranaDrugiArray=[];

  let naziviArray=['Ime:','Prezime:','Email:','Broj mobitela:','Godina rođenja:','Planirani završetak studija:','Trenutno razina studija:','Razlog prijave:',
  'Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:','Motivacija:'];
  let brojArray;

  return{
    donji:function () {
      return selectors.donjiElementi;
    },
    izmedu:function () {
      return selectors.izmedu;
    },
    gornji:function () {
      return selectors.gornjiElementi;
    },
    drugaStranaPrvi:function(){
      return selectors.drugaStranaPrviElement;
    },
    firstState:function () {
      let prvaStrana=document.querySelector(selectors.prvaStrana);
      prvaStrana.style.display="block";

      let drugaStrana=document.querySelector(selectors.drugaStrana);
      drugaStrana.style.display="none";

      let trecaStrana=document.querySelector(selectors.trecaStrana);
      trecaStrana.style.display="none";

      let slika=document.querySelector(selectors.uno);
      slika.style.display="block";
    },
    secondState:function () {
      let prvaStrana=document.querySelector(selectors.prvaStrana);
      prvaStrana.style.display="none";

      let trecaStrana=document.querySelector(selectors.trecaStrana);
      trecaStrana.style.display="none";

      let drugaStrana=document.querySelector(selectors.drugaStrana);
      drugaStrana.style.display="block";
    },
    thirdState:function () {
      let prvaStrana=document.querySelector(selectors.prvaStrana);
      prvaStrana.style.display="none";

      let trecaStrana=document.querySelector(selectors.trecaStrana);
      trecaStrana.style.display="block";

      let drugaStrana=document.querySelector(selectors.drugaStrana);
      drugaStrana.style.display="none";

      let slika=document.querySelector(selectors.uno);
      slika.style.display="none";
    },
    gornjiElementi:function () {
      let elementi=document.querySelectorAll(selectors.gornjiElementi);
      elementi.forEach((item) => {
        if(item.value!==""){
          gornjiElementiArray.push(item.value);
        }
      });
      return gornjiElementiArray;
    },
    srednjiElementi:function () {
      let elementi=document.querySelectorAll(selectors.srednjiElementi);
      elementi.forEach((item) => {
        srednjiElementiArray.push(item.innerHTML);
      });
      return srednjiElementiArray;
    },
    donjiElementi:function () {
      let elementi=document.querySelectorAll(selectors.donjiElementi);
      elementi.forEach((item) => {
        if(item.checked){
          donjiElementiArray.push(item.value);
        }
      });
      return donjiElementiArray;
    },
    izmeduElementi:function () {
      let elementi=document.querySelectorAll(selectors.izmedu);
      elementi.forEach((item) => {
        if(item.checked){
          izmeduArray.push(item.value);
        }
      });
      return izmeduArray;
    },
    obrisiGornjeElemente:function () {
      gornjiElementiArray=[];
      return gornjiElementiArray;
    },
    obrisiSrednjeElemente:function () {
      srednjiElementiArray=[];
      return srednjiElementiArray;
    },
    obrisiDonjeElemente:function () {
      donjiElementiArray=[];
      return donjiElementiArray;
    },
    obrisiIzmeduElemente:function () {
      izmeduArray=[];
      return izmeduArray;
    },
    obrisiPrviNaDrugoj:function () {
      drugaStranaPrviArray=[];
      return drugaStranaPrviArray;
    },
    obrisiDrugiNaDrugoj:function () {
      drugaStranaDrugiArray=[];
      return drugaStranaDrugiArray;
    },
    noviAtribut:function (check) {
      check.setAttribute('checked',true);
    },
    makniAtribut:function (check) {
      check.removeAttribute('checked',false);
    },
    drugaStranaPrviElement:function () {
      let textarea=document.querySelector(selectors.drugaStranaPrviElement);
      drugaStranaPrviArray.push(textarea.value);
      return drugaStranaPrviArray;
    },
    drugaStranaDrugiElement:function () {
      let elementi=document.querySelectorAll(selectors.drugaStranaDrugiElement);
      elementi.forEach((item) => {
        if (item.checked) {
          drugaStranaDrugiArray.push(item.value);
        }
      });
      return drugaStranaDrugiArray;
    },
    provjeri:function (item) {
      return item=="";
    },
    prikaziObrub:function () {
      let okvir=document.querySelectorAll(selectors.izmedu);
      return okvir;
    },
    prikaziGornjiObrub:function () {
      let okvir=document.querySelectorAll(selectors.gornjiElementi);
      return okvir;
    },
    prikaziDonjiObrub:function functionName() {
      let okvir=document.querySelectorAll(selectors.donjiElementi);
      return okvir;
    },
    makniObrub:function () {
      let okvir=document.querySelector(selectors.faza);
      okvir.style.border="1px solid lightgrey";
    },
    makniIzmeduObrub:function () {
      let okvir=document.querySelectorAll(selectors.izmedu);
      return okvir;
    },
    prikaziNoviObrub:function () {
      let okvir=document.querySelectorAll(selectors.drugaStranaDrugiElement);
      return okvir;
    },
    makniNoviObrub:function () {
      let okvir=document.querySelectorAll(selectors.drugaStranaDrugiElement);
      return okvir;
    },
    prikaziNajnovijiObrub:function () {
      let okvir=document.querySelectorAll(selectors.drugaStranaPrviElement);
      return okvir;
    },
    dodajElemente:function (nazivi) {
      brojArray=0;
      let ul=document.querySelector(selectors.results);
      let liOpci=document.createElement('li');
      liOpci.classList.add('list-group-item','list-group-item-dark','okvir',`${pokusaj}`);
      liOpci.setAttribute('id', `${pokusaj}`);
      liOpci.innerHTML=`Sudionik/ca: ${nazivi[0]} ${nazivi[1]} <span class="badge badge-warning badge-pill plus">+</span> <span class="badge badge-warning badge-pill minus" style="display:none;">-</span>`;
      ul.appendChild(liOpci);
      nazivi.forEach((item,index) => {
        let li=document.createElement('li');
        li.classList.add('list-group-item','list-group-item-light','sakri',`${pokusaj}`);
        li.setAttribute('id', `${pokusaj}`);
        if(item=="Prethodno iskustvo u korištenju Minitab softvera" || item=="Prethodno znanje iz Lean menadžmenta"|| item=="Završen predmet iz osnovne statistike" || item== 'Završen predmet iz napredne statistike' || item=='Prethodna radna iskustva na područjima upravljanja kvalitete ili Lean six sigma' || item=='Namjeravate nastaviti karijeru u području upravljanja kvalitetom' ||item=="Namjeravate raditi Lean six sigma projekt za diplomski/preddiplomski završni rad" || item=='Zainteresirani ste biti Lean six sigma predavač' || item=='Pronašli ste tvrtku kod koje ćete odraditi praktični dio tečaja' || item=='Ništa od navedenog'){
          li.innerHTML=`${naziviArray[7]} ${item}`;
        }else if(naziviArray[brojArray]>7){
          naziviArray[brojArray]=naziviArray[8];
        }else{
          li.innerHTML=`${naziviArray[brojArray]} ${item}`;
        }
        li.style.textAlign="left";
        li.style.display="none";
        ul.appendChild(li);
        brojArray++;
      });
      pokusaj++;
    },
    results:function () {
      return selectors.results;
    },
    sakri:function () {
      return selectors.sakri;
    },
    clearState:function () {
      window.location.reload();
    }

  }

})();



let Main=(function (UI) {

  let loadEventListeners=function () {

    document.querySelectorAll(UI.gornji()).forEach((elem) => {
      elem.addEventListener('blur',(e)=>{
        if(e.target.value==""){
          e.target.classList.add('is-invalid');
          e.target.parentElement.parentElement.style.border="1px solid red";
        }else{
          e.target.removeAttribute('class');
          e.target.classList.add('form-control','one');
          e.target.parentElement.parentElement.style.border="1px solid lightgrey";
        }

        e.preventDefault();
      })
    });


    document.querySelectorAll(UI.drugaStranaPrvi()).forEach((elem) => {
      elem.addEventListener('blur',(e)=>{
        if(e.target.value==""){
          e.target.classList.add('is-invalid');
          e.target.parentElement.parentElement.style.border="1px solid red";
        }else{
          e.target.removeAttribute('class');
          e.target.classList.add('form-control','four');
          e.target.parentElement.parentElement.style.border="1px solid lightgrey";
        }

        e.preventDefault();
      })
    });

    let i=1;
    let j=1;

    document.querySelectorAll(UI.donji()).forEach((elem) => {
      elem.addEventListener('change',(e)=>{
        if(e.target.checked){
          i++;
        }else{
          j++;
        }


        if(i==j){
          e.target.parentElement.parentElement.style.border="1px solid red";
        }else{
          e.target.parentElement.parentElement.style.border="1px solid lightgrey";
        }

        e.preventDefault();
      })
    });


    //Za izmedu grupu
    document.body.addEventListener('change',seekChange3);

    function seekChange3(e) {

      if(e.target.classList.contains('izmedu')){

        UI.noviAtribut(e.target);
        let izmeduEl=UI.makniIzmeduObrub();
        izmeduEl.forEach((item) => {
          let izmeduObrub=item.parentElement.parentElement;
          izmeduObrub.style.border="1px solid lightgrey";
        });

      }

      if(!e.target.checked){
        UI.makniAtribut(e.target);

      }


      e.preventDefault();
    }


    //Za trecu grupu
    document.body.addEventListener('change',seekChange);

    function seekChange(e) {

      if(e.target.classList.contains('three')){

        UI.noviAtribut(e.target);


      }

      if(!e.target.checked){
        UI.makniAtribut(e.target);

      }


      e.preventDefault();
    }

    //Za cetvrtu grupu
    document.body.addEventListener('change',seekChange2);

    function seekChange2(e) {

      if(e.target.classList.contains('four')){

        UI.noviAtribut(e.target);


      }

      if(!e.target.checked){
        UI.makniAtribut(e.target);

      }


      e.preventDefault();
    }

    document.body.addEventListener('change',seekChange5);

    function seekChange5(e) {

      if(e.target.classList.contains('five')){

        UI.noviAtribut(e.target);
        let noviEl=UI.makniNoviObrub();
        noviEl.forEach((item) => {
          let noviObrub=item.parentElement.parentElement;
          noviObrub.style.border="1px solid lightgrey";
        });

      }

      if(!e.target.checked){
        UI.makniAtribut(e.target);

      }


      e.preventDefault();
    }




    document.querySelector('.dalje').addEventListener('click',nextPage);

    function nextPage(e) {
      let matrica=[];
      let i;
      let elementi=document.querySelectorAll(UI.gornji());
      elementi.forEach((elem) => {
        matrica.push(elem.value);
      })

      let matrica2=[];
      let matricaDuljina=matrica.length;
      matrica.forEach((item) => {
        if(item!=""){
          matrica2.push(item)
        }
      });
      let matrica2Duljina=matrica2.length;

      let matrica3=[];
      let elementi2=document.querySelectorAll(UI.donji());
      elementi2.forEach((item) => {
        if(item.checked){
          matrica3.push(item.value);
        }
      });

      let matrica3Duljina=matrica3.length;

      let matrica4=[];
      let elementi4=document.querySelectorAll(UI.izmedu());
      elementi4.forEach((item) => {
        if(item.checked){
          matrica4.push(item.value);
        }
      });

      let matrica4Duljina=matrica4.length;


      if(matricaDuljina==6 && matrica2Duljina==6 && matrica3Duljina>0 && matrica4Duljina==1){
        UI.secondState();
        let gornji=UI.gornjiElementi();
        let izmedu=UI.izmeduElementi();
        let donji=UI.donjiElementi();
        let izmeduEl=UI.prikaziObrub();
        izmeduEl.forEach((item) => {
          let izmeduObrub=item.parentElement.parentElement;
          izmeduObrub.style.border="1px solid lightgrey";
        });
        let gornjiEl=UI.prikaziGornjiObrub();
        gornjiEl.forEach((item) => {
          let gornjiObrub=item.parentElement.parentElement;
          gornjiObrub.style.border="1px solid lightgrey";
        });
        let donjiEl=UI.prikaziDonjiObrub();
        donjiEl.forEach((item) => {
          let donjiObrub=item.parentElement.parentElement;
          donjiObrub.style.border="1px solid lightgrey";
        });
      }else if(matrica4Duljina==0 && matrica3Duljina==0){
        let izmeduEl=UI.prikaziObrub();
        izmeduEl.forEach((item) => {
          let izmeduObrub=item.parentElement.parentElement;
          izmeduObrub.style.border="1px solid red";
        });
        let gornjiEl=UI.prikaziGornjiObrub();
        gornjiEl.forEach((item) => {
          let gornjiObrub=item.parentElement.parentElement;
          gornjiObrub.style.border="1px solid red";
        });
        let donjiEl=UI.prikaziDonjiObrub();
        donjiEl.forEach((item) => {
          let donjiObrub=item.parentElement.parentElement;
          donjiObrub.style.border="1px solid red";
        });

      }
    }



    document.body.addEventListener('click',previousPage);

    function previousPage(e) {
      if(e.target.classList.contains('natrag')){
        UI.firstState();

        UI.obrisiGornjeElemente();
        UI.obrisiSrednjeElemente();
        UI.obrisiDonjeElemente();
        UI.obrisiPrviNaDrugoj();
        UI.obrisiDrugiNaDrugoj();
      }
    }



    document.body.addEventListener('click',submitResults);

    function submitResults(e) {
      if(e.target.classList.contains('podnesi')){

        let gornji=UI.gornjiElementi();


        let izmedu=UI.izmeduElementi();

        let donji=UI.donjiElementi();

        let donjiGornji=izmedu.concat(donji);

        let ukupno1=gornji.concat(donjiGornji);

        let drugaStranaPrvi=UI.drugaStranaPrvi();

        drugaStranaPrvi=document.querySelector(drugaStranaPrvi).value;


        let prviNaDrugoj=UI.drugaStranaPrviElement();
        let drugiNaDrugoj=UI.drugaStranaDrugiElement();


        let ukupno2=prviNaDrugoj.concat(drugiNaDrugoj);

        if(ukupno2.length==4){
          let mySet=new Set(ukupno1);

          let filtriranoUkupno=Array.from(mySet);

          let zajedno=filtriranoUkupno.concat(ukupno2);



          let zajednoBitno=zajedno.slice(0,zajedno.length-3);


          console.log(zajednoBitno);

          UI.thirdState();
          UI.dodajElemente(zajednoBitno);



        }else{
          let drugiNaDrugoj=UI.prikaziNoviObrub();
          drugiNaDrugoj.forEach((item) => {
            if(!item.checked){
              let novo=item.parentElement.parentElement;
              novo.style.border="1px solid red";
            }
          let prviNaDrugoj=UI.prikaziNajnovijiObrub();
          prviNaDrugoj.forEach((item) => {
              let novo=item.parentElement.parentElement;
              novo.style.border="1px solid red";
          });

          });

        }

       UI.obrisiGornjeElemente();
       UI.obrisiSrednjeElemente();
       UI.obrisiDonjeElemente();
       UI.obrisiIzmeduElemente();
       UI.obrisiPrviNaDrugoj();
       UI.obrisiDrugiNaDrugoj();

      }
    }
  }

  document.querySelector('.povratak').addEventListener('click',povratakNatrag);

  function povratakNatrag(e) {
    UI.secondState();


    e.preventDefault();
  }



  document.querySelector('.ponovi').addEventListener('click',provjeriTablicu);

  function provjeriTablicu(e) {
      UI.firstState();
      UI.clearState();

      UI.obrisiGornjeElemente();
      UI.obrisiSrednjeElemente();
      UI.obrisiDonjeElemente();
      UI.obrisiIzmeduElemente();
      UI.obrisiPrviNaDrugoj();
      UI.obrisiDrugiNaDrugoj();

    e.preventDefault();
  }

  document.querySelector('.results').addEventListener('click',provjeriDodatno);

  function provjeriDodatno(e) {

      if(e.target.classList.contains('plus')){
        e.target.style.display="none";
        let minus=e.target.nextElementSibling;
        minus.style.display="block";
        minus.style.bottom="15px";

        let prvi=e.target.parentElement;
        let elem=UI.sakri();
        let elementi=document.querySelectorAll(elem);
        elementi.forEach((item) => {
          if(item.id==prvi.id){
            item.style.display="block";
          }
        });
      }
      else if(e.target.classList.contains('minus')){
        e.target.style.display="none";
        let plus=e.target.previousElementSibling;
        plus.style.display="block";
        plus.style.bottom="15px";

        let prvi=e.target.parentElement;
        let elem=UI.sakri();
        let elementi=document.querySelectorAll(elem);
        elementi.forEach((item) => {
          if(item.id==prvi.id){
            item.style.display="none";
          }
        });
      }


    e.preventDefault();
  }


  return{
    init:function () {
      UI.firstState();

      loadEventListeners();
    }
  }
})(UI);


Main.init();
