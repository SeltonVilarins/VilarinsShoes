// ===== DADOS DOS PRODUTOS =====
const products = [
    {
        id: 1,
        name: "Tênis Olympikus Triunfo 3 Masculino",
        description: "O Olympikus Inverse é o toque contemporâneo que faltava no seu dia a dia. Sua entressola conta com a nova e exclusiva tecnologia Eleva Pro Max, com alto índice de resiliência, baixo peso e conforto, possibilitando amortecimento aos pés durante caminhadas e exercícios leves.",
        price: 289.99,
        oldPrice: 349.99,
        category: "esportivo",
        sizes: [38, 39, 40, 41, 42, 43],
        image: `<img src="https://vulcabras.vtexassets.com/arquivos/ids/292503-1300-1300?v=638780120904000000&width=1300&height=1300&aspect=true" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 2,
        name: "Sapato Social de Couro Viccini Romeo Preto",
        description: "Todo confeccionado em couro nobre, o Derby Romeo é um modelo feito para homens de classe que buscam um sapato atemporal de acabamento refinado, elegante e que seja imponente. Suas composições mais alinhadas ficarão ainda mais sofisticadas.",
        price: 649.99,
        oldPrice: null,
        category: "social",
        sizes: [38, 39, 40, 41, 42],
        image: `<img src="https://cdn.shoppub.io/viccini/media/filer_public/06/80/068011da-c1d9-4123-860b-95d8afc58590/romeo-728x370.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 75%; object-fit: cover;">`,
        badge: "NOVO",
        inStock: true
    },
    {
        id: 3,
        name: "Tênis Nike Air Force 1 07 Masculino",
        description: "O brilho perdura no Nike Air Force 1 ’07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.",
        price: 749.99,
        oldPrice: 799.99,
        category: "casual",
        sizes: [36, 37, 38, 39, 40, 41],
        image: `<img src="https://imgnike-a.akamaihd.net/360x360/01113751A3.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 4,
        name: "Sandalia Feminina Salto Baixo Bloco Vizzano",
        description: "A Sandália Feminina Salto Baixo Bloco Vizzano 6291.900 é uma peça essencial para arrematar um look, os calçados versáteis com suas combinações fáceis e estilosas, são os modelos que ficam bem com qualquer tipo de visual e, por isso, são indispensáveis.",
        price: 96.99,
        oldPrice: null,
        category: "feminino",
        sizes: [34, 35, 36, 37, 38, 39],
        image: `<img src="https://static.zattini.com.br/produtos/sandalia-feminina-salto-baixo-bloco-vizzano-6291900/19/NR3-1336-219/NR3-1336-219_zoom1.jpg?ts=1711477726&ims=1088x" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: null,
        inStock: true
    },
    {
        id: 5,
        name: "Dunk Low Baroque Brown",
        description: "Criado para as quadras, mas levado para as ruas, este ícone do basquete dos anos 80 retorna com detalhes clássicos e um toque retrô de basquete.",
        price: 766.99,
        oldPrice: 899.99,
        category: "casual",
        sizes: [39, 40, 41, 42, 43, 44],
        image: `<img src="https://imgnike-a.akamaihd.net/360x360/097557BPA3.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 6,
        name: "Women's Dunk Low",
        description: "Você sempre pode contar com um clássico. O Dunk Low Retro combina um visual monocromático com materiais premium e estofamento de pelúcia para um conforto revolucionário que dura. ",
        price: 493.99,
        oldPrice: null,
        category: "feminino",
        sizes: [35, 36, 37, 38, 39],
        image: `<img src="https://imgnike-a.akamaihd.net/360x360/094312IIA7.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "CONFORTO",
        inStock: true
    },
    {
        id: 7,
        name: "Tênis Fila Improve Masculino",
        description: "Indicado para caminhadas e corridas diárias, o Tênis FILA Improve oferece alta respirabilidade e conta com todos os atributos necessários para treinos.",
        price: 349.99,
        oldPrice: 399.99,
        category: "esportivo",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        image: `<img src="https://fila.vteximg.com.br/arquivos/ids/961576-2000-2000/F01R00139_534.jpg?v=638896115707200000" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 8,
        name: "Sapato Social de Couro Viccini Adam Preto",
        description: "Em estilo Horsebit, um dos estilos do Loafer, o Viccini Adam é definido por sua personalidade. Com material de alta qualidade, couro nobre, e metal estilo bridão na gravata, se mostra um modelo elegante. A costura manual da um toque de sofisticação no calçado.",
        price: 649.99,
        oldPrice: null,
        category: "social",
        sizes: [38, 39, 40, 41, 42],
        image: `<img src="https://cdn.shoppub.io/viccini/media/filer_public/32/bd/32bd21af-cba8-4836-b4dd-d5d3c7e1ed61/adam_preto.jpeg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: null,
        inStock: false
    },
    {
        id: 9,
        name: "Tênis de Corrida Masculino Mizuno Wave Invictus 4",
        description: "Um tênis com design icônico que te acompanha em todas as suas atividades. Sua entressola conta com a tecnologia Infinity Wave, proporcionando máximo amortecimento e estabilidade.",
        price: 449.99,
        oldPrice: 799.99,
        category: "esportivo",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        image: `<img src="https://mizunobr.vtexassets.com/arquivos/ids/233803-1600-1600?v=638224281704270000&width=1600&height=1600&aspect=true" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 10,
        name: "Tênis Nike Gamma Force Feminino",
        description: "Camadas sobre camadas de estilo e conforto - essa é uma força a ser reconhecida. O Gamma Force combina camurça com materiais sintético e genuíno em uma nova visão da clássica silhueta AF1.",
        price: 474.99,
        oldPrice: 499.99,
        category: "feminino",
        sizes: [38, 39, 40, 41],
        image: `<img src="https://imgnike-a.akamaihd.net/360x360/02567557A8.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "OFERTA",
        inStock: true
    },
    {
        id: 11,
        name: "Tênis Rapid Court Low",
        description: "Ande na cidade com o estilo das quadras. Com detalhes inspirados no basquete direto dos nossos arquivos, este tênis adidas de cano baixo está pronto para intensificar seu jogo. O couro sintético é acentuado com suede macio e tudo isso sobre um cupsole de borracha aderente.",
        price: 399.99,
        oldPrice: null,
        category: "casual",
        sizes: [38, 39, 40, 41, 42, 43],
        image: `<img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/635f6e44056c4764b2a9cd80805aaf76_9366/Tenis_Rapid_Court_Low_Preto_JP5255_01_00_standard.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "CONFORTO",
        inStock: true
    },
    {
        id: 12,
        name: "Sapato Social Oxford Melrose Whisky",
        description: "LOUIE Oxford Melrose: extremamente versátil e elegante, este Oxford veste bem os pés mais finos e é o sapato oficial dos executivos e dos homens clássicos que não dispensam a boa alfaiataria.",
        price: 999.99,
        oldPrice: null,
        category: "social",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        image: `<img src="https://www.louie.com.br/loja/image/cache/data/colecao-2019/viccini/MELROSE/melrose%20whisy%202-550x550.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "TOP",
        inStock: true
    },
    {
        id: 13,
        name: "Sandália Vizzano Salto Grosso Glitter Feminina - Dourado",
        description: "Com designs super atualizados, as sandálias conquistam os looks mais frescos com charme e praticidade. E para quem não abre mão de um bom salto, a idéia é apostar naqueles com um mood mais comfy como os saltos blocos, pois deixam o visual elegante na medida certa, sem abrir mão do conforto.",
        price: 289.99,
        oldPrice: null,
        category: "feminino",
        sizes: [38, 39, 40, 41, 42],
        image: `<img src="https://static.zattini.com.br/produtos/sandalia-vizzano-salto-grosso-glitter-feminina/70/2DD-7704-070/2DD-7704-070_zoom1.jpg?ts=1694583853&ims=1088x" alt="Tênis Sport Premium" style="width: 110%; height: 100%; object-fit: cover;">`,
        badge: null,
        inStock: true
    },
    {
        id: 14,
        name: "Tênis Forum Low CL",
        description: "O tênis adidas Forum tem deixado sua marca no estilo urbano há décadas. Este par de cano baixo traz toda essa herança para a próxima geração de lançadores de tendência. Combine com jeans ou qualquer outra peça no seu guarda-roupa. O cabedal misto tem uma silhueta clássica que combina estilos e ocasiões.",
        price: 799.99,
        oldPrice: null,
        category: "casual",
        sizes: [38, 39, 40, 41, 42, 43],
        image: `<img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/59d05358328d4f60bfc936bf87760a7f_9366/Tenis_Forum_Low_CL_Branco_JI3272_01_00_standard.jpg" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: null,
        inStock: true
    },
    {
        id: 15,
        name: "Tênis FILA Racer Speedzone Feminino Roxo",
        description: "O Tênis para Corrida Feminino FILA Racer Speedzone é indicado para todos os tipos de treinos e provas de longas e curtas distâncias.",
        price: 599.99,
        oldPrice: null,
        category: "feminino",
        sizes: [34, 35, 36, 37, 38, 39],
        image: `<img src="https://fila.vteximg.com.br/arquivos/ids/940842-2000-2000/F02R00154_6757.jpg?v=638798310019300000" alt="Tênis Sport Premium" style="width: 100%; height: 100%; object-fit: cover;">`,
        badge: "CONFORTO",
        inStock: true
    },
];

