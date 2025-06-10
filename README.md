# 🧠 Welcome to the Sherafy Codebook

A growing archive of code snippets, automations, and guides — powered by AI and practice.

- [Bash Commands](#bash-commands)
- [Python Snippets](#python-snippets)
- [ISPConfig Tips](#ispconfig-tips)
- [Google Apps Script](#google-apps-script)

---

### Useful Snippets
```
git pull origin main
```
> Pull the latest changes

```
docker-compose down
docker-compose up -d --build
```

> `down` stops and removes the old containers.  
> `up -d --build` rebuilds the image with the new code, starts the containers in the background.
 
 ```
 docker-compose ps
 ```
> Check if it’s running: Look for “Up” in the STATUS column.


### UFW & Ports

#### Check if Port 3000 is Listening**

Run:

```bash
sudo lsof -i :3000
```

or:

```bash
sudo netstat -tuln | grep :3000
```

You should see output like:

```
tcp    0   0 0.0.0.0:3000   0.0.0.0:*   LISTEN
```

If nothing appears, it means **nothing is listening** on port 3000—your container may not be running or bound correctly.

---

#### Allow Port 3000 via UFW**

To allow traffic on port 3000 (e.g., for Node.js apps or Docker containers), run:

```bash
sudo ufw allow 3000/tcp
```

Then confirm with:

```bash
sudo ufw status
```

You should see something like:

```
3000/tcp                   ALLOW       Anywhere
```

---

#### (Optional) Reload UFW**

Usually not necessary, but if in doubt:

```bash
sudo ufw reload
```



## Bash Commands

#### Add or Remove the immutable attribute
SSH in and run (replace the path as needed):  

##### To Remove:    

```bash
sudo chattr -i /var/www/clients/client0/web17
```
> If you get a “Permission denied,” prepend with sudo.

##### To Add back:    

```bash
sudo chattr +i /var/www/clients/client0/web17
```

#### Delete files recursively
```bash
rm -rf /path/to/dir
```
> [!NOTE]
> `-r`: Recursive (includes subdirectories)  
> `-f`: Force (no prompt)  

> [!CAUTION]
> 'This can end real bad...' Triple check the path is correct.  

<br>

### SSH and Server Access

#### Connect to VPS Server

```bash
ssh username@your-server-ip
```

* **Purpose**: Connect to remote VPS (Debian, Ubuntu, etc.)

> [!NOTE]
> Replace `username` and `your-server-ip` accordingly. For most of my VPS projects, I usually SSH into ISPConfig-managed servers or direct root access nodes.

#### Use SSH Key Instead of Password

```bash
ssh -i /path/to/private_key username@your-server-ip
```

* **Purpose**: Use SSH key-based login.
* **Notes**: Safer than password logins. Always keep private keys secure.


<br>

### System Updates & Package Management

#### Update & Upgrade Debian/Ubuntu Server

```bash
sudo apt update && sudo apt upgrade -y
```

* **Purpose**: Regular maintenance updates for VPS servers.
* **Context**: Always run before major deployments, software installs, or server optimizations.

#### Clean Up Unnecessary Packages

```bash
sudo apt autoremove -y
```

* **Purpose**: Free up disk space after package updates.
* **Context**: Housekeeping after major package upgrades or PHP version changes.

#### Full Distribution Upgrade

```bash
sudo apt full-upgrade -y
```

* **Purpose**: Apply more aggressive upgrades that may include kernel and core package changes.
* **Context**: Occasionally used after major Ubuntu/Debian point releases. Use with caution on production servers.

#### Upgrade to Latest Distribution Release (Advanced)

```bash
sudo do-release-upgrade
```

* **Purpose**: Upgrade to the next Ubuntu/Debian release version.
* **Caution**: Only use after backups, testing, and compatibility checks.

#### Check Current OS Version

```bash
lsb_release -a
```

* **Purpose**: Confirm exact OS version for troubleshooting or compatibility checks.

#### Check Kernel Version

```bash
uname -r
```

* **Purpose**: Verify running kernel version after updates.

#### Search for Package

```bash
apt search packagename
```

* **Purpose**: Find installable package names before installing.

#### Install Specific Package

```bash
sudo apt install package-name
```

* **Purpose**: Install any system tool, utility, or dependency.
* **Example**: Install PHP extensions, certbot, mysql-client, python3-pip, etc.

#### Reinstall Package (If Broken)

```bash
sudo apt install --reinstall package-name
```

* **Purpose**: Repair corrupted packages without removing configuration files.

#### Remove Unused Package

```bash
sudo apt remove package-name
```

* **Purpose**: Clean up unneeded packages after decommissioning features.

#### Completely Purge Package

```bash
sudo apt purge package-name
```

* **Purpose**: Fully remove package and associated config files.

#### Clean Out Local Package Cache

```bash
sudo apt clean
```

* **Purpose**: Remove all cached package files to free up disk space.

#### Fix Broken Package Dependencies

```bash
sudo apt --fix-broken install
```

* **Purpose**: Auto-resolve broken dependencies after interrupted installs.

#### List All Installed Packages

```bash
dpkg --get-selections
```

* **Purpose**: Full inventory of installed packages (helpful for server migrations or audit logs).

#### List Recently Installed Packages

```bash
grep "install " /var/log/dpkg.log
```

* **Purpose**: See package changes for recent activity (helps in debugging issues after updates).

#### Show Package Info

```bash
apt show package-name
```

* **Purpose**: Display detailed info including version, dependencies, maintainers, etc.

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
