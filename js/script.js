/* ============================================================
    CONFIGURAÇÕES GERAIS E DADOS ESTÁTICOS
============================================================ */

// Dados Estáticos dos Brinquedos (Local)
const staticBrinquedos = [
    // === CATEGORIA: MESA E JOGOS DE MIRA ===
    { id: 1, nome: "Air Game", descricao: "O Air Game é pura diversão e desafio! Mesa de aero hockei interativa, onde dois jogadores disputam quem marca mais pontos.", precoPorHora: 55.00, categoria: "Mesa", imagemUrl: "img/airgame.jpg" },
    { id: 2, nome: "Jogo de Argolas", descricao: "Um clássico que nunca sai de moda! As crianças se divertem tentando acertar as argolas no alvo, estimulando a coordenação motora e a concentração.", precoPorHora: 35.00, categoria: "Mesa", imagemUrl: "img/jogoargolas.jpg" },
    { id: 3, nome: "Mini Sinuca", descricao: "🎱 Diversão em miniatura! A Sinuquinha do Mundo Mágico é perfeita para as crianças se sentirem verdadeiros campeões de sinuca!", precoPorHora: 50.00, categoria: "Mesa", imagemUrl: "img/minisinuca.jpg" },
    { id: 4, nome: "Ping-Pong", descricao: "🏓 Diversão e desafios para todas as idades! Com a mesa de Ping Pong do Mundo Mágico, a brincadeira é garantida!", precoPorHora: 65.00, categoria: "Mesa", imagemUrl: "img/pingpong.jpg" },
    { id: 5, nome: "Tamancobol", descricao: "⚽Tamancobol é um jogo de mesa para duas ou quatro pessoas que simula um jogo de golfe, testando a pontaria.", precoPorHora: 40.00, categoria: "Mesa", imagemUrl: "img/tamancobol.jpg" },
    { id: 6, nome: "Totó", descricao: "⚽ Diversão clássica que nunca sai de moda! O Pebolim do Mundo Mágico garante partidas cheias de risadas e muita disputa saudável.", precoPorHora: 45.00, categoria: "Mesa", imagemUrl: "img/toto.jpg" },

    // === CATEGORIA: DIGITAIS ===
    { id: 7, nome: "Fliperama", descricao: "🎮 Diversão garantida para todas as idades! Leve o Fliperama do Mundo Mágico para o seu evento e reviva os clássicos com muitos jogos, competição e risadas! 🕹️", precoPorHora: 95.00, categoria: "Digital", imagemUrl: "img/fliperama.jpg" },
    // Adicione outros brinquedos digitais aqui se houver mais

    // === CATEGORIA: INFLÁVEIS E GRANDES ESTRUTURAS ===
    { id: 8, nome: "Alpinismo", descricao: "O Alpinismo Inflável é diversão radical! As crianças podem escalar e viver a sensação de uma verdadeira aventura com total segurança.", precoPorHora: 110.00, categoria: "Inflável", imagemUrl: "img/alpinismo.jpg" },
    { id: 9, nome: "Bolão", descricao: "O Bolão Inflável é pura energia! Colorido e gigante, garante muitas risadas enquanto as crianças correm, chutam e brincam.", precoPorHora: 80.00, categoria: "Inflável", imagemUrl: "img/bolao.jpg" },
    { id: 10, nome: "Cama Elástica", descricao: "A atração que não pode faltar! Diversão garantida com segurança, onde as crianças podem pular e gastar energia.", precoPorHora: 45.00, categoria: "Inflável", imagemUrl: "img/camaelastica.jpg" },
    { id: 11, nome: "Cama Elástica 244", descricao: "Cama Elástica de 2,44m de diâmetro. Diversão garantida com segurança para todas as idades.", precoPorHora: 60.00, categoria: "Inflável", imagemUrl: "img/camaelastica244.jpg" },
    { id: 12, nome: "Cama Elástica 366", descricao: "Cama Elástica Profissional de 3,66m de diâmetro. Máxima diversão e espaço para pular em segurança.", precoPorHora: 85.00, categoria: "Inflável", imagemUrl: "img/camaelastica366.jpg" },
    { id: 13, nome: "Castelo", descricao: "O Castelo Inflável transforma a festa em um reino de diversão! Colorido, seguro e super animado para pular e brincar.", precoPorHora: 70.00, categoria: "Inflável", imagemUrl: "img/castelo.jpg" },
    { id: 14, nome: "Chute ao Gol", descricao: "Brinquedo inflável que garante diversão e desafios, testando a pontaria dos participantes chutando a bola nos alvos.", precoPorHora: 60.00, categoria: "Inflável", imagemUrl: "img/chuteaogol.jpg" },
    { id: 15, nome: "Futebol de Sabão", descricao: "⚽💦 Diversão e adrenalina garantidas! Escorregue, ria e dispute partidas cheias de diversão e muita bagunça boa!😄", precoPorHora: 150.00, categoria: "Inflável", imagemUrl: "img/futebolsabao.jpg" },
    { id: 16, nome: "Guerra de Cotonete", descricao: "Pura diversão e desafio! Dois participantes duelam em uma base inflável usando cotonetes gigantes.", precoPorHora: 90.00, categoria: "Inflável", imagemUrl: "img/guerracontonete.jpg" },
    { id: 17, nome: "Kid Play Piu-Piu", descricao: "Um espaço inflável cheio de cores, desafios e muita diversão! Com escorregador, obstáculos e personagens.", precoPorHora: 130.00, categoria: "Inflável", imagemUrl: "img/kidplaypiupiu.jpg" },
    { id: 18, nome: "Mini Kid Play", descricao: "Um espaço inflável cheio de cores e desafios, feito sob medida para os pequenos! Seguro e perfeito para crianças menores.", precoPorHora: 95.00, categoria: "Inflável", imagemUrl: "img/minikidplay.jpg" },
    { id: 19, nome: "Mini Tobogã Jacaré", descricao: "🐊 Diversão que escorrega de alegria! Colorido, seguro e cheio de emoção, ele garante muitas risadas e momentos inesquecíveis!", precoPorHora: 80.00, categoria: "Inflável", imagemUrl: "img/minitobogajacare.jpg" },
    { id: 20, nome: "Mult Play Tigrinho", descricao: "🐯 Aventura e diversão em um só brinquedo! Combina escorregador, obstáculos e muita animação!", precoPorHora: 140.00, categoria: "Inflável", imagemUrl: "img/multplaytigrinho.jpg" },
    { id: 21, nome: "Piscina de Bolinha Leão", descricao: "🦁 Diversão com o rei da selva! Piscina de Bolinhas Inflável que encanta com cores vibrantes e formato divertido!", precoPorHora: 60.00, categoria: "Inflável", imagemUrl: "img/piscinabolinhaleao.jpg" },
    { id: 22, nome: "Pula-Pula", descricao: "🤸‍♂️ Pura energia e diversão! O Mini Pula-Pula Inflável é perfeito para os pequenos se divertirem com segurança! Colorido e cheio de alegria.", precoPorHora: 50.00, categoria: "Inflável", imagemUrl: "img/pulapula.jpg" },
    { id: 23, nome: "Toboágua", descricao: "💦 A diversão mais refrescante da festa! Sucesso garantido nos dias de calor! As crianças adoram escorregar e curtir essa aventura.", precoPorHora: 180.00, categoria: "Inflável", imagemUrl: "img/toboagua.jpg" },
    { id: 24, nome: "Tobogã Piscina", descricao: "🎢🎈 Diversão em dobro! O Mini Tobogã com Piscina de Bolinhas une o melhor dos dois mundos: escorregar e mergulhar em um mar de bolinhas!", precoPorHora: 160.00, categoria: "Inflável", imagemUrl: "img/tobogapiscina.jpg" },
    { id: 25, nome: "Tobogã Premium", descricao: "🎉 Diversão em grande estilo! Gigante, colorido e cheio de emoção! Ideal para garantir muita aventura, risadas e momentos inesquecíveis!", precoPorHora: 200.00, categoria: "Inflável", imagemUrl: "img/tobogapremium.jpg" },
    { id: 26, nome: "Tombo Legal", descricao: "🤪 Quem será o próximo a cair? O Tombo Legal é pura diversão e gargalhada! Desafie os amigos, teste o equilíbrio e se prepare para rolar de rir!", precoPorHora: 75.00, categoria: "Inflável", imagemUrl: "img/tombolegal.jpg" },
    { id: 27, nome: "Piscina de Bolinha Tradicional", descricao: "Piscina de bolinha simples, mas essencial para a diversão dos pequenos, segura e colorida.", precoPorHora: 40.00, categoria: "Inflável", imagemUrl: "img/piscinabolinhatrad.jpg" },
];


