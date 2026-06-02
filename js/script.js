/* ============================================================
   Felipe Santos - Portfolio
   ============================================================ */

const translations = {
  pt: {
    "meta.title": "Felipe Santos",
    "meta.description": "Felipe Santos",
    "skipLink": "Pular para o conteúdo",

    "hero.title": "Cientista de Dados",
    "hero.tagline": "Transformo grande volume de dados em soluções estratégicas e informações que direcionam o futuro dos negócios.",

    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.contact": "Contato",

    "labs.title": "Labs",
    "labs.subtitle": "Mini-demos client-side",

    "lab.nlp.title": "Análise de texto em tempo real",
    "lab.nlp.placeholder": "Cole ou digite um texto aqui (idealmente várias sentenças separadas por ponto)",
    "lab.nlp.m1": "tokens",
    "lab.nlp.m2": "vocabulário único",
    "lab.nlp.m3": "sentenças",
    "lab.nlp.bigrams": "Top bigramas",
    "lab.nlp.tfidf": "Top termos por TF-IDF",
    "lab.cos.title": "Similaridade entre frases",
    "lab.cos.ph1": "Frase 1",
    "lab.cos.ph2": "Frase 2",
    "lab.cos.score": "Similaridade",
    "lab.reg.title": "Regressão linear (OLS)",
    "lab.reg.hint": "Clique no gráfico para adicionar pontos. Clique em cima de um ponto para remover.",
    "lab.reg.demo": "Exemplo",
    "lab.reg.clear": "Limpar",
    "lab.corr.title": "Correlação de Pearson",
    "lab.tt.title": "Teste t (p-valor)",
    "lab.tt.lblA": "Amostra A",
    "lab.tt.lblB": "Amostra B",
    "lab.ab.title": "Teste A/B",
    "lab.ab.varA": "Variante A (visitantes)",
    "lab.ab.varB": "Variante B (visitantes)",
    "lab.ab.conv": "conversões",
    "lab.ab.lift": "lift B vs A",

    "lab.cm.title": "Matriz de confusão",
    "lab.cm.hint": "Ajuste TP/FP/TN/FN e veja accuracy, precision, recall e F1 em tempo real.",
    "lab.cm.predicted": "Previsto",
    "lab.cm.actual": "Real",
    "lab.cm.pos": "Positivo",
    "lab.cm.neg": "Negativo",

    "lab.km.title": "K-Means visual",
    "lab.km.hint": "Clique no gráfico para adicionar pontos. Escolha K e rode o algoritmo.",
    "lab.km.run": "Rodar",
    "lab.km.random": "Aleatório",
    "lab.km.clear": "Limpar",
    "lab.km.pts": "pontos",
    "lab.km.iter": "iterações",
    "lab.km.iner": "inércia",

    "lab.sa.title": "Análise de sentimento",
    "lab.sa.hint": "Cole uma frase. Palavras positivas em verde, negativas em vermelho.",
    "lab.sa.placeholder": "Adorei o atendimento! Foi rápido e eficiente.",
    "lab.sa.pos": "palavras positivas",
    "lab.sa.neg": "palavras negativas",
    "lab.sa.label": "sentimento",

    "lab.bayes.title": "Teorema de Bayes",
    "lab.bayes.hint": "Exemplo clássico: probabilidade de ter uma doença dado teste positivo.",
    "lab.bayes.prior": "probabilidade da hipótese",
    "lab.bayes.tpr": "sensibilidade (verdadeiro positivo)",
    "lab.bayes.fpr": "falso positivo",

    "actions.resume": "Currículo",
    "actions.theme": "Tema",
    "actions.viewFullResume": "Ver currículo completo",

    "stack.title": "Stack do dia a dia",
    "stack.hint": "Clique em um item para ver os detalhes.",
    "stack.pyEco": "Ecossistema Python:",

    "about.p1": "Formado em <strong>Ciência da Computação</strong> e foco no desenvolvimento de soluções analíticas completas. Tenho orgulho de transformar dados brutos e jornadas complexas em inteligência de negócio e eficiência operacional. Meu trabalho se destaca na intersecção entre a <strong>precisão estatística</strong> e a <strong>engenharia de dados</strong>, onde modelos preditivos encontram pipelines escaláveis para antecipar cenários e resolver problemas reais.",
    "about.p2": "Atualmente, faço parte do departamento de <strong>Ouvidoria do Banco Bradesco</strong>, onde atuo no desenvolvimento de inteligência de dados para entender a jornada do cliente, otimizar processos e ajudar os times estratégicos a atuarem de forma preditiva.",
    "about.p3": "Minha jornada na tecnologia começou automatizando tarefas com <strong>VBA e Excel</strong> em um laboratório de ensaios. Essa experiência me mostrou o poder da automação e me inspirou a cursar a graduação em Ciência da Computação (concluída em 2025). Desde então, passei a estudar conceitos e ferramentas para projetar arquiteturas de dados mais robustas, aplicando técnicas de <strong>Machine Learning</strong> para gerar informações úteis para o negócio. Atualmente, estou aprofundando meus estudos em <strong>estatística aplicada</strong> para aprimorar ainda mais minhas habilidades na área de dados. Confira estudos recentes em <a href=\"#\" data-action=\"open-labs\" class=\"about-labs-link\">Labs<i class=\"bi bi-arrow-up-right\"></i></a>.",

    "exp.r1.period": "JAN 2026 - ATUAL",
    "exp.r1.role": "Analista de Informações Gerenciais Jr.",
    "exp.r1.desc": "Projetos com IA Generativa, estudos mais aprofundados e analytics estratégicos para Ouvidoria, com reporte para outros departamentos.",

    "exp.r2.period": "DEZ 2024 - DEZ 2025",
    "exp.r2.role": "Analista Assistente",
    "exp.r2.desc": "Modelagem em NLP não supervisionada e engenharia de dados sobre arquitetura Medallion, com atualização incremental e ingestão automatizada de dados regulatórios.",

    "exp.r3.period": "FEV 2024 - DEZ 2024",
    "exp.r3.role": "Estagiário",
    "exp.r3.desc": "Início da carreira em dados: classificação supervisionada e estatística inferencial aplicada a textos de reclamações.",

    "exp.r4.period": "FEV 2020 - FEV 2024",
    "exp.r4.role": "Assistente de TI",
    "exp.r4.company": " · ITEN - Instituto Tecnológico de Ensaios",
    "exp.r4.desc": "Automação de ensaios e geração de relatórios em conformidade com normas NBR, ISO e IEC. Cálculos de incerteza de medição assegurando padronização e consistência dos resultados, com foco em reduzir retrabalho, acelerar a emissão de laudos e diminuir erros nas informações.",
    "exp.r4.tag.norms": "Normas NBR / ISO / IEC",
    "exp.r4.tag.metro": "Metrologia",

    "exp.proj1.t": "Instância Zero",
    "exp.proj1.d": "Estudo que possibilita uma visão 360° da jornada do cliente antes de registrar uma manifestação, viabilizando estratégias preditivas para reduzir volume de reclamações e exposição em órgãos externos (Bacen, Procon, Ações Cíveis).",
    "exp.proj1.body": "<p>Elaborado por meio de pipeline com tratamentos, cruzamentos e ingestões de dados em execução paralela, conectando informações das centrais de atendimento da URA, logs dos Totens de agências e conversas em canais digitais (BIA/chat) à base de reclamações SACL.</p><p>Com isso, é possível visualizar a jornada completa do cliente - sequência de canais percorridos desde a instância zero até órgãos externos, identificação de derivações para atendimento humano, análise de migração e vazamento entre canais, e perfilamento por dados cadastrais e segmentação bancária.</p><p class=\"bullet-result\" data-i18n=\"exp.proj1.result\"><strong>Entrega:</strong> dashboard executivo alimentados por job diário automatizado com processamento incremental.</p>",
    "exp.proj1.result": "<strong>Entrega:</strong> dashboard executivo alimentados por job diário automatizado com processamento incremental.",

    "exp.proj2.t": "Compliance regulatório - Análise de minutas",
    "exp.proj2.d": "Solução para análise automatizada de minutas do canal BACEN, integrando web scraping, processamento de linguagem natural e arquitetura RAG.",
    "exp.proj2.body": "<ul><li>Extração automatizada de aproximadamente 12 mil normativos do Banco Central via web scraping, com ingestão estruturada em Delta Tables.</li><li>Geração de representações semânticas dos textos normativos e criação de índice no Vector Search, permitindo recuperação das 5 normas mais relevantes para cada minuta submetida.</li><li>Orquestração de um agente que recebe a minuta, consulta a base vetorial, avalia a aderência regulatória, gera recomendações de adequação e devolve a minuta corrigida com referências normativas.</li></ul><p class=\"bullet-result\" data-i18n=\"exp.proj2.result\"><strong>Resultado:</strong> Redução do esforço manual de análise de conformidade, padronização das recomendações regulatórias e auditabilidade integral do processo decisório do agente.</p>",
    "exp.proj2.result": "<strong>Resultado:</strong> Redução do esforço manual de análise de conformidade, padronização das recomendações regulatórias e auditabilidade integral do processo decisório do agente.",

    "exp.proj3.t": "Detecção de influencers",
    "exp.proj3.d": "Detecção de padrões textuais repetitivos em reclamações oriundas do Consumidor.gov.br e BACEN, indicativos de atuação coordenada por escritórios de advocacia, assessorias ou agentes externos.",
    "exp.proj3.body": "<p>A solução emprega modelagem não supervisionada com vetorização TF-IDF (unigramas e bigramas), similaridade de cosseno calculada em chunks para otimização de memória, e clusterização via DBSCAN com atribuição incremental a centroides existentes. O fluxo opera em dois modos - execução diária incremental (append de novos casos com janela de 180 dias) e reprocessamento completo sob demanda - com artefatos versionados (vectorizer, centroides, scaler) e tabela de controle de execuções. Entregue um dashboard de monitoramento diário para as áreas atuarem.</p><p class=\"bullet-result\" data-i18n=\"exp.proj3.result\"><strong>Resultado:</strong> Ao saber que um cluster com x protocolos compartilha o mesmo padrão textual e provável origem comum, a área pode definir uma resposta institucional unificada ao invés de tratar caso a caso, otimizando esforço operacional.</p>",
    "exp.proj3.result": "<strong>Resultado:</strong> Ao saber que um cluster com x protocolos compartilha o mesmo padrão textual e provável origem comum, a área pode definir uma resposta institucional unificada ao invés de tratar caso a caso, otimizando esforço operacional.",

    "exp.proj4.t": "Classificação Automática de Temas FEBRABAN",
    "exp.proj4.d": "Desenvolvimento e implantação de modelo para classificação automática de reclamações internas na taxonomia FEBRABAN, substituindo processo manual previamente executado por analista especializado da equipe de dados.",
    "exp.proj4.body": "<p>O processo anterior dependia de mapeamento visual - o analista avaliava individualmente cada categorização interna das reclamações e determinava, com base em sua experiência, a correspondência mais adequada com as categorias FEBRABAN. Essa abordagem, além de consumir horas de trabalho qualificado, concentrava conhecimento crítico em uma única pessoa e não escalava com o crescimento do volume.</p><p>A solução utiliza o histórico de classificações realizadas por esse analista como base de treino para um modelo Random Forest, capturando os padrões de decisão acumulados ao longo do tempo. O modelo resultante atinge <strong>acurácia de 97%</strong>, reproduzindo com alta fidelidade o julgamento especializado.</p>",
    "exp.proj4.result": "",
    "exp.proj5.t": "Análise estatística de reclamações BACEN",
    "exp.proj5.d": "qui-quadrado sobre textos procedentes vs. improcedentes para identificar unigramas e bigramas mais associados à procedência.",
    "exp.proj6.t": "Fluxos automatizados",
    "exp.proj6.d": "pipelines em arquitetura Medallion (bronze/silver/gold) no Databricks; automação da ingestão de dados regulatórios do BACEN.",
    "exp.proj7.t": "Automações",
    "exp.proj7.d": "criação e manutenção de scripts em Python utilizados por diversas equipes (distribuição automática de demandas, envio de e-mails, web scraping e outras rotinas internas).",

    "proj.p1.t": "Agente LLM para análise regulatória (RAG)",
    "proj.p1.d": "Pipeline completo de RAG sobre ~12k normativos do BACEN: scraping, embeddings multilingual, Vector Search e agente LLM que avalia conformidade e devolve a minuta corrigida com destaques.",
    "proj.p2.t": "Instância Zero - jornada do cliente",
    "proj.p2.d": "Reconstrução da jornada do cliente cruzando URA, totens de agências e canais digitais com reclamações. Pipeline diário em PySpark/Databricks entregando dashboard executivo em Power BI.",
    "proj.p3.t": "Classificação de temas Febraban (97% acc)",
    "proj.p3.d": "Modelo de Random Forest mapeando os temas Febraban para a taxonomia interna do banco, alcançando 97% de acurácia em produção e reduzindo a curadoria manual.",
    "proj.p4.t": "Detecção de influencers (TF-IDF + DBSCAN)",
    "proj.p4.d": "Modelagem não supervisionada com TF-IDF, similaridade de cosseno e DBSCAN, com atualização incremental versionada e visualização em dashboard dedicado.",
    "proj.more": "Ver mais projetos no GitHub",

    "skills.langs": "Linguagens & libs",
    "skills.ml": "Machine Learning",
    "skills.ml.fe": "Feature Engineering",
    "skills.ml.cv": "Validação Cruzada",
    "skills.ml.tune": "Tuning de Hiperparâmetros",
    "skills.nlp.emb": "Embeddings Multilingual",
    "skills.nlp.cos": "Similaridade de Cosseno",
    "skills.nlp.agents": "Agentes LLM",
    "skills.nlp.scrape": "Web Scraping",
    "skills.stats": "Estatística",
    "skills.stats.ht": "Testes de Hipóteses",
    "skills.stats.corr": "Correlação (Pearson)",
    "skills.stats.ts": "Séries Temporais",
    "skills.platforms": "Plataformas",
    "skills.platforms.excel": "Excel Avançado",
    "skills.certs": "Certificações",

    "contact.title": "Vamos conversar?",
    "contact.body": "Estou aberto a novas oportunidades no universo dos dados. Se você tem um projeto interessante ou só quer trocar uma ideia, entre em contato."
  },

  en: {
    "meta.title": "Felipe Santos",
    "meta.description": "Felipe Santos",
    "skipLink": "Skip to content",

    "hero.title": "Data Scientist",
    "hero.tagline": "I turn large volumes of data into strategic solutions and insights that shape the future of business.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "labs.title": "Labs",
    "labs.subtitle": "Client-side mini demos",

    "lab.nlp.title": "Real-time text analysis",
    "lab.nlp.placeholder": "Paste or type a text here (ideally several sentences separated by periods)",
    "lab.nlp.m1": "tokens",
    "lab.nlp.m2": "unique vocabulary",
    "lab.nlp.m3": "sentences",
    "lab.nlp.bigrams": "Top bigrams",
    "lab.nlp.tfidf": "Top terms by TF-IDF",
    "lab.cos.title": "Sentence similarity",
    "lab.cos.ph1": "Sentence 1",
    "lab.cos.ph2": "Sentence 2",
    "lab.cos.score": "Similarity",
    "lab.reg.title": "Linear regression (OLS)",
    "lab.reg.hint": "Click the chart to add points. Click on an existing point to remove it.",
    "lab.reg.demo": "Sample",
    "lab.reg.clear": "Clear",
    "lab.corr.title": "Pearson correlation",
    "lab.tt.title": "t-test (p-value)",
    "lab.tt.lblA": "Sample A",
    "lab.tt.lblB": "Sample B",
    "lab.ab.title": "A/B test",
    "lab.ab.varA": "Variant A (visitors)",
    "lab.ab.varB": "Variant B (visitors)",
    "lab.ab.conv": "conversions",
    "lab.ab.lift": "lift B vs A",

    "lab.cm.title": "Confusion matrix",
    "lab.cm.hint": "Tweak TP/FP/TN/FN and watch accuracy, precision, recall and F1 update live.",
    "lab.cm.predicted": "Predicted",
    "lab.cm.actual": "Actual",
    "lab.cm.pos": "Positive",
    "lab.cm.neg": "Negative",

    "lab.km.title": "K-Means visual",
    "lab.km.hint": "Click the chart to add points. Pick K and run the algorithm.",
    "lab.km.run": "Run",
    "lab.km.random": "Random",
    "lab.km.clear": "Clear",
    "lab.km.pts": "points",
    "lab.km.iter": "iterations",
    "lab.km.iner": "inertia",

    "lab.sa.title": "Sentiment analysis",
    "lab.sa.hint": "Paste a sentence. Positive words in green, negative words in red.",
    "lab.sa.placeholder": "I loved the service! It was fast and efficient.",
    "lab.sa.pos": "positive words",
    "lab.sa.neg": "negative words",
    "lab.sa.label": "sentiment",

    "lab.bayes.title": "Bayes' Theorem",
    "lab.bayes.hint": "Classic example: probability of having a disease given a positive test.",
    "lab.bayes.prior": "hypothesis probability",
    "lab.bayes.tpr": "sensitivity (true positive)",
    "lab.bayes.fpr": "false positive",

    "actions.resume": "Resume",
    "actions.theme": "Theme",
    "actions.viewFullResume": "View full resume",

    "stack.title": "Daily stack",
    "stack.hint": "Click an item to see the details.",
    "stack.pyEco": "Python ecosystem:",

    "about.p1": "<strong>Computer Science</strong> graduate focused on building end-to-end analytical solutions. I take pride in turning raw data and complex journeys into business intelligence and operational efficiency. My work thrives at the intersection of <strong>statistical rigor</strong> and <strong>data engineering</strong>, where predictive models meet scalable pipelines to anticipate scenarios and solve real-world problems.",
    "about.p2": "I'm currently part of the <strong>Banco Bradesco Ombudsman</strong> department, where I develop data intelligence to understand the customer journey, optimize processes and help strategic teams act predictively.",
    "about.p3": "My journey in tech began by automating tasks with <strong>VBA and Excel</strong> at a testing laboratory. That experience showed me the power of automation and inspired me to pursue a degree in Computer Science (completed in 2025). Since then, I've been studying concepts and tools to design more robust data architectures, applying <strong>Machine Learning</strong> techniques to generate useful business information. I'm currently deepening my studies in <strong>applied statistics</strong> to further sharpen my skills in the data field. Check out recent studies in <a href=\"#\" data-action=\"open-labs\" class=\"about-labs-link\">Labs<i class=\"bi bi-arrow-up-right\"></i></a>.",

    "exp.r1.period": "JAN 2026 - PRESENT",
    "exp.r1.role": "Jr. Management Information Analyst",
    "exp.r1.desc": "Generative-AI projects, deeper studies and strategic analytics for the Ombudsman team, with reporting to other departments.",

    "exp.r2.period": "DEC 2024 - DEC 2025",
    "exp.r2.role": "Assistant Analyst",
    "exp.r2.desc": "Unsupervised NLP modeling and data engineering on the Medallion architecture, with incremental updates and automated regulatory data ingestion.",

    "exp.r3.period": "FEB 2024 - DEC 2024",
    "exp.r3.role": "Intern",
    "exp.r3.desc": "Start of my data career: supervised classification and inferential statistics applied to complaint texts.",

    "exp.r4.period": "FEB 2020 - FEB 2024",
    "exp.r4.role": "IT Assistant",
    "exp.r4.company": " · ITEN - Technological Testing Institute",
    "exp.r4.desc": "Automation of laboratory tests and report generation in compliance with NBR, ISO and IEC standards. Measurement-uncertainty calculations ensuring standardization and consistency of results, focused on reducing rework, accelerating report issuance and minimizing errors.",
    "exp.r4.tag.norms": "NBR / ISO / IEC Standards",
    "exp.r4.tag.metro": "Metrology",

    "exp.proj1.t": "Instance Zero",
    "exp.proj1.d": "Study that enables a 360° view of the customer journey before a complaint is filed, supporting predictive strategies to reduce complaint volume and exposure to external bodies (Bacen, Procon, civil lawsuits).",
    "exp.proj1.body": "<p>Built on a pipeline with parallel-execution data treatments, cross-references and ingestions, connecting IVR contact-center data, branch kiosk logs and digital-channel conversations (BIA/chat) to the SACL complaints base.</p><p>Reveals the full customer journey — the sequence of channels visited from the first interaction up to external bodies, identification of human-handover branches, channel migration and leakage analysis, plus profiling by demographics and banking segmentation.</p><p class=\"bullet-result\" data-i18n=\"exp.proj1.result\"><strong>Delivery:</strong> executive dashboards fed by an automated daily job with incremental processing.</p>",
    "exp.proj1.result": "<strong>Delivery:</strong> executive dashboards fed by an automated daily job with incremental processing.",

    "exp.proj2.t": "Regulatory compliance - Draft analysis",
    "exp.proj2.d": "Solution for automated analysis of BACEN-channel drafts, integrating web scraping, natural language processing and a RAG architecture.",
    "exp.proj2.body": "<ul><li>Automated extraction of approximately 12,000 Central Bank regulations via web scraping, with structured ingestion into Delta Tables.</li><li>Generation of semantic representations of the regulatory texts and creation of a Vector Search index, allowing retrieval of the 5 most relevant rules for each submitted draft.</li><li>Orchestration of an agent that receives the draft, queries the vector base, assesses regulatory adherence, generates recommendations and returns the corrected draft with regulatory references.</li></ul><p class=\"bullet-result\" data-i18n=\"exp.proj2.result\"><strong>Result:</strong> reduction of manual compliance-analysis effort, standardization of regulatory recommendations and full auditability of the agent's decision process.</p>",
    "exp.proj2.result": "<strong>Result:</strong> reduction of manual compliance-analysis effort, standardization of regulatory recommendations and full auditability of the agent's decision process.",

    "exp.proj3.t": "Influencer detection",
    "exp.proj3.d": "Detection of repetitive textual patterns in complaints originating from Consumidor.gov.br and BACEN, indicating coordinated activity by law firms, advisors or external agents.",
    "exp.proj3.body": "<p>The solution employs unsupervised modeling with TF-IDF vectorization (unigrams and bigrams), cosine similarity computed in chunks for memory optimization, and DBSCAN clustering with incremental assignment to existing centroids. The pipeline operates in two modes - daily incremental run (appending new cases over a 180-day window) and full reprocessing on demand - with versioned artifacts (vectorizer, centroids, scaler) and an execution-control table. Delivers a daily monitoring dashboard for the operating teams.</p><p class=\"bullet-result\" data-i18n=\"exp.proj3.result\"><strong>Result:</strong> once we know a cluster of x protocols shares the same textual pattern and a likely common origin, the team can define a unified institutional response instead of handling each case individually, optimizing operational effort.</p>",
    "exp.proj3.result": "<strong>Result:</strong> once we know a cluster of x protocols shares the same textual pattern and a likely common origin, the team can define a unified institutional response instead of handling each case individually, optimizing operational effort.",

    "exp.proj4.t": "Automatic Classification of FEBRABAN Topics",
    "exp.proj4.d": "Development and deployment of a model for automatic classification of internal complaints into the FEBRABAN taxonomy, replacing a manual process previously performed by a specialist analyst on the data team.",
    "exp.proj4.body": "<p>The previous process relied on visual mapping - the analyst individually assessed each internal complaint categorization and determined, based on their experience, the most appropriate match with the FEBRABAN categories. Beyond consuming hours of qualified work, this approach concentrated critical knowledge in a single person and did not scale with growing volume.</p><p>The solution uses the analyst's classification history as training data for a Random Forest model, capturing the decision patterns accumulated over time. The resulting model achieves <strong>97% accuracy</strong>, faithfully reproducing the specialist's judgment.</p>",
    "exp.proj4.result": "",
    "exp.proj5.t": "BACEN complaints - statistical analysis",
    "exp.proj5.d": "chi-square tests on valid vs. invalid complaint texts to identify the unigrams and bigrams most associated with validity.",
    "exp.proj6.t": "Automated workflows",
    "exp.proj6.d": "Medallion-architecture pipelines (bronze/silver/gold) on Databricks; automation of BACEN regulatory data ingestion.",
    "exp.proj7.t": "Automations",
    "exp.proj7.d": "creation and maintenance of Python scripts used by several teams (automated demand distribution, email dispatching, web scraping and other internal routines).",

    "proj.p1.t": "LLM agent for regulatory analysis (RAG)",
    "proj.p1.d": "Full RAG pipeline over ~12k BACEN regulations: scraping, multilingual embeddings, Vector Search and an LLM agent that assesses compliance and returns the corrected draft with highlights.",
    "proj.p2.t": "Instance Zero - customer journey",
    "proj.p2.d": "Customer-journey reconstruction cross-referencing IVR, branch kiosks and digital channels with complaints. Daily PySpark/Databricks pipeline delivering an executive Power BI dashboard.",
    "proj.p3.t": "Febraban topic classifier (97% acc)",
    "proj.p3.d": "Random Forest model mapping Febraban topics to the bank's internal taxonomy, reaching 97% accuracy in production and reducing manual curation.",
    "proj.p4.t": "Influencer detection (TF-IDF + DBSCAN)",
    "proj.p4.d": "Unsupervised modeling with TF-IDF, cosine similarity and DBSCAN, with versioned incremental updates and visualization in a dedicated dashboard.",
    "proj.more": "View more projects on GitHub",

    "skills.langs": "Languages & libs",
    "skills.ml": "Machine Learning",
    "skills.ml.fe": "Feature Engineering",
    "skills.ml.cv": "Cross-Validation",
    "skills.ml.tune": "Hyperparameter Tuning",
    "skills.nlp.emb": "Multilingual Embeddings",
    "skills.nlp.cos": "Cosine Similarity",
    "skills.nlp.agents": "LLM Agents",
    "skills.nlp.scrape": "Web Scraping",
    "skills.stats": "Statistics",
    "skills.stats.ht": "Hypothesis Testing",
    "skills.stats.corr": "Correlation (Pearson)",
    "skills.stats.ts": "Time Series",
    "skills.platforms": "Platforms",
    "skills.platforms.excel": "Advanced Excel",
    "skills.certs": "Certifications",

    "contact.title": "Let's talk?",
    "contact.body": "I'm open to new opportunities in the data world. If you have an interesting project or just want to chat, get in touch."
  }
};

