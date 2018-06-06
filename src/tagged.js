/**
 * Create a tagged template literal function
 * by providing a callback function to be
 * called with the resulting string. Provide
 * a function as an optional second parameter
 * to mutate each value passed to template
 * literal
 *
 * @param {Function} callback
 * @param {Function} mutator (optional)
 * @return {Function}
 * @api public
 */
export default function tagged(callback, mutator = (val) => val) {
    return (strings, ...values) => {
        return callback(strings.raw.reduce((acc, str, i) => {
            return acc + (mutator(values[i - 1])) + str;
        }));
    };
}
