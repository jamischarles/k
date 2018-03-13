var express = require('express');
var router = express.Router();

const {URL} = require('url');

var jobData = [
  {
    title: 'Senior Front-End Engineer',
    company: 'Khan Academy',
    location: 'Mountain View, CA / Remote friendly (US + Canada)',
    tags: ['Senior', 'React', 'React Native', 'Remote-friendly'],
    details: `

                <div id="content" class="">
                  <p><span style="font-weight: 400;">Khan Academy is looking for passionate software engineers to help change education – join us on our mission to provide a free, world-class education for anyone, anywhere.</span></p>
                  <p><span style="font-weight: 400;">We’ve built a talented development team with engineers from a variety of backgrounds. Our team includes industry leaders from Google, Apple, Facebook, Mozilla, Pixar, and Intuit, as well as folks from tiny startups and developers from non-traditional backgrounds. Together, we’re a team that is deeply invested in your future. We believe that no organization will be as invested in developing you as a professional.</span></p>
                  <p><span style="font-weight: 400;">Currently, we’re hiring for two Senior Front-End Engineers.&nbsp;As an engineer at Khan Academy, you'll help learners <a href="https://www.khanacademy.org/talks-and-interviews/conversations-with-sal/v/lets-teach-for-mastery-not-test-scores-sal-khan">build mastery</a> regardless of where they are, and regardless of whether they are accessing KA on the <a href="http://www.khanacademy.org/">browser</a>, on <a href="https://play.google.com/store/apps/details?id=org.khanacademy.android&amp;hl=en">Android</a>, or on <a href="https://itunes.apple.com/us/app/khan-academy/id469863705?mt=8">iOS</a>. You’ll create new, impactful ways for teachers and students to use online learning in the classroom. You’ll work on the content creation and translation tools that we rely on to expand our library of world-class educational content and bring it to an international audience. You'll help build cutting-edge infrastructure to enable students of all backgrounds to succeed on high-stakes assessments like the SAT and LSAT. Ultimately, you'll be part of helping millions of learners around the world unlock their full potential. </span></p>
                  <p><strong>What you'll do: </strong></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Take on world-changing challenges </span><a href="https://docs.google.com/document/d/1PW4NYn9pYNam2EuGEsTN9pTgwTfFnT_R9OZLJJICWQU/edit"><span style="font-weight: 400;">guided by our Engineering Principles</span></a><span style="font-weight: 400;"> – some of which have never been solved before.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Model problems, then design, write, test and release code to solve them!</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Collaborate with your peers via code reviews to level up yourself and others, to improve your ability to provide effective feedback, and to achieve higher quality code.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Ship products with a cross-functional team of engineers, designers, analysts and product managers.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Build using technology that is best suited to solving problems for our learners. Currently, we build with </span><span style="font-weight: 400;">JavaScript, React, Redux, GraphQL, Python, and we adopt new technologies when they’ll help us better achieve our goals.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Contribute to </span><a href="https://khan.github.io/"><span style="font-weight: 400;">open source</span></a><span style="font-weight: 400;">! We ❤️ open source, and we give back to the community whenever we can.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Work on code that is used by millions of monthly active learners from all over the 🌍.</span></li>
                  </ul>
                  <p><span style="font-weight: 400;">You can read about our latest work on our </span><a href="http://engineering.khanacademy.org/"><span style="font-weight: 400;">Engineering Blog</span></a><span style="font-weight: 400;">. A few highlights: </span></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Running A/B tests to make sure all our changes help people learn (not just increase page views)</span></li>
                    <li style="font-weight: 400;"><a href="http://engineering.khanacademy.org/posts/tota11y.htm"><span style="font-weight: 400;">Designing tools to help us (and others) build accessible software</span></a></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;"><a href="http://engineering.khanacademy.org/posts/js-packaging-http2.htm">Experimenting with new technologies to improve site performance</a></span></li>
                  </ul>
                  <p><strong>You need:</strong></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Excitement about helping Khan Academy bring a free, world-class education to the world.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Empathy for learners around the world. You love learning and are excited about helping others learn to love learning. You’re motivated to learn new things and share what you learn with the world.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Eagerness to learn, educate, write code, and build products used by millions of learners and teachers.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Experience with successful delivery and maintenance of complex software. You’ll join us in writing clean, maintainable software that solves hard problems. You’ll write testable, quality code. You’ll push the team and the mission forward with your contributions.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Strong communication, thoughtfulness, and desire to give and receive regular feedback- </span><span style="font-weight: 400;">including the ability to work in tight-knit teams that flourish from communicating regularly.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Strong desire to help define and implement development best practices across the organization.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Experience breaking apart complex problems into tangible, understandable units - and then creating actionable solutions for each of them.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">An interest in mentoring other developers and interns: lifting them up, educating them, and finding ways for them to succeed.</span></li>
                  </ul>
                  <p><strong>You don't need: </strong></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">We don't require experience in any particular technology. Our commitment to on-boarding and mentorship means you won’t be left in the dark as you learn new technologies. </span><span style="font-weight: 400;">That said, having knowledge of the standard JavaScript ecosystem (modern ECMAScript, Babel, ESLint, Webpack, along with React, Redux, etc.) would be a huge plus.</span></li>
                  </ul>
                  <p><strong>We offer the following benefits:</strong></p>
                  <p><span style="font-weight: 400;">We may be a non-profit, but we reward our team well!</span></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">The opportunity to improve real lives, solve hard problems, and change the world.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Competitive salaries and annual bonuses.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Ample paid time off as needed. We’ll support you in maintaining a healthy life-work balance.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Delicious catered lunch every day, plus tons of snacks and beverages.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">An inclusive, excited, and friendly team that trusts you and gives you the freedom to be brilliant.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">A great location – we’re only 0.5 miles from the Caltrain and downtown Mountain View. We also pay for remote employees to fly out a few times a year, and our San Francisco dwellers are encouraged to work from home a few days a week to save the commute time.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Awesome team events and weekly board game nights.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Oh, and we offer all those other typical benefits as well: 401(k) + 4% matching &amp; comprehensive insurance including medical, dental, vision, and life.</span></li>
                  </ul>
                  <p><strong>How to apply:</strong></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Attach your resume below</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Address the following prompt in the space provided below: At Khan Academy, we believe that reaching all learners requires an engineering team that is diverse in every respect, and we are looking for individuals who will help us fulfill our mission by adding to the diversity of our team's experiences, perspectives, and mindsets. With that in mind, </span><strong>tell us briefly how your experiences and perspectives— whether personal, professional, academic, or otherwise— could contribute to the diversity of our team.</strong></li>
                  </ul>
                  <p><strong>Optional:</strong></p>
                  <ul>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">Links to projects or previous work. We especially like living, breathing projects, demos, or commentaries on your work. Please don’t just send code – show or tell us why you wrote it, what it’s for, what you like about it, how it helps someone, etc. No project is too small if it’s something you care about. If you're feeling especially creative feel free to include a </span><a href="http://cs-blog.khanacademy.org/p/build-visualization-on-our-programming.html"><span style="font-weight: 400;">link to a project</span></a><span style="font-weight: 400;"> that you've built on our programming platform.</span></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;">If you’d like to provide a more traditional cover letter addressing your interest in KA (in addition to the diversity-based response), please feel free to attach that below.</span></li>
                  </ul>
                  <p><strong>To learn more about our work:</strong></p>
                  <ul>
                    <li style="font-weight: 400;"><a href="https://www.khanacademy.org/puppies/long-term-vision"><span style="font-weight: 400;">Our long term vision</span></a></li>
                    <li style="font-weight: 400;"><a href="http://www.khanacademy.org/about/the-team"><span style="font-weight: 400;">Our team</span></a></li>
                    <li style="font-weight: 400;"><span style="font-weight: 400;"><a href="https://www.khanacademy.org/stories">What our learners have to say about Khan Academy</a></span></li>
                  </ul>
                  <p><span style="font-weight: 400;">As an organization and as individuals, we are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, gender identity, national origin, sexual orientation, age, citizenship, marital status, pregnancy, medical conditions, genetic information, disability, or Veteran status.</span><strong> We strongly encourage all candidates to complete the EEOC questions below </strong><span style="font-weight: 400;">so that we can continue to monitor our processes and ensure we are creating an environment that allows candidates to feel comfortable and display their best selves across many lines of difference. &nbsp;</span></p>
                </div>
      `,
  },
  {
    title: 'Senior Frontend Engineer - Studio Programming Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    tags: ['Junior', 'React Native'],
    details: `
        <div class="css-5eespc"><div class="css-1gfgkzu"><h1 class="css-1gosrl0">Senior Frontend Engineer - Studio Programming Engineering</h1><ul class="css-ebr9yr"><li class="css-10ur0vj"><span class="css-vp7ybf"><svg><path fill="#696868" fill-rule="evenodd" d="M.314 7.58C.11 6.988 0 6.35 0 5.684 0 2.544 2.462 0 5.5 0S11 2.544 11 5.683c0 .665-.11 1.304-.314 1.898h.02l-.074.154c-.166.44-.383.856-.644 1.236-1.21 2.19-2.702 4.2-4.478 6.03-2.306-2.163-4.048-4.636-5.225-7.42h.03zm5.186.376c1.215 0 2.2-1.018 2.2-2.273 0-1.255-.985-2.273-2.2-2.273-1.215 0-2.2 1.018-2.2 2.273 0 1.255.985 2.273 2.2 2.273z"></path></svg>Los Gatos, California</span></li><li class="css-10ur0vj"><span class="css-bubgcq"><svg><path fill="#696868" fill-rule="evenodd" d="M14.09 8.41c.073.206.11.425.11.646 0 1.074-.87 1.944-1.943 1.944H5.772c-.292 0-.58-.066-.843-.192-.906-.434-1.32-1.475-.994-2.4h-2.77c-.17 0-.336-.036-.49-.106-.584-.27-.84-.962-.57-1.547.594-1.293 1.606-1.94 3.033-1.94 1.14 0 2.017.413 2.632 1.237.875-.62 1.952-.928 3.23-.928 1.286 0 2.37.313 3.252.94.61-.833 1.487-1.25 2.632-1.25 1.424 0 2.438.645 3.043 1.932.072.156.11.325.11.496 0 .645-.52 1.167-1.166 1.167H14.09zM9.023 5.044c-1.39 0-2.517-1.13-2.517-2.522S7.633 0 9.023 0s2.517 1.13 2.517 2.523c0 1.393-1.127 2.522-2.517 2.522zm-5.87-.278c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542zm11.746 0c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542z"></path></svg>Content Engineering</span></li></ul></div><div class="css-c4y980"><p><br>How do you spark joy in hundreds of millions of people? It starts with a vision—that technology can give voice to stories around the world. Netflix empowers a small band of creatives to do what no studio has ever done—tell hundreds of stories you fall in love with and stay up binge watching. <br><br><br>As an engineer on the Studio Programming Engineering team, you’ll help us build the future of how the Netflix studio creates and produce shows on a global scale. We partner closely with our data science teams to build beautiful applications that make the studio workflow 10x more efficient.<br><br><br>Our team includes people of all genders, sexual orientation, mothers, fathers, the self-taught, the university-educated, and people of a wide variety of nationalities, ages, and socio-economic backgrounds. Diverse teams are strong teams, and we encourage those with varied identities, backgrounds and experiences to apply.<br><br></p>
              </div><div><h3 class="css-1ltm6hq">Our ideal teammate (you don’t have to tick all the boxes right now)</h3><ul class="css-1igj1zn"><li>Has exceptional ability with modern JavaScript or TypeScript</li><li>Has proven experience shipping ambitious UIs in production with React, Angular, Ember or Vue</li><li>Has a solid understanding of build tools like Webpack, Gulp, Broccoli or Parcel</li><li>Tests their code with tools like Jest, Enzyme, Mocha or QUnit</li><li>Exercises rigor in automated testing, code quality, and engineering best practices</li><li>Balances being product focused and engineering quality minded</li><li>Understands and is thoughtful about tradeoffs</li><li>Leverages and contributes to open source</li></ul></div><div><h3 class="css-1ltm6hq">Bonus:</h3><ul class="css-1igj1zn"><li>Polyglot experience with other languages and being able to pick the right tool for the job </li><li>Experience with backend development</li></ul></div><div><h3 class="css-1ltm6hq">A few logistical details:</h3><ul class="css-1igj1zn"><li>This position is on-site in Los Gatos, CA or in Los Angeles, CA</li><li>We provide excellent relocation benefits</li><li>We provide visa assistance where possible</li></ul></div><div class="css-c4y980"></div></div>


      `,
  },
  {
    title: 'Software Engineer, Frontend',
    company: 'Airbnb',
    location: 'San Francisco, CA, United States',
    tags: ['Junior', 'Vue.js'],
    details: `

                <div>
                  <p>Frontend Engineers are an essential part of Airbnb's Product Team. &nbsp;Working closely with designers, we implement the user interface of our web app. &nbsp;We build libraries and abstractions to make our lives easier, such as O2, our front-end toolkit. &nbsp;We make the most of modern tools like React, ES6, and SASS, and we ensure our UIs work well on all screen sizes. &nbsp;Some of us specialize in CSS, some in front-end infrastructure, but all of us are JavaScript pros and full-stack engineers. &nbsp;</p>
                  <p><strong>Responsibilities</strong></p>
                  <ul>
                    <li>Collaborate with Experience Designers to iterate on the design and implementation of our product</li>
                    <li>Work with Data Scientists and Backend Engineers to build features and ship experiments</li>
                    <li>Build efficient and reusable front-end systems and abstractions</li>
                    <li>Find and address performance issues</li>
                    <li>Participate in design and code reviews</li>
                    <li>Identify and communicate front-end best practices</li>
                  </ul>
                  <p><strong>Requirements</strong></p>
                  <ul>
                    <li>Strong knowledge of JavaScript</li>
                    <li>Experience with modern JavaScript libraries and tooling</li>
                    <li>Familiarity with server-side MVC web frameworks, such as Ruby on Rails or Django</li>
                    <li>Commanding grasp of HTML, CSS, and related web technologies</li>
                    <li>Strong Computer Science fundamentals</li>
                    <li>Awareness of cross-browser compatibility issues and client-side performance considerations</li>
                    <li>Demonstrated design and UX sensibilities</li>
                  </ul>
                  <p><strong>Benefits</strong></p>
                  <ul>
                    <li>Stock</li>
                    <li>Competitive salaries</li>
                    <li>Quarterly employee travel coupon</li>
                    <li>Paid time off</li>
                    <li>Medical, dental, &amp; vision insurance</li>
                    <li>Life insurance and disability benefits</li>
                    <li>Fitness Discounts</li>
                    <li>401K</li>
                    <li>Flexible Spending Accounts</li>
                    <li>Apple equipment</li>
                    <li>Commuter Subsidies</li>
                    <li>Community Involvement (4 hours per month to give back to the community)</li>
                    <li>Company sponsored tech talks and happy hours</li>
                    <li>Much more...</li>
                  </ul><br>
                  <a href="/careers/apply2/2287?gh_src=" id="applyButton" class="btn btn-large btn-primary" style="position: relative; margin-top: -21px;">
                    Apply Now
                  </a>
                </div>
        `,
  },
  {
    title: 'Frontend Engineer',
    company: 'Facebook',
    location: 'Seattle, WA',
    tags: ['Junior', 'React.js', 'GraphQl'],
    details: `
                <div class="_4ycv"><h2 class="_3o70 _1zbm _4ycw">Front End Engineer</h2><div class="_3m9 _1n-- _4ycx">(Seattle, WA)</div><div class="_3-98"><div class="_3m9 _1n--"> Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. Whether we're creating new products or helping a small business expand its reach, people at Facebook are builders at heart. Our global teams are constantly iterating, solving problems, and working together to empower people around the world to build community and connect in meaningful ways. Together, we can help people build stronger communities — we're just getting started. </div></div><div class="_3m9 _1n--">Are you interested in building products used by more than a billion people? Do you like shipping code at a rapid pace? Facebook is seeking an experienced Front End Engineer that is passionate about building mobile and desktop web applications. This position is full-time and is based in our Seattle office.</div><div class="_wrz"><h4 class="_3m9 _1zbm _wr-">Responsibilities</h4><div class="_3m9 _1n--"><ul class="uiList _53x5 _53xc _4of _4kg"><li class="_3-8x _3-95"><div class="fcb">Implement the features and user interfaces of Facebook products like News Feed</div></li><li class="_3-8x _3-95"><div class="fcb">Architect efficient and reusable front-end systems that drive complex web applications</div></li><li class="_3-8x _3-95"><div class="fcb">Collaborate with Product Designers, Product Managers, and Software Engineers to deliver compelling user-facing products</div></li><li class="_3-8x _3-95"><div class="fcb">Identify and resolve performance and scalability issues</div></li></ul></div></div><div class="_wrz"><h4 class="_3m9 _1zbm _wr-">Minimum Qualifications</h4><div class="_3m9 _1n--"><ul class="uiList _53x5 _53xc _4of _4kg"><li class="_3-8x _3-95"><div class="fcb">3+ years of JavaScript experience, including concepts like asynchronous programming, closures, types, and ES6</div></li><li class="_3-8x _3-95"><div class="fcb">3+ years of HTML/CSS experience, including concepts like layout, specificity, cross browser compatibility, and accessibility</div></li><li class="_3-8x _3-95"><div class="fcb">3+ years experience with browser APIs and optimizing front end performance</div></li></ul></div></div><div class="_wrz"><h4 class="_3m9 _1zbm _wr-">Preferred Qualifications</h4><div class="_3m9 _1n--"><ul class="uiList _53x5 _53xc _4of _4kg"><li class="_3-8x _3-95"><div class="fcb">Experience with React</div></li><li class="_3-8x _3-95"><div class="fcb">BS/MS in Computer Science or a related technical field</div></li></ul></div></div><a role="button" class="_42ft _2xl6 _3ma _4h3d" href="/careers/resume?req=a0I1H00000LBgriUAD" id="u_0_q">Apply</a><div class="_3m9 _1n--"><div class="_3-8-"><div class="_qag"> Facebook is proud to be an Equal Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex (including pregnancy, childbirth, or related medical conditions), sexual orientation, gender, gender identity, gender expression, transgender status, sexual stereotypes, age, status as a protected veteran, status as an individual with a disability, genetic information, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. </div><div class="_qag"> If you need assistance or an accommodation due to a disability, you may contact us at <a href="mailto:accommodations-ext@fb.com" class="_5144" id="u_0_r">accommodations-ext@fb.com</a> or you may call us at +1 650-308-7837. </div></div></div></div>
      `,
  },
  {
    title: 'Software Engineer, Front End',
    company: 'Google',
    location: 'Mountain View, CA',
    tags: ['Angular'],
    details: `
                <div class="detail-item"><div aria-hidden="true" style="display: none;"><div class="GXRRIBB-ab-d" aria-hidden="true" itemprop="benefits" style="display: none;"><div class="GXRRIBB-ab-b" id="gjjpb"></div></div></div><div class="GXRRIBB-F-h" aria-hidden="true" style="display: none;"><div class="spinner-wrapper GXRRIBB-F-g" aria-busy="false" aria-hidden="true"><div class="spinner-container"> <div class="spinner-layer blue"> <div class="circle-clipper left"> <div class="circle"></div> </div> <div class="gap-patch"> <div class="circle"></div> </div> <div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div></div><div class="GXRRIBB-F-i"><div class="media GXRRIBB-F-m"><img class="gwt-Image" role="img" aria-hidden="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAC0CAYAAAB10tv3AAAFNklEQVR42u3d3VLiShSAUd//neRHS1RE1BIBFXyVTG1qpsapUQkh3R1gXXw354ZxV9YJG9p4dn5+XknqfmeGIMEqCVYJVkmwSoJVglUSrJJglWCVBKskWCVYJcEqCVYJVkmwSoJVglUSrBKskmCVBKsEqyRYJcEqwSoJVkmwSrBKglUSrBKskmCVBKsEqyRYJVglwSoJVglW/Vy/36+Gw6FqFvNy3cCapcFgUE0mk2o+n1fr9br6+PjQjsXcYn4xx5in6wrWVuv1etV0Oq1WqxVwLRbzjLnGfF1nsLZyN407AVzpivm6y8K69066XC6BylDM2U4La+NmsxlIGYt5u+5g3bnRaARQgWLurj9Yd2qxWMBToJi76w/W2sV3guCUK+bvOoS1VuPxGJqCxfxdh7DWKr77g6ZcMX/XIay1enp6gqZgMX/XIaywwgorrIIVVlhhFaywwgorrIIVVlhhhVWwwgorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrLC6DmGFFVZYYRWssMIKq2CFFVZYYRWssMIKK6yCFVZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYYUVVlhhhRVWWAUrrLDCKlhh/dv7+3t1c3NTrddrWGGFtasF0Kurq83Pfn9/DyussHa1yWTyz8//8vICK6ywdq3n5+f/fv7BYLB5WwwrrLB2pNfX16rX6305g3hbXGp/hRVWWD+1Wq2qi4uLH+dQan+FFVZYPxWf/NaZRYn9FVZYYf3dw8ND7VmU2F9hhbXTWJfL5eZT2dSvM5/Pd55H7v0VVlg7i/Xz/vj4+Jj04EPcKZvMJOf+CiusncV6fX2dfE/8fPChabn2V1hh7STWr/bHfr+/+Vol5cGHJuXaX2GFtXNYf9of421xvD1u43Vms1lrsxmNRsn3V1hh7RTWOvtjGzDiDh136jbnM51OYYX1NLDusj/e3d3t9TqXl5dJZpRyf4UV1s5gDYA5/j23t7fJZpRyf4UV1k5g/ergfJ1iv93ldeIroNRzSrW/wgprcaxx8OG7g/Pb2uUT4sVi0fh1urC/wgprUax1Ds5vq84nxPHWdDgcZp3Xrnd9WGHtNNa6B+e3FQcovnvrGf893prmnlfb+yussBbDusvB+Tp9d4Y4jgSWmln8TwJWWA8aa5OD803+jW0efCi9v8IKa3as+xyc31Z8gPRnV0xx8KHk/gorrFmxtnFwvs6uGFBTHXwotb/CCmtWrG0cnK97h+3a/PbdX2GFNRvWpgcfjql99ldYYc2C9acnBp5aTfdXWGFNjrWNgw/HVNP9FVZYk2Nt6+DDMdVkf4UV1qRYcxycP5X9FVZYk2FNdfDhVPdXWGFNgjXlwYdT3V9hhTUJ1re3t81dQ9uLWcEK68E+3VCwwgorrLDCKlhhhVWwwgorrLD6El8tF/N3HcJaq/F4DE3BYv6uQ1hrFU8HhKZcuZ/OCOuBF8/eBSd/MXfXH6zFntan+pV4lCqsR1A8MRCgfHXhCY2wHmjxxMD4kxcgpS/m3JUnNMJ6wL8t0vafh9D/v2LoN5dgbe0JgvHdX1t/iVx/H4MTc/XMKliT3GXjEaNxJ0jxpw5PoZhbzC/m6G4Ka9adNr4TVL3spLBKsEqCVRKsEqySYJUEqwSrJFglwSrBKglWSbBKsEqCVYJVEqySYJVglQSrJFglWCXBKglWCVZJsEqCVYJVEqySYJVglQSrBKskWCXBKsEqCVZJsEqwSoJVEqzS0fQLNbOwKijevEUAAAAASUVORK5CYII=" width="235" height="180"></div> <div class="media GXRRIBB-F-m"><img class="gwt-Image" role="img" aria-hidden="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAC0CAYAAAB10tv3AAAFNklEQVR42u3d3VLiShSAUd//neRHS1RE1BIBFXyVTG1qpsapUQkh3R1gXXw354ZxV9YJG9p4dn5+XknqfmeGIMEqCVYJVkmwSoJVglUSrJJglWCVBKskWCVYJcEqCVYJVkmwSoJVglUSrBKskmCVBKsEqyRYJcEqwSoJVkmwSrBKglUSrBKskmCVBKsEqyRYJVglwSoJVglW/Vy/36+Gw6FqFvNy3cCapcFgUE0mk2o+n1fr9br6+PjQjsXcYn4xx5in6wrWVuv1etV0Oq1WqxVwLRbzjLnGfF1nsLZyN407AVzpivm6y8K69066XC6BylDM2U4La+NmsxlIGYt5u+5g3bnRaARQgWLurj9Yd2qxWMBToJi76w/W2sV3guCUK+bvOoS1VuPxGJqCxfxdh7DWKr77g6ZcMX/XIay1enp6gqZgMX/XIaywwgorrIIVVlhhFaywwgorrIIVVlhhhVWwwgorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrLC6DmGFFVZYYRWssMIKq2CFFVZYYRWssMIKK6yCFVZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYYUVVlhhhRVWWAUrrLDCKlhh/dv7+3t1c3NTrddrWGGFtasF0Kurq83Pfn9/DyussHa1yWTyz8//8vICK6ywdq3n5+f/fv7BYLB5WwwrrLB2pNfX16rX6305g3hbXGp/hRVWWD+1Wq2qi4uLH+dQan+FFVZYPxWf/NaZRYn9FVZYYf3dw8ND7VmU2F9hhbXTWJfL5eZT2dSvM5/Pd55H7v0VVlg7i/Xz/vj4+Jj04EPcKZvMJOf+CiusncV6fX2dfE/8fPChabn2V1hh7STWr/bHfr+/+Vol5cGHJuXaX2GFtXNYf9of421xvD1u43Vms1lrsxmNRsn3V1hh7RTWOvtjGzDiDh136jbnM51OYYX1NLDusj/e3d3t9TqXl5dJZpRyf4UV1s5gDYA5/j23t7fJZpRyf4UV1k5g/ergfJ1iv93ldeIroNRzSrW/wgprcaxx8OG7g/Pb2uUT4sVi0fh1urC/wgprUax1Ds5vq84nxPHWdDgcZp3Xrnd9WGHtNNa6B+e3FQcovnvrGf893prmnlfb+yussBbDusvB+Tp9d4Y4jgSWmln8TwJWWA8aa5OD803+jW0efCi9v8IKa3as+xyc31Z8gPRnV0xx8KHk/gorrFmxtnFwvs6uGFBTHXwotb/CCmtWrG0cnK97h+3a/PbdX2GFNRvWpgcfjql99ldYYc2C9acnBp5aTfdXWGFNjrWNgw/HVNP9FVZYk2Nt6+DDMdVkf4UV1qRYcxycP5X9FVZYk2FNdfDhVPdXWGFNgjXlwYdT3V9hhTUJ1re3t81dQ9uLWcEK68E+3VCwwgorrLDCKlhhhVWwwgorrLD6El8tF/N3HcJaq/F4DE3BYv6uQ1hrFU8HhKZcuZ/OCOuBF8/eBSd/MXfXH6zFntan+pV4lCqsR1A8MRCgfHXhCY2wHmjxxMD4kxcgpS/m3JUnNMJ6wL8t0vafh9D/v2LoN5dgbe0JgvHdX1t/iVx/H4MTc/XMKliT3GXjEaNxJ0jxpw5PoZhbzC/m6G4Ka9adNr4TVL3spLBKsEqCVRKsEqySYJUEqwSrJFglwSrBKglWSbBKsEqCVYJVEqySYJVglQSrJFglWCXBKglWCVZJsEqCVYJVEqySYJVglQSrBKskWCXBKsEqCVZJsEqwSoJVEqzS0fQLNbOwKijevEUAAAAASUVORK5CYII=" width="235" height="180"></div> <div class="media GXRRIBB-F-m"><img class="gwt-Image" role="img" aria-hidden="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAC0CAYAAAB10tv3AAAFNklEQVR42u3d3VLiShSAUd//neRHS1RE1BIBFXyVTG1qpsapUQkh3R1gXXw354ZxV9YJG9p4dn5+XknqfmeGIMEqCVYJVkmwSoJVglUSrJJglWCVBKskWCVYJcEqCVYJVkmwSoJVglUSrBKskmCVBKsEqyRYJcEqwSoJVkmwSrBKglUSrBKskmCVBKsEqyRYJVglwSoJVglW/Vy/36+Gw6FqFvNy3cCapcFgUE0mk2o+n1fr9br6+PjQjsXcYn4xx5in6wrWVuv1etV0Oq1WqxVwLRbzjLnGfF1nsLZyN407AVzpivm6y8K69066XC6BylDM2U4La+NmsxlIGYt5u+5g3bnRaARQgWLurj9Yd2qxWMBToJi76w/W2sV3guCUK+bvOoS1VuPxGJqCxfxdh7DWKr77g6ZcMX/XIay1enp6gqZgMX/XIaywwgorrIIVVlhhFaywwgorrIIVVlhhhVWwwgorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrIIVVlhhhRVWwQorrLC6DmGFFVZYYRWssMIKq2CFFVZYYRWssMIKK6yCFVZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYRWssMIKK6ywClZYYYUVVlhhhRVWWAUrrLDCKlhh/dv7+3t1c3NTrddrWGGFtasF0Kurq83Pfn9/DyussHa1yWTyz8//8vICK6ywdq3n5+f/fv7BYLB5WwwrrLB2pNfX16rX6305g3hbXGp/hRVWWD+1Wq2qi4uLH+dQan+FFVZYPxWf/NaZRYn9FVZYYf3dw8ND7VmU2F9hhbXTWJfL5eZT2dSvM5/Pd55H7v0VVlg7i/Xz/vj4+Jj04EPcKZvMJOf+CiusncV6fX2dfE/8fPChabn2V1hh7STWr/bHfr+/+Vol5cGHJuXaX2GFtXNYf9of421xvD1u43Vms1lrsxmNRsn3V1hh7RTWOvtjGzDiDh136jbnM51OYYX1NLDusj/e3d3t9TqXl5dJZpRyf4UV1s5gDYA5/j23t7fJZpRyf4UV1k5g/ergfJ1iv93ldeIroNRzSrW/wgprcaxx8OG7g/Pb2uUT4sVi0fh1urC/wgprUax1Ds5vq84nxPHWdDgcZp3Xrnd9WGHtNNa6B+e3FQcovnvrGf893prmnlfb+yussBbDusvB+Tp9d4Y4jgSWmln8TwJWWA8aa5OD803+jW0efCi9v8IKa3as+xyc31Z8gPRnV0xx8KHk/gorrFmxtnFwvs6uGFBTHXwotb/CCmtWrG0cnK97h+3a/PbdX2GFNRvWpgcfjql99ldYYc2C9acnBp5aTfdXWGFNjrWNgw/HVNP9FVZYk2Nt6+DDMdVkf4UV1qRYcxycP5X9FVZYk2FNdfDhVPdXWGFNgjXlwYdT3V9hhTUJ1re3t81dQ9uLWcEK68E+3VCwwgorrLDCKlhhhVWwwgorrLD6El8tF/N3HcJaq/F4DE3BYv6uQ1hrFU8HhKZcuZ/OCOuBF8/eBSd/MXfXH6zFntan+pV4lCqsR1A8MRCgfHXhCY2wHmjxxMD4kxcgpS/m3JUnNMJ6wL8t0vafh9D/v2LoN5dgbe0JgvHdX1t/iVx/H4MTc/XMKliT3GXjEaNxJ0jxpw5PoZhbzC/m6G4Ka9adNr4TVL3spLBKsEqCVRKsEqySYJUEqwSrJFglwSrBKglWSbBKsEqCVYJVEqySYJVglQSrJFglWCXBKglWCVZJsEqCVYJVEqySYJVglQSrBKskWCXBKsEqCVZJsEqwSoJVEqzS0fQLNbOwKijevEUAAAAASUVORK5CYII=" width="235" height="180"></div></div><div class="media"></div><div class="media"></div><div class="media"></div><button type="button" class="GXRRIBB-B-d GXRRIBB-F-b GXRRIBB-B-t" aria-hidden="true" style="display: none;"><span><span class="GXRRIBB-B-e GXRRIBB-F-f caption"></span></span></button></div><div class="description-section text" style=""><b>Note: By applying to this position your application is automatically submitted to the following locations: Mountain View, CA, USA; San Francisco, CA, USA</b></div><div class="description-section text with-benefits" itemprop="description"><p>Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.</p> <p>Do you want to help Google build next-generation web applications like Inbox, Gmail, Google Search, Google Maps and more? As a Front End Software Engineer at Google, you will specialize in building responsive and elegant web applications that scale to millions of users in dozens of languages.</p><p>Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From AdWords to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.</p></div><div class="description-section"><div class="GXRRIBB-S-c"><h2 class="body2 secondary-text"> Responsibilities </h2> <div class="description-content text" itemprop="responsibilities"><ul> <li>Design, develop, test, deploy, maintain and improve software.</li> <li>Manage individual project priorities, deadlines and deliverables.</li> </ul></div></div> <div class="GXRRIBB-S-c"><h2 class="body2 secondary-text"> Qualifications </h2> <div class="description-content text stacked-requirements" itemprop="qualifications">Minimum qualifications:<ul><li>BA/BS degree in Computer Science or related technical field or equivalent practical experience.</li><li>1 year of work experience.</li><li>Experience in JavaScript, and one or more programming languages including but not limited to: Java, C/C++, Python or Go.</li><li>Experience with front end technologies and/or front end frameworks.</li></ul><br><br>Preferred qualifications:<ul> <li>Experience developing user-facing software.</li> <li>Experience with the latest and greatest web standards, including HTML5 and CSS3.</li> <li>Knowledge of web libraries and frameworks such as AngularJS, Polymer, Closure or Backbone.</li> <li>Strong sense of web design and attuned to the fundamentals of user experience.</li> <li>Familiarity with the whole web stack, including protocols and web server optimization techniques.</li> <li>An understanding of the principles of accessibility and can build products that are accessible to users with disabilities. </li> </ul></div></div></div></div>
    `,
  },
  {
    title: 'Senior UI Engineer - Real Time Data Infrastructure',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    tags: ['Gibbon', 'node.js'],
    details: `
                <div class="css-5eespc"><div class="css-1gfgkzu"><h1 class="css-1gosrl0">Senior UI Engineer - Real Time Data Infrastructure</h1><ul class="css-ebr9yr"><li class="css-10ur0vj"><span class="css-vp7ybf"><svg><path fill="#696868" fill-rule="evenodd" d="M.314 7.58C.11 6.988 0 6.35 0 5.684 0 2.544 2.462 0 5.5 0S11 2.544 11 5.683c0 .665-.11 1.304-.314 1.898h.02l-.074.154c-.166.44-.383.856-.644 1.236-1.21 2.19-2.702 4.2-4.478 6.03-2.306-2.163-4.048-4.636-5.225-7.42h.03zm5.186.376c1.215 0 2.2-1.018 2.2-2.273 0-1.255-.985-2.273-2.2-2.273-1.215 0-2.2 1.018-2.2 2.273 0 1.255.985 2.273 2.2 2.273z"></path></svg>Los Gatos, California</span></li><li class="css-10ur0vj"><span class="css-bubgcq"><svg><path fill="#696868" fill-rule="evenodd" d="M14.09 8.41c.073.206.11.425.11.646 0 1.074-.87 1.944-1.943 1.944H5.772c-.292 0-.58-.066-.843-.192-.906-.434-1.32-1.475-.994-2.4h-2.77c-.17 0-.336-.036-.49-.106-.584-.27-.84-.962-.57-1.547.594-1.293 1.606-1.94 3.033-1.94 1.14 0 2.017.413 2.632 1.237.875-.62 1.952-.928 3.23-.928 1.286 0 2.37.313 3.252.94.61-.833 1.487-1.25 2.632-1.25 1.424 0 2.438.645 3.043 1.932.072.156.11.325.11.496 0 .645-.52 1.167-1.166 1.167H14.09zM9.023 5.044c-1.39 0-2.517-1.13-2.517-2.522S7.633 0 9.023 0s2.517 1.13 2.517 2.523c0 1.393-1.127 2.522-2.517 2.522zm-5.87-.278c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542zm11.746 0c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542z"></path></svg>Data Engineering and Infrastructure</span></li></ul></div><div class="css-c4y980"><p><br>Netflix is the leading provider of streaming video, reaching over 100+ million subscribers globally. Our subscribers consume over 125 million hours of video per day and account for about 37% of the downstream Internet traffic in North America. Subscribers enjoy Netflix on more than 1,000 different device types. Supporting this global brand presents significant engineering challenges.<br><span "="">&nbsp;</span><br>We are a data-driven company, handling trillions of events per day to answer many application and business related questions. At the center of providing scalable solutions to these challenges is the Netflix Real Time Data Infrastructure team. This team is responsible for building Messaging as a Service and Stream Processing as a Service to collect, transport, aggregate, process and visualize various events. All engineering teams at Netflix use the platform and build application and insights on it. <br><span "="">&nbsp;</span><br>We are looking for an experienced, talented, and motivated Senior UI Engineer to join the Real Time Data Infrastructure team. &nbsp;You will be an integral component of our development teams and the features you build will enable our partners to use the infrastructure in a self service manner. Our product teams build and launch new features at blistering pace - think weeks vs. months or years.</p>
                  </div><div><h3 class="css-1ltm6hq">Opportunity:</h3><ul class="css-1igj1zn"><li>Design and implement front-end and user experience for the platform.</li><li>Knowledge of developer API services and collaborate on features from concept to finish</li><li>Leverage and contribute to open source technologies</li><li>Iterate quickly and incorporate feedback</li><li>Partner and communicate effectively with stakeholders</li></ul></div><div><h3 class="css-1ltm6hq">Required Skills:</h3><ul class="css-1igj1zn"><li>4+ years of software development experience</li><li>Experience with frontend languages such as Javascript, CSS, HTML</li><li>Experience in integrating Web Services and APIs</li><li>Strong background in creating responsive, intuitive frontend experiences</li><li>Bachelor's degree in CS, EE or similar</li></ul></div><div class="css-c4y980"></div></div>
    `,
  },
  {
    title: 'Senior Front-End Engineer',
    company: 'Instructure',
    location: 'Seattle, WA',
    tags: ['JS', 'React', 'Full-time'],
    details: `
<div class="section page-centered"><div>Instructure was founded to define, develop, and deploy superior, easy-to-use software. (And that’s what we did / do / will keep on doing.) We are dedicated to the fight against iffy, mothbally, shoddy software. We make better, more usable tools for teaching and learning (you know, stuff people will actually use). A better connected and more open education technology ecosystem. And more effective ways for everyone everywhere to access education, make discoveries, share knowledge, be inspired, and do big things. We accomplish all this by giving smart, creative, passionate people opportunities to create awesome. So here’s your opportunity.</div><div><br></div><div>We’re hiring senior front-end engineers for our Seattle office, who are passionate about technology and education, to help build out the front-end of our online video platform, <a href="http://arcmedia.com" class="postings-link">Arc</a> for interactive learning. </div><div><br></div><div>Our product team doesn't throw specs over some imaginary wall to engineering, and engineering doesn't throw code over some imaginary wall to QA. We all collaborate together. We highly value innovation, so much so that we have quarterly Hackweeks.  A week each quarter to work on relevant pet projects and features.  Woohoo!</div><div><br></div><div>Most of our work is open source, even our primary product (Canvas). Check us out on Github:&nbsp;<a href="http://www.github.com/instructure" class="postings-link">www.github.com/instructure</a>.</div><div><br></div><div><br></div><div>Our Seattle office is located downtown in the Westlake Center, 1601 5th Avenue.</div></div>
    `,
  },
]; // TODO: use lodash for this? // // terms = ['REACT', 'FT', 'JS] // // they all have to exist... should we just sort them? // TODO: move this? // tagList = ['JS', 'REACT', 'FT']
function getFilteredJobList(jobList = [], terms) {
  // TODO: change the name to filterTerms?
  var filteredList = jobList.filter(jobItem => {
    // TODO: optimize this...
    // for each item in the taglist check all the terms (terrible BigO time...)
    var tagList = jobItem.tags;
    var curTag, curTerm; // one is from listing, other is from search terms
    // because of sorting, now each index should match. If it doesn't we can abort...
    //
    console.log('termsSorted', terms);
    console.log('tagList', tagList);
    for (var i = 0; i < terms.length; i++) {
      // if there are more filter tags than tags in the listing, it's not a match. (easy bail option)
      if (terms.length > tagList.length) {
        return false;
      }
      // if the current term isn't included in the tagList, then no match
      if (!tagList.includes(terms[i])) {
        return false;
      }
      return true;
    }
  });

  return filteredList;
} // GET home page.
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express', jobData: jobData});
});

