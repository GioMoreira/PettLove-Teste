class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <div class="top-menu">
                <ul>
                    <button class="btn-top btn-nav btn-menu" type="button" uk-toggle="target: #offcanvas-usage">
                        <img  src="assets/menuIcon.svg"  alt=""/>
                        <span class="text-btn">Menu</span> 
                    </button>

                    <div class='top-img' onclick="location.href='index.html'" >
                    <img src="assets/logo.svg" alt=""/> 
                    </div>
                    
                        

                    <button class="btn-top btn-nav btn-entrar">   
                        <img src="assets/loginIcon.svg" alt="" />                  
                        <span class="text-btn">Entrar</span>                   
                    </button>

                </ul>
            </div>
      </header>
      <div id="offcanvas-usage" uk-offcanvas class="my-menu">
            <div class="uk-offcanvas-bar">

                <button class="uk-offcanvas-close" type="button" uk-close></button>

                <div class="menu-opt" onclick="location.href='index.html'">
                    <h3>Home</h3>
                </div>

                <div class="menu-opt" onclick="location.href='petsdating.html'">
                    <h3>Pets Namorando</h3>
                </div>
 
              

                
            </div>
      </div>`
        
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="footer-content">
                <div class="footer-top">
                    <div class="img-container">
                        <img src="assets/logo-completo1.svg" alt="" />
                    </div>

                    <div class="news-container">
                        <p>Receba nossas novidades</p>
                        <div class="input-container">
                            <input type="text" placeholder="Digite seu email"/>
                            <button class="btn-register ">Cadastrar</button>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                <div class="links-container">
                    <div class="list-container">
                    <ul class="links-column">
                        <li>Sobre nós</li>
                        <li>Como funciona</li>
                        <li>Dúvidas frequentes</li>
                        <li>Blog</li>
                    </ul>

                    <ul class="links-column">
                        <li onclick="location.href='petsdating.html'">Pets Namorando</li>
                        <li>Comece agora!</li>
                        <li>Contato</li>
                    </ul>

                    <div class="links-column">
                        <span>Ajude uma entidade</span>
                        <p>
                        <b>SOS Vida Animal</b>
                        <img src="assets/moreicon.svg" alt=""/>
                        </p>

                        <p>
                        Banco Itaú: Ag <b>8804</b> Conta <b>01234-5</b>
                        </p>

                        <p>
                        PIX: <b>43.660.696/0001-95</b>
                        <img src="assets/copy-file.svg" alt="" />
                        </p>

                    </div>
                    </div>
                    

                    <div class="social-links-column">
                        <a href="https://www.facebook.com">
                            <div class="img-container">
                                <img src="assets/facebook.svg" alt="" />
                            </div>
                        </a>
                        

                        <a href="https://www.instagram.com">
                            <div class="img-container" >
                                <img src="assets/instagram.svg" alt="" />
                            </div>
                        </a>
                        

                        <a href="https://www.youtube.com"> 
                            <div class="img-container">
                                <img src="assets/youtube.svg" alt="" />
                            </div>
                        </a>
                    
                    </div>
                </div>

                <div class="terms-container">
                    <ul>
                    <a href="">Politica de Privacidade</a>
                    <a href="">Termos de uso</a>
                    <a href="">Política de cookies</a>
                    <a href="">Política de cancelamento</a>
                    </ul>
                </div>

                </div>

            </section>

            <section class="footer-credentials">
                <div class="credential">
                    <p>Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95</p>
                </div>
                
                <a href="#header">
                    <div class='btn-footer'>
                        <img src='assets/topicon1.svg' alt=''></img>
                    </div>
                </a>

                <a href="https://www.clickweb.com.br">
                    <div class="ftr-logo-container">
                        <img src='assets/clickweblogo.svg' alt=''></img>
                    </div>
                </a>
                
            </section>
      </footer>  `
        
    }
}

customElements.define('my-footer', MyFooter)