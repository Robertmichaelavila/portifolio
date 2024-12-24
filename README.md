# Portifólio

## Visão Geral

Este portifólio é uma aplicação web progressiva (PWA) desenvolvida com HTML, CSS e JavaScript. O objetivo é criar um site responsivo, rápido e que funcione offline, proporcionando uma experiência de usuário similar a aplicativos nativos.

## Índice

1. [Introdução](#introdução)
2. [Funcionalidades](#funcionalidades)
3. [Configuração e Instalação](#configuração-e-instalação)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Como Contribuir](#como-contribuir)
6. [Licença](#licença)

## Introdução

As PWAs combinam as melhores características dos sites e dos aplicativos móveis, oferecendo uma experiência rica ao usuário. Este projeto demonstra como implementar uma PWA usando tecnologias web padrão.

## Funcionalidades

- **Responsividade:** Design adaptável a diferentes tamanhos de tela.
- **Offline:** Funciona sem conexão com a internet após o primeiro acesso.
- **Instalável:** Pode ser adicionado à tela inicial de dispositivos móveis.
- **Atualizações Automáticas:** Conteúdo atualizado automaticamente em segundo plano.
- **Notificações Push:** Envio de notificações para engajamento do usuário.

### Descrição dos Arquivos

- `index.html`: Página principal do site.
- `style.css`: Arquivo de estilos CSS.
- `script.js`: Lógica principal da aplicação.
- `js/serviceworker.js`: Service Worker para gerenciamento de cache e funcionalidade offline.
- `manifest.json`: Arquivo de manifesto para definição de metadados da PWA.
- `icons8-developer-100png`: Ícones para diferentes resoluções de tela.
- `README.md`: Documentação do projeto.

## Configuração e Instalação

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari)
- Servidor HTTP (recomendado para testes locais)

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Robertmichaelavila/portifolio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd portifolio
    ```

3. Inicie um servidor local (exemplo com Python):

    ```bash
    python -m http.server
    ```

4. Abra o navegador e acesse `http://localhost:8000`.

## Tecnologias Utilizadas

- **HTML5:** Estrutura básica do site.
- **CSS3:** Estilização do site.
- **JavaScript:** Funcionalidade interativa e lógica da PWA.
- **Service Workers:** Para suporte offline e caching.
- **Manifest:** Para definir a aparência e o comportamento da PWA.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch:

    ```bash
    git checkout -b minha-feature
    ```

3. Faça commit das suas alterações:

    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```

4. Envie para o repositório remoto:

    ```bash
    git push origin minha-feature
    ```

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Sinta-se à vontade para contribuir, sugerir melhorias e reportar problemas!

