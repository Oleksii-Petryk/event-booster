import { alert } from '@pnotify/core/dist/PNotify';

// alert({
//     text: 'Search error!'
// });
  
export function alertNotice() {
    
    return alert({
        text: 'There are no such events!',
        sticker: false,
        delay: 2000
    });
};
