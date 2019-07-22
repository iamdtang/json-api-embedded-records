import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  tags: hasMany('tag', { async: false })
});
