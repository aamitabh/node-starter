/**
 * Reference: http://pietschsoft.com/post/2015/09/05/JavaScript-Basics-How-to-create-a-Dictionary-with-KeyValue-pairs
 */

/**
 * Start with an empty dictionary
 */
let dict = {}
dict['one'] = 'onevalue'
console.log('dict[one] :', dict.one);

/**
 * Create complex dictionary
 */
let dict1 = {
    one: {one1: 'one1val', one2: 'one2val'},
    two: {two1: 'two1val', two2: 'two2val', two3: 'two3val'}
}
console.log('dict1[one][one2] :', dict1['one']['one2'])

/**
 * Modify sub object and see if parent dict changes
 */
let dict1one = dict1.one
dict1one.one3 = 'one3val'
pretty('dict1', dict1)

function pretty(title, object) {
    console.log(`${title}: ${JSON.stringify(object, undefined, 2)}`)
}