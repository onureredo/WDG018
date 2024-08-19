export default function StudentCard({ studentData }) {
  // console.log(props);
  // const studentData = props.studentData;
  // const { studentData } = props;
  const grade = studentData.gpa;
  let gradeLetter = 'F';

  if (grade >= 97) {
    gradeLetter = 'A+';
  } else if (grade >= 93) {
    gradeLetter = 'A';
  } else if (grade >= 90) {
    gradeLetter = 'A-';
  } else if (grade >= 87) {
    gradeLetter = 'B+';
  } else if (grade >= 83) {
    gradeLetter = 'B';
  } else if (grade >= 80) {
    gradeLetter = 'B-';
  } else if (grade >= 77) {
    gradeLetter = 'C+';
  } else if (grade >= 73) {
    gradeLetter = 'C';
  } else if (grade >= 70) {
    gradeLetter = 'C-';
  } else if (grade >= 67) {
    gradeLetter = 'D+';
  } else if (grade >= 63) {
    gradeLetter = 'D+';
  } else if (grade >= 60) {
    gradeLetter = 'D-';
  } else {
    gradeLetter = 'F';
  }

  return (
    <div className='card'>
      <img src={studentData.picture} alt={studentData.firstName} />
      <div>
        <h2>
          {studentData.firstName} {studentData.lastName}
        </h2>
        <ul>
          <li>Age: {studentData.age}</li>
          <li>Course: {studentData.course}</li>
          <li>City: {studentData.city}</li>
        </ul>
        {studentData.gpa && <div className='grade'>Grade: {gradeLetter}</div>}
        {studentData.graduate ? <div className='grade'>Fertig</div> : <div className='grade'>Studying</div>}
      </div>
    </div>
  );
}
