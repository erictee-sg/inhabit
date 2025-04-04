# Deploying to DreamHost

## Step 1: Access DreamHost Panel
1. Log in to your DreamHost account at https://panel.dreamhost.com/
2. Navigate to the "Websites" section in the sidebar

## Step 2: Set Up Your Domain/Subdomain
1. If you haven't already, add your domain or create a subdomain in the DreamHost panel
2. Note the FTP/SFTP credentials for your domain

## Step 3: Upload Files Using DreamHost File Manager
1. In the DreamHost panel, go to "Websites" > "Files" > "File Manager"
2. Navigate to the directory associated with your domain (usually something like `/home/username/yourdomain.com/`)
3. If there are existing files, you may want to back them up or remove them
4. Click the "Upload" button in the file manager
5. Select all files from your local `dist` folder and upload them
6. Ensure all files maintain their directory structure

## Step 4: Alternative Upload Method (FTP Client)
If you prefer using an FTP client like FileZilla:

1. Download and install FileZilla (or another FTP client)
2. Connect using your DreamHost FTP credentials:
   - Host: ftp.yourdomain.com (or the SFTP host provided by DreamHost)
   - Username: Your DreamHost FTP username
   - Password: Your DreamHost FTP password
   - Port: 21 for FTP or 22 for SFTP
3. Navigate to your website's directory on the remote server
4. Upload all files from your local `dist` folder to this directory

## Step 5: Verify Your Deployment
1. Once all files are uploaded, visit your domain in a web browser
2. Check that all pages, images, and functionality work correctly
3. Test on different devices and browsers to ensure responsiveness

## Troubleshooting Common Issues

### 404 Errors on Page Refresh
If you encounter 404 errors when refreshing pages, you may need to create a `.htaccess` file with the following content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Missing Assets
If images or other assets aren't loading, check:
1. File paths in your code
2. That all files were uploaded with the correct directory structure
3. File permissions (should typically be 644 for files and 755 for directories)

### Contact DreamHost Support
If you encounter issues specific to DreamHost, their support team can provide assistance:
- Support panel: https://panel.dreamhost.com/support
- Knowledge base: https://help.dreamhost.com/
