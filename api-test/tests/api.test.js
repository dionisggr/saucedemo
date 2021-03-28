'use strict';

/* global supertest baseUrl, expect */

describe('The Sauce Demo API', () => {
  let postToPatch;

  describe('renders Landing Page', () => {
    it('GET / responds with 200 status and HTML.', () => {
      return supertest(baseUrl)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
    });
  });

  describe('Posts-Related', () => {
    const post = { userId: 1, title: 'New Title', body: 'New Body' };

    it('GET /posts responds with 200 status and an array of post objects.', () => {
      return supertest(baseUrl)
        .get('/posts')
        .expect(200)
        .expect(res => {          
          expect(res.body).to.be.an('array');
          expect(Object.keys(res.body[0])).to.deep.include(...Object.keys(post));
          
          postToPatch = res.body[0];  // GET & PATCH context
        });
    });

    it('POST /posts responds with 201 status and a post object.', () => {
      return supertest(baseUrl)
        .post('/posts')
        .set({ 'Content-type': 'application/json; charset=UTF-8' })
        .send(JSON.stringify(post))
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.an('object');
          expect(Object.keys(res.body)).to.deep.include(...Object.keys(post));
        });
    });

    it('PATCH /posts responds with 200 status and the edited post object.', () => {
      const { id } = postToPatch;

      return supertest(baseUrl)
        .patch(`/posts/${id}`)
        .set({ 'Content-type': 'application/json; charset=UTF-8' })
        .send(post)  // GET & PATCH context
        .expect(200)
        .expect(res => {
          delete res.body.id;
          
          expect(res.body).to.be.an('object');
          expect(res.body).to.eql(post);
        });
    });

    it('DELETE /api/users/:userID responds with 200 status.', () => {
      return supertest(baseUrl)
        .delete('/posts/1')
        .expect(200);
    });
  });
});

