describe('The App', () => { 
  describe.only('renders Landing Page', () => {
    it('GET / responds with 200 status and an html page.', () => {
      return supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
    });
  });

  describe('User Data', () => {
    it('GET /api/users responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/users')
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(200)
        .expect(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/users responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/users')
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(user)
        .expect(307) // redirect to Login
    });
    it('PATCH /api/users/:userID responds with 201 status and an object.', () => {
        const values = {
          "username": "dionisggr15",
          "firstName": "Dionis",
          "lastName": "Gonzalez",
          "email": "dionisggr15@gmail.com",
          "tools": "RESTful APIs",
          "startDate": "12/20/2020",
          "github": "github.com/dionisggr"
        }
      return supertest(app)
        .patch('/api/users/1')
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(values)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
    });
    it('DELETE /api/users/:userID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/users/1`)
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(301);
    });
  });
  
  describe('Project Data', () => {
    let projects;
    let project = {
      name: "Project 7",
      description: "First description",
      tools: "HTML/CSS",
      phase: "Design",
      status: "Delayed",
      owner_id: 2,
      owner: "gabrielrrm",
      start_date: "2020-12-30T20:02:30.908Z",
      collaboration: true,
      github: "github.com/dionisggr/devmap"
    };
    before('inserting projects to table', () => {
      projects = createProjects();
      return db('projects')
        .insert(projects)
        .catch(error => console.log({ error }))
    });
    it('GET /api/projects responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/projects')
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(200)
        .expect(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/projects responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/projects')
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(project)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
          project.project_id = res.body.project_id;
          project.owner = res.body.owner.toString();
          res.body.owner_id = project.owner_id;
          expect(res.body).to.eql(project);
        });
    });
    it('PATCH /api/projects/:projectID responds with 201 status and an object.', () => {
      const random = uuid();
      project.name = random;
      return supertest(app)
        .patch(`/api/projects/${project.project_id}`)
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(project)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
    });
    it('DELETE /api/projects/:projectID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/projects/${project.project_id}`)
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(301);
    });
  });
  describe('Issue Data', () => {
    let random = uuid();
    let issues;
    let issue = {
      name: "Issue 1",
      description: "First description",
      tools: "HTML/CSS",
      phase: "Design",
      status: "Delayed",
      owner_id: 1,
      owner: "gabrielrrm",
      start_date: "2020-12-30T20:02:30.908Z",
      project_id: 1,
      collaboration: true,
      github: "github.com/dionisggr/devmap"
    };
    before('inserting issues to table', () => {
      issues = createIssues();
      return db('issues')
        .insert(issues)
    });
    it('GET /api/issues responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/issues')
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(200)
        .expect(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/issues responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/issues')
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(issue)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
          issue.issue_id = res.body.issue_id;
          issue.owner = res.body.owner.toString();
          res.body.start_date = "2020-12-30T20:02:30.908Z";
          res.body.owner_id = issue.owner_id;
          expect(res.body).to.eql(issue);
        });
    });
    it('PATCH /api/issues/:issueID responds with 201 status and an object.', () => {
      const random = uuid();
      issue.name = random;
      return supertest(app)
        .patch(`/api/issues/${issue.issue_id}`)
        .set({'Authorization': 'Bearer my-secret-key'})
        .send(issue)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
    });
    it('DELETE /api/issues/:issueID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/issues/${issue.issue_id}`)
        .set({'Authorization': 'Bearer my-secret-key'})
        .expect(301);
    });
  });
});

