# "Regex Match & Extract"

> Apply regex patterns to text and return all matches with capture groups and positions. Use when agents need log parsing, data cleaning, pattern detection, or text extraction. Supports flags, named groups, and multiple patterns.

[![License: MIT-0](https://img.shields.io/badge/License-MIT--0-blue.svg)](LICENSE)
[![Claw0x](https://img.shields.io/badge/Powered%20by-Claw0x-orange)](https://claw0x.com)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-green)](https://openclaw.org)

## What is This?

This is a native skill for **OpenClaw** and other AI agents. Skills are modular capabilities that agents can install and use instantly - no complex API setup, no managing multiple provider keys.

Built for OpenClaw, compatible with Claude, GPT-4, and other agent frameworks.

## Installation

### For OpenClaw Users

Simply tell your agent:

```
Install the ""Regex Match & Extract"" skill from Claw0x
```

Or use this connection prompt:

```
Add skill: regex-match
Platform: Claw0x
Get your API key at: https://claw0x.com
```

### For Other Agents (Claude, GPT-4, etc.)

1. Get your free API key at [claw0x.com](https://claw0x.com) (no credit card required)
2. Add to your agent's configuration:
   - Skill name: `regex-match`
   - Endpoint: `https://claw0x.com/v1/call`
   - Auth: Bearer token with your Claw0x API key

### Via CLI

```bash
npx @claw0x/cli add regex-match
```

---


# Regex Match & Extract

Apply regex patterns to text and get all matches with capture groups, named groups, and positions. Supports single pattern or batch mode (up to 20 patterns).

## Use Cases

- Log parsing (extract timestamps, IPs, error codes)
- Data cleaning (find and extract structured data)
- Pattern detection (find emails, URLs, phone numbers)
- Text extraction (pull specific fields from unstructured text)

## Prerequisites

1. **Sign up at [claw0x.com](https://claw0x.com)**
2. **Create API key** in Dashboard

## Pricing

**FREE.** No charge per call.

- Requires Claw0x API key for authentication
- No usage charges (price_per_call = 0)
- Unlimited calls

## Example

**Input**:
```json
{
  "text": "Error at 2024-03-15 14:30:22 from 192.168.1.1: Connection timeout",
  "pattern": "(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2})"
}
```

**Output**:
```json
{
  "matches": [{"match": "2024-03-15 14:30:22", "index": 9, "groups": null, "captures": ["2024-03-15", "14:30:22"]}],
  "total_matches": 1
}
```

## About Claw0x

[Claw0x](https://claw0x.com) is the native skills layer for AI agents.

**GitHub**: [github.com/kennyzir/regex-match](https://github.com/kennyzir/regex-match)


---

## About Claw0x

Claw0x is the native skills layer for AI agents - not just another API marketplace.

**Why Claw0x?**
- **One key, all skills** - Single API key for 50+ production-ready skills
- **Pay only for success** - Failed calls (4xx/5xx) are never charged
- **Built for OpenClaw** - Native integration with the OpenClaw agent framework
- **Zero config** - No upstream API keys to manage, we handle all third-party auth

**For Developers:**
- [Browse all skills](https://claw0x.com/skills)
- [Sell your own skills](https://claw0x.com/docs/sell)
- [API Documentation](https://claw0x.com/docs/api-reference)
- [OpenClaw Integration Guide](https://claw0x.com/docs/openclaw)

## Links

- [Claw0x Platform](https://claw0x.com)
- [OpenClaw Framework](https://openclaw.org)
- [Skill Documentation](https://claw0x.com/skills/regex-match)
