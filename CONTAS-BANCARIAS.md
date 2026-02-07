# 🏦 Configuração de Contas Bancárias - ZeroAtraso

## 📋 Informações Importantes

Este arquivo serve para você configurar suas contas bancárias e chaves PIX para receber os pagamentos dos seus clientes.

---

## 🔑 Chave PIX Principal

**Configure sua chave PIX para recebimentos instantâneos:**

```
Tipo de Chave: [Email / Telefone / CPF/CNPJ / Aleatória]
Chave: _____________________________________
Titular: ___________________________________
CPF/CNPJ: __________________________________
Banco: _____________________________________
```

---

## 💜 Nubank

**Status:** ⭐ Recomendado para começar (sem taxas PIX)

**Configuração:**
1. Abra o app do Nubank
2. Vá em "Pix" → "Minhas chaves"
3. Copie sua chave PIX
4. Cole aqui:

```
Chave PIX Nubank: _____________________________
Nome do Titular: ______________________________
CPF: __________________________________________
```

**Vantagens:**
- ✅ PIX sem taxas
- ✅ Conta digital gratuita
- ✅ App intuitivo
- ✅ Cartão de crédito disponível

---

## 💙 Mercado Pago

**Status:** ⭐ Recomendado para e-commerce

**Como configurar:**
1. Criar conta: https://www.mercadopago.com.br
2. Verificar identidade (enviar documentos)
3. Obter credenciais de desenvolvedor

**Credenciais (Não compartilhe!):**
```
Public Key: ___________________________________
Access Token: _________________________________
```

**Configurar webhook:**
```
URL do webhook: https://seusite.com/webhook/mercadopago
```

**Documentação:** https://www.mercadopago.com.br/developers/pt/docs

---

## 💙 PayPal

**Status:** Recomendado para pagamentos internacionais

**Como configurar:**
1. Criar conta: https://www.paypal.com/br
2. Verificar conta (vincular banco/cartão)
3. Obter credenciais de desenvolvedor

**Credenciais (Ambiente Produção):**
```
Client ID: ____________________________________
Secret: _______________________________________
```

**Webhook URL:**
```
https://seusite.com/webhook/paypal
```

**Taxas:**
- Nacional: ~4,99% + R$ 0,60
- Internacional: ~6,40% + taxa fixa

**Documentação:** https://developer.paypal.com/

---

## 💚 PicPay

**Status:** Popular no Brasil

**Como configurar:**
1. Criar conta empresarial: https://empresas.picpay.com
2. Solicitar integração
3. Receber credenciais

**Credenciais:**
```
PicPay Token: _________________________________
Seller Token: _________________________________
```

**Vantagens:**
- ✅ Cashback para clientes
- ✅ PIX instantâneo
- ✅ Popular entre jovens

**Documentação:** https://ecommerce.picpay.com/doc/

---

## 🧡 Banco Itaú

**Dados da Conta:**
```
Banco: 341 - Itaú Unibanco
Agência: _______  (sem dígito)
Conta Corrente: ____________ - __  (com dígito)
Titular: ___________________________________
CPF/CNPJ: __________________________________
Chave PIX: _________________________________
```

**Como configurar PIX:**
1. Acesse o app Itaú
2. Vá em "Pix" → "Minhas chaves"
3. Cadastre uma chave (recomendado: CNPJ ou Email)

---

## ❤️ Banco Bradesco

**Dados da Conta:**
```
Banco: 237 - Bradesco
Agência: _______  (sem dígito)
Conta Corrente: ____________ - __  (com dígito)
Titular: ___________________________________
CPF/CNPJ: __________________________________
Chave PIX: _________________________________
```

---

## 💛 Banco do Brasil

**Dados da Conta:**
```
Banco: 001 - Banco do Brasil
Agência: _______  (sem dígito)
Conta Corrente: ____________ - __  (com dígito)
Titular: ___________________________________
CPF/CNPJ: __________________________________
Chave PIX: _________________________________
```

---

## 💙 Caixa Econômica Federal

**Dados da Conta:**
```
Banco: 104 - Caixa Econômica Federal
Agência: _______  (sem dígito)
Operação: ______ (ex: 001, 013)
Conta: ____________ - __  (com dígito)
Titular: ___________________________________
CPF/CNPJ: __________________________________
Chave PIX: _________________________________
```

---

## ❤️ Banco Santander

**Dados da Conta:**
```
Banco: 033 - Santander
Agência: _______  (sem dígito)
Conta Corrente: ____________ - __  (com dígito)
Titular: ___________________________________
CPF/CNPJ: __________________________________
Chave PIX: _________________________________
```

---

## 📄 Outros Bancos Virtuais

### Inter
```
Banco: 077
Agência: 0001
Conta: ____________
Chave PIX: _________________________
```

### C6 Bank
```
Banco: 336
Agência: 0001
Conta: ____________
Chave PIX: _________________________
```

### Neon
```
Banco: 655
Agência: 0001
Conta: ____________
Chave PIX: _________________________
```

### Original
```
Banco: 212
Agência: _______
Conta: ____________
Chave PIX: _________________________
```

---

## 🔐 Segurança

⚠️ **IMPORTANTE:**
- ✅ Mantenha este arquivo PRIVADO
- ✅ Nunca compartilhe tokens/senhas
- ✅ Use .gitignore para não enviar ao GitHub
- ✅ Em produção, use variáveis de ambiente
- ✅ Ative autenticação de dois fatores

---

## 📱 Recebendo Pagamentos

### Via PIX:
1. Cliente escaneia QR Code
2. Pagamento cai na hora
3. Você recebe notificação
4. Libera o acesso do cliente

### Via Mercado Pago/PayPal:
1. Cliente paga na plataforma
2. Você recebe via webhook
3. Valida o pagamento
4. Libera o acesso

### Via Transferência Bancária:
1. Cliente faz TED/DOC
2. Você confirma manualmente
3. Libera o acesso (1-2 dias úteis)

---

## 🎯 Recomendações

**Para começar rápido:**
1. **Nubank** - PIX gratuito, fácil configuração
2. **Mercado Pago** - Aceita tudo (PIX, cartão, boleto)

**Para crescer:**
3. **PayPal** - Clientes internacionais
4. **Banco tradicional** - TED/DOC de outros bancos

**Para profissionalizar:**
5. Conta PJ (Pessoa Jurídica)
6. Gateway de pagamento completo
7. Sistema de reconciliação financeira

---

## 📞 Suporte

Dúvidas sobre configuração?
- WhatsApp: +55 (88) 9.9764-0012
- Email: melhormais12@gmail.com
