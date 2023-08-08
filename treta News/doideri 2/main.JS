function createAccount() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Aqui, você pode adicionar código para armazenar os dados em um banco de dados
    // ou fazer outras verificações para garantir que os campos sejam preenchidos corretamente

    // Por enquanto, vamos apenas exibir uma mensagem de boas-vindas na página
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("user-name").innerText = username;
}