const input = document.querySelector('#search');
const button = document.querySelector('#searchBtn');

function search() {
  const value = input.value.trim();
  if (!value) {
    input.focus();
    return;
  }
  // Marketplace search will be connected to the MySQL-backed API later.
  const params = new URLSearchParams({ q: value });
  window.location.href = `/search.html?${params}`;
}

button.addEventListener('click', search);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') search();
});

document.querySelectorAll('.popular button').forEach((item) => {
  item.addEventListener('click', () => {
    input.value = item.textContent;
    search();
  });
});
