export default class GetImages {
    constructor(){
        this.searchQuery = '';
        this.KEY = '23697885-1be4d713ea150551106b2a392'
    this.URL = 'https://pixabay.com/api/'
    this.page = 1;

}
    fetchImage(){
        const mainURL = `${this.URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.KEY}` 
        return  fetch(mainURL).then(resp=>resp.json()).then(data => {
            this.incrementPage();
            return data.hits
        })
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        return this.searchQuery = newQuery;
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1
    }

}

