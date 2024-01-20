export default function loadNavbar() {
    const divContent = document.getElementById('content');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    let li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'home';
    li.textContent = 'Home';
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'contact';
    li.textContent = 'Contact';
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('tab');
    li.id = 'menu';
    li.textContent = 'Menu';
    ul.appendChild(li);

    nav.appendChild(ul);
    divContent.appendChild(nav);
}