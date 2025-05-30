# 🧠 Welcome to the Sherafy Codebook

A growing archive of code snippets, automations, and guides — powered by AI and practice.

- [Bash Commands](#bash-commands)
- [Python Snippets](#python-snippets)
- [PHP Quick Reference](#php-quick-reference)
- [ISPConfig Tips](#ispconfig-tips)
- [Google Apps Script](#google-apps-script)
- [Cheat Sheets](#cheat-sheets)

---

## Bash Commands

### Delete files recursively
```bash
rm -rf /path/to/dir
```
> [!NOTE]
> `-r`: Recursive (includes subdirectories)  
> `-f`: Force (no prompt)

### SSH and Server Access

#### Connect to VPS Server

```bash
ssh username@your-server-ip
````

* **Purpose**: Connect to remote VPS (Debian, Ubuntu, etc.)
* **Notes**: Replace `username` and `your-server-ip` accordingly. For most of my VPS projects, I usually SSH into ISPConfig-managed servers or direct root access nodes.

#### Use SSH Key Instead of Password

```bash
ssh -i /path/to/private_key username@your-server-ip
```

* **Purpose**: Use SSH key-based login.
* **Notes**: Safer than password logins. Always keep private keys secure.

---

### System Updates & Package Management

#### Update & Upgrade Debian/Ubuntu Server

```bash
sudo apt update && sudo apt upgrade -y
```

* **Purpose**: Regular maintenance updates for VPS servers.

#### Clean Up Unnecessary Packages

```bash
sudo apt autoremove -y
```

* **Purpose**: Free up disk space after package updates.

---

### Disk Usage & Space Monitoring

#### Check Disk Usage Summary

```bash
df -h
```

* **Purpose**: Show disk space usage in human-readable format.
* **Useful For**: Ensuring VPS does not run out of space during AI pipelines or Docker image pulls.

#### Analyze Directory Sizes

```bash
du -sh *
```

* **Purpose**: Quick check of folder sizes in current directory.

---

### File Transfers & Backups

#### Copy File to Server (Local -> Remote)

```bash
scp /local/path/to/file username@your-server-ip:/remote/path
```

#### Copy File from Server (Remote -> Local)

```bash
scp username@your-server-ip:/remote/path/to/file /local/path
```

* **Purpose**: Fast way to move backup files, logs, export files, or datasets to/from VPS.

#### Full Folder Copy With SCP

```bash
scp -r /local/path username@your-server-ip:/remote/path
```

* **Purpose**: Copy entire directories with contents.

---

### Service Management (Systemd)

#### Restart Apache Web Server

```bash
sudo systemctl restart apache2
```

#### Restart PHP-FPM (if used)

```bash
sudo systemctl restart php8.2-fpm
```

* **Notes**: Replace with your PHP version.

#### Restart ISPConfig Services

```bash
sudo systemctl restart ispconfig_server
```

* **Purpose**: Reload ISPConfig if making config changes on `rna.airis.ca`.

---

### File Permissions & Ownership

#### Change File Ownership (Typical ISPConfig VPS)

```bash
sudo chown -R web16:client0 /var/www/clients/client0/web16/web
```

* **Purpose**: Set ownership correctly for files uploaded manually.
* **Context**: Used often when working with `tools.airis.ca` document generator.

#### Change Permissions

```bash
sudo chmod -R 755 /path/to/directory
```

* **Purpose**: Set directory permissions for proper execution/access.

---

### Tarball Compression for Backups

#### Create a Compressed Archive

```bash
tar -czvf backup.tar.gz /path/to/directory
```

#### Extract Compressed Archive

```bash
tar -xzvf backup.tar.gz
```

* **Use Case**: Backing up `codebook`, `WordPress`, or app deployment folders.

---

### Process Management

#### Monitor Running Processes

```bash
top
```

#### Kill Process by PID

```bash
kill -9 PID
```

* **Purpose**: Force-stop stuck processes or hung deployments.

#### Find Process by Port

```bash
sudo lsof -i :PORT
```

* **Use Case**: Check which process is locking a port during Node or Python testing.

---

### Log File Inspection

#### Tail Last Lines of a Log

```bash
tail -n 100 /path/to/log/file
```

#### Live Follow Log

```bash
tail -f /path/to/log/file
```

* **Use Case**: Monitor Apache logs, PHP errors, or cron jobs.

---

### Firewall Management (UFW)

#### Allow Port (e.g., 8080 for Node.js Testing)

```bash
sudo ufw allow 8080
```

#### Reload UFW

```bash
sudo ufw reload
```

#### Check Firewall Status

```bash
sudo ufw status
```

---

### Cron Jobs

#### Edit Crontab (Per User)

```bash
crontab -e
```

#### List Existing Cron Jobs

```bash
crontab -l
```

* **Use Case**: Automate backups, document generation tasks on `tools.airis.ca`, or scraping tasks.

---

### Database Utilities

#### MySQL Dump Database (Backup)

```bash
mysqldump -u username -p database_name > backup.sql
```

#### Restore MySQL Database

```bash
mysql -u username -p database_name < backup.sql
```

* **Use Case**: Moving WordPress or app databases between servers.

---

### WordPress CLI (wp-cli)

#### Update Plugins via CLI

```bash
wp plugin update --all
```

#### Clear WP Cache

```bash
wp cache flush
```

#### Search & Replace (Database)

```bash
wp search-replace 'oldurl.com' 'newurl.com'
```

* **Purpose**: Very helpful when migrating Elementor templates or AIO sites.

---

### Git / Deployment Housekeeping

#### Clone a Repository

```bash
git clone https://github.com/yourusername/repo.git
```

#### Pull Latest Changes

```bash
git pull origin main
```

#### Quick Add/Commit/Push

```bash
git add .
git commit -m "Update notes"
git push origin main
```

* **Use Case**: Routine updates to `codebook.sherafy.com`, `obj-test` repo, or AIO prototypes.

---

### Nginx / Apache Config Test

#### Apache Config Test

```bash
sudo apachectl configtest
```

#### Nginx Config Test

```bash
sudo nginx -t
```

* **Use Case**: Validate syntax before restarting web servers.

---

### Miscellaneous

### Generate UUID (Handy for API keys / doc IDs)

```bash
uuidgen
```

#### Show Current IP (external)

```bash
curl ifconfig.me
```

* **Purpose**: Validate public IP when troubleshooting routing or DNS.




<br>

## ISPConfig Tips
Common file paths:
`/var/www/clients/client0/web1/`
