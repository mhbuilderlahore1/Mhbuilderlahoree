-- =====================================
-- MHBuilder CMS Database Schema v1
-- Cloudflare D1
-- =====================================

CREATE TABLE users (

id INTEGER PRIMARY KEY AUTOINCREMENT,

username TEXT NOT NULL UNIQUE,

password TEXT NOT NULL,

name TEXT,

email TEXT,

role TEXT DEFAULT 'admin',

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE settings (

id INTEGER PRIMARY KEY AUTOINCREMENT,

site_name TEXT,

site_title TEXT,

site_description TEXT,

site_keywords TEXT,

logo TEXT,

favicon TEXT,

phone TEXT,

email TEXT,

address TEXT,

facebook TEXT,

youtube TEXT,

whatsapp TEXT,

google_map TEXT

);
