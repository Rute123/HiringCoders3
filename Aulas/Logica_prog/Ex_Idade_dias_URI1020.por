programa {
	funcao inicio() {
	    inteiro idade, qtAnos, qtMeses, qtDias, sobra
	    
	    //entrada de idad
	    escreva("Digite a idade em dias:")
	    leia(idade)
	    
	    //processamento
	    qtAnos = idade /365
	    sobra = idade %365
	    qtMeses = sobra / 30
	    qtDias = sobra % 30
	    
	    //exibir as saídas
	    escreva(qtAnos + "ano(s) \n")
	    escreva(qtMeses + "mes(es) \n")
	    escreva(qtDias + "dia(s) \n")
	}
}
