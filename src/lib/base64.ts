import atob from 'atob';
import btoa from 'btoa';
 
 export const encodeBase64 = (value: string) => {
    return btoa(value);
  };
  
  
  export const decodeBase64 = (encodedValue: string) => {
    return atob(encodedValue);
  };
  