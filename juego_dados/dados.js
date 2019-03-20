var dinero_jugador = 100;
var dinero_maquina = 100;

var veces_repetido = 0;

var combinatoria_jugador;

function tirarDado(){

    var apuesta = document.getElementById("apuesta");
    var texto = document.getElementById("texto");

    

    if(apuesta.value<dinero_jugador)
    {
        var combinatoria =0;
        /*
        *
        0. Nothing — five mismatched dice forming no sequence longer than four.
        1. Pair — two dice showing the same value.
        2. Two Pairs — two pairs of dice, each showing the same value.
        3. Three-of-a-Kind — three dice showing the same value.
        4. Five High Straight — dice showing values from 1 through 5, inclusive.
        5. Six High Straight — dice showing values from 2 through 6, inclusive.
        6. Full House — Pair of one value and Three-of-a-Kind of another.
        7. Four-of-a-Kind — four dice showing the same value.
        8. Five-of-a-Kind — all five dice showing the same value.
        * 
        * 
        */        
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var die3 = document.getElementById("die3");
        var die4 = document.getElementById("die4");
        var die5 = document.getElementById("die5");

        var status = document.getElementById("status");
        var d1 = Math.floor(Math.random()*6)+1;
        var d2 = Math.floor(Math.random()*6)+1;
        var d3 = Math.floor(Math.random()*6)+1;
        var d4 = Math.floor(Math.random()*6)+1;
        var d5 = Math.floor(Math.random()*6)+1;

        //metemos dado en el array

        var valores_dados=[d1,d2,d3,d4,d5];
        var valores_dados_copia=[d1,d2,d3,d4,d5];
        var repeticiones = [];
        //Comprobar combinatorias

        if(d1==d2 && d2==d3 && d3==d4 && d4==d5)
        {
            combinatoria_jugador = 8; //8. Five-of-a-Kind — all five dice showing the same value.
        }


        for (i=0;i<valores_dados_copia.length;i++)
        {
            veces_repetido=1; //inicialmente ya contamos el valor
            for(j=0;j<valores_dados_copia.length;j++)
            {
                if(valores_dados[i]==valores_dados_copia[j] && i!=j && valores_dados[i]!=0)
                {
                    veces_repetido++;
                    valores_dados_copia[j]=0;
                    console.log("El valor "+valores_dados_copia[i]+" esta: "+veces_repetido+ " veces repetido");
                    repeticiones[i] = veces_repetido;
                }            
                
            }
            valores_dados_copia[i]=0;
            repeticiones[i] = veces_repetido;
        }

        for (i=0;i<valores_dados.length;i++)
        {
            console.log("El valor "+valores_dados+" esta: "+veces_repetido[i]+ " veces repetido");
        }

        


       
        /*
        
        for(i=0;i<5;i++)
        {
            for(j=0;j<5;j++)
            {
                if(valores_dados[i]==valores_dados[j])
                {
                    
                }
            }
            
        }
        */



        var diceTotal = d1+d2+d3+d4+d5;
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        die3.innerHTML = d3;
        die4.innerHTML = d4;
        die5.innerHTML = d5;
    

        status.innerHTML = "Has tirado un "+diceTotal+".";
    
        if(d1 == d2 ){
            status.innerHTML = "DOBLES";
        }




    }
    else
    {
        texto.innerHTML = "La apuesta no puede ser inferior a "+ dinero_jugador;
    }
           








}