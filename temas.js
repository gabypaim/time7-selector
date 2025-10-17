const temas = {
    //tema obito
    "Obito Uchiha": {
        '--color-page-background': '#8D84A7',
        '--color-main-button-background': '#37324B',
        '--color-button-border': '#37324B solid 5px',
        '--color-button-border-hard': '#1E1B31 solid 5px',
        '--color-background-border': '#37324B',
        '--color-heading-text': '#37324B',
        '--color-button-text': '#F5F5F5',
        '--color-message-text': '#ffffff',
        
        /* Fonts */
        '--font-family-main': "'Reikna', 'sans-serif'",
        '--font-size-large': '96px',
        '--font-size-medium': '32px',
        '--font-style': 'normal',
        '--font-weight': '400',
        '--line-height': 'normal',
        
        /*border*/
        '--border-radius': '20px',

        /* Spacing */
        
        '--gap-button-leftrigt': '40px',
        '--gap-button-topbottom': '16px',
        '--button-size': '159px',
        '--marigin-top': '87px'
    },
    // tema rin 
    "Rin Nohara": {
         '--color-page-background': '#D6C7EF',
        '--color-main-button-background': '#915CAF',
        '--color-button-border': '#915CAF solid 5px',
        '--color-button-border-hard': '#6D4999 solid 5px',
        '--color-background-border': '#37324B',
        '--color-heading-text': '#915CAF',
        '--color-button-text': '#F5F5F5',
        '--color-message-text': '#ffffff',
        
        /* Fonts */
        '--font-family-main': "'Reikna', 'sans-serif'",
        '--font-size-large': '96px',
        '--font-size-medium': '32px',
        '--font-style': 'normal',
        '--font-weight': '400',
        '--line-height': 'normal',
        
        /*border*/
        '--border-radius': '20px',

        /*Image*/
        '--heigt-image': '300px',
        '--width-image': '300px',

        /* Spacing */
        
        '--gap-button-leftrigt': '40px',
        '--gap-button-topbottom': '16px',
        '--button-size': '159px',
        '--marigin-top': '87px'
    },
    //tema kakashi
    "Kakashi Hatake": {
        '--color-page-background': '#AFC4DB',
        '--color-main-button-background': '#305C81',
        '--color-button-border': '#305C81 solid 5px',
        '--color-button-border-hard': '#19466B solid 5px',
        '--color-background-border': '#305C81',
        '--color-heading-text': '#305C81',
        '--color-button-text': '#F5F5F5',
        '--color-message-text': '#ffffff',
        
        /* Fonts */
        '--font-family-main': "'Reikna', 'sans-serif'",
        '--font-size-large': '96px',
        '--font-size-medium': '32px',
        '--font-style': 'normal',
        '--font-weight': '400',
        '--line-height': 'normal',
        
        /*border*/
        '--border-radius': '20px',

        /* Spacing */
        
        '--gap-button-leftrigt': '40px',
        '--gap-button-topbottom': '16px',
        '--button-size': '159px',
        '--marigin-top': '87px'
    }

};

// Função para aplicar o tema no elemento :root
function aplicarTema(nomePersonagem) {
    const temaSelecionado = temas[nomePersonagem]; 
    
    if (!temaSelecionado) {
        console.warn(`Tema não encontrado para: ${nomePersonagem}`);
        return; 
    }
    
    // Acessa o elemento :root do CSS
    const root = document.documentElement;

    // Percorre o mapa de cores e aplica cada uma
    for (const propriedade in temaSelecionado) {
        if (temaSelecionado.hasOwnProperty(propriedade)) {
            const valor = temaSelecionado[propriedade];
            // setProperty é o comando JavaScript para mudar a variável CSS
            root.style.setProperty(propriedade, valor);
        }
    }
}