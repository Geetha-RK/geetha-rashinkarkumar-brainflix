export default function formatDateToMMDDYYYY(input) {       
    const date = (input instanceof Date) ? input : new Date(input);

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const month = String(date.getMonth() + 1); 
    const day = String(date.getDate());
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
}