router.get('/filter/:tags', function(req, res, next) {
  var tagStr = req.params.tags;

  var tags = tagStr.split('+');

  res.render('index', {
    title: 'Express',
    terms: tags,
    jobData: getFilteredJobList(jobData, tags),
  });
});

// FIXME: Clean this up and dedupe properly...
router.get('/addfilter/:tag', function(req, res, next) {
  // get the old path
  var ref = req.get('referer');
  console.log('ref', ref);

  var newTag = req.params.tag;
  const myURL = new URL(ref);
  console.log('myurl', myURL.pathname);
  var oldPath = myURL.pathname;

  console.log('oldPath', oldPath);
  console.log('newTag', newTag);
  // if tag is already in url, just bail...
  // FIXME: use path.split() and path.join() instead?
  if (oldPath.includes(newTag)) {
    return res.redirect(oldPath);
  }
  // if there are other filters, add this one
  if (oldPath.includes('/filter')) {
    return res.redirect(`${oldPath}+${req.params.tag}`);
  }
  // if this is the first filter...
  return res.redirect(`/filter/${req.params.tag}`);
});
router.get('/removefilter/:tag', function(req, res, next) {
  // get the old path
  var ref = req.get('referer');
  console.log('ref', ref);

  const myURL = new URL(ref);
  console.log('myurl', myURL.pathname);
  var oldPath = myURL.pathname;

  var pathParts = oldPath.split('/');
  var tagStr = decodeURI(pathParts[pathParts.length - 1]); //remove %20 garbage etc

  var tagsArr = tagStr.split('+');
  tagsArr = tagsArr.filter(item => item != req.params.tag);
  tagStr = tagsArr.join('+');
  // remove it from the tagsArr
  // FIXME: I just need to find some easy built in way to do this... this is so dumb... Should I just use path params?
  // if only 1 param
  //
  console.log('tagsArr', tagsArr);
  console.log('tagStr', tagStr);
  if (!tagStr) {
    newPath = '/';
  } else {
    newPath = `/filter/${tagStr}`;
  }
  return res.redirect(newPath);
});

module.exports = router;
