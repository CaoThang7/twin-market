interface UtilsUser {
    id: number;
    name: string;
    category: string,
    icon: string,
}

let myOnlineShopping: UtilsUser[] = [
    { id: 1, name: 'my order', category: 'order', icon: '' },
    { id: 2, name: 'my cart', category: 'cart', icon: '' },
];

let utilsProfile: UtilsUser[] = [
    { id: 1, name: 'theme', category: 'theme', icon: 'theme-light-dark' },
    { id: 2, name: 'language', category: 'language', icon: 'google-translate' },
    { id: 2, name: 'support', category: 'support', icon: 'headphones' },
];

export { UtilsUser, myOnlineShopping, utilsProfile }