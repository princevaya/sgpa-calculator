document.getElementById('calculateButton').addEventListener('click', function () {
    // Define credits for each subject
    const credits = {
        cse1001: 5,
        cse1002: 5,
        cse1003: 2,
        cse1004: 4,
        cse1005: 4
    };

    // Define grade point mapping for letter grades
    const gradeMapping = {
        "A+": 10,
        "A": 9,
        "B+": 8,
        "B": 7,
        "C+": 6.5,
        "C": 6,
        "D": 5,
        "F": 0
    };

    // Retrieve grade points from select inputs
    const gradePoints = [
        { grade: gradeMapping[document.getElementById('cse1001').value], credits: credits.cse1001, subject: "CSE1001" },
        { grade: gradeMapping[document.getElementById('cse1002').value], credits: credits.cse1002, subject: "CSE1002" },
        { grade: gradeMapping[document.getElementById('cse1003').value], credits: credits.cse1003, subject: "CSE1003" },
        { grade: gradeMapping[document.getElementById('cse1004').value], credits: credits.cse1004, subject: "CSE1004" },
        { grade: gradeMapping[document.getElementById('cse1005').value], credits: credits.cse1005, subject: "CSE1005" }
    ];

    let totalCredits = 0;
    let weightedSum = 0;
    let resultText = ''; // To store the result text including earned points for each subject

    // Iterate over all subjects
    for (const subject of gradePoints) {
        // Check if the grade is not selected or invalid
        if (isNaN(subject.grade) || subject.grade === undefined) {
            document.getElementById('result').innerText = "Error: Please select grades for all subjects.";
            return;
        }
        const earnedPoints = subject.grade * subject.credits; // Calculate earned points
        weightedSum += earnedPoints; // Add to weighted sum
        totalCredits += subject.credits; // Sum total credits

        // Add the earned points for this subject to the result text
        resultText += `${subject.subject}: ${subject.grade} x ${subject.credits} credits = ${earnedPoints.toFixed(2)} points<br>`;
    }

    // Calculate SGPA
    const sgpa = weightedSum / totalCredits;

    // Display the earned points for each subject and the SGPA
    resultText += `<br><strong>Total SGPA: ${sgpa.toFixed(2)}</strong>`;
    document.getElementById('result').innerHTML = resultText;
});
