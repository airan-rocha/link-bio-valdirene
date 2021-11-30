const redeSocialDiv = document.getElementById('rede-social');

var redesSociais = "";

redeSocial.forEach(element => {
    const {name, url, logoUrl} = element;

    redesSociais += (`
            <a target='_blank' href='${url}'><img alt='logo ${name}' src='${logoUrl}'></a>
    `);
});

redeSocialDiv.innerHTML = redesSociais;