interface TodoData {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export const getData = async() => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
