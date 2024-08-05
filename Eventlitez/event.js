let EventName = document.getElementById('eventname');
let EventDate = document.getElementById('eventdate');
let EventTime = document.getElementById('eventtime');
let EventLocation = document.getElementById('eventloc');
let DisplayBox = document.querySelector('.list');
let Dynamicheading = document.querySelector('.dynamic');
 


function Add(){
    if((EventName.value == '') || (EventDate.value == '') || (EventLocation.value == '') || (EventTime.value == '') ){
        alert("Please fill all fields to add the event!!");
    }
    else{
        console.log('one entry added');
        let newElement = document.createElement("div");
        newElement.classList.add('list-item'); 
        newElement.innerHTML = `
            <ul>
                <li>${EventDate.value}</li>
                <li>${EventName.value}</li>
                <li>${EventLocation.value}</li>
                <li>${EventTime.value}</li>
                <li><i class="fa-solid fa-trash"></i></li>
            </ul>
        `;
        DisplayBox.appendChild(newElement);
        
        // Clear input fields
        EventName.value = '';
        EventDate.value = '';
        EventTime.value = '';
        EventLocation.value = '';

        newElement.querySelector("i").addEventListener("click", function() {
            newElement.remove();
        });
    }
}













        // let newElement = document.createElement("ul");
        // newElement.innerHTML = `${EventDate.value} ${EventName.value} ${EventLocation.value} ${EventTime.value} <i class="fa-solid fa-trash"></i>`;
        // DisplayBox.appendChild(newElement);
        // EventName.value ='';
        // EventDate.value = '';
        // EventTime.value ='';
        // EventLocation.value = '';
        // newElement.querySelector("i").addEventListener("click", remove);
        // function remove(){
        //     newElement.remove();
        // }