import { Component } from '@angular/core';
import { Tarefa } from './tarefa';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];
  apiURL : string;


  CREATE_tarefa (descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.http.post<Tarefa>(`${this.apiURL}/api/post`, novaTarefa).subscribe(
      resultado => { console.log(resultado); this.READ_tarefas(); });
     
    
    //this.arrayDeTarefas.unshift(novaTarefa);
  }

  READ_tarefas () {
    this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`).subscribe(
      resultado => this.arrayDeTarefas=resultado);
    
    
    /*
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks WEB", false),
      new Tarefa("Comer Pizza", false),
      new Tarefa("Ajudar meus pais", false),
    ];*/
  }

  UPDATE_tarefa(tarefaAserModificada: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserModificada);
    var id = this.arrayDeTarefas[indice]._id;
    this.http.patch<Tarefa>(`${this.apiURL}/api/update/${id}`,
    tarefaAserModificada).subscribe(
    resultado => { console.log(resultado); this.READ_tarefas(); });
   }
   

  DELETE_tarefa(tarefaRemovida: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaRemovida);
    var id = this.arrayDeTarefas[indice]._id;
    this.http.delete<Tarefa>(`${this.apiURL}/api/delete/${id}`).subscribe(
    resultado => { console.log(resultado); this.READ_tarefas(); });
    //this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaRemovida), 1);
  }

  constructor(private http: HttpClient) {
    this.apiURL = 'https://api-tarefas-three.vercel.app';
    this.READ_tarefas();
  }
}


/*

 3:

• A linha do "import" permite que o AppComponent utilize as definições
realizadas na classe "Tarefa".
• A variável "arrayDeTarefas" foi definida como um array vazio para armazenar
objetos do tipo "Tarefa".
• O método READ_tarefas armazena 3 tarefas dentro do array. O nome deste
método pode parecer estranho neste momento, porém ele simula o processo
de "Leitura" de tarefas armazenadas em algum tipo de repositório persistente.
• O construtor executa o método READ_tarefas durante a inicialização do
programa, garantido que o array seja populado com alguns objetos para a
realização de testes.

Perceba que o método adicionado CREATE_tarefa recebe como parâmetro somente a descrição da
tarefa. Na sequência ele cria um novo objeto do tipo "Tarefa", utilizando a descrição
recebida como parâmetro e define automaticamente o status "false". A última linha do
método insere o objeto criado no arrayDeTarefas.
*/


