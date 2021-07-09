
document.querySelector("#form-login").addEventListener("submit", e=>{
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let JSON = {
        email,
        password
    };
    
    if(!JSON.email){
        console.error("Precisa Preencher o campo de e-mail");
    }else if(!JSON.password){
        console.error("Precisa Preencher o campo de Password");
    }else{
        alert("Enviado com Sucesso");
        email = '';
    }
});