/* ---------- i18n ---------- */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.pt;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!(key in dict)) return;
    const val = dict[key];
    if (el.tagName === 'META') {
      el.setAttribute('content', val);
    } else if (el.tagName === 'TITLE') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
  // Attribute-level translations (placeholder, title, etc.)
  document.querySelectorAll('[data-i18n-attr-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-attr-placeholder');
    if (key in dict) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key in dict) el.setAttribute('title', dict[key]);
  });
  // Notify dynamic components (typers, lab) that lang changed
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Portuguese' : 'Alterar para inglês');

  try { localStorage.setItem('lang', lang); } catch (_) {}
}

function initLangToggle() {
  const stored = (() => { try { return localStorage.getItem('lang'); } catch (_) { return null; } })();
  const browser = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  const initial = stored || (browser === 'en' ? 'en' : 'pt');
  applyTranslations(initial);

  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'pt';
    applyTranslations(current === 'en' ? 'pt' : 'en');
  });
}

/* ---------- Loading screen ---------- */
function initLoadingScreen() {
  const el = document.getElementById('loadingScreen');
  if (!el) return;
  // Show only once per session
  let seen = false;
  try { seen = sessionStorage.getItem('loaded') === '1'; } catch (_) {}
  if (seen) { el.style.display = 'none'; return; }
  const hide = () => {
    el.classList.add('is-hidden');
    try { sessionStorage.setItem('loaded', '1'); } catch (_) {}
    setTimeout(() => { el.style.display = 'none'; }, 700);
  };
  // hide after content load + small delay
  if (document.readyState === 'complete') setTimeout(hide, 1100);
  else window.addEventListener('load', () => setTimeout(hide, 700));
}

