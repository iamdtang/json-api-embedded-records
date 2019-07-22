import DS from 'ember-data';

const { JSONSerializer, EmbeddedRecordsMixin } = DS;

export default JSONSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    tags: {
      embedded: 'always'
    }
  },
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload.data.map(({ id, attributes }) => {
      return {
        id,
        ...attributes
      };
    });

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
