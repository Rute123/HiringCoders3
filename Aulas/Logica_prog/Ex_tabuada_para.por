programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("Qual tabuada?")
		    leia(num)
		    
		    //valor da tabuada; teste; atribuição alterada a cada passo;
		    para(contador = 0; contador <= 10; contador = contador + 1 ){
		        resultado = num * contador
		        escreva(num + "x" + contador + "=" + resultado + "\n" )
		        
		    }
	}
}