const API_URL = "http://localhost:8099/api"; 

// Configurações de breakpoints para cards (AJUSTADO para cards maiores)
const CARD_CONFIG = [
    { max: 480, visible: 1, width: 300 }, // Mobile
    { max: 768, visible: 2, width: 280 }, // Tablet
    { max: 1024, visible: 3, width: 290 }, // Telas médias
    { max: 1200, visible: 4, width: 270 }, // Telas grandes
    { max: Infinity, visible: 5, width: 280 } // Telas muito grandes
];

// Objeto global para armazenar o índice de rolagem de CADA carrossel
const carouselIndexMap = {}; 


/* ============================================================
    FUNÇÕES AUXILIARES DO CARROSSEL
============================================================ */

function getCardSettings() {
    const width = window.innerWidth;
    return CARD_CONFIG.find(cfg => width <= cfg.max);
}

// moveSlide agora aceita o ID para mover o carrossel correto (Suporte a múltiplos carrosséis)
function moveSlide(direction = 0, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    // Inicializa ou recupera o índice para este carrossel específico
    let index = carouselIndexMap[carouselId] || 0;
    
    const cards = carousel.querySelectorAll('.card');
    if (cards.length === 0) return;

    const { visible, width } = getCardSettings();
    const total = cards.length;
    
    index += direction;
    const maxIndex = total - visible;
    if (index > maxIndex) {
        index = 0;
    } else if (index < 0) {
    index = maxIndex;}
    
    // Armazena o índice atualizado
    carouselIndexMap[carouselId] = index;

    // Gap (espaçamento) de 20px, conforme definido no CSS
    const gap = 20; 
    const offset = -(width + gap) * index;
    carousel.style.transform = `translateX(${offset}px)`;
}

