/*let users = JSON.parse(localStorage.getItem('users')) || [];
const adduser = (e) => {
    e.preventDefault();
    let user = {
        id: Date.now(),
        username: document.getElementById('regusername').value,
        password: document.getElementById('regpassword').value,  
        }   
        users.push(user);
        document.forms[0].reset();

        
    //console.warn('added' , {users} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' +JSON.stringify(users, '\t' ,2)

    localStorage.setItem(('MyusersList'), JSON.stringify(users) );
}
document.addEventListener('DOMContentLoaded' , () => {
    document.getElementById('regbtnid').addEventListener('click', adduser);
})
*/

/*
//----------------------
function displayData(){
    if(localStorage.getItem('MyusersList')){
        let {username,password} =  JSON.parse(localStorage.getItem('MyusersList'));
        var output =document.getElementById('#output');
        output.innerHTML= `
        <table>
            <tbody>
                <tr>
                    <td>User Name</td>
                    <td>${username}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>${password}</td>
            </tbody>
        </table>
    `;
    }
    displayData();
}
//---------------------------
*/







/*
function signup(e){
    event.preventDefault();
let regusername = document.getElementById('regusername').value;
let regpassword = document.getElementById('regpassword').value;

    let user = {
        regusername: regusername,
        regpassword: regpassword,    
    };

    let jsonstring = JSON.stringify(user);
    localStorage.setItem(regusername, jsonstring);
    console.log ('user added');

}

function loginFunc(e){
    event.preventDefault();
    let regusername = document.getElementById('regusername').value;
    let regpassword = document.getElementById('regpassword').value;
    let result = document.getElementById('result');
    let user = localStorage.getItem(regusername);        
    let data = JSON.parse(user);
    console.log(data);
}
*/