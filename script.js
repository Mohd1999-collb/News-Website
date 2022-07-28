console.log('This is news website.');

// Your API key is: 079f397015a74f7c84b1c004753cb08c

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '079f397015a74f7c84b1c004753cb08c';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?${source}&country=in&apiKey=079f397015a74f7c84b1c004753cb08c`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(index < 10){
            let news = `<div class="card my-2" style="background-color: #FBDFB0">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}"  style="text-decoration: none;">
                                   <b style="color: Black; font-family:sans-serif;"> Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                          
                        </div>`;
            
            newsHtml += news;
            }
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()



