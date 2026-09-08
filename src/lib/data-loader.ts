import type { GatewayIp, Brand, Isp, RouterModel } from './types';

export const GATEWAY_IPS: GatewayIp[] = [
  {
    ip: '192.168.1.1',
    slug: '192-168-1-1',
    title: '192.168.1.1 Router Admin Login & Setup Guide',
    description: 'Access your router configuration panel at 192.168.1.1. Step-by-step default login credentials, WiFi password change, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TP-Link', 'ASUS', 'Linksys', 'Huawei', 'ZTE', 'Nokia', 'Airtel', 'BSNL'],
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
    commonBrands: ['D-Link', 'Netgear', 'Tenda', 'TP-Link', 'Mercusys'],
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
    description: 'Default IP address for Technicolor, Thomson, BT Home Hub, Plusnet, and AT&T Fiber modems.',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number) / Access Code',
    commonBrands: ['Technicolor', 'Thomson', 'BT Home Hub', 'Plusnet', 'AT&T Fiber'],
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
  },
  {
    ip: '192.168.178.1',
    slug: '192-168-178-1',
    title: '192.168.178.1 FRITZ!Box Router Admin Login & Setup Guide',
    description: 'Access AVM FRITZ!Box router configuration dashboard at 192.168.178.1 (fritz.box). Default login passwords, mesh setup, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'Printed on sticker / (blank)',
    commonBrands: ['AVM FRITZ!Box'],
    steps: [
      'Connect your device to your FRITZ!Box Wi-Fi network or via LAN cable.',
      'Open your internet browser and type http://192.168.178.1 or http://fritz.box.',
      'Enter the FRITZ!Box admin password printed on the sticker underneath the device.',
      'Access the FRITZ!OS dashboard to configure Wi-Fi, Mesh networking, and DECT telephony.'
    ],
    faqs: [
      {
        question: 'How do I access my FRITZ!Box if 192.168.178.1 does not open?',
        answer: 'You can type http://fritz.box in your browser or use the emergency recovery IP 169.254.1.1.'
      },
      {
        question: 'Where is the default password for FRITZ!Box 192.168.178.1?',
        answer: 'Look at the sticker located on the base/underside of your FRITZ!Box router labeled "FRITZ!Box password".'
      }
    ]
  },
  {
    ip: '192.168.31.1',
    slug: '192-168-31-1',
    title: '192.168.31.1 Xiaomi & Redmi Router Admin Login Guide',
    description: 'Default gateway IP for Xiaomi Mi Router and Redmi WiFi gateways (miwifi.com). Setup instructions, default credentials, and MiWiFi guide.',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup',
    commonBrands: ['Xiaomi', 'Redmi'],
    steps: [
      'Connect to your Xiaomi / Redmi Wi-Fi SSID (e.g., Xiaomi_XXXX).',
      'Open your browser and navigate to http://192.168.31.1 or http://miwifi.com.',
      'Enter your administrator password configured during initial setup or use the Mi Home / MiWiFi app.',
      'Configure dual-band Wi-Fi 6 settings, Mesh interconnect, and QoS bandwidth control.'
    ],
    faqs: [
      {
        question: 'What is the default password for Xiaomi router 192.168.31.1?',
        answer: 'Xiaomi routers do not come with a default password. You are prompted to set an admin password during the initial setup wizard.'
      },
      {
        question: 'Can I manage 192.168.31.1 using a smartphone app?',
        answer: 'Yes, download the Mi Home or MiWiFi app on Android or iOS and connect to your router network to manage settings.'
      }
    ]
  },
  {
    ip: '192.168.8.1',
    slug: '192-168-8-1',
    title: '192.168.8.1 Huawei, GL.iNet & ZTE 4G/5G Router Login Guide',
    description: 'Login guide for 192.168.8.1 default IP address used by GL.iNet travel routers, Huawei 4G/5G CPE modems, and ZTE mobile hotspots.',
    defaultUser: 'admin / root',
    defaultPass: 'admin / (printed on label)',
    commonBrands: ['GL.iNet', 'Huawei', 'ZTE', 'Teltonika'],
    steps: [
      'Connect your laptop or mobile to the router Wi-Fi or LAN port.',
      'Open a web browser and go to http://192.168.8.1.',
      'Enter username (admin or root) and password (admin or printed on the back/battery compartment).',
      'Manage VPN client (WireGuard/OpenVPN), mobile broadband SIM APN, and Wi-Fi repeater settings.'
    ],
    faqs: [
      {
        question: 'What devices use 192.168.8.1 as default IP?',
        answer: 'GL.iNet travel routers (Beryl, Slate, Flint), Huawei 4G LTE CPE routers (B310, B535), and many portable ZTE LTE/5G Wi-Fi hotspots.'
      },
      {
        question: 'How do I log into GL.iNet at 192.168.8.1?',
        answer: 'On first startup at 192.168.8.1, choose your language and set a master admin password for the Admin Panel.'
      }
    ]
  },
  {
    ip: '192.168.100.1',
    slug: '192-168-100-1',
    title: '192.168.100.1 Huawei EchoLife & Arris Cable Modem Login Guide',
    description: 'Access ONT fiber modems and SURFboard cable modems at 192.168.100.1. Default telecomadmin credentials and diagnostic instructions.',
    defaultUser: 'telecomadmin / admin',
    defaultPass: 'admintelecom / password',
    commonBrands: ['Huawei', 'Arris', 'Motorola', 'ZTE'],
    steps: [
      'Connect your computer directly to the modem/ONT LAN 1 port via Ethernet.',
      'Open a browser and navigate to http://192.168.100.1.',
      'Enter username telecomadmin and password admintelecom (for Huawei GPON) or admin / password (for Arris/Motorola).',
      'Inspect downstream/upstream DOCSIS power levels or GPON optical Rx/Tx power.'
    ],
    faqs: [
      {
        question: 'Why is 192.168.100.1 used by cable and fiber modems?',
        answer: '192.168.100.1 is the standard diagnostic management IP for DOCSIS cable modems (Arris SURFboard, Motorola) and FTTH GPON ONTs (Huawei EchoLife).'
      },
      {
        question: 'What is the telecomadmin password for Huawei 192.168.100.1?',
        answer: 'Default username is "telecomadmin" and password is "admintelecom". For standard user access, use "root" and "admin".'
      }
    ]
  },
  {
    ip: '192.168.88.1',
    slug: '192-168-88-1',
    title: '192.168.88.1 MikroTik RouterOS & WinBox Login Guide',
    description: 'Default IP address for MikroTik RouterBOARD, hAP, and Cloud Core Routers. WebFig, WinBox connection, and default admin login instructions.',
    defaultUser: 'admin',
    defaultPass: '(blank) / printed on sticker',
    commonBrands: ['MikroTik'],
    steps: [
      'Connect your computer to Ether2, Ether3, or Wi-Fi (do not connect to Ether1 / WAN).',
      'Open a web browser to http://192.168.88.1 or download and open the MikroTik WinBox utility.',
      'Login with username "admin" and leave the password blank.',
      'Use WebFig or QuickSet to configure IP firewall, NAT, DHCP server, and wireless interfaces.'
    ],
    faqs: [
      {
        question: 'Why can\'t I connect to 192.168.88.1 on Ether1?',
        answer: 'In default RouterOS configuration, Ether1 is reserved as the WAN port with the firewall enabled. Always plug into Ether2 or LAN ports.'
      },
      {
        question: 'What is the default password for MikroTik 192.168.88.1?',
        answer: 'By default, the username is "admin" with NO password (blank). Newer models may have a unique password printed on the sticker.'
      }
    ]
  },
  {
    ip: '192.168.18.1',
    slug: '192-168-18-1',
    title: '192.168.18.1 Nokia GPON & FTTH Optical Router Login Guide',
    description: 'Default IP gateway for Nokia ONT fiber optical modems (G-2425G-A). Default AdminGPON login credentials and optical signal diagnostics.',
    defaultUser: 'AdminGPON / admin',
    defaultPass: 'ALC#FBRG@H / admin',
    commonBrands: ['Nokia', 'Alcatel-Lucent'],
    steps: [
      'Connect to the Nokia ONT Wi-Fi or connect via LAN port.',
      'Open your web browser and visit http://192.168.18.1.',
      'Enter Username: AdminGPON and Password: ALC#FBRG@H (or admin / admin).',
      'Check Optical Rx Power, WAN GPON status, and Wi-Fi 2.4/5GHz configuration.'
    ],
    faqs: [
      {
        question: 'What is the default AdminGPON password for Nokia 192.168.18.1?',
        answer: 'For Nokia G-2425G-A and Alcatel-Lucent ONTs, the superadmin username is "AdminGPON" and password is "ALC#FBRG@H".'
      },
      {
        question: 'How to fix 192.168.18.1 login timeout?',
        answer: 'Ensure your computer is assigned an IP in the 192.168.18.x range (e.g., 192.168.18.100) via DHCP.'
      }
    ]
  },
  {
    ip: '192.168.10.1',
    slug: '192-168-10-1',
    title: '192.168.10.1 TRENDnet & Wavlink Router Admin Login Guide',
    description: 'Default gateway IP for TRENDnet TEW series, Wavlink range extenders, and Repotec networking hardware. Default passwords and setup steps.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TRENDnet', 'Wavlink', 'Repotec'],
    steps: [
      'Connect your device to the TRENDnet or Wavlink wireless network.',
      'Open your web browser and type http://192.168.10.1.',
      'Enter username "admin" and password "admin" (or "password").',
      'Follow the setup wizard to configure wireless encryption and WAN connection type.'
    ],
    faqs: [
      {
        question: 'What is the default password for 192.168.10.1?',
        answer: 'For TRENDnet and Wavlink devices, both username and password default to "admin".'
      },
      {
        question: 'Can I access Wavlink range extender at 192.168.10.1?',
        answer: 'Yes, when in AP or Repeater configuration mode, Wavlink extenders default to 192.168.10.1 or wifi.wavlink.com.'
      }
    ]
  },
  {
    ip: '192.168.11.1',
    slug: '192-168-11-1',
    title: '192.168.11.1 Buffalo AirStation Router Admin Login Guide',
    description: 'Access Buffalo AirStation wireless router configuration at 192.168.11.1. Default credentials, AOSS wireless setup, and firmware management.',
    defaultUser: 'admin / root',
    defaultPass: 'password / (blank)',
    commonBrands: ['Buffalo AirStation'],
    steps: [
      'Connect to your Buffalo AirStation via Wi-Fi or Ethernet cable.',
      'Open your web browser and go to http://192.168.11.1.',
      'Enter Username: admin and Password: password (or Username: root and leave password blank on older units).',
      'Configure AOSS Wi-Fi security, guest network, and Internet WAN settings.'
    ],
    faqs: [
      {
        question: 'What is the default login for Buffalo 192.168.11.1?',
        answer: 'Newer Buffalo routers use admin/password, while classic AirStation models use username "root" with no password.'
      }
    ]
  },
  {
    ip: '10.0.1.1',
    slug: '10-0-1-1',
    title: '10.0.1.1 Apple AirPort Extreme & Time Capsule Setup Guide',
    description: 'Default gateway IP for Apple AirPort Extreme, Time Capsule, and Express base stations. AirPort Utility connection and wireless management.',
    defaultUser: 'admin',
    defaultPass: 'public',
    commonBrands: ['Apple'],
    steps: [
      'Connect your Apple Mac, iPhone, or Windows PC to the AirPort Wi-Fi network.',
      'Launch the AirPort Utility app (built-in on macOS/iOS or available for Windows).',
      'Select your AirPort base station graphic in the network topology map.',
      'Enter the base station password (default is "public" or custom) to configure Wi-Fi and Time Machine backup disks.'
    ],
    faqs: [
      {
        question: 'Can I open 10.0.1.1 in a regular web browser?',
        answer: 'Apple AirPort devices do not use a web interface; you must use the official Apple AirPort Utility application on macOS, iOS, or Windows.'
      },
      {
        question: 'What is the default base station password for Apple 10.0.1.1?',
        answer: 'The factory default base station password is "public".'
      }
    ]
  }
];

