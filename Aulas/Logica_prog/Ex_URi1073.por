programa {
	funcao inicio() {
		inteiro n, numero, quadrado
		
		escreva("Qual numero final?")
		    leia(n)
		    
		    //numero par; teste; atribuição alterada de dois em dois;
		    para(numero = 2; numero <= n; numero = numero + 2 ){
		        //se fosse fazer a contagem de um em um usar essa expressão:
		        // se (numero % 2 == 0){
		        quadrado = n * numero
		        escreva(numero + "^2 =" + numero * numero + "\n" )
		        
		    }
	}
}
