# Guia de Integração - ZeroAtraso

## 🆕 Novidades Adicionadas

### ✅ Dashboard de Clientes Consumidores
- **Arquivo:** `dashboard-cliente.html`
- **Recursos:** Perfil, compras, favoritos, formas de pagamento
- **Benefício:** Cadastro 100% gratuito e ilimitado

### ✅ Sistema de Pagamentos
- **Arquivo:** `pagamento.html`
- **Formas de pagamento:** PIX, Cartão de Crédito, Mercado Pago
- **Status:** Interface completa (integração pendente)

---

## Funcionalidades Pendentes de Implementação

### 1. 💳 Integração com Mercado Pago (PRIORITÁRIO)

**Status Atual:** Interface de pagamento criada, integração pendente

**Sua Conta Mercado Pago:**
Para receber pagamentos, você precisa criar e configurar sua conta:

1. **Criar Conta Mercado Pago:**
   - Acesse: https://www.mercadopago.com.br
   - Cadastre-se como **Vendedor**
   - Valide sua identidade (CPF/CNPJ)
   - Configure sua conta bancária para recebimentos

2. **Obter Credenciais:**
   - Acesse: https://www.mercadopago.com.br/developers
   - Vá em "Suas integrações" → "Criar aplicação"
   - Anote suas credenciais:
     - **Public Key** (chave pública - usar no frontend)
     - **Access Token** (chave privada - usar no backend)

**Implementação - Mercado Pago Checkout Pro:**

```javascript
// Instalar SDK
npm install @mercadopago/sdk-js

// Configurar no frontend (pagamento.html)
const mp = new MercadoPago('SUA_PUBLIC_KEY', {
  locale: 'pt-BR'
});

// Criar preferência de pagamento (backend Node.js)
const mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

const preference = {
  items: [
    {
      title: 'Plano Autônomo - ZeroAtraso',
      unit_price: 29.99,
      quantity: 1,
    }
  ],
  back_urls: {
    success: 'https://seusite.com/sucesso',
    failure: 'https://seusite.com/falha',
    pending: 'https://seusite.com/pendente'
  },
  auto_return: 'approved',
  payment_methods: {
    excluded_payment_types: [],
    installments: 12
  }
};

mercadopago.preferences.create(preference)
  .then(response => {
    // response.body.init_point = URL do checkout
    console.log(response.body);
  });
```

**Implementação - PIX via Mercado Pago:**

```javascript
// Gerar pagamento PIX
const payment = {
  transaction_amount: 29.99,
  description: 'Plano Autônomo - ZeroAtraso',
  payment_method_id: 'pix',
  payer: {
    email: 'cliente@email.com',
  }
};

mercadopago.payment.create(payment)
  .then(response => {
    // response.body.point_of_interaction.transaction_data
    // Contém: qr_code_base64, qr_code (texto)
    const pixQR = response.body.point_of_interaction.transaction_data.qr_code_base64;
    const pixCode = response.body.point_of_interaction.transaction_data.qr_code;
  });
```

**Webhooks (Notificações de Pagamento):**

```javascript
// Configurar endpoint para receber notificações
app.post('/webhook/mercadopago', (req, res) => {
  const { type, data } = req.body;
  
  if (type === 'payment') {
    const paymentId = data.id;
    
    mercadopago.payment.get(paymentId)
      .then(payment => {
        if (payment.body.status === 'approved') {
          // Pagamento aprovado - ativar assinatura do cliente
          console.log('Pagamento aprovado!');
        }
      });
  }
  
  res.sendStatus(200);
});
```

**Recursos Oficiais:**
- Documentação: https://www.mercadopago.com.br/developers/pt/docs
- SDK JavaScript: https://github.com/mercadopago/sdk-js
- SDK Node.js: https://github.com/mercadopago/sdk-nodejs

**Taxas Mercado Pago (referência 2025):**
- PIX: ~0,99% por transação
- Cartão de Crédito: ~3,99% + R$ 0,40
- Boleto: ~R$ 3,49 por boleto

---

### 2. Reconhecimento Facial

**Status Atual:** Apenas exemplo visual (botões simulados)

**Para Implementar:**
- Utilizar **MediaPipe Face Detection** ou **Face-API.js** para captura de rosto via webcam
- Integrar com backend para armazenamento seguro de embeddings faciais
- Implementar fluxo de autenticação biométrica

**Recursos:**
- https://github.com/google/mediapipe
- https://github.com/justadudewhohacks/face-api.js

---

### 3. Leitura de Códigos (QR Code e Código de Barras)

**Status Atual:** Funcionalidade apenas mencionada

**Para Implementar:**
- Biblioteca recomendada: **QuaggaJS** (código de barras) e **qr-scanner** (QR Code)
- Integrar com sistema de cadastro de produtos
- Validar dados lidos contra banco de dados

**Recursos:**
- https://github.com/serratus/quaggaJS
- https://github.com/nimiq/qr-scanner

---

### 4. Integração com Supabase

**Serviços a Implementar:**
- **Autenticação:** `supabase.auth.signUp()`, `supabase.auth.signIn()`
- **Banco de Dados:** Tabelas para usuários, produtos, vendas, clientes
- **Storage:** Upload de imagens de produtos e fotos de perfil
- **Realtime:** Sincronização de estoque em tempo real

**Configuração Inicial:**
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'SUA_URL_SUPABASE'
const supabaseKey = 'SUA_CHAVE_PUBLICA'
const supabase = createClient(supabaseUrl, supabaseKey)
```

**Recursos:**
- https://supabase.com/docs

---

### 5. Integração com Firebase (Alternativa)

**Serviços a Implementar:**
- **Firebase Authentication:** Suporte para email/senha e biometria
- **Cloud Firestore:** Banco de dados NoSQL para dados de negócio
- **Firebase Storage:** Armazenamento de arquivos
- **Cloud Functions:** Lógica de backend serverless

**Configuração Inicial:**
```javascript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
```

**Recursos:**
- https://firebase.google.com/docs

---

## Recomendações de Arquitetura

### Estrutura de Projeto Sugerida:
```
zeroatraso/
├── public/
│   ├── index.html
│   ├── style.css
│   └── assets/
├── src/
│   ├── config/
│   │   ├── supabase.js       # Configuração Supabase
│   │   └── firebase.js       # Configuração Firebase
│   ├── services/
│   │   ├── auth.js           # Serviços de autenticação
│   │   ├── products.js       # Gestão de produtos
│   │   ├── customers.js      # Gestão de clientes
│   │   └── facial.js         # Reconhecimento facial
│   ├── utils/
│   │   ├── barcode.js        # Leitura de código de barras
│   │   └── qrcode.js         # Leitura de QR Code
│   └── main.js
├── package.json
└── README.md
```

---

## Próximos Passos

1. **Escolher plataforma backend:** Supabase ou Firebase (ou ambos)
2. **Configurar projeto na plataforma escolhida**
3. **Instalar dependências necessárias**
4. **Implementar autenticação real**
5. **Desenvolver sistema de gestão de produtos**
6. **Integrar reconhecimento facial**
7. **Adicionar leitura de códigos**
8. **Testes de segurança e performance**

---

## Segurança

⚠️ **IMPORTANTE:**
- Nunca expor chaves de API em código frontend
- Usar variáveis de ambiente (`.env`)
- Implementar regras de segurança no Supabase/Firebase
- Validar todas as entradas do usuário
- Usar HTTPS em produção
- Implementar rate limiting para APIs

---

## Suporte

Para dúvidas sobre implementação:
- Email: melhormais12@gmail.com
- WhatsApp: +55 (88) 9.9764-0012
