export default function tagged(callback) {
    return (strings, ...values) => {
        return callback(strings.raw.reduce((acc, str, i) => {
            return acc + (values[i - 1]).join('') + str;
        }));
    };
}
