import { getDomainFromUrl } from './get-domain-from-url';

import minimist from 'minimist';
import { isHttp } from './normalize-urls';

class MemStorage {
  foundUrls: Set<string>;
  processedUrls: Set<string>;
  programIsFinished: boolean;
  lastInsertUnixTime: number;
  timeoutMs: number;

  crawlerAmount: number;
  originalUrl: string;
  originalDomain: string;

  constructor() {
    this.foundUrls = new Set<string>();
    this.processedUrls = new Set<string>();
    this.programIsFinished = false;
    this.lastInsertUnixTime = 0;
    this.timeoutMs = 10000;

    this.crawlerAmount = 1;
    this.originalUrl = '';
    this.originalDomain = '';
  }

  parseArgv() {
    const argv = minimist(process.argv.slice(2));

    let url = argv._[0];
    let crawlerAmount = argv.n;

    if (typeof url !== 'string') {
      console.error('Please provide a valid URL.');
      return process.exit(1);
    }

    // @todo - improve this validation
    if (!isHttp(url)) url = `https://${url}`;

    this.originalUrl = url;
    this.originalDomain = getDomainFromUrl(this.originalUrl);
    if (typeof crawlerAmount === 'number') this.crawlerAmount = crawlerAmount;
  }
}

export const storage = new MemStorage();
