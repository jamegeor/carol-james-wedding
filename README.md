# 💍 Carol & James Wedding Website

A cinematic, Kerala monsoon-themed wedding invitation website built with Next.js 16, Framer Motion, and Tailwind CSS.

![Wedding Website](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎬 **Cinematic Hero Animation** - Parallax monsoon Kerala backdrop with elegant typography
- 📅 **Event Details** - Beautiful ceremony and reception cards with icons
- 🗺️ **Interactive Journey Map** - Animated Kerala location pins with hover tooltips
- ✈️ **Travel Information** - Flight, train, and road routes with weather info
- 👔 **Dress Code Section** - Visual color palette and attire guidelines
- 📝 **RSVP Form** - Full-featured form with Google Sheets backend
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Kerala Color Palette** - Monsoon-inspired earthy tones (moss green, warm beige, earth brown)
- ⚡ **Smooth Animations** - Framer Motion powered scroll-triggered effects
- 🔒 **SEO Controlled** - Noindex by default for privacy

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (serif) + Inter (sans)
- **Hosting**: Vercel (recommended, free tier)
- **RSVP Backend**: Google Sheets via Apps Script

## 📂 Project Structure

```
carol-james-wedding/
├── app/
│   ├── components/
│   │   ├── Hero.tsx           # Landing section
│   │   ├── Events.tsx         # Ceremony & reception
│   │   ├── JourneyMap.tsx     # Interactive Kerala map ⭐
│   │   ├── Travel.tsx         # Travel info & weather
│   │   ├── DressCode.tsx      # Attire guidelines
│   │   ├── RSVP.tsx           # RSVP form
│   │   ├── Contact.tsx        # Contact cards
│   │   ├── Navigation.tsx     # Nav bar + audio control
│   │   └── Footer.tsx         # Footer section
│   ├── api/
│   │   └── rsvp/route.ts      # RSVP submission endpoint
│   ├── layout.tsx             # Root layout with fonts
│   ├── page.tsx               # Main page assembly
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── tailwind.config.ts         # Custom Kerala color palette
├── DEPLOYMENT.md              # Full deployment guide 📖
└── README.md                  # You are here!
```

## 🎨 Color Palette

```
Cream:       #F8F6F3  (backgrounds)
Ivory:       #FFFEF9  (cards)
Warm Beige:  #E8DCC4  (accents)
Moss Green:  #8B9B7E  (primary)
Earth Brown: #A67C52  (secondary)
Fog Gray:    #D0CEC9  (borders)
```

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions on:
- Deploying to Vercel (free)
- Setting up Google Sheets RSVP integration
- Custom domain configuration
- Environment variables

**TL;DR:**
```bash
git init
git add .
git commit -m "Wedding website"
# Push to GitHub, then import to Vercel
```

## 📊 Google Sheets RSVP Setup

1. Create Google Sheet with headers: `Timestamp | Name | Email | Attending | Guests | Dietary Restrictions | Message`
2. Extensions → Apps Script (paste script from DEPLOYMENT.md)
3. Deploy as Web App
4. Add webhook URL to Vercel environment variables as `GOOGLE_SHEETS_WEBHOOK_URL`

## 🛠️ Customization

### Change Wedding Details
- Edit component files to update names, dates, locations
- Search/replace "CAROL", "JAMES", "29 AUGUST 2026", "PALA, KERALA"

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cream: '#YOUR_COLOR',
  mossGreen: '#YOUR_COLOR',
  // ...
}
```

### Change Background Image
Edit `app/components/Hero.tsx`:
```typescript
backgroundImage: "url('YOUR_IMAGE_URL')"
```

## 💰 Costs

- **Development**: Included in your Cline API usage (~$5-7)
- **Hosting**: $0/month (Vercel free tier)
- **RSVP Backend**: $0 (Google Sheets)
- **Domain** (optional): ~$12/year

**Total: $0-12/year** 🎉

## 🔧 Troubleshooting

### Node Version Warning
If you see "Node.js 18 is below required version 20":
- This is a warning, not an error
- Vercel uses Node 20 automatically
- Locally, upgrade Node or deploy directly to Vercel

### Build Errors
```bash
rm -rf node_modules .next
npm install
npm run build
```

### RSVP Not Working
1. Check Google Sheets script is deployed as "Web app"
2. Verify environment variable in Vercel
3. Check Vercel function logs for errors

## 📸 Screenshots

The website includes:
- ✅ Full-screen cinematic hero with animated mist
- ✅ Two-column event cards with custom SVG icons
- ✅ Interactive Kerala map with 6 locations
- ✅ Split-column travel information
- ✅ Dress code with bride/groom illustrations
- ✅ Multi-step RSVP form with conditional fields
- ✅ Three-column contact cards
- ✅ Responsive navigation (desktop & mobile)

## 🙏 Credits

- **Design Inspiration**: Kerala monsoon landscapes
- **Icons**: Lucide React
- **Fonts**: Google Fonts
- **Background Images**: Unsplash (Kerala tea gardens)
- **Framework**: Next.js team
- **Built with**: Cline AI assistant

## 📄 License

MIT License - Feel free to use this as a template for your own wedding!

---

**Made with ❤️ for Carol & James**  
*29 August 2026 | Pala, Kerala*

🌧️ *May your marriage be as beautiful as the misty hills of God's own country* ✨
