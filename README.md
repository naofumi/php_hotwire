# PHP Hotwire

Repository for example Hotwire test code that runs on the simplest back-end possible.

The current docker configuration contains the following;

#### web:

Apache with mod_php.
Used to serve static HTML and very simple PHP-generated HTML.

**Note**
Hotwire currently does not consider requests with the \*.php to be HTML requests.
Since we cannot use the \*.php extension, Apache is configured to render \*.html files
as PHP. We do this through the `html/.htaccess` file.

#### db:

MySQL.
Used to test POST requests in Hotwire.

#### phpmyadmin:

PHPMyAdmin.
Used to set up MySQL tables and confirm data.

# Setup

Requirements
1. Docker

Setup
1. `docker compose up`

HDoc files
1. Place HDoc files in `html/`.

Configuration
1. `php.ini` is available at `php/php.ini`.

Accessing the server
1. http://localhost to access the web server.
2. http://localhost:4040 to access PHPMyAdmin\
    (login with host: db, user: root, pass: password)

# Notes

#### HTML URLs

Turbo source.

src/core/url.ts:26 `function isHTML(url: URL)`

This guesses whether the URL will return HTML based on the URL extension.

Extensions that are considered to be HTML are
1. no extension
2. .html, .htm or .xhtml
This means that if you are using any other extension in your requests, TurboDrive won't work.

