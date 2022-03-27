function validate() {
    const field = document.getElementById('email');
    field.addEventListener('change', change);
    function change(ev){
        let email = ev.target.value;
        let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
        let validation = email.match(pattern);
        if (validation == null){
            field.className = 'error';
        } else {
            field.className = '';
        }
    }
}