// ===== VARIÁVEIS GLOBAIS =====
let cart = [];
let favorites = [];
let filteredProducts = [...products];
let currentUser = null;

// Usuários simulados para demonstração
const mockUsers = [
    {
        id: 1,
        name: "João Silva",
        email: "joao@email.com",
        password: "123456",
        phone: "(11) 99999-9999",
        birthdate: "1990-01-01",
        createdAt: "2024-01-15"
    }
];

// ===== ELEMENTOS DO DOM =====
const elements = {
    productsGrid: document.getElementById('productsGrid'),
    cartIcon: document.getElementById('cartIcon'),
    cartCount: document.getElementById('cartCount'),
    cartModal: document.getElementById('cartModal'),
    closeModal: document.getElementById('closeModal'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    categoryFilter: document.getElementById('categoryFilter'),
    sizeFilter: document.getElementById('sizeFilter'),
    priceFilter: document.getElementById('priceFilter'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    newsletterForm: document.getElementById('newsletterForm'),
    emailInput: document.getElementById('emailInput'),
    formMessage: document.getElementById('formMessage'),
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.getElementById('navLinks'),
    loading: document.getElementById('loading'),
    contactForm: document.getElementById('contactForm'),
    contactFormMessage: document.getElementById('contactFormMessage'),
    // Elementos de autenticação
    userIcon: document.getElementById('userIcon'),
    userDropdown: document.getElementById('userDropdown'),
    userInfo: document.getElementById('userInfo'),
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    authButtons: document.getElementById('authButtons'),
    userActions: document.getElementById('userActions'),
    loginBtn: document.getElementById('loginBtn'),
    registerBtn: document.getElementById('registerBtn'),
    loginModal: document.getElementById('loginModal'),
    registerModal: document.getElementById('registerModal'),
    closeLoginModal: document.getElementById('closeLoginModal'),
    closeRegisterModal: document.getElementById('closeRegisterModal'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    loginMessage: document.getElementById('loginMessage'),
    registerMessage: document.getElementById('registerMessage'),
    switchToRegister: document.getElementById('switchToRegister'),
    switchToLogin: document.getElementById('switchToLogin'),
    logoutLink: document.getElementById('logoutLink')
};

// ===== FUNÇÕES UTILITÁRIAS =====
function formatCurrency(value) {
    return value.toFixed(2).replace('.', ',');
}

function showLoading() {
    if (elements.loading) {
        elements.loading.classList.add('active');
    }
}

function hideLoading() {
    if (elements.loading) {
        elements.loading.classList.remove('active');
    }
}

function showMessage(message, type = 'success') {
    if (elements.formMessage) {
        elements.formMessage.textContent = message;
        elements.formMessage.className = `form-message ${type}`;
        elements.formMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.formMessage.classList.remove('success', 'error');
            elements.formMessage.style.display = 'none';
        }, 3000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAuthMessage(messageId, message, type) {
    const messageElement = document.getElementById(messageId);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `auth-message ${type}`;
        messageElement.style.display = 'block';
        
        setTimeout(() => {
            messageElement.classList.remove('success', 'error');
            messageElement.style.display = 'none';
        }, 5000);
    }
}

function clearAuthMessages() {
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    
    if (loginMessage) {
        loginMessage.style.display = 'none';
        loginMessage.className = 'auth-message';
    }
    if (registerMessage) {
        registerMessage.style.display = 'none';
        registerMessage.className = 'auth-message';
    }
}

// ===== SISTEMA DE AUTENTICAÇÃO =====
function toggleUserDropdown() {
    if (elements.userDropdown) {
        elements.userDropdown.classList.toggle('active');
    }
}

function closeUserDropdown() {
    if (elements.userDropdown) {
        elements.userDropdown.classList.remove('active');
    }
}

function openLoginModal() {
    if (elements.loginModal) {
        elements.loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        clearAuthMessages();
    }
}

function openRegisterModal() {
    if (elements.registerModal) {
        elements.registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        clearAuthMessages();
    }
}

function closeAuthModals() {
    if (elements.loginModal) {
        elements.loginModal.classList.remove('active');
    }
    if (elements.registerModal) {
        elements.registerModal.classList.remove('active');
    }
    document.body.style.overflow = '';
    clearAuthMessages();
}

function switchToRegisterModal() {
    if (elements.loginModal && elements.registerModal) {
        elements.loginModal.classList.remove('active');
        elements.registerModal.classList.add('active');
        clearAuthMessages();
    }
}

function switchToLoginModal() {
    if (elements.registerModal && elements.loginModal) {
        elements.registerModal.classList.remove('active');
        elements.loginModal.classList.add('active');
        clearAuthMessages();
    }
}

// Toggle password visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleBtn = passwordInput.nextElementSibling;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

// Check password strength
function checkPasswordStrength(password) {
    const strengthIndicator = document.getElementById('passwordStrength');
    if (!strengthIndicator) return;
    
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    strengthIndicator.className = 'password-strength';
    
    if (strength < 2) {
        strengthIndicator.classList.add('weak');
    } else if (strength < 4) {
        strengthIndicator.classList.add('medium');
    } else {
        strengthIndicator.classList.add('strong');
    }
}

// Processar login
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(elements.loginForm);
    const email = formData.get('email').trim();
    const password = formData.get('password');
    const remember = formData.get('remember');
    
    // Validação básica
    if (!email || !password) {
        showAuthMessage('loginMessage', 'Por favor, preencha todos os campos!', 'error');
        return;
    }
    
    // Mostrar loading
    const submitBtn = elements.loginForm.querySelector('.auth-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    
    // Simular processo de login
    setTimeout(() => {
        // Verificar credenciais
        const user = mockUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Login bem-sucedido
            currentUser = { ...user };
            updateUserInterface();
            closeAuthModals();
            showMessage('Login realizado com sucesso!', 'success');
            
            // Salvar sessão se "lembrar de mim" estiver marcado
            if (remember) {
                try {
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                } catch (e) {
                    console.log('Session saved in memory only');
                }
            }
        } else {
            // Credenciais inválidas
            showAuthMessage('loginMessage', 'E-mail ou senha incorretos!', 'error');
        }
        
        // Restaurar botão
        submitBtn.disabled = false;
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
    }, 1500);
}

// Processar cadastro
function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(elements.registerForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const birthdate = formData.get('birthdate');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeTerms = formData.get('terms');
    const receiveEmails = formData.get('newsletter');
    
    // Validações
    if (!name || !email || !password || !confirmPassword || !agreeTerms) {
        showAuthMessage('registerMessage', 'Por favor, preencha todos os campos obrigatórios!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('registerMessage', 'Por favor, insira um e-mail válido!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showAuthMessage('registerMessage', 'A senha deve ter pelo menos 6 caracteres!', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAuthMessage('registerMessage', 'As senhas não coincidem!', 'error');
        return;
    }
    
    // Verificar se e-mail já existe
    if (mockUsers.find(u => u.email === email)) {
        showAuthMessage('registerMessage', 'Este e-mail já está cadastrado!', 'error');
        return;
    }
    
    // Mostrar loading
    const submitBtn = elements.registerForm.querySelector('.auth-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    
    // Simular processo de cadastro
    setTimeout(() => {
        // Criar novo usuário
        const newUser = {
            id: mockUsers.length + 1,
            name,
            email,
            password,
            phone,
            birthdate,
            receiveEmails,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        mockUsers.push(newUser);
        currentUser = { ...newUser };
        
        updateUserInterface();
        closeAuthModals();
        showMessage('Conta criada com sucesso! Bem-vindo(a) à StepStyle!', 'success');
        
        // Salvar usuário
        try {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } catch (e) {
            console.log('User saved in memory only');
        }
        
        // Restaurar botão
        submitBtn.disabled = false;
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
    }, 2000);
}

// Atualizar interface do usuário
function updateUserInterface() {
    if (currentUser) {
        // Mostrar informações do usuário
        if (elements.userName) elements.userName.textContent = currentUser.name;
        if (elements.userEmail) elements.userEmail.textContent = currentUser.email;
        
        // Alternar visibilidade dos elementos
        if (elements.authButtons) elements.authButtons.style.display = 'none';
        if (elements.userInfo) elements.userInfo.style.display = 'flex';
        if (elements.userActions) elements.userActions.style.display = 'flex';
        
        // Atualizar tooltip
        if (elements.userIcon) {
            elements.userIcon.setAttribute('data-tooltip', `Olá, ${currentUser.name.split(' ')[0]}`);
        }
    } else {
        // Usuário não logado
        if (elements.authButtons) elements.authButtons.style.display = 'flex';
        if (elements.userInfo) elements.userInfo.style.display = 'none';
        if (elements.userActions) elements.userActions.style.display = 'none';
        
        if (elements.userIcon) {
            elements.userIcon.setAttribute('data-tooltip', 'Minha Conta');
        }
    }
}

// Fazer logout
function handleLogout() {
    currentUser = null;
    updateUserInterface();
    closeUserDropdown();
    
    // Limpar dados salvos
    try {
        localStorage.removeItem('currentUser');
    } catch (e) {
        console.log('Session cleared from memory');
    }
    
    showMessage('Logout realizado com sucesso!', 'success');
}

// Login social (simulado)
function socialLogin(provider) {
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        
        // Simular login social bem-sucedido
        const socialUser = {
            id: 999,
            name: `Usuário ${provider.charAt(0).toUpperCase() + provider.slice(1)}`,
            email: `user@${provider}.com`,
            provider: provider,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        currentUser = socialUser;
        updateUserInterface();
        closeAuthModals();
        showMessage(`Login com ${provider} realizado com sucesso!`, 'success');
        
        try {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } catch (e) {
            console.log('Social login saved in memory only');
        }
    }, 1500);
}

// Esqueci minha senha (simulado)
function handleForgotPassword() {
    const email = document.getElementById('loginEmail').value.trim();
    
    if (!email) {
        showAuthMessage('loginMessage', 'Digite seu e-mail primeiro!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('loginMessage', 'Digite um e-mail válido!', 'error');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showAuthMessage('loginMessage', 'Instruções para redefinir a senha foram enviadas para seu e-mail!', 'success');
    }, 1000);
}

// Carregar sessão salva
function loadSavedSession() {
    try {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            updateUserInterface();
        }
    } catch (e) {
        console.log('No saved session found');
    }
}

// ===== RENDERIZAÇÃO DE PRODUTOS =====
function renderProducts(productsToRender = products) {
    if (!elements.productsGrid) return;
    
    if (productsToRender.length === 0) {
        elements.productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">😔</div>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outro termo</p>
            </div>
        `;
        return;
    }

    const productsHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.image}
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    R$ ${formatCurrency(product.price)}
                    ${product.oldPrice ? `<span class="product-old-price">R$ ${formatCurrency(product.oldPrice)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Adicionar ao Carrinho' : 'Esgotado'}
                    </button>
                    <button class="btn-favorite tooltip ${favorites.includes(product.id) ? 'active' : ''}" 
                            data-tooltip="Favoritar" onclick="toggleFavorite(${product.id})">
                        ${favorites.includes(product.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    elements.productsGrid.innerHTML = productsHTML;
}

// ===== SISTEMA DE FILTROS =====
function applyFilters() {
    const category = elements.categoryFilter ? elements.categoryFilter.value : '';
    const size = elements.sizeFilter ? elements.sizeFilter.value : '';
    const priceRange = elements.priceFilter ? elements.priceFilter.value : '';
    const searchTerm = elements.searchInput ? elements.searchInput.value.toLowerCase() : '';

    filteredProducts = products.filter(product => {
        // Filtro por categoria
        if (category && product.category !== category) return false;
        
        // Filtro por tamanho
        if (size && !product.sizes.includes(parseInt(size))) return false;
        
        // Filtro por faixa de preço
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            if (product.price < min || (max !== 999 && product.price > max)) return false;
        }
        
        // Filtro por busca
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm) && 
            !product.description.toLowerCase().includes(searchTerm)) return false;
        
        return true;
    });

    renderProducts(filteredProducts);
}

// ===== SISTEMA DE CARRINHO =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCartItems();
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            renderCartItems();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (elements.cartCount) {
        elements.cartCount.textContent = totalItems;
        
        if (totalItems > 0) {
            elements.cartCount.style.display = 'flex';
        } else {
            elements.cartCount.style.display = 'none';
        }
    }
}

function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function renderCartItems() {
    if (!elements.cartItems || !elements.cartTotal) return;
    
    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Seu carrinho está vazio</h3>
                <p>Adicione produtos para continuar</p>
            </div>
        `;
        elements.cartTotal.textContent = '0,00';
        return;
    }

    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${formatCurrency(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remover</button>
            </div>
        </div>
    `).join('');

    elements.cartItems.innerHTML = cartHTML;
    elements.cartTotal.textContent = formatCurrency(calculateCartTotal());
}

function showCartAnimation() {
    if (elements.cartIcon) {
        elements.cartIcon.style.transform = 'scale(1.2)';
        elements.cartIcon.style.color = '#e74c3c';
        
        setTimeout(() => {
            elements.cartIcon.style.transform = 'scale(1)';
            elements.cartIcon.style.color = '';
        }, 300);
    }
}

// ===== SISTEMA DE FAVORITOS =====
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    // Re-renderizar produtos para atualizar o estado dos favoritos
    renderProducts(filteredProducts);
    
    // Salvar favoritos no localStorage (se disponível)
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
        // Fallback se localStorage não estiver disponível
        console.log('Favorites saved in memory only');
    }
}

function favoritarProduto(nomeProduto) {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
    if (!usuario.favoritos.includes(nomeProduto)) {
      usuario.favoritos.push(nomeProduto);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert('Produto adicionado aos favoritos!');
    }
  } else {
    alert('Você precisa estar logado para favoritar.');
    window.location.href = 'login.html';
  }
}


