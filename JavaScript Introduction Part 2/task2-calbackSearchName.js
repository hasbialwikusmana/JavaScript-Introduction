// creat search name callback function
const searchName = (key, limit, callback) => {
    const nameFilter = name.filter((data) =>
        data.toLowerCase().includes(key.toLowerCase())
    );
    const result = nameFilter.slice(0, limit);
    callback(result);
    };

    const getResult = (result) => {
        console.log(result);
    }

    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"]
        
    searchName("An", 3, getResult)
        