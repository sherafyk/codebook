# 🧠 Sherafy Codebook

A carefully organized reference of your most–used server‑side, DevOps, and GitHub SSH commands. Everything is grouped into intuitive sections (H2), sub‑sections (H3), and every copy‑ready command begins with an H4 heading, a fenced code block, and a concise quoted explanation.

---

## Table of Contents

*(click to jump)*

* [📡 SSH & Remote Access](#-ssh--remote-access)
  * [Connecting](#connecting)
  * [Privilege Escalation](#privilege-escalation)
* [🔧 System Administration](#-system-administration)

  * [System Updates](#system-updates)
  * [Reboot & Power](#reboot--power)
  * [Resource Monitoring](#resource-monitoring)
  * [Cleanup](#cleanup)
* [🌐 Web Servers (Apache)](#-web-servers-apache)

  * [Installation](#installation)
  * [Service Control](#service-control)
  * [Configuration Checks](#configuration-checks)
* [🐳 Docker](#-docker)

  * [Installation & Service](#installation--service)
  * [Images](#images)
  * [Containers](#containers)
  * [Docker Compose](#docker-compose)
* [🟢 Node.js & pm2](#-nodejs--pm2)

  * [Installation](#installation-1)
  * [Runtime & Process Control](#runtime--process-control)
* [📂 File Transfer & Backups](#-file-transfer--backups)
* [📦 Package Management (apt)](#-package-management-apt)
* [📊 Monitoring & Logs](#-monitoring--logs)
* [🔥 Firewall (UFW) & Networking](#-firewall-ufw--networking)
* [⚙️ Service Management (systemd)](#-service-management-systemd)
* [📝 File Permissions & Ownership](#-file-permissions--ownership)
* [🔪 Process Management](#-process-management)
* [🐘 Database Utilities](#-database-utilities)
* [🛠 Cron Jobs](#-cron-jobs)
* [🌍 ISPConfig Shortcuts](#-ispconfig-shortcuts)
* [📰 WordPress CLI](#-wordpress-cli)
* [🐙 Git / GitHub](#-git--github)
* [🔀 Miscellaneous Tools](#-miscellaneous-tools)

---

## 📡 SSH & Remote Access

### Connecting

#### Connect to VPS Server

```bash
ssh username@your-server-ip
```

> Opens an SSH session to the target host. Replace *username* and *IP* accordingly.

#### Use SSH Key Instead of Password

```bash
ssh -i /path/to/private_key username@your-server-ip
```

> Authenticates with an SSH key for stronger, password‑less log‑ins. Keep private keys secure and permissions at `600`.

### Privilege Escalation

#### Switch to Root

```bash
sudo -i
```

> Starts a root shell so you don’t need to prepend each command with `sudo`. Use sparingly on production servers.

---

## 🔧 System Administration

### System Updates

#### Update & Upgrade Packages

```bash
sudo apt update && sudo apt upgrade -y
```

> Refreshes package lists and installs available updates.

#### Full Distribution Upgrade

```bash
sudo apt full-upgrade -y
```

> Performs a more aggressive upgrade (can include kernel / dependency changes).

#### Upgrade to Next Release (Advanced)

```bash
sudo do-release-upgrade
```

> Moves Ubuntu/Debian to the next release. Backup and test first.

#### Fix Broken Dependencies

```bash
sudo apt --fix-broken install
```

> Attempts to resolve incomplete or conflicting package installs.

### Reboot & Power

#### Reboot Server

```bash
sudo reboot
```

> Gracefully restarts the machine.

#### Shutdown Server

```bash
sudo poweroff
```

> Powers down the system cleanly.

### Resource Monitoring

#### Check Uptime

```bash
uptime
```

> Shows how long the system has been running and current load averages.

#### Top‑Style Monitor (htop)

```bash
htop
```

> Interactive process viewer (install with `sudo apt install htop`).

### Cleanup

#### Remove Unused Packages

```bash
sudo apt autoremove -y
```

> Deletes orphaned dependencies.

#### Clean apt Cache

```bash
sudo apt clean
```

> Clears cached `.deb` packages to free disk space.

---

## 🌐 Web Servers (Apache)

### Installation

#### Install Apache

```bash
sudo apt install apache2 -y
```

> Installs the Apache HTTP server on Debian/Ubuntu.

### Service Control

#### Start Apache

```bash
sudo systemctl start apache2
```

> Launches the web server immediately.

#### Stop Apache

```bash
sudo systemctl stop apache2
```

> Halts the service.

#### Restart Apache

```bash
sudo systemctl restart apache2
```

> Stops and starts Apache—use after config changes.

#### Reload Apache Config

```bash
sudo systemctl reload apache2
```

> Applies config changes without dropping live connections.

#### Enable Apache on Boot

```bash
sudo systemctl enable apache2
```

> Ensures Apache starts automatically after reboot.

#### Disable Apache on Boot

```bash
sudo systemctl disable apache2
```

> Removes Apache from the startup sequence.

### Configuration Checks

#### Apache Config Test

```bash
sudo apache2ctl configtest
```

> Validates syntax before a reload/restart.

---

## 🐳 Docker

### Installation & Service

#### Install Docker Engine

```bash
sudo apt install docker.io -y
```

> Installs Docker from the distro repo.

#### Start Docker Daemon

```bash
sudo systemctl start docker
```

> Begins the Docker service.

#### Enable Docker on Boot

```bash
sudo systemctl enable docker
```

> Auto‑starts Docker after reboot.

#### Check Docker Version

```bash
docker --version
```

> Verifies the client/daemon version.

### Images

#### Pull Image from Hub

```bash
docker pull nginx
```

> Downloads the latest Nginx image.

#### List Downloaded Images

```bash
docker images
```

> Local image inventory.

### Containers

#### Run Container (Detached)

```bash
docker run -d --name mynginx nginx
```

> Spins up *mynginx* in the background.

#### List Running Containers

```bash
docker ps
```

> Shows active containers.

#### List All Containers

```bash
docker ps -a
```

> Includes stopped containers.

#### Stop Container

```bash
docker stop mynginx
```

> Gracefully stops the container.

#### Restart Container

```bash
docker restart mynginx
```

> Stops then starts the container.

#### Remove Container

```bash
docker rm mynginx
```

> Deletes a stopped container.

#### Remove Image

```bash
docker rmi nginx
```

> Frees disk space by deleting the image.

#### Exec into Container

```bash
docker exec -it mynginx bash
```

> Opens an interactive shell inside the container.

#### Build Image from Dockerfile

```bash
docker build -t myapp .
```

> Creates the *myapp* image from the current directory context.

### Docker Compose

#### Start Compose Stack

```bash
docker-compose up -d
```

> Builds (if needed) and runs services in detached mode.

#### Stop & Remove Stack

```bash
docker-compose down
```

> Brings containers down and removes default networks/volumes.

---

## 🟢 Node.js & pm2

### Installation

#### Install Node via NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install node
```

> Installs NVM then the latest LTS Node.js.

#### Check Node Version

```bash
node -v
```

> Prints Node version.

#### Check npm Version

```bash
npm -v
```

> Prints npm version.

### Runtime & Process Control

#### Install pm2 Globally

```bash
sudo npm install -g pm2
```

> Production‑grade process manager.

#### Start App with pm2

```bash
pm2 start app.js
```

> Launches *app.js* under pm2 supervision.

#### List pm2 Processes

```bash
pm2 list
```

> Overview of managed apps.

#### Restart pm2 App

```bash
pm2 restart app
```

> Zero‑downtime restart.

#### Stop pm2 App

```bash
pm2 stop app
```

> Gracefully stops the app.

#### View Live Logs

```bash
pm2 logs app
```

> Streams log output.

#### Save pm2 Process List

```bash
pm2 save
```

> Persists process list for reboot‑survival.

#### Enable pm2 on Boot

```bash
pm2 startup
```

> Generates and installs init script.

---

## 📂 File Transfer & Backups

#### Copy File to Server

```bash
scp /local/path/file username@your-server-ip:/remote/path
```

> Secure copy from local → remote.

#### Copy File from Server

```bash
scp username@your-server-ip:/remote/path/file /local/path
```

> Remote → local.

#### Recursive Directory Copy

```bash
scp -r /local/dir username@your-server-ip:/remote/dir
```

> Copies entire folders.

#### MySQL Dump Database

```bash
mysqldump -u username -p database_name > backup.sql
```

> Creates SQL backup.

#### Restore MySQL Database

```bash
mysql -u username -p database_name < backup.sql
```

> Imports backup into DB.

#### Tar and Compress Directory

```bash
tar -czvf backup.tar.gz /path/to/directory
```

> Creates compressed archive.

#### Extract Compressed Archive

```bash
tar -xzvf backup.tar.gz
```

> Unpacks the archive into the current directory.

---

## 📦 Package Management (apt)

#### Search for Package

```bash
apt search packagename
```

> Finds candidate packages.

#### Install Package

```bash
sudo apt install package-name
```

> Installs desired software.

#### Reinstall Package

```bash
sudo apt install --reinstall package-name
```

> Repairs broken installs.

#### Remove Package

```bash
sudo apt remove package-name
```

> Uninstalls but keeps config.

#### Purge Package

```bash
sudo apt purge package-name
```

> Removes package and configs.

#### List Installed Packages

```bash
dpkg --get-selections
```

> Useful for audits & migrations.

#### Show Package Info

```bash
apt show package-name
```

> Displays description, dependencies, etc.

---

## 📊 Monitoring & Logs

#### View System Journal

```bash
sudo journalctl -xe
```

> Shows recent system‑wide logs with errors highlighted.

#### Follow Apache Error Log

```bash
sudo tail -f /var/log/apache2/error.log
```

> Live‑streams web‑server errors.

#### Follow Syslog

```bash
sudo tail -f /var/log/syslog
```

> Distribution‑agnostic system messages.

#### View Listening Ports

```bash
sudo netstat -tuln | grep LISTEN
```

> Confirms which services are accepting connections.

---

## 🔥 Firewall (UFW) & Networking

#### Allow Port (Example 2501)

```bash
sudo ufw allow 2501/tcp
```

> Opens port 2501 for TCP traffic.

#### Reload UFW

```bash
sudo ufw reload
```

> Applies rule changes.

#### Check Firewall Status

```bash
sudo ufw status
```

> Lists active rules.

#### Check Port Reachability (Localhost)

```bash
curl -I http://127.0.0.1:2501
```

> Quick HTTP response check.

---

## ⚙️ Service Management (systemd)

#### Restart Apache (Web)

```bash
sudo systemctl restart apache2
```

> Common after editing vhosts.

#### Restart PHP‑FPM

```bash
sudo systemctl restart php8.2-fpm
```

> Swap version as needed.

#### Restart ISPConfig Daemon

```bash
sudo systemctl restart ispconfig_server
```

> Reloads panel backend services.

---

## 📝 File Permissions & Ownership

#### Change Ownership (Recursive)

```bash
sudo chown -R web16:client0 /var/www/clients/client0/web16/web
```

> Typical ISPConfig ownership pattern.

#### Change Permissions (Directories 755)

```bash
sudo chmod -R 755 /path/to/directory
```

> Grants execute to owner/group/world for directories.

#### Add Immutable Attribute

```bash
sudo chattr +i /var/www/clients/client0/web17
```

> Protects files from modification—even by root.

#### Remove Immutable Attribute

```bash
sudo chattr -i /var/www/clients/client0/web17
```

> Allows edits again.

---

## 🔪 Process Management

#### Monitor Processes (top)

```bash
top
```

> Quick real‑time CPU / memory view.

#### Kill Process by PID

```bash
kill -9 PID
```

> Force‑terminates the given PID.

#### Find Process by Port

```bash
sudo lsof -i :PORT
```

> Useful when a service refuses to bind.

---

## 🐘 Database Utilities

*See File Transfer & Backups section for dump/restore commands.*

---

## 🛠 Cron Jobs

#### Edit Crontab

```bash
crontab -e
```

> Opens the current user’s job list in `$EDITOR`.

#### List Cron Jobs

```bash
crontab -l
```

> Shows scheduled tasks.

---

## 🌍 ISPConfig Shortcuts

#### Update ISPConfig

```bash
cd /tmp && wget -O ispconfig_update.sh https://get.ispconfig.org && sudo bash ispconfig_update.sh
```

> Official update method; backup first.

#### Restart Core Services

```bash
sudo systemctl restart apache2 postfix dovecot pure-ftpd-mysql
```

> Web, mail, and FTP stack reload.

#### Backup ISPConfig Database

```bash
mysqldump -u root -p dbispconfig > dbispconfig_backup.sql
```

> Always dump before upgrades.

---

## 📰 WordPress CLI

#### Update All Plugins

```bash
wp plugin update --all
```

> Keeps plugins patched.

#### Flush WP Cache

```bash
wp cache flush
```

> Clears transients/object cache.

#### Search & Replace DB Strings

```bash
wp search-replace 'oldurl.com' 'newurl.com'
```

> Essential after domain migrations.

---

## 🐙 Git / GitHub

#### Clone Repository

```bash
git clone https://github.com/yourusername/repo.git
```

> Creates a local working copy.

#### Pull Latest Changes

```bash
git pull origin main
```

> Syncs local *main* with remote.

#### Quick Add / Commit / Push

```bash
git add .
git commit -m "Update notes"
git push origin main
```

> Fast‑path workflow for small updates.

---

## 🔀 Miscellaneous Tools

#### Generate UUID

```bash
uuidgen
```

> Handy for unique filenames or API keys.

#### Show Public IP

```bash
curl ifconfig.me
```

> Confirms external address.
