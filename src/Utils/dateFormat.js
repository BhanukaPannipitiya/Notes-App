const dateFormat = (utcDateTime) => { 
    const date = new Date(utcDateTime).toLocaleDateString('en-US')
    return date
 }

 module.exports = dateFormat