//let configData = document.getElementById('configData');

document.addEventListener('DOMContentLoaded', function() {
    const AppointementsTypes = [
        "Choose...",
        "Physical Meeting",
        "Virtual Meeting"
    ];

    const VirtualMeeting = [
        "Choose Platform",
        "WhatsApp Video Consultations",
        "Google Meet Consultations",
        "Zoom Call Consultations",
        "Microsoft Team Meeting",
        "Skype Video Consultation",
        "Telephone Consultation"
    ];

    const PhysicalMeeting = [
        "Choose Location",
        "London",
        "Manchester",
        "Brighton"
    ];

    const AreaLawConsultation = [
        "For Individuals",
        "Immigration law",
        "Family law",
        "Private Clients",
        "For Businesses",
        "Immigration Law",
        "Commercial Law"
    ];

    const TypeEnquiry = [
        "Select Area of Law First...",
        "Children Law",
        "Domestic Law",
        "Domestic Abuse",
        "Pre and Post-Nuptial Agreements"
    ];


    // Progress Bar
    let barDiv = document.createElement('div');
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    mainDiv.style.width = '900px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.flexWrap = 'nowrap';
    mainDiv.style.justifyContent = 'space-around';
    mainDiv.style.margin = '20px auto';

    // Creating circles
    for (let i = 1; i <= 6; i++) {
        let div = document.createElement('div');
        div.classList.add('item-' + i);
        div.textContent = i;
        div.classList.add('div' + i);
        div.style.width = '30px';
        div.style.height = '30px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.border = '1px solid black';
        div.style.borderRadius = '50%';
        div.style.position = 'relative';


        if (i === 1) {
            div.style.color = 'red';
            div.style.border = '1px solid red';
        }

        mainDiv.appendChild(div);

        // Create lines
        if (i < 6) {
            let line = document.createElement('p');
            line.classList.add('line-' + i);
            line.style.position = 'absolute';
            line.style.width = '120px';
            line.style.height = '1px';
            line.style.backgroundColor = i === 1 ? 'red' : 'black';
            line.style.top = '0 %';
            line.style.left = '100%';
            div.appendChild(line);
        }
    }

    // Create corresponding labels
    let labelsDiv = document.createElement('div');
    labelsDiv.classList.add('labels');
    labelsDiv.style.width = '100%';
    labelsDiv.style.display = 'flex';
    labelsDiv.style.justifyContent = 'space-around';
    labelsDiv.style.margin = '0 auto';

    let labels = ["Mode & Locations", "Select Solicitors", "Date and Time", "Personal Details", "Payment", "Success"];

    labels.forEach((label, index) => {
        let p = document.createElement('p');
        p.textContent = label;
        p.style.textAlign = 'center';
        p.style.width = '80px';
        p.style.marginTop = '10px';

        // Color labels based on current state
        if (index === 0) {
            p.style.color = 'red';
        }

        labelsDiv.appendChild(p);
    });

    document.body.appendChild(mainDiv);
    document.body.appendChild(labelsDiv);

    barDiv.appendChild(mainDiv);
    barDiv.appendChild(labelsDiv);


    let line = document.getElementsByClassName('item-1');
    console.log(line.innerText);

    // form Contents
    const mainContainer = document.querySelector(".container");
    const form = document.createElement('form');
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const btn = document.createElement('buton');
    const backBtn = document.createElement('button');


    btn.classList.add('btn_b123');
    backBtn.classList.add('btn_b123');
    backBtn.textContent = "Back";
    btn.textContent = "Next";
    buttons.appendChild(backBtn);
    buttons.appendChild(btn);

    form.classList.add('form_b123');

    mainContainer.appendChild(barDiv);
    mainContainer.appendChild(form);
    mainContainer.appendChild(buttons);

    // Helper funciton to elect elements by class and apply styles
    function applyStyles(selector, styles) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            for (const property in styles) {
                element.style[property] = styles[property];
            }
        });
    }



    // Apply styles to main container
    applyStyles('.container', {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "1250px",
        height: "400px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: '70px',
        marginLeft: '25px',
    });

    // Apply styles to  form
    applyStyles('.form_b123', {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "15px",
        width: "100%",
        maxHeight: "300px",
        marginTop: "50px",
    });

    applyStyles('.buttons', {
        width: "100%",
        height: '50px',
        display: 'flex',
        margin: '70px',
        justifyContent: 'space-between',
        marignRight: '20px',

    })

    applyStyles('.btn_b123', {
        height: '100%',
        width: '100px',
        marignRight: '20px',
        backfaceVisibility: 'hidden',
        background: '#332cf2',
        border: '0',
        borderRadius: '.375rem',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: 'Circular, Helvetica, sans-serif',
        fontSize: '1.125rem',
        fontWeight: '700',
        letterSpacing: '-.01em',
        lineHeight: '1.3',
        padding: '1rem 1.25rem',
        position: 'relative',
        textAlign: 'left',
        textDecoration: 'none',
        transform: 'translateZ(0) scale(1)',
        transition: 'transform .2s',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation'
    });



    // Helper function 
    function createFormItem(labelText, selectOptions) {
        const item = document.createElement('div');
        item.classList.add('item_b123');

        const label = document.createElement('label');
        label.classList.add('labels_b123');
        label.textContent = labelText;

        const select = document.createElement('select');
        select.classList.add('selects_b123');

        selectOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.textContent = optionText;
            select.appendChild(option);
        });

        item.appendChild(label);
        item.appendChild(select);
        form.appendChild(item);

        return { label, select };
    }

    const typeOfAppointment = createFormItem('Type of Appointment', AppointementsTypes);
    const locationPlatform = createFormItem('Location/Platform', ['Choose...']);
    const areaOfLaw = createFormItem('Area of Law for Your Consultation', ['Choose...']);
    const typeOfEnquiry = createFormItem('Type of Enquiry', ['Select Area of Law First...']);

    // Apply styles to the form div e.g lables,Selects- options..
    applyStyles('.item_b123', {
        display: "flex",
        flexDirection: "column",
        width: "calc(25% - 20px)"
    });

    // Apply styles to the labels
    applyStyles('.labels_b123', {
        display: "block",
        marginTop: "10px",

    });

    // Apply styles to the selects
    applyStyles('.selects_b123', {
        width: "100%",
        padding: "8px",
        marginTop: "5px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px"
    });

    function updateLocationOptions() {
        const selectedType = typeOfAppointment.select.value;
        locationPlatform.select.innerHTML = '';

        let options = [];
        if (selectedType === "Physical Meeting") {
            options = PhysicalMeeting;
        } else if (selectedType === "Virtual Meeting") {
            options = VirtualMeeting;
        } else {
            options = ["Choose..."];
        }

        options.forEach(val => {
            const option = document.createElement('option');
            option.textContent = val;
            //option.value = val;
            locationPlatform.select.appendChild(option);
        });
    }

    function enableConsultation() {
        const selectedLocation = locationPlatform.select.value;
        areaOfLaw.select.innerHTML = '<option>Choose...</option>';

        if (selectedLocation !== "Choose Platform" && selectedLocation !== "Choose Location") {
            AreaLawConsultation.forEach(val => {
                const option = document.createElement('option');
                option.textContent = val;
                areaOfLaw.select.appendChild(option);
            });
        }
    }

    function enableEnquiry() {
        const selectedAreaLaw = areaOfLaw.select.value;
        typeOfEnquiry.select.innerHTML = '<option>Choose...</option>';

        if (selectedAreaLaw !== "Choose...") {
            TypeEnquiry.forEach(val => {
                const option = document.createElement('option');
                option.textContent = val;
                typeOfEnquiry.select.appendChild(option);
            });
        }
    }

    typeOfAppointment.select.addEventListener('change', updateLocationOptions);
    typeOfAppointment.select.addEventListener('change', enableConsultation);
    typeOfAppointment.select.addEventListener('change', enableEnquiry);
    locationPlatform.select.addEventListener('change', enableConsultation);
    locationPlatform.select.addEventListener('change', enableEnquiry);
    areaOfLaw.select.addEventListener('change', enableEnquiry);

    updateLocationOptions();
});