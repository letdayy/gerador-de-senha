let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

// Altera o texto com o tamanho correspondente que foi selecionado
sizePassword.innerHTML = sliderElement.value; 

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


// Função para fazer aparecer o texto da senha aleatório 
function generatePassword(){

    let pass ="";
// Essa função quer dizer que vai ser repetida até atingir o valor do sliderElement 
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
}

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    
    novaSenha = pass;
}



// Como copiar a senha ao clicar 
function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
        .then(()=>{
            swal({
                title: "Senha copiada com sucesso!",
                icon: "success"
            });
            // alert("Senha copiada com sucesso!"); 
    })
    .catch((err) => {
        alert(`${err}`);
    })
}

