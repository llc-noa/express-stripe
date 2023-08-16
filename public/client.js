document.addEventListener('DOMContentLoaded', async () => {
    let searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    if (searchParams.has('session_id')) {
        const session_id = searchParams.get('session_id');
        console.log(session_id);
        document.getElementById('session-id').setAttribute('value', session_id);
    }
});
