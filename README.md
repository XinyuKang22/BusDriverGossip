typescript-seed
===============

An auto-updating, opinionated TypeScript seed project. All killer, no filler.

Background Reading
==================

* https://wiki.agiledigital.com.au/display/FORGE/TypeScript+Guide
* https://wiki.agiledigital.com.au/display/FORGE/Secure+Coding+Practices
* https://wiki.agiledigital.com.au/display/FORGE/Accessibility+Guidance

What's in the box?
==================

* TypeScript, with all strictness compiler options enabled
* ESLint, with an opinionated set of plugins and rules pre-configured for safety
* Prettier
* type-coverage, in strict mode with 100% type coverage enforced (do try to keep this as high as you can)
* Jest, with 100% test coverage enforced (do try to keep this as high as you can)

Some notes on security
======================

* We enforce the lockfile by using `npm ci`, _not_ `npm install` (see https://snyk.io/blog/ten-npm-security-best-practices/)
* We use `--ignore-scripts` to minimize the attack surface (see https://snyk.io/blog/ten-npm-security-best-practices/)
* We use `npm audit` to detect known vulnerabilities in our dependencies (point 9 from the OWASP Top 10)
* We use Dependabot to keep dependencies up-to-date
* We set `"private": true` in package.json to prevent accidental publishing
* TODO We keep our type coverage, test coverage and mutation scores as high as practical to help ensure our code is bullet proof
* TODO We use static analysis services to detect insecure or suspicious coding patterns in our own code
