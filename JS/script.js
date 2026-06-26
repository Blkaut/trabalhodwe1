let contador = 1;
const respostas = [];

// QUIZ
function showQuiz() {
    const botao = document.querySelector("#btquiz");
    const div = document.querySelector(".container-quiz");
    if (div.style.display == "none") {div.style.display = "flex"}
    else {div.style.display = "none"}
}

function mostrarMarcos(){
    document.querySelector("#radioDefault1").style.opacity = 100;
    document.querySelector("#radioDefault2").style.opacity = 100;
    document.querySelector("#radioDefault3").style.opacity = 100;
    document.querySelector("#radioDefault4").style.opacity = 100;
}

function armazenarResposta(resposta){
    respostas.push(resposta);
}

function desabilitarMarcos() {
    document.querySelector("#radioDefault1").checked = false;
    document.querySelector("#radioDefault2").checked = false;
    document.querySelector("#radioDefault3").checked = false;
    document.querySelector("#radioDefault4").checked = false;
}

function ativarMarcos() {
    document.querySelector("#radioDefault1").disabled = false;
    document.querySelector("#radioDefault2").disabled = false;
    document.querySelector("#radioDefault3").disabled = false;
    document.querySelector("#radioDefault4").disabled = false;
}

function desabilitarRadios() {
    document.querySelector("#radioDefault1").disabled = true;
    document.querySelector("#radioDefault2").disabled = true;
    document.querySelector("#radioDefault3").disabled = true;
    document.querySelector("#radioDefault4").disabled = true;
}

function resetarQuiz() {

    ativarMarcos();
    const respostas = [];
    contador = 1;
    resposta.innerHTML = ``;
}


