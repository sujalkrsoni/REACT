
export function useCaptcha(){

    let code = ''
    code = Math.floor(Math.random() * 10000) ; 
    console.log(code);
    return code;
}