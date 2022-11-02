
class PetsDating extends HTMLElement {
    connectedCallback() {
        
        this.innerHTML = `
        <div uk-scrollspy="cls:uk-animation-fade">
        <section class="pets-dating-container">
        
            <div class="couple-column">
                <div class="couples-pics">
                    <div>
                        <img id="" src="assets/Guido.png" alt="pet1">
                    </div>
        
                    <div>
                        <img id="pet2" src="assets/Abigail.png" alt="pet2">
                    </div>
                </div> 
    
                <h2 id="">Guido e Abigail</h2>
            </div>
    
            <div class="couple-column">
                <div class="couples-pics">
                    <div>
                        <img id="" src="assets/pancho.png" alt="pet1">
                    </div>
        
                    <div>
                        <img id="" src="assets/kiwi.png" alt="pet2">
                    </div>
                </div> 
    
                <h2 id="">Pancho e Kiwi</h2>
            </div>
    
            <div class="couple-column">
            <div class="couples-pics">
                <div>
                    <img id="" src="assets/bingo.png" alt="pet1">
                </div>
    
                <div>
                    <img id="" src="assets/jade.png" alt="pet2">
                </div>
            </div> 

            <h2 id="">Bingo e Jade</h2>
        </div>
            </div>
        </section>
    </div>
    `

    }
}

customElements.define('pets-dating', PetsDating)

function loadMore() {
    document.getElementById("pets-dating-content").insertAdjacentHTML('beforeend', '<pets-dating />')
}


