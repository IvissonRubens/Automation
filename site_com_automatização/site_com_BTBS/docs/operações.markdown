## Primeiros passos para fazer o package.json

Para iniciar o progresso vc primeiro ira no caminho do seu programa e executará esse comando.
```
npm init -y
```

Isso criará um arquivo json, então adicione uma linha escrita: `"type": "module",` entre as linhas `directtories` e `main`

Logo após que vc acrecentou essa linha vc terá que digitar no terminal:
```
npm i mysql2
```
rode mais um codigo:

```
npm install express@4
```


# Quando estiver no fim do código

Vc irá executar o dev que vc pos no `package.js` pondo no terminal:
```
npm run dev
```


# Erro "EADDRINUSE: address already in use" no Node.js

## O Problema
Ao tentar iniciar o servidor com `npm run dev`, ocorreu o seguinte erro:

Isso significa que a porta **8080** já estava em uso por outro processo, impedindo o servidor de rodar.

---

## ✅ Solução
Para resolver o problema, seguimos os seguintes passos:

### **1️⃣ Identificar o processo que está usando a porta 8080**
Rodamos o seguinte comando no terminal:
```bash
lsof -i :8080
