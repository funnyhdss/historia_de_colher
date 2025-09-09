# 🍴 Histórias de Colher  

Aplicativo mobile feito em **React Native** e **Expo**, que apresenta um catálogo de receitas ilustradas com dicas, tempo de preparo e instruções. O objetivo é compartilhar receitas de forma prática, rápida e visualmente atrativa.
A intenção do Projeto foi testar nosso conhecimento em react native, com o tema sendo livre.
---

## 🚀 Funcionalidades  

- 📜 **Catálogo de receitas** exibido em cartões interativos  
- 🖼️ Cada receita contém **imagem, nome, dica, tempo de preparo e instruções**  
- 🎨 Interface estilizada com **React Native + StyleSheet**  
- 📂 Receitas organizadas em um **arquivo JSON**, facilitando manutenção e expansão  

---

## 🛠️ Tecnologias Utilizadas  

- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/)  
- [Expo Router](https://expo.github.io/router/docs/)  
- [React Navigation Elements](https://reactnavigation.org/)  

---

## 📂 Estrutura do Projeto  

```
.
├── components/
│   ├── Card.tsx          # Componente para exibir cada receita
│   └── CatalogoScreen.tsx # Tela principal do catálogo
├── catalogo.json          # Base de dados com receitas
├── App.tsx                # Ponto de entrada do app
├── RootLayout.tsx         # Configuração inicial de navegação
```

---

## ▶️ Como Rodar o Projeto  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/historias-de-colher.git
   cd historias-de-colher
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Inicie o servidor Expo:  
   ```bash
   npm start
   ```

## 📖 Exemplo de Receita (JSON)  

```json
{
  "id": 1,
  "nome": "Pipoca Doce",
  "dica": "Sugestão: Diminua a quantidade de açúcar inserida, e ao final adicione leite ninho e leite condensado por cima",
  "tempo": 6,
  "receita": "Você precisa de: óleo, milho de pipoca, açúcar (até cobrir as sementes) e panela. Adicione tudo na panela junto, acenda em fogo alto, mexa até estar pronto e sirva.",
  "urlImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6PFoZ_i_nOZR9l1ix9tjJdIFm5N9AB5oSQ&s"
}
```

---

## 📌 Próximos Passos  

- [ ] Adicionar busca e filtros (tempo, ingredientes, etc.)  
- [ ] Criar tela detalhada de cada receita  
- [ ] Permitir que usuários adicionem novas receitas  

---

## 👨‍💻 Autor  

Feito por **Heitor Schutz**  
