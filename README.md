# Partil CNH

Projeto **Partil CNH** — Micro SaaS construído com [Next.js 16](https://nextjs.org), React 19, TypeScript e Tailwind CSS v4.

## 🚀 Getting Started

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Verificar tipos TypeScript
pnpm type-check

# Lint
pnpm lint
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto.

---

## 🌳 Git Flow — Guia de Contribuição

Este projeto usa o modelo **Git Flow** para organização de branches. Abaixo está o guia completo de como trabalhar no projeto.

### O que é Git Flow?

Git Flow é um modelo de branching que organiza o desenvolvimento em branches com propósitos específicos. Ele separa claramente o que está em **produção**, o que está em **desenvolvimento**, e o que está sendo **trabalhado**.

### Estrutura de Branches

```
master ─────────────────────────────────── (produção - sempre estável)
 │
 └── develop ─────────────────────────── (desenvolvimento - próxima versão)
      │
      ├── feature/nome-da-feature ────── (novas funcionalidades)
      ├── bugfix/nome-do-bug ─────────── (correções não urgentes)
      │
      └── release/1.0.0 ─────────────── (preparação para produção)
 │
 └── hotfix/fix-urgente ──────────────── (correção urgente em produção)
```

| Branch      | Origem    | Destino            | Propósito                                    |
| ----------- | --------- | ------------------ | -------------------------------------------- |
| `main`      | —         | —                  | Código em produção, sempre estável           |
| `develop`   | `main`    | —                  | Integração de features para a próxima versão |
| `feature/*` | `develop` | `develop`          | Desenvolvimento de novas funcionalidades     |
| `bugfix/*`  | `develop` | `develop`          | Correção de bugs não urgentes                |
| `release/*` | `develop` | `main` + `develop` | Preparar e testar uma nova versão            |
| `hotfix/*`  | `main`    | `main` + `develop` | Corrigir bugs urgentes em produção           |

---

### 📝 Passo a Passo: Como Trabalhar

#### 1. Criar uma Feature (nova funcionalidade)

```bash
# Iniciar uma feature
git flow feature start nome-da-feature

# Trabalhe normalmente, faça commits...
git add .
git commit -m "feat: adiciona formulário de login"

# Publicar no GitHub (para abrir PR)
git push -u origin feature/nome-da-feature

# OU finalizar localmente (merge direto em develop)
git flow feature finish nome-da-feature
git push origin develop
```

> **No GitHub:** Abra um Pull Request de `feature/nome-da-feature` → `develop`. O CI vai rodar automaticamente e validar seu código.

#### 2. Corrigir um Bug (não urgente)

```bash
# Iniciar bugfix
git flow bugfix start nome-do-bug

# Corrija o bug, faça commits...
git add .
git commit -m "fix: corrige validação de CPF"

# Publicar ou finalizar
git push -u origin bugfix/nome-do-bug
# OU
git flow bugfix finish nome-do-bug
git push origin develop
```

#### 3. Preparar um Release (nova versão)

```bash
# Iniciar release (a partir de develop)
git flow release start 1.0.0

# Faça ajustes finais: atualizar versão, changelog, etc.
git commit -m "chore: bump version to 1.0.0"

# Finalizar release (merge em main + develop + cria tag)
git flow release finish 1.0.0

# Publicar tudo
git push origin main
git push origin develop
git push --tags
```

> **No GitHub:** O push para `main` dispara o deploy de produção. O push da tag `v1.0.0` cria automaticamente um GitHub Release.

#### 4. Hotfix (correção urgente em produção)

```bash
# Iniciar hotfix a partir de main
git flow hotfix start fix-critico

# Corrija o bug urgente
git add .
git commit -m "hotfix: corrige crash na página de pagamento"

# Finalizar (merge em main + develop + cria tag)
git flow hotfix finish fix-critico

# Publicar tudo
git push origin main
git push origin develop
git push --tags
```

> ⚠️ **Hotfix é para emergências!** Use apenas quando há um bug crítico em produção que não pode esperar.

---

### 🤖 CI/CD — O que acontece automaticamente

Temos 4 workflows no GitHub Actions que reagem a cada ação:

| Sua Ação                          | O que acontece automaticamente                             |
| --------------------------------- | ---------------------------------------------------------- |
| Push em `feature/*` ou `bugfix/*` | ✅ CI roda (lint + type-check + build)                     |
| Abrir PR para `develop`           | ✅ CI roda + 🛡️ Valida se a branch de origem é permitida   |
| Abrir PR para `main`              | ✅ CI roda + 🛡️ Valida se vem de `release/*` ou `hotfix/*` |
| Push em `develop`                 | ✅ CI + 🚀 Deploy automático para Staging                  |
| Push em `main`                    | ✅ CI + 🚀 Deploy automático para Produção                 |
| Push de tag `v*`                  | 📦 Cria GitHub Release com changelog                       |

#### Regras de Proteção (Branch Protection)

| ❌ Bloqueado          | ✅ Permitido            |
| --------------------- | ----------------------- |
| `feature/*` → `main`  | `release/*` → `main`    |
| `bugfix/*` → `main`   | `hotfix/*` → `main`     |
| Push direto em `main` | `feature/*` → `develop` |
|                       | `bugfix/*` → `develop`  |

---

### 📋 Convenção de Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) para manter o histórico organizado:

| Prefixo     | Quando usar         | Exemplo                                  |
| ----------- | ------------------- | ---------------------------------------- |
| `feat:`     | Nova funcionalidade | `feat: adiciona autenticação com Google` |
| `fix:`      | Correção de bug     | `fix: corrige cálculo de parcelas`       |
| `chore:`    | Manutenção, configs | `chore: atualiza dependências`           |
| `docs:`     | Documentação        | `docs: atualiza README`                  |
| `style:`    | Formatação, CSS     | `style: ajusta espaçamento do header`    |
| `refactor:` | Refatoração         | `refactor: extrai lógica de validação`   |
| `test:`     | Testes              | `test: adiciona testes de autenticação`  |

---

### 🛠️ Setup Inicial (para novos colaboradores)

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/partil-cnh.git
cd partil-cnh

# 2. Instalar dependências
pnpm install

# 3. Inicializar o Git Flow (aceite os padrões)
git flow init

# 4. Rodar o projeto
pnpm dev
```

---

## 📚 Saiba Mais

- [Next.js Documentation](https://nextjs.org/docs)
- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

## ☁️ Deploy

O deploy é feito automaticamente via GitHub Actions:

- **Staging** → Push para `develop`
- **Produção** → Push para `main`
