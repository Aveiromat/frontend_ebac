document.addEventListener('DOMContentLoaded', function () {
    const nomeElement = document.querySelector('#nome');
    const userElement = document.querySelector('#user');
    const perfilElement = document.querySelector('#perfil');
    const reposElement = document.querySelector('#repos');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const githubElement = document.querySelector('#github');

    fetch('https://api.github.com/users/aveiromat')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nomeElement.innerText = json.name;
            userElement.innerText = json.login;
            perfilElement.src = json.avatar_url;
            seguindoElement.innerText = json.following;
            seguidoresElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            githubElement.href = json.html_url;
        })
        .catch(function (error) {
        console.error('Erro na requisição:', error);
    });
});