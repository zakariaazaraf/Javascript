let postsContainer = document.querySelector('#fetchPosts')
const fetchPostsBtn = document.querySelector('#fetchBtn')
const postDataBtn = document.querySelector('#postDataBtn')
const url = 'https://jsonplaceholder.typicode.com/posts';


const getPosts = async () => {

    try{
        const response = await fetch(url);
        const data = await response.json();
        displayPosts(data);
    }catch(e){
        console.log(`Error Encoutered ${e}`);
    }
}

function displayPosts(data){
    
    data.forEach(post =>{
        postsContainer.innerHTML += `
            <h4>userId : ${post.userId}</h4>
            <h4>Id : ${post.id}</h4>
            <h2>title : ${post.title}</h2>
            <p>body : ${post.body}</p>
        `;
    });

}

fetchPostsBtn.addEventListener('click', (e)=>{
    //getPosts();
    e.target.style.display = 'none';
    getPostsXHR();
});



const getPostsXHR = ()=>{

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = ()=>{
        
        if(xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            displayPosts(data);
            return;
        }
        console.log('Failed ...');
    }
    xhr.send();
}

const postData = async ()=>{
    const postDataObject = {name: 'zakaria', age: 24};
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDataObject)
        });
    
        const data = await response.json()
    
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}

postDataBtn.addEventListener('click', ()=>{
    postData(url)
})

//xhr.setRequestHeader('Content-Type', 'application/json');

// file_get_contents(php://input)
//json_decode($requestClient, true) convert object to array