import { Response } from 'ember-cli-mirage';

export default function() {
  this.get('/posts', () => {
    return new Response(200, {}, {
      data: [
        {
          id: '1',
          type: 'post',
          attributes: {
            title: 'Post A',
            body: '...',
            tags: [
              {
                id: '1',
                'name': 'JavaScript'
              },
              {
                id: '2',
                name: 'Node.js'
              }
            ]
          }
        },
        {
          id: '2',
          type: 'post',
          attributes: {
            title: 'Post B',
            body: '...',
            tags: [
              {
                id: '1',
                'name': 'JavaScript'
              },
              {
                id: '3',
                name: 'Ember.js'
              }
            ]
          }
        }
      ]
    });
  });
}
