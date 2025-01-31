const data = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
    { id: 4, name: 'David', age: 40, email: 'david@example.com' },
    { id: 5, name: 'Eve', age: 22, email: 'eve@example.com' },
    { id: 6, name: 'Frank', age: 28, email: 'frank@example.com' },
    { id: 7, name: 'Grace', age: 33, email: 'grace@example.com' },
    { id: 8, name: 'Hank', age: 45, email: 'hank@example.com' },
];

let currentPage = 1;
const rowsPerPage = 3;
let filteredData = [...data];

const tableHeaders = document.getElementById('tableHeaders');
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('search');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const exportButton = document.getElementById('export');

function renderTableHeaders() {
    const keys = Object.keys(data[0]);
    tableHeaders.innerHTML = '';
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        th.addEventListener('click', () => sortTable(key));
        tableHeaders.appendChild(th);
    });
}

function renderTableBody() {
    tableBody.innerHTML = '';
    const startIndex = (currentPage - 1) * rowsPerPage;
    const pageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    pageData.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function sortTable(key) {
    filteredData.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
    renderTableBody();
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredData = data.filter(item =>
        Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm)
        )
    );
    currentPage = 1;
    renderTableBody();
}

function handleExport() {
    const csvContent = [
        Object.keys(data[0]).join(','),
        ...filteredData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table-data.csv';
    a.click();
    URL.revokeObjectURL(url);
}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTableBody();
    }
});

nextPageButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTableBody();
    }
});

searchInput.addEventListener('input', handleSearch);
exportButton.addEventListener('click', handleExport);

renderTableHeaders();
renderTableBody();
