# Projeto de Adoção de Pets 🐾

*Este é um projeto web que permite a visualização e cadastro de pets para adoção, oferecendo uma interface amigável e responsiva para facilitar o processo de adoção de animais de estimação.*

*Este projeto visa promover a adoção de animais de estimação, permitindo que os usuários explorem uma lista de pets disponíveis, vejam suas características e realizem uma inscrição para adoção. Além disso, há uma seção de contato onde os usuários podem enviar mensagens.*

##### Tecnologias Utilizadas:

- **React.js:** *Biblioteca principal para a construção da interface.*
- **Swiper.js:** *Biblioteca para carrosséis e slides interativos.*
- **SCSS:** *Pré-processador CSS para estilização e organização dos estilos.*
- **React Icons:** *Ícones utilizados na interface para indicação visual.*

##### Instalação e Configuração:

- **Clone o repositório:**

```
git clone https://github.com/fmascena-dev/adocao_digital_frontend.git
```

- **Navegue até o diretório do projeto:**

```
cd adocao_digital
```

- **Instale as dependências do projeto:**

```
npm install
```

- **Execute o projeto localmente:**

```
npm start
```

*O projeto estará disponível em* `http://localhost:3000`

###### **Estrutura de Componentes:**

1. **Adocao.jsx**

- Exibe uma lista de pets disponíveis para adoção usando um carrossel.

- Cada pet possui informações como espécie, data de nascimento, descrição, status, tamanho, peso e personalidade.

- Permite ao usuário selecionar um pet para adoção e exibe uma mensagem de confirmação.

- Dependências: Swiper.js, GrStatusGoodSmall (React Icons).

2. **Cadastro.jsx**

- Formulário para cadastro de adotantes, com campos obrigatórios como nome, email, CPF, telefone e endereço.

- Inclui validações para assegurar que todos os campos necessários estão preenchidos.

- Props: addAdopter (função que recebe os dados do adotante).

- Dependências: PropTypes para validação de propriedades.

3. **Conheca.jsx**

- Seção para visualização dos pets disponíveis, com foco em fornecer uma interface interativa com o carrossel de pets.

- As informações de cada pet incluem nome, espécie, data de nascimento, descrição e outras características.

- Dependências: Swiper.js.

4. **Contato.jsx**

- Formulário de contato onde o usuário pode enviar uma mensagem sobre dúvidas ou feedback.

- Os campos obrigatórios incluem nome, email, telefone e mensagem.

- Exibe uma mensagem de sucesso após o envio e limpa o formulário.

- Campos: Nome, E-mail, Telefone, Assunto e Mensagem.

**Estilos:**

- Todos os componentes estão estilizados utilizando SCSS. Cada componente possui um arquivo .scss correspondente com o mesmo nome do componente:

    - **Footer.scss**
    - **Header.scss**
    - **Main.jsx**
    - **Adocao.scss**
    - **Cadastro.scss**
    - **Conheca.scss**
    - **Contato.scss**
    - **Global.scss**

- Os estilos foram organizados para manter consistência entre as seções, com classes específicas para cada elemento e uso de cores e fontes harmonizadas.

##### Como Contribuir:

`Faça um fork do projeto.`

- Crie uma branch para a nova funcionalidade:

```
git checkout -b minha-nova-funcionalidade
```

- Commit as mudanças:

```
git commit -m "Adiciona nova funcionalidade"
```

- Faça o push para a branch:

```
git push origin minha-nova-funcionalidade
```

- Abra um Pull Request para o projeto original.

###### **Licença**

`Este projeto está licenciado sob a MIT License.`