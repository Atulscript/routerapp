import type { GatewayIp, Brand, Isp, RouterModel } from './types';

export const GATEWAY_IPS: GatewayIp[] = [
  {
    ip: '192.168.1.1',
    slug: '192-168-1-1',
    title: '192.168.1.1 Router Admin Login & Setup Guide',
    description: 'Access your router configuration panel at 192.168.1.1. Step-by-step default login credentials, WiFi password change, and troubleshooting.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TP-Link', 'ASUS', 'Linksys', 'Huawei', 'ZTE', 'Nokia', 'Airtel', 'BSNL', 'Keenetic', 'Digisol', 'Palo Alto', 'Juniper'],
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
    commonBrands: ['D-Link', 'Netgear', 'Tenda', 'TP-Link', 'Mercusys', 'Motorola', 'Totolink', 'Hitron', 'Humax'],
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
    commonBrands: ['Belkin', 'SMC', 'Siemens', 'Philips', 'Digisol'],
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
    description: 'Default IP address for Technicolor, Thomson, BT Home Hub, Plusnet, Billion, Vantiva, and AT&T Fiber modems.',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number) / Access Code',
    commonBrands: ['Technicolor', 'Thomson', 'BT Home Hub', 'Plusnet', 'AT&T Fiber', 'Billion', 'Vantiva'],
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
    commonBrands: ['Nokia', 'Alcatel-Lucent', 'Keenetic'],
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
    title: '192.168.10.1 TRENDnet, Cudy & Wavlink Router Admin Login Guide',
    description: 'Default gateway IP for TRENDnet TEW series, Cudy Wi-Fi routers, Wavlink range extenders, and Repotec hardware. Default passwords and setup steps.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['TRENDnet', 'Cudy', 'Wavlink', 'Repotec'],
    steps: [
      'Connect your device to the TRENDnet or Cudy wireless network.',
      'Open your web browser and type http://192.168.10.1 or http://cudy.net.',
      'Enter username "admin" and password "admin" (or "password").',
      'Follow the setup wizard to configure wireless encryption and WAN connection type.'
    ],
    faqs: [
      {
        question: 'What is the default password for 192.168.10.1?',
        answer: 'For TRENDnet, Cudy, and Wavlink devices, both username and password default to "admin".'
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
    title: '10.0.1.1 Apple AirPort & WatchGuard Admin Login Guide',
    description: 'Default gateway IP for Apple AirPort Extreme, Time Capsule, and WatchGuard Firebox security appliances.',
    defaultUser: 'admin',
    defaultPass: 'public / readwrite',
    commonBrands: ['Apple', 'WatchGuard'],
    steps: [
      'Connect your PC or Mac to the AirPort or WatchGuard Interface 1.',
      'For WatchGuard, open https://10.0.1.1:8080 in your web browser.',
      'Enter Username: admin and Password: readwrite (or use Apple AirPort Utility for AirPort devices).',
      'Configure security policies and network routing.'
    ],
    faqs: [
      {
        question: 'How do I access WatchGuard Firebox at 10.0.1.1:8080?',
        answer: 'Navigate to https://10.0.1.1:8080 and accept the SSL certificate, then log in with admin / readwrite.'
      }
    ]
  },
  {
    ip: '192.168.86.1',
    slug: '192-168-86-1',
    title: '192.168.86.1 Google Nest WiFi & Google WiFi Router Setup Guide',
    description: 'Default gateway subnet for Google Nest WiFi Pro (Wi-Fi 6E), Google Nest WiFi router, and Google WiFi points. Configuration instructions via Google Home.',
    defaultUser: 'Google Home App',
    defaultPass: 'Google Account Authentication',
    commonBrands: ['Google (Nest WiFi)'],
    steps: [
      'Connect your smartphone or tablet to your Google Nest WiFi / Google WiFi network.',
      'Open the Google Home app on iOS or Android.',
      'Tap on the Wi-Fi icon -> Network settings to configure DNS, port forwarding, and Family Wi-Fi pause.',
      'Access status diagnostics and speed tests directly in the Google Home app.'
    ],
    faqs: [
      {
        question: 'Can I log into 192.168.86.1 using a browser?',
        answer: 'Google Nest WiFi devices show a status page at http://192.168.86.1/api/v1/status in a browser, but all configuration is performed inside the Google Home mobile app.'
      }
    ]
  },
  {
    ip: '192.168.4.1',
    slug: '192-168-4-1',
    title: '192.168.4.1 Amazon eero Mesh Router Setup & Login Guide',
    description: 'Default gateway IP address for Amazon eero Max 7 (Wi-Fi 7), eero Pro 6E, eero 6+, and eero mesh networking systems. eero app setup guide.',
    defaultUser: 'eero App',
    defaultPass: 'Amazon / eero Account',
    commonBrands: ['Amazon (eero)'],
    steps: [
      'Connect your smartphone to your eero mesh Wi-Fi network.',
      'Open the official eero app on iOS or Android.',
      'Log in with your Amazon account or registered mobile number OTP.',
      'Manage Guest Network, eero Plus security, UPnP, and Bandwidth reservations.'
    ],
    faqs: [
      {
        question: 'Does eero have a browser web admin interface at 192.168.4.1?',
        answer: 'eero routers are strictly cloud-managed via the official eero mobile application for iOS and Android.'
      }
    ]
  },
  {
    ip: '192.168.110.1',
    slug: '192-168-110-1',
    title: '192.168.110.1 Ruijie Reyee Cloud Router Admin Login Guide',
    description: 'Default IP address for Ruijie Reyee RG-EW series Wi-Fi 6 routers, Reyee Mesh, and cloud gateways. Step-by-step ReyeeOS login guide.',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    commonBrands: ['Ruijie (Reyee)'],
    steps: [
      'Connect your computer or phone to Reyee Wi-Fi (Reyee-sXXXX) or LAN port.',
      'Open your web browser and navigate to http://192.168.110.1.',
      'Create an administrator password or login with username: admin and password: admin.',
      'Configure Reyee Mesh, Reyee Cloud remote management, and Smart Flow control.'
    ],
    faqs: [
      {
        question: 'What is the default IP address for Ruijie Reyee routers?',
        answer: 'Ruijie Reyee home and commercial routers use 192.168.110.1 as their default factory management IP.'
      }
    ]
  },
  {
    ip: '192.168.1.99',
    slug: '192-168-1-99',
    title: '192.168.1.99 Fortinet FortiGate Firewall Admin Login Guide',
    description: 'Default internal management IP address for Fortinet FortiGate 40F, 60F, 70F, and 100F Next-Generation Firewalls and security appliances.',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    commonBrands: ['Fortinet (FortiGate)'],
    steps: [
      'Connect your PC Ethernet cable to FortiGate Port 1 / Internal MGMT interface.',
      'Assign your PC a static IP address: 192.168.1.100 (Subnet mask: 255.255.255.0).',
      'Open your browser and navigate to https://192.168.1.99.',
      'Log in with Username: admin and leave the Password field blank, then set a strong new password.'
    ],
    faqs: [
      {
        question: 'Why must I set a static IP to connect to 192.168.1.99?',
        answer: 'By default, FortiGate firewalls do not run a DHCP server on management ports. You must configure static IP 192.168.1.100 on your PC.'
      }
    ]
  },
  {
    ip: '192.168.168.168',
    slug: '192-168-168-168',
    title: '192.168.168.168 SonicWall Firewall Router Admin Login Guide',
    description: 'Default LAN management IP address for SonicWall TZ270, TZ370, TZ470, and NSA series Next-Gen firewalls. SonicOS setup guide.',
    defaultUser: 'admin',
    defaultPass: 'password',
    commonBrands: ['SonicWall'],
    steps: [
      'Connect your computer to the SonicWall X0 (LAN) port using an Ethernet cable.',
      'Configure your PC network adapter to static IP 192.168.168.200 (Subnet: 255.255.255.0).',
      'Open your web browser and go to https://192.168.168.168.',
      'Enter Username: admin and Password: password to access the SonicOS dashboard.'
    ],
    faqs: [
      {
        question: 'What is the default login for SonicWall 192.168.168.168?',
        answer: 'Username: admin, Password: password.'
      }
    ]
  },
  {
    ip: '172.16.16.16',
    slug: '172-16-16-16',
    title: '172.16.16.16 Sophos Firewall WebAdmin Login & Setup Guide',
    description: 'Default management IP and port 4444 portal for Sophos XGS 87, 107, 116, and Cyberoam security gateways. Sophos Firewall OS guide.',
    defaultUser: 'admin',
    defaultPass: 'admin',
    commonBrands: ['Sophos'],
    steps: [
      'Connect your PC Ethernet cable to Sophos Port 1 (LAN).',
      'Set your PC static IP address to 172.16.16.100 (Subnet: 255.255.255.0).',
      'Open your browser and navigate to https://172.16.16.16:4444.',
      'Log in with Username: admin and Password: admin, then accept the EULA and set a master administrator password.'
    ],
    faqs: [
      {
        question: 'Why do I need to type :4444 after 172.16.16.16?',
        answer: 'Sophos WebAdmin uses HTTPS on custom TCP port 4444 (https://172.16.16.16:4444) for secure administrator access.'
      }
    ]
  },
  {
    ip: '192.168.68.1',
    slug: '192-168-68-1',
    title: '192.168.68.1 TP-Link Deco & Mercusys Halo Mesh Login Guide',
    description: 'Default gateway IP address for TP-Link Deco (BE85, XE75, X50, M4) and Mercusys Halo whole-home mesh Wi-Fi systems.',
    defaultUser: 'admin / TP-Link ID',
    defaultPass: 'Cloud Password / (blank)',
    commonBrands: ['TP-Link', 'Mercusys'],
    steps: [
      'Connect to your TP-Link Deco or Mercusys Halo mesh Wi-Fi network.',
      'Open your web browser and navigate to http://192.168.68.1 or http://tplinkdeco.net.',
      'Enter your TP-Link ID password or Deco admin password.',
      'View connected clients, mesh signal backhaul quality, and firmware versions.'
    ],
    faqs: [
      {
        question: 'Can I access TP-Link Deco settings via web browser at 192.168.68.1?',
        answer: 'Yes! The Deco web interface at 192.168.68.1 allows checking status, firmware updates, and logs.'
      }
    ]
  },
  {
    ip: '192.168.5.1',
    slug: '192-168-5-1',
    title: '192.168.5.1 Tenda Nova Mesh Router Admin Login Guide',
    description: 'Default gateway IP address for Tenda Nova MW3, MW6, MW12, and MX series whole-home Wi-Fi mesh systems. Tenda WiFi app setup.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Tenda'],
    steps: [
      'Connect your phone or laptop to the Nova Mesh Wi-Fi (Nova_XXXXX).',
      'Open your browser and type http://192.168.5.1 or open the Tenda WiFi app.',
      'Enter your admin login password or complete the initial onboarding wizard.',
      'Configure seamless mesh roaming, parental controls, and guest access.'
    ],
    faqs: [
      {
        question: 'Why does Tenda Nova use 192.168.5.1 instead of 192.168.0.1?',
        answer: 'Tenda Nova mesh units use 192.168.5.1 to avoid IP address conflicts with upstream ISP modems running on 192.168.0.1 or 192.168.1.1.'
      }
    ]
  },
  {
    ip: '192.168.80.1',
    slug: '192-168-80-1',
    title: '192.168.80.1 Grandstream GWN Router Admin Login Guide',
    description: 'Default IP address for Grandstream GWN7062 Wi-Fi 6 routers, GWN7052 Gigabit VPN routers, and GWN enterprise access points.',
    defaultUser: 'admin',
    defaultPass: 'admin / (printed on sticker)',
    commonBrands: ['Grandstream'],
    steps: [
      'Connect your PC to the Grandstream GWN router LAN port or Wi-Fi.',
      'Open your web browser and go to https://192.168.80.1 or https://gwn.local.',
      'Enter Username: admin and Password printed on the device rear label.',
      'Access the GWN management console to configure Multi-WAN failover, VPN tunnels, and captive portals.'
    ],
    faqs: [
      {
        question: 'Where is the default password for Grandstream 192.168.80.1?',
        answer: 'Look at the barcode label on the underside of your Grandstream GWN router for the unique factory admin password.'
      }
    ]
  },
  {
    ip: '192.168.12.1',
    slug: '192-168-12-1',
    title: '192.168.12.1 T-Mobile 5G Home Internet Gateway Login Guide',
    description: 'Default admin IP for T-Mobile 5G Home Internet Gateways (Arcadyan KVD21, Sagemcom Fast 5688W, Nokia 5G21). Cellular signal stats and setup.',
    defaultUser: 'admin',
    defaultPass: 'Printed on gateway sticker',
    commonBrands: ['T-Mobile', 'Arcadyan', 'Sagemcom', 'Nokia'],
    steps: [
      'Connect to your T-Mobile 5G Wi-Fi network.',
      'Open your browser and navigate to http://192.168.12.1.',
      'Enter the administrator password printed on the sticker underneath the gateway.',
      'Check 5G cellular signal metrics (RSRP, RSRQ, SINR) and connected devices.'
    ],
    faqs: [
      {
        question: 'What is the default login for T-Mobile 192.168.12.1?',
        answer: 'Username: admin, Password: (look at the laser-etched label on the underside/back of the gateway).'
      }
    ]
  },
  {
    ip: '192.168.3.1',
    slug: '192-168-3-1',
    title: '192.168.3.1 Huawei HiLink & Sub-Router Admin Login Guide',
    description: 'Default gateway IP for Huawei WiFi AX3, HiLink mesh sub-routers, and secondary wireless access points.',
    defaultUser: 'admin',
    defaultPass: 'Set during initial setup / admin',
    commonBrands: ['Huawei'],
    steps: [
      'Connect to your Huawei Wi-Fi network.',
      'Open http://192.168.3.1 in your web browser.',
      'Enter your router login password configured during the setup wizard.',
      'Configure HarmonyOS Mesh+ interconnect and Wi-Fi 6 Plus parameters.'
    ],
    faqs: [
      {
        question: 'What is the default password for Huawei 192.168.3.1?',
        answer: 'Huawei prompts you to choose an admin password during first-time Wi-Fi setup.'
      }
    ]
  },
  {
    ip: '192.168.254.254',
    slug: '192-168-254-254',
    title: '192.168.254.254 Siemens Gigaset & Netopia Modem Login Guide',
    description: 'Default gateway IP address for Siemens Gigaset, Motorola Netopia Cayman, and SpeedStream DSL routers.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Siemens', 'Netopia', 'SpeedStream'],
    steps: [
      'Connect your PC to the modem LAN port with an Ethernet cable.',
      'Open your browser and type http://192.168.254.254.',
      'Enter default username: admin and password: admin (or leave blank).',
      'Configure VPI/VCI parameters and PPPoE authentication.'
    ],
    faqs: [
      {
        question: 'What is the default login for 192.168.254.254?',
        answer: 'Most Siemens and Netopia routers default to username "admin" and password "admin".'
      }
    ]
  },
  {
    ip: '192.168.123.254',
    slug: '192-168-123-254',
    title: '192.168.123.254 Sitecom & LevelOne Router Admin Login Guide',
    description: 'Default IP address for Sitecom broadband routers, LevelOne networking hardware, and IP sharing gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['Sitecom', 'LevelOne'],
    steps: [
      'Connect to your Sitecom or LevelOne router network.',
      'Open http://192.168.123.254 in your web browser.',
      'Enter Username: admin and Password: admin (or password).',
      'Configure LAN/WAN routing and wireless encryption.'
    ],
    faqs: [
      {
        question: 'What is the default password for Sitecom 192.168.123.254?',
        answer: 'Username: admin, Password: admin (or check the security card inside the product packaging).'
      }
    ]
  },
  {
    ip: '192.168.15.1',
    slug: '192-168-15-1',
    title: '192.168.15.1 Linksys & Cisco VoIP ATA Router Login Guide',
    description: 'Default management IP for Linksys SPA2102, PAP2T, and Cisco VoIP telephone adapter gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / (blank)',
    commonBrands: ['Linksys', 'Cisco', 'Vonage'],
    steps: [
      'Connect your computer to the Ethernet LAN port of the VoIP adapter.',
      'Open http://192.168.15.1 in your browser.',
      'Click "Admin Login" and "Advanced" to access SIP voice lines and codec settings.'
    ],
    faqs: [
      {
        question: 'What is the default login for Linksys VoIP ATA at 192.168.15.1?',
        answer: 'Username: admin, Password: (blank / no password required).'
      }
    ]
  },
  {
    ip: '192.168.254.1',
    slug: '192-168-254-1',
    title: '192.168.254.1 CenturyLink & Westell DSL Modem Login Guide',
    description: 'Default IP address for CenturyLink Zyxel/Actiontec modems and Westell ProLine broadband gateways.',
    defaultUser: 'admin',
    defaultPass: 'admin / password',
    commonBrands: ['CenturyLink', 'Westell'],
    steps: [
      'Connect to your CenturyLink or Westell modem via Ethernet.',
      'Open http://192.168.254.1 in your web browser.',
      'Enter Username: admin and Password found on the modem sticker.',
      'Configure Transparent Bridging or PPPoE credentials.'
    ],
    faqs: [
      {
        question: 'What is the default password for CenturyLink 192.168.254.1?',
        answer: 'The Admin Username is "admin" and Admin Password is printed on the modem label.'
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
    name: 'Adtran',
    slug: 'adtran',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials, AOS configuration, and setup guides for Adtran Total Access, NetVanta, and SDX optical ONTs.',
    models: [
      { brand: 'Adtran', model: 'SDX 620 (10G XGS-PON ONT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Adtran', model: 'Total Access 908e IP Business Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' },
      { brand: 'Adtran', model: 'NetVanta 3140 Gigabit Router', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your computer to the Adtran ETH port.',
      'Open https://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: password.',
      'Use the AOS GUI to configure voice trunks and routing.'
    ]
  },
  {
    name: 'Alcatel-Lucent',
    slug: 'alcatel-lucent',
    defaultIp: '192.168.1.1 / 192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / alcatel',
    description: 'Default logins and configurations for Alcatel-Lucent OmniAccess Stellar, OmniSwitch, and CellPipe routers.',
    models: [
      { brand: 'Alcatel-Lucent', model: 'OmniAccess Stellar AP1201 / AP1301', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Alcatel-Lucent', model: 'OmniSwitch 6350 Enterprise Switch/Router', protocol: 'SSH / HTTPS', ip: '192.168.1.1', username: 'admin', password: 'switch' },
      { brand: 'Alcatel-Lucent', model: 'CellPipe 7130 VDSL2 Gateway', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'alcatel' }
    ],
    guide: [
      'Connect your PC to the LAN interface.',
      'Open http://192.168.1.1 or http://192.168.1.254 in your browser.',
      'Enter default credentials to manage enterprise routing.'
    ]
  },
  {
    name: 'Amazon (eero)',
    slug: 'eero',
    defaultIp: '192.168.4.1',
    defaultUser: 'eero App',
    defaultPass: 'Amazon Account / OTP',
    description: 'Amazon eero Max 7 Wi-Fi 7, eero Pro 6E, and eero 6+ mesh Wi-Fi system setup and configuration guide.',
    models: [
      { brand: 'Amazon (eero)', model: 'eero Max 7 (Tri-Band Wi-Fi 7 Mesh)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero Pro 6E (Tri-Band Wi-Fi 6E)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero 6+ (Gigabit Dual-Band Wi-Fi 6)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero Pro (AC2200 Tri-Band)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' },
      { brand: 'Amazon (eero)', model: 'eero PoE 6 (Power over Ethernet AP)', protocol: 'eero App', ip: '192.168.4.1', username: 'eero App', password: 'Amazon Account' }
    ],
    guide: [
      'Download and install the official eero app from iOS App Store or Google Play Store.',
      'Connect the gateway eero node to your modem via Ethernet and plug into power.',
      'Log in with your Amazon account and follow the in-app pairing instructions.',
      'Place additional mesh beacons around your home for seamless TrueMesh coverage.'
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
    name: 'Askey',
    slug: 'askey',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin / 1234',
    defaultPass: '1234 / Printed on sticker',
    description: 'Default passwords and setup guides for Askey Home Gateway Units (HGU Fibra) and 5G cellular CPE gateways.',
    models: [
      { brand: 'Askey', model: 'RTF8115VW (Movistar/Telefónica HGU)', protocol: 'HTTP', ip: '192.168.1.1', username: '1234', password: 'Printed on sticker' },
      { brand: 'Askey', model: 'Askey 5G NR ODU/IDU Sub-6 Gateway', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Askey', model: 'AP5100 (Wi-Fi 6 Mesh Access Point)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Askey Wi-Fi or LAN port.',
      'Open http://192.168.1.1 in your web browser.',
      'Enter credentials printed on the base barcode label.'
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
    name: 'Billion',
    slug: 'billion',
    defaultIp: '192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and setup instructions for Billion BiPAC Triple-WAN, VDSL2, and fibre broadband gateways.',
    models: [
      { brand: 'Billion', model: 'BiPAC 8800NL (VDSL2/ADSL2+ Triple-WAN)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Billion', model: 'BiPAC 7800DXL (Wireless Gigabit Triple-WAN)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Billion', model: 'BiPAC 8900AX-2400 (AC2400 VDSL2/Fibre)', protocol: 'HTTP', ip: '192.168.1.254', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to the Billion BiPAC LAN port.',
      'Open http://192.168.1.254 in your web browser.',
      'Log in with Username: admin and Password: admin.',
      'Configure WAN interfaces and Multi-WAN failover rules.'
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
    name: 'Calix',
    slug: 'calix',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, GigaSpire CommandIQ setup, and FTTH configuration for Calix optical networking gateways.',
    models: [
      { brand: 'Calix', model: 'GigaSpire BLAST u6 (Wi-Fi 6 Optical Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Calix', model: 'GigaSpire BLAST u4 (Compact Wi-Fi 6 Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Calix', model: 'GigaCenter 844G (GPON Residential Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Calix', model: '716GE Optical Network Terminal (ONT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC or mobile to Calix GigaSpire Wi-Fi.',
      'Open http://192.168.1.1 in your browser.',
      'Enter Username: admin and Password printed on device sticker (or use CommandIQ app).'
    ]
  },
  {
    name: 'Cisco',
    slug: 'cisco',
    defaultIp: '192.168.1.1 / 10.0.0.1 / 192.168.15.1',
    defaultUser: 'cisco / admin',
    defaultPass: 'cisco / password',
    description: 'Default logins for Cisco Small Business, RV Series, Catalyst, and Meraki Go routers.',
    models: [
      { brand: 'Cisco', model: 'RV160 / RV260 / RV340 Gigabit VPN Router', protocol: 'HTTPS', ip: '192.168.1.1', username: 'cisco', password: 'cisco' },
      { brand: 'Cisco', model: 'Meraki Go GX20 / GX50 Security Gateway', protocol: 'Meraki Go App', ip: '192.168.1.1', username: 'admin', password: 'Set in app' },
      { brand: 'Cisco', model: 'DPC3941T (Xfinity Gateway)', protocol: 'HTTP', ip: '10.0.0.1', username: 'admin', password: 'password' },
      { brand: 'Cisco', model: 'WRVS4400N Wireless-N Gigabit Router', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Cisco', model: 'SPA2102 / PAP2T VoIP Telephone Adapter', protocol: 'HTTP', ip: '192.168.15.1', username: 'admin', password: '(blank)' },
      { brand: 'Cisco', model: 'Catalyst 2960 / 3750 Layer 3 Switch', protocol: 'Telnet/SSH', ip: '192.168.1.1', username: 'cisco', password: 'cisco' }
    ],
    guide: [
      'Connect via Ethernet cable to Cisco router LAN port 1.',
      'Open https://192.168.1.1 in browser.',
      'Login with username: cisco and password: cisco.'
    ]
  },
  {
    name: 'Comtrend',
    slug: 'comtrend',
    defaultIp: '192.168.1.1',
    defaultUser: 'root / admin',
    defaultPass: '12345 / admin',
    description: 'Default logins, VDSL2 configurations, and G.hn Powerline setup for Comtrend gateways.',
    models: [
      { brand: 'Comtrend', model: 'NexusLink 3112 (Bonded VDSL2 Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Comtrend', model: 'AR-5381u (Wireless ADSL2+ Router)', protocol: 'HTTP', ip: '192.168.1.1', username: 'root', password: '12345' },
      { brand: 'Comtrend', model: 'VR-3033 (Multi-DSL Wireless Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Comtrend LAN port.',
      'Navigate to http://192.168.1.1 in your browser.',
      'Log in with Username: root and Password: 12345 (or admin / admin).'
    ]
  },
  {
    name: 'Cudy',
    slug: 'cudy',
    defaultIp: '192.168.10.1 / cudy.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default IP credentials, Cudy Wi-Fi 6 mesh setup, and 4G/5G cellular gateway instructions.',
    models: [
      { brand: 'Cudy', model: 'Cudy WR3000 (AX3000 Wi-Fi 6 Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy LT18 (4G LTE Cat 18 Gigabit Router)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy M1800 (Whole Home Mesh Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Cudy', model: 'Cudy WR1300 (AC1200 Gigabit Dual Band)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Cudy Wi-Fi network (Cudy_XXXX).',
      'Open http://cudy.net or http://192.168.10.1 in your browser.',
      'Enter default password "admin" and follow the quick setup wizard.',
      'Configure VPN Client (WireGuard, OpenVPN, Zerotier) and DNS over TLS.'
    ]
  },
  {
    name: 'Digisol',
    slug: 'digisol',
    defaultIp: '192.168.1.1 / 192.168.2.1',
    defaultUser: 'admin',
    defaultPass: 'admin / admin1234',
    description: 'Default credentials and FTTH XPON ONT configuration for Digisol wireless routers and optical modems.',
    models: [
      { brand: 'Digisol', model: 'DG-GR1321 (XPON GPON/EPON ONT + Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin1234' },
      { brand: 'Digisol', model: 'DG-HR3400 (300Mbps Wireless Router)', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: 'admin' },
      { brand: 'Digisol', model: 'DG-BG4300NU (ADSL2+ Broadband Router)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Digisol', model: 'DG-GR1010 (Single Port Gigabit ONU)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to the Digisol ONT LAN port.',
      'Open http://192.168.1.1 or http://192.168.2.1 in your browser.',
      'Enter Username: admin and Password: admin (or admin1234).',
      'Set WAN connection mode (PPPoE / IPoE) and configure optical VLANs.'
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
    name: 'DZS (Zhone)',
    slug: 'dzs-zhone',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'zhone / admin',
    description: 'Default passwords and FTTH GPON configuration for DZS (DASAN Zhone Solutions) optical network terminals.',
    models: [
      { brand: 'DZS (Zhone)', model: 'zNID GPON 2426A (Dual Band Wi-Fi ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'zhone' },
      { brand: 'DZS (Zhone)', model: 'zNID GPON 2428A1 (Gigabit GPON Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'zhone' },
      { brand: 'DZS (Zhone)', model: 'zNID 2608T Indoor ONT', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to DZS ONT LAN port.',
      'Open http://192.168.1.1 in your web browser.',
      'Log in with Username: admin and Password: zhone.'
    ]
  },
  {
    name: 'Fortinet (FortiGate)',
    slug: 'fortinet',
    defaultIp: '192.168.1.99',
    defaultUser: 'admin',
    defaultPass: '(blank)',
    description: 'Default logins, initial provisioning, and FortiOS configuration for Fortinet FortiGate enterprise firewalls.',
    models: [
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 40F (Next-Gen Firewall)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 60F (SD-WAN Security Gateway)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiGate 70F (Threat Protection)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' },
      { brand: 'Fortinet (FortiGate)', model: 'FortiWiFi 60E (UTM + Wi-Fi)', protocol: 'HTTPS', ip: '192.168.1.99', username: 'admin', password: '(blank)' }
    ],
    guide: [
      'Connect your PC Ethernet cable to FortiGate Port 1.',
      'Set static IP on your PC: 192.168.1.100, Netmask: 255.255.255.0.',
      'Open https://192.168.1.99 in your web browser.',
      'Log in with Username: admin and leave the password blank.'
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
    name: 'Google (Nest WiFi)',
    slug: 'google-nest',
    defaultIp: '192.168.86.1',
    defaultUser: 'Google Home App',
    defaultPass: 'Google Account Authentication',
    description: 'Google Nest WiFi Pro Wi-Fi 6E, Nest WiFi Router, and Google WiFi point mesh configuration instructions.',
    models: [
      { brand: 'Google (Nest WiFi)', model: 'Nest WiFi Pro (Wi-Fi 6E Tri-Band Mesh)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' },
      { brand: 'Google (Nest WiFi)', model: 'Nest WiFi Router (AC2200 Mesh Base)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' },
      { brand: 'Google (Nest WiFi)', model: 'Google WiFi Point (AC1200 Mesh System)', protocol: 'Google Home App', ip: '192.168.86.1', username: 'Google Home App', password: 'Google Account' }
    ],
    guide: [
      'Plug your Nest WiFi router into power and connect to your modem using Ethernet.',
      'Open the Google Home app on your smartphone.',
      'Tap "+" -> Set up device -> New device, and scan the QR code on the bottom of your Nest WiFi router.',
      'Set your Wi-Fi name and password and link mesh points around your home.'
    ]
  },
  {
    name: 'Grandstream',
    slug: 'grandstream',
    defaultIp: '192.168.80.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, Multi-WAN failover, and GWN management for Grandstream enterprise routers and APs.',
    models: [
      { brand: 'Grandstream', model: 'GWN7062 (Dual-Band Wi-Fi 6 Multi-WAN)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Grandstream', model: 'GWN7052 (Dual-Band Gigabit VPN Router)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Grandstream', model: 'GWN7000 (Enterprise Multi-WAN Router)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'admin' },
      { brand: 'Grandstream', model: 'GWN7660 (Wi-Fi 6 Ceiling AP)', protocol: 'HTTPS', ip: '192.168.80.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect PC to Grandstream GWN LAN port.',
      'Open https://192.168.80.1 or https://gwn.local.',
      'Enter Username: admin and Password printed on device sticker.',
      'Configure GWN Cloud management or local controller settings.'
    ]
  },
  {
    name: 'Hitron',
    slug: 'hitron',
    defaultIp: '192.168.0.1',
    defaultUser: 'cusadmin',
    defaultPass: 'password / highspeed',
    description: 'Default logins and DOCSIS 3.1 Gigabit gateway configuration for Hitron CODA and CGNM cable modems.',
    models: [
      { brand: 'Hitron', model: 'CODA-4582 (DOCSIS 3.1 Gigabit Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'cusadmin', password: 'password' },
      { brand: 'Hitron', model: 'CODA-56 (Multi-Gigabit DOCSIS 3.1 Modem)', protocol: 'HTTP', ip: '192.168.100.1', username: 'cusadmin', password: 'password' },
      { brand: 'Hitron', model: 'CGNM-2250 (Dual-Band AC Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'cusadmin', password: 'password' }
    ],
    guide: [
      'Connect PC to Hitron cable modem via Ethernet.',
      'Open http://192.168.0.1 in browser.',
      'Enter Username: cusadmin and Password: password (or passphrase on sticker).'
    ]
  },
  {
    name: 'Huawei',
    slug: 'huawei',
    defaultIp: '192.168.1.1 / 192.168.100.1 / 192.168.8.1 / 192.168.3.1',
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
    name: 'Humax',
    slug: 'humax',
    defaultIp: '192.168.0.1 / 192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'password / 1234',
    description: 'Default credentials and setup guides for Humax Quantum Wi-Fi routers, cable modems, and FTTH gateways.',
    models: [
      { brand: 'Humax', model: 'Quantum T9 (AC2400 Dual Band Router)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Humax', model: 'HG100R (DOCSIS 3.0 Cable Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'password' },
      { brand: 'Humax', model: 'BG-1000 (Gigabit FTTH Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: '1234' }
    ],
    guide: [
      'Connect to Humax Wi-Fi or LAN port.',
      'Open http://192.168.0.1 in your browser.',
      'Log in with Username: admin and Password: password.'
    ]
  },
  {
    name: 'Juniper',
    slug: 'juniper',
    defaultIp: '192.168.1.1',
    defaultUser: 'root',
    defaultPass: '(blank)',
    description: 'Default logins, J-Web browser management, and Junos OS setup for Juniper SRX series security gateways.',
    models: [
      { brand: 'Juniper', model: 'SRX300 (Enterprise Branch Gateway)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' },
      { brand: 'Juniper', model: 'SRX320 (Secure Router with LTE)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' },
      { brand: 'Juniper', model: 'SRX340 / SRX550 Services Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'root', password: '(blank)' }
    ],
    guide: [
      'Connect PC to Juniper ge-0/0/0 port.',
      'Open https://192.168.1.1 in your browser to launch J-Web.',
      'Log in with Username: root and leave Password empty.'
    ]
  },
  {
    name: 'Keenetic',
    slug: 'keenetic',
    defaultIp: '192.168.1.1 / 192.168.18.1',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Default login credentials, KeeneticOS setup, and multi-WAN configuration for Keenetic Titan, Hero, and Hopper routers.',
    models: [
      { brand: 'Keenetic', model: 'Keenetic Titan (KN-1811 AX3200 Wi-Fi 6)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Hero (KN-1011 AX1800 Gigabit)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Hopper (KN-3810 AX1800 Dual Band)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Keenetic', model: 'Keenetic Carrier (KN-1711 AC1200 Mesh)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'Set during initial setup' }
    ],
    guide: [
      'Connect to the Keenetic Wi-Fi network or Ethernet LAN port.',
      'Open http://192.168.1.1 or http://keenetic.net in your browser.',
      'Follow the KeeneticOS initial setup wizard to configure the administrator password.',
      'Enable Multi-WAN failover, Mesh Wi-Fi system, and cloud remote access.'
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
    name: 'MitraStar',
    slug: 'mitrastar',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin / 1234',
    defaultPass: '1234 / Printed on sticker',
    description: 'Default logins and setup instructions for MitraStar GPT and HGW series FTTH optical routers.',
    models: [
      { brand: 'MitraStar', model: 'GPT-2541GNAC (HGU Fibra Movistar)', protocol: 'HTTP', ip: '192.168.1.1', username: '1234', password: 'Printed on sticker' },
      { brand: 'MitraStar', model: 'HGW-2501GN-R2 (Dual Band GPON Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to MitraStar ONT Wi-Fi.',
      'Open http://192.168.1.1 in browser.',
      'Enter credentials printed on the base barcode label.'
    ]
  },
  {
    name: 'Motorola',
    slug: 'motorola',
    defaultIp: '192.168.0.1 / 192.168.100.1',
    defaultUser: 'admin',
    defaultPass: 'motorola',
    description: 'Default login passwords and setup instructions for Motorola MG series DOCSIS cable modem routers and MB standalone modems.',
    models: [
      { brand: 'Motorola', model: 'MG8702 (DOCSIS 3.1 AC3200 Modem + Wi-Fi)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MG7700 (DOCSIS 3.0 AC1900 Gigabit Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MB8611 (Multi-Gigabit DOCSIS 3.1 Modem)', protocol: 'HTTP', ip: '192.168.100.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MT7711 (2-in-1 Cable Modem + Voice Gateway)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' },
      { brand: 'Motorola', model: 'MH7022 (Whole Home Mesh Wi-Fi System)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'motorola' }
    ],
    guide: [
      'Connect your computer to the Motorola cable modem router via Ethernet cable.',
      'Open http://192.168.0.1 or http://192.168.100.1 in your browser.',
      'Enter Username: admin and Password: motorola (or check rear label).',
      'Configure Wi-Fi SSID, security passphrases, and check downstream coaxial signal levels.'
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
    defaultIp: '192.168.1.1 / 192.168.18.1 / 192.168.12.1',
    defaultUser: 'AdminGPON / admin',
    defaultPass: 'ALC#FBRG@H / admin',
    description: 'Default passwords, GPON settings, and Wi-Fi configuration guides for Nokia optical ONT gateways and Nokia WiFi Beacons.',
    models: [
      { brand: 'Nokia', model: 'G-2425G-A (Dual Band GPON ONT)', protocol: 'HTTP', ip: '192.168.18.1', username: 'AdminGPON', password: 'ALC#FBRG@H' },
      { brand: 'Nokia', model: 'Nokia 5G21 (T-Mobile 5G Home Gateway)', protocol: 'HTTP', ip: '192.168.12.1', username: 'admin', password: 'Printed on sticker' },
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
    name: 'Optilink',
    slug: 'optilink',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin / stdONUi0i$',
    description: 'Default logins and FTTH XPON ONT configuration for Optilink broadband optical network terminals.',
    models: [
      { brand: 'Optilink', model: 'OP-XONT 71110 (XPON ONT 1GE+1FE+Wi-Fi)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Optilink', model: 'OP-GONT 71100 (Single Port GPON ONT)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'stdONUi0i$' },
      { brand: 'Optilink', model: 'OP-XONT 71000 (Dual Band Gigabit XPON)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Optilink ONT via Ethernet.',
      'Open http://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: admin (or stdONUi0i$).',
      'Set up PPPoE WAN connection and Wi-Fi security keys.'
    ]
  },
  {
    name: 'Palo Alto',
    slug: 'palo-alto',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default credentials, PAN-OS web interface, and provisioning guide for Palo Alto PA-series Next-Generation Firewalls.',
    models: [
      { brand: 'Palo Alto', model: 'PA-440 / PA-460 Next-Gen Firewall', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Palo Alto', model: 'PA-220 (Branch Security Appliance)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Palo Alto', model: 'PA-850 Enterprise Security Gateway', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect PC to Palo Alto MGT port via Ethernet.',
      'Set static IP 192.168.1.2 on PC adapter.',
      'Open https://192.168.1.1 in browser and log in with admin / admin.'
    ]
  },
  {
    name: 'Ruijie (Reyee)',
    slug: 'ruijie-reyee',
    defaultIp: '192.168.110.1',
    defaultUser: 'admin',
    defaultPass: 'admin / (setup password)',
    description: 'Default IP credentials, ReyeeOS cloud dashboard setup, and Wi-Fi 6 mesh instructions for Ruijie Reyee routers.',
    models: [
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-EW3200GX PRO (Wi-Fi 6 Mesh)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-EW1200G PRO (Gigabit Smart Router)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'admin' },
      { brand: 'Ruijie (Reyee)', model: 'Reyee RG-E5 (Wi-Fi 6 AX3200 Whole Home)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'Set during initial setup' },
      { brand: 'Ruijie (Reyee)', model: 'Ruijie RG-EG105G-P (Cloud PoE Gateway)', protocol: 'HTTP', ip: '192.168.110.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Reyee Wi-Fi (Reyee-sXXXX) or LAN port.',
      'Open http://192.168.110.1 in your web browser.',
      'Create administrator credentials and configure Wi-Fi SSIDs.',
      'Connect to Ruijie Cloud app for mobile remote management.'
    ]
  },
  {
    name: 'Sagemcom',
    slug: 'sagemcom',
    defaultIp: '192.168.1.1 / 192.168.12.1',
    defaultUser: 'admin',
    defaultPass: 'admin / printed on sticker',
    description: 'Default passwords and gateway management for Sagemcom FAST series fiber and 5G cellular modems.',
    models: [
      { brand: 'Sagemcom', model: 'FAST 5688W (T-Mobile 5G Home Gateway)', protocol: 'HTTP', ip: '192.168.12.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Sagemcom', model: 'FAST 5260 / 5370', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Sagemcom', model: 'FAST 5655 / 5670 FTTH', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Sagemcom gateway.',
      'Open http://192.168.1.1 or http://192.168.12.1 in browser.',
      'Login with credentials from the rear sticker.'
    ]
  },
  {
    name: 'Sercomm',
    slug: 'sercomm',
    defaultIp: '192.168.1.1 / 192.168.0.1',
    defaultUser: 'admin',
    defaultPass: 'admin / Printed on sticker',
    description: 'Default credentials, ONT configuration, and router setup for Sercomm FTTH gateways and Vodafone Station modems.',
    models: [
      { brand: 'Sercomm', model: 'Sercomm FG1000 (GPON Wi-Fi 6 Gateway)', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'Printed on sticker' },
      { brand: 'Sercomm', model: 'Sercomm H500-s (Vodafone Wi-Fi Hub)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'Vodafone password' },
      { brand: 'Sercomm', model: 'Speedport Smart (Telekom Fiber Gateway)', protocol: 'HTTP', ip: '192.168.2.1', username: 'admin', password: 'Printed on sticker' }
    ],
    guide: [
      'Connect to Sercomm Wi-Fi or LAN.',
      'Open http://192.168.1.1 in browser.',
      'Enter credentials from rear label.'
    ]
  },
  {
    name: 'SonicWall',
    slug: 'sonicwall',
    defaultIp: '192.168.168.168',
    defaultUser: 'admin',
    defaultPass: 'password',
    description: 'Default credentials, SonicOS management, and provisioning guide for SonicWall TZ and NSA series firewalls.',
    models: [
      { brand: 'SonicWall', model: 'SonicWall TZ270 (Next-Gen Firewall Router)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' },
      { brand: 'SonicWall', model: 'SonicWall TZ370 (Multi-Gigabit Firewall)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' },
      { brand: 'SonicWall', model: 'SonicWall TZ470 / TZ570 (SD-WAN Gateway)', protocol: 'HTTPS', ip: '192.168.168.168', username: 'admin', password: 'password' }
    ],
    guide: [
      'Connect your PC to SonicWall X0 (LAN) port.',
      'Assign static IP 192.168.168.200 to your computer.',
      'Open https://192.168.168.168 in your browser.',
      'Enter Username: admin and Password: password to access SonicOS.'
    ]
  },
  {
    name: 'Sophos',
    slug: 'sophos',
    defaultIp: '172.16.16.16',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and WebAdmin setup for Sophos XGS Next-Generation Firewalls and security appliances.',
    models: [
      { brand: 'Sophos', model: 'Sophos XGS 87 / 87w (Firewall with Wi-Fi)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' },
      { brand: 'Sophos', model: 'Sophos XGS 107 / 107w (Hardware Firewall)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' },
      { brand: 'Sophos', model: 'Sophos XGS 116 (Business Security Gateway)', protocol: 'HTTPS', ip: '172.16.16.16', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect your PC to Sophos Port 1 (LAN).',
      'Set static IP 172.16.16.100 on your PC adapter.',
      'Navigate to https://172.16.16.16:4444 in your web browser.',
      'Log in with Username: admin and Password: admin.'
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
    name: 'Teltonika',
    slug: 'teltonika',
    defaultIp: '192.168.1.1',
    defaultUser: 'admin',
    defaultPass: 'admin01',
    description: 'Default credentials, RutOS configuration, and industrial cellular gateway setup for Teltonika Networks RUT routers.',
    models: [
      { brand: 'Teltonika', model: 'RUTX50 (5G Dual SIM Industrial Router)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUT240 / RUT241 (4G LTE Industrial IoT)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUT950 / RUT955 (Dual-SIM 4G Enterprise)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' },
      { brand: 'Teltonika', model: 'RUTX11 (Gigabit Dual-Band Wi-Fi LTE-A)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin01' }
    ],
    guide: [
      'Connect to the Teltonika router LAN port or Wi-Fi (RUTXXXX).',
      'Open https://192.168.1.1 in your browser.',
      'Log in with Username: admin and Password: admin01.',
      'Follow RutOS wizard to configure APN, mobile data limit, and VPN tunnels.'
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
    name: 'Totolink',
    slug: 'totolink',
    defaultIp: '192.168.0.1 / itotolink.net',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default logins and setup instructions for Totolink Wi-Fi 6 routers, range extenders, and wireless gateways.',
    models: [
      { brand: 'Totolink', model: 'Totolink X5000R (AX1800 Dual Band Wi-Fi 6)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink A3002RU (AC1200 Dual Band Gigabit)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink N300RT (300Mbps Wireless N)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' },
      { brand: 'Totolink', model: 'Totolink EX1200T (AC1200 Range Extender)', protocol: 'HTTP', ip: '192.168.0.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Totolink Wi-Fi (TOTOLINK_XXXX).',
      'Open http://itotolink.net or http://192.168.0.1 in browser.',
      'Enter default password: admin.',
      'Complete the Easy Setup wizard to configure internet access.'
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
    name: 'Vantiva',
    slug: 'vantiva',
    defaultIp: '192.168.1.1 / 192.168.1.254',
    defaultUser: 'admin',
    defaultPass: 'admin / (serial number)',
    description: 'Default credentials and gateway configuration for Vantiva 5G gateways, Falcon Wi-Fi 6E, and SmartView broadband hubs.',
    models: [
      { brand: 'Vantiva', model: 'Cobra 5G Gateway (Sub-6 & mmWave)', protocol: 'HTTPS', ip: '192.168.1.1', username: 'admin', password: 'admin' },
      { brand: 'Vantiva', model: 'Falcon Wi-Fi 6E Broadband Gateway', protocol: 'HTTPS', ip: '192.168.1.254', username: 'admin', password: 'admin' },
      { brand: 'Vantiva', model: 'SmartView FTTH Gigabit Optical Hub', protocol: 'HTTP', ip: '192.168.1.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Vantiva Wi-Fi or LAN port.',
      'Open http://192.168.1.1 or http://192.168.1.254 in your browser.',
      'Log in with Username: admin and Password found on product label.'
    ]
  },
  {
    name: 'WatchGuard',
    slug: 'watchguard',
    defaultIp: '10.0.1.1',
    defaultUser: 'admin',
    defaultPass: 'readwrite',
    description: 'Default logins, Web UI configuration on port 8080, and Fireware OS setup for WatchGuard Firebox security appliances.',
    models: [
      { brand: 'WatchGuard', model: 'Firebox T20 / T25 (Desktop UTM Firewall)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox T40 / T45 (High-Performance Branch)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox T80 / T85 (Multi-Gigabit Firewall)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' },
      { brand: 'WatchGuard', model: 'Firebox M270 / M370 (Rackmount Appliance)', protocol: 'HTTPS', ip: '10.0.1.1', username: 'admin', password: 'readwrite' }
    ],
    guide: [
      'Connect PC to Firebox Interface 1 (Trusted).',
      'Set static IP 10.0.1.2 on PC.',
      'Open https://10.0.1.1:8080 in browser.',
      'Log in with Username: admin and Password: readwrite (status user: readonly).'
    ]
  },
  {
    name: 'Wavlink',
    slug: 'wavlink',
    defaultIp: '192.168.10.1 / wifi.wavlink.com',
    defaultUser: 'admin',
    defaultPass: 'admin',
    description: 'Default passwords and setup instructions for Wavlink high-power outdoor APs, Halo mesh, and quantum range extenders.',
    models: [
      { brand: 'Wavlink', model: 'Aerial HD4 (High Power Outdoor AP/Repeater)', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Wavlink', model: 'Halo Base AC1200 Whole Home Mesh', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' },
      { brand: 'Wavlink', model: 'Quantum D4G AC1200 Gigabit Router', protocol: 'HTTP', ip: '192.168.10.1', username: 'admin', password: 'admin' }
    ],
    guide: [
      'Connect to Wavlink Wi-Fi (WAVLINK-N / WAVLINK-AC).',
      'Open http://wifi.wavlink.com or http://192.168.10.1 in browser.',
      'Enter default password "admin" to launch setup.'
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

export { ROUTER_MODELS } from './router-models-data';
import { ROUTER_MODELS } from './router-models-data';

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

  const modelSlugs = ROUTER_MODELS.map(item => ({
    params: { slug: item.slug },
    props: { type: 'model' as const, data: item }
  }));

  return [...ipSlugs, ...brandSlugs, ...ispSlugs, ...modelSlugs];
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

export function getModelsForIp(targetIp: string): RouterModel[] {
  if (!targetIp) return [];
  return ROUTER_MODELS.filter(m => m.ip === targetIp);
}

export function getModelsForBrand(brandSlug: string): RouterModel[] {
  return ROUTER_MODELS.filter(m => m.brandSlug === brandSlug);
}

export function getModelSlug(brand?: string | null, model?: string | null): string | null {
  if (!model) return null;
  const cleanModel = model.toLowerCase().trim();
  const cleanBrand = (brand || '').toLowerCase().trim();

  // 1. Direct match on slug
  const directSlug = cleanModel.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const foundBySlug = ROUTER_MODELS.find(m => m.slug === directSlug || m.slug === `${cleanBrand}-${directSlug}`);
  if (foundBySlug) return foundBySlug.slug;

  // 2. Direct match on model & brand
  const found = ROUTER_MODELS.find(m => {
    const mModel = m.model.toLowerCase().trim();
    const mBrand = m.brand.toLowerCase().trim();
    if (mModel === cleanModel) {
      if (!cleanBrand || mBrand === cleanBrand || mBrand.includes(cleanBrand) || cleanBrand.includes(mBrand)) {
        return true;
      }
    }
    return false;
  });
  if (found) return found.slug;

  // 3. Partial / contains match
  const fuzzy = ROUTER_MODELS.find(m => {
    const mModel = m.model.toLowerCase().trim();
    return cleanModel.includes(mModel) || mModel.includes(cleanModel);
  });
  if (fuzzy) return fuzzy.slug;

  return null;
}

export function formatModelTitle(brand?: string | null, model?: string | null): string {
  if (!model) return brand || '';
  if (!brand) return model;
  const cleanModel = model.trim();
  const cleanBrand = brand.trim();
  if (cleanModel.toLowerCase().startsWith(cleanBrand.toLowerCase())) {
    return cleanModel;
  }
  return `${cleanBrand} ${cleanModel}`;
}


