module.exports = {

  // * /////////////////////////
  // * db opration field
  // * /////////////////////////

  FIELD_PROJECTION: '$project',
  FIELD_MATCH: '$match',
  FIELD_LOOKUP: '$lookup',
  FIELD_UNWIND: '$unwind',
  FIELD_PUSH: '$push',
  FIELD_ROOT: '$$ROOT',
  FIELD_SUM: '$sum',
  FIELD_FROM: 'from',
  FIELD_GROUP: '$group',
  FIELD_SORT: '$sort',
  FIELD_AGGREGATE_OUT: '$out',
  FIELD_ORDERED: 'ordered',
  FIELD_NEW: 'new',
  FIELD_N: 'n',
  FIELD_MULTI: 'multi',
  FIELD_NMODIFIED: 'nModified',
  FIELD_FOREIGN_FIELD: 'foreignField',
  FIELD_LOCAL_FIELD: 'localField',
  FIELD_AS: 'as',
  FIELD_PATH: 'path',
  FIELD_PRESERVE_NULL_AND_EMPTY_ARRAYS: 'preserveNullAndEmptyArrays',
  FIELD_CASE_INSENSITIVE: 'i',
  FIELD_OPTIONS: '$options',
  FIELD_ADD_TO_SET: '$addToSet',
  FIELD_ARRAY_TO_OBJECT: '$arrayToObject',
  FIELD_REPLACE_ROOT: '$replaceRoot',
  FIELD_NEW_ROOT: 'newRoot',
  FIELD_EXPR: '$expr',
  FIELD_LET: 'let',
  FIELD_PIPELINE: 'pipeline',
  FIELD_ARRAY_ELEMENT_AT: '$arrayElemAt',

  // * /////////////////////////
  // * common db opration field
  // * /////////////////////////

  OP_EQUAL: '$eq',
  OP_NOT_EQUAL: '$ne',
  OP_GTE: '$gte',
  OP_LTE: '$lte',
  OP_GT: '$gt',
  OP_AND: '$and',
  OP_IN: '$in',
  OP_SET: '$set',
  OP_OR: '$or',
  OP_ELEM_MATCH: '$elemMatch',
  OP_REGEX: '$regex',
  OP_NIN: '$nin',
  OP_SORT: '$sort',
  OP_SKIP: '$skip',
  OP_LIMIT: '$limit',
  OP_MR_SORT: 'sort',
  OP_MR_LIMIT: 'limit',
  OP_EXISTS: '$exists',
  OP_FILTER: '$filter',
  OP_UPSERT: 'upsert',
  OP_SET_DEFAULT_ON_INSERT: 'setDefaultsOnInsert',
  OP_ALL: '$all',
  FIELD_INLINE: 'inline',
  FIELD_QUERY: 'query',
  FIELD_REDUCE: 'reduce',
  FIELD_MAP: 'map',
  FIELD_OUT: 'out',
  FIELD_SCOPE: 'scope',
  FIELD_UPDATE_ONE: 'updateOne',
  FIELD_FILTER: 'filter',
  FIELD_UPDATE: 'update',
  FIELD_INPUT: 'input',
  FIELD_CONDITION: 'cond',
}
