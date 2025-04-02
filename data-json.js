const dataJson = () => {
    const book = {
        title: 'Ego is the Enemy',
        author: 'Ryan holiday'
    }
    
    const bookJSON = JSON.stringify(book);
    console.log(bookJSON);
    const bookObject = JSON.parse(bookJSON);
    console.log(bookObject.title); // Ego is the Enemy
    
    
};

module.exports = dataJson;

