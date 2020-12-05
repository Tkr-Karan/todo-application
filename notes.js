const button = document.querySelector('.btn');
const textarea = document.querySelector('#addmsg');
const userList = document.querySelector('.user')


function onSubmit()
 {
    if(textarea.value === ""){
        alert('Please enetr the details');
    }
    else{

        // Here we add(or create) the data(or Element)
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(` ${textarea.value}`));


        //here we append the child as an list
        userList.appendChild(li);

        //clear textarea
        textarea.value = "";
        
    }
}