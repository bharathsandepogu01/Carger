export const errorObjectHandling = async(error:any):Promise<string> => {
    const response = Object.getOwnPropertyDescriptor(error, 'response');
    if(response?.value?.status) {
        switch(response.value.status){
            case 400:
                return response.value.data.error;
           
            case 401:
                return 'invalid token';    

            case 403: 
                return 'Incorrect password';
            
            case 404:
                return 'user not found, please register';    
                
            case 409:
                return 'account already exist, please login';    
            
            default :
                return 'Something went wrong, please try again';

        };
    };
    return 'Something went wrong, please try again';
};