function proxPergunta() {
    const pergunta = document.querySelector("#pergunta");

    const op1 = document.querySelector("#questao1");
    const op2 = document.querySelector("#questao2");
    const op3 = document.querySelector("#questao3");
    const op4 = document.querySelector("#questao4");

    const opr1 = document.querySelector("#radioDefault1");
    const opr2 = document.querySelector("#radioDefault2");
    const opr3 = document.querySelector("#radioDefault3");
    const opr4 = document.querySelector("#radioDefault4");

    const resposta = document.querySelector("#resposta");
    const bt = document.querySelector("#botaoQuiz");

    switch (contador) {
        case 1: {
            mostrarMarcos();
            pergunta.innerHTML = `${contador}. No HTML, qual é a principal diferença semântica entre as tags &lt;ul&gt; e &lt;ol&gt;?`;
            op1.innerHTML = "<strong>A.</strong> A tag &lt;ul&gt; renderiza os itens inline por padrão, enquanto a tag &lt;ol&gt; renderiza os itens em blocos verticais.";
            op2.innerHTML = "<strong>B.</strong> A tag &lt;ol&gt; aceita estilos CSS nativos para alterar as cores do texto, enquanto a tag &lt;ul&gt; não aceita.";
            op3.innerHTML = "<strong>C.</strong> A tag &lt;ul&gt; serve apenas para criar menus de navegação, enquanto a tag &lt;ol&gt; serve para parágrafos de texto estruturados.";
            op4.innerHTML = "<strong>D.</strong> A tag &lt;ul&gt; define uma lista não ordenada (geralmente com marcadores), enquanto &lt;ol&gt; define uma lista ordenada (geralmente numérica), onde a ordem dos itens importa.";
            bt.innerHTML = "Próxima";
            contador++;
            desabilitarMarcos();
            break;
        }
        case 2: {
            pergunta.innerHTML = `${contador}. Considerando o Box Model do CSS, quais propriedades determinam o espaçamento interno de um elemento (entre o conteúdo e a borda) e o espaçamento externo (entre a borda e outros elementos), respectivamente?`;
            op1.innerHTML = "<strong>A.</strong> marging e padding";
            op2.innerHTML = "<strong>B.</strong> gap e internal-spacing";
            op3.innerHTML = "<strong>C.</strong> border e width";
            op4.innerHTML = "<strong>D.</strong> padding e margin";
            bt.innerHTML = "Próxima";
            let selecionado = document.querySelector('input[name="radioDefault"]:checked');
            armazenarResposta(selecionado.value);
            console.log(respostas[contador-2]);
            contador++;
            desabilitarMarcos();
            break;
        }
        case 3: {
            pergunta.innerHTML = `${contador}. Qual é a diferença fundamental no escopo e na reatribuição de variáveis declaradas com let e let no JavaScript moderno (ES6)?`;
            op1.innerHTML = "<strong>A.</strong> Variáveis declaradas com let sofrem hoisting para o topo do script, enquanto variáveis declaradas com let não sofrem.";
            op2.innerHTML = "<strong>B.</strong> Ambas possuem escopo de função, mas variáveis declaradas com let podem ser reatribuídas, enquanto let cria uma referência imutável.";
            op3.innerHTML = "<strong>C.</strong> Ambas possuem escopo de bloco. Variáveis declaradas com let podem ter seu valor reatribuído, enquanto variáveis declaradas com const não podem ser reatribuídas.";
            op4.innerHTML = "<strong>D.</strong> O uso de let permite que a variável mude de tipo dinamicamente, enquanto const força a tipagem estática da variável.";
            bt.innerHTML = "Próxima";
            let selecionado = document.querySelector('input[name="radioDefault"]:checked');
            armazenarResposta(selecionado.value);
            console.log(respostas[contador-2]);
            contador++;
            desabilitarMarcos();
            break;
        }
        case 4: {
            pergunta.innerHTML = `${contador}. Em JavaScript, o que acontece quando usamos o operador de igualdade estrita (===) em comparação ao operador de igualdade ampla (==)?`;
            op1.innerHTML = "<strong>A.</strong> O operador === é usado exclusivamente para comparar objetos e arrays, enquanto == é para tipos primitivos.";
            op2.innerHTML = "<strong>B.</strong> O operador === compara apenas os valores das variáveis, realizando coerção de tipo se necessário.";
            op3.innerHTML = "<strong>C.</strong> O operador === executa uma comparação assíncrona, enquanto == é síncrono.";
            op4.innerHTML = "<strong>D.</strong> O operador === compara tanto o valor quanto o tipo dos operandos, sem realizar a coerção automática de tipos.";
            bt.innerHTML = "Próxima";
            let selecionado = document.querySelector('input[name="radioDefault"]:checked');
            armazenarResposta(selecionado.value);
            console.log(respostas[contador-2]);
            contador++;
            desabilitarMarcos();
            break;
        }
        case 5: {
            pergunta.innerHTML = `${contador}. Ao criar layouts responsivos com CSS, qual é a principal finalidade das Media Queries?`;
            op1.innerHTML = "<strong>A.</strong> Medir a audiência e o tempo de permanência dos usuários nas páginas do site.";
            op2.innerHTML = "<strong>B.</strong> Permitir a importação de scripts JavaScript externos baseados na velocidade da internet do usuário.";
            op3.innerHTML = "<strong>C.</strong> Aplicar blocos de estilos CSS específicos apenas se determinadas condições forem verdadeiras, como a largura da tela do dispositivo.";
            op4.innerHTML = "<strong>D.</strong> Otimizar automaticamente o tamanho das imagens do site para que carreguem mais rápido em dispositivos móveis.";
            bt.innerHTML = "Verificar respostas!";
            let selecionado = document.querySelector('input[name="radioDefault"]:checked');
            armazenarResposta(selecionado.value);
            console.log(respostas[contador-2]);
            contador++;
            desabilitarMarcos();
            break;
        }
        case 6: {
            let selecionado = document.querySelector('input[name="radioDefault"]:checked');
            armazenarResposta(selecionado.value);
            desabilitarRadios();
            document.querySelector("#radioDefault4").checked = true;
            document.querySelector("#radioDefault4").disabled = false;
            pergunta.innerHTML = `${contador-5}. No HTML, qual é a principal diferença semântica entre as tags &lt;ul&gt; e &lt;ol&gt;?`;
            op1.innerHTML = "<strong>A.</strong> A tag &lt;ul&gt; renderiza os itens inline por padrão, enquanto a tag &lt;ol&gt; renderiza os itens em blocos verticais.";
            op2.innerHTML = "<strong>B.</strong> A tag &lt;ol&gt; aceita estilos CSS nativos para alterar as cores do texto, enquanto a tag &lt;ul&gt; não aceita.";
            op3.innerHTML = "<strong>C.</strong> A tag &lt;ul&gt; serve apenas para criar menus de navegação, enquanto a tag &lt;ol&gt; serve para parágrafos de texto estruturados.";
            op4.innerHTML = "<strong>D.</strong> A tag &lt;ul&gt; define uma lista não ordenada (geralmente com marcadores), enquanto &lt;ol&gt; define uma lista ordenada (geralmente numérica), onde a ordem dos itens importa.";
            bt.innerHTML = "Próxima";
            console.log(respostas[contador-2]);
            resposta.innerHTML = `<strong>Sua resposta foi:</strong> ${respostas[contador-6]}`;
            contador++;
            break;
        }
        case 7: {
            desabilitarRadios();
            document.querySelector("#radioDefault2").disabled = false;
            document.querySelector("#radioDefault2").checked = true;
            pergunta.innerHTML = `${contador-5}. Considerando o Box Model do CSS, quais propriedades determinam o espaçamento interno de um elemento (entre o conteúdo e a borda) e o espaçamento externo (entre a borda e outros elementos), respectivamente?`;
            op1.innerHTML = "<strong>A.</strong> marging e padding";
            op2.innerHTML = "<strong>B.</strong> gap e internal-spacing";
            op3.innerHTML = "<strong>C.</strong> border e width";
            op4.innerHTML = "<strong>D.</strong> padding e margin";
            bt.innerHTML = "Próxima";
            resposta.innerHTML = `<strong>Sua resposta foi:</strong> ${respostas[contador-6]}`;
            contador++;
            break;
        }
        case 8: {
            desabilitarRadios();
            document.querySelector("#radioDefault3").disabled = false;
            document.querySelector("#radioDefault3").checked = true;
            pergunta.innerHTML = `${contador-5}. Qual é a diferença fundamental no escopo e na reatribuição de variáveis declaradas com let e let no JavaScript moderno (ES6)?`;
            op1.innerHTML = "<strong>A.</strong> Variáveis declaradas com let sofrem hoisting para o topo do script, enquanto variáveis declaradas com let não sofrem.";
            op2.innerHTML = "<strong>B.</strong> Ambas possuem escopo de função, mas variáveis declaradas com let podem ser reatribuídas, enquanto let cria uma referência imutável.";
            op3.innerHTML = "<strong>C.</strong> Ambas possuem escopo de bloco. Variáveis declaradas com let podem ter seu valor reatribuído, enquanto variáveis declaradas com const não podem ser reatribuídas.";
            op4.innerHTML = "<strong>D.</strong> O uso de let permite que a variável mude de tipo dinamicamente, enquanto const força a tipagem estática da variável.";
            bt.innerHTML = "Próxima";
            resposta.innerHTML = `<strong>Sua resposta foi:</strong> ${respostas[contador-6]}`;
            contador++;
            break;
        }
        case 9: {
            desabilitarRadios();
            document.querySelector("#radioDefault4").disabled = false;
            document.querySelector("#radioDefault4").checked = true;
            pergunta.innerHTML = `${contador-5}. Em JavaScript, o que acontece quando usamos o operador de igualdade estrita (===) em comparação ao operador de igualdade ampla (==)`;
            op1.innerHTML = "<strong>A.</strong> O operador === é usado exclusivamente para comparar objetos e arrays, enquanto == é para tipos primitivos.";
            op2.innerHTML = "<strong>B.</strong> O operador === compara apenas os valores das variáveis, realizando coerção de tipo se necessário.";
            op3.innerHTML = "<strong>C.</strong> O operador === executa uma comparação assíncrona, enquanto == é síncrono.";
            op4.innerHTML = "<strong>D.</strong> O operador === compara tanto o valor quanto o tipo dos operandos, sem realizar a coerção automática de tipos.";
            bt.innerHTML = "Próxima";
            resposta.innerHTML = `<strong>Sua resposta foi:</strong> ${respostas[contador-6]}`;
            contador++;
            break;
        }
        case 10: {
            desabilitarRadios();
            document.querySelector("#radioDefault3").disabled = false;
            document.querySelector("#radioDefault3").checked = true;
            pergunta.innerHTML = `${contador-5}. Ao criar layouts responsivos com CSS, qual é a principal finalidade das Media Queries?`;
            op1.innerHTML = "<strong>A.</strong> Medir a audiência e o tempo de permanência dos usuários nas páginas do site.";
            op2.innerHTML = "<strong>B.</strong> Permitir a importação de scripts JavaScript externos baseados na velocidade da internet do usuário.";
            op3.innerHTML = "<strong>C.</strong> Aplicar blocos de estilos CSS específicos apenas se determinadas condições forem verdadeiras, como a largura da tela do dispositivo.";
            op4.innerHTML = "<strong>D.</strong> Otimizar automaticamente o tamanho das imagens do site para que carreguem mais rápido em dispositivos móveis.";
            bt.innerHTML = "Finalizar";
            resposta.innerHTML = `<strong>Sua resposta foi:</strong> ${respostas[contador-6]}`;
            contador++;
            break;
        }
        case 11: {
            showQuiz();
            resetarQuiz();
        }
    }
}

function proxResposta() {
    console.log(contador);
    
    const bt = document.querySelector("#botaoResposta");

    switch (contador) {
        
    }
}
