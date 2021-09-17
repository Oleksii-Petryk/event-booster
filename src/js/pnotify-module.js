import { alert, error } from '@pnotify/core/dist/PNotify';

export function alertNotice() {
    
    return alert({
        text: 'There are no such events!',
        sticker: false,
        delay: 2000
    });
};

export function errorNotice() {
    
    return error({
        text: 'Server error!',
        sticker: false,
        delay: 2000
    });
};

