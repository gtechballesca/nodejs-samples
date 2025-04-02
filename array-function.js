const users = [{
    name: 'Andrew Mead',
    age: 27
}, {
    name: 'George Hudson',
    age : 22   

}, {
    name: 'Clay Clay',
    age: 45
}];

const user = () => {
    return users.find(
        (user) => user.name === 'George Hudson'
    );
}


module.exports = user;