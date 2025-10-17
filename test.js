//O navegador lê o HTML e o script em ordens diferentes. O DOMContentLoaded é o  controle de tráfego para garantir que a lógica do JavaScript espere a estrutura do HTML ficar pronta.
    document.addEventListener('DOMContentLoaded', () =>{

        //seleciona todos os button da div time7
        const buttons = document.querySelectorAll('#time7 button')

        //para cada um dos botão (button(poderia ser qualquer nome ele é temporario) farei { } )
        // => = "O que eu faço com o button é... (função Arrow)"
        buttons.forEach(button => {
        
            button.addEventListener('click', function() { 
                // Código que só roda DEPOIS do clique
                // função anônima, a forma clássica de escrever uma função que não tem nome.
                //function = Palavra-chave que avisa o JavaScript: "Isto é uma função.", Os parênteses são onde passamos as entradas (argumentos). Como a função de clique não precisa de entradas, eles ficam vazios.

                const name = this.getAttribute('data-name');
                const cabelo = this.getAttribute('data-cabelo');
                //this = eu, esse botão que cliquei. getAttribute = leia o texto/adesivo. data-cabelo = nome do adesivo personalizado

                aplicarTema(name);


                localStorage.setItem('nomeselecionado', name);
                localStorage.setItem('cabeloselecionado', cabelo);
                // localStorage é um objeto global que funciona como um pequeno banco de dados para guardar dados no computador do usuário.
                //setItem() é um método (uma função) do objeto localStorage que tem apenas uma missão: salvar um par de informações (chave e valor). 
                // 'cabeloselecionado' É sempre uma string (texto). É o nome que você usará depois para ler o dado.
                // cabelo é o conteúdo que você coloca dentro da gaveta.

                window.location.href = 'testresult.html';
                
            } );

        });
    })
    
    

