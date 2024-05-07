export class Tarefa {
    _id : string | undefined ;
    descricao: string;
    statusRealizada: boolean;

    constructor(_descricao: string, _statusRealizada: boolean) {
        this.descricao = _descricao;
        this.statusRealizada = _statusRealizada;
    }
}

/*
 3:

Perceba que o código acima define uma classe chamada de "Tarefa". Essa classe possui
dois atributos: Um chamado de "descricao" do tipo "string" e outro chamado de
"statusRealizada" do tipo boolean.
Adicionalmente a classe define um "método construtor" que recebe uma "descrição" e
um "status" como parâmetros. Dentro do corpo desse método, os parâmetros são
armazenados nos atributos da classe.
As definições acima permitirão que nosso App manipule facilmente instâncias (objetos)
do tipo "Tarefa".*/