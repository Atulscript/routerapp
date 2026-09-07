import type { GatewayIp, Brand, Isp, RouterModel } from './types';

export const GATEWAY_IPS: GatewayIp[] = [
  {
    ip: '192.168.1.1',
    slug: '192-168-1-1',
    title: '192.168.1.1 Router Admin Login & Setup Guide',
    description: 'Access your router configuration panel at 192.168.1.1. Step-by-step default login credentials, WiFi password change, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TP-Link', 'ASUS', 'Linksys', 'Huawei', 'ZTE', 'Airtel', 'BSNL'],
    steps: [
      'Connect your PC or smartphone to the router WiFi network or via Ethernet cable.',
      'Open your web browser (Chrome, Safari, Edge, or Firefox).',
      'Type http://192.168.1.1 into the URL address bar and press Enter.',
      'Enter the default username (admin) and password (admin or password).',
      'Navigate to Wireless Settings to change your WiFi SSID name and password.'
    ],
    faqs: [
      {
        question: 'Why does 192.168.1.1 show "Site cannot be reached"?',
        answer: 'Ensure your device is connected to your router WiFi/Ethernet. Verify your default gateway using ipconfig in Command Prompt.'
      },
      {
        question: 'What if "admin/admin" doesn\'t work?',
        answer: 'Check the physical sticker on the bottom of your router for custom factory credentials. If changed, hold the Reset button for 10 seconds to restore factory defaults.'
      },
      {
        question: 'Is it 192.168.l.l or 192.168.1.1?',
        answer: 'IP addresses only contain numbers! 192.168.l.l uses lowercase letter "L" by mistake and will result in a search engine query instead of opening your router.'
      }
    ]
  },
  {
    ip: '192.168.0.1',
    slug: '192-168-0-1',
    title: '192.168.0.1 Router Admin Login & Setup Guide',
    description: 'Default IP address for D-Link, Netgear, Tenda, and TP-Link routers. Find default passwords and login instructions.',
    defaultUser: 'admin',
    defaultPass: 'admin / password / (blank)',
    commonBrands: ['D-Link', 'Netgear', 'Tenda', 'TP-Link'],
    steps: [
      'Ensure your computer or mobile is connected to the router network.',
      'Open your internet browser and go to http://192.168.0.1 in the address bar.',
      'Enter admin as the username and admin or leave blank for the password.',
      'Click Login to access your admin dashboard.'
    ],
    faqs: [
      {
        question: 'What is the difference between 192.168.0.1 and 192.168.1.1?',
        answer: 'They belong to different Class C subnets. Router manufacturers designate one of these as the default local gateway address.'
      },
      {
        question: 'How to reset 192.168.0.1 password?',
        answer: 'Press and hold the small Reset pinhole button on the back of the router for 10-15 seconds until the LED lights blink.'
      }
    ]
  },
  {
    ip: '192.168.2.1',
    slug: '192-168-2-1',
    title: '192.168.2.1 Router Admin Login & Setup Guide',
    description: 'Default gateway IP for Belkin, SMC, Siemens, and Philips routers. Default passwords and troubleshooting steps.',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin / smcadmin',
    commonBrands: ['Belkin', 'SMC', 'Siemens', 'Philips'],
    steps: [
      'Connect to your Belkin or SMC router via WiFi or LAN cable.',
      'Open http://192.168.2.1 in your browser.',
      'Leave password blank or enter admin, then click Submit.'
    ],
    faqs: [
      {
        question: 'What is the default Belkin password at 192.168.2.1?',
        answer: 'Most Belkin routers have no default password out of the box. Just leave the password field blank and click Submit.'
      }
    ]
  },
  {
    ip: '192.168.1.254',
    slug: '192-168-1-254',
    title: '192.168.1.254 Router Admin Login & Setup Guide',
    description: 'Default IP address for Technicolor, Thomson, BT Home Hub, Plusnet, and TP-Link ADSL modems.',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number)',
    commonBrands: ['Technicolor', 'Thomson', 'BT Home Hub', 'Plusnet', 'TP-Link'],
    steps: [
      'Connect your device to the modem router via WiFi or cable.',
      'Visit http://192.168.1.254 in your web browser.',
      'Enter the admin credentials found on your modem rear label.'
    ],
    faqs: [
      {
        question: 'Where can I find my 192.168.1.254 admin password for BT/Plusnet?',
        answer: 'Look at the pull-out card or sticker on the back of your BT Hub / Plusnet router.'
      }
    ]
  },
  {
    ip: '10.0.0.1',
    slug: '10-0-0-1',
    title: '10.0.0.1 Router Admin Login & Setup Guide',
    description: 'Default gateway address for Xfinity/Comcast, Cisco, and Apple AirPort routers. Quick setup and login guide.',
    defaultUser: 'admin',
    defaultPass: 'password',
    commonBrands: ['Xfinity (Comcast)', 'Cisco', 'Apple AirPort'],
    steps: [
      'Connect to your Xfinity gateway or Cisco router network.',
      'Navigate to http://10.0.0.1 in your web browser.',
      'Enter username "admin" and password "password" on the login page.',
      'Set a new secure password upon your first login.'
    ],
    faqs: [
      {
        question: 'What is the default Xfinity 10.0.0.1 login?',
        answer: 'Username: admin, Password: password. Xfinity prompts you to change this during the initial setup.'
      }
    ]
  },
  {
    ip: '192.168.29.1',
    slug: '192-168-29-1',
    title: '192.168.29.1 JioFiber Router Login & Config Guide',
    description: 'Default admin IP for JioFiber Home Gateway routers in India. WiFi setup, port forwarding, and password instructions.',
    defaultUser: 'admin',
    defaultPass: 'Jiocentrum',
    commonBrands: ['JioFiber (Reliance Jio)'],
    steps: [
      'Connect to your JioFiber WiFi or LAN.',
      'Open http://192.168.29.1 in your browser.',
      'Login with username: admin and password: Jiocentrum (or your MyJio OTP login).',
      'Manage 2.4GHz / 5GHz bands and connected clients.'
    ],
    faqs: [
      {
        question: 'What is the default password for JioFiber 192.168.29.1?',
        answer: 'The default username is "admin" and password is "Jiocentrum". Alternatively, you can manage settings using the MyJio app.'
      }
    ]
  }
];

