export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const isLocalStorageEnabled = () => {
    try {
        const mod = '__storage_test__';
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return !isSafari;
    } catch(e) {
        return false;
    }
};

export const customStorage = isLocalStorageEnabled() ? localStorage : sessionStorage;