export const BRANDS: Brand[] = [
  {
    name: '3WARE',
    slug: '3ware',
    defaultIp: '192.168.1.1',
    defaultUser: 'Administrator',
    defaultPass: '3ware',
    description: 'Default login credentials and configurations for 3WARE 3DM network storage controller devices.',
    models: [
      { brand: '3WARE', model: '3DM', protocol: 'HTTP', ip: '192.168.1.1', username: 'Administrator', password: '3ware' },
      { brand: '3WARE', model: '3DM2', protocol: 'HTTPS', ip: '192.168.1.1', username: 'administrator', password: '3ware' }
    ],
    guide: [
      'Connect to your network management interface.',
      'Open http://192.168.1.1:8080 or https://localhost:888 in browser.',
      'Log in with username: Administrator and password: 3ware.'
    ]
  },
  {
    name: '3Com',
    slug: '3com',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login passwords and management portals for 3Com OfficeConnect and SuperStack routers.',
    models: [
      { brand: '3Com', model: 'OfficeConnect Wireless 11g', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: '3Com', model: 'SuperStack II', protocol: 'Telnet', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: '3Com', model: '3CRWER100-75', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect via LAN port to 3Com router.',
      'Navigate to http://192.168.1.1.',
      'Enter default username: admin and password: admin.'
    ]
  },
  {
    name: 'Actiontec',
    slug: 'actiontec',
    defaultIp: '192.168.0.1 / 192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default login credentials for Actiontec Verizon FiOS and DSL modem routers.',
    models: [
      { brand: 'Actiontec', model: 'MI424WR (Verizon FiOS)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Actiontec', model: 'C1000A / C2000A', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Actiontec', model: 'GT784WN', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect to Actiontec modem/router.',
      'Open http://192.168.1.1 or http://192.168.0.1 in browser.',
      'Log in with admin / password or check rear sticker.'
    ]
  },
  {
    name: 'Apple',
    slug: 'apple',
    defaultIp: '10.0.1.1',
    defaultUser: 'admin',
    defaultPass: 'public',
    description: 'AirPort Extreme, AirPort Express, and Time Capsule setup guides and default logins.',
    models: [
      { brand: 'Apple', model: 'AirPort Extreme 802.11ac', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' },
      { brand: 'Apple', model: 'AirPort Time Capsule (2TB/3TB)', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' },
      { brand: 'Apple', model: 'AirPort Express (2nd Gen)', protocol: 'AirPort App', ip: '10.0.1.1', username: 'admin', password: 'public' }
    ],
    guide: [
      'Open AirPort Utility on macOS, iOS, or Windows.',
      'Select your base station.',
      'Enter the base station password (default is "public" or custom).'
    ]
  },
  {
    name: 'Arris',
    slug: 'arris',
    defaultIp: '192.168.0.1 / 192.168.100.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials and setup guide for Arris SURFboard cable modems, DOCSIS gateways, and Touchstone telephony devices.',
    models: [
      { brand: 'Arris', model: 'SURFboard SBG8300 (Wi-Fi 6 DOCSIS 3.1)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard G36 (Wi-Fi 6 Multi-Gigabit)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard SBG10 (AC1600 DOCSIS 3.0)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'Touchstone TG3452 Telephony Gateway', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Arris', model: 'SURFboard SB8200 (Modem Diagnostic)', protocol: 'HTTP', ip: '192.168.100.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your computer to the Arris gateway via Ethernet cable or Wi-Fi.',
      'Open http://192.168.0.1 or http://192.168.100.1 in your web browser.',
      'Enter Username: admin and Password: password (or custom password on device sticker).',
      'Configure Wi-Fi network settings, parental controls, and firewall rules.'
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
      { brand: 'ASUS', model: 'ROG Rapture GT-BE98 (Wi-Fi 7 Quad-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-BE96U (Wi-Fi 7 Tri-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ROG Rapture GT-AX6000 / GT-AX11000 Pro', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ZenWiFi BQ16 Pro (Wi-Fi 7 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'ZenWiFi AX (XT8 / XD4)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AX86U / RT-AX88U Pro', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AX55 / RT-AX58U', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ASUS', model: 'RT-AC68U / RT-AC86U', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your ASUS WiFi network or Ethernet port.',
      'Navigate to http://router.asus.com or http://192.168.1.1 in your browser.',
      'Log in with username: admin and password: admin.',
      'Access ASUSWRT to manage AiProtection, QoS, and Wireless configuration.'
    ]
  },
  {
    name: 'AVM (FRITZ!Box)',
    slug: 'avm-fritzbox',
    defaultIp: '192.168.178.1 / fritz.box',
    defaultUser: 'admin',
    defaultPass: 'Printed on sticker',
    description: 'Default passwords, FRITZ!OS configuration, and setup guides for AVM FRITZ!Box DSL, Fiber, Cable, and LTE routers.',
    models: [
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 7590 AX (DSL / Wi-Fi 6)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 6690 Cable (DOCSIS 3.1)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 5590 Fiber (GPON/AON)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Box 4060 (Tri-Band Wi-Fi 6 Router)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'AVM (FRITZ!Box)', model: 'FRITZ!Repeater 6000 / 3000 AX (Mesh)', protocol: 'HTTPS', ip: '192.168.178.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to your FRITZ!Box Wi-Fi or plug into any LAN port.',
      'Open your web browser and visit http://fritz.box or http://192.168.178.1.',
      'Enter the FRITZ!Box password printed on the card or sticker beneath the router.',
      'Configure Internet connection parameters, DECT cordless phones, and Smart Home automation.'
    ]
  },
  {
    name: 'Belkin',
    slug: 'belkin',
    defaultIp: '192.168.2.1',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default passwords and setup steps for Belkin N150, N300, N600, and AC1200 routers.',
    models: [
      { brand: 'Belkin', model: 'N150 / N300 / N450', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' },
      { brand: 'Belkin', model: 'AC1200 / AC1800 Dual Band', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' },
      { brand: 'Belkin', model: 'Play Max / Surf N300', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect to Belkin WiFi network.',
      'Open http://192.168.2.1 in your browser.',
      'Leave password field blank and click Submit.'
    ]
  },
  {
    name: 'Buffalo',
    slug: 'buffalo',
    defaultIp: '192.168.11.1',
    defaultUser: 'admin / root',
    defaultPass: 'password / (blank)',
    description: 'Default logins and AirStation setup instructions for Buffalo WXR, WSR, and AirStation HighPower series routers.',
    models: [
      { brand: 'Buffalo', model: 'AirStation WXR-5950AX12 (Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' },
      { brand: 'Buffalo', model: 'AirStation WSR-3200AX4S', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' },
      { brand: 'Buffalo', model: 'AirStation WZR-HP-G450H', protocol: 'HTTP', ip: '192.168.11.1', username: 'root', password: '(blank)' },
      { brand: 'Buffalo', model: 'AirStation WHR-1166D', protocol: 'HTTP', ip: '192.168.11.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect to the Buffalo AirStation Wi-Fi or Ethernet LAN port.',
      'Open http://192.168.11.1 in your web browser.',
      'Log in with Username: admin and Password: password (or root with blank password).',
      'Use the AirStation web console to configure wireless SSIDs and WAN connection.'
    ]
  },
  {
    name: 'Cisco',
    slug: 'cisco',
    defaultIp: '192.168.1.1 / 10.0.0.1',
    defaultUser: 'cisco / admin',
    defaultPass: 'cisco / password',
    description: 'Default logins for Cisco Small Business, RV Series, and Catalyst routers.',
    models: [
      { brand: 'Cisco', model: 'RV160 / RV260 / RV340', protocol: 'HTTPS', ip: '192.168.1.1', username: 'cisco', password: 'cisco' },
      { brand: 'Cisco', model: 'DPC3941T (Xfinity Gateway)', protocol: 'HTTP', ip: '10.0.0.1', username: 'admin', password: 'password' },
      { brand: 'Cisco', model: 'WRVS4400N', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Cisco', model: 'Catalyst 2960 / 3750', protocol: 'Telnet/SSH', ip: '192.168.1.1', username: 'cisco', password: 'cisco' }
    ],
    guide: [
      'Connect via Ethernet cable to Cisco router LAN port 1.',
      'Open https://192.168.1.1 in browser.',
      'Login with username: cisco and password: cisco.'
    ]
  },
  {
    name: 'D-Link',
    slug: 'd-link',
    defaultIp: '192.168.0.1 / dlinkrouter.local',
    defaultUser: 'admin',
    defaultPass: '(blank) / admin',
    description: 'Find default logins and configuration instructions for D-Link DIR, AQUILA PRO AI, COVR, and DSL routers.',
    models: [
      { brand: 'D-Link', model: 'AQUILA PRO AI M30 / M60 (Wi-Fi 6 Mesh)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'D-Link', model: 'EAGLE PRO AI AX3200 (R32)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'D-Link', model: 'DIR-615 / DIR-825 / DIR-842', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank) / admin' },
      { brand: 'D-Link', model: 'EXO AX1500 / AX1800', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'D-Link', model: 'DSL-2750U / 2877AL', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'D-Link', model: 'COVR-1100 / COVR-2200 (Mesh)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect to your D-Link router network.',
      'Visit http://192.168.0.1 or http://dlinkrouter.local in your web browser.',
      'Enter admin as the username and leave the password empty (or enter admin).',
      'Configure Internet and WiFi settings via the setup wizard.'
    ]
  },
  {
    name: 'DrayTek',
    slug: 'draytek',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup for DrayTek Vigor 2862, 2927, and 2962 business routers.',
    models: [
      { brand: 'DrayTek', model: 'Vigor 2862 / 2865', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'DrayTek', model: 'Vigor 2927 / 2962 Dual-WAN', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'DrayTek', model: 'VigorAP 903 / 960C', protocol: 'HTTP', ip: '192.168.1.2', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to DrayTek LAN.',
      'Open https://192.168.1.1.',
      'Log in with admin / admin.'
    ]
  },
  {
    name: 'GL.iNet',
    slug: 'gl-inet',
    defaultIp: '192.168.8.1',
    defaultUser: 'root / admin',
    defaultPass: 'admin',
    description: 'Setup guides and default logins for GL.iNet OpenWrt travel routers, security gateways, and Wi-Fi 6 home routers.',
    models: [
      { brand: 'GL.iNet', model: 'Flint 2 (GL-MT6000 Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Beryl AX (GL-MT3000 Travel Router)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Slate AX (GL-AXT1800)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Brume 2 (GL-MT2500 Security Gateway)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'GL.iNet', model: 'Shadow (GL-AR300M16)', protocol: 'HTTP', ip: '192.168.8.1', username: 'root', password: 'admin' }
    ],
    guide: [
      'Connect to GL.iNet Wi-Fi (GL-XXXXX) or plug into LAN port.',
      'Navigate to http://192.168.8.1 in your browser.',
      'Select system language and configure the Admin Panel master password.',
      'Configure WireGuard / OpenVPN client, AdGuard Home, or Wi-Fi Repeater mode.'
    ]
  },
  {
    name: 'Huawei',
    slug: 'huawei',
    defaultIp: '192.168.1.1 / 192.168.100.1 / 192.168.8.1',
    defaultUser: 'admin / telecomadmin',
    defaultPass: 'admin / admintelecom',
    description: 'Default credentials for Huawei HG8145V5, EchoLife ONT, and 4G/5G CPE routers.',
    models: [
      { brand: 'Huawei', model: 'EchoLife HG8145V5 / HG8245H', protocol: 'HTTP', ip: '192.168.100.1', username: 'telecomadmin', password: 'admintelecom' },
      { brand: 'Huawei', model: 'WiFi AX3 / AX3 Pro', protocol: 'HTTP', ip: '192.168.3.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Huawei', model: '4G Router B310 / B315 / B535', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' },
      { brand: 'Huawei', model: '5G CPE Pro 2 (H122-373)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Huawei WiFi or LAN.',
      'Open http://192.168.100.1 or http://192.168.8.1.',
      'Log in with admin credentials.'
    ]
  },
  {
    name: 'Linksys',
    slug: 'linksys',
    defaultIp: '192.168.1.1 / myrouter.local',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup instructions for Linksys Velop Pro 7, Hydra, and MR series routers.',
    models: [
      { brand: 'Linksys', model: 'Velop Pro 7 (Wi-Fi 7 Mesh MBE7000)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Hydra Pro 6E (MR7500)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Velop WHW0301 / MX4200 (Mesh)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'Hydra Pro 6 / MR7350', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'WRT54G / WRT1900AC / WRT3200ACM', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Linksys', model: 'E1200 / E2500 / EA6900', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Linksys WiFi or LAN port.',
      'Visit http://192.168.1.1 or http://myrouter.local.',
      'Enter username: admin and password: admin.'
    ]
  },
  {
    name: 'Mercusys',
    slug: 'mercusys',
    defaultIp: '192.168.1.1 / 192.168.0.1 / mwlogin.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup guides for Mercusys Wi-Fi 6 routers, Halo Mesh systems, and wireless range extenders.',
    models: [
      { brand: 'Mercusys', model: 'MR80X (AX3000 Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Mercusys', model: 'MR50G (AC1900 Dual Band)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Mercusys', model: 'Halo H80X / H50G (Whole Home Mesh)', protocol: 'MERCUSYS App', ip: '192.168.68.1', username: 'admin', password: 'admin' },
      { brand: 'Mercusys', model: 'MW305R / MW325R', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your Mercusys Wi-Fi or Ethernet cable.',
      'Open http://mwlogin.net or http://192.168.1.1 in your browser.',
      'Create or enter your admin password to access the management interface.',
      'Configure wireless security and internet connection parameters.'
    ]
  },
  {
    name: 'MikroTik',
    slug: 'mikrotik',
    defaultIp: '192.168.88.1',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default credentials and WinBox connection guide for MikroTik RouterBOARD and hAP series.',
    models: [
      { brand: 'MikroTik', model: 'hAP ac2 / ac3 / ax2 / ax3', protocol: 'HTTP / WinBox', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'RouterBOARD RB750 / RB3011 / RB4011', protocol: 'WinBox / SSH', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'Cloud Core Router (CCR2004 / CCR2116)', protocol: 'WebFig / SSH', ip: '192.168.88.1', username: 'admin', password: '(blank)' },
      { brand: 'MikroTik', model: 'Chateau 5G / LTE12', protocol: 'HTTP / WinBox', ip: '192.168.88.1', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect PC to Ether2 (LAN) port.',
      'Open http://192.168.88.1 or connect via WinBox application.',
      'Login with username: admin, password: (blank).'
    ]
  },
  {
    name: 'Netgear',
    slug: 'netgear',
    defaultIp: '192.168.1.1 / routerlogin.net',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default passwords and setup instructions for Netgear Nighthawk Wi-Fi 7, Orbi Quad-Band Mesh, and RAX series routers.',
    models: [
      { brand: 'Netgear', model: 'Nighthawk RS700S (Wi-Fi 7 BE19000)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Orbi 970 Series (RBE973 Wi-Fi 7 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Nighthawk RAXE500 (Wi-Fi 6E Tri-Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Nighthawk R7000 / RAX40 / RAX80', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'Orbi RBK50 / RBK750 / RBK850', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'WNR2000 / JWNR2010', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Netgear', model: 'NightHawk Pro Gaming XR500 / XR1000', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your device to your Netgear router WiFi.',
      'Open http://routerlogin.net or http://192.168.1.1 in a browser.',
      'Enter username: admin and password: password.',
      'Use the Genie or Nighthawk dashboard to manage your network settings.'
    ]
  },
  {
    name: 'Netlink',
    slug: 'netlink',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH GPON/EPON configuration instructions for Netlink optical network terminals.',
    models: [
      { brand: 'Netlink', model: 'HG323RGW (GPON ONT + Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Netlink', model: 'V2801SG (1GE EPON/GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'stdONUi0i$' },
      { brand: 'Netlink', model: 'HG326x Dual Band Gigabit ONT', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Netlink ONT via LAN cable.',
      'Open http://192.168.1.1 in your browser.',
      'Log in with admin / admin (or stdONUi0i$ for superadmin).',
      'Configure PPPoE credentials and optical VLAN tags.'
    ]
  },
  {
    name: 'Nokia',
    slug: 'nokia',
    defaultIp: '192.168.1.1 / 192.168.18.1',
    defaultUser: 'AdminGPON / admin',
    defaultPass: 'ALC#FBRG@H / admin',
    description: 'Default passwords, GPON settings, and Wi-Fi configuration guides for Nokia optical ONT gateways and Nokia WiFi Beacons.',
    models: [
      { brand: 'Nokia', model: 'G-2425G-A (Dual Band GPON ONT)', protocol: 'HTTP', ip: '192.168.18.1', username: 'AdminGPON', password: 'ALC#FBRG@H' },
      { brand: 'Nokia', model: 'G-140W-ME (GPON Optical Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Nokia', model: 'Nokia WiFi Beacon 6 (Wi-Fi 6 Mesh)', protocol: 'Nokia WiFi App', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Nokia', model: 'Nokia WiFi Beacon 1 / Beacon 2', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to Nokia ONT Wi-Fi or plug into LAN 1.',
      'Open http://192.168.18.1 or http://192.168.1.1 in browser.',
      'Enter Username: AdminGPON and Password: ALC#FBRG@H (or check provider sticker).',
      'Access optical status, port forwarding, and 2.4/5GHz Wi-Fi controls.'
    ]
  },
  {
    name: 'Sagemcom',
    slug: 'sagemcom',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / printed on sticker',
    description: 'Default passwords and gateway management for Sagemcom FAST series modems.',
    models: [
      { brand: 'Sagemcom', model: 'FAST 5260 / 5370', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Sagemcom', model: 'FAST 5655 / 5670 FTTH', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Sagemcom gateway.',
      'Open http://192.168.1.1 in browser.',
      'Login with credentials from the rear sticker.'
    ]
  },
  {
    name: 'Synology',
    slug: 'synology',
    defaultIp: '192.168.1.1 / router.synology.com',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Synology Router Manager (SRM) login instructions for RT2600ac, RT6600ax, and WRX560.',
    models: [
      { brand: 'Synology', model: 'RT6600ax / RT2600ac', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Synology', model: 'WRX560 (Mesh Router)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to Synology router network.',
      'Visit http://router.synology.com or http://192.168.1.1.',
      'Follow Synology SRM setup wizard.'
    ]
  },
  {
    name: 'Syrotech',
    slug: 'syrotech',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH GPON/EPON ONT setup instructions for Syrotech fiber optic routers.',
    models: [
      { brand: 'Syrotech', model: 'SY-GPON-1110-WDONT (Wi-Fi GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Syrotech', model: 'SY-GPON-2020-WADONT (Dual Band)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Syrotech', model: 'SY-ROUTER-1200 Gigabit Dual Band', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to Syrotech ONT via Ethernet cable.',
      'Visit http://192.168.1.1 in your web browser.',
      'Log in with Username: admin and Password: admin (or stdONUi0i$).',
      'Set up PPPoE Internet account, VLAN ID, and Wi-Fi security.'
    ]
  },
  {
    name: 'Technicolor',
    slug: 'technicolor',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number)',
    description: 'Default settings and login portals for Technicolor TG and DGA series gateway modems.',
    models: [
      { brand: 'Technicolor', model: 'TG588v v2 / TG589vn', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Technicolor', model: 'DGA0122 / DGA4130', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Technicolor gateway.',
      'Open http://192.168.1.254 in browser.',
      'Login with username: admin and password: admin.'
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
      { brand: 'Tenda', model: 'AC10 / AC19 / AC23', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Tenda', model: 'Nova MW3 / MW6 / MW12 (Mesh)', protocol: 'HTTP', ip: '192.168.5.1', username: 'admin', password: 'admin' },
      { brand: 'Tenda', model: 'Tenda F3 / F9', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: '(blank)' },
      { brand: 'Tenda', model: 'TX3 / TX9 Pro (WiFi 6)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to your Tenda router WiFi network.',
      'Open http://tendawifi.com or http://192.168.0.1.',
      'Enter admin as the password (or leave blank if prompted on first boot).'
    ]
  },
  {
    name: 'TP-Link',
    slug: 'tp-link',
    defaultIp: '192.168.1.1 / 192.168.0.1 / tplinkwifi.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Complete default login credentials and setup guides for TP-Link Archer Wi-Fi 7, Deco Mesh, and WR series routers.',
    models: [
      { brand: 'TP-Link', model: 'Archer BE800 / BE900 (Wi-Fi 7)', protocol: 'HTTPS', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Archer AXE75 / AXE95 (Wi-Fi 6E)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Deco XE75 / BE85 (Wi-Fi 6E/7 Mesh)', protocol: 'Tether App', ip: '192.168.68.1', username: 'TP-Link ID', password: 'Cloud Password' },
      { brand: 'TP-Link', model: 'Archer AX10 / AX20 / AX50 / AX73', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'TP-Link', model: 'Archer C6 / C7 / C80 / A6', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'TP-Link', model: 'TL-WR841N / TL-WR845N / TL-WR940N', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'TP-Link', model: 'Deco M4 / M5 / X20 / X50 (Mesh)', protocol: 'Tether App', ip: '192.168.68.1', username: 'TP-Link ID', password: 'Cloud Password' },
      { brand: 'TP-Link', model: 'TD-W8961N / TD-W9970 (ADSL/VDSL)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to the TP-Link WiFi or plug in via LAN cable.',
      'Open a browser and navigate to http://tplinkwifi.net or http://192.168.0.1.',
      'Enter the default username and password (admin / admin).',
      'Go to Wireless -> Wireless Settings to configure your SSID and WPA2/WPA3 password.'
    ]
  },
  {
    name: 'TRENDnet',
    slug: 'trendnet',
    defaultIp: '192.168.10.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins, setup instructions, and firmware management for TRENDnet TEW wireless AC and N routers.',
    models: [
      { brand: 'TRENDnet', model: 'TEW-827DRU (AC2600 StreamBoost)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'TRENDnet', model: 'TEW-831DR (AC1200 Dual Band)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'TRENDnet', model: 'TEW-731BR (N300 Wireless Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to TRENDnet router Wi-Fi or LAN port.',
      'Open http://192.168.10.1 in your browser.',
      'Enter Username: admin and Password: admin.',
      'Complete the setup wizard for internet and wireless security.'
    ]
  },
  {
    name: 'Ubiquiti',
    slug: 'ubiquiti',
    defaultIp: '192.168.1.1',
    defaultUser: 'ubnt / root',
    defaultPass: 'ubnt',
    description: 'Default credentials for UniFi Dream Machine, EdgeRouter, and airMAX devices.',
    models: [
      { brand: 'Ubiquiti', model: 'UniFi Dream Machine (UDM / UDM Pro / SE)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root / ui.com account', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'UniFi Express (UX Cloud Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root / ui.com account', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'EdgeRouter X / Lite / 4 / 6P', protocol: 'HTTPS', ip: '192.168.1.1', username: 'ubnt', password: 'ubnt' },
      { brand: 'Ubiquiti', model: 'NanoStation / LiteBeam (airMAX)', protocol: 'HTTPS', ip: '192.168.1.20', username: 'ubnt', password: 'ubnt' }
    ],
    guide: [
      'Connect PC to eth0 or eth1.',
      'Navigate to https://192.168.1.1 in your browser.',
      'Log in with username: ubnt and password: ubnt.'
    ]
  },
  {
    name: 'Xiaomi',
    slug: 'xiaomi',
    defaultIp: '192.168.31.1 / miwifi.com',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup',
    description: 'Default IP logins, MiWiFi dashboard setup, and firmware configuration for Xiaomi and Redmi AX-series routers.',
    models: [
      { brand: 'Xiaomi', model: 'Mi AIoT Router AX3600 (Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Xiaomi Router AX6000', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Xiaomi Router AX3000 / AX3200', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Redmi Gaming Router AX5400', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Xiaomi', model: 'Mi Router 4A Gigabit Edition', protocol: 'HTTP', ip: '192.168.31.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to the Xiaomi / Redmi default Wi-Fi network.',
      'Open http://miwifi.com or http://192.168.31.1 in your browser.',
      'Follow the on-screen wizard to create an admin password and configure Wi-Fi SSID.',
      'Use the MiWiFi or Mi Home mobile app for remote management and Mesh networking.'
    ]
  },
  {
    name: 'ZTE',
    slug: 'zte',
    defaultIp: '192.168.1.1 / 192.168.0.1 / 192.168.8.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default login credentials for ZTE ZXHN ONT and 4G/5G wireless routers.',
    models: [
      { brand: 'ZTE', model: 'ZXHN F660 / F670 / F680 FTTH', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'ZTE', model: 'MF283 / MF286 (4G LTE Router)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'ZTE', model: 'MU5001 / MC801A (5G Indoor CPE)', protocol: 'HTTP', ip: '192.168.8.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to ZTE router network.',
      'Visit http://192.168.1.1 in browser.',
      'Log in with username: admin and password: admin.'
    ]
  },
  {
    name: 'ZyXEL',
    slug: 'zyxel',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: '1234 / admin',
    description: 'Default logins for ZyXEL prestige, Armor, and USG security routers.',
    models: [
      { brand: 'ZyXEL', model: 'Armor G1 / G5 (AX6000)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' },
      { brand: 'ZyXEL', model: 'VMG3925 / VMG8825', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' },
      { brand: 'ZyXEL', model: 'USG FLEX 100 / 200 (Firewall)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: '1234' }
    ],
    guide: [
      'Connect to ZyXEL router LAN port.',
      'Open http://192.168.1.1 in your browser.',
      'Enter username: admin and password: 1234.'
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
  },
  {
    name: 'AT&T Fiber',
    slug: 'att-fiber',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Access Code on Sticker',
    description: 'AT&T Fiber BGW210 / BGW320 / NVG589 gateway login, IP Passthrough, and Wi-Fi configuration.',
    instructions: [
      'Connect to your AT&T Wi-Fi or plug into an Ethernet port.',
      'Navigate to http://192.168.1.254 in your web browser.',
      'When prompted for modifications, enter the Device Access Code printed on the gateway sticker.',
      'Configure IP Passthrough, NAT gaming rules, or Wi-Fi security keys.'
    ]
  },
  {
    name: 'Xfinity Comcast',
    slug: 'xfinity',
    defaultIp: '10.0.0.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Xfinity xFi Wireless Gateway (XB6, XB7, XB8) admin dashboard login and bridge mode guide.',
    instructions: [
      'Connect to your Xfinity home wireless network.',
      'Open http://10.0.0.1 in any desktop or mobile browser.',
      'Log in with Username: admin and Password: password (or custom password set during initial boot).',
      'Manage connected devices, parental controls, and MoCA coax settings.'
    ]
  },
  {
    name: 'Verizon Fios',
    slug: 'verizon-fios',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'Printed on router sticker',
    description: 'Verizon Fios CR1000A / G3100 / G1100 Quantum Gateway login and optical ONT settings.',
    instructions: [
      'Connect your device to Verizon Fios Wi-Fi.',
      'Open http://192.168.1.1 or http://myfiosgateway.com.',
      'Enter the admin password printed on the router label.',
      'Adjust SON (Self-Organizing Network) Wi-Fi steering and port forwarding.'
    ]
  },
  {
    name: 'Spectrum Internet',
    slug: 'spectrum',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    description: 'Charter Spectrum WiFi 6 Router (SAX1V1K / SAC2V1K) administration and My Spectrum app guide.',
    instructions: [
      'Connect to your Spectrum Wi-Fi network.',
      'Open http://192.168.1.1 in your web browser.',
      'Enter admin credentials or manage advanced settings through the My Spectrum mobile app.',
      'Configure DNS servers, UPnP, and guest networks.'
    ]
  },
  {
    name: 'Virgin Media UK',
    slug: 'virgin-media',
    defaultIp: '192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'Settings password on hub base',
    description: 'Virgin Media UK Superhub 3, Hub 4, and Hub 5 fiber gateway login and modem mode guide.',
    instructions: [
      'Connect to Virgin Media Wi-Fi or LAN cable.',
      'Navigate to http://192.168.0.1 in your browser.',
      'Enter the Settings Password printed on the sticker underneath the Hub base.',
      'Enable Modem Mode if using a third-party mesh router system.'
    ]
  },
  {
    name: 'BT Broadband UK',
    slug: 'bt-broadband',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'Admin password on hub card',
    description: 'BT Smart Hub 2 and Home Hub 5/6 fiber broadband router login and Smart Setup configuration.',
    instructions: [
      'Connect to your BT Smart Hub Wi-Fi.',
      'Open http://192.168.1.254 or http://bthomehub.home.',
      'Enter the Admin Password found on the pull-out plastic card on the back of the Smart Hub.',
      'Disable Smart Setup if connecting non-standard smart home devices.'
    ]
  }
];

export async function getAllSlugs() {
  const ipSlugs = GATEWAY_IPS
    .filter(item => item.slug !== '192-168-1-1')
    .map(item => ({
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

// Helpers for interlinking
export function getBrandSlug(name?: string | null): string | null {
  if (!name) return null;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = BRANDS.find(b => 
    b.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
    b.slug.replace(/[^a-z0-9]/g, '') === normalized
  );
  return found ? found.slug : null;
}

export function getIpSlug(ip?: string | null): string | null {
  if (!ip) return null;
  const clean = ip.trim();
  const found = GATEWAY_IPS.find(g => g.ip === clean);
  if (found) {
    return found.ip === '192.168.1.1' ? '' : found.slug;
  }
  return null;
}

export function getIspSlug(name?: string | null): string | null {
  if (!name) return null;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = ISPS.find(i => 
    i.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized ||
    i.slug.replace(/[^a-z0-9]/g, '') === normalized
  );
  return found ? found.slug : null;
}

export function getModelsForIp(targetIp: string) {
  if (!targetIp) return [];
  const matches: Array<{ brand: string; brandSlug: string; model: string; ip: string; username: string; password: string; protocol: string }> = [];
  BRANDS.forEach(b => {
    b.models.forEach(m => {
      if (m.ip === targetIp) {
        matches.push({
          brand: b.name,
          brandSlug: b.slug,
          model: m.model,
          ip: m.ip || targetIp,
          username: m.username,
          password: m.password,
          protocol: m.protocol || 'HTTP'
        });
      }
    });
  });
  return matches;
}
