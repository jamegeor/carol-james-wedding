# Carol & James Wedding Website - Deployment Guide

## 🎉 Quick Start (Local Development)

```bash
cd carol-james-wedding
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deploy to Vercel (Free, Recommended)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Complete wedding website"
git remote add origin https://github.com/YOUR_USERNAME/carol-james-wedding.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `carol-james-wedding` repository
4. Vercel will auto-detect Next.js - click "Deploy"
5. Wait 2-3 minutes for deployment
6. Your site will be live at `https://carol-james-wedding.vercel.app`

### Step 3: (Optional) Add Custom Domain

1. In Vercel project settings → Domains
2. Add your custom domain (e.g., `caroljames.wedding`)
3. Follow DNS configuration instructions
4. SSL certificate is automatic!

---

## 📊 Google Sheets RSVP Integration

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet named "Wedding RSVPs"
3. Add column headers in Row 1:
   - `Timestamp` | `Name` | `Email` | `Attending` | `Guests` | `Dietary Restrictions` | `Message`

### Step 2: Create Apps Script

1. In your sheet: Extensions → Apps Script
2. Delete existing code and paste:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.attending || '',
      data.guests || '',
      data.dietaryRestrictions || '',
      data.message || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'RSVP saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click "Deploy" → "New deployment"
4. Type: **Web app**
5. Execute as: **Me**
6. Who has access: **Anyone**
7. Click "Deploy"
8. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/...`)

### Step 3: Configure Vercel Environment Variable

1. In Vercel: Project Settings → Environment Variables
2. Add new variable:
   - **Name**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: [Paste the Web App URL from Step 2]
3. Redeploy your site (Deployments → Click latest → Redeploy)

**Done!** RSVPs now save to your Google Sheet automatically.

---

## 🎨 Customization Guide

### Change Wedding Details

Edit `/app/page.tsx` and component files:
- **Names**: Search for "CAROL" and "JAMES" - replace globally
- **Date**: Change "29 AUGUST 2026" throughout
- **Location**: Update "PALA, KERALA" references
- **Venue names**: St Thomas Cathedral Church, Orchard River Mansion

### Change Colors

Edit `/tailwind.config.ts`:
```typescript
colors: {
  cream: '#F8F6F3',        // Background
  mossGreen: '#8B9B7E',    // Accent color
  earthBrown: '#A67C52',   // Secondary accent
  // ... modify as needed
}
```

### Change Contact Numbers

Edit `/app/components/Contact.tsx`:
- Update phone numbers in the contact cards

### Add Background Images

Replace the Unsplash URL in `/app/components/Hero.tsx` with your own:
```typescript
backgroundImage: "url('YOUR_IMAGE_URL')"
```

---

## 🔐 SEO & Privacy

The site is already configured with:
- ✅ `robots: "noindex, nofollow"` - Won't appear in search engines
- ✅ Responsive meta tags
- ✅ Proper HTML semantics

To make it searchable later, edit `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  robots: "index, follow", // Change this line
}
```

---

## 📱 Testing

### Browser Testing
- Chrome/Safari/Firefox (Desktop & Mobile)
- Test all sections scroll properly
- Test RSVP form submission
- Check responsive design on mobile

### Performance
- Next.js optimizes everything automatically
- Google Fonts are preloaded
- Images from Unsplash are optimized
- Framer Motion animations are GPU-accelerated

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### RSVP not saving to Google Sheets
1. Check Apps Script is deployed as "Web app"
2. Verify "Execute as: Me" and "Access: Anyone"
3. Check environment variable in Vercel matches exactly
4. Look at Vercel function logs for errors

### Build errors on Vercel
- Ensure all dependencies are in `package.json`
- Check Next.js version compatibility
- Review build logs in Vercel dashboard

---

## 💰 Cost Breakdown

- **Hosting (Vercel)**: $0/month (free tier)
- **Google Sheets**: $0 (free)
- **Custom domain**: ~$12/year (optional)
- **Total Year 1**: $0-12 USD

---

## 🎯 What's Included

✅ Cinematic hero with monsoon Kerala backdrop  
✅ Animated event cards (ceremony & reception)  
✅ Interactive Journey Through Kerala map  
✅ Travel information (flight, train, road)  
✅ Weather & things to explore section  
✅ Dress code with color palette  
✅ Full RSVP form with Google Sheets backend  
✅ Contact section with phone numbers  
✅ Responsive mobile & desktop design  
✅ Smooth Framer Motion animations  
✅ Kerala-inspired color palette  
✅ SEO optimized with noindex  

---

## 📞 Support

If you need help:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Test Google Sheets script in Apps Script editor
4. Verify environment variables are set correctly

---

**Made with ❤️ for Carol & James**  
*May your marriage be as beautiful as the hills of Kerala* 🌧️✨
