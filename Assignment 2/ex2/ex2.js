  var ps = 0;
        var ns = 0;

        function count(){
            var num=document.getElementById("num");
            if( num.value !=0 ){
                if(num.value>=0)
                    ps++;
                else 
                ns++;
            }
            else if(num.value ==0){
                var resultBlock=document.getElementById("total");
                resultBlock.innerHTML="";

                var psParagraph=document.createElement("p");
                var nsParagraph=document.createElement("p");

                psParagraph.innerText="Positive Number count : "+ps; 
                nsParagraph.innerText="Negative Number count : "+ns;
                
                resultBlock.append(psParagraph);
                resultBlock.append(nsParagraph);

                ps=0;
                ns=0;
            }
            num.value='';
        }