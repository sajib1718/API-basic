const loadUserFetch = () => {

    const url = `https://randomuser.me/api/?gender=female`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayUrl(data.results[0]))
        .catch(error => console.log(error));


}

const displayUrl = user => {
    console.log(user);
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    const res = await fetch(url);
    const data = await res.json();

    displayUrl(data.results[0])


}