# **Dragon Ball Z Quotes**

<p align="center">
 <img src="dbz_quotes.png?raw=true" alt="Frases do DragonBall Z" width="70%" height="50% />
</p>
  

## **Objetivo**
Este repositório é um projeto que combina **ReactJS** e **Python** para criar um site que exibe citações icônicas de **Dragon Ball Z**. O backend é uma API em **Flask** que fornece as frases, e o frontend em **ReactJS** consome essas citações e as exibe de maneira interativa.


## **Estrutura do Projeto**

A estrutura de arquivos do repositório é a seguinte:

```bash
├── README.md                # Documentação do repositório
├── LICENSE                  # Licença do projeto
├── api-flask/               # Código da API Flask
│   ├── app.py               # Arquivo principal da API
│   └── quotes.json          # Base de dados com as citações
├── public/                  # Arquivos públicos (imagens, HTML estático)
├── src/                     # Código-fonte em ReactJS
│   ├── App.js               # Componente principal da aplicação
│   └── index.js             # Arquivo de entrada do React
├── .env                     # Variáveis de ambiente para configuração
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── dbz_quotes.png           # Imagem de capa do projeto
├── package.json             # Configurações do projeto ReactJS
└── package-lock.json        # Dependências fixadas do Node.js
```


## **Como Usar**

### **Requisitos**
1. **Python 3.x** com **Flask** instalado.
2. **Node.js** e **npm** (para o frontend em React).

### **1. Clonando o Repositório**

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/jacivaldocarvalho/dragonball-z-quotes.git
cd dragonball-z-quotes
```

### **2. Configurando o Backend (Flask)**

1. Crie um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

2. Instale as dependências:

```bash
pip install -r api-flask/requirements.txt
```

### **3. Configurando o Frontend (React)**

1. Navegue até o diretório `src/` e instale as dependências do frontend:

```bash
cd src
npm install
```

### **4. Rodando o Backend (API Flask)**

Inicie o backend:

```bash
python api-flask/app.py
```

A API estará acessível em `http://localhost:5000`.

### **5. Rodando o Frontend (React)**

Inicie o servidor do React:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.


## **Evoluções Possíveis para o Projeto**

### 1. **Adição de Mais Citações**
Adicione mais citações ao arquivo `quotes.json`, permitindo que a base de dados de frases cresça com mais conteúdo dinâmico.

### 2. **Estilização Avançada com CSS Frameworks**
Implemente um framework como **Tailwind CSS** ou **Bootstrap** para uma estilização mais sofisticada e responsiva da interface.

### 3. **Integração com Banco de Dados**
Em vez de usar um arquivo estático para armazenar as citações, migre para um banco de dados como **MongoDB** ou **PostgreSQL** para permitir uma gestão mais flexível das frases.

### 4. **Sistema de Votação de Frases**
Adicione uma funcionalidade onde os usuários podem votar nas frases, permitindo exibir as mais populares no topo.

### 5. **Autenticação de Usuário**
Adicione autenticação de usuário com **JWT** ou **OAuth** para que os fãs possam salvar suas citações favoritas e compartilhar com outros.

## Contribuições

Se você tiver sugestões de melhorias ou encontrar problemas com o script, sinta-se à vontade para abrir um **issue** ou submeter um **pull request**.

## Contatos e Network

- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/jacivaldocarvalho/) 👔
- **E-mail**: [E-mail](mailto:jacivaldocarvalho@gmail.com) 📧
- **GitHub**: [GitHub](https://github.com/jacivaldocarvalho) 🐙
- **Medium**: [Medium](https://medium.com/@jacivaldocarvalho) ✍️

Sempre aberto a novas conexões e oportunidades de aprendizado!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## **Referências Bibliográficas**

- [Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/)
- [ReactJS Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)
- [Dragon Ball Z Official Website](https://www.dragonballz.com/)

