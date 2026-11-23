#!/usr/bin/env node
"use strict";

/**
 * High-Performance Local HTTP server for Fenncky & FennyGo3
 * Features:
 * - Smart Caching: Images and audio cached in browser (instant 0ms re-reads)
 * - Conditional Requests: 304 Not Modified support via ETag and Last-Modified
 * - Gzip Compression: Instant transfer for HTML, CSS, JS, JSON, and SVG
 * - Byte-range streaming for MP3 audio
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const PORT = Number(process.env.PORT || process.argv[2] || 8000);
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

const COMPRESSIBLE = new Set([
  "text/html; charset=utf-8",
  "application/javascript; charset=utf-8",
  "text/css; charset=utf-8",
  "application/json; charset=utf-8",
  "image/svg+xml"
]);

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  if (pathname === "/") {
    pathname = "/index.html";
  }

  const safePath = path.normalize(path.join(ROOT, pathname));
  if (!safePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(safePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const etag = `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`;
    const lastModified = stat.mtime.toUTCString();

    // Check ETag & If-Modified-Since
    const clientEtag = req.headers["if-none-match"];
    const clientModifiedSince = req.headers["if-modified-since"];
    if (clientEtag === etag || (clientModifiedSince && new Date(clientModifiedSince) >= stat.mtime)) {
      res.writeHead(304, {
        "ETag": etag,
        "Last-Modified": lastModified,
        "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=86400, stale-while-revalidate=86400"
      });
      res.end();
      return;
    }

    // Set appropriate Cache-Control based on resource type
    let cacheControl;
    if (ext === ".html") {
      // HTML: always revalidate so edits show immediately, but allows 304
      cacheControl = "no-cache";
    } else if (ext === ".js" || ext === ".css") {
      // Dev assets: revalidate with 304 if unchanged
      cacheControl = "public, max-age=3600, stale-while-revalidate=86400";
    } else {
      // Images, sounds, fonts: cache in browser for 7 days
      cacheControl = "public, max-age=604800, stale-while-revalidate=86400";
    }

    const headers = {
      "Content-Type": contentType,
      "ETag": etag,
      "Last-Modified": lastModified,
      "Cache-Control": cacheControl,
      "Accept-Ranges": "bytes"
    };

    // Support byte ranges for audio / video
    const rangeHeader = req.headers.range;
    if (rangeHeader && (ext === ".mp3" || ext === ".wav")) {
      const parts = rangeHeader.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunksize = (end - start) + 1;

      headers["Content-Range"] = `bytes ${start}-${end}/${stat.size}`;
      headers["Content-Length"] = chunksize;
      res.writeHead(206, headers);
      fs.createReadStream(safePath, { start, end }).pipe(res);
      return;
    }

    // Gzip compression for text, scripts, styles, SVGs
    const acceptEncoding = req.headers["accept-encoding"] || "";
    if (COMPRESSIBLE.has(contentType) && acceptEncoding.includes("gzip") && stat.size > 1024) {
      headers["Content-Encoding"] = "gzip";
      res.writeHead(200, headers);
      fs.createReadStream(safePath).pipe(zlib.createGzip({ level: 6 })).pipe(res);
      return;
    }

    headers["Content-Length"] = stat.size;
    res.writeHead(200, headers);
    fs.createReadStream(safePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Fenncky optimized server running at http://localhost:${PORT}`);
});
