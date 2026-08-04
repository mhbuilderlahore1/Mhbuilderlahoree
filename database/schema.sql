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
CREATE TABLE pages (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT NOT NULL,

slug TEXT UNIQUE,

content TEXT,

featured_image TEXT,

seo_title TEXT,

meta_description TEXT,

meta_keywords TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE categories (

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL,

slug TEXT UNIQUE,

image TEXT,

description TEXT,

seo_title TEXT,

meta_description TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE posts (

id INTEGER PRIMARY KEY AUTOINCREMENT,

category_id INTEGER,

title TEXT NOT NULL,

slug TEXT UNIQUE,

content TEXT,

featured_image TEXT,

seo_title TEXT,

meta_description TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT,

FOREIGN KEY(category_id) REFERENCES categories(id)

);
CREATE TABLE services (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT NOT NULL,

slug TEXT UNIQUE,

content TEXT,

image TEXT,

button_title TEXT,

button_link TEXT,

seo_title TEXT,

meta_description TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE projects (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT NOT NULL,

slug TEXT UNIQUE,

content TEXT,

image TEXT,

gallery TEXT,

button_title TEXT,

button_link TEXT,

seo_title TEXT,

meta_description TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE products (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT NOT NULL,

slug TEXT UNIQUE,

content TEXT,

image TEXT,

gallery TEXT,

price TEXT,

button_title TEXT,

button_link TEXT,

seo_title TEXT,

meta_description TEXT,

status INTEGER DEFAULT 1,

created_at TEXT,

updated_at TEXT

);

CREATE TABLE gallery (

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT,

image TEXT,

alt_text TEXT,

sort_order INTEGER DEFAULT 0,

created_at TEXT

);
