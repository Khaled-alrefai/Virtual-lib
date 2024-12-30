// تحديد جميع checkboxes 
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// تحديد جميع الصفوف المخفية
const hiddenRows = document.querySelectorAll('.my-row');

//  إضافة حدث عند اختيار أحد  checkboxes
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            hiddenRows[index].style.display = 'table-row';
        } else {
            hiddenRows[index].style.display = 'none';
        }
    });
});

// تحديد الزر المسؤول عن اظهار الفورم
const button = document.getElementById('my_submit');
// تحديد رسالة الخطأ
const output = document.getElementById('try');

// تحديد الفورم
const my_form = document.getElementById('my-form');

// عند الضغط على زر اظهار الفورم
button.addEventListener('click', () => {
    // معرفة زر الراديو المحدد
    const selectedRadio = document.querySelector('input[name="book"]:checked');
    // إذا كان الزر محدد
    if (selectedRadio) {
        const radioValue = selectedRadio.value;
        output.textContent = '';
        my_form.style.display = 'block';
    }
    // في حال الزر غير محدد
    else {
        // رسالة الخطأ
        output.textContent = 'Please select a book.';
    }
});

// ماذا يفعل الفورم عندما نضغط على زر إرسال الفورم

// تحديد زر ارسال الفورم
const my_form_submit = document.getElementById('my_form_submit');
// تحديد الإدخال الخاص برقم الشخص
const person_num = document.getElementById('per_num');
// تحديد الإدخال الخاص برقم الهاتف
const phone_num = document.getElementById('phone_num');
// تحديد الإدخال الخاص بالرقم الوطني
const nation_id = document.getElementById('nation_id');
// تحديد الإدخال الخاص باسم الشخص
const person_name = document.getElementById('person_name');

// عند الضغط على زر غرسال الفورم
my_form_submit.addEventListener('click', (event) => {
    //التحقق من الاسم بالعربي
    let pattern = /^[\u0621-\u064A\s]+$|^$/;
    if (!pattern.test(person_name.value)) {
        alert('اسم المستخدم غير صحيح');
        event.preventDefault();  // منع إرسال النموذج حتى يتم إدخال اسم صحيح
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

    // ملاحظة يتم التحقق من البريد الالكتروني عن طريق html

    // التحقق من اختيار الكتاب
    const selectedRadio = document.querySelector('input[name="book"]:checked');
    if (!selectedRadio) {
        alert('Please select a book.');
        event.preventDefault();  // منع إرسال النموذج إذا لم يتم اختيار الكتاب
        return;
    }

    // معرفة زر الراديو المحدد (الكتاب المحدد)
    const radioValue = selectedRadio.value;

    // استخدم القيمة الكاملة كاسم للفئة
    const h2Elements = document.getElementsByClassName(radioValue);

    // تحويل HTMLCollection إلى مصفوفة لاستخدام forEach
    const h2Array = Array.from(h2Elements);

    // تجميع نصوص الكتاب لعرضها 
    let message = '';
    h2Array.forEach((h2) => {
        message += h2.textContent + ' ';
    });

    //  عرض رسالة الشكر مع معلومات الكتاب
    alert(`Thank you for buying this book: ${message}`);
});