// ===== MODAL DO CARRINHO =====
function openCartModal() {
    if (elements.cartModal) {
        elements.cartModal.classList.add('active');
        renderCartItems();
        document.body.style.overflow = 'hidden';
    }
}

function closeCartModal() {
    if (elements.cartModal) {
        elements.cartModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

const shippingSelect = document.getElementById('shippingSelect');

function updateCart() {
  cartItems.innerHTML = '';
  let subtotal = 0;
  cart.forEach((item, index) => {
    subtotal += item.price;
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      ${item.name} - R$ ${item.price.toFixed(2)}
      <button class="btn remove-item" data-index="${index}">x</button>
    `;
    cartItems.appendChild(div);
  });

  const shippingCost = parseFloat(shippingSelect?.value || 0);
  const total = subtotal + shippingCost;

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

if (shippingSelect) {
  shippingSelect.addEventListener('change', updateCart);
}

// ===== CHECKOUT =====
function processCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    showLoading();
    
    // Simular processamento do checkout
    setTimeout(() => {
        hideLoading();
        alert(`Pedido realizado com sucesso!\nTotal: R$ ${formatCurrency(calculateCartTotal())}\n\nObrigado pela preferência!`);
        cart = [];
        updateCartUI();
        closeCartModal();
    }, 2000);
}

// ===== NEWSLETTER =====
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = elements.emailInput ? elements.emailInput.value : '';
    
    if (!email || !email.includes('@')) {
        showMessage('Por favor, insira um e-mail válido!', 'error');
        return;
    }
    
    showLoading();
    
    // Simular envio
    setTimeout(() => {
        hideLoading();
        showMessage('Cadastro realizado com sucesso! Você receberá ofertas exclusivas em breve.');
        if (elements.emailInput) elements.emailInput.value = '';
    }, 1500);
}

// ===== MENU MOBILE =====
function toggleMobileMenu() {
    if (elements.navLinks) {
        elements.navLinks.classList.toggle('active');
    }
}

// ===== FORMULÁRIO DE CONTATO =====
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(elements.contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const subject = formData.get('subject');
    const message = formData.get('message').trim();
    
    // Validação
    if (!name || !email || !subject || !message) {
        showContactMessage('Por favor, preencha todos os campos obrigatórios!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showContactMessage('Por favor, insira um e-mail válido!', 'error');
        return;
    }
    
    if (message.length < 10) {
        showContactMessage('A mensagem deve ter pelo menos 10 caracteres!', 'error');
        return;
    }
    
    // Simular envio
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showContactMessage('Mensagem enviada com sucesso! Responderemos em breve.', 'success');
        elements.contactForm.reset();
        
        // Log dos dados (em produção, enviaria para servidor)
        console.log('Formulário de contato enviado:', {
            name, email, phone, subject, message, timestamp: new Date().toISOString()
        });
    }, 2000);
}

function showContactMessage(message, type) {
    if (elements.contactFormMessage) {
        elements.contactFormMessage.textContent = message;
        elements.contactFormMessage.className = `contact-form-message ${type}`;
        elements.contactFormMessage.style.display = 'block';
        
        setTimeout(() => {
            elements.contactFormMessage.classList.remove('success', 'error');
            elements.contactFormMessage.style.display = 'none';
        }, 5000);
    }
}

// ===== VALIDAÇÃO DE TELEFONE =====
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    input.value = value;
}

// ===== SMOOTH SCROLL APRIMORADO =====
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
        const headerHeight = 70; // Altura do header fixo
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (elements.navLinks) {
            elements.navLinks.classList.remove('active');
        }
    }
}

// ===== ANIMAÇÃO DE CONTADORES (SEÇÃO SOBRE) =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current).toLocaleString('pt-BR');
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target.toLocaleString('pt-BR');
                        if (counter.parentElement.querySelector('.stat-label').textContent.includes('%')) {
                            counter.textContent += '%';
                        }
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== ANIMAÇÕES E EFEITOS =====
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards de produtos
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===== INICIALIZAÇÃO =====
function init() {
    // Carregar sessão salva
    loadSavedSession();
    
    // Carregar favoritos salvos
    try {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
        }
    } catch (e) {
        favorites = [];
    }
    
    // Renderizar produtos iniciais
    renderProducts();
    updateCartUI();
    
    // Event Listeners
    setupEventListeners();
    
    // Ocultar loading inicial
    hideLoading();
}

function setupEventListeners() {
    // Filtros
    if (elements.categoryFilter) elements.categoryFilter.addEventListener('change', applyFilters);
    if (elements.sizeFilter) elements.sizeFilter.addEventListener('change', applyFilters);
    if (elements.priceFilter) elements.priceFilter.addEventListener('change', applyFilters);
    if (elements.searchInput) elements.searchInput.addEventListener('input', applyFilters);
    if (elements.searchBtn) elements.searchBtn.addEventListener('click', applyFilters);
    
    // Carrinho
    if (elements.cartIcon) elements.cartIcon.addEventListener('click', openCartModal);
    if (elements.closeModal) elements.closeModal.addEventListener('click', closeCartModal);
    if (elements.checkoutBtn) elements.checkoutBtn.addEventListener('click', processCheckout);
    
    // Newsletter
    if (elements.newsletterForm) elements.newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Formulário de Contato
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleContactSubmit);
        
        // Formatação de telefone
        const phoneInput = document.getElementById('contactPhone');
        if (phoneInput) {
            phoneInput.addEventListener('input', () => formatPhone(phoneInput));
        }
    }
    
    // Sistema de Autenticação
    if (elements.userIcon) elements.userIcon.addEventListener('click', toggleUserDropdown);
    if (elements.loginBtn) elements.loginBtn.addEventListener('click', openLoginModal);
    if (elements.registerBtn) elements.registerBtn.addEventListener('click', openRegisterModal);
    if (elements.closeLoginModal) elements.closeLoginModal.addEventListener('click', closeAuthModals);
    if (elements.closeRegisterModal) elements.closeRegisterModal.addEventListener('click', closeAuthModals);
    if (elements.loginForm) elements.loginForm.addEventListener('submit', handleLogin);
    if (elements.registerForm) elements.registerForm.addEventListener('submit', handleRegister);
    if (elements.switchToRegister) elements.switchToRegister.addEventListener('click', switchToRegisterModal);
    if (elements.switchToLogin) elements.switchToLogin.addEventListener('click', switchToLoginModal);
    if (elements.logoutLink) elements.logoutLink.addEventListener('click', handleLogout);
    
    // Esqueci minha senha
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleForgotPassword();
        });
    }
    
    // Verificação de força da senha
    const registerPassword = document.getElementById('registerPassword');
    if (registerPassword) {
        registerPassword.addEventListener('input', (e) => {
            checkPasswordStrength(e.target.value);
        });
    }
    
    // Formatação de telefone no cadastro
    const registerPhone = document.getElementById('registerPhone');
    if (registerPhone) {
        registerPhone.addEventListener('input', (e) => {
            formatPhone(e.target);
        });
    }
    
    // Menu Mobile
    if (elements.menuToggle) elements.menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Fechar dropdowns clicando fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) {
            closeUserDropdown();
        }
        
        // Fechar modal clicando fora
        if (e.target === elements.cartModal) {
            closeCartModal();
        }
        if (e.target === elements.loginModal) {
            closeAuthModals();
        }
        if (e.target === elements.registerModal) {
            closeAuthModals();
        }
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (targetId) {
                smoothScrollTo(targetId);
            }
        });
    });
    
    // Fechar menu mobile ao redimensionar tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && elements.navLinks) {
            elements.navLinks.classList.remove('active');
        }
    });
    
    // Teclas de atalho
    document.addEventListener('keydown', (e) => {
        // ESC para fechar modais
        if (e.key === 'Escape') {
            closeCartModal();
            closeAuthModals();
            closeUserDropdown();
        }
        
        // Ctrl+K para focar na busca
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            if (elements.searchInput) {
                elements.searchInput.focus();
            }
        }
    });
    
    // Inicializar animações de contador
    animateCounters();
}

// ===== FUNÇÕES DE DEMONSTRAÇÃO =====
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`
Produto: ${product.name}
Descrição: ${product.description}
Preço: R$ ${formatCurrency(product.price)}
Tamanhos disponíveis: ${product.sizes.join(', ')}
Em estoque: ${product.inStock ? 'Sim' : 'Não'}
        `);
    }
}

// ===== INICIALIZAR QUANDO O DOM ESTIVER PRONTO =====
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Adicionar animações após um pequeno delay
    setTimeout(() => {
        addScrollAnimations();
    }, 500);
});

// ===== FUNÇÕES GLOBAIS (para uso no HTML) =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleFavorite = toggleFavorite;
window.showProductDetails = showProductDetails;
window.togglePassword = togglePassword;
window.socialLogin = socialLogin;

document.querySelectorAll('.footer-category').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        if (elements.categoryFilter) {
            elements.categoryFilter.value = category; // seleciona no filtro
            applyFilters(); // reaplica os filtros
            window.scrollTo({ top: document.getElementById('products').offsetTop - 50, behavior: 'smooth' });
        }
    });
});
