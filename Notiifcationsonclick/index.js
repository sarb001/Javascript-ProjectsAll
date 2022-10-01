const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hey , how are you ?',
    'Learning HTML,CSS & jS',
    'Follow me at @greatedv',
    'Hello ,Imsarb '
];

const type = ['info','error','success'];

button.addEventListener('click',() => {createnotification() })

 function createnotification(messages = null , type = null)
 {
     const notif = document.createElement('div');
     notif.classList.add('toast');

     notif.classList.add(type ? type:getrandomtypes());

     notif.innerText = messages ? messages : getrandomMessages();

     toasts.appendChild(notif);

     setTimeout(() =>
     {
        notif.remove();
     },3000)


 }
     function getrandomtypes()
     {
        return  type[Math.floor(Math.random()* type.length)];
     }

     function getrandomMessages()
     {
        return  messages[Math.floor(Math.random()* messages.length)];
     }
 