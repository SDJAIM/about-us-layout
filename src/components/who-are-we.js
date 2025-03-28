class WhoAreWe extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback() {
    await this.loadData()
    await this.render()
  }

  loadData() {
    this.data = {
      categoryText: "who are we",
      title: "creating the perfect custom product",
      description: "What's more, we do it right! A full administration printing background. Pring shirts for yourself or your online business",
      images: {
        lg: "/public/banner-93.webp",
        md: "/public/banner-93.webp", 
        sm: "/public/banner-93.webp", 
        xs: "/public/banner-93.webp"
      },
      stats: [
        {
          value: '$48M',
          description: 'Invest in printing equipment'
        },
        {
          value: '1.400',
          description: 'person team across North America and Europe'
        },
        {
          value: '$64M+',
          description: 'sold by customers through TeeSpace'
        },
        {
          value: '26M+',
          description: 'items trusted to deliver'
        }
      ]
    }
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      button {
        background-color: transparent;
        border: none;
      }

      ul { 
        list-style: none; 
        padding: 0; 
        margin: 0; 
      }

      img {
        max-width: 100%;
        object-fit: cover;
        
      }

      h1, h2, h3, h4, h5, h6, span, li, label, a { 
        margin: 0;
        font-family: "Roboto", serif;
        font-style: normal
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      body {
        padding: 0;
        margin: 0;
        align-items: center;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: center;
      }

      img, picture {
        object-fit: cover;
        width: 100%;
      }

      .who-are-we {
        display: flex;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 2rem;
        width: 80%;
      }

      .text-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 0 2rem;
      }

      .purple-button {
        background-color: hsl(264, 100%, 94%);
        color: hsl(283, 41%, 66%);
        padding: 0.5rem;
        border-radius: 25px;
        width: 20%;
        text-align: center;
      }

      .purple-button h1 {
        font-size: 1rem; 
        font-weight: 700;
      }

      h2 {
        font-size: 2rem;
        font-weight: 700;
      }

      h3 {
        color: hsl(0, 1%, 59%);  
        font-size: 1rem;
        font-weight: 400;
      }

      .numbers-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
      }

      .number-box {
        color: #1ac673;
        font-size: 2.5rem;
        font-weight: 700;
      }

      .text-small {
        color: hsl(0, 1%, 59%);  
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0.5rem;
      }

    </style>

    <section class="who-are-we">
      <div class="image-container">
        <picture>
          <source srcset="${this.data.images.lg}" media="(min-width: 1920px)">
          <source srcset="${this.data.images.md}" media="(min-width: 1024px)">
          <source srcset="${this.data.images.sm}" media="(min-width: 768px)">
          <source srcset="${this.data.images.xs}" media="(min-width: 480px)">
          <img src="${this.data.images.xs}" alt="Custom Product">
        </picture>
      </div>
      <div class="text-container">
        <div class="button-container">
          <button class="purple-button">
            <h1>${this.data.categoryText}</h1>
          </button>
        </div>
        <h2>${this.data.title}</h2>
        <h3>${this.data.description}</h3>
        
        <div class="numbers-container">
          
        </div>
      </div>
    </section>
    `

    const numbersContainer = this.shadow.querySelector('.numbers-container')

    console.log(this.data.stats)
    
    this.data.stats.forEach(stat => {
      const numberBox = document.createElement('div');
      numberBox.classList.add('number-box');
      numbersContainer.appendChild (numberBox)

      const number = document.createElement('span');
      number.textContent = stat.value;

      const description = document.createElement('div');
      description.classList.add('text-small');
      const descriptionText = document.createElement('p');
      descriptionText.textContent = stat.description;
      description.appendChild(descriptionText);

      numberBox.appendChild(number);
      numberBox.appendChild(description);

    });
  }
}

customElements.define('who-are-we-component', WhoAreWe);