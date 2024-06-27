document.getElementById('iaReportBtn').addEventListener('click', function() 
{             let userConfirmation = confirm("Do you want to download this file?");             
if (userConfirmation) { let a = document.createElement('a');                 a.href = 'Impact Analysis Summary.pdf';  a.download = 'Impact Analysis Report'; document.body.appendChild(a);                 a.click();                 document.body.removeChild(a); } else { alert("Download canceled."); } });

document.getElementById('testCasesBtn').addEventListener('click', function() 
{             let userConfirmation = confirm("Do you want to download this file?");             
if (userConfirmation) { let a = document.createElement('a');                 a.href = 'Test Scenarios.pdf';  a.download = 'Test Cases'; document.body.appendChild(a);                 a.click();                 document.body.removeChild(a); } else { alert("Download canceled."); } });

document.getElementById('detailedReport').addEventListener('click', function() 
{             let userConfirmation = confirm("Do you want to download this file?");             
if (userConfirmation) { let a = document.createElement('a');                 a.href = 'comparison_report.xlsx'; a.download = 'Comparison_Report'; document.body.appendChild(a);                 a.click();                 document.body.removeChild(a); } else { alert("Download canceled."); } });