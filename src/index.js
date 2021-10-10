import GetImages from './partials/apiService'
import imageTMP from './images.hbs'

const debounce = require('lodash.debounce')

const refs = {
    form:document.querySelector('.search-form'),
    gallery:document.querySelector('.gallery-js'),
btn:document.querySelector('[data-action="load-more"]')
}

const API = new GetImages();

function search (evt){
    evt.preventDefault();
    API.query = evt.target.value.trim();
    if (! API.query) {
     return 
      }
    API.resetPage();
    API.fetchImage().then(hits=> {clearGallery();createHTML(hits)}).catch(onError)
 
} 


function onLoadMore() {
    API.fetchImage().then(createHTML)

}


function createHTML(image){
refs.gallery.insertAdjacentHTML('beforeend',imageTMP(image));
}


function onError(err){
    refs.gallery.insertAdjacentHTML = ''
    return err
}


function clearGallery() {
    refs.gallery.innerHTML = '';

}

refs.form.addEventListener('input', debounce(search, 1000))
refs.btn.addEventListener('click', onLoadMore)