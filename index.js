const sendMessagesFromExcel = require("whatsapp-message-sender");
const path = require("path");
const fs = require("fs");

// File path and columns configuration
const filePath = path.resolve(__dirname, "Mobile_Phone_Numbers.xlsx"); // Ensure this path is correct
const nameColumn = "Name"; // Column name for the contact names
const phoneColumn = "Mobile"; // Column name for the phone numbers

// Message template with formatting
const messageTemplate = `MAA BIRAJA MOBILE SHOP 
__________
INSTAGRAM ID-https://www.instagram.com/maa_biraja_mobile_shop?igsh=MWluNTUwcW9ubXZ3dQ==

💥Best Discount Available For Instagram Followers 💥

📱 **IPHONE** 📱
- iPhone 15 Plus - 71999/-
- iPhone 15 - 51999/67999/-
- iPhone 14 Pro Max - 84999/-
- iPhone 14 - 40999/45999/-
- iPhone 14 Plus - 49999/-
- iPhone 13 Pro Max - 64999/-
- iPhone 13 Pro - 56999/-
- iPhone 13 - 36999/-
- iPhone 12 - 29999/-
- iPhone 12 Mini - 21999/-
- iPhone 11 - 19999/-
- iPhone 11 Pro Max - 27999/-
- iPhone X - 16499/-
- iPhone XR - 17499/-
- iPhone 8 - 10999/-
- iPhone 8 Plus - 8999/-
- iPhone 7 - 6999/8499/-
- iPhone 6 - 6499/-
- iPhone 7 Plus - 8499/-
- iPhone SE 2020 - 12499/-

🍏 **APPLE WATCH** 🍏
1. Apple Watch Series 9 (Sealpack) - 44999/-
2. Apple Watch Ultra (Used) - 37999/-

🎧 **AIRPODS** 🎧
- AirPods Pro 2 - 1999/-

📱 **SAMSUNG** 📱
- Samsung Galaxy Fold 5 - 89999/-
- Samsung Galaxy Z Fold4 - 55999/-
- Samsung Fold 2 - 39999/-
- Samsung Galaxy Z Flip3 - 29999/-
- Samsung Galaxy Flip4 - 35999/-
- Samsung Galaxy Flip5 - 34999/51999/-
- Samsung Galaxy S24 Ultra - 91999/-
- Samsung S23 Ultra - 67999/84999/-
- Samsung Galaxy S22 Ultra - 51999/-
- Samsung Galaxy S22 - 21999/26999/-
- Samsung S21 Ultra - 34999/-
- Samsung S21 FE - 18999/-
- Samsung Galaxy S20+ - 14999/-
- Samsung S20 - 13999/-
- Samsung Galaxy Note 10 Lite - 9999/-
- Samsung Galaxy S20 FE - 12999/-
- Samsung Galaxy S20 FE 5G - 14499/-
- Samsung A13 - 7499/-
- Samsung SM-B310E - 1200/-

📱 **OPPO** 📱
- Oppo F27 Pro + - 27999/29999/-
- Oppo F25 Pro (Sealpack) - 23999/25999/-
- Oppo A59 5G - 13999/15499/-
- Oppo A18 (Sealpack) - 8999/-
- Oppo Reno8 - 14499/-
- Oppo Reno7 - 12499/-
- Oppo F21 Pro - 10499/-
- Oppo F19s - 10499/-
- Oppo A9 2020 - 8499/-
- Oppo F11 - 7999/-
- Oppo F17 Pro - 8499/-
- Oppo F11 Pro - 6499/-

📱 **REDMI** 📱
- Redmi 8 Pro - 8499/-
- Redmi 8 - 5499/-
- Redmi Note 9 - 7499/-
- Redmi Note 9 Pro Max - 8999/-
- Redmi Note 7 Pro - 6499/-
- Redmi Note 6 Pro - 5499/-
- Redmi 5 Pro - 4499/-

📱 **VIVO** 📱
- Vivo 80 - 31999/-
- Vivo X60 - 18999/-
- Vivo X50 - 15499/-
- Vivo V30 (Sealpack) - 33999/35999/37999/-
- Vivo V30 Pro - 41999/46999/-
- Vivo Y28 (Sealpack) - 14499/-
- Vivo V25 - 16999/-
- Vivo V23 - 14999/-
- Vivo V23e - 14499/-
- Vivo Y100 - 15499/-
- Vivo Y56 - 13999/-
- Vivo Y73 - 12499/-
- Vivo V17 - 8499/-
- Vivo V19 - 7999/-
- Vivo V20 - 7999/-
- Vivo Y51A - 8999/-
- Vivo Y15 - 7499/-
- Vivo Y17 - 6999/-
- Vivo Y20G - 5499/-
- Vivo U20 - 6499/-

📱 **NOTHING** 📱
- Nothing 1 - 19999/-

📱 **GOOGLE** 📱
- Pixel 3a (Sealpack) - 5999/13499/-

📱 **ONEPLUS** 📱
- OnePlus Nord - 11999/-
- OnePlus Nord CE - 12499/-
- OnePlus 6T - 8999/-
- OnePlus 6 - 8499/-
- OnePlus 7T - 12499/-
- OnePlus 7T Pro - 14999/-
- OnePlus 7 - 8499/-
- OnePlus 7 Pro - 12499/-
- OnePlus 9R - 17999/-
- OnePlus 9 Pro - 24999/-
- OnePlus 9RT - 20999/-
- OnePlus 10 Pro - 27999/-
- OnePlus 10R - 19999/-
- OnePlus 10T - 19999/-

📱 **REALME** 📱
- Realme X7 Max - 12499/-
- Realme 8 Pro - 7999/-`;

const countryCode = "91"; // Country code (e.g., "91" for India)
const delayMs = 6000; // Delay between messages in milliseconds (optional)

// Function to send messages
const sendMessages = async () => {
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Error: The file ${filePath} does not exist.`);
    process.exit(1);
  }

  try {
    await sendMessagesFromExcel(
      filePath,
      nameColumn,
      phoneColumn,
      messageTemplate,
      countryCode,
      delayMs
    );
    console.log("Messages sent successfully!");
  } catch (error) {
    console.error("An error occurred while sending messages:", error.message);
  }
};

// Call the function
sendMessages();
