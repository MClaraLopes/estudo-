function elementOl() {
  var nova_ol = document.createElement('ol');
  nova_ol.setAttribute('id', 'lista-ordenada');
  document.getElementById('principal').appendChild(nova_ol);
  
}
function inserItem(nome_do_item){
  var nova_li = document.createElement('li');	
  nova_li.setAttribute('id', id);
  var novo_link = document.createElement('a');
  var texto = document.createTextNode(nome_do_item);
  nova_li.appendChild(texto);
  novo_link.appendChild(texto);
  
  document.getElementById('lista-ordenada').appendChild(nova_li);

}

function inserirLink(){
  var novo_link = document.createElemente('a');
}
//Lista de funções a serem executadas ao carregar a página
  elementOl();
  for (let i=0 ; i<5; i++) {
  	inserItem('Item' + i, 'id' + i,);
  }