export default function Courses() {
  return (
    <section id="sec-courses">
      <h2>COURSES</h2>
      <div className="courses">
        <div className="courses-info">
          <h3>Mathematics</h3>
          <p>Iron Tutor has two streams for Mathematics. For Grade 2 to Grade 8 students, we offer continuous practice materials on arithmetic skills to prepare solid foundations.  For high school students, we offer simplified but efficient studying methods as well as tests/exams preparation to maximize report card results.</p>
        </div>
        <img src="public/math.jpg"/>
      </div>
      <div className="courses">
        <img src="public/chem.jpg"/>
        <div className="courses-info" id="courses-info-2">
          <h3>Science</h3>
          <p>With STEM (Science, Technology, Engineering, Mathematics) being the most important profession in the market today. Iron Tutor has expanded their coverage to Physics and Chemistry in Grade 11, 12 and University Transition. We cover the full Ontario Curriculum on these subjects and provide additional material for better preparation of University in Science and Engineering disciplines.</p>
        </div>
      </div>
      <div className="courses">
        <div className="courses-info">
          <h3>English</h3>
          <p>We are currently revising our English curriculum. Stay tuned for more updates.</p>
        </div>
        <img src="public/eng.jpg"/>
      </div>
    </section>
  )
}