/* ---------- Role typer (hero) ---------- */
const ROLES = {
  pt: ["Cientista de Dados", "25 anos",  "Osasco, SP - Brasil", "Banco Bradesco"],
  en: ["Data Scientist", "25 years old", "Osasco, SP - Brazil", "Bradesco Bank"]
};
function initRoleTyper() {
  const el = document.getElementById('roleTyper');
  if (!el) return null;
  let pi = 0, ci = 0, deleting = false, timeoutId = null;
  const getList = () => ROLES[(document.documentElement.lang === 'en') ? 'en' : 'pt'];
  function tick() {
    const list = getList();
    if (pi >= list.length) pi = 0;
    const current = list[pi];
    if (!deleting) {
      ci++;
      el.textContent = current.slice(0, ci);
      if (ci === current.length) { deleting = true; timeoutId = setTimeout(tick, 1600); return; }
      timeoutId = setTimeout(tick, 70 + Math.random() * 40);
    } else {
      ci--;
      el.textContent = current.slice(0, ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % list.length; timeoutId = setTimeout(tick, 300); return; }
      timeoutId = setTimeout(tick, 35);
    }
  }
  tick();
  return () => { if (timeoutId) clearTimeout(timeoutId); el.textContent = ''; };
}

/* ---------- NLP Playground ---------- */
function initNLPPlayground() {
  const input = document.getElementById('nlpInput');
  if (!input) return null;

  const STOP = new Set([
    'a','o','e','de','da','do','das','dos','em','um','uma','uns','umas','para','com','por','que','se','na','no','nas','nos','os','as',
    'é','sao','são','foi','será','seu','sua','seus','suas','este','esta','esse','essa','isso','isto','aquele','aquela','mas','ou',
    'the','a','an','of','to','in','on','for','and','or','but','is','are','was','were','be','been','being','have','has','had',
    'do','does','did','will','would','should','could','may','might','as','at','by','from','with','this','that','these','those'
  ]);
  function tokenize(text) {
    return (text || '').toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(w => w.length > 1 && !STOP.has(w));
  }
  function sentencesOf(text) {
    return (text || '').split(/[.!?\n]+/).map(s => s.trim()).filter(Boolean);
  }
  function ngrams(tokens, n) {
    const out = [];
    for (let i = 0; i <= tokens.length - n; i++) out.push(tokens.slice(i, i + n).join(' '));
    return out;
  }
  function freqMap(arr) {
    const m = new Map();
    arr.forEach(x => m.set(x, (m.get(x) || 0) + 1));
    return m;
  }
  function tfidf(docs) {
    if (docs.length < 2) return [];
    const docTokens = docs.map(tokenize);
    const N = docTokens.length;
    const df = new Map();
    docTokens.forEach(toks => {
      new Set(toks).forEach(w => df.set(w, (df.get(w) || 0) + 1));
    });
    const tf = freqMap(docTokens.flat());
    const scores = [];
    tf.forEach((tfVal, word) => {
      const idf = Math.log((N + 1) / ((df.get(word) || 0) + 1)) + 1;
      scores.push({ word, score: tfVal * idf });
    });
    return scores.sort((a, b) => b.score - a.score).slice(0, 5);
  }

  const tokensEl = document.getElementById('nlpTokens');
  const vocabEl  = document.getElementById('nlpVocab');
  const sentsEl  = document.getElementById('nlpSents');
  const ngEl     = document.getElementById('nlpNgrams');
  const tfEl     = document.getElementById('nlpTfidf');

  function emptyMsg() {
    return (document.documentElement.lang === 'en') ? '(needs 2+ sentences)' : '(precisa de 2+ sentenças)';
  }

  function update() {
    const text = input.value;
    const toks = tokenize(text);
    const sents = sentencesOf(text);
    tokensEl.textContent = toks.length;
    vocabEl.textContent = new Set(toks).size;
    sentsEl.textContent = sents.length;

    const big = freqMap(ngrams(toks, 2));
    const topBigrams = [...big.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
    ngEl.innerHTML = topBigrams.length
      ? topBigrams.map(([g, c]) => `<li><span>${g}</span><span class="freq">${c}</span></li>`).join('')
      : '<li class="empty">—</li>';

    const top = tfidf(sents);
    tfEl.innerHTML = top.length
      ? top.map(({ word, score }) => `<li><span>${word}</span><span class="freq">${score.toFixed(2)}</span></li>`).join('')
      : `<li class="empty">${emptyMsg()}</li>`;
  }

  if (!input.value) {
    input.value = "";
  }
  input.addEventListener('input', update);
  document.addEventListener('langchange', update);
  update();
  return () => {
    input.removeEventListener('input', update);
    document.removeEventListener('langchange', update);
  };
}

/* ---------- Cosine similarity demo ---------- */
function initCosineDemo() {
  const a = document.getElementById('cosA');
  const b = document.getElementById('cosB');
  const score = document.getElementById('cosScore');
  const fill = document.getElementById('cosFill');
  if (!a || !b) return null;

  function tokens(s) {
    return (s || '').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  }
  function bow(tks) {
    const m = new Map();
    tks.forEach(t => m.set(t, (m.get(t) || 0) + 1));
    return m;
  }
  function cosine(va, vb) {
    let dot = 0, na = 0, nb = 0;
    va.forEach((c, t) => { na += c * c; if (vb.has(t)) dot += c * vb.get(t); });
    vb.forEach(c => { nb += c * c; });
    return (na && nb) ? dot / (Math.sqrt(na) * Math.sqrt(nb)) : 0;
  }
  function update() {
    const sim = cosine(bow(tokens(a.value)), bow(tokens(b.value)));
    const pct = Math.round(sim * 100);
    score.textContent = pct + '%';
    fill.style.width = pct + '%';
  }
  if (!a.value && !b.value) {
    a.value = "";
    b.value = "";
  }
  a.addEventListener('input', update);
  b.addEventListener('input', update);
  update();
  return () => {
    a.removeEventListener('input', update);
    b.removeEventListener('input', update);
  };
}

/* ---------- Network background (canvas) ---------- */
function initNetworkBg() {
  const canvas = document.getElementById('networkBg');
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0, height = 0;
  let nodes = [];
  const NODE_COUNT = 60;
  const LINK_DIST = 130;
  let rafId = null;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seed() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25
      });
    }
  }
  function getColors() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    return isLight
      ? { dot: 'rgba(0,0,0,0.55)', line: (a) => `rgba(0,0,0,${a * 0.5})` }
      : { dot: 'rgba(255,255,255,0.65)', line: (a) => `rgba(255,255,255,${a * 0.55})` };
  }
  function tick() {
    ctx.clearRect(0, 0, width, height);
    const colors = getColors();

    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
      // gentle attraction to the cursor
      const dx = mouse.x - n.x, dy = mouse.y - n.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 160 * 160 && d2 > 0) {
        const f = 0.0006;
        n.vx += dx * f; n.vy += dy * f;
      }
      // damping
      n.vx *= 0.995; n.vy *= 0.995;
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = 1 - dist / LINK_DIST;
          ctx.strokeStyle = colors.line(alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    // dots
    ctx.fillStyle = colors.dot;
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(tick);
  }
  function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
  function onMouseLeave() { mouse.x = -9999; mouse.y = -9999; }
  function onResize() { resize(); seed(); }

  resize(); seed(); tick();
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseleave', onMouseLeave);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseleave', onMouseLeave);
    ctx.clearRect(0, 0, width, height);
  };
}

