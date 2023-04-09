const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const registerButom = document.querySelector('.submit')

const fetchAPI = async () => {
  const res = await fetch('http://localhost:3000')
  const data = res.json()
  console.log(data)
}

const register = async () => {
  const requestBody = {
    name: name.value,
    password: password.value,
    email: email.value
  };

  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
}

registerButom.addEventListener('click', register);