let form = document.getElementById('myform')
let btn = document.getElementById('btn')

// add event listiner fonction to the form

form.addEventListener('submit', (e)=>{
    e.preventDefault()
// parse search input value

    let search = document.getElementById('search').value

// remove spaces from the search input value 
    
    let userName = search.split(' ').join('')
    console.log(userName)

// parse a promice by using the fetch APi
    
    let  gitUser = fetch('https://api.github.com/users/'+userName)
    .then((result)=>result.json())
    .then((data)=>{

        if (!userName){
            // alert('Please enter a valid username...!') 
            document.getElementById('error-text').innerText="Please enter a valid username...!"
            return;
        }

        else if (data.name === undefined){  
            // alert('User not found..!') 
            document.getElementById('error-text').innerText="User not found..!"
            return;
        } else {
            document.getElementById('error-text').innerText=""
        }

        if (data.bio === null){
            data.bio=""
        }

        if (data.name === null){
            data.name=""
        }

        if (data. location === null){
            data.location=""
        }

        // target the profile div in html to print the results data

        // use avatar 

        document.getElementById('profile').innerHTML=`
        <a target="_blank" href="https://github.com/${userName}"> <img src="${data.avatar_url}"/> <a/>
        `

        // print userName to the dom
        document.getElementById('name').innerText=`${data.name}`

        // user bio

        document.getElementById('bio').innerText=`Bio : ${data.bio}`
        // followers and followings
        document.getElementById('following').innerText=`Followers : ${data.followers} | Following : ${data.following}`

        // repositories

        document.getElementById('repo').innerText=`Repositories \n Public ${data.public_repos} | Private ${data.public_gists}`

        // user location
        
        document.getElementById('location').innerText=`Location : ${data.location}`
    console.log(data)
    console.log(data.name)
    search = ''


    })
    // .catch(error=>{
    //     alert(error)
    // })

})







































// let form = document.getElementById('myform')
// let btn = document.getElementById('btn')

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     let search = document.getElementById('search').value
//     // alert(search)
//     let user = search.split(' ').join('')
//     console.log(user)
//     let getUser = fetch("https://api.github.com/users/"+user)
//     .then((result) => result.json())
//     .then((data)=>{
//         document.getElementById('profile').innerHTML= `
//         <img src="${data.avatar_url}"/>
//         `



//     console.log(data)
//     console.log(data.location)
//     console.log(data.avatar_url)
//     // console.log()


//     })
// })















/*
fetch('https://api.github.com/users/USERNAME')
.then(res => res.json())
.then(res=>{
    return res.json
})
.then(data=>{
    console.log(data)
})


.catch(error => console.log(error))

*/