/* ---------- Stack showcase (clickable chips → expandable panels) ---------- */
function initStackShowcase() {
  const chips = document.querySelectorAll('.stack-chip[data-stack]');
  const panels = document.querySelectorAll('.stack-panel[data-panel]');
  if (!chips.length) return;
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.stack;
      const isOpen = chip.classList.contains('is-active');
      // Close everything
      chips.forEach((c) => {
        c.classList.remove('is-active');
        c.setAttribute('aria-expanded', 'false');
      });
      panels.forEach((p) => p.classList.remove('is-active'));
      panels.forEach((p) => { if (p.dataset.panel) p.hidden = true; });
      // Toggle (clicking the active one closes it)
      if (!isOpen) {
        chip.classList.add('is-active');
        chip.setAttribute('aria-expanded', 'true');
        const panel = document.querySelector(`.stack-panel[data-panel="${key}"]`);
        if (panel) { panel.hidden = false; panel.classList.add('is-active'); }
      }
    });
  });
}

/* ---------- Back-to-top button ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  function onScroll() {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  onScroll();
}

/* ---------- Scroll progress bar ---------- */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return null;
  function onScroll() {
    const h = document.documentElement;
    const scrolled = h.scrollTop || document.body.scrollTop;
    const total = h.scrollHeight - h.clientHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

/* ---------- Theme toggle ---------- */
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  try { localStorage.setItem('theme', theme); } catch (_) {}
  const btn = document.getElementById('themeToggle');
  if (btn) btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const stored = (() => { try { return localStorage.getItem('theme'); } catch (_) { return null; } })();
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(initial);
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

/* ---------- Scroll-spy nav ---------- */
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(links)
    .map((l) => document.getElementById(l.dataset.nav))
    .filter(Boolean);
  if (!sections.length) return;

  function setActive(id) {
    links.forEach((l) => l.classList.toggle('is-active', l.dataset.nav === id));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // Fallback: when scrolled to the bottom, force the last section (Contact)
  // active — otherwise short sections at the page tail never cross the
  // IntersectionObserver "strip" and the previous section stays highlighted.
  const lastId = sections[sections.length - 1].id;
  function checkBottom() {
    const reached = window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 8;
    if (reached) setActive(lastId);
  }
  window.addEventListener('scroll', checkBottom, { passive: true });
  window.addEventListener('resize', checkBottom, { passive: true });
  checkBottom();
}

/* ---------- Fade-in sections ---------- */
function initRevealOnScroll() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.section').forEach((s) => s.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.section').forEach((s) => observer.observe(s));
}

