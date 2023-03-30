export default function tagged(callback, mutator = (val) => val) {
    return (strings, ...values) => {
        return callback(strings.raw.reduce((acc, str, i) => {
            return acc + (mutator(values[i - 1])) + str;
        }));
    };
}
