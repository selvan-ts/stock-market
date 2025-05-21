let currentSortColumn = -1;  // Keeps track of the currently sorted column
        let currentSortDirection = 'asc'; // Stores the current sort direction ('asc' or 'desc')

        function sortTable(columnIndex) {
            const table = document.getElementById("myTable");
            const rows = Array.from(table.rows).slice(1); // Skip the header row
            const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);

            // Toggle the sort direction
            if (currentSortColumn === columnIndex) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortColumn = columnIndex;
                currentSortDirection = 'asc';
            }

            rows.sort((rowA, rowB) => {
                const cellA = rowA.cells[columnIndex].innerText;
                const cellB = rowB.cells[columnIndex].innerText;

                if (isNumeric) {
                    return currentSortDirection === 'asc' 
                        ? parseFloat(cellA) - parseFloat(cellB) 
                        : parseFloat(cellB) - parseFloat(cellA);
                } else {
                    return currentSortDirection === 'asc' 
                        ? cellA.localeCompare(cellB) 
                        : cellB.localeCompare(cellA);
                }
            });

            rows.forEach(row => table.appendChild(row)); // Re-append the sorted rows

            // Update column header styles to indicate sorting direction
            updateSortIndicators();
        }

        function updateSortIndicators() {
            const headers = document.querySelectorAll('th');
            headers.forEach(header => {
                header.classList.remove('sort-asc', 'sort-desc'); // Remove all sorting indicators
            });

            const currentHeader = headers[currentSortColumn];
            if (currentSortDirection === 'asc') {
                currentHeader.classList.add('sort-asc');
            } else {
                currentHeader.classList.add('sort-desc');
            }
        }