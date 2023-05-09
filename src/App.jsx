import { useEffect, useState } from 'react'
import data from './utils/students.json';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';
import ContainerLabel from './components/ContainerLabel';

function App() {

  const [students, setStudents] = useState([])

  const handleGradeChange = (studentId, grade, aspect) => {
    const selectedStudent = students.filter(student => student.id === studentId);
    selectedStudent[0].grade = [...selectedStudent[0].grade, {
      assessment_aspect: aspect,
      grade,
    }]
  };

  const handleSubmit = () => {
    let output = [];
    let studentGrade = [[]];
    for (let i = 1; i <= 4; i++) {
      studentGrade.push([]);
      const assessments = students.filter(student => student.grade.some(g => g.assessment_aspect === i))
  
      assessments.forEach(item => {
        studentGrade[i].push({
          [`${item.name.split(' ').join('_').toLowerCase()}`] : item.grade.filter(
            g => g.assessment_aspect === i)[item.grade.filter(g => g.assessment_aspect === i).length - 1
          ].grade
        })
      })

      output.push({
        [`aspek_penilaian_${i}`]: studentGrade[i]
      })
    }
    
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(output)]);
    element.href = URL.createObjectURL(textFile);
    element.download = "output.json";
    document.body.appendChild(element); 
    element.click();
  }

  useEffect(() => {
    setStudents(data);
  }, []);

  return (
    <>
      <h1 className='text-center text-2xl font-semibold text-slate-700 tracking-widest pt-32'>Student Assessment</h1>
      <div className='h-full w-full pt-10 lg:px-36 xl:px-64 2xl:px-80  pb-20 flex justify-center items-center'>
        <Container>
          <ContainerLabel />
          {students.length > 0 && students.map((student, index) => (
            <Card key={index} student={student} handleGradeChange={handleGradeChange} />  
          ))}
          <div className='flex justify-end items-center mt-6 w-full'>
            <Button handleSubmit={handleSubmit} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