/* ---------- Cursor glow ---------- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function raf() {
    x += (tx - x) * 0.15;
    y += (ty - y) * 0.15;
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  }
  raf();
}

/* ---------- Bootstrap ---------- */
/* ============================================================
   LABS — Experiments + Modal/Carousel
   ============================================================ */

/* Shared: Normal CDF (Abramowitz approx) + two-sided p */
function _normalCDF(x) {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
        a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x) / Math.sqrt(2);
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * y);
}
function _twoSidedP(z) { return 2 * (1 - _normalCDF(Math.abs(z))); }
function _parseNumList(s) {
  return (s || '').split(/[,\s;]+/).map(parseFloat).filter(v => isFinite(v));
}

/* ---------- 3. Linear regression (OLS) — click-to-add points ---------- */
function initRegression() {
  const canvas = document.getElementById('regCanvas');
  if (!canvas) return;
  const slopeEl = document.getElementById('regSlope');
  const interEl = document.getElementById('regIntercept');
  const r2El    = document.getElementById('regR2');
  const countEl = document.getElementById('regCount');
  const clearBtn = document.getElementById('regClear');
  const demoBtn  = document.getElementById('regDemo');

  // Fixed data coord range — keeps layout stable while user adds/removes points
  const RX = [0, 10], RY = [0, 10];
  const PAD = 22;
  let pts = [];

  function px2data(px, py, w, h) {
    return [
      RX[0] + (px - PAD) / (w - 2 * PAD) * (RX[1] - RX[0]),
      RY[0] + (h - PAD - py) / (h - 2 * PAD) * (RY[1] - RY[0])
    ];
  }
  function data2px(x, y, w, h) {
    return [
      PAD + (x - RX[0]) / (RX[1] - RX[0]) * (w - 2 * PAD),
      h - PAD - (y - RY[0]) / (RY[1] - RY[0]) * (h - 2 * PAD)
    ];
  }

  function fit() {
    const n = pts.length;
    if (n < 2) return null;
    let mx = 0, my = 0;
    for (const p of pts) { mx += p[0]; my += p[1]; }
    mx /= n; my /= n;
    let num = 0, den = 0, ssTot = 0, ssRes = 0;
    for (const [x, y] of pts) { num += (x - mx) * (y - my); den += (x - mx) ** 2; }
    const slope = den ? num / den : 0;
    const intercept = my - slope * mx;
    for (const [x, y] of pts) {
      const yh = slope * x + intercept;
      ssTot += (y - my) ** 2;
      ssRes += (y - yh) ** 2;
    }
    return { slope, intercept, r2: ssTot ? 1 - ssRes / ssTot : 1 };
  }

  function draw() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || 320;
    const h = canvas.clientHeight || 220;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const axis    = isLight ? 'rgba(0,0,0,0.25)'  : 'rgba(255,255,255,0.25)';
    const grid    = isLight ? 'rgba(0,0,0,0.05)'  : 'rgba(255,255,255,0.05)';
    const ticks   = isLight ? 'rgba(0,0,0,0.45)'  : 'rgba(255,255,255,0.45)';
    const pointC  = isLight ? '#111'              : '#ededed';
    const lineC   = isLight ? '#444'              : '#d4d4d4';

    // grid
    ctx.strokeStyle = grid; ctx.lineWidth = 1;
    for (let i = 1; i < 10; i++) {
      const [vx1, vy1] = data2px(i, RY[0], w, h);
      const [vx2, vy2] = data2px(i, RY[1], w, h);
      ctx.beginPath(); ctx.moveTo(vx1, vy1); ctx.lineTo(vx2, vy2); ctx.stroke();
      const [hx1, hy1] = data2px(RX[0], i, w, h);
      const [hx2, hy2] = data2px(RX[1], i, w, h);
      ctx.beginPath(); ctx.moveTo(hx1, hy1); ctx.lineTo(hx2, hy2); ctx.stroke();
    }
    // axes
    ctx.strokeStyle = axis; ctx.lineWidth = 1;
    const [ox, oy] = data2px(RX[0], RY[0], w, h);
    const [ex, ey] = data2px(RX[1], RY[0], w, h);
    const [tx, ty] = data2px(RX[0], RY[1], w, h);
    ctx.beginPath();
    ctx.moveTo(ox, oy); ctx.lineTo(ex, ey);
    ctx.moveTo(ox, oy); ctx.lineTo(tx, ty);
    ctx.stroke();
    // tick labels
    ctx.fillStyle = ticks;
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let i = 0; i <= 10; i += 2) {
      const [px, py] = data2px(i, RY[0], w, h);
      ctx.fillText(String(i), px, py + 4);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let i = 0; i <= 10; i += 2) {
      const [px, py] = data2px(RX[0], i, w, h);
      ctx.fillText(String(i), px - 4, py);
    }

    const res = fit();
    if (res) {
      const [lx1, ly1] = data2px(RX[0], res.slope * RX[0] + res.intercept, w, h);
      const [lx2, ly2] = data2px(RX[1], res.slope * RX[1] + res.intercept, w, h);
      ctx.strokeStyle = lineC; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(lx1, ly1); ctx.lineTo(lx2, ly2); ctx.stroke();
      slopeEl.textContent = res.slope.toFixed(3);
      interEl.textContent = res.intercept.toFixed(3);
      r2El.textContent    = res.r2.toFixed(3);
    } else {
      slopeEl.textContent = '—';
      interEl.textContent = '—';
      r2El.textContent    = '—';
    }

    // points
    ctx.fillStyle = pointC;
    for (const [x, y] of pts) {
      const [px, py] = data2px(x, y, w, h);
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fill();
      // halo
      ctx.strokeStyle = isLight ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    const en = document.documentElement.lang === 'en';
    if (countEl) countEl.textContent = pts.length + (en ? ' pts' : ' pts');
  }

  function onClick(e) {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const w = rect.width, h = rect.height;
    // remove if near an existing point
    let hit = -1;
    for (let i = 0; i < pts.length; i++) {
      const [epx, epy] = data2px(pts[i][0], pts[i][1], w, h);
      if (Math.hypot(epx - px, epy - py) < 12) { hit = i; break; }
    }
    if (hit >= 0) {
      pts.splice(hit, 1);
    } else {
      const [x, y] = px2data(px, py, w, h);
      if (x >= RX[0] && x <= RX[1] && y >= RY[0] && y <= RY[1]) {
        pts.push([x, y]);
      }
    }
    draw();
  }

  function demoPoints() {
    pts = [];
    // a roughly linear cloud y ≈ 0.9x + 1 with some noise
    for (let i = 1; i <= 9; i++) {
      const x = i + (Math.random() - 0.5) * 0.4;
      const y = 0.9 * i + 1 + (Math.random() - 0.5) * 1.4;
      pts.push([Math.max(0, Math.min(10, x)), Math.max(0, Math.min(10, y))]);
    }
    draw();
  }

  canvas.addEventListener('click', onClick);
  if (clearBtn) clearBtn.addEventListener('click', () => { pts = []; draw(); });
  if (demoBtn)  demoBtn.addEventListener('click', demoPoints);
  window.addEventListener('resize', draw);
  document.addEventListener('langchange', draw);

  // Seed with demo points
  demoPoints();
  requestAnimationFrame(draw);
}