/* ============================================================
    FUNÇÃO DE RENDERIZAÇÃO E CARREGAMENTO (ESTÁTICO)
============================================================ */

// Função auxiliar para renderizar os cards em um contêiner específico
function renderCards(brinquedos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    brinquedos.forEach(b => {
        // Limita a descrição para caber no card
        const descricao = b.descricao?.length > 70 
            ? b.descricao.slice(0, 70) + "..." 
            : b.descricao || "";

        const card = document.createElement("div");
        card.classList.add("card");

        // Estrutura do Card com o botão "Adicionar ao Carrinho"
        card.innerHTML = `
            <div class="card-img">
                <img src="${b.imagemUrl || 'img/default.png'}" alt="${b.nome}">
            </div>
            <div class="card-content">
                <h3>${b.nome}</h3>
                <p class="description">${descricao}</p>
                <p class="price">R$ ${(b.precoPorHora || 0).toFixed(2).replace('.', ',')} / hora</p>
                <button class="btn-primary">Adicionar ao Carrinho</button>
            </div>
        `;

        container.appendChild(card);
    });

    moveSlide(0, containerId); // Ajusta o carrossel após o carregamento
}


// Função principal que filtra os dados estáticos e os renderiza nos carrosséis
function carregarBrinquedosCategorizados() {
    const categoriesMap = {
        'inflaveis-carrossel': 'Inflável', 
        'mesa-carrossel': 'Mesa',
        'digitais-carrossel': 'Digital'
    };

    // Itera sobre o mapa para filtrar e renderizar cada categoria
    for (const [id, categoryName] of Object.entries(categoriesMap)) {
        // Filtra os brinquedos usando o campo 'categoria' da lista estática
        const filteredBrinquedos = staticBrinquedos.filter(b => b.categoria === categoryName);
        renderCards(filteredBrinquedos, id);
    }
}


/* ============================================================
    FORMULÁRIO DE ORÇAMENTO (MANTIDO o stub para o caso de ser usado)
============================================================ */

function initFormOrcamento() {
    // Esta função não será executada, pois o formulário de orçamento não está mais na raiz do HTML
    const form = document.querySelector('#orcamento form');
    if (!form) return;
}


/* ============================================================
    EVENTOS GERAIS
============================================================ */

// Reajustar todos os carrosséis no redimensionamento da janela
window.addEventListener('resize', () => {
    // Itera sobre todos os carrosséis ativos e os reajusta
    Object.keys(carouselIndexMap).forEach(id => moveSlide(0, id));
});

document.addEventListener('DOMContentLoaded', () => {
    carregarBrinquedosCategorizados(); // Inicia o carregamento dos 3 carrosséis
    initFormOrcamento();
});