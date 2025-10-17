# time7-selector
"Sistema de seleção de personagem que usa JavaScript para aplicar temas CSS e salvar a escolha do usuário."

# Projeto de Fundamentos Web: Seleção de Tema Dinâmica

## 🚀 Objetivo

Este projeto de Front-end demonstra a construção de um sistema de seleção de personagem com **aplicação de temas dinâmicos** e **persistência de dados** entre páginas, usando exclusivamente HTML, CSS e JavaScript.

A meta principal foi consolidar o uso de ferramentas modernas de CSS em conjunto com a lógica JavaScript para criar uma experiência de usuário coesa e responsiva.

---

## 🛠️ Stack Tecnológica

| Componente | Tecnologia | Foco em Fundamentos |
| :--- | :--- | :--- |
| **Estrutura** | `HTML5` | Uso de tags semânticas para acessibilidade. |
| **Estilo** | `CSS3` | **Variáveis CSS** (`:root`) para theming eficiente. |
| **Comportamento** | `JavaScript` | Manipulação do DOM e lógica de persistência. |

---

## ✨ Recursos e Implementações Técnicas

Esta aplicação destaca as seguintes implementações:

### 1. Arquitetura de Theming

* **Variáveis CSS (CSS Custom Properties):** Todas as cores, fontes e espaçamentos são centralizados no seletor `:root`. Isso permite que o JavaScript altere o tema visual da página, modificando apenas o valor dessas variáveis.
* **Função `aplicarTema()`:** Função JavaScript que atua como *Controlador de Estado*, lendo o dado salvo e buscando o conjunto de estilos correspondente para injetar na interface.

### 2. Responsividade e Layout

* **Tipografia Fluida (`clamp()`):** A função CSS `clamp()` foi utilizada para definir um tamanho de fonte responsivo (`12vw`) que possui limites explícitos de tamanho **mínimo** e **máximo**, prevenindo que a fonte fique ilegível ou excessivamente grande.
* **Controle de Viewport:** Implementação de `height: 100vh` e gerenciamento de margens/paddings para garantir que o contêiner principal ocupe 100% da área visível e evitar barras de rolagem indesejadas.

### 3. Persistência e Lógica JS

* **`localStorage`:** Utilizado para salvar a escolha do usuário (`setItem`) e recuperar esse dado (`getItem`) na página seguinte, garantindo que o tema selecionado persista durante a navegação (simulação de sessão).
* **Manipulação de Dados:** Uso de objetos em JS para mapear as escolhas do usuário às configurações de tema.
* **Event Listeners:** Implementação para ouvir o clique nos botões e iniciar a sequência de salvar dados e redirecionar.

---

## ⚙️ Como Executar

Este projeto não requer dependências ou instalação.

1.  Clone o repositório.
2.  Abra o arquivo `index.html` diretamente no seu navegador.