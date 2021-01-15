'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const mongoose = require('mongoose')
const mongo = require('mongodb').MongoClient
const url = 'mongodb+srv://dbavb786:Avb@90333@taskmanager-e8bqy.mongodb.net/moweb?retryWrites=true&w=majority'
mongoose.Promise = global.Promise

const getQuery = (fieldName, operation, value) => {
  let query = {}
  query[fieldName] = {}
  query[fieldName][operation] = value
  return query
}

const getCommonProjection = () => {
  let projection = {}
  projection[dbCons.FIELD__ID] = false
  projection[dbCons.FIELD__V] = false
  projection[dbCons.FIELD_CREATED_ON] = false
  return projection
}

const getMatchedResult = (query) => {
  let queryToBeExecuted = {}
  queryToBeExecuted[dbOperationCons.FIELD_MATCH] = query
  return queryToBeExecuted
}

const getProjectedField = (projectedField) => {
  let projection = {}
  projection[dbOperationCons.FIELD_PROJECTION] = projectedField
  return projection
}

const getQueryArrayForOperation = (operation, query) => {
  operatedQuery[operation] = query
  return operatedQuery
}

const getLookup = (from, localField, foreignField, as) => {
  let json = {}
  json[dbOperationCons.FIELD_LOOKUP] = {}
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_FROM] = from
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_LOCAL_FIELD] = localField
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_FOREIGN_FIELD] = foreignField
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_AS] = as
  return json
}

const getUnwindedResponse = (unwindObject) => {
  let json = {}
  json[dbOperationCons.FIELD_UNWIND] = unwindObject
  return json
}

const getGroupObject = (groupObject) => {
  let json = {}
  json[dbOperationCons.FIELD_GROUP] = groupObject
  return json
}

const getOrderedJson = (value) => {
  let json = {}
  json[dbOperationCons.FIELD_ORDERED] = value
  return json
}

const getUpdatedJsonInResponse = (value) => {
  let json = {}
  json[dbOperationCons.FIELD_NEW] = value
  return json
}

const getUpdateJsonFormat = (updateJson) => {
  let json = {}
  json[dbOperationCons.OP_SET] = updateJson
  return json
}

const updateAllValues = (value) => {
  let json = {}
  json[dbOperationCons.FIELD_MULTI] = value
  return json
}

const getQueryJsonForElementMatch = (parameter, elemMatchValue) => {
  let query = {}
  query[parameter] = {}
  query[parameter][dbOperationCons.OP_ELEM_MATCH] = elemMatchValue
  return query
}

const getQueryJsonForRegexOp = (value, caseSensitive) => {
  let query = {}
  query = {}
  query[dbOperationCons.OP_REGEX] = value
  if (caseSensitive) {
    query[dbOperationCons.FIELD_OPTIONS] = dbOperationCons.FIELD_CASE_INSENSITIVE
  }
  return query
}

const getSortJson = (json) => {
  let sortJson = {}
  sortJson[dbOperationCons.OP_SORT] = json
  return sortJson
}

const getSkipJson = (skipValue) => {
  let skipJson = {}
  skipJson[dbOperationCons.OP_SKIP] = skipValue
  return skipJson
}

const getLimitJson = (limit) => {
  let limitJson = {}
  limitJson[dbOperationCons.OP_LIMIT] = limit
  return limitJson
}

const getMapReduceOutputJson = () => {
  let outputJson = {}
  outputJson[dbOperationCons.FIELD_INLINE] = 1
  return outputJson
}

const getMapReduceJson = (query, regexMapfunction, reduceFunction, outputJson, extraParams) => {
  let mapReduceJson = {}
  mapReduceJson[dbOperationCons.FIELD_QUERY] = query
  mapReduceJson[dbOperationCons.FIELD_OUT] = outputJson
  mapReduceJson[dbOperationCons.FIELD_MAP] = regexMapfunction
  mapReduceJson[dbOperationCons.FIELD_REDUCE] = reduceFunction
  if (extraParams !== undefined) {
    mapReduceJson = utils.mergeJsons(mapReduceJson, extraParams)
  }

  return mapReduceJson
}

const getUpdatePushJson = (updateJson) => {
  let pushJson = {}
  pushJson[dbOperationCons.FIELD_PUSH] = updateJson
  return pushJson
}

const getFinalQueryJson = (query) => {
  const isDeleteQueryJson = {}
  isDeleteQueryJson[utils.dbCons.COMMON_IS_DELETED] = false
  const queryJson = {}
  queryJson[dbOperationCons.OP_AND] = [query]
  queryJson[dbOperationCons.OP_AND].push(isDeleteQueryJson)
  return queryJson
}

const getKeyValuePair = (key, value) => {
  const keyValueObject = {}
  keyValueObject['k'] = key
  keyValueObject['v'] = value
  return keyValueObject
}

const replaceRootToNewRoot = (json) => {
  const replaceRootJson = {}
  replaceRootJson[dbOperationCons.FIELD_REPLACE_ROOT] = {}
  replaceRootJson[dbOperationCons.FIELD_REPLACE_ROOT][dbOperationCons.FIELD_NEW_ROOT] = json
  return replaceRootJson
}

const getAggregationJson = (operator, json) => {
  const query = {}
  query[operator] = json
  return query
}

const getLookUpPipeline = (from, variable, pipeline, as) => {
  let json = {}
  json[dbOperationCons.FIELD_LOOKUP] = {}
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_FROM] = from
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_LET] = variable
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_PIPELINE] = pipeline
  json[dbOperationCons.FIELD_LOOKUP][dbOperationCons.FIELD_AS] = as
  return json
}



module.exports = {
  getQuery,
  getCommonProjection,
  getGroupObject,
  getMatchedResult,
  getProjectedField,
  getQueryArrayForOperation,
  getLookup,
  getUnwindedResponse,
  getOrderedJson,
  getUpdatedJsonInResponse,
  getUpdateJsonFormat,
  updateAllValues,
  getQueryJsonForElementMatch,
  getQueryJsonForRegexOp,
  getSortJson,
  getSkipJson,
  getLimitJson,
  getMapReduceOutputJson,
  getMapReduceJson,
  getUpdatePushJson,
  getFinalQueryJson,
  getKeyValuePair,
  replaceRootToNewRoot,
  getAggregationJson,
  getLookUpPipeline
}
