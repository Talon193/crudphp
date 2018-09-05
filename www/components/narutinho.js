$(document).on("click","#btnEnviar",function(){
  var parametros = {
    "nome": $("#txtNome").val(),
    "cpf": $("#txtCpf").val()
  };
  $.ajax({
    type:"post",
    url:"https://site-leonardes.c9users.io/cadastro.php",
    sucess: function(data){
      navigator.notfication.alert(data);
     $("#txtNome").val();
     $("#txtCpf").val();
    },
    error:function(data){
      navigator.notfication.alert("Erro"+data);
    }
  });
});

