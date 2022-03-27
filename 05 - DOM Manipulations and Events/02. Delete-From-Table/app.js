function deleteByEmail() {
    // get email entry
    let emailToRemove = document.querySelector("body > label > input[type=text]").value;

    // find email in table
    let rows = Array.from(document.querySelectorAll("#customers > tbody > tr"));
    let match = 0;
    for (let i = 1; i <= rows.length; i++){
        let checkEmail = document.querySelector(`#customers > tbody > tr:nth-child(${i}) > td:nth-child(2)`).textContent;
        if(checkEmail == emailToRemove){
            match = i;
            break;
        }
    }

    // remove matching row
    let rowToRemove = document.querySelector(`#customers > tbody > tr:nth-child(${match})`);
    if (match == 0){
        document.getElementById("result").textContent = 'Not found.';
    } else {
        document.querySelector(`#customers > tbody`).removeChild(rowToRemove);
        document.getElementById("result").textContent = 'Deleted.';
    }
    document.querySelector("body > label > input[type=text]").value = '';
}