/* ---------- 4. Pearson correlation ---------- */
function initCorrelation() {
  const xIn = document.getElementById('corrX');
  const yIn = document.getElementById('corrY');
  const rEl = document.getElementById('corrR');
  const lblEl = document.getElementById('corrLabel');
  const fillEl = document.getElementById('corrFill');
  if (!xIn || !yIn) return;
  function pearson(x, y) {
    const n = Math.min(x.length, y.length);
    if (n < 2) return null;
    let mx = 0, my = 0;
    for (let i = 0; i < n; i++) { mx += x[i]; my += y[i]; }
    mx /= n; my /= n;
    let num = 0, dx = 0, dy = 0;
    for (let i = 0; i < n; i++) {
      const ex = x[i] - mx, ey = y[i] - my;
      num += ex * ey; dx += ex * ex; dy += ey * ey;
    }
    return (dx && dy) ? num / Math.sqrt(dx * dy) : null;
  }
  function label(r) {
    const en = document.documentElement.lang === 'en';
    const abs = Math.abs(r);
    const dir = r >= 0 ? (en ? 'positive' : 'positiva') : (en ? 'negative' : 'negativa');
    let s = en ? 'weak' : 'fraca';
    if (abs > 0.7) s = en ? 'strong' : 'forte';
    else if (abs > 0.4) s = en ? 'moderate' : 'moderada';
    return `${s} ${dir}`;
  }
  function update() {
    const r = pearson(_parseNumList(xIn.value), _parseNumList(yIn.value));
    if (r === null) {
      rEl.textContent = '—'; lblEl.textContent = '—'; fillEl.style.width = '0%';
    } else {
      rEl.textContent = r.toFixed(3);
      lblEl.textContent = label(r);
      fillEl.style.width = (Math.abs(r) * 100).toFixed(0) + '%';
    }
  }
  if (!xIn.value && !yIn.value) {
    xIn.value = "1, 2, 3, 4, 5, 6"; yIn.value = "2, 4, 5, 4, 5, 7";
  }
  xIn.addEventListener('input', update);
  yIn.addEventListener('input', update);
  document.addEventListener('langchange', update);
  update();
}

/* ---------- 5. Welch t-test ---------- */
function initTTest() {
  const aIn = document.getElementById('ttA');
  const bIn = document.getElementById('ttB');
  const tEl = document.getElementById('ttT');
  const dfEl = document.getElementById('ttDF');
  const pEl = document.getElementById('ttP');
  const sigEl = document.getElementById('ttSig');
  if (!aIn || !bIn) return;
  function stats(arr) {
    const n = arr.length;
    if (n < 2) return null;
    const m = arr.reduce((s, v) => s + v, 0) / n;
    const v = arr.reduce((s, x) => s + (x - m) ** 2, 0) / (n - 1);
    return { n, m, v };
  }
  function welch(a, b) {
    const sa = stats(a), sb = stats(b);
    if (!sa || !sb) return null;
    const se2 = sa.v / sa.n + sb.v / sb.n;
    if (!se2) return null;
    const t = (sa.m - sb.m) / Math.sqrt(se2);
    const df = (se2 * se2) /
      ((sa.v / sa.n) ** 2 / (sa.n - 1) + (sb.v / sb.n) ** 2 / (sb.n - 1));
    return { t, df };
  }
  function update() {
    const r = welch(_parseNumList(aIn.value), _parseNumList(bIn.value));
    if (!r) {
      tEl.textContent = '—'; dfEl.textContent = '—'; pEl.textContent = '—'; sigEl.textContent = '—';
      return;
    }
    const p = _twoSidedP(r.t);
    tEl.textContent = r.t.toFixed(3);
    dfEl.textContent = r.df.toFixed(1);
    pEl.textContent = p < 0.0001 ? '<0.0001' : p.toFixed(4);
    const en = document.documentElement.lang === 'en';
    sigEl.textContent = p < 0.05
      ? (en ? 'Significant at α=0.05 ✓' : 'Significativo a α=0,05 ✓')
      : (en ? 'Not significant at α=0.05' : 'Não significativo a α=0,05');
  }
  if (!aIn.value && !bIn.value) {
    aIn.value = "5.1, 4.9, 4.7, 5.0, 5.2, 5.3";
    bIn.value = "4.6, 4.8, 5.0, 4.9, 4.7, 4.8";
  }
  aIn.addEventListener('input', update);
  bIn.addEventListener('input', update);
  document.addEventListener('langchange', update);
  update();
}

/* ---------- 6. A/B test (two-proportion z-test) ---------- */
function initABTest() {
  const vA = document.getElementById('abVA'), cA = document.getElementById('abCA');
  const vB = document.getElementById('abVB'), cB = document.getElementById('abCB');
  const liftEl = document.getElementById('abLift');
  const zEl = document.getElementById('abZ');
  const pEl = document.getElementById('abP');
  const sigEl = document.getElementById('abSig');
  if (!vA) return;
  function update() {
    const va = +vA.value, ca = +cA.value, vb = +vB.value, cb = +cB.value;
    const en = document.documentElement.lang === 'en';
    if (!va || !vb || ca < 0 || cb < 0 || ca > va || cb > vb) {
      liftEl.textContent = '—'; zEl.textContent = '—'; pEl.textContent = '—'; sigEl.textContent = '—';
      return;
    }
    const ra = ca / va, rb = cb / vb;
    const lift = ra ? (rb - ra) / ra : 0;
    const pPool = (ca + cb) / (va + vb);
    const se = Math.sqrt(pPool * (1 - pPool) * (1 / va + 1 / vb));
    const z = se ? (rb - ra) / se : 0;
    const p = _twoSidedP(z);
    liftEl.textContent = (lift >= 0 ? '+' : '') + (lift * 100).toFixed(1) + '%';
    zEl.textContent = z.toFixed(3);
    pEl.textContent = p < 0.0001 ? '<0.0001' : p.toFixed(4);
    if (p < 0.05) {
      sigEl.textContent = z > 0
        ? (en ? `B wins (p=${p.toFixed(3)})` : `B vence (p=${p.toFixed(3)})`)
        : (en ? `A wins (p=${p.toFixed(3)})` : `A vence (p=${p.toFixed(3)})`);
    } else {
      sigEl.textContent = en ? 'No significant difference' : 'Sem diferença significativa';
    }
  }
  [vA, cA, vB, cB].forEach(el => el.addEventListener('input', update));
  document.addEventListener('langchange', update);
  update();
}

