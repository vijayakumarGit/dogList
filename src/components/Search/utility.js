

 let timeout = 0;
export const debounce=(cb,time)=>{
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        cb();
    }, time);
}