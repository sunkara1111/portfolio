#!/usr/bin/env python3
"""Fail if bachelor's / Tirumala / Cognizant copy remains in the site or resume files."""

from __future__ import annotations

import re
import sys
import zipfile
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FORBIDDEN = [
    (r"b\.?\s*tech", "B.Tech"),
    (r"bachelor", "bachelor's"),
    (r"tirumala", "Tirumala"),
    (r"\beece\b", "EECE"),
    (r"electronics\s*&\s*communication", "Electronics & Communication"),
    (r"electronics\s+and\s+communication", "Electronics and Communication"),
    (r"engineering college", "Engineering College"),
    (r"cognizant", "Cognizant"),
    (r"program analyst", "Program Analyst"),
    (r"undergrad", "undergrad"),
]

REQUIRED = [
    (r"pace university", "Pace University"),
    (r"master of science|\bm\.?s\.?\b.*computer science|computer science", "Pace M.S. Computer Science"),
    (r"linkedin\.com/in/sunkara-dineshgopi-86464919b", "LinkedIn URL"),
    (r"github\.com/sunkara1111", "GitHub URL"),
]

SCAN_GLOBS = [
    "index.html",
    "README.md",
    "public/**/*",
    "src/**/*",
    "scripts/resume_content.py",
    "scripts/generate-resume.py",
]

SKIP_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".woff", ".woff2"}


def decode_pdf_text(path: Path) -> str:
    data = path.read_bytes()
    chunks = []
    pos = 0
    while True:
        start = data.find(b"stream", pos)
        if start < 0:
            break
        header = data[max(0, start - 120) : start]
        if b"FlateDecode" not in header:
            pos = start + 6
            continue
        cursor = start + 6
        if data.startswith(b"\r\n", cursor):
            cursor += 2
        elif data.startswith(b"\n", cursor):
            cursor += 1
        end = data.find(b"endstream", cursor)
        if end < 0:
            break
        raw = data[cursor:end].rstrip(b"\r\n")
        try:
            decoded = zlib.decompress(raw)
        except zlib.error:
            pos = end + 9
            continue
        text = decoded.decode("latin-1", errors="replace")
        strings = re.findall(r"\((?:\\.|[^\\)])*\)", text)
        for item in strings:
            value = (
                item[1:-1]
                .replace("\\n", "\n")
                .replace("\\(", "(")
                .replace("\\)", ")")
                .replace("\\\\", "\\")
            )
            chunks.append(value)
        pos = end + 9
    return "\n".join(chunks)


def decode_docx_text(path: Path) -> str:
    with zipfile.ZipFile(path) as archive:
        xml = archive.read("word/document.xml").decode("utf-8", errors="replace")
    texts = re.findall(r"<w:t[^>]*>(.*?)</w:t>", xml)
    return "\n".join(texts)


def extract_text(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix == ".pdf":
        return decode_pdf_text(path)
    if suffix == ".docx":
        return decode_docx_text(path)
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_bytes().decode("latin-1", errors="replace")


def iter_scan_files():
    seen = set()
    for pattern in SCAN_GLOBS:
        for path in ROOT.glob(pattern):
            if not path.is_file() or path.suffix.lower() in SKIP_SUFFIXES:
                continue
            resolved = path.resolve()
            if resolved in seen:
                continue
            seen.add(resolved)
            yield path


def find_hits(text: str):
    lowered = text.lower()
    hits = []
    for pattern, label in FORBIDDEN:
        if re.search(pattern, lowered):
            hits.append(label)
    return hits


def missing_required(text: str):
    lowered = text.lower()
    missing = []
    for pattern, label in REQUIRED:
        if not re.search(pattern, lowered):
            missing.append(label)
    return missing


def main() -> int:
    errors = []
    resume_files = [
        ROOT / "public" / "resume.pdf",
        ROOT / "public" / "assets" / "Sunkara-Dineshgopi-Resume.docx",
        ROOT / "public" / "assets" / "Sunkara-Dineshgopi-Resume.txt",
    ]

    for path in iter_scan_files():
        text = extract_text(path)
        hits = find_hits(text)
        if hits:
            rel = path.relative_to(ROOT)
            errors.append(f"{rel}: forbidden terms still present: {', '.join(hits)}")

    for path in resume_files:
        if not path.exists():
            errors.append(f"missing resume asset: {path.relative_to(ROOT)}")
            continue
        text = extract_text(path)
        missing = missing_required(text)
        if missing:
            errors.append(f"{path.relative_to(ROOT)}: missing required resume copy: {', '.join(missing)}")

    if errors:
        print("Resume / education content check failed:\n")
        for error in errors:
            print(f"  - {error}")
        return 1

    print("Resume / education content check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
