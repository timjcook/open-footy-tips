export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api/v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/seasons', (schema, request) => {
    let { year } = request.queryParams;

    if (year) {
      return schema.seasons.findBy({ year });
    } else {
      return schema.seasons.slice(0, 19);
    }
  });

  this.get('/seasons/:id/rounds');
  this.get('/rounds/:id');
  this.get('/matches/:id');
  this.get('/grounds/:id');
  this.get('/ladders/:id');
  this.get('/teams');
  this.get('/teams/:id');
}
