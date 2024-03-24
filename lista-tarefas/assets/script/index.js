$(document).ready(app);

function app(){
   // Evento de submit do formulário
   $('#formTarefa').submit((event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    updateDisplay();
  });

  function createLi(text){
    const li = $('<li></li>').text(text);
    return li;
  }
  
  function updateDisplay(){
    let input = $('#inputTarefa').val();
    if(input.trim() !== '') {
      const li = createLi(input);
      $('#listaTarefas').append(li);
      clear();
      applyEffects(li);
      removeLi(li)
    } else {
      alert("Nenhum item informado");
    }
  }
  
  function clear(){
    // Limpa o valor do input
    $('#inputTarefa').val('');
  }

  function applyEffects(element){
    $(element).on('click', function(){
      $(this).toggleClass('tarefa-completa');
    });
  }

  function removeLi(element){
    $(element).on('dblclick', function () {
        if($(element).is('.tarefa-completa')){
          alert('Não pode remover o Item')
        }else{
          $(this).remove()
        }
    });
  }
}