class PetsDating extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div uk-scrollspy="cls:uk-animation-fade">
        <section class="pets-dating-container">
        
            <div class="couple-column">
                <div class="couples-pics">
                    <div>
                        <img id="img1" src="assets/Guido.png" alt="">
                    </div>
        
                    <div>
                        <img id="img2" src="assets/Abigail.png" alt="">
                    </div>
                </div> 
    
                <h2>Guido e Abigail</h2>
            </div>
    
            <div class="couple-column">
                <div class="couples-pics">
                    <div>
                        <img src="assets/pancho.png" alt="">
                    </div>
        
                    <div>
                        <img src="assets/kiwi.png" alt="">
                    </div>
                </div>
    
                <h2>Pancho e Kiwi</h2>
            </div>
    
            <div class="couple-column">
                <div class="couples-pics">
                    <div>
                        <img src="assets/bingo.png" alt="">
                    </div>
        
                    <div>
                        <img src="assets/jade.png" alt="">
                    </div>
                </div>
    
                <h2>Bingo e Jade</h2>
            </div>
        </section>
    </div>
    `
        
    }
}

customElements.define('pets-dating', PetsDating)