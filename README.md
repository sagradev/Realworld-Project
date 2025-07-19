
# 🧪 Realworld Project – Automação de Login, Registro e Transferência com Cypress

**Descrição**  
Automatização de testes E2E (end-to-end) para os fluxos de login, registro de usuários e transferência de dinheiro na aplicação Realworld App, utilizando **Cypress** e **Chance.js**.

## 🚀 Tecnologias utilizadas

- **Cypress** – testes completos de ponta a ponta  
- **JavaScript** – implementação dos testes  
- **Page Object Model** – organização modular e manutenível  
- **Chance.js** – geração de dados dinâmicos

## 🎯 Funcionalidades testadas

- Registro de usuário (positivo e negativo)  
- Login com usuário cadastrado  
- Formulário com dados incompletos (fluxo negativo)  
- Transferência de saldo com dois cenários:
  - ✅ Valor dentro do saldo disponível  
  - ❌ Tentativa de transferência com saldo insuficiente (fluxo negativo)

## 📥 Instalação

```bash
git clone https://github.com/sagradev/Realworld-Project.git
cd Realworld-Project
npm install
```

## ▶️ Como executar os testes

- **Interface visual (interativa):**
  ```bash
  npx cypress open

Selecione os specs correspondentes a login, registro ou transferência, ou execute todos juntos no modo headless.

## 🧱 Estrutura de pastas

```
cypress/
├── fixtures/       # Dados de teste
├── pages/          # Page Objects
├── integration/    # Specs: login, registro, transferencia
└── support/        # Comandos customizados
```

## 📂 Repositório
🔗 https://github.com/sagradev/Realworld-Project

## 🤝 Contribuições são bem-vindas

Esse projeto compõe meu portfólio e está em constante evolução.  
Se quiser contribuir, sugerir melhorias ou trocar ideias sobre fluxos complexos de QA, é só abrir uma issue ou PR 😊
