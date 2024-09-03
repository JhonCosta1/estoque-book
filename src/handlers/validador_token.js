
const validador_token = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('Faça login para visualizar essa página.')
        window.location.href = '/public/index.html';
    }
}


export { validador_token }