export const BRANDS: Brand[] = [
  {
    name: 'TP-Link',
    slug: 'tp-link',
    defaultIp: '192.168.1.1 / 192.168.0.1 / tplinkwifi.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Complete default login credentials and setup guides for TP-Link Archer, Deco, and WR series routers.',
    models: [
      { model: 'Archer AX10 / AX20 / AX50', ip: '192.168.0.1', username: 'admin', password: 'Custom password on setup' },
      { model: 'Archer C6 / C7 / C80', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { model: 'TL-WR841N / TL-WR845N', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { model: 'Deco M4 / M5 / X20 (Mesh)', ip: '192.168.68.1', username: 'TP-Link ID', password: 'TP-Link Cloud Password' },
      { model: 'TD-W8961N (ADSL)', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to the TP-Link WiFi or plug in via LAN cable.',
      'Open a browser and navigate to http://tplinkwifi.net or http://192.168.0.1.',
      'Enter the default username and password (admin / admin).',
      'Go to Wireless -> Wireless Settings to configure your SSID and WPA2/WPA3 password.'
    ]
  },
  {
    name: 'Netgear',
    slug: 'netgear',
    defaultIp: '192.168.1.1 / routerlogin.net',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default passwords and setup instructions for Netgear Nighthawk, Orbi, and RAX series routers.',
    models: [
      { model: 'Nighthawk R7000 / RAX40 / RAX80', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { model: 'Orbi RBK50 / RBK750 (Mesh)', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { model: 'WNR2000 / JWNR2010', ip: '192.168.1.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your device to your Netgear router WiFi.',
      'Open http://routerlogin.net or http://192.168.1.1 in a browser.',
      'Enter username: admin and password: password.',
      'Use the Genie or Nighthawk dashboard to manage your network settings.'
    ]
  },
  {
    name: 'D-Link',
    slug: 'd-link',
    defaultIp: '192.168.0.1 / dlinkrouter.local',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin',
    description: 'Find default logins and configuration instructions for D-Link DIR, COVR, and DSL routers.',
    models: [
      { model: 'DIR-615 / DIR-825 / DIR-842', ip: '192.168.0.1', username: 'admin', password: '(blank) / admin' },
      { model: 'EXO AX1500 / AX1800', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { model: 'DSL-2750U / 2877AL', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your D-Link router network.',
      'Visit http://192.168.0.1 or http://dlinkrouter.local in your web browser.',
      'Enter admin as the username and leave the password empty (or enter admin).',
      'Configure Internet and WiFi settings via the setup wizard.'
    ]
  },
  {
    name: 'ASUS',
    slug: 'asus',
    defaultIp: '192.168.1.1 / router.asus.com',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default credentials, ASUSWRT configuration, and WiFi setup for ASUS RT and ROG Rapture routers.',
    models: [
      { model: 'RT-AX55 / RT-AX86U / RT-AX88U', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { model: 'ROG Rapture GT-AX6000 / GT-AX11000', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { model: 'ZenWiFi AX (XT8 / XD4)', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your ASUS WiFi network or Ethernet port.',
      'Navigate to http://router.asus.com or http://192.168.1.1 in your browser.',
      'Log in with username: admin and password: admin.',
      'Access ASUSWRT to manage AiProtection, QoS, and Wireless configuration.'
    ]
  },
  {
    name: 'Tenda',
    slug: 'tenda',
    defaultIp: '192.168.0.1 / tendawifi.com',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    description: 'Setup guides and default login passwords for Tenda AC, Nova Mesh, and F-series routers.',
    models: [
      { model: 'AC10 / AC19 / AC23', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { model: 'Nova MW3 / MW6 / MW12 (Mesh)', ip: '192.168.5.1', username: 'admin', password: 'admin' },
      { model: 'Tenda F3 / F9', ip: '192.168.0.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect to your Tenda router WiFi network.',
      'Open http://tendawifi.com or http://192.168.0.1.',
      'Enter admin as the password (or leave blank if prompted on first boot).'
    ]
  },
  {
    name: 'Linksys',
    slug: 'linksys',
    defaultIp: '192.168.1.1 / myrouter.local',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup instructions for Linksys Velop, Hydra, and MR series routers.',
    models: [
      { model: 'Velop WHW0301 / MX4200 (Mesh)', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { model: 'Hydra Pro 6 / MR7350', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { model: 'WRT54G / WRT1900AC', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Linksys WiFi or LAN port.',
      'Visit http://192.168.1.1 or http://myrouter.local.',
      'Enter username: admin and password: admin.'
    ]
  }
];

export const ISPS: Isp[] = [
  {
    name: 'JioFiber',
    slug: 'jio',
    defaultIp: '192.168.29.1',
    defaultUser: 'admin',
    defaultPass: 'Jiocentrum',
    description: 'Reliance Jio JioFiber ONT gateway router configuration and default settings.',
    instructions: [
      'Connect to JioFiber WiFi network.',
      'Go to http://192.168.29.1 in your browser.',
      'Login with username: admin and password: Jiocentrum.',
      'Manage SSID, 2.4/5GHz band steering, and firewall.'
    ]
  },
  {
    name: 'Airtel Xstream Fiber',
    slug: 'airtel',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / airtel',
    description: 'Airtel Xstream Fiber Nokia / ZTE / Huawei ONT router configuration guide.',
    instructions: [
      'Connect to Airtel WiFi network.',
      'Open http://192.168.1.1.',
      'Enter username: admin and password: airtel or admin.',
      'Check optical power, bridge mode, and WiFi passwords.'
    ]
  },
  {
    name: 'BSNL FTTH Bharat Fiber',
    slug: 'bsnl',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    description: 'BSNL Bharat Fiber Syrotech, Netlink, and Digisol ONT router login and PPPoE setup.',
    instructions: [
      'Connect to your BSNL ONT router.',
      'Visit http://192.168.1.1 in your browser.',
      'Enter username: admin and password: admin or password.',
      'Configure WAN PPPoE username and password.'
    ]
  },
  {
    name: 'ACT Fibernet',
    slug: 'act-fibernet',
    defaultIp: '192.168.1.1 / 192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / act@123',
    description: 'ACT Fibernet TP-Link / ACT Home Gateway login instructions and portal setup.',
    instructions: [
      'Connect to ACT Fibernet WiFi.',
      'Visit http://192.168.1.1 or http://192.168.0.1.',
      'Enter username: admin and password: act@123 or admin.',
      'Authenticate with your ACT portal username/password.'
    ]
  },
  {
    name: 'Tata Play Fiber',
    slug: 'tata-play-fiber',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Tata Play Fiber (Tata Sky Broadband) ONT gateway router default login and settings.',
    instructions: [
      'Connect to Tata Play Fiber WiFi.',
      'Open http://192.168.1.1.',
      'Login with username: admin and password: admin.'
    ]
  }
];

export async function getAllSlugs() {
  const ipSlugs = GATEWAY_IPS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'ip' as const, data: item }
  }));

  const brandSlugs = BRANDS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'brand' as const, data: item }
  }));

  const ispSlugs = ISPS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'isp' as const, data: item }
  }));

  return [...ipSlugs, ...brandSlugs, ...ispSlugs];
}
