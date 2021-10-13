/* eslint-disable @typescript-eslint/naming-convention */
export enum Authorization {
	SIGN_IN = 'Sign In',
	LOGOUT = 'Logout'
}

export const MENU =  [
  {
    title: 'Home',
    url: '/home',
    icon: 'home',
    children: [],
  },
  {
    title: 'Account',
    url: null,
    icon: 'person',
    children: [
      { title: 'Edit Profile', url: '/profile1', icon: 'person' },
      { title: 'My Order History', url: '/my-sales-orders', icon: 'reader' },
      {
        title: 'My Invoice History',
        url: '/my-invoice-history',
        icon: 'reader',
      },
      { title: 'My Rewards', url: '/reward-list', icon: 'gift' },
      { title: 'My Vouchers', url: '/voucher-list', icon: 'gift' },
      {
        title: 'My Addresses',
        url: '/my-shipping-address',
        icon: 'cart',
      },
      {
        title: 'My Wishlist',
        url: '/my-wishlist',
        icon: 'heart',
        color: 'red',
      },
      { title: 'My Membership', url: '/my-membership', icon: 'card' },
    ],
  },
  {
    title: 'Products',
    url: '/product-category-list',
    icon: 'cart-sharp',
    children: [],
  },
  {
    title: 'News',
    url: '/news-list',
    icon: 'newspaper-outline',
    children: [],
  },
  { title: 'Privacy Policy', url: 'static-page/PRIVACY', icon: 'reader', children: [],},
  { title: 'Contact Us', url: 'static-page/CONTACT_US', icon: 'call', children: [], },
  {
    title: 'Returns and Refunds',
    url: 'static-page/RETURNS_AND_REFUNDS',
    icon: 'cash',
    children: [],
  },
  {
    title: 'Store Locator',
    url: '/store-locator-list',
    icon: 'location-sharp',
    children: [],
  }
];

export const USER_MENU = [
  {
    title: 'Account',
    url: null,
    icon: 'person',
    children: [
      { title: 'Edit Profile', url: '/profile1', icon: 'person' },
      { title: 'My Order History', url: '/my-sales-orders', icon: 'reader' },
      {
        title: 'My Invoice History',
        url: '/my-invoice-history',
        icon: 'reader',
      },
      { title: 'My Rewards', url: '/reward-list', icon: 'gift' },
      { title: 'My Vouchers', url: '/voucher-list', icon: 'gift' },
      {
        title: 'My Addresses',
        url: '/my-shipping-address',
        icon: 'cart',
      },
      { title: 'My Membership', url: '/my-membership', icon: 'card' },
      { title: 'Logout', url: '/login', icon: 'log-out-outline' },
    ],
  },
  {
    title: 'My Wishlist',
    url: '/my-wishlist',
    icon: 'heart',
    children: [],
  },
  {
    title: 'cart',
    url: '/cart',
    icon: 'cart',
    children: [],
  },
];
