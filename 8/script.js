const overlay = document.getElementById('overlay');
const form = document.getElementById('feedbackForm');
const messageDiv = document.getElementById('message');

function openForm() {
    overlay.style.display = 'flex';
    history.pushState({ formOpen: true }, null, '#form');
    restoreFormValues();
}

function closeForm() {
    overlay.style.display = 'none';
    history.pushState(null, null, '/');
}

function submitForm() {
    const formData = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        organization: document.getElementById("organization").value,
        message: document.getElementById("message1").value,
        agree: document.getElementById("consent").checked,
    };
    var slapform = new Slapform();
    slapform.submit({
        form: 'xy0Yi906a',
        data: formData,
    })
        .then(function (response) {
            console.log('Success', response)
            messageDiv.textContent = 'Форма успешно отправлена!';
            clearForm();
        })
        .catch(function (e) {
            console.error('Fail', e)
            messageDiv.textContent = 'Ошибка при отправке формы. Пожалуйста, попробуйте снова.';
        })
}

function clearForm() {
    form.reset();
    saveFormValues();
}

function saveFormValues() {
    const formValues = {};
    Array.from(form.elements).forEach(element => {
        if (element.name) {
            formValues[element.name] = element.value;
        }
    });
    localStorage.setItem('formValues', JSON.stringify(formValues));
}

function restoreFormValues() {
    const storedValues = localStorage.getItem('formValues');
    if (storedValues) {
        const formValues = JSON.parse(storedValues);
        Object.keys(formValues).forEach(name => {
            const element = form.elements[name];
            if (element) {
                element.value = formValues[name];
            }
        });
    }
}

window.addEventListener('popstate', function (event) {
    if (event.state && event.state.formOpen) {
        openForm();
    } else {
        closeForm();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash === '#form') {
        openForm();
    }
});