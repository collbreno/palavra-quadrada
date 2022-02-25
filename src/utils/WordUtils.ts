export function setCharAt(str: string, chr: string, index: number): string {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}