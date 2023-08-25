const students = [
  {
    name: "Jessica",
    gradeOne: 6.5,
    gradeTwo: 8.3,
  },
  {
    name: "Matheus",
    gradeOne: 8.9,
    gradeTwo: 4.2,
  },
  {
    name: "Jefferson",
    gradeOne: 10,
    gradeTwo: 7.5,
  },
  {
    name: "João",
    gradeOne: 9.5,
    gradeTwo: 8.0,
  },
  {
    name: "Julio",
    gradeOne: 3.2,
    gradeTwo: 8.1,
  },
  {
    name: "Greice",
    gradeOne: 6.0,
    gradeTwo: 3.1,
  }
]

function gradeAvarege (gradeOne, gradeTwo) {
  let avarege= ((gradeOne + gradeTwo)/ 2).toFixed(2)
  return Number(avarege)
}

for (let student of students) {
  let studentAvarege = gradeAvarege(student.gradeOne, student.gradeTwo);

  if(studentAvarege >= 7) {
    alert(`A media do(a) aluno ${student.name} é: ${gradeAvarege(student.gradeOne, student.gradeTwo)} 
    Parabéns, você foi aprovado(a)!`)
  } else {
    alert (`A media do(a) aluno ${student.name} é: ${gradeAvarege(student.gradeOne, student.gradeTwo)} Não foi desta vez ${student.name}, tente novamente na próxima.`)

  } 
}