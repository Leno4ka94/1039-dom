const tableBody = document.querySelector('#table tbody');
const submit = document.querySelector('.btn');
const form = document.forms.form;
const nameIn = form.elements.fio;
const phoneIn = form.elements.phone;
const birthIn = form.elements.birthday;
const emailIn = form.elements.email;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const infoTable = new Info(nameIn.value, phoneIn.value,  birthIn.value, emailIn.value);

    tableBody.innerHTML += `<tr>
                                <td>${infoTable.name}</td>
                                <td>${infoTable.phone}</td>
                                <td>${infoTable.birth}</td>
                                <td>${infoTable.email}</td>
                            </tr>
                                `;
});

class Info {
    constructor(name, phone, birth, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.birth = birth == null ? '' : birth;
    }
};