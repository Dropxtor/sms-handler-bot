## sms-handler-bot 📨

A bot for handling SMS-related services, including buying numbers and checking OTP statuses from SMS-RU and SMS-Activate.

## Features

- Buy numbers from SMS-RU and SMS-Activate
- Check OTP status for purchased numbers
- Delete numbers (SMS-RU)
- View balances for both services

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/sms-handler-bot.git
   cd sms-handler-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```plaintext
   SMSHUB=your-smshub-api-key
   SMSACTIVATE=your-smsactivate-api-key
   ```

   You can get your API keys by registering on these services:
   - [SMSHub](https://smshub.org/en/main)
   - [SMS-Activate](https://sms-activate.io/en)

### Usage

Run the bot by executing the following command:

```bash
npm start
```

You will be presented with a menu to select between SMS-RU and SMS-Activate services.
