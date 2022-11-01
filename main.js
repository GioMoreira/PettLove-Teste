class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <div class="top-menu">
                <ul>
                    <button class="btn-top btn-nav btn-menu">
                        <img src="assets/menuIcon.svg"  alt=""/>
                        <span class="text-btn">Menu</span> 
                    </button>

                    <div class='top-img' >
                    <img src="assets/logo.svg" alt=""/> 
                    </div>
                    
                        

                    <button class="btn-top btn-nav btn-entrar">   
                        <img src="assets/loginIcon.svg" alt="" />                  
                        <span class="text-btn">Entrar</span>                   
                    </button>

                </ul>
            </div>
      </header>`
        
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
                        <li>Pets namorando</li>
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
                    <div class="img-container">
                        <img src="assets/facebook.svg" alt="" />
                    </div>

                    <div class="img-container">
                        <img src="assets/instagram.svg" alt="" />
                    </div>

                    <div class="img-container">
                        <img src="assets/youtube.svg" alt="" />
                    </div>
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
                
                <div class='btn-footer'>
                    <img src='assets/topicon1.svg' alt=''></img>
                </div>

                <div class="ftr-logo-container">
                    <img src='assets/clickweblogo.svg' alt=''></img>
                </div>
            </section>
      </footer>  `
        
    }
}

customElements.define('my-footer', MyFooter)