/* ---------- 7. Confusion matrix ---------- */
function initConfusionMatrix() {
  const tp = document.getElementById('cmTP');
  const fp = document.getElementById('cmFP');
  const tn = document.getElementById('cmTN');
  const fn = document.getElementById('cmFN');
  if (!tp || !fp || !tn || !fn) return;
  const accEl  = document.getElementById('cmAcc');
  const precEl = document.getElementById('cmPrec');
  const recEl  = document.getElementById('cmRec');
  const f1El   = document.getElementById('cmF1');
  const fmt = (v) => isFinite(v) ? (v * 100).toFixed(1) + '%' : '—';
  function update() {
    const TP = Math.max(0, +tp.value || 0);
    const FP = Math.max(0, +fp.value || 0);
    const TN = Math.max(0, +tn.value || 0);
    const FN = Math.max(0, +fn.value || 0);
    const total = TP + FP + TN + FN;
    if (!total) {
      accEl.textContent = '—'; precEl.textContent = '—'; recEl.textContent = '—'; f1El.textContent = '—';
      return;
    }
    const acc  = (TP + TN) / total;
    const prec = (TP + FP) ? TP / (TP + FP) : 0;
    const rec  = (TP + FN) ? TP / (TP + FN) : 0;
    const f1   = (prec + rec) ? (2 * prec * rec) / (prec + rec) : 0;
    accEl.textContent  = fmt(acc);
    precEl.textContent = fmt(prec);
    recEl.textContent  = fmt(rec);
    f1El.textContent   = fmt(f1);
  }
  [tp, fp, tn, fn].forEach(i => i.addEventListener('input', update));
  update();
}

/* ---------- 8. K-Means visual ---------- */
function initKMeans() {
  const canvas = document.getElementById('kmCanvas');
  if (!canvas) return;
  const runBtn  = document.getElementById('kmRun');
  const ranBtn  = document.getElementById('kmRandom');
  const clrBtn  = document.getElementById('kmClear');
  const kInput  = document.getElementById('kmK');
  const ptsEl   = document.getElementById('kmPts');
  const iterEl  = document.getElementById('kmIter');
  const inerEl  = document.getElementById('kmIner');

  const COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#06b6d4'];
  const RX = [0, 10], RY = [0, 10], PAD = 22;
  let pts = [];          // [[x, y], ...]
  let labels = [];       // assignment per point
  let centroids = [];    // [[x, y], ...]
  let iter = 0;
  let inertia = null;
  let running = false;

  function data2px(x, y, w, h) {
    return [
      PAD + (x - RX[0]) / (RX[1] - RX[0]) * (w - 2 * PAD),
      h - PAD - (y - RY[0]) / (RY[1] - RY[0]) * (h - 2 * PAD)
    ];
  }
  function px2data(px, py, w, h) {
    return [
      RX[0] + (px - PAD) / (w - 2 * PAD) * (RX[1] - RX[0]),
      RY[0] + (h - PAD - py) / (h - 2 * PAD) * (RY[1] - RY[0])
    ];
  }
  function draw() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || 320;
    const h = canvas.clientHeight || 220;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const grid = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
    const axis = isLight ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)';
    ctx.strokeStyle = grid; ctx.lineWidth = 1;
    for (let i = 1; i < 10; i++) {
      let [a, b] = data2px(i, RY[0], w, h), [c, d] = data2px(i, RY[1], w, h);
      ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke();
      [a, b] = data2px(RX[0], i, w, h); [c, d] = data2px(RX[1], i, w, h);
      ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke();
    }
    ctx.strokeStyle = axis;
    const [ox, oy] = data2px(RX[0], RY[0], w, h);
    const [ex, ey] = data2px(RX[1], RY[0], w, h);
    const [tx, ty] = data2px(RX[0], RY[1], w, h);
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ex, ey);
    ctx.moveTo(ox, oy); ctx.lineTo(tx, ty); ctx.stroke();
    // points
    for (let i = 0; i < pts.length; i++) {
      const [x, y] = pts[i];
      const [px, py] = data2px(x, y, w, h);
      ctx.fillStyle = labels[i] != null ? COLORS[labels[i] % COLORS.length] : (isLight ? '#222' : '#ededed');
      ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = isLight ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.7)';
      ctx.lineWidth = 1.4; ctx.stroke();
    }
    // centroids
    for (let i = 0; i < centroids.length; i++) {
      const [x, y] = centroids[i];
      const [px, py] = data2px(x, y, w, h);
      ctx.strokeStyle = COLORS[i % COLORS.length];
      ctx.lineWidth = 2.4;
      ctx.fillStyle = isLight ? '#fff' : '#0d0d0d';
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.font = 'bold 11px JetBrains Mono, monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), px, py);
    }
    ptsEl.textContent = pts.length;
    iterEl.textContent = iter;
    inerEl.textContent = inertia == null ? '—' : inertia.toFixed(2);
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function getK() { return clamp(+kInput.value || 3, 2, 6); }

  function initCentroids() {
    const K = getK();
    centroids = [];
    if (!pts.length) return;
    // pick K random pts
    const used = new Set();
    while (centroids.length < K) {
      const idx = Math.floor(Math.random() * pts.length);
      if (used.has(idx) && used.size < pts.length) continue;
      used.add(idx);
      centroids.push([pts[idx][0], pts[idx][1]]);
      if (used.size >= pts.length) break;
    }
  }
  function assign() {
    const K = centroids.length;
    labels = pts.map(([x, y]) => {
      let best = 0, bestD = Infinity;
      for (let k = 0; k < K; k++) {
        const dx = centroids[k][0] - x, dy = centroids[k][1] - y;
        const d = dx * dx + dy * dy;
        if (d < bestD) { bestD = d; best = k; }
      }
      return best;
    });
    // inertia
    inertia = 0;
    for (let i = 0; i < pts.length; i++) {
      const c = centroids[labels[i]];
      inertia += (pts[i][0] - c[0]) ** 2 + (pts[i][1] - c[1]) ** 2;
    }
  }
  function step() {
    // recompute centroids
    const K = centroids.length;
    const sums = Array.from({ length: K }, () => [0, 0, 0]);
    for (let i = 0; i < pts.length; i++) {
      const k = labels[i];
      sums[k][0] += pts[i][0]; sums[k][1] += pts[i][1]; sums[k][2]++;
    }
    let moved = false;
    for (let k = 0; k < K; k++) {
      if (sums[k][2]) {
        const nx = sums[k][0] / sums[k][2];
        const ny = sums[k][1] / sums[k][2];
        if (Math.hypot(nx - centroids[k][0], ny - centroids[k][1]) > 0.001) moved = true;
        centroids[k] = [nx, ny];
      }
    }
    assign();
    iter++;
    return moved;
  }
  function run() {
    if (running || pts.length < 2) return;
    if (!centroids.length) initCentroids();
    assign();
    running = true;
    let safety = 30;
    function tick() {
      if (!running || safety-- <= 0) { running = false; draw(); return; }
      const moved = step();
      draw();
      if (moved) setTimeout(tick, 400);
      else { running = false; }
    }
    tick();
  }
  function randomData() {
    pts = []; labels = []; centroids = []; iter = 0; inertia = null;
    const centers = [[2.5, 2.5], [7.5, 2.5], [5, 7.5]];
    const K = Math.min(getK(), centers.length);
    for (let c = 0; c < K; c++) {
      const [cx, cy] = centers[c];
      for (let i = 0; i < 12; i++) {
        const x = cx + (Math.random() - 0.5) * 2.5;
        const y = cy + (Math.random() - 0.5) * 2.5;
        pts.push([clamp(x, 0.2, 9.8), clamp(y, 0.2, 9.8)]);
      }
    }
    draw();
  }
  function clearAll() {
    pts = []; labels = []; centroids = []; iter = 0; inertia = null; running = false;
    draw();
  }

  canvas.addEventListener('click', (e) => {
    if (running) return;
    const rect = canvas.getBoundingClientRect();
    const [x, y] = px2data(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
    if (x >= RX[0] && x <= RX[1] && y >= RY[0] && y <= RY[1]) {
      pts.push([x, y]); labels.push(null);
      centroids = []; iter = 0; inertia = null;
      draw();
    }
  });
  runBtn.addEventListener('click', run);
  ranBtn.addEventListener('click', randomData);
  clrBtn.addEventListener('click', clearAll);
  kInput.addEventListener('input', () => { centroids = []; iter = 0; inertia = null; labels = pts.map(() => null); draw(); });
  window.addEventListener('resize', draw);

  randomData();
  requestAnimationFrame(draw);
}

