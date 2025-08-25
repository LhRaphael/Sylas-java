import React from 'react';

function Docs() {
  return (
    <div className="bg-slate-100/80 text-slate-800">
      {/* NOTA: Em um projeto React real, os links para fontes (Google Fonts),
        ícones (Font Awesome) e o script do Tailwind CSS devem ser adicionados
        ao arquivo `public/index.html` do seu projeto para que sejam carregados globalmente.
      */}

      {/* Main Container */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">

        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-4 border-b border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">Documentação do Projeto</h1>
          {/* Language Selector */}
          <div className="relative mt-4 sm:mt-0">
            <select className="appearance-none w-full sm:w-auto bg-white border border-slate-300 text-slate-700 py-2 pl-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Português (BR)</option>
              <option>English (US)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </header>

        {/* Organization Section */}
        <section id="organizacao" className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
            <i className="fas fa-sitemap text-xl text-blue-600"></i>
            Organização do Projeto
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <div className="flex items-center mb-4">
                <i className="fab fa-react text-3xl text-cyan-500 mr-4"></i>
                <h3 className="text-xl font-bold text-slate-800">Frontend</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Na pasta <code className="bg-slate-100 text-slate-800 font-mono text-sm px-2 py-1 rounded-md">'front'</code> está o frontend do projeto, feito com React.js.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li><i className="fas fa-folder-open text-yellow-500 w-5 mr-1"></i> front/</li>
                <li className="ml-4"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> node_modules/ - <span className="text-slate-500">Dependências do projeto instaladas pelo npm.</span></li>
                <li className="ml-4"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> public/ - <span className="text-slate-500">Arquivos públicos acessados pelo navegador.</span></li>
                <li className="ml-4"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> src/ - <span className="text-slate-500">Código-fonte do frontend (JS e React).</span></li>
                <li className="ml-8"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> apps/ - <span className="text-slate-500">Aplicações interativas do sistema.</span></li>
                <li className="ml-8"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> components/ - <span className="text-slate-500">Componentes estáticos e reutilizáveis.</span></li>
                <li className="ml-8"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> pages/ - <span className="text-slate-500">Páginas principais do sistema.</span></li>
                <li className="ml-8"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> services/ - <span className="text-slate-500">Requisições para o backend.</span></li>
                <li className="ml-8"><i className="fab fa-react text-cyan-400 w-5 mr-1"></i> App.js - <span className="text-slate-500">Arquivo principal, configura as rotas.</span></li>
                <li className="ml-8"><i className="fab fa-js-square text-yellow-400 w-5 mr-1"></i> index.js - <span className="text-slate-500">Ponto de entrada que renderiza o projeto.</span></li>
                <li className="ml-4"><i className="fas fa-file-code text-slate-400 w-5 mr-1"></i> package.json - <span className="text-slate-500">Configurações e scripts do projeto.</span></li>
                <li className="ml-4"><i className="fas fa-file-code text-slate-400 w-5 mr-1"></i> package-lock.json - <span className="text-slate-500">Versões exatas das dependências.</span></li>
              </ul>
            </div>

            {/* Backend Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <div className="flex items-center mb-4">
                    <i className="fas fa-server text-2xl text-green-600 mr-4"></i>
                    <h3 className="text-xl font-bold text-slate-800">Backend</h3>
                </div>
                <p className="text-slate-600 mb-4">
                    Na pasta <code className="bg-slate-100 text-slate-800 font-mono text-sm px-2 py-1 rounded-md">'back'</code> encontra-se o backend, distribuído em Java.
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                    <li><i className="fas fa-folder-open text-yellow-500 w-5 mr-1"></i> back/</li>
                    <li className="ml-4"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> Backend/ (Java/Spring)</li>
                    <li className="ml-8"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> src/main/java/com/example/Backend/</li>
                    <li className="ml-12"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> controller/ - <span className="text-slate-500">Controladores que recebem requisições.</span></li>
                    <li className="ml-12"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> service/ - <span className="text-slate-500">Implementa a lógica de negócio.</span></li>
                    <li className="ml-12"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> model/ - <span className="text-slate-500">Representação dos dados do projeto.</span></li>
                    <li className="ml-12"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> repository/ - <span className="text-slate-500">Responsáveis por acessar o banco de dados.</span></li>
                    <li className="ml-12"><i className="fas fa-folder text-yellow-500 w-5 mr-1"></i> config/ - <span className="text-slate-500">Configurações do projeto e dependências.</span></li>
                    <li className="ml-12"><i className="fab fa-java text-orange-500 w-5 mr-1"></i> BackendApplication.java - <span className="text-slate-500">Arquivo principal que inicia a aplicação.</span></li>
                </ul>
            </div>
          </div>
        </section>

        {/* Module Description Section */}
        <section id="modulos">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <i className="fas fa-puzzle-piece text-xl text-purple-600"></i>
                Descrição dos Módulos
            </h2>

           <div className="mb-12">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 border-b pb-3 flex items-center gap-3"><i className="fab fa-java text-2xl text-orange-500"></i> Backend (Java / Spring)</h3>
                
                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#config</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-8 pl-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">GeminiConfig.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> GeminiConfig</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Classe de configuração para os dados da API Gemini, injetados a partir do arquivo de propriedades.</p>
                        <p className="font-semibold text-sm mb-2">Atributos:</p>
                        <div className="code-block">@Value("${"{"}app.gemini.modelName{"}"}") private String modelName;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Injeta o nome do modelo Gemini a ser usado.</p>
                        <div className="code-block">@Value("${"{"}app.gemini.apiKey{"}"}") private String apiKey;</div>
                        <p className="text-xs text-slate-500 mt-1">Injeta a chave da API do Gemini.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">RestTemplateConfig.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> RestTemplateConfig</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Configuração do RestTemplate para fazer requisições HTTP.</p>
                        <p className="font-semibold text-sm mb-2">Métodos:</p>
                        <div className="code-block">public RestTemplate restTemplate()</div>
                        <p className="text-xs text-slate-500 mt-1">Cria e disponibiliza uma instância (Bean) do RestTemplate para ser usada em todo o projeto.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">WebConfig.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> WebConfig</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Configuração do Cross-Origin Resource Sharing (CORS) para a aplicação.</p>
                        <p className="font-semibold text-sm mb-2">Métodos:</p>
                        <div className="code-block">public void addCorsMappings(CorsRegistry registry)</div>
                        <p className="text-xs text-slate-500 mt-1">Permite requisições de origens específicas (http://localhost:3000) para qualquer rota da API, definindo os métodos e cabeçalhos permitidos.</p>
                    </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#controller</h4>
                <div className="bg-white p-6 rounded-lg shadow-sm border mb-8 ml-4">
                    <h5 className="font-bold text-md mb-2">GeminiController.java</h5>
                    <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> GeminiController</p>
                    <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Controlador responsável por expor um endpoint para receber as requisições do frontend e interagir com a API do Google Gemini.</p>
                    <p className="font-semibold text-sm mb-2">Métodos:</p>
                    <div className="code-block">@PostMapping("/gerar") public String gerarTexto(@RequestBody GeminiRequest request)</div>
                    <p className="text-xs text-slate-500 mt-1">Mapeia a rota POST /api/gerar. Recebe um objeto GeminiRequest no corpo da requisição e o encaminha para o GeminiService para processamento, retornando a resposta gerada.</p>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#model</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-8 pl-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Gemini.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> Gemini</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Componente responsável por interagir diretamente com a API do Google Gemini, construindo o cliente e gerando o conteúdo com base no prompt.</p>
                        <p className="font-semibold text-sm mb-2">Atributos:</p>
                        <div className="code-block">@Autowired private GeminiConfig config;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-3">Injeta as configurações (API Key e nome do modelo) necessárias para a comunicação com a API.</p>
                        <p className="font-semibold text-sm mb-2">Métodos:</p>
                        <div className="code-block">public GenerateContentResponse response(GeminiRequest prompt)</div>
                        <p className="text-xs text-slate-500 mt-1">Recebe um GeminiRequest, constrói o cliente da API do Google Gemini, e gera o conteúdo. Suporta tanto prompts de texto quanto prompts multimodais (texto e imagem).</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">GeminiRequest.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> GeminiRequest</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Modelo que representa os dados de uma requisição para a API do Google Gemini.</p>
                        <p className="font-semibold text-sm mb-2">Atributos:</p>
                        <div className="code-block">private String prompt;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-2">O texto do prompt a ser enviado para a IA.</p>
                        <div className="code-block">private String imageUri;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-2">A URI da imagem a ser enviada junto com o prompt (opcional).</p>
                        <div className="code-block">private String imageType = "image/jpeg";</div>
                        <p className="text-xs text-slate-500 mt-1 mb-3">O tipo MIME da imagem, com 'image/jpeg' como padrão.</p>
                        <p className="font-semibold text-sm mb-2">Métodos:</p>
                        <div className="code-block">@Data</div>
                        <p className="text-xs text-slate-500 mt-1">Anotação do Lombok que gera automaticamente os métodos getters, setters, toString, etc.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">GeminiResponse.java</h5>
                        <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> GeminiResponse</p>
                        <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Modelo que representa uma resposta da API do Google Gemini.</p>
                        <p className="font-semibold text-sm mb-2">Atributos:</p>
                        <div className="code-block">private String response;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-2">O texto gerado pela API.</p>
                        <div className="code-block">private String error;</div>
                        <p className="text-xs text-slate-500 mt-1 mb-3">Uma mensagem de erro, caso ocorra.</p>
                        <p className="font-semibold text-sm mb-2">Métodos:</p>
                        <div className="code-block">@Data</div>
                        <p className="text-xs text-slate-500 mt-1">Anotação do Lombok que gera automaticamente os métodos getters, setters, toString, etc.</p>
                    </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#service</h4>
                <div className="bg-white p-6 rounded-lg shadow-sm border ml-4">
                    <h5 className="font-bold text-md mb-2">GeminiService.java</h5>
                    <p className="text-sm text-slate-600 mb-3"><strong className="text-slate-700">Classe:</strong> GeminiService</p>
                    <p className="text-sm text-slate-600 mb-4"><strong>Descrição:</strong> Serviço que atua como intermediário entre o Controller e o componente Gemini, encapsulando a lógica de chamada da IA.</p>
                    <p className="font-semibold text-sm mb-2">Atributos:</p>
                    <div className="code-block">@Autowired private Gemini gemini;</div>
                    <p className="text-xs text-slate-500 mt-1 mb-3">Injeta a instância do componente Gemini para interagir com a API.</p>
                    <p className="font-semibold text-sm mb-2">Métodos:</p>
                    <div className="code-block">public String responseContent(GeminiRequest prompt)</div>
                    <p className="text-xs text-slate-500 mt-1">Recebe um objeto GeminiRequest, o repassa para o componente Gemini, e extrai e retorna o texto da resposta gerada.</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6 border-b pb-3 flex items-center gap-3"><i className="fab fa-react text-2xl text-cyan-500"></i> Frontend (React)</h3>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#public</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-8 pl-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">apps.json</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> arquivo onde estão listados os apps que o sistema possui para uso.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">index.html</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> arquivo principal do front-end.</p>
                    </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#apps</h4>
                <div className="bg-white p-6 rounded-lg shadow-sm border mb-8 ml-4">
                    <h5 className="font-bold text-md mb-2">IA.jsx</h5>
                    <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente React IA, que renderiza uma interface de chat simples. A interface inclui um título, uma área para exibir mensagens e um formulário para o usuário digitar um prompt. Ao submeter, o componente envia o texto para a API, gerencia o estado de carregamento e exibe a resposta ou uma mensagem de erro.</p>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#components</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-8 pl-4">
                     <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Bar.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente Bar. Ao ser montado, ele busca dados de um arquivo local (apps.json) para obter uma lista de aplicativos e renderiza um botão para cada um. Quando um botão é clicado, ele informa o componente pai qual aplicativo foi selecionado.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Display.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente Display, que funciona como um contêiner genérico para renderizar qualquer conteúdo ou componente filho passado a ele.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Footer.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente Footer, que renderiza um rodapé estático para o site, exibindo uma mensagem de copyright com o ano atual dinâmico.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Header.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente Header, que cria o cabeçalho do site com o título "Sylas" e links de navegação para as páginas "Início" e "Sobre".</p>
                    </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-700 mb-4 ml-4">#pages</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-8 pl-4">
                     <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Home.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente Home, a página principal. Ele gerencia quais "aplicativos" estão visíveis, usando o Display para mostrar o conteúdo e a Bar para alternar a visibilidade dos apps.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">About.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Este arquivo define o componente `About`, que renderiza uma página estática com informações e uma breve descrição sobre o projeto.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h5 className="font-bold text-md mb-2">Docs.jsx</h5>
                        <p className="text-sm text-slate-600"><strong>Descrição:</strong> Define o componente `Docs`, que renderiza a documentação do projeto, incluindo a organização do código e a descrição dos módulos.</p>
                    </div>
                    
                </div>
            </div>

        </section>

      </div>
    </div>
  );
}

export default Docs;