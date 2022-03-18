const accentsMap = {
    A: 'á|à|ã|â|À|Á|Ã|Â',
    E: 'é|è|ê|É|È|Ê',
    I: 'í|ì|î|Í|Ì|Î',
    O: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    U: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    C: 'ç|Ç',
    N: 'ñ|Ñ',
  };
  
  export function removeAccents(text: string){
      return Object.keys(accentsMap).reduce((acc, cur) => acc.replace(new RegExp(accentsMap[cur], 'g'), cur), text);
  }