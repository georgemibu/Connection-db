async function getDinosaurios(){
    const res = fetch('http://localhost:4000/dinosaurios')
    const resJson = await res.json();
    return resJson;
}
