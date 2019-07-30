import DS from 'ember-data';

const { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.forEach((resource) => {
      resource.relationships = {
        tags: {
          data: resource.attributes.tags.map((tag) => {
            return {
              id: tag.id,
              type: 'tags'
            };
          })
        }
      };
    });

    payload.included = payload.data
      .map((resource) => {
        return resource.attributes.tags;
      })
      .flat()
      .map((tag) => {
        let resource = {
          id: tag.id,
          type: 'tags'
        };

        delete tag.id;
        resource.attributes = tag;
        return resource;
      });

    return this._super(...arguments);
  }
});
