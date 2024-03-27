function insert(num){
    var myString = document.form.textview.value;
    var lastChar=myString[myString.length-1];
       if(myString.length <30){ if(!isNaN(lastChar) || lastChar==null || !isNaN(num)){            document.form.textview.value=myString +num;
              }
    else if(num!=lastChar){              document.form.textview.value=myString.replace(lastChar,num); }}}     
            
    function equal(){
    var sum=document.form.textview.value;
       if(sum){           document.form.textview.value=eval(sum); }
        }
     
     function power(){
      /*   num=document.form.textview.value;
         num=Math.pow(num,y);
         document.form.textview.value=num;*/
         document.form.textview.value=Math.pow(document.form.textview.value,2);
     }
     
     function power2(){
      /*   num=document.form.textview.value;
         num=Math.pow(num,y);
         document.form.textview.value=num;*/
         document.form.textview.value=Math.pow(document.form.textview.value,3);
     }
        
     function sq(){
    document.form.textview.value=Math.sqrt(document.form.textview.value);
     }
     function cosine(){
         document.form.textview.value=Math.cos(document.form.textview.value );  
     } 
     function sine(){
         document.form.textview.value=Math.sin(document.form.textview.value);
     }
     
     function tg(){
         document.form.textview.value=Math.tan(document.form.textview.value);
     }
     function funLog() 
     {
     document.form.textview.value=Math.log(document.form.textview.value); 
     }
     
    function clean(){ document.form.textview.value=' ';} 
     
         
    function back(){
    var exp=document.form.textview.value;    document.form.textview.value=exp.substring(0,exp.length -1);}
    