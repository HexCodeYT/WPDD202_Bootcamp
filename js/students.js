const students = [
  { id: 1, name: "Priyanka", physics: 56, chemistry: 70, math: 65 },
  { id: 2, name: "Sristi", physics: 78, chemistry: 75, math: 89 },
  { id: 3, name: "Morgane", physics: 78, chemistry: 91, math: 90 },
  { id: 4, name: "Vinca", physics: 55, chemistry: 45, math: 78 },
  { id: 5, name: "Harikala", physics: 75, chemistry: 90, math: 77 },
  { id: 6, name: "Aashish", physics: 80, chemistry: 88, math: 76 },
];

const tableBody = document.querySelector("#marksTable tbody");

students.forEach((student) => {
  const row = document.createElement("tr");

  const average = (
    (student.physics + student.chemistry + student.math) /
    3
  ).toFixed(1);

  row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.physics}</td>
    <td>${student.chemistry}</td>
    <td>${student.math}</td>
    <td>${average}</td>
`;

  tableBody.appendChild(row);
});
