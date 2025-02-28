const forms = document.getElementsByTagName('section')

const summary = document.getElementById('summary')

const next = document.getElementById('next')
const next1 = document.getElementById('next1')
const prev1 = document.getElementById('prev1')

const next2 = document.getElementById('next2')
const prev2 = document.getElementById('prev2')

const next3 = document.getElementById('next3')
const prev3 = document.getElementById('prev3')



let page = 0
function nextpage() {

    for (let i=0; i < forms.length; i++) {
        if (i === page) {
            forms[i].style.display = 'block'
        } else {
            forms[i].style.display = "none"
        }
    }

}

next.addEventListener('click',function() {
    page += 1
    nextpage()
})

next1.addEventListener('click',function() {
    page += 1
    nextpage()
})
prev1.addEventListener('click',function() {
    page -= 1
    nextpage()
})

next2.addEventListener('click',function() {
    page += 1
    nextpage()
})
prev2.addEventListener('click',function() {
    page -= 1
    nextpage()
})


prev3.addEventListener('click',function() {
    page -= 1
    nextpage()
})
nextpage()

let data = {
    username: "",
    email: "",
    phone: "",
    date: "",
    select: "",
    gender: "",
    boxes: [],
    hallticket: "",
    year: "",
    marks: "",
    school: "",
    interhall: "",
    interyear: "",
    intermarks: "",
    inter: "",
    degreehall: "",
    degreeyear: "",
    degreemarks: "",
    degree: "",
    pghall: "",
    pgyear: "",
    pgmarks: "",
    pg: "",
    phno: "",
    pstreet: "",
    pcity: "",
    pstate: "",
    ppincode: "",
    hno: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    aadhar: "",
    pan: "",
    pnumber: "",
}

next3.addEventListener('click',function() {
    page += 1
    nextpage()

    data.username = document.getElementById('username').value;
    data.email = document.getElementById('email').value;
    data.phone = document.getElementById('phone').value;
    data.date = document.getElementById('date').value;
    data.select = document.getElementById('status').value;

    const gender = document.querySelector('input[name="gender"]:checked');
    data.gender = gender ? gender.value : null;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        data.boxes.push(checkbox.value);
    });

    data.hallticket = document.getElementById('hallticket').value
    data.year = document.getElementById('year').value
    data.marks = document.getElementById('marks').value
    data.school = document.getElementById('school').value

    data.interhall = document.getElementById('interhall').value
    data.interyear = document.getElementById('interyear').value
    data.intermarks = document.getElementById('intermarks').value
    data.inter = document.getElementById('inter').value


    data.degreehall = document.getElementById('degreehall').value
    data.degreeyear = document.getElementById('degreeyear').value
    data.degreemarks = document.getElementById('degreemarks').value
    data.degree = document.getElementById('degree').value

    data.pghall = document.getElementById('pghall').value
    data.pgyear = document.getElementById('pgyear').value
    data.pgmarks = document.getElementById('pgmarks').value
    data.pg = document.getElementById('pg').value


    data.phno = document.getElementById('phno').value
    data.pstreet = document.getElementById('pstreet').value
    data.pcity = document.getElementById('pcity').value
    data.pstate = document.getElementById('pstate').value
    data.ppincode = document.getElementById('ppincode').value
    data.hno = document.getElementById('hno').value
    data.street = document.getElementById('street').value
    data.city = document.getElementById('city').value
    data.state = document.getElementById('state').value
    data.pincode = document.getElementById('pincode').value

    data.aadhar = document.getElementById('aadhar').value
    data.pan = document.getElementById('pan').value
    data.pnumber = document.getElementById('pnumber').value



    const puser = document.createElement('p')
    puser.textContent = `Name: ${data.username}`
    summary.appendChild(puser)

    const pemail = document.createElement('p')
    pemail.textContent = `Email: ${data.email}`
    summary.appendChild(pemail)

    const pphone = document.createElement('p')
    pphone.textContent = `Phone: ${data.phone}`
    summary.appendChild(pphone)

    const pdof = document.createElement('p')
    pdof.textContent = `Date Of Birth: ${data.date}`
    summary.appendChild(pdof)

    const pselect = document.createElement('p')
    pselect.textContent = `Status: ${data.select}`
    summary.appendChild(pselect)

    const pgender = document.createElement('p')
    pgender.textContent = `Gender: ${data.gender}`
    summary.appendChild(pgender)


    const phave = document.createElement('p')
    phave.textContent = `Do You Have: ${data.boxes}`
    summary.appendChild(phave)

    const phall = document.createElement('p')
    phall.textContent = `HallTicket: ${data.hallticket}`
    summary.appendChild(phall)

    const paadhar = document.createElement('p')
    paadhar.textContent = `Aadhar: ${data.aadhar}`
    summary.appendChild(paadhar)

    const ppan = document.createElement('p')
    ppan.textContent = `pan: ${data.pan}`
    summary.appendChild(ppan)


})


