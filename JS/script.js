window.addEventListener('load', initialize)

function initialize() {
    localStorage.clear(); // This will clear all stored data on page load
    document.getElementById('formSubmit').addEventListener('submit', onsubmitdo)

    function onsubmitdo(e) {
        e.preventDefault();
        var site = document.getElementById('site').value;
        var accountID = document.getElementById('accountID').value;
        var password = document.getElementById('password').value;
        var allvaluesinarray = [];
        // create object
        keeper = {
            keepsite: site,
            keepaccountID: accountID,
            keeppassword: password
        }
        if (localStorage.getItem('hold') === null) {
            // object pushed to array
            allvaluesinarray.push(keeper);
            // send the array to localStorage as object

            localStorage.setItem('hold', JSON.stringify(allvaluesinarray));

        } else {
            // if its not null, the fetch all localstorage values and then insert again
            allstoredvaluesinArrayForm = JSON.parse(localStorage.getItem('hold'));
            allstoredvaluesinArrayForm.push(keeper);
            localStorage.setItem('hold', JSON.stringify(allstoredvaluesinArrayForm));


        }

        document.getElementById('site').value = '';
        document.getElementById('accountID').value = '';
        document.getElementById('password').value = '';
        FetchAllValuesDisplayTable();
    }

}

function FetchAllValuesDisplayTable() {
    arrayFormated = [];
    output = '';
    arrayFormated = JSON.parse(localStorage.getItem('hold'));
    for (var i = 0; i < arrayFormated.length; i++) {


        output += `
            <tr class='bg-default'>
            <td>` + arrayFormated[i].keepsite + `</td>
            <td>` + arrayFormated[i].keepaccountID + `</td>
            <td>` + arrayFormated[i].keeppassword + `</td>
            </tr>
        `;
    }
    document.getElementById('dynamicFill').innerHTML = output;
}