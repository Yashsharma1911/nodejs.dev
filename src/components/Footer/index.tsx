import { Link } from 'gatsby';
import React from 'react';
import RandomContributor from '../RandomContributor';
import { ReactComponent as GitHubLogo } from '../../images/logos/github-logo.svg';
import { ReactComponent as TwitterLogo } from '../../images/logos/twitter-logo.svg';
import { ReactComponent as SlackLogo } from '../../images/logos/slack-logo.svg';
import './footer.scss';

export interface DropDownState {
  active: number;
  isOpen: boolean;
  shouldDropDownBlur: boolean;
}

function Footer(): JSX.Element {
  return (
    <>
      <section className="bottom-info">
        <RandomContributor />
      </section>
      <footer className="footer">
        <ul className="footer__left">
          <li>
            <Link className="footer__link" to="/trademark">
              Trademark Policy
            </Link>
          </li>
          <li>
            <Link className="footer__link" to="/privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/openjs-foundation/cross-project-council/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct"
            >
              Code of Conduct
            </a>
          </li>
          <li>
            <Link className="footer__link" to="/security">
              Security Reporting
            </Link>
          </li>
          <li>
            <Link className="footer__link" to="/about">
              About
            </Link>
          </li>
          <li>
            <a className="footer__link" href="https://nodejs.org/en/blog/">
              Blog
            </a>
          </li>
        </ul>
        <ul className="footer__right">
          <li>&copy; OpenJS Foundation</li>
          <li>
            <a
              target="_blank"
              href="https://github.com/nodejs/node"
              rel="noopener noreferrer"
              aria-label="Node.js Github Page Link"
            >
              <span className="sr-only">GitHub</span>
              <GitHubLogo fill="var(--color-text-secondary)" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/nodejs"
              rel="noopener noreferrer"
              aria-label="Node.js Twitter Link"
            >
              <TwitterLogo fill="var(--color-text-secondary)" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://slack.openjsf.org"
              rel="noopener noreferrer"
              aria-label="Node.js Slack Link"
            >
              <SlackLogo fill="var(--color-text-secondary)" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
