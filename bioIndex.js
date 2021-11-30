// imagem da pessoa/empresa e seu nome
// informe o nome e o URL da imagem (se a imagem estiver na pasta images coloque, por exemplo: imgUrl = './images/nomeImagem.png')
const pessoa = {
    name: 'Valdirene Cassemiro',
    imgUrl: './images/valdirenePerfil.jpg'
}

// redes sociais = array com os objetos das redes sociais
// você pode colocar o link da sua loja virtual ou o link do whatsapp
//para manter uma boa aparência, utilize imagens quadradas
const redeSocial = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/valdireneconsultora',
        logoUrl: './images/facebook-logo.png'
    },
    {
        name: 'whatsapp',
        url: 'http://wa.me/5533988125703',
        logoUrl: './images/whatsapp-logo.png'
    },
    {
        name: 'loja natura',
        url: 'https://www.natura.com.br/consultoria/valdirenecassemiro',
        logoUrl: './images/lojaNatura-logo.png'
    },
    
    
]

//link do youtube com o vídeo em destaque
//na página do vídeo clique em compartilhar e utilize e copie e cole o link gerado
const videoYouTubeDestaque = 'https://youtu.be/duYQz-qtANQ';

// cards - array com os objetos dos cards
// para manter uma boa aparência, insira imagem quadradas. Ex: 300px x 300px
const card = [
    {
        title: 'Os melhores Perfumes',
        url: 'https://www.natura.com.br/s/produtos?busca=%22perfumes%22&consultoria=valdirenecassemiro',
        imgUrl: './images/cards/perfumes.jpg'
    },
    {
        title: 'Presentes',
        url: 'https://www.natura.com.br/s/produtos?busca=%22presentes%22&consultoria=valdirenecassemiro',
        imgUrl: './images/cards/presentes.jpg'
    },
    {
        title: 'Natura Ekos',
        url: 'https://www.natura.com.br/s/produtos?busca=%22natura%20ekos%22&consultoria=valdirenecassemiro',
        imgUrl: 'https://static.natura.com/cdn/ff/3QPaJtkIKsa2rrrxVCKQ5Im2Ug65VqpLdMlM2yvPh1w/1637946097/public/products/98115_3.jpg'
    },
    {
        title: 'Natura TodoDia',
        url: 'https://www.natura.com.br/s/produtos?busca=%22tododia%22&consultoria=valdirenecassemiro',
        imgUrl: 'https://static.natura.com/cdn/ff/9eXYp57jq1ytyFUNK0vn5ABhK5P0TZi3USTyyjy9RKA/1637829139/public/products/111147_0.jpg'
    },

]