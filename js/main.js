function elementOl() {
  var nova_ol = document.createElemente('ol');
  nova_ol.setAttribute('Id', 'lista-ordenada');
  document.getElementById('main').appendChild(nova_ol);
  
}
function inserItem(nome_do_item){
  var nova_li = document.mainElemente('li');	
  var texto = document.mainTextNode(nome_do_item);
  nova_li.appendChild(texto);
  document.getElementById('lista-ordenada').appendChild(nova_li);
}
//Lista de funções a serem executadas ao carregar a página
  elementOl();
  for (let i=0 ; i<5; i++) {
  	inserItem('Item' + i);
  }