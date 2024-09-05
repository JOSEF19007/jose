
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Função para voltar ao topo
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para responder o quiz
function responderQuiz(resposta) {
    if (resposta === 'resposta2') {
        alert('Correto! Autenticação de dois fatores é a melhor prática.');
    } else {
        alert('Incorreto! Tente novamente.');
    }
}

// Chatbot simples
function chatbotResposta() {
    const pergunta = document.getElementById('pergunta').value.toLowerCase();
    let resposta = '';
    
    if (pergunta.includes('phishing')) {
        resposta = 'Phishing é uma técnica usada para roubar informações pessoais através de mensagens falsas.';
    } else if (pergunta.includes('infectado')) {
        resposta = 'Você pode saber se um dispositivo está infectado ao notar lentidão e atividades suspeitas.';
    } else {
        resposta = 'Desculpe, não entendi sua pergunta.';
    }
    
    document.getElementById('respostaChatbot').innerText = resposta;
}