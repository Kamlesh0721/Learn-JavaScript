const course = {
    course: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// Object Deconstructor 
// const { courseInstructor } = course // now you do not need to use course.courseInstructor
// console.log(courseInstructor);

const { courseInstructor: instructor } = course // If you do not want to use courseInstructor again and again you can use instructor
console.log(instructor);

// API-XML,JSON