/* ---------- 9. Sentiment analysis (lexicon-based) ---------- */
function initSentiment() {
  const input = document.getElementById('saInput');
  if (!input) return;
  const highlightEl = document.getElementById('saHighlight');
  const posEl = document.getElementById('saPos');
  const negEl = document.getElementById('saNeg');
  const scoreEl = document.getElementById('saScore');
  const fillEl = document.getElementById('saFill');

  const POS = new Set([
    // PT
    'bom','bons','boa','boas','ótimo','ótima','excelente','adoro','adorei','feliz','alegria','incrível',
    'maravilhoso','maravilhosa','perfeito','perfeita','top','gostei','recomendo','recomendado','positivo','positiva',
    'agradável','satisfeito','satisfeita','rápido','rápida','eficiente','prático','útil','simples','sucesso','melhor',
    'ame','amei','amo','show','massa','legal','bacana',
    // EN
    'good','great','excellent','love','loved','happy','amazing','wonderful','perfect','liked','like','recommend',
    'positive','pleasant','satisfied','fast','efficient','practical','useful','simple','awesome','fantastic',
    'best','helpful','smooth','nice','enjoy','enjoyed'
  ]);
  const NEG = new Set([
    // PT
    'ruim','ruins','péssimo','péssima','horrível','horríveis','odeio','odiei','triste','terrível','detesto',
    'negativo','negativa','chato','chata','lento','lenta','difícil','complicado','complicada','inútil','quebrado',
    'frustrante','decepção','decepcionado','decepcionada','demorado','demorada','pior','piorou','falha','falhou',
    'erro','erros','bug','bugado','travado','crash','crashou',
    // EN
    'bad','terrible','horrible','hate','hated','sad','awful','disgusting','negative','boring','slow','difficult',
    'complicated','useless','broken','frustrating','frustrated','disappointing','disappointed','worst','worse','fail',
    'failed','error','errors','bug','bugged','crashed','crash'
  ]);

  function escapeHTML(s) {
    return s.replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
  }
  function update() {
    const text = input.value || '';
    let pos = 0, neg = 0;
    const html = text.split(/(\s+|[.,!?;:()\[\]"'])/).map(part => {
      const w = part.toLowerCase().trim();
      if (!w) return escapeHTML(part);
      if (POS.has(w)) { pos++; return `<span class="sa-pos">${escapeHTML(part)}</span>`; }
      if (NEG.has(w)) { neg++; return `<span class="sa-neg">${escapeHTML(part)}</span>`; }
      return escapeHTML(part);
    }).join('');
    highlightEl.innerHTML = html || '<span style="color:var(--slate);font-style:italic">(vazio)</span>';
    posEl.textContent = pos;
    negEl.textContent = neg;
    const en = document.documentElement.lang === 'en';
    const total = pos + neg;
    if (!total) {
      scoreEl.textContent = en ? 'Neutral' : 'Neutro';
      fillEl.style.width = '50%';
    } else {
      const score = (pos - neg) / total;
      fillEl.style.width = (((score + 1) / 2) * 100).toFixed(0) + '%';
      if (score > 0.2) scoreEl.textContent = en ? 'Positive' : 'Positivo';
      else if (score < -0.2) scoreEl.textContent = en ? 'Negative' : 'Negativo';
      else scoreEl.textContent = en ? 'Neutral' : 'Neutro';
    }
  }
  if (!input.value) {
    input.value = "Adorei o atendimento, foi rápido e eficiente. Recomendo a todos! Só achei o aplicativo um pouco lento.";
  }
  input.addEventListener('input', update);
  document.addEventListener('langchange', update);
  update();
}

/* ---------- 10. Bayes Theorem ---------- */
function initBayes() {
  const pa  = document.getElementById('byPA');
  const pba = document.getElementById('byPBA');
  const pbna = document.getElementById('byPBnA');
  const resEl = document.getElementById('byResult');
  const fill  = document.getElementById('byFill');
  const noteEl = document.getElementById('byNote');
  if (!pa) return;
  function update() {
    const PA = Math.min(1, Math.max(0, +pa.value || 0));
    const PBA = Math.min(1, Math.max(0, +pba.value || 0));
    const PBnA = Math.min(1, Math.max(0, +pbna.value || 0));
    const num = PA * PBA;
    const den = num + (1 - PA) * PBnA;
    if (!den) {
      resEl.textContent = '—'; fill.style.width = '0%';
      if (noteEl) noteEl.textContent = '';
      return;
    }
    const post = num / den;
    resEl.textContent = (post * 100).toFixed(2) + '%';
    fill.style.width = (post * 100).toFixed(1) + '%';
    if (noteEl) {
      const en = document.documentElement.lang === 'en';
      noteEl.textContent = en
        ? `Even with positive evidence (P(B|A)=${(PBA*100).toFixed(0)}%), if the prior is low (P(A)=${(PA*100).toFixed(2)}%), the posterior P(A|B) stays around ${(post*100).toFixed(1)}%. That's why base rates matter so much.`
        : `Mesmo com evidência positiva (P(B|A)=${(PBA*100).toFixed(0)}%), se o prior é baixo (P(A)=${(PA*100).toFixed(2)}%), o posterior P(A|B) fica em torno de ${(post*100).toFixed(1)}%. É por isso que a taxa-base importa tanto.`;
    }
  }
  [pa, pba, pbna].forEach(el => el.addEventListener('input', update));
  document.addEventListener('langchange', update);
  update();
}

/* ---------- Labs modal + carousel ---------- */
function initLabsModal() {
  const btn = document.getElementById('labsToggle');
  const modal = document.getElementById('labsModal');
  if (!btn || !modal) return;
  const slides = modal.querySelectorAll('.labs-slide');
  const total = slides.length;
  const slidesEl = modal.querySelector('.labs-slides');
  const dotsEl = document.getElementById('labsDots');
  const idxEl = document.getElementById('labsIdx');
  const totEl = document.getElementById('labsTotal');
  let current = 0;
  let opened = false;

  // build dots
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.type = 'button';
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.dataset.idx = i;
    dotsEl.appendChild(d);
  }
  if (totEl) totEl.textContent = total;

  function go(i) {
    current = (i + total) % total;
    slidesEl.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('button').forEach((d, k) => d.classList.toggle('is-active', k === current));
    if (idxEl) idxEl.textContent = current + 1;
  }
  function open() {
    if (opened) return;
    opened = true;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('labs-open');
    document.addEventListener('keydown', onKey);
    go(current);
    // Lazy-init experiments (only once)
    if (!modal.dataset.ready) {
      initNLPPlayground();
      initCosineDemo();
      initRegression();
      initCorrelation();
      initTTest();
      initABTest();
      initConfusionMatrix();
      initKMeans();
      initSentiment();
      initBayes();
      modal.dataset.ready = '1';
    }
  }
  function close() {
    if (!opened) return;
    opened = false;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('labs-open');
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(current - 1);
    else if (e.key === 'ArrowRight') go(current + 1);
  }

  btn.addEventListener('click', open);
  // Open from anywhere in the page via data-action="open-labs"
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-action="open-labs"]');
    if (trigger) { e.preventDefault(); open(); }
  });
  modal.querySelectorAll('[data-labs-close]').forEach(el => el.addEventListener('click', close));
  modal.querySelector('.labs-prev').addEventListener('click', () => go(current - 1));
  modal.querySelector('.labs-next').addEventListener('click', () => go(current + 1));

  // Touch swipe support (mobile carousel)
  const viewport = modal.querySelector('.labs-viewport');
  let touchStartX = null, touchStartY = null;
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  viewport.addEventListener('touchend', (e) => {
    if (touchStartX == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // ignore mostly-vertical swipes (so users can still scroll content)
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      go(current + (dx < 0 ? 1 : -1));
    }
    touchStartX = touchStartY = null;
  }, { passive: true });
  dotsEl.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-idx]');
    if (b) go(+b.dataset.idx);
  });
}

/* ---------- Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initThemeToggle();
  initLangToggle();
  initScrollSpy();
  initRevealOnScroll();
  initCursorGlow();
  initLabsModal();
  initStackShowcase();
  initBackToTop();
  // Rich-mode features (always on now — toggle removed from UI)
  initNetworkBg();
  initRoleTyper();
  initScrollProgress();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
