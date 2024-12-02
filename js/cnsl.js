document.addEventListener('DOMContentLoaded', () => {
    const addConsultationBtn = document.getElementById('addConsultationBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.modal .close');
    const consultationForm = document.getElementById('consultationForm');
    const consultationsTable = document.getElementById('consultationsTable').querySelector('tbody');

    let editRow = null; // Row being edited

    // Open modal to add a new consultation
    addConsultationBtn.onclick = () => {
        modal.style.display = 'block';
        consultationForm.reset(); // Reset the form
        editRow = null; // No row being edited
    };

    // Close modal
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Add or edit a consultation
    consultationForm.onsubmit = (event) => {
        event.preventDefault();

        // Get form values
        const CIN = document.getElementById('CIN').value;
        const patientName = document.getElementById('patientName').value;
        const date = document.getElementById('date').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const symptoms = document.getElementById('symptoms').value;
        const diagnosis = document.getElementById('diagnosis').value;

        if (editRow) {
            // Update existing row
            editRow.cells[0].textContent = CIN;
            editRow.cells[1].textContent = patientName;
            editRow.cells[2].textContent = date;
            editRow.cells[3].textContent = age;
            editRow.cells[4].textContent = gender;
            editRow.cells[5].textContent = symptoms;
            editRow.cells[6].textContent = diagnosis;
        } else {
            // Add new row without an incrementing ID
            const newRow = consultationsTable.insertRow();
            newRow.innerHTML = `
                <td>${CIN}</td>
                <td>${patientName}</td>
                <td>${date}</td>
                <td>${age}</td>
                <td>${gender}</td>
                <td>${symptoms}</td>
                <td>${diagnosis}</td>
                <td>
                    <button class="btn btn-edit">Edit</button>
                    <button class="btn btn-delete">Delete</button>
                    <button class="btn btn-print">Print</button>
                </td>
            `;

            // Attach events for edit, delete, and print buttons
            newRow.querySelector('.btn-edit').onclick = () => editConsultation(newRow);
            newRow.querySelector('.btn-delete').onclick = () => deleteConsultation(newRow);
            newRow.querySelector('.btn-print').onclick = () => printConsultation(newRow);
        }

        // Close modal
        modal.style.display = 'none';
    };

    // Edit a consultation
    function editConsultation(row) {
        editRow = row;
        document.getElementById('CIN').value = row.cells[0].textContent;
        document.getElementById('patientName').value = row.cells[1].textContent;
        document.getElementById('date').value = row.cells[2].textContent;
        document.getElementById('age').value = row.cells[3].textContent;
        document.getElementById('gender').value = row.cells[4].textContent;
        document.getElementById('symptoms').value = row.cells[5].textContent;
        document.getElementById('diagnosis').value = row.cells[6].textContent;

        modal.style.display = 'block';
    }

    // Delete a consultation
    function deleteConsultation(row) {
        if (confirm('Are you sure you want to delete this consultation?')) {
            row.remove();
        }
    }

    // Print consultation details
    function printConsultation(row) {
        const printWindow = window.open('', '', 'width=600,height=400');
        const CIN = row.cells[0].textContent;
        const patientName = row.cells[1].textContent;
        const date = row.cells[2].textContent;
        const age = row.cells[3].textContent;
        const gender = row.cells[4].textContent;
        const symptoms = row.cells[5].textContent;
        const diagnosis = row.cells[6].textContent;

        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Consultation</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #007bff; color: white; }
                    </style>
                </head>
                <body>
                    <h2>Consultation Details</h2>
                    <table>
                        <tr>
                            <th>CIN</th>
                            <th>Patient Name</th>
                            <th>Consultation Date</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Symptoms</th>
                            <th>Diagnosing</th>
                        </tr>
                        <tr>
                            <td>${CIN}</td>
                            <td>${patientName}</td>
                            <td>${date}</td>
                            <td>${age}</td>
                            <td>${gender}</td>
                            <td>${symptoms}</td>
                            <td>${diagnosis}</td>
                        </tr>
                    </table>
                    <script>window.print(); window.close();</script>
                </body>
            </html>
        `);
        printWindow.document.close();
    }
});
