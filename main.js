const data = {
    name: "",
    age: 24,
    mail: "email@mail.ru",
    roles: ["user", "owner"],
    isAdmin: true,
    image: {
      url: "url_address",
      title: "some title",
      size: 100
    },
}

function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function validImage(image) {
    if (data.image && typeof data.image.url === 'string' && 
        typeof data.image.title === 'string' && 
        typeof data.image.size === 'number') {
        return 'Image проверен';
    } else {
        return 'Вы не вставили Image или вставили её не правильно';
    }
}

function validArray(arr) {
    if (Array.isArray(arr)) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                count += 1;
            }
        }
        if (count === arr.length) {
            return 'Массив проверен';
        } else {
            return "Все элементы массива должны быть типа 'String'";
        }
    } else {
        return 'Вы не ввели Массив или ввели его неправильно';
    }
}

function validObject(data) {
    if (typeof data.name === 'string') {
        console.log('Имя проверено');
    } else {
        console.log('Вы не ввели Имя или ввели его неправильно');
    }

    if (typeof data.age === 'number') {
        console.log('Возраст проверен');
    } else {
        console.log('Вы не ввели Возраст или ввели его неправильно');
    }

    if (validateEmail(data.mail)) {
        console.log('Mail проверен');
    } else {
        console.log('Вы не ввели Mail или ввели его неправильно');
    }

    console.log(validArray(data.roles));

    if (typeof data.isAdmin === 'boolean') {
        console.log('Root проверен');
    } else {
        console.log('Вы не ввели Root или ввели его неправильно');
    }

    console.log(validImage(data.image));
}

validObject(data);
