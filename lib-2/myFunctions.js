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
const phone_num = document.getElementById('phone_num');
const nation_id = document.getElementById('nation_id');
const person_name = document.getElementById('person_name');

my_form_submit.addEventListener('click', (event) => {
    //التحقق من الاسم بالعربي
    let pattern = /^[\u0621-\u064A\s]+$|^$/;
    if (!pattern.test(person_name.value)) {
        alert('اسم المستخدم غير صحيح');
        event.preventDefault();  // منع إرسال النموذج حتى يتم إدخال رقم صحيح
        return;
    }
    //التحقق من صحة الرقم الوطني
    let pattern1 = /^\d{11}$/;
    if (!pattern1.test(nation_id.value)) {
        alert('الرقم الوطني غير صحيح');
        event.preventDefault();  // منع إرسال النموذج حتى يتم إدخال رقم صحيح
        return;
    }
    // التحقق من رقم الهاتف عند الضغط على الزر
    let pattern2 = /^09\d{8}$|^$/;
    if (!pattern2.test(phone_num.value)) {
        alert('رقم هاتف غير صحيح');
        event.preventDefault();  // منع إرسال النموذج حتى يتم إدخال رقم صحيح
        return;
    }


    // التحقق من اختيار الكتاب
    const selectedRadio = document.querySelector('input[name="book"]:checked');
    if (!selectedRadio) {
        alert('Please select a book.');
        event.preventDefault();  // منع إرسال النموذج إذا لم يتم اختيار الكتاب
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
    alert(`Thank you for buying this book: ${message}`);
});
