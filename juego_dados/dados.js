var dinero_jugador = 100;
var dinero_maquina = 100;



var veces_repetido = 0;

var combinatoria_jugador=-1;

function tirarDado(){

    //var apuesta = document.getElementById("apuesta");
    var texto = document.getElementById("texto");

    var apuesta=2;

    if(apuesta<dinero_jugador)
    {
        //jugador     
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

        //maquina

        var die6 = document.getElementById("die6");
        var die7 = document.getElementById("die7");
        var die8 = document.getElementById("die8");
        var die9 = document.getElementById("die9");
        var die10 = document.getElementById("die10");

        var status2 = document.getElementById("status2");
        var d6 = Math.floor(Math.random()*6)+1;
        var d7 = Math.floor(Math.random()*6)+1;
        var d8 = Math.floor(Math.random()*6)+1;
        var d9 = Math.floor(Math.random()*6)+1;
        var d10 = Math.floor(Math.random()*6)+1;

        //Pasamos los valores a los dados html
        //Jugador
        die1.innerHTML=d1;
        die2.innerHTML=d2;
        die3.innerHTML=d3;
        die4.innerHTML=d4;
        die5.innerHTML=d5;

        //maquina
        die6.innerHTML=d6;
        die7.innerHTML=d7;
        die8.innerHTML=d8;
        die9.innerHTML=d9;
        die10.innerHTML=d10;



        /*
        *
        * En el array valores_dados_copia se mantienen los valores de la tirada de dados. Cuando se encuentra un valor repetido, este se le da el valor de cero.
        * En el array repeticiones se guardan las repeticiones de la tirada de dados.
        * Ejemplo: Sale una tirada  de dados de 2 4 5 2 5.
        * En la primera iteración se mirará cuantas veces se ha repetido el 2. Cuando encuentre que se ha repetido, ese valor pasará a ser 0 y se incremente veces_repetido.
        * Es decir : 2 4 5 0 5, veces_repetido = 2.
        * Para el 4, al no haber ningún repetido no variará el array. 2 4 5 0 5, veces_repetido = 1.
        * Para el 5, 2 4 5 0 0, veces_repetido = 2.
        * Cuando se llegue a los valores de 0, le asignamos al array de repeticiones un 0.
        * Finalmente en el array de repeticiones se guardan las veces que un número ha salido repetido, en la misma posición de la tirada de dados.
        * Array dados:          2 4 5 0 0
        * Array repeticiones:   2 1 1 0 0   
        * 
        */

        //metemos dado en el array

        //1a vuelta jugador, 2a vuelta maquina

        var valores_dados=[d1,d2,d3,d4,d5];
        var valores_dados_copia=[d1,d2,d3,d4,d5];
        var repeticiones = [];


        for(i=0;i<2;i++)
        {

            var estado=status;

            for (i=0;i<valores_dados.length;i++)
            {
                veces_repetido=1; //inicialmente ya contamos el valor
                for(j=0;j<valores_dados_copia.length;j++)
                {
                    if(valores_dados[i]==valores_dados_copia[j] && i!=j && valores_dados[i]!=0)
                    {
                        veces_repetido++;
                        valores_dados[j]=0;
                        repeticiones[i] = veces_repetido;
                    }            
                    
                }
                if(valores_dados[i]!=0)
                    repeticiones[i] = veces_repetido;
                else
                    repeticiones[i] = 0;
            }

            for (i=0;i<valores_dados.length;i++)
            {
                console.log("El valor "+valores_dados[i]+" esta: "+repeticiones[i]+ " veces repetido");
            }

            
            //Comprobar combinatorias

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

        var combinatoria =0;



            //Jugador

            diceTotal = valores_dados_copia[0]+valores_dados_copia[1]+valores_dados_copia[2]+valores_dados_copia[3]+valores_dados_copia[4];

            if(repeticiones[0]==5)
            {
                combinatoria_jugador = 8; //8. Five-of-a-Kind — all five dice showing the same value.
                estado.innerHTML = "Repoker";
            }
            else if(repeticiones[0]==4 || repeticiones[1]==4)
            {
                combinatoria_jugador = 7; //7. Four-of-a-Kind — four dice showing the same value.
                estado.innerHTML = "Poker";
            }
            else if((repeticiones[0]==2 && repeticiones[1]==3) || (repeticiones[0]==3 && repeticiones[1]==2))
            {
                combinatoria_jugador = 6; //6. Full House — Pair of one value and Three-of-a-Kind of another.
                estado.innerHTML = "Full House";
            }
            else if(diceTotal==20 )
            {
                var bandera = true;

                for (i=0;i<valores_dados_copia.length;i++)
                {
                    for(j=0;j<valores_dados_copia.length;j++)
                    {
                        if(valores_dados_copia[i]==valores_dados_copia[j])
                        {
                            bandera=false;
                        }
                    }
                }

                if(bandera==true)
                {
                    combinatoria_jugador = 5; //5. Six High Straight — dice showing values from 2 through 6, inclusive.
                    estado.innerHTML = "Escalera de 6";
                }


            }
            else if(diceTotal==15)
            {
                var bandera = true;

                for (i=0;i<valores_dados_copia.length;i++)
                {
                    for(j=0;j<valores_dados_copia.length;j++)
                    {
                        if(valores_dados_copia[i]==valores_dados_copia[j])
                        {
                            bandera=false;
                        }
                    }
                }

                if(bandera==true)
                {
                    combinatoria_jugador = 4; //4. Five High Straight — dice showing values from 1 through 5, inclusive.
                    estado.innerHTML = "Escalera";
                }


            }
            else if(repeticiones [0]==3 || repeticiones [1]==3 || repeticiones [2]==3 || repeticiones [3]==3 || repeticiones [4]==3)
            {

                combinatoria_jugador = 3; //3. Three-of-a-Kind — three dice showing the same value.
                estado.innerHTML = "Tercia";
            }
            else if(repeticiones [0]==2 || repeticiones [1]==2 || repeticiones [2]==2 || repeticiones [3]==2 || repeticiones [4]==2)
            {
                var parejas=0;
                for(i=0;i<repeticiones.length;i++)
                {
                    if(repeticiones[i]==2)
                        parejas++;
                }
                if(parejas==2)
                {
                    combinatoria_jugador = 2; //2. Two Pairs — two pairs of dice, each showing the same value.
                    estado.innerHTML = "Doble pareja";
                }
                else
                {
                    combinatoria_jugador = 1; //1. Pair — two dice showing the same value.
                    estado.innerHTML = "Pareja";
                }
            }
            else
            {

                combinatoria_jugador = 0; //0. Nothing — five mismatched dice forming no sequence longer than four.
                estado.innerHTML = "Nada";
            }
            


            for (i=0;i<valores_dados.length;i++)
            {
                console.log(repeticiones[i]+ " veces repetido");
            }


            //reemplazamos los dados del jugador por los de la maquina para hacer la 2a vuelta

            var valores_dados=[d6,d7,d8,d9,d10];
            var valores_dados_copia=[d6,d7,d8,d9,d10];
     
            estado = status2;


        }
        




    }
    else
    {
        texto.innerHTML = "La apuesta no puede ser inferior a "+ dinero_jugador;
    }
           








}