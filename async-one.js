const asyncOne = () => {
    console.log('Starting');

    setTimeout(()=> {
        console.log('1 second timer')
    }, 1000);

    console.log('Stopping');

}

module.exports = asyncOne;