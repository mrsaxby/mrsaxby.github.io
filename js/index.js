


document.addEventListener("DOMContentLoaded", () => {
    addTextToElement(formatLocation(), "location");

    addTextToElement(calculateDate(), "date");


});


const calculateDate = () => {
    let now = new Date();

    return ` 
        ${Intl.DateTimeFormat().resolvedOptions().timeZone} 
        ${formatDate(now)} 
        ${calculateGMT(now)}
    `;
};

const formatDate = (date) => {
    return date.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true }).toUpperCase();
};

const calculateGMT = (date) => {
    switch(date.getTimezoneOffset()) {
        case 60:
            return "GMT -1"
        case -60:
            return "GMT +1"
        default:
            return "GMT";
        }
};

const isAtOffice = () => {
    switch(new Date().getDay() + 3) {
        case 5:
        case 6:
          return false
        default:
            return true;
      }
};

const formatLocation = () => {
    if(isAtOffice()) {
        return `In the office`;
    }
    else {
        return `WFH`;
    }
};



function addTextToElement(text, divID) {
    let div = document.getElementById(divID);
    let content = document.createTextNode(text);
  
    div.appendChild(content);
}