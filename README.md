HEAD
# ZeroAtraso - Gestão de Negócios e Compras Seguras

## Visão Geral
O ZeroAtraso é uma plataforma de gestão empresarial completa, projetada para ajudar comerciantes de todos os portes a gerenciar estoque, vendas e relacionamento com clientes de forma eficiente e segura.

## Status do Projeto
**Versão Atual:** 1.0.0 (Protótipo Frontend)

Este é um protótipo de interface frontend. As funcionalidades de backend, integrações e recursos avançados estão em desenvolvimento.

## Tecnologias Utilizadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e design responsivo
- **JavaScript (ES6)** - Interatividade

## Estrutura de Arquivos
```
zeroatraso/
├── index.html          # Página principal
├── style.css           # Estilos globais
├── script.js           # Lógica de interação
├── README.md           # Documentação
└── INTEGRACAO.md       # Guia de integração
```

## Como Executar

### Opção 1: Live Server (VS Code)
1. Abra o projeto no Visual Studio Code
2. Instale a extensão "Live Server" (se ainda não tiver)
3. Clique com o botão direito em `index.html`
4. Selecione "Open with Live Server"

### Opção 2: Navegador
1. Navegue até a pasta do projeto
2. Arraste `index.html` para o navegador
3. Ou abra diretamente pelo navegador (Ctrl+O / Cmd+O)

### Opção 3: Servidor Python
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

## Funcionalidades Atuais (Protótipo)

### Implementadas
- ✅ Landing page responsiva
- ✅ Modais de login e cadastro
- ✅ Modal de configurações
- ✅ Seção de funcionalidades
- ✅ Tabela de preços
- ✅ Design mobile-first
- ✅ Animações e transições

### Pendentes (Ver INTEGRACAO.md)
- ⏳ Reconhecimento facial real
- ⏳ Leitura de QR Code/Código de Barras
- ⏳ Integração com Supabase/Firebase
- ⏳ Sistema de autenticação
- ⏳ Gestão de estoque funcional
- ⏳ Dashboard de vendas
- ⏳ API backend

## Problemas Resolvidos

### ✅ Correção do Google Fonts
O link anterior apresentava erro. Foi corrigido com:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### ✅ Eliminação de Duplicações
- Código duplicado entre `index.html` e `style.css` foi removido
- CSS foi completamente reorganizado
- Código JavaScript foi otimizado

### ✅ Consistência de Código
- Padrões de nomenclatura unificados
- Estrutura CSS com variáveis CSS (custom properties)
- Código limpo e bem organizado

## Próximos Passos

1. **Backend Development**
   - Escolher stack (Node.js, Python, etc.)
   - Configurar Supabase ou Firebase
   - Criar API RESTful

2. **Funcionalidades Reais**
   - Implementar reconhecimento facial (MediaPipe/Face-API.js)
   - Adicionar scanner de códigos (QuaggaJS/qr-scanner)
   - Sistema de pagamentos (Stripe/Mercado Pago)

3. **GitHub & Versionamento**
   - Inicializar repositório Git
   - Criar branches de desenvolvimento
   - Configurar CI/CD

4. **Testes**
   - Testes unitários (Jest/Vitest)
   - Testes de integração
   - Testes E2E (Cypress/Playwright)

## Configuração Git (Recomendado)

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "feat: projeto inicial ZeroAtraso"

# Criar repositório no GitHub
# Depois vincular:
git remote add origin https://github.com/SEU_USUARIO/zeroatraso.git
git branch -M main
git push -u origin main
```

## Contato

**Desenvolvedor:** Mais12  
**Email:** melhormais12@gmail.com  
**WhatsApp:** +55 (88) 9.9764-0012

## Licença

© 2025 ZeroAtraso. Todos os direitos reservados a mais12.com.

---

**Nota:** Este é um projeto em desenvolvimento ativo. Consulte `INTEGRACAO.md` para detalhes técnicos sobre implementações futuras.
=======
# ZeroAtraso - Sua Gestão de Negócios e Compras Seguras

Este projeto é um protótipo de front-end para a plataforma ZeroAtraso, uma solução de gestão de negócios e compras segura.

## Visão Geral do Projeto
O projeto foi desenvolvido como um exercício prático para demonstrar a criação de uma página web completa e responsiva, utilizando HTML, CSS e JavaScript puro. Inclui uma página inicial, seções de funcionalidades, planos de preços e modais interativos para login, cadastro e configurações.

## Tecnologias Utilizadas
- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização completa e design responsivo.
- **JavaScript (ES6):** Lógica para interação dos modais.
- **Google Fonts:** Para a fonte 'Poppins'.

## Estrutura de Arquivos
- `index.html`: A página principal do site.
- `style.css`: As regras de estilo.
- `script.js`: O código JavaScript para interatividade.
- `README.md`: Este arquivo de documentação.

## Como Executar o Projeto
1.  Abra o Visual Studio Code.
2.  Arraste e solte a pasta `zeroatraso2` para dentro do VS Code.
3.  Com a pasta aberta, clique com o botão direito no arquivo `index.html`.
4.  Selecione "Open with Live Server" para visualizar o projeto no seu navegador.
    * **Nota:** Se você não tiver o Live Server instalado, pode simplesmente arrastar o arquivo `index.html` para a janela do seu navegador.

## Contato
Para mais informações, entre em contato através do email [melhormais12@gmail.com](mailto:melhormais12@gmail.com) ou WhatsApp +55 (88) 9.9764-0012.
ac76235caffd8fae44d03c1c675f308e42833026
