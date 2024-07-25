function proposal() {
    document.getElementById("ReportProposal").hidden = false;
    document.getElementById("MidtermReport").hidden = true;
    document.getElementById("FinalReport").hidden = true;
}

function midterm() {
    document.getElementById("ReportProposal").hidden = true;
    document.getElementById("MidtermReport").hidden = false;
    document.getElementById("FinalReport").hidden = true;
}

function final() {
    document.getElementById("ReportProposal").hidden = true;
    document.getElementById("MidtermReport").hidden = true;
    document.getElementById("FinalReport").hidden = false;
}