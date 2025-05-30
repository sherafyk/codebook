## CODING PROJECT CONTEXT TEMPLATE
This template ensures the LLM has comprehensive context and prompts it to ask follow-up questions rather than making assumptions.  

## Begin prompt

> [!TIP]
> - Fill in all relevant sections before your specific coding request
> - Be as specific as possible with paths, versions, and configurations  
> - Include any unique aspects of your setup that differ from standard installations
> - The final request explicitly asks the LLM to probe for missing context
> - Adapt sections based on your project type (web app, API, desktop app, etc.)

### Copy below this line, edit, and pass to LLM.

---

#### **System Environment & Infrastructure**

* **Operating System:** `e.g., Debian 12, Ubuntu 22.04, Windows 11` 
* **Web Server:** `e.g., Apache 2.4, Nginx 1.18, IIS`
* **Control Panel:** `e.g., ISPConfig, cPanel, Plesk, or none`
* **Domain/URL:** `your-domain.com`
* **Document Root:** `full path to web root`
* **Project Root:** `full path to project directory`
* **Database:** `MySQL 8.0, PostgreSQL 14, SQLite, etc.`
* **Runtime Environment:** `Node.js v18, Python 3.11, PHP 8.2, etc.`

#### **Current Project Architecture**

* **Framework/CMS:** `e.g., Strapi, WordPress, Laravel, Express.js`
* **Frontend Technology:** `React, Vue, vanilla JS, static HTML`
* **Backend Location:** `full path if separate from web root`
* **API Endpoints:** `existing API structure/routes`
* **Build Tools:** `webpack, Vite, npm scripts, etc.`
* **Process Management:** `PM2, systemd, supervisor, etc.`

#### **Network & Security Configuration**

* **SSL/HTTPS Status:** `configured/not configured`
* **Proxy Configuration:** `existing Apache/Nginx proxy rules`
* **Firewall/Ports:** `relevant open ports and restrictions`
* **Authentication:** `JWT, sessions, OAuth, etc.`

#### **Current State & Working Components**

* **What's Currently Working:** `list functional features`
* **What's in Web Directory:** `current contents of document root`
* **Existing Configuration Files:** `relevant config files and their locations`
* **Dependencies Installed:** `key packages, versions`
* **Permission Structure:** `user/group ownership, any permission constraints`

#### **Project Goals & Requirements**

* **Primary Objective:** `what you're trying to accomplish`
* **Specific Features Needed:** `detailed feature requirements`
* **URL Structure Plan:** `how you want routes organized`
* **Performance Requirements:** `any speed/optimization needs`
* **Integration Points:** `APIs, third-party services, etc.`

#### **Known Constraints & Preferences**

* **ISP/Hosting Limitations:** `shared hosting restrictions, etc.`
* **Technology Preferences:** `preferred libraries, patterns, etc.`
* **Compatibility Requirements:** `browser support, mobile, etc.`
* **Deployment Constraints:** `CI/CD, manual deployment, etc.`

#### **Development Context**

* **Development Stage:** `initial setup, mid-development, production ready`
* **Team Size:** `solo, small team, etc.`
* **Maintenance Requirements:** `long-term maintainability needs`
* **Documentation Needs:** `level of commenting/docs required`
  
---

**REQUEST:** Based on this context, I need help with

```
[specific
        coding
              task]
```

To ensure the code works flawlessly on first implementation, please ask me any clarifying questions about missing details, assumptions, or specifics about my setup that could affect the solution. I want to avoid generic examples and ensure the code accounts for my exact environment and constraints.




