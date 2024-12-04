// تحديد جميع checkboxes 
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const hiddenRows = document.querySelectorAll('.my-row');

// إضافة حدث  checkboxes
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            hiddenRows[index].style.display = 'table-row';
        } else {
            hiddenRows[index].style.display = 'none';
        }
    });
});

// submit button 
const button = document.getElementById('my_submit');
const output = document.getElementById('try');

// form 
const my_form = document.getElementById('my-form');

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="book"]:checked');
    if (selectedRadio) {
        const radioValue = selectedRadio.value;
        output.textContent = '';
        my_form.style.display = 'block';
    } else {
        output.textContent = 'Please select a book.';
    }
});

// what to do when form submit
const my_form_submit = document.getElementById('my_form_submit');
const person_num = document.getElementById('per_num');

my_form_submit.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="book"]:checked');
    if (!selectedRadio) {
        alert('Please select a book.');
        return;
    }

    const radioValue = selectedRadio.value;

    // استخدم القيمة الكاملة كاسم للفئة
    const h2Elements = document.getElementsByClassName(radioValue);

    // تحويل HTMLCollection إلى مصفوفة لاستخدام forEach
    const h2Array = Array.from(h2Elements);

    // تجميع النصوص من عناصر h2
    let message = '';
    h2Array.forEach((h2) => {
        message += h2.textContent + ' ';
    });

    // عرض رسالة الشكر
    alert(`Thank you for buying this book: - ${radioValue}. Info: ${message}`);
});

