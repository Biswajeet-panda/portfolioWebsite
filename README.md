# portfolioWebsite
# Biswajeet Panda - Clean Professional Portfolio

## Folder structure

biswajeet_portfolio/
├── index.php
├── style.css
├── script.js
└── assets/
    ├── profile.jpg
    └── resume.pdf

## Setup on XAMPP (Windows)

1. Install XAMPP.
2. Open `C:\xampp\htdocs\`.
3. Copy the `biswajeet_portfolio` folder there.
4. Put your profile photo at:
   `C:\xampp\htdocs\biswajeet_portfolio\assets\profile.jpg`
5. Put your resume PDF at:
   `C:\xampp\htdocs\biswajeet_portfolio\assets\resume.pdf`
6. Start Apache from the XAMPP Control Panel.
7. Open:
   http://localhost/biswajeet_portfolio/

PHP is only being used as the entry file, so there is no database requirement.

## Setup on cPanel

1. Open File Manager.
2. Go to `public_html`.
3. Upload the portfolio files.
4. Keep `index.php`, `style.css`, `script.js` and the `assets` folder in the same structure.
5. Upload your profile photo as `assets/profile.jpg`.
6. Upload your resume as `assets/resume.pdf`.
7. Open your domain.

## Setup on aaPanel

1. Create/add your website/domain.
2. Open the website root directory.
3. Upload all files and the `assets` folder.
4. Make sure the default document includes `index.php`.
5. Open your domain.

## Important customization

- Replace `assets/profile.jpg` with your actual photo.
- Replace `assets/resume.pdf` with your final resume.
- Edit email/phone in `index.php` if needed.
- Edit project descriptions in `index.php` and `script.js`.
- Edit colors in the `:root` section of `style.css`.

## Design features

- Responsive desktop/tablet/mobile layout
- Mobile hamburger navigation
- Scroll reveal animations
- Animated project/stat counters
- Floating technology badges
- Project details modal
- Sticky navigation
- Active section navigation
- Smooth scrolling
- Resume download/open button
- Email and phone contact buttons
- No database required
