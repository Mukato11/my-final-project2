const form = document.getElementById('signupForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const toggle = document.getElementById('togglePassword');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      
      const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.value.match(emailPattern)) {
        setError(email, 'emailError');
        valid = false;
      } else {
        clearError(email, 'emailError');
      }

      
      if (password.value.length < 6) {
        setError(password, 'passwordError');
        valid = false;
      } else {
        clearError(password, 'passwordError');
      }

      
      if (confirm.value !== password.value || confirm.value === '') {
        setError(confirm, 'confirmError');
        valid = false;
      } else {
        clearError(confirm, 'confirmError');
      }



        

      if (valid) {
        alert('✅ Registration successful!');
        window.location.href="index.html";
      }
    });

   
    toggle.addEventListener('click', () => {
      const type =
        password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      confirm.setAttribute('type', type);
      toggle.textContent = type === 'password' ? 'show' : 'hide';
    });

    
    function setError(input, errorId) {
      input.classList.add('invalid');
      input.classList.remove('success');
      document.getElementById(errorId).style.display = 'block';
    }

    function clearError(input, errorId) {
      input.classList.remove('invalid');
      input.classList.add('success');
      document.getElementById(errorId).style.display = 'none';
    }

  