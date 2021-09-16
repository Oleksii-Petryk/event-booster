import { error } from '@pnotify/core/dist/PNotify';


// error({
//     text: 'Search error!'
// });
  
export function errorNotice() {
    
    return error({
        text: 'Server error!',
        sticker: false,
        delay: 2000
    });
};

