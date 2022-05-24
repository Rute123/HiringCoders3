programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("Qual tabuada?")
		    leia(num)
		    
		    contador = 0
		    
		    enquanto(contador <= 10){
		        resultado = num * contador
		        escreva(num + "x" + contador + "=" + resultado + "\n" )
		        //Sem a linha 14 se torna um loop infinito pois não atribui novos valores
		        contador = contador + 1
		    }
	}
}
