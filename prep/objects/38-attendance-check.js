/*
Define a function, attendanceCheck, that accepts a string argument corresponding to a day of the week.
Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.
classCheck('Monday'); // => ['Marnie', 'Shoshanna']
classCheck('Wednesday'); // => ['Marnie', 'Lena']
*/
let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
const attendanceCheck = (day) => {
  let students = [];

  for (let i = 0; i < classRoom.length; i++) {
    let studentObj = classRoom[i];
    let studentName = Object.keys(studentObj)[0];
    let attendanceObjs = studentObj[studentName];

    for (let j = 0; j < attendanceObjs.length; j++) {
      let attendance = attendanceObjs[j];
      let weekDay = Object.keys(attendance)[0];
      
      if (weekDay === day && attendance[weekDay]){
        students.push(studentName);
      }
    }
  }
  return students;
}

/*
First we loop through the classRoom object to extract
The primary element as studentObj. Then we identify
studentName as the object key at index 0. We also
identify the attendanceObjs as the studentObj at the
Index of studentName.

We loop through each AttendanceObjs to identify each
primary element as attendance. We identify weekDay to
as the object key at index 0. Then we push studentName
if weekDay is the input day argument and if the value
of attendance at index weekDay is true. Finally,
we return the students array. 
*/