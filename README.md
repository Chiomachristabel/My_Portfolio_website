# Chioma Christabel Okpetah — Portfolio

Personal portfolio website for Chioma Christabel Okpetah, ML Engineer.

## Folder Structure

```
chioma-portfolio/
│
├── index.html      ← main page (HTML structure)
├── style.css       ← all styling and animations
├── script.js       ← cursor, scroll reveal, nav highlight
├── README.md       ← this file
└── YOUR_PHOTO.jpg  ← replace with your actual photo file
```

## How to Run Locally

1. Download all files into one folder
2. Double-click `index.html` — it opens in your browser
3. That's it!

## How to Add Your Photo

1. Put your photo file in the same folder (e.g. `chioma.jpg`)
2. Open `index.html` and find: `src="YOUR_PHOTO.jpg"`
3. Change it to your filename: `src="chioma.jpg"`
4. Open `style.css` and find `.avatar-photo` section
5. Change `display: none;` to `display: block;`
6. Save and refresh your browser

## How to Deploy to GitHub Pages (FREE hosting + URL)

Follow these steps to get a live URL like:
`https://chiomachristabel.github.io/portfolio/`

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you haven't already.

### Step 2 — Create a new repository
1. Click the green **New** button on your GitHub dashboard
2. Name it: `portfolio` (all lowercase)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On your new repo page, click **uploading an existing file**
2. Drag and drop all 4 files: `index.html`, `style.css`, `script.js`, and your photo
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main** and folder to **/ (root)**
5. Click **Save**

### Step 5 — Get your URL
After 1-2 minutes, your site will be live at:
`https://YOUR-GITHUB-USERNAME.github.io/portfolio/`

For Chioma, this will be:
`https://chiomachristabel.github.io/portfolio/`

### Step 6 — Add URL to LinkedIn
1. Go to your LinkedIn profile
2. Click **Edit profile** (pencil icon)
3. Scroll to the **Website** field
4. Paste your GitHub Pages URL
5. Save

## How to Make Changes Later

1. Edit the files on your computer
2. Go to your GitHub repo
3. Click on the file you want to update
4. Click the pencil ✏️ icon to edit
5. Paste your updated code
6. Click **Commit changes**
7. Your site updates automatically in ~1 minute

## Customisation Tips

- **Change colors**: Open `style.css`, find `:root` at the top, change the color values
- **Add a project**: In `index.html`, copy a `.skill-card` block and edit the content
- **Mark a cert done**: In `index.html`, change `status-progress` or `status-planned` to `status-done`
- **Update your bio**: In `index.html`, find the About section and edit the `<p>` paragraphs
