// console.log('Hello World')

const helloworld_box = document.getElementById('hello-world')
const data_box = document.getElementById('data-box')
const postForm = document.getElementById('post-form')
const title = document.getElementById('id_title')
const body = document.getElementById('id_body')
const csrf = document.getElementsByName('csrfmiddlewaretoken')


// helloworld_box.textContent = 'Hello World x2'


// $.ajax({
//     type : 'GET',
//     url : '/hello/',
//     success: function(response){
//         console.log('response', response)
//     },
//     error: function(error){
//         console.log('error', error)
//     },
// })


$.ajax({
    type:'GET',
    url: '/data/',
    success: function(response){
        // console.log(response)
        const data = response.data
        data.forEach(el => {
            data_box.innerHTML += `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.body}</p>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-1">
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });
    },
    error: function(error){
        console.log(error)
    },
})



postForm.addEventListener('submit', e=>{
    e.preventDefault()

    $.ajax({
        type:'POST',
        url:'',
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
            'title': title.value,
            'body': body.value
        },
        success: function(response){
            console.log(response)
            data_box.insertAdjacentHTML('afterbegin',`
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${response.title}</h5>
                        <p class="card-text">${response.body}</p>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-1">
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
                </div>      
            `)
        },
        error: function(error){
            console.log(error)
        },
    })
})