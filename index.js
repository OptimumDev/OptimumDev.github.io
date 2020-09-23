const SHOWN = "shown"


addAge();


function addAge() {
    const dateOfBirth = document.querySelector('#date-of-birth');
    const birthDate = new Date(1999, 10, 25);
    const age = Math.abs(new Date(Date.now() - birthDate.getTime()).getFullYear() - 1970);

    const ageDigit = age % 10;
    let years;
    if (ageDigit === 0 || ageDigit > 4 || age > 10 && age < 20) {
        years = 'лет';
    } else if (ageDigit === 1) {
        years = 'год';
    } else {
        years = 'года';
    }
    addHint(dateOfBirth, ` (${age} ${years})`)
}

function toggleMenuVisibility() {
    const menu = document.querySelector("#menu");
    menu.className = menu.className === SHOWN ? "" : SHOWN;
}

function toggleExpectationsVisibility() {
    const shownClass = `${SHOWN} shadow`
    const expectations = document.querySelector('#course-expectations');
    expectations.className = expectations.className === shownClass ? "" : shownClass;
}

function addHint(element, hintText) {
    const hint = document.createElement('span')
    hint.className = 'hint'
    hint.innerText = hintText;
    element.append(hint)
}